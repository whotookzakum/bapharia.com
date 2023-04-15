import en_US from "./global/texts/en_US.json";
import ja_JP from "./japan/texts/ja_JP.json";
import itemsData from "./japan/items.json";
import enemiesData from "./japan/enemyparams.json";
import treasuresData from "./japan/treasures.json";
import costumesData from "./japan/costume.json";

function getText(ns, id) {
    const texts = {
        ja_JP,
        en_US
    }
    let result = {};
    Object.keys(texts).forEach(lang => {
        const namespaceObj = texts[lang].find(namespace => namespace.name === ns) || {}
        const textObj = namespaceObj.texts.find(obj => obj.id === id) || {}
        result[lang] = textObj.text || "-"
    })
    return result
}

function getCategory(entryType, category) {

    if (entryType === "enemy") {
        switch(category) {
            case 1:
                return {
                    ja_JP: "ボスエネミー",
                    en_US: "Boss Enemy"
                }
            default: 
                return {
                    ja_JP: "エネミー",
                    en_US: "Enemy"
                }
        }
    }

    if (entryType === "item") {
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
}

function getThumbnail(category, id) {
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
        const thumb = getThumbnail(item.category, item.id)
        const category = getCategory("item", item.category)

        return {
            ...item,
            id: `${item.id}`,
            bapharia: {
                name,
                desc,
                source,
                effect,
                thumb,
                category,
                filterGroup: "items"
            }
        }
    })

    return items
}

export const getEnemies = () => {

    const enemies = enemiesData.map(enemy => {
        const name = getText("enemyparam_text", enemy.name_id)

        // Spawn locations are found in client. Some enemies may spawn in a map but not drop anything. Maybe use radio buttons to select a mob's spawn locations, then update stats if they are different, and show drops for that map if there are any.

        const drops = enemy.drop_items.map(drop => {
            const item = itemsData.find(itm => itm.id === drop.item_index)

            // Regular dropped item
            if (item) {
                return {
                    ...drop,
                    name: getText("item_text", item.name)
                }
            }

            const treasure = treasuresData.find(treasure => treasure.id === drop.item_index)

            // Treasure box
            if (treasure) {
                return {
                    ...drop,
                    treasure,
                    name: "Treasure Chest"
                }
            }
            
            return drop
        })

        return {
            ...enemy,
            id: enemy.enemy_id,
            bapharia: {
                name,
                drops,
                category: getCategory("enemy", enemy.is_boss),
                filterGroup: "enemies"
            }
        }
    })

    return enemies
}

function getPartsPath(name) {
    if (name.includes("hat")) return "Hat"
    if (name.includes("bdl")) return "Lower"
    if (name.includes("udw")) return "Underwear"
    if (name.includes("sho")) return "Shoes"
    if (name.includes("bdu")) return "Upper"
    if (name.includes("glv")) return "Glove"
    if (name.includes("acc_hpb")) return "AccessoryHipBack"
    if (name.includes("acc_hdt")) return "AccessoryHeadTop"
    if (name.includes("acc_hdm")) return "AccessoryHeadMid"
    if (name.includes("acc_hdl")) return "AccessoryHeadLow"
    if (name.includes("acc_hde")) return "AccessoryHeadEar"
    if (name.includes("acc_fng")) return "AccessoryFinger"
    if (name.includes("acc_bdb")) return "AccessoryBodyBack"
    else return
}

export const getCostumes = () => {
    const costumes = costumesData.map(costume => {
        const name = getText("costume_text", costume.name)
        const desc = getText("costume_text", costume.desc)
        const pathToThumb = getPartsPath(costume.costume_parts_name)
        const thumb = pathToThumb ? `/UI/Icon/Costume/${pathToThumb}/${costume.icon_name}.png` : ""
    
        return {
            ...costume,
            id: `${costume.id}`,
            bapharia: {
                name,
                desc,
                thumb,
                category: { ja_JP: "コスチューム", en_US: "Costume" },
                filterGroup: "costumes"
            }
        }
    })
    return costumes
}

export const getDatabaseEntries = () => {
    const items = getItems()
    const enemies = getEnemies()
    const costumes = getCostumes()

    return [...items, ...enemies, ...costumes]
}