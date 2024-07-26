import SKILL_DATA from "./bp_api/bno/skill_data.json";
import AnimationCancels from "./bp_client/skill_animation_cancels.json";
import BP_BattleStatusManager from "./bp_client/bno/Content/Blueprints/Manager/BP_BattleStatusManager.json" // connects BattleEffectiveGroup to buff icon types
import DT_AbilityDB from "./bp_client/bno/Content/Blueprints/Manager/DT_AbilityDB.json" // connects buff id strings to icons
import BufIconDataTable from "./bp_client/bno/Content/Blueprints/UI/FocusTarget/SubWIdget/BufIconDataTable.json" // contains id strings for buff text
import StatusAlimentNotify from "./bp_client/bno/Content/Text/StatusAlimentNotify.json"
import DT_AttackMasterDataModifierDB from "./bp_client/bno/Content/Blueprints/Manager/DT_AttackMasterDataModifierDB.json" // contains debuffs applied on attack hit (i.e. Celeste Pillar G4)
import { getAssets, getCategory, getFile, getText } from "./utils";

// TODO skill videos (might be in Blueprints/UI/SkillTree/MediaPlayer/DT_SkillTreeImageData.uasset ?)
// TODO: add projectile info (connect to attack_data.json? i dont remember)
// TODO: add status ailments
// TODO: connect attackID to attack_data.json
// TODO: add master_attack_modifier_data.json for skill damage
// TODO: skill_type 14 is PFMスキル中断ステップ "SkillCancelStep"; also add to categories.json

// Put all class status ailments into one object
const StatusAilmentDTs = Object.values(import.meta.glob('./bp_client/bno/Content/Blueprints/Magic/P[^/]+/[^/]+StatusAlimentConfig\.json', { import: "default", eager: true }))
    .flat()
    .reduce((acc, configFile) => {
        acc = { ...acc, ...configFile.Rows }
        return acc
    }, {})

// Put all classes projectile configs into one object
const ProjectileDTs =
    Object.values(import.meta.glob('./bp_client/bno/Content/Blueprints/Magic/P[^/]+/[^/]+ProjectileConfigInfo\.json', { import: "default", eager: true }))
        .flat()
        .reduce((acc, configFile) => {
            // Add additional data such as status ailments and projectile effects
            Object.entries(configFile.Rows).forEach(([projectileId, projectileConfig]) => {
                const StatusAliments = projectileConfig.StatusAliments.map(obj => StatusAilmentDTs[obj.RowName])
                const SelfStatusAliments = projectileConfig.SelfStatusAliments.map(obj => StatusAilmentDTs[obj.RowName])
                const OverlapStatusAlimentConfigs = projectileConfig.OverlapStatusAlimentConfigs.map(wrapper => {
                    return {
                        ...wrapper,
                        OverlapStatusAliments: wrapper.OverlapStatusAliments.map(obj => StatusAilmentDTs[obj.RowName])
                    }
                })

                acc[projectileId] = {
                    ...projectileConfig,
                    StatusAliments,
                    SelfStatusAliments,
                    OverlapStatusAlimentConfigs
                }
            })
            return acc
        }, {})

