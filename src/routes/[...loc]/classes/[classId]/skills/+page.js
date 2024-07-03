import { getSkillNotes } from '$lib/utils/index.js'

export const load = async ({ params, fetch }) => {
    const res = await fetch("/api/skills?lang=en_US")
    const skills = await res.json()
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