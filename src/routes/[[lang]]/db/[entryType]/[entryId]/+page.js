import { getSkillNotes, getSiteVersion } from '$lib/utils.js'

export const load = async ({ fetch, params, url }) => {
    const { entryType, entryId } = params
    const { lang, publisher } = getSiteVersion(params)
    const res = await fetch(`/api/${entryType}/${entryId}?lang=${lang}&publisher=${publisher}`)
    const data = await res.json()

    if (data.resolveType === "Skill") {
        data.notes = getSkillNotes(data.skill_id)
    }

    return data
}