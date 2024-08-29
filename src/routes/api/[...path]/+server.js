import { json } from '@sveltejs/kit'
import { SUPPORTED_VERSIONS } from '$lib/constants.js';

// https://medium.com/the-mighty-programmer/working-with-svelte-kit-and-cloudflare-kv-in-local-728d8b042e95

// DEV CODE
// export const GET = async ({ params, url }) => {
//     const lang = url.searchParams.get("lang") ?? SUPPORTED_VERSIONS[0].locales[0]
//     const publisher = url.searchParams.get("publisher") ?? SUPPORTED_VERSIONS[0].publisher
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
export const GET = async ({ params, url, platform }) => {
    const lang = url.searchParams.get("lang") ?? SUPPORTED_VERSIONS[0].locales[0]
    const publisher = url.searchParams.get("publisher") ?? SUPPORTED_VERSIONS[0].publisher
    const [first, second] = params.path.split("/")
    const id = second && parseInt(second)
    // const file = await import(`./../../../../_api/json/${publisher}/${lang}/${first}.json`)
    const file = await platform?.env[`${publisher}_${lang}`].get(first).then(res => JSON.parse(res))

    if (id) {
        // const entry = await file.default.find(obj => obj.id === id || obj.skill_id === id)
        const entry = await file.find(obj => obj.id === id || obj.skill_id === id)
        return json(entry)
    }

    // return json(file.default)
    return json(file)
}