// Return all skills in a table, { "615": { "IdString": "PowerShot", ... } }
// skillData is the object from the generic skills file for each class, i.e. DT_BLS_SkillData.json
// SkillInfo is the object from the specific skill file, i.e. Skill_BLS_PowerShot.json
const SkillDTs = await getSkillDTs()
async function getSkillDTs() {
    function getIconPath(path) {
        if (!path || path.AssetPathName === "None") return
        return path.AssetPathName.replace("/Game", "").split(".")[0] + ".png"
    }

    const result = {}

    // First, get the generic Class Skills DTS (contains the paths for individual skill DTs for the class)
    const files = Object.values(import.meta.glob('./bp_client/bno/Content/Blueprints/Player/(Skill|PassiveSkill)/*/DT_*.json', { import: "default", eager: true })).flat()

    // Next, map through every skill in every class file and append the skill-specific DTs
    await Promise.all(files.map(async (file) => {
        await Promise.all(Object.entries(file.Rows).map(async ([SkillName, skillData]) => {
            const { BgType, ElementType } = skillData

            // Active skills; append skill-specific DT file
            if (skillData.SkillInfo) {
                const SkillInfoDTPath = skillData.SkillInfo.AssetPathName.replace("/Game", "/Content").split(".")[0] + ".json"
                const SkillInfoFile = await getFile(SkillInfoDTPath)
                const SkillInfo = SkillInfoFile ? SkillInfoFile[1] : undefined

                // Add projectile data
                if (SkillInfo?.Properties?.CastLaunchProjectileList) {
                    SkillInfo.Properties.CastLaunchProjectileList = SkillInfo.Properties.CastLaunchProjectileList.map(projectileList => {
                        const ProjectileHandleList = projectileList.ProjectileHandleList.map(handleList => {
                            const projectileData = ProjectileDTs[handleList.RowName]
                            const { HitChainConfig } = projectileData || {}

                            if (HitChainConfig?.ProjectileConfigHandle1) {
                                HitChainConfig.ProjectileConfigHandle1.projectileData = ProjectileDTs[HitChainConfig.ProjectileConfigHandle1.RowName]
                            }

                            if (HitChainConfig?.ProjectileConfigHandle2) {
                                HitChainConfig.ProjectileConfigHandle2.projectileData = ProjectileDTs[HitChainConfig.ProjectileConfigHandle2.RowName]
                            }

                            return {
                                ...handleList,
                                projectileData
                            }
                        })

                        return {
                            ...projectileList,
                            ProjectileHandleList
                        }
                    })
                }

                // Add charge skill projectile data
                if (SkillInfo?.Properties?.ChargeSkillSetting?.LevelSettingList) {
                    SkillInfo.Properties.ChargeSkillSetting.LevelSettingList = SkillInfo.Properties.ChargeSkillSetting.LevelSettingList.map(projectileList => {
                        const ProjectileHandleList = projectileList.ProjectileHandleList.map(handleList => {
                            const projectileData = ProjectileDTs[handleList.RowName]
                            const { HitChainConfig } = projectileData || {}

                            if (HitChainConfig?.ProjectileConfigHandle1) {
                                HitChainConfig.ProjectileConfigHandle1.projectileData = ProjectileDTs[HitChainConfig.ProjectileConfigHandle1.RowName]
                            }

                            if (HitChainConfig?.ProjectileConfigHandle2) {
                                HitChainConfig.ProjectileConfigHandle2.projectileData = ProjectileDTs[HitChainConfig.ProjectileConfigHandle2.RowName]
                            }

                            // Add data such as buffs that get applied on hit (i.e. Celeste Pillar G4)
                            let attackMasterDataModifier;

                            Object.entries(DT_AttackMasterDataModifierDB[0].Rows).forEach(([key, value]) => {
                                // Remove "RBL_" from "RBL_CelestePillar_AOE_Lv1"
                                if (key.substring(4) === handleList.RowName) {
                                    attackMasterDataModifier = DT_AttackMasterDataModifierDB[0].Rows[key]

                                    if (attackMasterDataModifier?.ModiryParamList) {
                                        attackMasterDataModifier.ModiryParamList = attackMasterDataModifier.ModiryParamList.map(mod => {
                                            const GiveStatusAilmentList = mod.GiveStatusAilmentList.map(obj => {
                                                // use statusAilmentData to prevent overwriting memory after saving a few times..
                                                return {
                                                    ...obj,
                                                    statusAilmentData: StatusAilmentDTs[obj.RowHandle.RowName]
                                                }
                                            })

                                            return {
                                                ...mod,
                                                GiveStatusAilmentList,
                                            }
                                        })
                                    }
                                }
                            })

                            return {
                                ...handleList,
                                projectileData,
                                attackMasterDataModifier
                            }
                        })

                        return {
                            ...projectileList,
                            ProjectileHandleList
                        }
                    })
                }

                // Add status ailment data
                // if (SkillInfo?.Properties?.StatusAilmentPriorityTable) {
                //     SkillInfo.Properties.StatusAilmentPriorityTable.PrioritySection = SkillInfo.Properties.StatusAilmentPriorityTable.PrioritySection.map(section => {
                //         const PriorityDataArray = section.PriorityDataArray.map(obj => {
                //             return {
                //                 ...obj,
                //                 statusAilmentData: StatusAilmentDTs[obj.StatusAilmentRowHandle.RowName]
                //             }
                //         })

                //         return {
                //             ...section,
                //             PriorityDataArray
                //         }
                //     })
                // }

                if (SkillInfo?.Properties?.StatusAilmentPriorityTable) {
                    SkillInfo.Properties.StatusAilmentPriorityTable.PrioritySection = SkillInfo.Properties.StatusAilmentPriorityTable.PrioritySection.map(section => {
                        const PriorityDataArray = section.PriorityDataArray.map(obj => {
                            return {
                                ...obj,
                                statusAilmentData: StatusAilmentDTs[obj.StatusAilmentRowHandle.RowName]
                            }
                        })

                        return {
                            ...section,
                            PriorityDataArray
                        }
                    })
                }

                result[skillData.SkillID] = {
                    SkillName,
                    assets: {
                        icon: getIconPath(skillData.IconAssetList[0]),
                        iconL: getIconPath(skillData.LargeIconAssetList[0]),
                        detailIcon: getIconPath(skillData.DetailIconAsset)
                    },
                    SkillInfo,
                    BgType,
                    ElementType
                }
            }

            // Passive skills
            else {
                const SkillInfoDTPath = skillData.PassiveSkill.AssetPathName.replace("/Game", "/Content").split(".")[0] + ".json"
                const SkillInfoFile = await getFile(SkillInfoDTPath)
                // Append the passive skill DT file if it exists (passive abilities); otherwise it will be added in the getSkillLevels function (alpha/beta/gamma variants)
                const SkillInfo = SkillInfoFile ? SkillInfoFile[1].Properties?.LevelParamModifySettingList : undefined

                result[skillData.PassiveSkillID] = {
                    SkillName,
                    assets: {
                        icon: getIconPath(skillData.Icon),
                        iconL: getIconPath(skillData.LargeIcon),
                    },
                    SkillInfo,
                    BgType,
                    ElementType
                }
            }
        }))
    }))

    return result
}

