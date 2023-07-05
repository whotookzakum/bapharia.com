import skillsData from "$bp_server/japan/skill_data.json";
import { getText } from "./utils";

// TODO skill videos
// TODO buffs and debuffs applied
// TODO cooldown
// TODO is class-shared ability ?
// TODO check if skill types (A, B, D) are on client

function getClassThumbnail(classId) {
    // Class 6 = Blast Archer
    // Class 7 = Twin Striker
    // Class 11 = Spell Caster
    // Class 12 = Aegis Fighter
    // Class 19 = Heavy Smasher 
    if (classId === 0) return `/UI/Icon/Class/UI_IconClass_All.png`
    if (classId === 20) return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    if (classId < 10) return `/UI/Icon/Class/UI_IconClass_0${classId}.png`
    return `/UI/Icon/Class/UI_IconClass_${classId}.png`
}

const skillTypes = {
    // A: Attack (Red)
    // B: Buff (Purple)
    // D: Debuff (Green)
    // R: Recovery (Blue) 

    A: [
        615, 608, 620,
        710, 712, 721, 730, 731,
        1106, 1115, 1119, 1118, 1114, 1121,
        1232, 1231, 1207, 1230, 1211,
        1910, 1911, 1912, 1920, 1921, 1922
    ],
    A_B: [
        732,
        1103, 1113
    ],
    A_D: [
        602, 623, 619, 617, 618,
        1117, 1104,
        1220, 1222,
        1930, 1931, 1932
    ],
    A_R: [
        711, 714, 715
    ],
    B: [
        609,
        713, 716, 723,
        1110, 1116,
        1205, 1206, 1223,
        1923, 1913
    ],
    B_D: [
        621
    ],
    D: [
        1212
    ],
    R: [
        613, 622,
        1233,
        1933
    ],
    R_B: [],
    R_D: []
}

const skillElements = {
    light: [
        1230, 1231, 1232
    ],
    earth: [
        623,
        1920, 1930, 1911, 1932
    ],
    fire: [
        730, 731, 732,
        1103, 1113, 1119
    ],
    thunder: [
        1106, 1115, 1118
    ],
    ice: [
        1117, 1104, 1114
    ]
}

function getSkillTypeImg(skill) {
    if (skillTypes.A.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png`
    if (skillTypes.A_B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_B.png`
    if (skillTypes.A_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png`
    if (skillTypes.A_R.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_R.png`
    if (skillTypes.B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B.png`
    if (skillTypes.B_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B_D.png`
    if (skillTypes.D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_D.png`
    if (skillTypes.R.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R.png`
    if (skillTypes.R_B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_B.png`
    if (skillTypes.R_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_D.png`
    return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png`
}

function getElementImg(skill) {
    if (skillElements.fire.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_1.png`
    if (skillElements.thunder.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_2.png`
    if (skillElements.ice.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_3.png`
    if (skillElements.earth.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_4.png`
    if (skillElements.light.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_5.png`
    return `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
}

const skills = skillsData.reduce((acc, curr) => {
    const { condition_skill_id_1 } = curr;

    if (condition_skill_id_1) {
        // If skill has a condition_skill_id_1, add it to the abilities array for that skill_id
        const targetSkill = acc.find(skill => skill.skill_id === condition_skill_id_1);
        if (targetSkill) {

            // Get ability text
            let abilityText = getText("master_skill_data_text", curr.skill_desc_array[0].desc)
            curr.desc = {
                ja_JP: abilityText.ja_JP.split("\n")[0],
                en_US: abilityText.en_US.split("\n")[0]
            }

            // Add ability inside of its corresponding skill
            targetSkill.abilities?.push(curr);
            // targetSkill.abilities?.sort((a, b) => a.ability_type - b.ability_type)
            return acc;
        }
    }

    // If skill does not have a condition_skill_id_1, add it to the result array
    const name = getText("master_skill_data_text", curr.skill_name)
    const desc = getText("master_skill_data_text", curr.skill_desc_array[curr.skill_desc_array.length - 1].desc)
    const thumb = getThumbnail(curr.skill_type, curr.skill_id, curr.class_type)
    const classImg = getClassThumbnail(curr.class_type)
    const skillBackgroundImg = getSkillTypeImg(curr)
    const elementImg = getElementImg(curr)

    acc.push({
        ...curr,
        id: `${curr.skill_id}`,
        name,
        desc,
        thumb,
        classImg,
        abilities: [],
        skillBackgroundImg,
        elementImg,
        category: getCategory(curr.skill_type),
        entryTypes: ["Skill"]
    });

    return acc;
}, []);

// One pass to sort abilities in order of a, b, etc.
skills.forEach(skill => {
    if (skill.abilities.length > 0) {
        skill.abilities.sort((a, b) => a.ability_type - b.ability_type)
    }
})

function getThumbnail(skillType, id, classType) {
    // Dummy Action
    if (id === 102) return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    switch (skillType) {
        case 0: // && skill.is_default_skill
            return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`
        case 1: // && skill.is_default_skill
            return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`
        case 2:
        case 3:
        case 4:
        case 5:
            return `/UI/Icon/PlayerSkill/Class${classType}/UI_PlayerSkill_${id}.png`
        case 6:
            return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`
        case 8:
            return `/UI/Icon/PlayerAbility/Class/Class${classType}/UI_PlayerAbilityC_${id}.png`
        case 9:
            return `/UI/Icon/PlayerAbility/Base/Class${classType}/UI_PlayerAbilityB_${id}.png`
        case 7: // Dodge
        case 10: // Aerial attack
        case 11: // ???
        case 12: // Springboard jump
        case 13: // Ukemi 
        default:
            return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    }

}

function getCategory(skillType) {
    switch (skillType) {
        case 0: // LMB
        case 1: // RMB
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
            return {
                ja_JP: "クラスアビリティ",
                en_US: "Class Ability",
            }
        case 9:
            return {
                ja_JP: "ベースアビリティ",
                en_US: "Base Ability", // All classes
            }
        case 10:
            return {
                ja_JP: "エリアル攻撃",
                en_US: "Aerial Attack",
            }
        case 11:
            return {
                ja_JP: "？？？",
                en_US: "???",
            }
        case 12:
            return {
                ja_JP: "踏み台ジャンプ",
                en_US: "Springboard Jump",
            }
        case 13:
            return {
                ja_JP: "受け身",
                en_US: "受け身",
            }
    }
}

export default skills