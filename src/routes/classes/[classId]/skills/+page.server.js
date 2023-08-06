import { getSkillsForClass } from "../../../kv/functions/skills"

export const load = ({ params }) => {
    return { skills: getSkillsForClass(params.classId) }
}