// Returns background color image and element icon
// TODO: replace hardcoding
async function getExtraIcons(BgType, ElementType, skillType, abilityType) {
    let bgIcon, elementIcon, frameIcon;

    switch (skillType) {
        case 0: // base actions
            bgIcon = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png"
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_Main_normal.png"
            break;
        case 1:
            bgIcon = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png"
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_Sub_normal.png"
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            // SkillTree_SkillIconTactical and SkillTree_SkillIconTacticalAbility are similar, if not identical.. going with the former
            const IconMappingFile = await getFile("/Content/Blueprints/UI/SkillTree/SubWidget/SkillTree_SkillIconTactical.json")
            const wrapperObj = IconMappingFile.find(obj => obj.Type === "SkillTree_SkillIconTactical_C")
            const bgPathObj = wrapperObj.Properties.IconBgImageList.find(obj => Object.keys(obj).includes(BgType))
            const elementPathObj = wrapperObj.Properties.ElementIconImageList.find(obj => Object.keys(obj).includes(ElementType))
            bgIcon = bgPathObj[BgType].ObjectPath.split("/Content")[1].split(".")[0] + ".png"
            if (!ElementType.includes("::None")) {
                elementIcon = elementPathObj[ElementType].ObjectPath.split("/Content")[1].split(".")[0] + ".png"
            }
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_Tactical_normal.png"
            break;
        case 6: // ultimate
            bgIcon = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png"
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_SP_normal.png"
            break;
        case 7: // dodge
            break;
        case 8: // class ability
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_passive_normal.png"
            break;
        case 9: // base ability
            frameIcon = "/UI/SkillTree/UI_SkillTree_IconBG_PassiveAlways_normal.png"
            break;
        case 10: // aerial attack
        case 11: // tactical skill ability
        case 12: // springboard jump
        case 13: // ukemi
            break;
    }

    return {
        bgIcon,
        elementIcon,
        frameIcon
    }
}

// Takes a ModifyValue obj and returns it as a string
function simplifyModifyValue(ModifyValue) {
    switch (ModifyValue.CalcType) {
        case "ESBPassiveStatusParamCalcType::Percent":
            return `${ModifyValue.Value}%`
        case "ESBPassiveStatusParamCalcType::Add":
            return `+${ModifyValue.Value}`
    }
}

async function processSkill(skill, lang) {
    // Only return Normal-variant skills; Alpha, Beta, and Gamma variants are added as skill levels
    if (![1, 2, 3].includes(skill.ability_type)) {
        const { skill_type, ability_type, class_type, skill_id, skill_name } = skill
        const name = getText("master_skill_data_text", skill_name, lang)
        const category = getCategory("Skill", skill_type === 8 ? `${skill_type}_${ability_type}` : skill_type, lang)
        const { SkillInfo, assets, SkillName, BgType, ElementType } = await SkillDTs[skill_id]
        const skillLevels = await getSkillLevels(skill, SkillInfo, lang)
        const animation_cancels = AnimationCancels[skill.skill_id]
        const hiddenSkillData = skillLevels.length < 1 ? getSkillLevelData(SkillInfo, {}) : undefined // for springboard jump, dodge, ukemi, etc.

        return {
            SkillName,
            skill_id,
            skill_type,
            ability_type,
            class_type,
            animation_cancels,
            text: {
                name,
                category,
                type: BgType?.split("::").pop(),
                element: ElementType?.split("::").pop(),
            },
            assets: {
                ...assets,
                ...await getExtraIcons(BgType, ElementType, skill_type, ability_type)
            },
            skillLevels,
            hiddenSkillData,
            ElementType, // required for getSummaries to get proper element
            resolveType: "Skill",
            SkillInfo
        }
    }
}

// Returns each skill grade and variant, including the description, required level, debuffs, etc.
async function getSkillLevels(skill, SkillInfo, lang) {

    function getSkillDesc(id) {
        const str = getText("master_skill_data_text", id, lang)
        if (["α", "β", "γ"].includes(str.charAt(0))) {
            return str.split("\nG1")[0].replace(/G[1-9]:\s*|G[1-9]：|β:\s*|β：|α:\s*|α：/g, '')
        }
        return str.replaceAll(/G[1-9]:\s*|G[1-9]：|β:\s*|β：|α:\s*|α：/g, '$').split("$").pop()
    }

    const variants = await Promise.all(SKILL_DATA
        .filter(s => s.condition_skill_id_1 === skill.skill_id || s.condition_skill_id_2 === skill.skill_id)
        // Order by alpha, beta, gamma...
        .sort((a, b) => a.ability_type - b.ability_type)
        .map(async (variant) => {
            const { skill_desc_array, ability_type } = variant
            const desc = getSkillDesc(skill_desc_array[skill_desc_array.length - 1].desc)

            return {
                skill_id: variant.skill_id,
                ability_type,
                classLevel: variant.class_level,
                text: {
                    desc,
                },
            }
        }))

    async function getVariantsForLevel(level, classLevel) {
        return variants.map(variant => {
            const skillLevelData = getSkillLevelData(SkillInfo, { level, skillId: variant.skill_id })

            // If higher than G3, the variant class level should match the G4n (and higher) class level.
            if (level <= 3) classLevel = variant.classLevel

            return {
                level,
                ...variant,
                classLevel,
                skillLevelData
            }
        })
    }

    return await Promise.all(
        skill.skill_mastery_param.flatMap(async (gradeObj, index) => {
            const { level, condition_class_level } = gradeObj
            const desc = getSkillDesc(skill.skill_desc_array[index].desc)
            const skillLevelData = getSkillLevelData(SkillInfo, { level, skillId: skill.skill_id })
            const ModifyValue = Array.isArray(SkillInfo) ? simplifyModifyValue(SkillInfo.find(obj => obj.SkillLevel === level).ModifyValue) : undefined
            let variants = level >= 3 ? await getVariantsForLevel(level, condition_class_level) : []

            return [
                {
                    level,
                    classLevel: condition_class_level,
                    text: {
                        desc
                    },
                    skillLevelData,
                    // ModifyValue
                },
                ...variants
            ]
        })
    )
}

