import { getSkillNotes } from '$lib/utils/index.js'

export const load = async ({ fetch, params, url }) => {
    const { entryType, entryId } = params
    const res = await fetch(`/api/${entryType}/${entryId}?lang=en_US`)
    const data = await res.json()

    if (data.resolveType === "Skill") {
        data.notes = getSkillNotes(data.skill_id)
    }

    return data
}