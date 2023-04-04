import texts from "$lib/apiext/texts/ja_JP.json";
import skillsData from "$lib/apiext/skill_data.json";
import _ from "lodash";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

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

function getSkillThumbnail(skill) {
    // Skill type 0 = LMB
    // Skill type 1 = RMB
    
    if (skill.is_default_skill && skill.skill_type === 0) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`
    if (skill.is_default_skill && skill.skill_type === 1) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`
    if (skill.skill_type === 6) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`
    return `/UI/Icon/PlayerSkill/Class${skill.class_type}/UI_PlayerSkill_${skill.skill_id}.png`
}

export const load = async () => {

    const result = skillsData.reduce((acc, curr) => {
        const { condition_skill_id_1 } = curr;

        if (condition_skill_id_1) {
            // If skill has a condition_skill_id_1, add it to the abilities array for that skill_id
            const targetSkill = acc.find(skill => skill.skill_id === condition_skill_id_1);
            if (targetSkill) {

                // Get ability text
                let abilityText = getText("master_skill_data_text", curr.skill_desc_array[0].desc)
                curr.desc = abilityText.split("\n")[0]

                // Add ability inside of its corresponding skill
                targetSkill.abilities.push(curr);
                return acc;
            }
        }

        // If skill does not have a condition_skill_id_1, add it to the result array
        const name = getText("master_skill_data_text", curr.skill_name)
        const desc = getText("master_skill_data_text", curr.skill_desc_array[curr.skill_desc_array.length - 1].desc)
        const thumb = getSkillThumbnail(curr)
        const classImg = getClassThumbnail(curr.class_type)

        acc.push({
            ...curr,
            desc,
            name,
            thumb,
            classImg,
            abilities: []
        });

        return acc;
    }, []);

    // alpha, beta..
    result.forEach(skill => {
        skill.abilities.sort((a, b) => a.ability_type - b.ability_type)
    })

    return {
        skills: result
    }
}