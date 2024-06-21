import SKILL_DATA from "$bp_api/japan/skill_data.json";
import AnimationCancels from "$bp_client/skill_animation_cancels.json";
import { getCategory, getFile, getText } from "./utils";
import allBuffs from "./buffs"
import skillz from "./skillz.json";
import uniq from "lodash/uniq";

// TODO skill videos (might be in Blueprints/UI/SkillTree/MediaPlayer/DT_SkillTreeImageData.uasset ?)
// TODO: add projectile info (connect to attack_data.json? i dont remember)
// TODO: add status ailments
// TODO: connect attackID to attack_data.json
// TODO: add master_attack_modifier_data.json for skill damage

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
            const { BgType, ElementType } = skillData

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
            const desc = getText("master_skill_data_text", skill_desc_array[skill_desc_array.length - 1].desc, lang).split("\n")[0].split("：").pop().split(":").pop()

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
            const desc = fullDescArr[fullDescArr.length - 1].split("：").pop().split(":").pop()
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

    } = SkillInfo.Properties || {}

    const data = {}

    // StatusAilmentPriorityTable

    // TODO: Archer Springboard (#699) does not have stamina cost
    // TODO: Ukemi stamina cost?
    // Spell Caster/Beat Performer NeedParam has a condition that reduces stamina cost of dodge? might be unused

    if (bLaunchSkillPreInput) data.preInputTime = LaunchSkillPreInputTime
    if (bCancelSameSkill) data.chainable = bCancelSameSkill
    if (ConsumeStaminaAmount) data.stCost = ConsumeStaminaAmount // springboard jump
    if (NeedParam?.NeedStamina) data.stCost = NeedParam.NeedStamina // dodge

    // CastLaunchProjectileList
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
    // LoopStamina
    // LoopStaminaModifyList

    // IGNITION
    // ActiveArtsList
    // ComboGaugeModifyDamageUpSettingList

    // BLOOD AXE
    // StatusRowHandle
    // StatusAilmentEffectiveTimeModifyList

    // Follow Bullet
    if (EnableElementAmp) data.activatesFollowBullet = true // Whether a skill activates Follow Bullet projectiles or not

    // Engram Charge
    if (MPRecoverySpeed) data.mpRecoverySpeed = MPRecoverySpeed
    if (MPRecoverySpeedModifySettingList) {
        MPRecoverySpeedModifySettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.mpRecoverySpeed = mod.FloatValue
            }
        })
    }
    if (MPRecoveryAmount) data.mpRecoveryAmount = MPRecoveryAmount
    if (MPRecoveryAmountModifySettingList) {
        MPRecoveryAmountModifySettingList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.mpRecoveryAmount = MPRecoveryAmount + (mod.FloatValue / 10)
            }
        })
    }

    // Spell Caster Dodge
    if (CastMPChangeList) data.dodgeAttackMpRecovery = CastMPChangeList[0].FloatValue

    // Thunder Sphere
    if (AttackRangeH) data.rangeHorizontal = AttackRangeH
    if (AttackRangeV) data.rangeVertical = AttackRangeV
    if (AttackRangeHModifyList) {
        AttackRangeHModifyList.forEach(mod => {
            if (passesConditions(mod.ConditionList, conditionParams)) {
                data.rangeHorizontal = AttackRangeH * ((mod.FloatValue + 100) / 100)
            }
        })
    }
    // LaunchProjectileList
    // LaunchProjectileCycle (how often it attacks)
    // LaunchProjectileCycleModifyList

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

    // Shield Guard
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
            case "ESBConditionCheckType::EquippedPassiveSkill":
                return condition.PassiveArtsID.ID === conditionParams.skillId;
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

        return comparisonResult && !condition.bNot
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

// Not included for now ========================================================================
// bEnableAutoTarget (performer's "Breakdown")
// bImmediateStart (can be cast immediately/used as animation cancel--appears on EnemyStepJumps)
// ElementSettingList (follow bullet sound effects etc)
// bImmediateStartOnlyTrigger, ImmediateStartForbidTags, bRepeatInput (shield guard)