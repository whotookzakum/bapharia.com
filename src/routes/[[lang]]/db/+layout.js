import { getSiteVersion } from '$lib/utils.js'

export const load = async ({ params, fetch }) => {
    const { lang, publisher } = getSiteVersion(params)
    const res = await fetch(`/api/entries?lang=${lang}&publisher=${publisher}`)
    const entries = await res.json()
    return { entries }
}