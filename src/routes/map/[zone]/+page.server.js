import { getMapWithMarkers } from "$functions/maps"

export const prerender = false

export const load = async ({ params }) => {
    return getMapWithMarkers(params.zone)
}