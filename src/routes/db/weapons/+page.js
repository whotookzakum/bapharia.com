import texts from "$lib/apiextAGS/texts/en_US.json";
import weaponsData from "$lib/apiext/weapons.json";
import weaponsStatsData from "$lib/apiext/weapon_status_levels.json";
import recipesData from "$lib/apiext/craft.json";
import itemsData from "$lib/apiext/items.json";
import weaponPerks from "$lib/apiext/weaponperks.json";
import masterPerkPicks from "$lib/apiext/master_weapon_perk_picks.json";
import perksData from "$lib/apiext/perks.json";
import lotteryData from "$lib/apiext/master_reward_lottery_groups.json";
import treasuresData from "$lib/apiext/treasures.json";
import enemiesData from "$lib/apiext/enemyparams.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}

function findObjectByItemId(objectsArray, innerObject, itemId, keyToFind) {
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

export const load = async () => {

    const weapons = weaponsData.map(weapon => {
        weapon.name = getText("weapon_text", weapon.name)
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

        const recipe = recipesData.find(rec => rec.out_item_id === weapon.id) || null
        if (recipe) {
            recipe.materials = recipe.materials.map(mat => {
                const itemData = itemsData.find(item => item.id === mat.item_id)
                return {
                    ...mat,
                    name: getText("item_text", itemData.name),
                    source: getText("item_text", itemData.obtaining_route_detail_id)
                }
            })
        }

        const abilities = masterPerkPicks.filter(perk => perk.table_id === weapon.level_table).map(currentPerk => {
            const weaponPerk = weaponPerks.find(perk => perk.id === currentPerk.perk_id)
            let perkData = perksData.find(perk => perk.id === weaponPerk.perk_id)
            const name = getText("perk_text", perkData.ability_name1)

            return {
                ...currentPerk,
                probability: currentPerk.weight,
                name
            }
        })

        // Assuming no duplicates of the Weapon in this specific Treasure Box... findObjectByItemId() only returns the first instance.
        // Since it looks like treasure boxes have, for example, 2 lotteries in them at 50/50 and both of them contain the weapon, we can assume 100% chance of getting a lottery with a weapon. 
        // Enemy > Treasure > Lottery > Weapon
        let treasureSources = []

        // The lottery that contains the weapon
        const availableLotteries = findObjectByItemId(lotteryData, "rewards", weapon.id, "item_id")
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
                            probability: dropData.drop_rate / 100,
                            location: dropData.content_id
                        }
                    )
                }
            }
        }

        return {
            ...weapon,
            thumb: `/UI/Icon/Weapon/UI_Icon_${weapon.id}.png`,
            classImg,
            stats,
            elementImg,
            recipe,
            abilities,
            treasureSources
        }
    })
    // console.log(weapons)

    return {
        weapons
    }
}