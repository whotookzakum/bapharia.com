export const load = async ({ url }) => {
    let mapId = url.searchParams.get("zone") ?? "Cty001"
    const mapData = await import(`../../../lib/components/leaflet/maps/${mapId}.json`);

    return {
        zone: mapData
    }
}