import itemsData from "$bp_server/japan/items.json";
import treasuresData from "$bp_server/japan/treasures.json";
import enemiesData from "$bp_server/japan/enemyparams.json";
import imagineData from "$bp_server/japan/imagine.json";
import { getMapData } from "./maps"
import { getText } from "./utils";
import adventureBoardsData from "$bp_server/japan/master_adventure_board.json"
import liquidMemoriesData from "$bp_server/japan/liquid_memory.json";
import groupBy from "lodash/groupBy"
import { json } from "@sveltejs/kit";

// TODO Treasure chest drops
// TODO Spawn locations (client)
// TODO Stats (if possible) elemental weakness etc
// TODO 3d models

const getTreasureRewardName = (ns, id) => {
    switch (ns) {
        case 3:
            const item = itemsData.find(i => i.id === id)
            return getText("item_text", item.name)
        case 33:
            const imagine = imagineData.find(i => i.id === id)
            if (imagine) {
                return getText("master_imagine_text", imagine.imagine_name)
            }
            // Can also be a lottery
            else {
                // console.log("Could not find namespace for id " + id)
                return { ja_JP: "Might be another chest", en_US: "Might be another chest" }
            }
        case 15:
            const liqmem = liquidMemoriesData.find(i => i.id === id)
            return getText("master_liquid_memory_text", liqmem.efficacy_name)
        case 28:
            const board = adventureBoardsData.find(i => i.id === id)
            return getText("master_adventure_boards_text", board.name)
    }
}

const getTreasureChestData = (chestId) => {
    const treasureChest = treasuresData.find(treasure => treasure.id === chestId)
    if (!treasureChest) return "Treasure chest data not found"

    let rarity_1_rate, rarity_3_rate;
    let rarity_1_rewards = []
    let rarity_3_rewards = []

    // Probability of normal chest
    const rarity_1_data = treasureChest?.rarity_rate?.find(chest => chest.rarity === 1)

    if (rarity_1_data) {
        rarity_1_rate = rarity_1_data.rate

        // Rewards for normal chest
        rarity_1_rewards =
            treasureChest.lot_rate
                .filter(reward => reward.rarity_max === 1)
                .map(reward => {
                    const name = getTreasureRewardName(reward.reward_type, reward.reward_master_id)
                    return {
                        ...reward,
                        name
                    }
                })
    }

    // Probability of gold chest
    const rarity_3_data = treasureChest.rarity_rate.find(chest => chest.rarity === 3)
    if (rarity_3_data) {
        rarity_3_rate = rarity_3_data.rate

        // Rewards for gold chest
        rarity_3_rewards =
            treasureChest.lot_rate
                .filter(reward => reward.rarity_min === 3)
                // Add reward item name
                .map(reward => {
                    const name = getTreasureRewardName(reward.reward_type, reward.reward_master_id)
                    return {
                        ...reward,
                        name
                    }
                })
    }

    return {
        rarity_1_rate,
        rarity_1_rewards,
        rarity_3_rate,
        rarity_3_rewards
    }
}

// const enemies = enemiesData.map(enemy => {
//     const name = getText("enemyparam_text", enemy.name_id)
//     let found_in = []

//     // Spawn locations are found in client. Some enemies may spawn in a map but not drop anything.

//     const allDrops =
//         enemy.drop_items
//             .map(drop => {
//                 const item = itemsData.find(itm => itm.id === drop.item_index)
//                 if (item) {
//                     return {
//                         ...drop,
//                         name: getText("item_text", item.name),
//                         is_treasure_chest: false
//                     }
//                 }

//                 const treasure = treasuresData.find(treasure => treasure.id === drop.item_index)
//                 if (treasure) {
//                     const chestData = getTreasureChestData(drop.item_index)
//                     return {
//                         ...drop,
//                         name: { ja_JP: "宝箱", en_US: "Treasure Chest" },
//                         is_treasure_chest: true,
//                         ...chestData
//                     }
//                 }
//             })

