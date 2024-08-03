import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { browser } from "$app/environment";
import { get } from "svelte/store";
import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from '$lib/constants'

export function updateSearchParams(param, newValue) {
    const pageStore = get(page)

    if (!newValue) {
        pageStore.url.searchParams.delete(param);
    } else {
        pageStore.url.searchParams.set(param, newValue);
    }

    if (browser) {
        goto(`?${pageStore.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }
}

export function getSkillNotes(skillId) {
    const allNotesFiles = import.meta.glob("../routes/\\[...loc\\]/classes/\\[classId\\]/skills/*.md", { eager: true, import: "default" })
    return allNotesFiles[`../routes/[...loc]/classes/[classId]/skills/${skillId}.md`]
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
    let lang = SUPPORTED_LANGS[0]
    let publisher = SUPPORTED_PUBLISHERS[0]
    const splitPath = params.loc.split("/")

    if (splitPath.length === 1) {
        publisher = SUPPORTED_PUBLISHERS.find(str => str === params.loc) ?? publisher
        lang = SUPPORTED_LANGS.find(str => str === params.loc) ?? lang
    }
    else if (splitPath.length === 2) {
        publisher = SUPPORTED_PUBLISHERS.includes(splitPath[0]) ? splitPath[0] : SUPPORTED_PUBLISHERS[0]
        lang = SUPPORTED_LANGS.includes(splitPath[1]) ? splitPath[1] : SUPPORTED_LANGS[0]
    }

    return { publisher, lang, loc: params.loc }
}

// Transform an asset path to a remote asset url
export function assetUrl(path) {
    return "https://raw.githubusercontent.com/whotookzakum/bpassets/main" + path
}