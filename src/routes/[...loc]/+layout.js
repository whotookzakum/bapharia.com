import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS, userLocale } from '$lib/stores.js'
import { get } from "svelte/store"

export const prerender = true

function getLocFromParams(params) {
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

export const load = (event) => {
    const { params } = event
    return getLocFromParams(params)
}