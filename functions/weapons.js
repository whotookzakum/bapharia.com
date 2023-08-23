import weaponsData from "$bp_server/japan/weapons.json";
import weaponsStatsData from "$bp_server/japan/weapon_status_levels.json";
import craftingRecipesData from "$bp_server/japan/craft.json";
import masterPerkPicks from "$bp_server/japan/master_weapon_perk_picks.json";
import lotteriesData from "$bp_server/japan/master_reward_lottery_groups.json";
import itemsData from "$bp_server/japan/items.json";
import weaponPerks from "$bp_server/japan/weaponperks.json";
import perksData from "$bp_server/japan/perks.json";
import treasuresData from "$bp_server/japan/treasures.json";
import enemiesData from "$bp_server/japan/enemyparams.json";
import { getText } from "./utils";
import { getMapName } from "./maps";
import { getItemThumbnail } from "./items";
import enemies, { getEnemiesByDroppedChestId, getEnemyVariantData } from "./enemies";

// TODO 3d models
// TODO abilities only obtainable via drop

export function findObjectByItemId(objectsArray, innerObject, itemId, keyToFind) {
    for (let i = 0; i < objectsArray.length; i++) {
        const innerObjArray = objectsArray[i][innerObject];
        for (let j = 0; j < innerObjArray.length; j++) {
            if (innerObjArray[j][keyToFind] === itemId) {
                return objectsArray[i];
            }
        }
    }
    return null; // Return null if the object is not found
}

