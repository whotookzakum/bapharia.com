import mapsData from "../bp_client/japan/maps.json";
import { getThumbnail, getCategory } from "./utils";

// TO DO:
// Mob locations
// Treasure chests
// Nappo count
// Available resources
// NPCs
// Supplies for dungeons (supply.json)
// Quests

const maps = mapsData.map(map => {
    return {
        ...map,
        id: `${map.map_id}`,
        name: {
            ja_JP: map.name,
            en_US: map.name_en || map.name_jp_cbt || map.name_translated
        },
        thumb: getThumbnail("map"),
        category: getCategory("map", map.map_id),
        filterGroup: "maps"
    }
})

export default maps;

export function getMapData(id) {
    let mapData = mapsData.find(
        map => map.map_id.toLowerCase() === id.toLowerCase()
            || map.free_exploration_id?.toLowerCase() === id.toLowerCase()
    )
    if (mapData) {
        return {
            id: mapData.map_id,
            name: {
                ja_JP: mapData.name,
                en_US: mapData.name_en || mapData.name_jp_cbt || mapData.name_translated
            }
        }
    }
    return {
        id: null,
        name: {
            ja_JP: "-",
            en_US: "-"
        }
    }
}

export function getMapName(id) {
    const mapData = mapsData.find(map => map.map_id.toLowerCase() === id.toLowerCase())
    return {
        ja_JP: mapData?.name || "-",
        en_US: mapData?.name_en || mapData?.name_jp_cbt || mapData?.name_translated || "-"
    }
}