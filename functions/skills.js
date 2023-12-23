import skillsData from "$bp_server/japan/skill_data.json";
import { getText } from "./utils";
import allBuffs from "./buffs"

// TODO skill videos
// TODO buffs and debuffs applied
// TODO cooldown
// TODO check if skill types (A, B, D) are on client


const fetchClientFiles = async () => {
    const clientFiles = import.meta.glob('/bp_client/japan/Content/Blueprints/Player/Skill/*/*.json')
    const iterableItemFiles = Object.entries(clientFiles)

    const data = await Promise.all(
        iterableItemFiles.map(async ([path, resolver]) => {
            const data = await resolver()
            return data.default
        })
    )

    return data.flat().filter(dataObj => dataObj.Type !== "BlueprintGeneratedClass")
}

const clientData = await fetchClientFiles()

const clientDataTableObjs = clientData.filter(dataObj => dataObj.Type === "DataTable")

const clientSkillDataObjs = clientData.filter(dataObj => dataObj.Type.includes("Skill_"))

const clientSkillsData = clientDataTableObjs
    // Format from an Array of Objects of Objects, to an Array of Objects
    .reduce((acc, curr) => {
        Object.entries(curr.Rows).forEach(([key, value]) => {
            acc.push({ SkillName: key, ...value })
        })
        return acc
    }, [])
    // Append detailed skill data from other files
    .map(skill => {
        const typeName = skill.SkillInfo?.AssetPathName.split(".").pop()
        const details = clientSkillDataObjs.find(obj => obj.Type === typeName)
        return {
            ...skill,
            ...details
        }
    })


const skills = skillsData.reduce((skillsArray, skill) => {
    const { skill_id, skill_name, class_type, class_level, skill_type, ability_type, condition_skill_id_1, condition_skill_level_1, condition_skill_id_2, condition_skill_level_2, cannot_learn_skill_id, switch_skill_id, is_default_skill, is_sub_skill } = skill

    const client_data = getRelevantClientDataForSkill(skill_id)
    const name = getText("master_skill_data_text", skill_name)
    const subcategory_name = getSubcategory(skill_type, ability_type)
    const skill_levels = getSkillLevelsWithAbilities(skill)

    // ability_type 1: α, ability_type 2: β, ability_type 3: class-shared ability
    if (ability_type === 0 || ability_type === 100) {
        skillsArray.push({
            id: skill_id,
            name,
            class_type,
            class_level,
            skill_type,
            skill_levels,
            ability_type,
            subcategory_name,
            client_data,
        });
    }

    return skillsArray;
}, []);


// Get all data for use in other places
function getClientSkillData(id) {
    return clientSkillsData.find(sk => sk.SkillID === id)
}

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
    return skillsData
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

// Iterate over locales in the "desc" object and format
function getLevelDesc(fullDesc, index) {
    const desc = {}
    Object.keys(fullDesc).forEach(lang => {
        desc[lang] = fullDesc[lang].split("\n")[index]?.replace("\r", "")
    })
    return desc
}

function getSubcategory(skillType, abilityType) {
    switch (skillType) {
        case 0: // LMB (main action)
        case 1: // RMB (class/sub action)
            return {
                ja_JP: "ベースアクション",
                en_US: "Basic Attack"
            }
        case 2: // Tac skill attack
        case 3: // Tac skill attack
        case 4: // Tac skill attack
        case 5:  // Tac skill buff
            return {
                ja_JP: "タクティカルスキル",
                en_US: "Tactical Skill",
            }
        case 6:
            return {
                ja_JP: "ULTスキル",
                en_US: "Ultimate Attack",
            }
        case 7:
            return {
                ja_JP: "回避",
                en_US: "Dodge",
            }
        case 8:
            if (abilityType === 100) {
                return {
                    ja_JP: "クラス共有アビリティ",
                    en_US: "Class-shared Ability",
                }
            } else {
                return {
                    ja_JP: "クラス限定アビリティ",
                    en_US: "Class-specific Ability",
                }
            }
        case 9: // All classes
            return {
                ja_JP: "ベースアビリティ",
                en_US: "Base Ability",
            }
        case 10:
            return {
                ja_JP: "エリアル攻撃",
                en_US: "Aerial Attack",
            }
        case 11: // alpha and beta
            return {
                ja_JP: "タクティカルスキルアビリティ",
                en_US: "Tactical Skill Ability",
            }
        case 12:
            return {
                ja_JP: "踏み台ジャンプ",
                en_US: "Springboard Jump",
            }
        case 13:
            return {
                ja_JP: "受け身",
                en_US: "Ukemi",
            }
    }
}

export default skills