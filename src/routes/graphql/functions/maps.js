import mapsData from "../bp_client/japan/maps.json";

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
        thumb: getThumbnail(),
        category: getCategory(map.map_id),
        entryTypes: ["GameMap"]
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

function getThumbnail() {
    return `/UI/Icon/Class/UI_IconClass_Nodata.png`
}

function getCategory(id) {
    if (id.includes("dng") || id.includes("Dng")) {
        return {
            ja_JP: "ダンジョン",
            en_US: "Dungeon"
        }
    }
    if (id.includes("fld") || id.includes("Fld")) {
        return {
            ja_JP: "フィールド",
            en_US: "Field"
        }
    }
    if (id.includes("cty") || id.includes("Cty")) {
        return {
            ja_JP: "街",
            en_US: "City"
        }
    }
    if (id.includes("arn") || id.includes("Arn")) {
        return {
            ja_JP: "闘技場",
            en_US: "Arena"
        }
    }
    if (id.includes("twr") || id.includes("Twr")) {
        return {
            ja_JP: "塔",
            en_US: "Tower"
        }
    }
    if (id.includes("rai") || id.includes("Rai")) {
        return {
            ja_JP: "レイド",
            en_US: "Raid"
        }
    }
    // "pat" is still unknown
    return {
        ja_JP: "マップ",
        en_US: "Map"
    }
}