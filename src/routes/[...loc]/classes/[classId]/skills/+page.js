import { getSkillNotes, getApi } from '$lib/utils.js'

export const load = async ({ params, fetch }) => {
    const skills = await getApi("skills", params)
    const skillsForClass = skills
        .filter(skill => skill.class_type == params.classId)
        .map((skill) => {
            return {
                ...skill,
                notes: getSkillNotes(skill.skill_id)
            }
        })

    return { skills: skillsForClass }
}