import en_US from "./global/texts/en_US.json";
import ja_JP from "./japan/texts/ja_JP.json";
import itemsData from "./japan/items.json";
import enemiesData from "./japan/enemyparams.json";
import treasuresData from "./japan/treasures.json";
import costumesData from "./japan/costume.json";
import gesturesData from "./japan/emotes.json";
import imagineData from "./japan/imagine.json";
import imagineParams from "./japan/imagine/param_level.json";
import imaginePerks from "./japan/imagine/perk_pick.json";
import weaponPerks from "./japan/weaponperks.json";
import perksData from "./japan/perks.json";
import imagineRecipesData from "./japan/imagine/recepi.json";
import liquidMemoriesData from "./japan/liquid_memory.json";
import accumulationLotteriesData from "./japan/liquid_memory_accumulate_lottery_table.json";
import stampsData from "./japan/stamps.json";
import tokensData from "./japan/token.json";
import weaponsData from "./japan/weapons.json";
import weaponsStatsData from "./japan/weapon_status_levels.json";
import craftingRecipesData from "./japan/craft.json";
import masterPerkPicks from "./japan/master_weapon_perk_picks.json";
import lotteryData from "./japan/master_reward_lottery_groups.json";


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

    if (entryType === "weapon") {
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

    if (entryType === "imagine") {
        switch (category) {
            case 0:
                return {
                    ja_JP: "エンハンスイマジン",
                    en_US: "Augment Imagine"
                }
            case 1:
                return {
                    ja_JP: "バトルイマジン",
                    en_US: "Combat Imagine"
                }
        }
    }

    if (entryType === "enemy") {
        switch (category) {
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

export const getGestures = () => {
    const gestures = gesturesData.map(gesture => {
        const name = getText("master_emote_text", gesture.name)
        const thumb = `/UI/Icon/Emote/UI_Emote_${gesture.emote_id}.png`

        return {
            ...gesture,
            id: gesture.emote_id,
            bapharia: {
                name,
                thumb,
                category: { ja_JP: "ジェスチャー", en_US: "Gesture" },
                filterGroup: "gestures"
            }
        }
    })
    return gestures
}

export const getImagines = () => {
    const imagines = imagineData.map(imagine => {
        const name = getText("master_imagine_text", imagine.imagine_name)
        const desc = getText("master_imagine_text", imagine.imagine_desc)
        let thumb = `/UI/Icon/Imagine/Battle/UI_Icon_${imagine.id}.png`
        let slot;
        if (imagine.imagine_type === 0) {
            thumb = `/UI/Icon/Imagine/Picture/UI_Icon_${imagine.id}.png`
            Object.keys(imagine).filter(key => key.includes("equip_position")).forEach(key => {
                if (imagine[key] === 1) {
                    let slotId = key.split("equip_position")[1]
                    slot = `/UI/MyCharaMenu/UI_MyCharaMenuImagineIcon2_${slotId}.png`
                }
            })
        }
        let element = `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
        if (imagine.attribute > 0) {
            // Attributes don't match their descriptions, so temporarily using text to find element.
            // element = `/UI/Icon/Attribute/UI_IconAttribute_${imagine.attribute - 1}.png`
            if (desc.ja_JP.includes("火属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_1.png`
            if (desc.ja_JP.includes("雷属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_2.png`
            if (desc.ja_JP.includes("氷属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_3.png`
            if (desc.ja_JP.includes("土属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_4.png`
            if (desc.ja_JP.includes("光属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_5.png`
            if (desc.ja_JP.includes("闇属性")) element = `/UI/Icon/Attribute/UI_IconAttribute_6.png`
        }
        const params = imagineParams.filter(item => item.pattern_id === imagine.param_type)
        const abilities = imaginePerks.filter(perk => perk.table_id === imagine.table_id).map(imaginePerk => {
            const weaponPerkData = weaponPerks.find(perk => perk.id === imaginePerk.imagine_perk_id)
            const name = getText("weapon_perk_text", weaponPerkData.name)

            let stats = []
            for (let i = 0; i < 2; i++) {
                let perkData = perksData.find(perk => perk.id === weaponPerkData.perk_id)
                let id = perkData[`ability_name${i + 1}`]
                let statName = getText("perk_text", id)
                if (statName) {
                    stats.push(
                        {
                            name: statName,
                            value: weaponPerkData[`ability_parts${i + 1}_value1`]
                        }
                    )
                }
            }

            return {
                probability: imaginePerk.imagine_perk_rate,
                name,
                stats
            }
        })

        const recipe = imagineRecipesData.find(rec => rec.imagin_id === imagine.id)
        recipe.materials = recipe.materials.map(mat => {
            const itemData = itemsData.find(item => item.id === mat.item_id)
            return {
                ...mat,
                name: getText("item_text", itemData.name),
                source: getText("item_text", itemData.obtaining_route_detail_id)
            }
        })

        return {
            ...imagine,
            id: `${imagine.id}`,
            bapharia: {
                name,
                desc,
                thumb,
                slot,
                element,
                params,
                // Skill name and skill type on client?
                abilities,
                recipe,
                category: getCategory("imagine", imagine.imagine_type),
                filterGroup: "imagine"
            }
        }
    })
    return imagines
}

export const getLiquidMemories = () => {

    const liquidMemories = liquidMemoriesData.map(memory => {
        const name = getText("master_liquid_memory_text", memory.efficacy_name)

        memory.efficacy_parameters = memory.efficacy_parameters.map(level => {
            // Currently all liquid memories use "use_count" and not "use_time"
            const desc = getText("master_liquid_memory_text", level.efficacy_value_desc)
            desc.en_US = desc.en_US.replace("{value}", level.efficacy_value).replace("{count}", level.use_count)
            desc.ja_JP = desc.ja_JP.replace("{value}", level.efficacy_value).replace("{count}", level.use_count).replace("(実機非表示)", "")
            
            return {
                ...level,
                desc
            }
        })

        const accumulate = memory.accumulate_condition_parameters.map(params => {
            let desc =
                getText("master_liquid_memory_text", params.accumulate_condition_desc)

            let rates = []

            if (desc.en_US.includes("{value}")) {
                desc.en_US = desc.en_US.replace("{value}", params.value)
            }
            if (desc.ja_JP.includes("{value}")) {
                desc.ja_JP = desc.ja_JP.replace("{value}", params.value)
            }
            // For accumulation conditions that don't have a table, maybe "value" corresponds to the amount gained. i.e. clear a mission = 500 charge (id: 10)
            // else {
            //     rates.push(
            //         {
            //             accumulate_value: params.value,
            //             lottery_rate: 500
            //         }
            //     )
            // }

            if (params.random_accumulate_table_id) {
                rates = accumulationLotteriesData
                    .filter(lottery => lottery.table_type === params.random_accumulate_table_id)
            }

            return {
                ...params,
                desc,
                rates
            }
        })

        return {
            ...memory,
            id: `${memory.id}`,
            bapharia: {
                name,
                accumulate_condition_parameters: accumulate,
                category: { ja_JP: "リキッドメモリ", en_US: "Liquid Memory" },
                filterGroup: "liquidMemories"
            }
        }
    })
    return liquidMemories
}

export const getStampSets = () => {
    const stampSets = stampsData.map(stampSet => {
        const name = getText("master_stamp_categories_text", stampSet.category_name_text)
        return {
            ...stampSet,
            id: `${stampSet.category_id}`,
            bapharia: {
                name,
                category: { ja_JP: "スタンプセット", en_US: "Stamp Set" },
                filterGroup: "stampSets"
            }
        }
    })
    return stampSets
}

export const getTokens = () => {
    const tokens = tokensData.map(token => {
        const name = getText("master_token_text", token.name)
        const desc = getText("master_token_text", token.desc)
        const thumb = `/UI/Icon/Token/UI_Icon_${token.id}.png`
    
        return {
            ...token,
            id: `${token.id}`,
            bapharia: {
                name,
                desc,
                thumb,
                category: { ja_JP: "トークン", en_US: "Token" },
                filterGroup: "tokens"
            }
        }
    })
    return tokens
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

export const getWeapons = () => {
    const weapons = weaponsData.map(weapon => {
        const name = getText("weapon_text", weapon.name)
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

        const recipe = craftingRecipesData.find(rec => rec.out_item_id === weapon.id) || null
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
            const perk_name = getText("perk_text", perkData.ability_name1)

            return {
                ...currentPerk,
                probability: currentPerk.weight,
                perk_name
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
            id: `${weapon.id}`,
            bapharia: {
                name,
                thumb: `/UI/Icon/Weapon/UI_Icon_${weapon.id}.png`,
                classImg,
                stats,
                elementImg,
                recipe,
                abilities,
                treasureSources,
                category: getCategory("weapon", weapon.is_for_weapon_stickers),
                filterGroup: "weapons"
            }
        }
    })
    return weapons
}

export const getDatabaseEntries = () => {
    const items = getItems()
    const enemies = getEnemies()
    const costumes = getCostumes()
    const gestures = getGestures()
    const imagines = getImagines()
    const liquidMemories = getLiquidMemories()
    const stampSets = getStampSets()
    const tokens = getTokens()
    const weapons = getWeapons()

    return [...items, ...enemies, ...costumes, ...gestures, ...imagines, ...liquidMemories, ...stampSets, ...tokens, ...weapons]
}