import { getMapWithMarkers } from "$functions/maps"

export const load = async ({ params }) => {
    return getMapWithMarkers(params.zone)
}