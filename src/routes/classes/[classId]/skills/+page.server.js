import { getSkillsForClass } from "$functions/skills"

export const load = ({ params }) => {
    return { skills: getSkillsForClass(params.classId) }
}