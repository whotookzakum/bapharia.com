import { getLocFromParams } from "$lib/utils.js"

export const prerender = true

export const load = (event) => {
    const { params } = event
    return getLocFromParams(params)
}