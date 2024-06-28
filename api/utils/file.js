export async function getFile(path, region = "japan") {
    if (!path) return
    if (path.charAt(0) !== "/") path = `/${path}`
    const files = import.meta.glob('../(bp_api|bp_client)/**/*.json', { import: "default" })
    const fileResolver = files[`../${path.includes("Content") ? "bp_client" : "bp_api"}/${region}${path}`]
    if (!fileResolver) return
    return await fileResolver()
}