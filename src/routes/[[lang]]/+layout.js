import { SUPPORTED_VERSIONS, SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from "$lib/constants.js"
import { error } from "@sveltejs/kit"

export const prerender = true

export const load = ({ params }) => {
    let { publisher, lang } = params
    publisher ??= SUPPORTED_PUBLISHERS[0]
    lang ??= SUPPORTED_LANGS[0]

    // Lang must be valid for the selected publisher, i.e. BNO does not support French
    if (lang && !SUPPORTED_VERSIONS.find(ver => ver.publisher === publisher).locales.includes(lang)) {
        error(404, 'Not Found')
    }

    return { publisher, lang }
}