function getSkillLevelData(SkillInfo, conditionParams) {
    if (!SkillInfo) return

    const {
        RecastTime,
        RecastTimeModifyList,
        MagicPoint,
        MPCostModifyAmountSettingList,
        bLaunchSkillPreInput,
        LaunchSkillPreInputTime,
        bCancelSameSkill,
        ConsumeStaminaAmount,
        NeedParam,
        CastLaunchProjectileList,
        // StatusAilmentPriorityTable,
        ChargeSkillSetting,

        // Springboard Jump
        XYLaunchAmount,
        SheatheZLaunchAmount,
        UnsheatheZLaunchAmount,
        OverrideAirControl,

        // Resonance Shot
        ElementSpreadProjectileSettingList,
        ElementSpreadAccumulationSettingList,
        BattleStatusSpreadSettingList,

        // Shield Guard
        CounterCost,

        // Rampart
        MaxShieldTime,
        AdjustTimeConditionList,

        // Shield Dash
        DashStamina,
        DashStaminaModifySettingList,
        DashEndAttackID,

        // Spell Caster Dodge
        CastMPChangeList,

        // Engram Charge
        MPRecoverySpeed,
        MPRecoverySpeedModifySettingList,
        MPRecoveryAmount,
        MPRecoveryAmountModifySettingList,

        // Follow Bullet
        EnableElementAmp,

        // Blaze Blast
        ActiveTimeMPChangeList,
        ReceiveDamageDownRateSettingList,

        // Thunder Sphere
        AttackRangeH,
        AttackRangeV,
        AttackRangeHModifyList,
        LaunchProjectileCycle,
        LaunchProjectileCycleModifyList,

        // Drain Spiral
        LoopStamina,
        LoopStaminaModifyList,

    } = SkillInfo.Properties || {}

    const data = {}

    // Cooldown
    if (RecastTime) {
        if (RecastTimeModifyList) {
            RecastTimeModifyList.forEach(mod => {
                if (passesConditions(mod.ConditionList, conditionParams)) {
                    data.cooldown = (data.cooldown ?? RecastTime) + mod.ModifyValue
                }
            })
        }

        if (!data.cooldown) data.cooldown = RecastTime
    }

    function getBuffGroupData(buffGroup) {
        let acc = {}

        let { EffectiveTime, ExpirationValue, HateScale, AdditionalEffectiveTimeList, IconType } = buffGroup

        AdditionalEffectiveTimeList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                EffectiveTime += mod.FloatValue
            }
        })

        buffGroup.Parts.map(buff => {
            const { AbilityID, Value1, Value2 } = buff

            // Exclude effects that don't have a name and icon such as ElementReset (Refresh Area)
            if (["ElementReset"].includes(AbilityID.ID)) return acc

            let iconType, name;

            const objContainingIconType = BP_BattleStatusManager[1].Properties.AbilityGroups.find(obj => obj[buffGroup.BattleEffectiveGroup])

            // Try using AbilityID as a key to the IconType
            if (!iconType || iconType === "None") {
                iconType = DT_AbilityDB[0].Rows[AbilityID.ID].IconType.split("::").pop()
            }
            // Try using the BattleEffectiveGroup's IconType
            if ((!iconType || iconType === "None") && objContainingIconType) {
                iconType = objContainingIconType[buffGroup.BattleEffectiveGroup].IconType.split("::").pop()
            }
            // Try using the buffGroup's IconType
            if (!iconType || iconType === "None") {
                iconType = IconType.split("::").pop()
            }

            const BufIconData = BufIconDataTable[0].Rows[iconType]
            if (BufIconData) {
                Object.entries(BufIconData).forEach(([key, value]) => {
                    if (key.includes("TextID_")) {
                        name = StatusAlimentNotify[0].Properties.TextTable.find(obj => obj.Id.IdString === value).Text
                    }
                })
            }

            acc[AbilityID.ID] = {
                Value1,
                Value2,
                duration: EffectiveTime || undefined,
                uses: ExpirationValue || undefined,
                HateScale,
                text: {
                    name
                },
                assets: getAssets("buff", iconType)
            }
        })

        return acc;
    }

    data.statusAilments ??= {}

    if (CastLaunchProjectileList) {
        const statusAilmentsFromProjectiles = CastLaunchProjectileList
            .filter(projectile => passesConditions(projectile.ConditionList, conditionParams))
            .reduce((acc, projectileWrapper) => {
                projectileWrapper.ProjectileHandleList.forEach(projectile => {
                    if (!projectile.projectileData) return acc

                    // Add buffs from projectileData
                    const { StatusAliments, SelfStatusAliments, OverlapStatusAlimentConfigs, HitChainConfig } = projectile.projectileData;

                    const OverlapStatusAliments = OverlapStatusAlimentConfigs?.flatMap(obj => obj.OverlapStatusAliments);

                    [...StatusAliments, ...SelfStatusAliments, ...OverlapStatusAliments].forEach(buffGroup => {
                        acc = { ...acc, ...getBuffGroupData(buffGroup) }
                    })

                    // Add buffs that are nested inside HitChainConfig like Twin Flash's buff/debuff
                    const { ProjectileConfigHandle1, ProjectileConfigHandle2 } = HitChainConfig

                    if (ProjectileConfigHandle1.projectileData) {
                        const { StatusAliments, SelfStatusAliments, OverlapStatusAlimentConfigs } = ProjectileConfigHandle1.projectileData;
                        const OverlapStatusAliments = OverlapStatusAlimentConfigs.flatMap(obj => obj.OverlapStatusAliments);
                        [...StatusAliments, ...SelfStatusAliments, ...OverlapStatusAliments].forEach(buffGroup => {
                            acc = { ...acc, ...getBuffGroupData(buffGroup) }
                        })
                    }

                    if (ProjectileConfigHandle2.projectileData) {
                        const { StatusAliments, SelfStatusAliments, OverlapStatusAlimentConfigs } = ProjectileConfigHandle2.projectileData;
                        const OverlapStatusAliments = OverlapStatusAlimentConfigs.flatMap(obj => obj.OverlapStatusAliments);
                        [...StatusAliments, ...SelfStatusAliments, ...OverlapStatusAliments].forEach(buffGroup => {
                            acc = { ...acc, ...getBuffGroupData(buffGroup) }
                        })
                    }
                })
                return acc
            }, {})
        data.statusAilments = { ...data.statusAilments, ...statusAilmentsFromProjectiles }
    }

    if (ChargeSkillSetting) {
        data.chargeTime = []
        let buffs = {}

        ChargeSkillSetting.LevelSettingList.forEach(level => {
            if (passesConditions(level.ChargeConditionList, conditionParams)) {
                data.chargeTime.push(level.ChargeTime)
            }

            // Add buffs from attackMasterDataModifier
            level.ProjectileHandleList
                .forEach(projectile => {
                    if (projectile.attackMasterDataModifier?.ModiryParamList) {
                        projectile.attackMasterDataModifier.ModiryParamList.forEach(mod => {
                            if (passesConditions(mod.ConditionList, conditionParams)) {
                                mod.GiveStatusAilmentList.forEach(buffGroupWrapper => {
                                    const groupData = getBuffGroupData(buffGroupWrapper.statusAilmentData)
                                    Object.entries(groupData).forEach(([key, buff]) => {
                                        // Might need to add other keys like duration, uses, hatescale as well.
                                        if (!buffs[key]) {
                                            buffs[key] = {
                                                ...buff,
                                                Value1: [buff.Value1],
                                                Value2: [buff.Value2],
                                            }
                                        }
                                        else {
                                            buffs[key] = {
                                                ...buffs[key],
                                                Value1: [...buffs[key].Value1, buff.Value1],
                                                Value2: [...buffs[key].Value2, buff.Value2],
                                            }
                                        }
                                    })
                                })
                            }
                        })
                    }
                })

            data.statusAilments = { ...data.statusAilments, ...buffs }
        })

        if (ChargeSkillSetting.ChargeSpeedModifyList) {
            ChargeSkillSetting.ChargeSpeedModifyList.forEach(mod => {
                if (passesConditions(mod.ConditionList, conditionParams)) {
                    data.chargeTime = data.chargeTime.map(val => val * ((100 - mod.IntValue) / 100))
                }
            })
        }
    }

    // if (StatusAilmentPriorityTable) {
    //     const ailmentsFromPriorityTable = StatusAilmentPriorityTable.PrioritySection
    //         .filter(section => passesConditions(section.ConditionList, conditionParams))
    //         .reduce((acc, section) => {
    //             section.PriorityDataArray.forEach(priorityData => {
    //                 const buffGroup = priorityData.statusAilmentData
    //                 const { EffectiveTime, ExpirationValue, HateScale } = buffGroup
    //                 buffGroup.Parts.map(buff => {
    //                     const { AbilityID, Value1, Value2 } = buff
    //                     acc[AbilityID.ID] = {
    //                         Value1,
    //                         Value2,
    //                         duration: EffectiveTime || undefined,
    //                         uses: ExpirationValue || undefined,
    //                         HateScale
    //                     }
    //                 })
    //             })
    //             return acc
    //         }, {})
    //     data.statusAilments ??= {}
    //     // data.statusAilments = { ...data.statusAilments, ...ailmentsFromPriorityTable }
    // }

    // TODO: Archer Springboard (#699) does not have stamina cost
    // TODO: Ukemi stamina cost?
    // Spell Caster/Beat Performer NeedParam has a condition that reduces stamina cost of dodge? might be unused

    if (ConsumeStaminaAmount) data.stCost = ConsumeStaminaAmount // springboard jump
    if (NeedParam?.NeedStamina) data.stCost = NeedParam.NeedStamina // dodge

    // NeedParam

    // GaugeAmountBaseMultiplier
    // GaugeAmountAddSettingList
    // GaugeAmountWeakPointHitMultiplierSettingList
    // GaugeAmountCriticalHitMultiplier
    // GaugeAmountResetTime
    // MarkerSetting (has marker max range, stamp lifetime, and marker radius)
    // GaugeLevelSettingList (cure arrow details based on BC gauge)
    // MaxGaugeAmount (max BC gauge)
    // SpecialHandleList (blast archer ult projectile)
    // ChargeSkillSetting
    // CastApplyStatusAilmentList
    // AvailableCountSettingList
    // WeakPointHitDamageUpSettingList (strike arrow g4)
    // AttackID
    // StatusAlimentHandleList
    // ProjectileLevelSettingList
    // DamageUpSettingList
    // bCheckCartridgeAmountBeforeCastSkill
    // ConsumeStaminaAmountList (hammer throw and dust vortex)
    // MoveSpeedRateSettingList (hammer throw and dust vortex)
    // AttackLevelSettingList (???)
    // AttackStartStaminaLowerLimit (???)
    // DamageUpRate
    // ReloadSetting (cure cartridge and over reload)
    // ChargeEffectList (particle and sound effects but also ProjectileHandleList)
    // ChargingEffectList (tempest rush particle and sound effects)
    // bCorrespondToPrepareStyle
    // AttackHitVoltageGaugeAddList (heat gauge added per hit)

    // Resonance Shot
    if (ElementSpreadAccumulationSettingList) {
        ElementSpreadAccumulationSettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.eleAccumulationRate = mod.AccumulationRate
                data.eleAccumulationMax = mod.AccumulationMax
            }
        })
    }
    // ElementSpreadProjectileSettingList (data for levels--changes size--and spreading buffs)
    // BattleStatusSpreadSettingList (debuffs spread by beta)

    // SAGITTARRIUS
    // HatTrickWeakPointHitDamageModifySettingList

    // SPRINGBOARD JUMP
    if (XYLaunchAmount) data.jumpDistance = Math.abs(XYLaunchAmount)
    if (SheatheZLaunchAmount) data.jumpHeightSheathed = SheatheZLaunchAmount
    if (UnsheatheZLaunchAmount) data.jumpHeightUnsheathed = UnsheatheZLaunchAmount
    // if (OverrideAirControl) data.overrideAirControl = OverrideAirControl // not sure what this does

    // AERIAL ATTACK
    // TakeBonusHeight
    // FloatingTime
    // FallSpeed

    // DRAIN SPIRAL
    // TODO: find HP recovery amount
    if (LoopStamina) data.stCostPerSpin = LoopStamina
    if (LoopStaminaModifyList) {
        LoopStaminaModifyList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.stCostPerSpin = (data.stCostPerSpin * ((mod.FloatValue + 100) / 100)).toFixed(2)
            }
        })
    }
    // LoopStamina
    // LoopStaminaModifyList

    // IGNITION
    // ActiveArtsList
    // ComboGaugeModifyDamageUpSettingList

    // BLOOD AXE
    // StatusRowHandle
    // StatusAilmentEffectiveTimeModifyList

    // Spell caster EP cost
    if (MagicPoint) {
        // Reduce to one value because reduction can stack
        if (MPCostModifyAmountSettingList) {
            MPCostModifyAmountSettingList.forEach(mod => {
                if (passesConditions(mod.ConditionList, conditionParams)) {
                    data.mpCost = MagicPoint + mod.FloatValue
                }
            })
        }

        if (!data.mpCost) data.mpCost = MagicPoint
    }

    // Engram Charge
    if (MPRecoveryAmount) data.mpRecoveryAmount = MPRecoveryAmount
    if (MPRecoveryAmountModifySettingList) {
        MPRecoveryAmountModifySettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.mpRecoveryAmount = MPRecoveryAmount + (mod.FloatValue / 10)
            }
        })
    }
    if (MPRecoverySpeed) data.mpRecoverySpeed = MPRecoverySpeed
    if (MPRecoverySpeedModifySettingList) {
        MPRecoverySpeedModifySettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.mpRecoverySpeed = mod.FloatValue
            }
        })
    }

    // Spell Caster Dodge
    if (CastMPChangeList) data.dodgeAttackMpRecovery = CastMPChangeList[0].FloatValue

    // Thunder Sphere
    if (LaunchProjectileCycle) data.hitInterval = LaunchProjectileCycle
    if (LaunchProjectileCycleModifyList) {
        let reduction = 0
        LaunchProjectileCycleModifyList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                reduction += mod.FloatValue
            }
        })
        data.hitInterval = LaunchProjectileCycle * ((reduction + 100) / 100)
    }
    if (AttackRangeH) data.rangeHorizontal = AttackRangeH
    if (AttackRangeV) data.rangeVertical = AttackRangeV
    if (AttackRangeHModifyList) {
        AttackRangeHModifyList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.rangeHorizontal = AttackRangeH * ((mod.FloatValue + 100) / 100)
            }
        })
    }
    // LaunchProjectileList (contains attacks)

    // Blaze Blast
    if (ActiveTimeMPChangeList) {
        ActiveTimeMPChangeList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.mpPerSecond = Math.abs(mod.FloatValue)
            }
            if (passesConditions(mod.ConditionList, conditionParams, true)) {
                data.mpPerSecondMoving = data.mpPerSecond - mod.FloatValue
            }
        })
    }
    if (ReceiveDamageDownRateSettingList) {
        ReceiveDamageDownRateSettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.receiveDamageDown = mod.FloatValue
            }
        })
    }

    // Follow Bullet
    if (EnableElementAmp) data.activatesFollowBullet = true // Whether a skill activates Follow Bullet projectiles or not

    // Shield Guard
    // TODO: Find the shield recovery values
    if (typeof CounterCost !== "undefined") data.counterCost = CounterCost

    // Rampart
    if (MaxShieldTime) {
        let result = MaxShieldTime
        if (AdjustTimeConditionList) {
            AdjustTimeConditionList.forEach(mod => {
                if (passesConditions(mod.ConditionList, conditionParams)) {
                    result = MaxShieldTime + mod.AddTimeSec
                }
            })
        }
        data.duration = result
    }
    // NoShieldDamageStatusAilment
    // OverlapAttackProjectile
    // MeleePushBackAttack
    // ShockWaveConditionList (condition for rampart b)
    // GuardSucceededSelfStatusAilmentList (buff from G4 successful guard)

    // Shield Dash
    if (DashStamina) data.stPerSecond = DashStamina
    if (DashStaminaModifySettingList) {
        DashStaminaModifySettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.stPerSecond = (data.stPerSecond * ((mod.FloatValue + 100) / 100)).toFixed(2)
            }
        })
    }
    // DashEndAttackID

    // GLITTER MODE
    // GlitterModeStatus
    // EnergyAmoountMax
    // GaugeBuffList

    // FORTRESS
    // CastShieldDurabilityList (fortress and glitter mode shield gauge recovery)
    // GuardLaunchProjectileList (fortress alpha explosion)
    // GuardLaunchProjectileSpawnSocketName (fortress alpha explosion irrelevant field)
    // GuardLaunchProjectileOffsetFromOwner (fortress alpha explosion coords)
    // GuardLaunchProjectileOffsetFromLargeShield (fortress alpha explosion coords)
    // GuardLaunchProjectileCoolDown
    // NotNeedShieldConditionList (G4)

    // TAUNT
    // NotCorrespondingAttackIDList (skills that won't taunt)
    // GiveStatusAilmentList
    // DeactiveSelfStatusAilmentList

    // HATE COLLECT
    // AttackHitAddShieldDurabilityConditionList
    // AttackHitAddShieldDurabilityRateMax
    // HitStatusAilmentConfigList (hit count)

    // ROUND SHOT
    // BoostCartridgeAmountRequiredForCastSkillSettingList
    // SkillConsumeBoostCartridgeSettingList (??)
    // bConsumeBoostCartridgeAtCastSkill

    // HEAVY SNIPE
    // PowerShotChargeSetting
    // BallShootReturnMoveSpeed

    // ANCHOR DIVE
    // DiveMoveSpeed
    // DiveMoveEndDistanceThreshold
    // CheckAdditionalInputTimeToDiveMove
    // IgnoreAdditionalInputTimeFromDiveMoveStart
    // AdditionalInputCommandList

    // HAMMER THROW
    // ApplyConsumeStaminaScalePassiveArtsID
    // ConsumeStaminaScaleByPassiveArts

    // DUST VORTEX
    // ConsumeStaminaAmountSettingList

    // OVER RELOAD
    // DamageUpRateModifyConditionSettingList
    // DecreaseConsumeBoostCartridgeSetting

    // ROCK BODY
    // HPToShieldDurabilityRate
    // HPToShieldDurabilityRateModifySettingList

    // CURE CARTRIDGE
    // HealProjectileHandleList

    // FAST DRAW
    // QuickShotChargeSetting
    // ApplySelfBuffChargeSetting
    // ApplySelfBuffSettingList

    // PREPARE MODE
    // MarkCountStatusAilmentList
    // MarkCountStatusTimeModifyList
    // MarkCountSettingList
    // AttackUpTime

    // RESONANCE SPEAR
    // LancerMarkSpreadProjectileHandle
    // LancerMarkSpreadSettingList
    // MaxNumSpreadCharacterSettingList
    // SpreadDamageUpRateConditionList
    // SpreadDamageAttackID
    // SpreadDamageUpRate
    // ResetLancerMarkRemainTimeConditionList

    // GENERATE AMP
    // MarkerRangeOverrideSettingList
    // GenerateSpeakerProjectileHandleList

    // ROOTERS SONG
    // AdditionalInputLaunchProjectileList

    const LevelSettingList = SkillInfo.Properties?.ChargeSkillSetting?.LevelSettingList
    // if (LevelSettingList) {
    //     data.Charge = LevelSettingList
    //         .filter((chargeLevel, index) => {
    //             const currentLevelHasConditions = chargeLevel.ChargeConditionList.length > 0
    //             const passesAllConditions = chargeLevel.ChargeConditionList.every(condition => evaluateCondition(condition, getComparisonParam(condition, options)))
    //             const passesPreviousChargeLevelConditions = index > 0 ? LevelSettingList[index - 1].ChargeConditionList.every(condition => evaluateCondition(condition, getComparisonParam(condition, options))) : false

    //             return currentLevelHasConditions ? passesAllConditions : passesPreviousChargeLevelConditions
    //         })
    //         .map(chargeLevel => chargeLevel.ChargeTime)
    // }

    if (bLaunchSkillPreInput) data.preInputTime = LaunchSkillPreInputTime
    if (bCancelSameSkill) data.chainable = bCancelSameSkill

    return data
}

