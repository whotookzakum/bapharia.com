import { SUPPORTED_VERSIONS } from '$lib/constants'
import { PUBLIC_PUBLISHER } from '$env/static/public';
import { error } from "@sveltejs/kit"

export function getSkillNotes(skillId) {
    const allNotesFiles = import.meta.glob("../routes/\\[\\[lang\\]\\]/classes/\\[classId\\]/skills/*.md", { eager: true, import: "default" })
    return allNotesFiles[`../routes/[[lang]]/classes/[classId]/skills/${skillId}.md`]
}

// Takes in event.params from a +page.js or +layout.js and returns { publisher, lang }
export function getSiteVersion(params) {
    let publisher = PUBLIC_PUBLISHER
    const availableLangs = SUPPORTED_VERSIONS.find(ver => ver.publisher === publisher).locales
    let lang = params.lang ?? availableLangs[0]

    // Lang must be valid for the selected publisher, i.e. BNO does not support French
    if (lang && !availableLangs.includes(lang)) {
        error(404, 'Not Found')
    }

    return { publisher, lang, availableLangs }
}

// Transform an asset path to a remote asset url
export function assetUrl(path) {
    return "https://raw.githubusercontent.com/whotookzakum/bpassets/webp" + path?.replace(".png", ".webp")
}