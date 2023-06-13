// TODO refactor so it doesn't continuously fetch when opening/closing markers
// TODO refactor so state can persist between page changes
// TODO refactor to fetch from graphql to reduce complexity

export const load = async ({ url, fetch, params }) => {
    // let fileName = params.zone.replace("Cty0", "cty").toLowerCase()
    let mapData;

    switch (params.zone) {
        case "Cty001":
            mapData = await import("./cty01.json")
            break;
        case "Cty002":
            mapData = await import("./cty02.json")
            break;
        case "Fld001":
            mapData = await import("./fld001.json")
            break;
        case "Fld002":
            mapData = await import("./fld002.json")
            break;
        case "Fld003":
            mapData = await import("./fld003.json")
            break;
        default: 
            mapData = await import("./cty01.json")
    }

    return { mapData }
}