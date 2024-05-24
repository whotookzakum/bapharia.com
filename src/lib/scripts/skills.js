import SKILL_DATA from "$bp_api/japan/skill_data.json";
import { getCategory, getFile, getText } from "./utils";
import allBuffs from "./buffs"
import skillz from "./skillz.json";
import uniq from "lodash/uniq";

// TODO skill videos
// TODO: add projectile info (connect to attack_data.json? i dont remember)
// TODO: add status ailments
// TODO: connect attackID to attack_data.json
// TODO: add master_attack_modifier_data.json for skill damage

// Only return relevant data from the client
function getRelevantClientDataForSkill(skillId) {
    const skillData = getClientSkillData(skillId)
    if (skillData) {
        const { SkillName, BgType, ElementType, ExpansionElementType, Properties } = skillData
        return {
            SkillName,
            BgType: BgType.replace("ESBSkillIconBgType::", ""),
            ElementType: ElementType.replace("ESBSkillElementIconType::", ""),
            ExpansionElementType,
            Properties
        }
    }
}

function getAllBuffsForSkill(skillId) {
    const skillData = getClientSkillData(skillId)
    if (skillData) {
        return skillData.BufIconMap.reduce((acc, curr) => {
            Object.entries(curr).forEach(([skillLevel, value]) => {
                const buffsData = value.BuffList.map(buffTextId => {
                    const details = allBuffs.find(b => b.textId === buffTextId)
                    return {
                        buffTextId,
                        ...details
                    }
                })

                acc[skillLevel] = buffsData
            })
            return acc
        }, {})
    }
}

function getBuffsForSkillLevel(skill, skillLevel) {
    if (!skillLevel) return []
    const allBuffs = getAllBuffsForSkill(skill.skill_id)
    return allBuffs ? allBuffs[skillLevel] : []
}

function getAllAbilitiesForSkill(skillId) {
    return SKILL_DATA
        .filter(skill => skill.condition_skill_id_1 === skillId || skill.condition_skill_id_2 === skillId)
}

function getAbilitiesForSkillLevel(skill, skillLevel) {
    if (!skillLevel) return []

    const allAbilities = getAllAbilitiesForSkill(skill.skill_id)

    return allAbilities
        .filter(abil =>
            abil.condition_skill_level_1 === skillLevel
            || abil.condition_skill_level_2 === skillLevel)
        .map(abil => {
            const client_data = getRelevantClientDataForSkill(abil.skill_id)
            const ability_levels = getSkillLevelsData(abil)

            return {
                id: abil.skill_id,
                ability_type: abil.ability_type,
                class_level: abil.class_level,
                ability_levels,
                // client_data,
            }
        })
        .sort((a, b) => a.ability_type - b.ability_type)
}

// Merges skill level data and abilities
function getSkillLevelsWithAbilities(skill) {
    const paramsArray = getSkillLevelsData(skill)
    return paramsArray.map(params => {
        const abilities = getAbilitiesForSkillLevel(skill, params.level)
        return {
            ...params,
            abilities
        }
    })
}

// Merges skill_desc_array, skill_mastery_param, and buffs
function getSkillLevelsData(skill) {
    return skill.skill_desc_array.map((descObj, index) => {
        const mastery_param = skill.skill_mastery_param ? skill.skill_mastery_param[index] : null
        const fullDesc = getText("master_skill_data_text", descObj.desc)
        const desc = getLevelDesc(fullDesc, index)
        const buffs = getBuffsForSkillLevel(skill, mastery_param?.level)

        return {
            ...mastery_param,
            desc,
            buffs
        }
    })
}


const SkillDTs = await getSkillDTs()

// Return all skills in a table, { "615": { "IdString": "PowerShot", ... } }
// skillData is the object from the generic skills file for each class, i.e. DT_BLS_SkillData.json
// SkillInfo is the object from the specific skill file, i.e. Skill_BLS_PowerShot.json
async function getSkillDTs() {
    function getIconPath(path) {
        if (!path || path.AssetPathName === "None") return
        return path.AssetPathName.replace("/Game", "").split(".")[0] + ".png"
    }

    const result = {}

    // First, get the generic Class Skills DTS (contains the paths for individual skill DTs for the class)
    const files = Object.values(import.meta.glob('/src/bp_client/japan/Content/Blueprints/Player/(Skill|PassiveSkill)/*/DT_*.json', { import: "default", eager: true })).flat()

    // Next, map through every skill in every class file and append the skill-specific DTs
    await Promise.all(files.map(async (file) => {
        await Promise.all(Object.entries(file.Rows).map(async ([SkillName, skillData]) => {

            // Active skills; append skill-specific DT file
            if (skillData.SkillInfo) {
                const SkillInfoDTPath = skillData.SkillInfo.AssetPathName.replace("/Game", "/Content").split(".")[0] + ".json"
                const SkillInfoFile = await getFile(SkillInfoDTPath)
                const SkillInfo = SkillInfoFile ? SkillInfoFile[1] : undefined

                result[skillData.SkillID] = {
                    SkillName,
                    assets: {
                        icon: getIconPath(skillData.IconAssetList[0]),
                        iconL: getIconPath(skillData.LargeIconAssetList[0]),
                        detailIcon: getIconPath(skillData.DetailIconAsset)
                    },
                    SkillInfo,
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
                    SkillInfo
                }
            }
        }))
    }))

    return result
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
        const { SkillInfo, assets, SkillName } = await SkillDTs[skill_id]
        const skillLevels = await getSkillLevels(skill, SkillInfo, lang)

        return {
            SkillName,
            skill_id,
            skill_type,
            ability_type,
            class_type,
            text: {
                name,
                category
            },
            assets,
            skillLevels,
            SkillInfo
        }
    }
}

