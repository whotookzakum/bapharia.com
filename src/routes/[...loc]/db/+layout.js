import { getApi } from '$lib/utils.js'

export const load = async ({ params, fetch }) => {
    const entries = await getApi("entries", params)
    return { entries }
}