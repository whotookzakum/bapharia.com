// TODO refactor so it doesn't continuously fetch when opening/closing markers

export const load = async ({ url, fetch, params }) => {
    let fileName = params.zone.replace("Cty0", "cty").toLowerCase()
    const mapData = await import(`./${fileName}.json`)
    return { mapData }
}