import { getMapWithMarkers } from "$scripts/maps"

export const load = async ({ params }) => {
    return getMapWithMarkers(params.zone)
}