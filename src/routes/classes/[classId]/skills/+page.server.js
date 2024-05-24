import skills from "$scripts/skills"

export const load = async ({ params }) => {
    const allSkills = await skills("en_US")
    const skillsForClass = await allSkills.filter(skill => skill.class_type == params.classId)
    return { skills: skillsForClass }
}