const weapons = weaponsData.map(weapon => {
    const name = getText("weapon_text", weapon.name)
    const desc = getText("weapon_text", weapon.desc)
    const classImg =
        weapon.equip_class > 10
            ? `/UI/Icon/Class/UI_IconClass_${weapon.equip_class}.png`
            : `/UI/Icon/Class/UI_IconClass_0${weapon.equip_class}.png`

    const stats = weaponsStatsData.filter(statData => statData.pattern_id == weapon.id)

    let elementImg;
    switch (weapon.attribute) {
        case 3:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_1.png`
            break;
        case 5:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_2.png`
            break;
        case 4:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_3.png`
            break;
        case 2:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_4.png`
            break;
        case 6:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_5.png`
            break;
        case 7:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_6.png`
            break;
        default:
            elementImg = `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
    }

    const abilities = []

    const recipe = craftingRecipesData.find(rec => rec.out_item_id === weapon.id) || null
    if (recipe) {
        recipe.materials = recipe.materials.map(mat => {
            const itemData = itemsData.find(item => item.id === mat.item_id)
            return {
                ...mat,
                id: `${itemData.id}`,
                thumb: getItemThumbnail(mat.item_id),
                name: getText("item_text", itemData.name),
                sourceDesc: getText("item_text", itemData.obtaining_route_detail_id)
            }
        })

        // If recipe exists, add Special Effects that can be obtained from crafting
        // At this time, there is only one perk per perkPick. If in the future there is a perkPick with 2 perks, i.e. Bapharia Killer that provide Quad-Arm Slayer and Golem Slayer, might need to revisit this code to see if they have separate percentages, and if they do, find where they are determined.
        const perkTableId = recipe.killer_perk_pick
        const allPerksInTable = masterPerkPicks.filter(perk => perk.table_id === perkTableId)
        const perksForDroppedWeapon = getWeaponPerks(allPerksInTable, "crafting")
        abilities.push(perksForDroppedWeapon)
    }

    // Assuming no duplicates of the Weapon in this specific Treasure Box... findObjectByItemId() only returns the first instance.
    // Since it looks like treasure boxes have, for example, 2 lotteries in them at 50/50 and both of them contain the weapon, we can assume 100% chance of getting a lottery with a weapon. 
    // Enemy > Treasure > Lottery > Weapon
    let treasureSources = []

    // There may be multiple lotteries; I think pick_type 0 is random and pick_type 1 is for your current class or vice versa; not sure about pick_type 2
    const lotteriesContainingWeapon = lotteriesData.filter(lottery => lottery.rewards.some(reward => reward.item_id === weapon.id))
    const treasuresContainingLottery = treasuresData.filter(treasure => treasure.lot_rate.some(rate => lotteriesContainingWeapon.some(lotto => lotto.id === rate.reward_master_id)))
    const enemiesDroppingTreasure = enemiesData.filter(enemy => enemy.drop_items.some(drop => treasuresContainingLottery.some(treasure => treasure.id === drop.item_index)))

    // Get all unique perk pick ids inside of all lottery rewards for this weapon
    const perkTableIdsFromDrops = lotteriesContainingWeapon.reduce((acc, lottery) => {
        lottery.rewards.forEach(reward => {
            if (!acc.includes(reward.perk_pick_id)) acc.push(reward.perk_pick_id)
        })
        return acc
    }, [])

    // For each perk from a dropped weapon, add it to the Special Effects list
    perkTableIdsFromDrops.forEach(perkTableId => {
        const allPerksInTable = masterPerkPicks.filter(perk => perk.table_id === perkTableId)
        const perksForDroppedWeapon = getWeaponPerks(allPerksInTable, "enemyDrop")
        abilities.push(perksForDroppedWeapon)
    })


    // The lottery that contains the weapon
    const availableLotteries = findObjectByItemId(lotteriesData, "rewards", weapon.id, "item_id")
    if (availableLotteries) {
        // The treasure box that contains the lottery
        const treasureData = findObjectByItemId(treasuresData, "lot_rate", availableLotteries.id, "reward_master_id")

        if (treasureData) {
            // The enemy that drops the treasure box
            const enemyData = findObjectByItemId(enemiesData, "drop_items", treasureData.id, "item_index")

            if (enemyData) {
                // The drop data of the treasure box
                const dropData = enemyData.drop_items.find(drop => drop.item_index === treasureData.id)
                treasureSources.push(
                    {
                        name: getText("enemyparam_text", enemyData.name_id),
                        probability: dropData.drop_rate,
                        enemy_id: enemyData.enemy_id,
                        location: {
                            id: dropData.content_id,
                            name: getMapName(dropData.content_id)
                        }
                    }
                )
            }
        }
    }

    return {
        ...weapon,
        id: `${weapon.id}`,
        name,
        desc,
        thumb: getWeaponThumbnail(weapon.id),
        classImg,
        stats,
        elementImg,
        recipe,
        abilities: abilities.flat(),
        treasureSources,
        subcategoryName: getSubcategory(weapon.is_for_weapon_stickers),
        entryTypes: ["Weapon"]
    }
})

export function getWeaponThumbnail(id) {
    return `/UI/Icon/Weapon/UI_Icon_${id}.png`
}

function getSubcategory(category) {
    switch (category) {
        case 0:
            return {
                ja_JP: "武器",
                en_US: "Weapon"
            }
        case 1:
            return {
                ja_JP: "武器スキン",
                en_US: "Weapon Skin"
            }
    }
}

function getWeaponPerks(perksInTable, source) {
    return perksInTable.map(perkPick => {
        const { success_max_value, success_min_value, big_success_max_value, big_success_min_value, weight } = perkPick

        const weaponPerk = weaponPerks.find(wepPerk => wepPerk.id === perkPick.perk_id)
        const weaponPerkName = getText("weapon_perk_text", weaponPerk.name)
        // Weapon perk description is "column scheduled for deletion" so not needed for now

        // There should be only one unique "perk" which *may* have multiple "Boar Killer" "Golem Killer" lines, but those are separated as ability_name1 and ability_name2
        // If there are multiple perks in the future for some reason, use .filter instead of .find
        const perk = perksData.find(perk => perk.id === weaponPerk.perk_id)
        const ability_name1 = getText("perk_text", perk.ability_name1)
        const ability_name2 = perk.ability_name2 !== 0 ? getText("perk_text", perk.ability_name2) : null

        let source_enemies = []

        if (source === "enemyDrop") {
            const lotteriesContainingWeapon = lotteriesData.filter(lottery => lottery.rewards.some(reward => reward.perk_pick_id === perkPick.table_id))
            const treasuresContainingLottery = treasuresData.filter(treasure => treasure.lot_rate.some(rate => lotteriesContainingWeapon.some(lotto => lotto.id === rate.reward_master_id)))

            // Get unique enemy ids that drop the chest that contains this perk
            source_enemies = treasuresContainingLottery.map(treasure => {
                return getEnemiesByDroppedChestId(treasure.id)
                    .reduce((acc, enemy) => {
                        if (!acc.some(obj => obj.enemy_id === enemy.enemy_id)) {
                            acc.push({
                                name: enemy.name,
                                enemy_id: enemy.enemy_id,
                                mapId: enemy.mapId
                            })
                        }
                        return acc
                    }, [])
            }).flat()
        }

        return {
            success_max_value,
            success_min_value,
            big_success_max_value,
            big_success_min_value,
            weight,
            name: weaponPerkName,
            ability_name1,
            ability_name2,
            source,
            source_enemies
        }
    })
}

export default weapons;