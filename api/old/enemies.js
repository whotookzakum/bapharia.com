import itemsData from "./bp_api/japan/items.json";
import treasuresData from "./bp_api/japan/treasures.json";
import enemiesData from "./bp_api/japan/enemyparams.json";
import imagineData from "./bp_api/japan/imagine.json";
import adventureBoardsData from "./bp_api/japan/master_adventure_board.json"
import liquidMemoriesData from "./bp_api/japan/liquid_memory.json";

// TODO 3d models
// TODO: attack_data_override.json ? add enemy attacks

const getTreasureRewardName = (ns, id) => {
    switch (ns) {
        case 3:
            const item = itemsData.find(i => i.id === id)
        // return getText("item_text", item.name, "ja_JP")
        case 33:
            const imagine = imagineData.find(i => i.id === id)
            if (imagine) {
                // return getText("master_imagine_text", imagine.imagine_name)
            }
            // Can also be a lottery
            else {
                // console.log("Could not find namespace for id " + id)
                return { ja_JP: "Might be another chest", en_US: "Might be another chest" }
            }
        case 15:
            const liqmem = liquidMemoriesData.find(i => i.id === id)
        // return getText("master_liquid_memory_text", liqmem.efficacy_name)
        case 28:
            const board = adventureBoardsData.find(i => i.id === id)
        // return getText("master_adventure_boards_text", board.name)
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
                        name,
                        // thumb: getItemThumbnail(reward.reward_master_id)
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

function getEnemyDropsDetails(drops) {
    return drops.reduce((acc, drop) => {
        const itemData = itemsData.find(itm => itm.id === drop.item_index)
        if (itemData) {
            acc.push({
                ...drop,
                // name: getText("item_text", itemData.name),
                // thumb: getItemThumbnail(drop.item_index)
            })
        }
        return acc;
    }, [])
}

function getEnemyTreasureChestDetails(drops) {
    return drops.reduce((acc, drop) => {
        const treasureData = treasuresData.find(treasure => treasure.id === drop.item_index)
        if (treasureData) {
            const chestData = getTreasureChestData(drop.item_index)
            acc.push({
                ...drop,
                ...chestData
            })
        }
        return acc;
    }, [])
}

const resolveFileImportPromises = async (files) => {
    const data = await Promise.all(
        files.map(async (resolver) => {
            const resolvedData = await resolver()
            return resolvedData.default
        })
    )
    return data.flat()
}

// Return ALL enemy habitats (contains enemy sets, respawn time, density)
async function getAllEnemyHabitats() {
    const allMapFiles = import.meta.glob('../bp_client/japan/Content/Maps/**/**/sublevel/*_EN.json')
    const mapsData = await resolveFileImportPromises(Object.values(allMapFiles))
    const enemyHabitats = mapsData.filter(obj => obj.Type === "SBEnemyHabitat")
    return enemyHabitats
}

// Return ALL enemy sets (contains enemies, their level,
async function getAllEnemySets() {
    const allEnemySetFiles = import.meta.glob('../bp_client/japan/Content/Blueprints/Manager/EnemySet/*.json')
    // [EnemySet_arena, EnemySet_common, EnemySet_dungeon, EnemySet_extra, EnemySet_field]
    const enemySetsData = await resolveFileImportPromises(Object.values(allEnemySetFiles))
    // Only the EnemySets, no file metadata
    const enemySets = enemySetsData.map(file => file.Properties.EnemySets).flat()
    return enemySets
}

// TODO: dungeon enemy spawn points (such as ES_dng009_areaA_2) are SBSpawnSourceComponent
const allEnemyHabitats = await getAllEnemyHabitats()
const allEnemySets = await getAllEnemySets()

// Put all metadata into enemies array
const habitatsFlattened = allEnemyHabitats.map(habitat => {
    return habitat.Properties.Enemies.map(enemySet => {
        const { Density, RespawnTime } = habitat.Properties
        return {
            Name: habitat.Name,
            ...enemySet,
            Density,
            RespawnTime
        }
    })
}).flat()

function getHabitatsContainingEnemySetId(enemySetId) {
    return habitatsFlattened.filter(habitat => habitat.EnemySetId === enemySetId)
}

// Add the EnemySet metadata (EnemySetId, ActorTag) to each of its Members[], and return only Members
const enemySetsFlattened = allEnemySets.map(enemySet => {
    const members = enemySet.Members.map(member => {
        return {
            EnemySetId: enemySet.EnemySetId,
            ActorTag: enemySet.ActorTag,
            ...member
        }
    })
    return members
}).flat()


// Return all enemy sets that contain the enemy ID
function getEnemySetsContainingEnemyId(enemyId, filterOutOtherEnemies) {
    // Filter out irrelevant enemies inside the enemySet
    if (filterOutOtherEnemies) {
        return enemySetsFlattened.filter(member => member.EnemyId === enemyId)
    }

    // Return the entire enemy set, in case I want to add "Spawn alongside XYZ enemies" info
    const enemySetsContainingEnemyId =
        allEnemySets
            .filter(enemySet => enemySet.Members.find(member => member.EnemyId === enemyId))

    const flattened = enemySetsContainingEnemyId.map(enemySet => {
        const members = enemySet.Members.map(member => {
            return {
                // Indicates that this enemy is not necessarily the one in question; it's a different enemy that spawns in the same enemy set
                spawnsAlongside: member.EnemyId !== enemyId,
                EnemySetId: enemySet.EnemySetId,
                ActorTag: enemySet.ActorTag,
                ...member
            }
        })
        return members
    }).flat()

    return flattened
}


// Enemies are consolidated so that if they have the same name and same type (normal, named enemy, boss..), they will be grouped into one object
const enemiesGroupedByNameAndType = enemiesData.reduce((acc, enemy) => {
    let enemyTypeParentObj = acc.find(en => en.name_id === enemy.name_id && en.is_boss === enemy.is_boss)

    if (!enemyTypeParentObj) {
        acc.push({
            id: enemy.enemy_id,
            name_id: enemy.name_id,
            is_boss: enemy.is_boss,
            // name: getText("enemyparam_text", enemy.name_id),
            subcategoryName: getSubcategory(enemy.is_boss),
            enemyVariantIds: [enemy.enemy_id],
            enemyVariants: [enemy]
        })
    }
    else {
        enemyTypeParentObj.enemyVariantIds.push(enemy.enemy_id)
        enemyTypeParentObj.enemyVariants.push(enemy)
    }

    return acc;
}, [])

// Get all relevant data for a specific enemy (params, enemy set metadata, habitat metadata)
export function getEnemyVariantData(enemyVariant) {
    // Get all possible enemy sets that this enemy belongs to
    const enemySets = getEnemySetsContainingEnemyId(enemyVariant.enemy_id, true)

    // For each enemy set, append the enemy data from the server
    const enemySetsAppended = enemySets.map(enemySet => {

        // Get all habitats that this enemyset appears in
        const habitats = getHabitatsContainingEnemySetId(enemySet.EnemySetId)

        const mapId = enemySet.EnemySetId.replace("area", "Area").split("ES_").pop().split("_Area")[0].split("_Step")[0]

        const drop_items =
            getEnemyDropsDetails(enemyVariant.drop_items)
                .filter(drop => drop.content_id === mapId)

        const treasureChests =
            getEnemyTreasureChestDetails(enemyVariant.drop_items)
                .filter(drop => drop.content_id === mapId)

        enemyVariant.appearance = enemyVariant.appearance.map(appearanceObj => {
            const hexStr = (appearanceObj.attribute).toString(16)
            const binaryStr = parseInt(hexStr, 16).toString(2)
            const reversed = binaryStr.split("").reverse()
            const indices = []
            reversed.forEach((char, index) => {
                if (char === "1") indices.push(index)
            })
            return {
                ...appearanceObj,
                categories: indices
            }
        })

        return {
            mapId,
            habitats,
            ...enemySet,
            ...enemyVariant,
            drop_items,
            treasureChests
        }
    })

    return enemySetsAppended
}

// Enemy groups
const enemies = () => enemiesGroupedByNameAndType.map(enemyGroup => {
    const enemyVariants =
        enemyGroup.enemyVariants
            .map(enemyVariant => getEnemyVariantData(enemyVariant))
            .flat()

    return {
        ...enemyGroup,
        enemyVariants,
        assets: {
            icon: `/UI/Icon/Class/UI_IconClass_Nodata.png`,
        },
        thumb: getThumbnail(),
        // entryTypes: ["Enemy"]
    }
})
// .filter(enemy => enemy.enemyVariants.some(enemyVariant => enemyVariant.appearance.some(appearance => appearance.categories.includes(2))))

function getThumbnail() {
    return
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

const flattened = enemies().map(enemyGroup =>
    enemyGroup.enemyVariants.map(enemyVariant => {
        return {
            ...enemyVariant,
            name: enemyGroup.name
        }
    }))
    .flat()

export function getEnemiesByDroppedItem(itemId) {
    return flattened.filter(enemyVariant => enemyVariant.drop_items.some(drop => drop.item_index === itemId))
}

export function getEnemiesByDroppedChestId(chestId) {
    return flattened.filter(enemyVariant => enemyVariant.treasureChests.some(chest => chest.item_index === chestId))
}

// export default enemiesGroupedByNameAndType;
// export default allEnemySets;
// export default allEnemyHabitats;
export default enemies;