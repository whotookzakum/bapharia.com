import { getSkillNotes, getSiteVersion } from '$lib/utils.js'

export const load = async ({ params, fetch }) => {
    const { lang, publisher } = getSiteVersion(params)
    const res = await fetch(`/api/skills?lang=${lang}&publisher=${publisher}`)
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