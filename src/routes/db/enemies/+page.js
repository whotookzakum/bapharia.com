import texts from "$lib/apiext/texts/ja_JP.json";
import enemiesData from "$lib/apiext/enemyparams.json";
import itemsData from "$lib/apiext/items.json";
import treasuresData from "$lib/apiext/treasures.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}


export const load = async () => {

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
            name,
            drop_items: drops
        }
    })

    return {
        enemies
    }
}