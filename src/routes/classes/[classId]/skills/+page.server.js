import skills from "$functions/skills"

export const load = async ({ params }) => {
    const skillsForClass = skills.filter(skill => skill.class_type == params.classId)
    return { skills: skillsForClass }
}