function passesConditions(conditions, conditionParams, customValue = false) {
    // ArrayLogic is always "ESBArrayLogicalOperator::AND", so .every() is fine here
    return conditions.every(condition => {
        let comparisonParam, comparisonResult;

        switch (condition.ConditionCheckType) {
            case "ESBConditionCheckType::AnimTag": // animation playing (i.e. blaze blast)
                return true
            case "ESBConditionCheckType::MGC_MovingFireBurner": // moving or stationary during blaze blast
                return customValue
            case "ESBConditionCheckType::SkillLevel":
            case "ESBConditionCheckType::EquippedPassiveSkillLevel":
                comparisonParam = conditionParams.level;
                break;
            case "ESBConditionCheckType::EquippedPassiveSkill": // skip the condition Relation
                const isCorrectSkillId = condition.PassiveArtsID.ID === conditionParams.skillId
                return condition.bNot ? !isCorrectSkillId : isCorrectSkillId;
            case "ESBConditionCheckType::SkillCastCount": // press skill multiple times i.e. bind slash alpha
                return true
            case "ESBConditionCheckType::SkillChargeLevel":
            // return true
        }

        switch (condition.Relation) {
            case "ESBMagnitudeRelation::Equal":
                comparisonResult = comparisonParam === condition.IntValue
                break;
            case "ESBMagnitudeRelation::Greater":
                comparisonResult = comparisonParam > condition.IntValue
                break;
            case "ESBMagnitudeRelation::GreaterOrEqual":
                comparisonResult = comparisonParam >= condition.IntValue
                break;
            case "ESBMagnitudeRelation::Less":
                comparisonResult = comparisonParam < condition.IntValue
                break;
            case "ESBMagnitudeRelation::LessOrEqual":
                comparisonResult = comparisonParam <= condition.IntValue
                break;
            case "ESBMagnitudeRelation::NotEqual":
                comparisonResult = comparisonParam !== condition.IntValue
                break;
            case "ESBMagnitudeRelation::None":
                comparisonResult = true
                break;
        }

        return condition.bNot ? !comparisonResult : comparisonResult
    })
}