//     if (allDrops.length > 0) {
//         const dropsByLocation = groupBy(allDrops, (drop) => drop?.content_id)
//         if (dropsByLocation) {
//             found_in =
//                 Object.entries(dropsByLocation)
//                     .map(([mapId, drops]) => {
//                         const mapData = getMapData(mapId)
//                         return {
//                             ...mapData,
//                             drops
//                         }
//                     })
//         }
//     }

//     return {
//         ...enemy,
//         id: enemy.enemy_id,
//         name,
//         found_in,
//         thumb: getThumbnail(),
//         subcategoryName: getSubcategory(enemy.is_boss),
//         entryTypes: ["Enemy"]
//     }
// })



const resolveFileImportPromises = async (files) => {
    const data = await Promise.all(
        files.map(async (resolver) => {
            const resolvedData = await resolver()
            return resolvedData.default
        })
    )
    return data.flat()
}
const enemies = async () => {
    const allMapFiles = import.meta.glob('../../../bp_client/japan/Content/Maps/**/**/sublevel/*_EN.json')
    const mapsData = await resolveFileImportPromises(Object.values(allMapFiles))


    const allEnemySetFiles = import.meta.glob('../../../bp_client/japan/Content/Blueprints/Manager/EnemySet/*.json')
    const enemySetsData = await resolveFileImportPromises(Object.values(allEnemySetFiles))

    const enemySets = enemySetsData.map(file => file.Properties.EnemySets).flat()



    const allEnemyHabitats =
        mapsData
            .filter(obj => obj.Type === "SBEnemyHabitat")
            .map(({ Name, Properties }) => {
                // Get the enemies that spawn at this habitat from Enemy Sets
                const enemies = Properties.Enemies.map(enemy => {
                    const enemySetData = enemySets.find(set => set.EnemySetId === enemy.EnemySetId)

                    return {
                        ...enemy,
                        ...enemySetData
                    }
                })

                return {
                    Name,
                    enemies
                }
            })

    return allEnemyHabitats
    // console.log(allEnemyHabitats)
}





// const enemiesGroupedByNameAndType = enemiesData.reduce((acc, enemy) => {

//     // Conditions: same name_id and same is_boss
//     let enemyTypeParentObj = acc.find(en => en.name_id === enemy.name_id && en.is_boss === enemy.is_boss)

//     if (!enemyTypeParentObj) {
//         acc.push({
//             name_id: enemy.name_id,
//             is_boss: enemy.is_boss,
//             id: enemy.enemy_id.slice(0, 10),
//             name: getText("enemyparam_text", enemy.name_id),
//             subcategoryName: getSubcategory(enemy.is_boss),
//             enemyVariantIds: [enemy.enemy_id],
//             enemyVariants: [enemy]
//         })
//     }
//     else {
//         enemyTypeParentObj.enemyVariantIds.push(enemy.enemy_id)
//         enemyTypeParentObj.enemyVariants.push(enemy)
//     }

//     return acc;
// }, [])




// const enemies = Object.entries(enemiesGroupedByName).map(([name_id, enemyVariants]) => {

//     const enemyVariantIds = enemyVariants.map(enemy => enemy.enemy_id)
//     const name = getText("enemyparam_text", name_id)
//     const id = enemyVariantIds[0].slice(0, 10)
//     return {
//         id,
//         name,
//         enemyVariantIds,
//         enemyVariants,
//         thumb: getThumbnail(),
//         // subcategoryName: getSubcategory(enemy.is_boss),
//     }
// })

function getThumbnail() {
    return `/UI/Icon/Class/UI_IconClass_Nodata.png`
}

function getSubcategory(category) {
    switch (category) {
        // Quest instance boss?
        case 1:
            return {
                ja_JP: "ボスエネミー",
                en_US: "Boss Enemy"
            }
        case 2:
            return {
                ja_JP: "ネームドエネミー",
                en_US: "Elite Monster"
            }
        case 3:
            return {
                ja_JP: "ダンジョンボス",　// Free exploration boss?
                en_US: "Dungeon Boss"
            }
        default:
            return {
                ja_JP: "エネミー",
                en_US: "Enemy"
            }
    }
}

export default await enemies();