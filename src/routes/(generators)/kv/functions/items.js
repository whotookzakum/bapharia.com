import itemsData from "$bp_server/japan/items.json";
import { getText } from "./utils";
import iconData from "$bp_client/japan/Content/Blueprints/UI/Icon/DT_ItemIconDB.json"

// TODO drops from ...
// TODO found in (map) ...
// TODO available in (map/dungeon)
// TODO used in (recipe)

const icons = {}

Object.entries(iconData[0].Rows).forEach(([id, data]) => {
    // const imgData = Object.values(data)[0].AssetPathName.replace("/Game", "").split(".")[0]
    let imgData;
    let i = 0;
    while ((imgData === "None" || !imgData) && i < Object.values(data).length) {
        imgData = Object.values(data)[i].AssetPathName.replace("/Game", "").split(".")[0]
        i++;
    }
    icons[id] = `${imgData}.png`
})

const items = itemsData.map(item => {
    const name = getText("item_text", item.name)
    const desc = getText("item_text", item.desc)
    const sourceDesc = getText("item_text", item.obtaining_route_detail_id)
    const effectDesc = getText("item_text", item.item_effect_desc_text)
    const thumb = getThumbnail(item.id)
    const subcategoryName = getCategory(item.category)
    
    return {
        ...item,
        id: `${item.id}`,
        name,
        desc,
        sourceDesc,
        effectDesc,
        thumb,
        subcategoryName,
        entryTypes: ["Item"]
    }
})

function getThumbnail(id) {
    return icons[id]
}

function getCategory(category) {
    switch (category) {
        case 0:
            return {
                ja_JP: "消費アイテム",
                en_US: "Consumable"
            }
        case 1:
            return {
                ja_JP: "売却専用アイテム", // Sell items (fish, luno gems)
                en_US: "Sell-only item"
            }
        case 2:
            return {
                ja_JP: "アビリティプラグ",
                en_US: "Ability Plug"
            }
        case 3:
            return {
                ja_JP: "汎用素材アイテム", // General purpose item (materials, etc)
                en_US: "General Item"
            }
        case 4:
            return {
                ja_JP: "イデア",
                en_US: "Trace"
            }
        case 5:
            return {
                ja_JP: "セットボックス",
                en_US: "Set Box"
            }
        case 6:
            return {
                ja_JP: "セレクトボックス",
                en_US: "Selection Box"
            }
        case 7:
            return {
                ja_JP: "ランダムボックス", // Random Box (random plug..)
                en_US: "Random Box"
            }
    }
}

export default items;