// Buffs come from both {CLASS}ProjectileConfigInfo.json and from the {CLASS}StatusAlimentConfig.json
// Buff icon lists (shown in the in-game skill page ui) is in the generic DT_{CLASS}_SkillData.json

export async function getEntry(id, lang) {
    return await processSkill(SKILL_DATA.find(s => s.skill_id == id), lang)
}

const skills = async (lang) => {
    const processedSkills = []
    for (const skill of SKILL_DATA) {
        const skillData = await processSkill(skill, lang)
        if (skillData) processedSkills.push(skillData)
    }
    return processedSkills
}

export const getSummaries = async (lang) => {
    const skills = []
    for (const skill of SKILL_DATA) {
        const data = await processSkill(skill, lang)
        if (data) {
            skills.push({
                href: `/db/skills/${skill.skill_id}`,
                name: getText("master_skill_data_text", skill.skill_name, lang),
                jpName: getText("master_skill_data_text", skill.skill_name, "ja"),
                icon: data.assets.icon,
                iconL: data.assets.iconL,
                bgIcon: data.assets.bgIcon,
                frameIcon: data.assets.frameIcon,
                elementIcon: data.assets.elementIcon,
                category: "Skill",
                type: skill.skill_type === 8 ? `${skill.skill_type}_${skill.ability_type}` : skill.skill_type,
                class: skill.class_type,
                element: data.ElementType ? { None: 0, Fire: 1, Thunder: 2, Ice: 3, Earth: 4, Light: 5, Darkness: 6 }[data.ElementType.split("::").pop()] : 0,
                level: data.skillLevels[0] ? data.skillLevels[0][0].classLevel : undefined
                
            })
        }
    }
    return skills
}

