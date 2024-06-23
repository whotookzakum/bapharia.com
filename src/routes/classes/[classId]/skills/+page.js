export const load = async ({ params, fetch }) => {
    const res = await fetch("/api/skills?lang=en_US")
    const skills = await res.json()
    const skillsForClass = skills.filter(skill => skill.class_type == params.classId)

    const allNotesFiles = import.meta.glob("./*.md", { eager: true })
    const skillsWithNotes = await Promise.all(skillsForClass.map(async (skill) => {
        const notesForSkill = allNotesFiles[`./${skill.skill_id}.md`]
        return {
            ...skill,
            notes: notesForSkill?.default
        }
    }))
    return { skills: skillsWithNotes }
}