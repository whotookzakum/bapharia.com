import { getSkillNotes, getApi } from '$lib/utils.js'

export const load = async ({ fetch, params, url }) => {
    const { entryType, entryId } = params
    const allEntriesOfType = await getApi(entryType, params)
    const data = await allEntriesOfType.find(obj => obj.id == entryId || obj.skill_id == entryId)

    if (data.resolveType === "Skill") {
        data.notes = getSkillNotes(data.skill_id)
    }

    return data
}