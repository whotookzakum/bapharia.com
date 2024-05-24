export const load = async ({ params, fetch }) => {
    const res = await fetch("/api/skills?lang=en_US")
    const skills = await res.json()
    const skillsForClass = skills.filter(skill => skill.class_type == params.classId)
    return { skills: skillsForClass }
}