import { goto } from "$app/navigation";
import { browser } from "$app/environment";

export const load = async ({ url }) => {
    

    // if (!mapId) {
    //     url.searchParams.set("zone", "Cty001")
    //     if (browser) {
    //         goto(`/map?${url.searchParams.toString()}`, {
    //             noScroll: true,
    //             replaceState: true,
    //             keepFocus: true,
    //         });
    //     }
    //     mapId = url.searchParams.get("zone")
    // }

    // let mapId = url.searchParams.get("zone") ?? "Cty001"
    // const mapData = await import(`../../../lib/components/leaflet/maps/${mapId}.json`);

    // return {
    //     zone: mapData
    // }
}