// Returns each skill grade and variant, including the description, required level, debuffs, etc.
async function getSkillLevels(skill, SkillInfo, lang) {

    const variants = await Promise.all(SKILL_DATA
        .filter(s => s.condition_skill_id_1 === skill.skill_id || s.condition_skill_id_2 === skill.skill_id)
        // Order by alpha, beta, gamma...
        .sort((a, b) => a.ability_type - b.ability_type)
        .map(async (variant) => {
            const { skill_desc_array, ability_type } = variant
            const desc = getText("master_skill_data_text", skill_desc_array[skill_desc_array.length - 1].desc, lang).split("\n")[0].split("：")[1]

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
            const fullDescArr = getText("master_skill_data_text", skill.skill_desc_array[index].desc, lang).split("\n")
            const desc = fullDescArr[fullDescArr.length - 1].split("：")[1]
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

    // StatusAilmentPriorityTable
    // bLaunchSkillPreInput
    // LaunchSkillPreInputTime
    // CastLaunchProjectileList
    // NeedParam
    // bCancelSameSkill
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
    // ConsumeStaminaAmount
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

    // RESONANCE SHOT
    // ElementSpreadProjectileSettingList
    // ElementSpreadAccumulationSettingList
    // BattleStatusSpreadSettingList

    // SAGITTARRIUS
    // HatTrickWeakPointHitDamageModifySettingList

    // SPRINGBOARD JUMP
    // XYLaunchAmount
    // SheatheZLaunchAmount
    // UnsheatheZLaunchAmount
    // OverrideAirControl

    // SKILL CAN BE CAST IMMEDIATELY (CAN BE USED AS AN ANIMATION CANCEL)
    // bImmediateStart

    // AERIAL ATTACK
    // TakeBonusHeight
    // FloatingTime
    // FallSpeed

    // DRAIN SPIRAL
    // LoopStamina
    // LoopStaminaModifyList

    // IGNITION
    // ActiveArtsList
    // ComboGaugeModifyDamageUpSettingList

    // BLOOD AXE
    // StatusRowHandle
    // StatusAilmentEffectiveTimeModifyList

    // FOLLOW BULLET
    // EnableElementAmp
    // ElementSettingList

    // ENGRAM CHARGE
    // MPRecoverySpeed
    // MPRecoverySpeedModifySettingList
    // MPRecoveryAmount
    // MPRecoveryAmountModifySettingList

    // SPELL CASTER DODGE
    // CastMPChangeList

    // THUNDER SPHERE
    // LaunchProjectileList
    // LaunchProjectileCycle (how often it attacks)
    // LaunchProjectileCycleModifyList
    // AttackRangeH
    // AttackRangeHModifyList
    // AttackRangeV

    // BLAZE BLAST
    // ActiveTimeMPChangeList
    // ReceiveDamageDownRateSettingList

    // SHIELD GUARD
    // CounterCost
    // bImmediateStartOnlyTrigger
    // ImmediateStartForbidTags
    // bRepeatInput

    // RAMPART
    // MaxShieldTime
    // AdjustTimeConditionList
    // NoShieldDamageStatusAilment
    // OverlapAttackProjectile
    // MeleePushBackAttack
    // ShockWaveConditionList (condition for rampart b)
    // GuardSucceededSelfStatusAilmentList (buff from G4 successful guard)

    // SHIELD DASH
    // DashStamina
    // DashStaminaModifySettingList
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
    // bEnableAutoTarget

    // ROOTERS SONG
    // AdditionalInputLaunchProjectileList

    const { RecastTime,  RecastTimeModifyList, MagicPoint, MPCostModifyAmountSettingList } = SkillInfo.Properties || {}

    const data = {}

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

    // Cooldown
    if (RecastTime) {
        if (RecastTimeModifyList) {
            RecastTimeModifyList.forEach(mod => {
                if (passesConditions(mod.ConditionList, conditionParams)) {
                    data.cooldown = RecastTime + mod.ModifyValue
                }
            })
        }

        if (!data.cooldown) data.cooldown = RecastTime
    }

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

    return data
}

function passesConditions(conditions, conditionParams) {
    // ArrayLogic is always "ESBArrayLogicalOperator::AND", so .every() is fine here
    return conditions.every(condition => {
        let comparisonParam;

        switch (condition.ConditionCheckType) {
            case "ESBConditionCheckType::SkillLevel":
            case "ESBConditionCheckType::EquippedPassiveSkillLevel":
                comparisonParam = conditionParams.level;
                break;
            case "ESBConditionCheckType::EquippedPassiveSkill":
                return condition.PassiveArtsID.ID === conditionParams.skillId;
            case "ESBConditionCheckType::SkillChargeLevel":
                // return true
        }

        switch (condition.Relation) {
            case "ESBMagnitudeRelation::Equal":
                return comparisonParam === condition.IntValue
            case "ESBMagnitudeRelation::Greater":
                return comparisonParam > condition.IntValue
            case "ESBMagnitudeRelation::GreaterOrEqual":
                return comparisonParam >= condition.IntValue
            case "ESBMagnitudeRelation::Less":
                return comparisonParam < condition.IntValue
            case "ESBMagnitudeRelation::LessOrEqual":
                return comparisonParam <= condition.IntValue
            case "ESBMagnitudeRelation::NotEqual":
                return comparisonParam !== condition.IntValue
            case "ESBMagnitudeRelation::None":
                return true
        }
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




