import { getMapWithMarkers } from "$api/maps"

export const load = async ({ params }) => {
    return getMapWithMarkers(params.zone)
}