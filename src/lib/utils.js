import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS, SUPPORTED_VERSIONS } from '$lib/constants'

export function getSkillNotes(skillId) {
    const allNotesFiles = import.meta.glob("../routes/\\[...loc\\]/classes/\\[classId\\]/skills/*.md", { eager: true, import: "default" })
    return allNotesFiles[`../routes/[[lang]]/classes/[classId]/skills/${skillId}.md`]
}

export async function getApi(file, params, fetch) {
    // Fetch from API (.js file executed in-memory when API endpoint is created)
    if (fetch) {
        const res = await fetch(`/api/${file}`)
        return await res.json()
    }

    // TODO: Create file if doesnt exist
    // Import .json file, eliminating the need to load tons of game files into memory
    const { publisher, lang } = getLocFromParams(params)
    const data = await import(`../../api/json/${publisher}/${lang}/${file}.json`) // `../../../api/json/${publisher}/${lang}/${file}.json`
    return data.default
}

export function getLocFromParams(params) {
    params.publisher ??= "bno"
    params

    let lang = SUPPORTED_VERSIONS.find(obj => obj.publisher === params.publisher)


    return { publisher, lang, loc: params.loc }
}

// Transform an asset path to a remote asset url
export function assetUrl(path) {
    return "https://raw.githubusercontent.com/whotookzakum/bpassets/webp" + path?.replace(".png", ".webp")
}