export default skills

// Log all unique keys inside of SkillInfo.Properties
// uniq(skillz.reduce((acc, curr) => {
//     if (curr.SkillInfo && curr.SkillInfo.Properties) {
//         Object.entries(curr.SkillInfo.Properties).forEach(([key, value]) => {
//             acc.push(key)
//         })
//     }
//     return acc
// }, [])).forEach(key => console.log(key))

// IGNORE THESE KEYS ================================================================
// SkillName (already added)
// bIsDodge
// BowAnimationList
// bRemoveTurnActorRequest
// bIsSpecial (ultimate skill)
// DodgeSucceededCharacterMaterial
// AimBodyStateMachine
// AimOffsetStateMachine
// LeadStateMachine
// CurveMoveSettingList
// HoldArrowSettingList (contains sound asset paths for holding down a skill)
// bRemoveHoldArrowWhenCastSkill
// bRecastTimeModifyDuringRecast
// bHideCastLog
// OverrideAnimationSetForMainSM
// InActionEffectSettingList (has sound assets)
// ConsumeComboAttackConsumeTiming (twin striker; at what point does the combo gauge get consumed; all of them are StartSkill)
// CastApplyStatusAlimentIndexList
// OptionLocationList (follow bullet sound assets)
// IdlingEffect (spell caster sound assets)
// OptionLocationInterpSpeed (follow bullet)
// LocationOffset
// FiringCameraRotationSpeedLimit
// FireShotRotationSpeedLimitYaw
// FireShotRotationSpeedLimitPitch
// FireShotEffect (blaze blast particles)
// FireStringEffect (blaze blast particles)
// FireShotMoveCurve (blaze blast particles)
// bNeedShield (needs shield to be used)
// RelativeLocation
// LargeShieldGuardConfig
// ChargeSettingList (rampart sound effects, "NeedEnergy", and particles)
// GuardEffectSettingList (rampart sound effects and particles)
// SpecialHitEffectList (sound effects and particles)
// GuardSuccessEffect (fortress particle effects)
// ReturnBallEffectSetting (round shot sound effects)
// bShowBallReturnTimingEffect
// BallReturnTimingEffectSetting (round shot sound effect)
// bPlayShortageCartridgeSound (heavy smasher play sound effect if not enough rounds)
// ShortageCartridgeSound (not enough rounds sound effect)
// bShowReturnBallEffect
// bShowBeamEffectToBall (??)
// BeamEmitterTemplateToBall (ball particle effect)
// BeamStartSocketName (socket name; irrelevant)
// LevelUpEffectList (dust vortex and hammer throw particle and sound effects)
// EffectOnWeaponBallSetting (over reload ball particle effect)
// DefenseGuardConfig (irrelevant values)
// bHideSpearByLaunchProjectile
// RemoveTurnActorRequestConditionList
// SpreadHitEffect (resonance spear sound and particle effect)
// MaxChargeEffectList (soul combo particle and sound effects)
// SkillStateMachine (animations)

// Not included for now ========================================================================
// bEnableAutoTarget (performer's "Breakdown")
// bImmediateStart (can be cast immediately/used as animation cancel--appears on EnemyStepJumps)
// ElementSettingList (follow bullet sound effects etc)
// bImmediateStartOnlyTrigger, ImmediateStartForbidTags, bRepeatInput (shield guard)