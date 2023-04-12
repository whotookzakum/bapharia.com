import texts from "$lib/apiextAGS/texts/en_US.json";
import itemsData from "$lib/apiext/items.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

function getItemCategory(category) {
    switch (category) {
        case 0: return `Consumable` // 消費アイテム Consumables
        case 1: return `Sell-only item` // 売却専用アイテム Sell items (fish, luno gems)
        case 2: return `Weapon Plug` // アビリティプラグ Plugs
        case 3: return `General Item` // 汎用素材アイテム General purpose item (materials, etc)
        case 4: return `Idea` // イデア Idea
        case 5: return `Set Box` // セットボックス Set box
        case 6: return `Selection Box` // セレクトボックス Selection Box
        case 7: return `Random Box` // ランダムボックス Random Box (random plug..)
    }
}

function getItemThumbnail(category, id, name) {
    switch (category) {
        case 0: return `/UI/Icon/Item/Consumption/UI_Icon_${id}.png`
        case 1: return `/UI/Icon/Item/Material/UI_Icon_${id}.png`
        case 2: return `/UI/Icon/Item/Material/UI_Icon_Fusion_1.png`
        case 3: return ``
        case 4: return `/UI/Icon/Item/EnemyMaterial/UI_Icon_Idea.png`
        case 5:
            return `/UI/Icon/Item/Consumption/UI_Icon_gashabox_RichSet_${id}.png`
            return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Set.png`
            return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Gesture.png`
            return `/UI/Icon/Item/Consumption/UI_Icon_UI_Icon_gashabox_Stamp.png`
        case 6: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Select.png`
        case 7: return `/UI/Icon/Item/Consumption/UI_Icon_Itembox_Random.png`
    }
}


export const getItems = () => {

    const items = itemsData.map(item => {
        const name = getText("item_text", item.name)
        const desc = getText("item_text", item.desc)
        const source = getText("item_text", item.obtaining_route_detail_id)
        const effectDesc = getText("item_text", item.item_effect_desc_text)
        const thumb = getItemThumbnail(item.category, item.id)
        const categoryName = getItemCategory(item.category)

        return {
            ...item,
            name,
            desc,
            source,
            effectDesc,
            thumb,
            categoryName
        }
    })

    return {
        items
    }
}