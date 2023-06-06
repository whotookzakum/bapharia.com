// TODO refactor so it doesn't continuously fetch when opening/closing markers

export const load = async ({ url, fetch }) => {
    let mapId = url.searchParams.get("zone") ?? "Cty001"
    let endpoint = mapId.replace("Cty0", "cty").toLowerCase()
    const mapData = await fetch(`/generators/map/${endpoint}`).then(res => res.json())
    return { mapData }
}