import { getMapWithMarkers } from "$api/maps"

export const load = async ({ params, fetch }) => {
    const data = await fetch("/api/maps/twr003")
    return data.json()
}