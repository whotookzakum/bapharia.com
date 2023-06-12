// TODO refactor so it doesn't continuously fetch when opening/closing markers

export const load = async ({ url, fetch }) => {
    let mapId =  "Cty001"
    let endpoint = mapId.replace("Cty0", "cty").toLowerCase()
    const mapData = await fetch(`/map/data/${endpoint}`).then(res => res.json())
    return { mapData }
}