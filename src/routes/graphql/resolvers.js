import ja_JP from "./japan/texts/ja_JP.json";
import en_US from "./global/texts/en_US.json";
import itemsData from "./japan/items.json";

function getText(ns, id) {
    const texts = {
        ja_JP,
        en_US
    }
    let result = {};
    Object.keys(texts).forEach(lang => {
        const namespaceObj = texts[lang].find(namespace => namespace.name === ns) || {}
        const textObj = namespaceObj.texts.find(obj => obj.id === id) || {}
        result[lang] = textObj.text || ""
    })
    return result
}

function getItemCategory(category) {
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

function getItemThumbnail(category, id) {
    switch (category) {
        case 0: return `/UI/Icon/Item/Consumption/UI_Icon_${id}.png`
        case 2: return `/UI/Icon/Item/Material/UI_Icon_Fusion_1.png`
        case 4: return `/UI/Icon/Item/EnemyMaterial/UI_Icon_Idea.png`
        case 6: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Select.png`
        case 7: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Random.png`
        case 1: 
            // return `/UI/Icon/Item/Material/UI_Icon_${id}.png`
        case 3: 
            // ``
        case 5:
            // return `/UI/Icon/Item/Consumption/UI_Icon_gashabox_RichSet_${id}.png`
            // return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Set.png`
            // return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Gesture.png`
            // return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Stamp.png`
        default: return `/UI/Icon/Common/UI_Icon_Empty.png`
    }
}


export const getItems = () => {

    const items = itemsData.map(item => {
        const name = getText("item_text", item.name)
        const desc = getText("item_text", item.desc)
        const source = getText("item_text", item.obtaining_route_detail_id)
        const effect = getText("item_text", item.item_effect_desc_text)
        const thumb = getItemThumbnail(item.category, item.id)
        const category = getItemCategory(item.category) || {}

        return {
            ...item,
            bapharia: {
                name,
                desc,
                source,
                effect,
                thumb,
                category
            }
        }
    })

    return {
        items
    }
}