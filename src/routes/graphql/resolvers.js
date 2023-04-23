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
import skillsData from "./japan/skill_data.json";
import mapsData from "./maps.json";
import adventureBoardsData from "./japan/master_adventure_board.json"
import _ from "lodash";


function getText(ns, id) {
    const texts = {
        ja_JP,
        en_US
    }
    let result = {};
    Object.keys(texts).forEach(lang => {
        const namespaceObj = texts[lang].find(namespace => namespace.name === ns) || {}
        const textObj = namespaceObj.texts.find(obj => obj.id == id) || {}
        result[lang] = textObj.text || "-"
    })
    return result
}

function getCategory(entryType, category) {

    if (entryType === "skill") {
        switch (category) {
            case 0: // LMB
            case 1: // RMB
                return {
                    ja_JP: "ベースアクション",
                    en_US: "Basic Attack"
                }
            case 2: // Tac skill attack
            case 3: // Tac skill attack
            case 4: // Tac skill attack
            case 5:  // Tac skill buff
                return {
                    ja_JP: "タクティカルスキル",
                    en_US: "Tactical Skill",
                }
            case 6:
                return {
                    ja_JP: "ULTスキル",
                    en_US: "Ultimate Attack",
                }
            case 7:
                return {
                    ja_JP: "回避",
                    en_US: "Dodge",
                }
            case 8:
                return {
                    ja_JP: "クラスアビリティ",
                    en_US: "Class Ability",
                }
            case 9:
                return {
                    ja_JP: "ベースアビリティ",
                    en_US: "Base Ability", // All classes
                }
            case 10:
                return {
                    ja_JP: "エリアル攻撃",
                    en_US: "Aerial Attack",
                }
            case 11:
                return {
                    ja_JP: "？？？",
                    en_US: "???",
                }
            case 12:
                return {
                    ja_JP: "踏み台ジャンプ",
                    en_US: "Springboard Jump",
                }
            case 13:
                return {
                    ja_JP: "受け身",
                    en_US: "受け身",
                }
        }
    }

    if (entryType === "map") {
        if (category.includes("dng") || category.includes("Dng")) {
            return {
                ja_JP: "ダンジョン",
                en_US: "Dungeon"
            }
        }
        if (category.includes("fld") || category.includes("Fld")) {
            return {
                ja_JP: "フィールド",
                en_US: "Field"
            }
        }
        if (category.includes("cty") || category.includes("Cty")) {
            return {
                ja_JP: "街",
                en_US: "City"
            }
        }
        if (category.includes("arn") || category.includes("Arn")) {
            return {
                ja_JP: "闘技場",
                en_US: "Arena"
            }
        }
        if (category.includes("twr") || category.includes("Twr")) {
            return {
                ja_JP: "塔",
                en_US: "Tower"
            }
        }
        if (category.includes("rai") || category.includes("Rai")) {
            return {
                ja_JP: "レイド",
                en_US: "Raid"
            }
        }
        // "pat" is still unknown
        return {
            ja_JP: "マップ",
            en_US: "Map"
        }
    }

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
                    en_US: "Augment Echo"
                }
            case 1:
                return {
                    ja_JP: "バトルイマジン",
                    en_US: "Combat Echo"
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

function getThumbnail(entryType, category, id, class_type) {

    if (entryType === "map") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        return `/UI/Icon/QuestJournal/UI_QuestJournal_Adventure_L.png`
    }

    if (entryType === "enemy") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        return `/UI/Icon/Unidentified/UI_Icon_Unidentified_0.png`
    }

    if (entryType === "liquidMemory") {
        switch (id) {
            case 12: // increased enemy drop rate
            case 22: // increased enemy exp
            case 10: // faster gathering speed
            case 20: // greater harvest when gathering
                return `/images/liquidMemory/orange.png`
            case 18: // increased alliance exp
                return `/images/liquidMemory/purple.png`
            case 17: // more GC from missions
                return `/images/liquidMemory/blue.png`
            case 21: // reduce luno cost when crafting weapons
            case 19: // increased profits when selling
            case 15: // cheaper prices from npc shops
                return `/images/liquidMemory/green.png`
        }
    }

    if (entryType === "stamp") {
        return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    }

    if (entryType === "item") {
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

    if (entryType === "skill") {
        // Dummy Action
        if (id === 102) {
            return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
        switch (category) {
            case 0: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`
            case 1: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`
            case 2:
            case 3:
            case 4:
            case 5:
                return `/UI/Icon/PlayerSkill/Class${class_type}/UI_PlayerSkill_${id}.png`
            case 6:
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`
            case 8:
                return `/UI/Icon/PlayerAbility/Class/Class${class_type}/UI_PlayerAbilityC_${id}.png`
            case 9:
                return `/UI/Icon/PlayerAbility/Base/Class${class_type}/UI_PlayerAbilityB_${id}.png`
            case 7: // Dodge
            case 10: // Aerial attack
            case 11: // ???
            case 12: // Springboard jump
            case 13: // Ukemi 
            default:
                return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
    }

    if (entryType === "costume") {
        // Pure F Cherry underwear
        if (id.includes("190000405")) {
            return `/UI/Icon/Common/UI_Icon_Empty.png`
        }
        return `/UI/Icon/Costume/${category}/${id}.png`
    }

    if (entryType === "token") {
        if (id === 149000100 || id === 120000900) {
            return `/UI/Icon/Class/UI_IconClass_Nodata.png`
        }
        return `/UI/Icon/Token/UI_Icon_${id}.png`
    }
}

export const getItems = () => {

    const items = itemsData.map(item => {
        const name = getText("item_text", item.name)
        const desc = getText("item_text", item.desc)
        const sourceDesc = getText("item_text", item.obtaining_route_detail_id)
        const effectDesc = getText("item_text", item.item_effect_desc_text)
        const thumb = getThumbnail("item", item.category, item.id)
        const category = getCategory("item", item.category)

        return {
            ...item,
            id: `${item.id}`,
            name,
            desc,
            sourceDesc,
            effectDesc,
            thumb,
            category,
            filterGroup: "items"
        }
    })

    return items
}

export const getEnemies = () => {

    const enemies = enemiesData.map(enemy => {
        const name = getText("enemyparam_text", enemy.name_id)
        let found_in = []

        // Spawn locations are found in client. Some enemies may spawn in a map but not drop anything.

        const allDrops =
            enemy.drop_items
                .map(drop => {
                    const item = itemsData.find(itm => itm.id === drop.item_index)
                    if (item) {
                        return {
                            ...drop,
                            name: getText("item_text", item.name),
                            is_treasure_chest: false
                        }
                    }

                    const treasure = treasuresData.find(treasure => treasure.id === drop.item_index)
                    if (treasure) {
                        const chestData = getTreasureChestData(drop.item_index)
                        return {
                            ...drop,
                            name: { ja_JP: "宝箱", en_US: "Treasure Chest" },
                            is_treasure_chest: true,
                            ...chestData
                        }
                    }
                })

        if (allDrops.length > 0) {
            const dropsByLocation = _.groupBy(allDrops, (drop) => drop?.content_id)
            if (dropsByLocation) {
                found_in =
                Object.entries(dropsByLocation)
                    .map(([mapId, drops]) => {
                        const mapData = getMapData(mapId)
                        return {
                            ...mapData,
                            drops
                        }
                    })
            }
        }

        return {
            ...enemy,
            id: enemy.enemy_id,
            name,
            found_in,
            thumb: getThumbnail("enemy"),
            category: getCategory("enemy", enemy.is_boss),
            filterGroup: "enemies"
        }
    })

    return enemies
}

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
        const thumb = getThumbnail("costume", pathToThumb, costume.icon_name)

        return {
            ...costume,
            id: `${costume.id}`,
            name,
            desc,
            thumb,
            category: { ja_JP: "コスチューム", en_US: "Costume" },
            filterGroup: "costumes"
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
            name,
            thumb,
            category: { ja_JP: "ジェスチャー", en_US: "Emote" },
            filterGroup: "gestures"
        }
    })
    return gestures
}

export const getImagines = () => {
    const imagines = imagineData.map(imagine => {
        const name = getText("master_imagine_text", imagine.imagine_name)
        const desc = getText("master_imagine_text", imagine.imagine_desc)
        let thumb = `/UI/Icon/Imagine/Battle/UI_Icon_${imagine.id}.png`
        let slotImg;
        if (imagine.imagine_type === 0) {
            thumb = `/UI/Icon/Imagine/Picture/UI_Icon_${imagine.id}.png`
            Object.keys(imagine).filter(key => key.includes("equip_position")).forEach(key => {
                if (imagine[key] === 1) {
                    let slotId = key.split("equip_position")[1]
                    slotImg = `/UI/MyCharaMenu/UI_MyCharaMenuImagineIcon2_${slotId}.png`
                }
            })
        }
        let elementImg = `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
        if (imagine.attribute > 0) {
            // Attributes don't match their descriptions, so temporarily using text to find elementImg.
            // elementImg = `/UI/Icon/Attribute/UI_IconAttribute_${imagine.attribute - 1}.png`
            if (desc.ja_JP.includes("火属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_1.png`
            if (desc.ja_JP.includes("雷属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_2.png`
            if (desc.ja_JP.includes("氷属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_3.png`
            if (desc.ja_JP.includes("土属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_4.png`
            if (desc.ja_JP.includes("光属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_5.png`
            if (desc.ja_JP.includes("闇属性")) elementImg = `/UI/Icon/Attribute/UI_IconAttribute_6.png`
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
                id: `${itemData.id}`,
                name: getText("item_text", itemData.name),
                sourceDesc: getText("item_text", itemData.obtaining_route_detail_id)
            }
        })

        return {
            ...imagine,
            id: `${imagine.id}`,
            name,
            desc,
            thumb,
            slotImg,
            elementImg,
            params,
            // Skill name and skill type on client?
            abilities,
            recipe,
            category: getCategory("imagine", imagine.imagine_type),
            filterGroup: "imagine"

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
            desc.en_US = desc.en_US.replace("{value}", level.efficacy_value).replace("{count}", level.use_count).replace("(Not Visible in Live Build) ", "")
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
            name,
            thumb: getThumbnail("liquidMemory", _, memory.id),
            accumulate_condition_parameters: accumulate,
            category: { ja_JP: "リキッドメモリ", en_US: "Liquid Memory" },
            filterGroup: "liquidMemories"
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
            name,
            thumb: getThumbnail("map"),
            category: { ja_JP: "スタンプセット", en_US: "Stamp Set" },
            filterGroup: "stampSets"
        }
    })
    return stampSets
}

export const getTokens = () => {
    const tokens = tokensData.map(token => {
        const name = getText("master_token_text", token.name)
        const desc = getText("master_token_text", token.desc)
        const thumb = getThumbnail("token", _, token.id)

        return {
            ...token,
            id: `${token.id}`,
            name,
            desc,
            thumb,
            category: { ja_JP: "トークン", en_US: "Token" },
            filterGroup: "tokens"
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

        const recipe = craftingRecipesData.find(rec => rec.out_item_id === weapon.id) || null
        if (recipe) {
            recipe.materials = recipe.materials.map(mat => {
                const itemData = itemsData.find(item => item.id === mat.item_id)
                return {
                    ...mat,
                    id: `${itemData.id}`,
                    name: getText("item_text", itemData.name),
                    sourceDesc: getText("item_text", itemData.obtaining_route_detail_id)
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
                            probability: dropData.drop_rate,
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
    })
    return weapons
}

// Skill related 
function getClassThumbnail(classId) {
    // Class 6 = Blast Archer
    // Class 7 = Twin Striker
    // Class 11 = Spell Caster
    // Class 12 = Aegis Fighter
    // Class 19 = Heavy Smasher 
    if (classId === 0) return `/UI/Icon/Class/UI_IconClass_All.png`
    if (classId === 20) return `/UI/Icon/Class/UI_IconClass_Nodata.png`
    if (classId < 10) return `/UI/Icon/Class/UI_IconClass_0${classId}.png`
    return `/UI/Icon/Class/UI_IconClass_${classId}.png`
}

const skills_A = [
    615, 608, 620,
    710, 712, 721, 730, 731,
    1106, 1115, 1119, 1118, 1114, 1121,
    1232, 1231, 1207, 1230, 1211,
    1910, 1911, 1912, 1920, 1921, 1922
]

const skills_A_B = [
    732,
    1103, 1113
]

const skills_A_D = [
    602, 623, 619, 617, 618,
    1117, 1104,
    1220, 1222,
    1930, 1931, 1932
]

const skills_A_R = [
    711, 714, 715
]

const skills_B = [
    609,
    713, 716, 723,
    1110, 1116,
    1205, 1206, 1223,
    1923, 1913
]

const skills_B_D = [
    621
]

const skills_D = [
    1212
]

const skills_R = [
    613, 622,
    1233,
    1933
]

const skills_R_B = [

]

const skills_R_D = [

]

const ele_light = [
    1230, 1231, 1232
]

const ele_earth = [
    623,
    1920, 1930, 1911, 1932
]

const ele_fire = [
    730, 731, 732,
    1103, 1113, 1119
]

const ele_thunder = [
    1106, 1115, 1118
]

const ele_ice = [
    1117, 1104, 1114
]

function getSkillTypeImg(skill) {
    // A = attack?
    // B = buff
    // R = recovery
    // D = debuff?

    if (skills_A.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png`
    if (skills_A_B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_B.png`
    if (skills_A_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png`
    if (skills_A_R.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_R.png`
    if (skills_B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B.png`
    if (skills_B_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B_D.png`
    if (skills_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_D.png`
    if (skills_R.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R.png`
    if (skills_R_B.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_B.png`
    if (skills_R_D.includes(skill.skill_id)) return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_D.png`
    return `/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png`
}

function getElementImg(skill) {
    if (ele_fire.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_1.png`
    if (ele_thunder.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_2.png`
    if (ele_ice.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_3.png`
    if (ele_earth.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_4.png`
    if (ele_light.includes(skill.skill_id)) return `/UI/Icon/Attribute/UI_IconAttribute_5.png`
    return `/UI/Icon/Attribute/UI_IconAttribute_Empty.png`
}

export const getSkills = () => {

    const result = skillsData.reduce((acc, curr) => {
        const { condition_skill_id_1 } = curr;

        if (condition_skill_id_1) {
            // If skill has a condition_skill_id_1, add it to the abilities array for that skill_id
            const targetSkill = acc.find(skill => skill.skill_id === condition_skill_id_1);
            if (targetSkill) {

                // Get ability text
                let abilityText = getText("master_skill_data_text", curr.skill_desc_array[0].desc)
                curr.desc = {
                    ja_JP: abilityText.ja_JP.split("\n")[0],
                    en_US: abilityText.en_US.split("\n")[0]
                }

                // Add ability inside of its corresponding skill
                targetSkill.abilities?.push(curr);
                return acc;
            }
        }

        // If skill does not have a condition_skill_id_1, add it to the result array
        const name = getText("master_skill_data_text", curr.skill_name)
        const desc = getText("master_skill_data_text", curr.skill_desc_array[curr.skill_desc_array.length - 1].desc)
        const thumb = getThumbnail("skill", curr.skill_type, curr.skill_id, curr.class_type)
        const classImg = getClassThumbnail(curr.class_type)
        const skillBackgroundImg = getSkillTypeImg(curr)
        const elementImg = getElementImg(curr)

        acc.push({
            ...curr,
            id: `${curr.skill_id}`,
            name,
            desc,
            thumb,
            classImg,
            abilities: [],
            skillBackgroundImg,
            elementImg,
            category: getCategory("skill", curr.skill_type),
            filterGroup: "skills"
        });

        return acc;
    }, []);

    // alpha, beta..
    result.forEach(skill => {
        skill.abilities?.sort((a, b) => a.ability_type - b.ability_type)
    })

    return result
}

function getMapName(id) {
    const mapData = mapsData.find(map => map.map_id.toLowerCase() === id.toLowerCase())
    return {
        ja_JP: mapData?.name || "-",
        en_US: mapData?.name_en || mapData?.name_jp_cbt || mapData?.name_translated || "-"
    }
}

export const getMaps = () => {
    return mapsData.map(map => {
        return {
            ...map,
            id: `${map.map_id}`,
            name: {
                ja_JP: map.name,
                en_US: map.name_en || map.name_jp_cbt || map.name_translated
            },
            thumb: getThumbnail("map"),
            category: getCategory("map", map.map_id),
            filterGroup: "maps"
        }
    })
}

const getMapData = (id) => {
    let mapData = mapsData.find(
        map => map.map_id.toLowerCase() === id.toLowerCase()
            || map.free_exploration_id?.toLowerCase() === id.toLowerCase()
    )
    if (mapData) {
        return {
            id: mapData.map_id,
            name: {
                ja_JP: mapData.name,
                en_US: mapData.name_en || mapData.name_jp_cbt || mapData.name_translated
            }
        }
    }
    return {
        id: null,
        name: {
            ja_JP: "-",
            en_US: "-"
        }
    }
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
    const skills = getSkills()
    const maps = getMaps()

    return [...items, ...enemies, ...costumes, ...gestures, ...imagines, ...liquidMemories, ...stampSets, ...tokens, ...weapons, ...skills, ...maps]
}