import { json } from '@sveltejs/kit'
import { dev } from '$app/environment'
import { SUPPORTED_LANGS, SUPPORTED_PUBLISHERS } from '$lib/constants.js';

// DEV CODE
// export const GET = async ({ params, url }) => {
//     const lang = url.searchParams.get("lang") ?? SUPPORTED_LANGS[0]
//     const publisher = url.searchParams.get("publisher") ?? SUPPORTED_PUBLISHERS[0]
//     const [first, second] = params.path.split("/")
//     const id = second && parseInt(second)

//     if (id) {
//         const file = await import(`../../../../_api/${first}.js`)
//         const entry = await file.getEntry(id, lang)
//         return json(entry)
//     }

//     else if (second) {
//         const file = await import(`../../../../_api/${first}/${second}.js`)
//         return json(await file.default(lang))
//     }

//     const file = await import(`../../../../_api/${first}.js`)
//     return json(await file.default(lang))
// }

// PROD CODE
export const GET = async ({ params, url }) => {
    const lang = url.searchParams.get("lang") ?? SUPPORTED_LANGS[0]
    const publisher = url.searchParams.get("publisher") ?? SUPPORTED_PUBLISHERS[0]
    const [first, second] = params.path.split("/")
    const id = second && parseInt(second)
    const file = await import(`./../../../../_api/json/${publisher}/${lang}/${first}.json`)

    if (id) {
        const entry = await file.default.find(obj => obj.id === id)
        return json(entry)
    }

    return json(file.default)
}