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
import _ from "lodash";


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

function getSkillType(skillType) {
    // Skill type 0 = LMB
    // Skill type 1 = RMB
    // Skill type 2, 3, 4 = Tactical skill (attack)
    // Skill type 5 = Tactical skill (Buff)
    // Skill type 6 = Ultimate
    // Skill type 7 = Dodge
    // Skill type 8 = Class-specific passive
    // Skill type 9 = General passive
    // Skill type 10 = Aerial attack?
    // Skill type 11 = Hat trick????
    // Skill type 12 = Springboard jump attack
    // Skill type 13 = Ukemi???
    switch (skillType) {
        case 0:
        case 1: return "ベースアクション"
        case 2:
        case 3:
        case 4:
        case 5: return "タクティカルスキル"
        case 6: return "ULTスキル"
        case 7: return "回避"
        case 8: return "クラスアビリティ"
        case 9: return "ベースアビリティ"
        case 10: return "エリアル攻撃"
        case 11: return "？？？"
        case 12: return "踏み台ジャンプ"
        case 13: return "受け身？"
    }
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

function getSkillThumbnail(skill) {
    if (skill.is_default_skill && skill.skill_type === 0) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`
    if (skill.is_default_skill && skill.skill_type === 1) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`
    if (skill.skill_type === 8) return `/UI/Icon/PlayerAbility/Class/Class${skill.class_type}/UI_PlayerAbilityC_${skill.skill_id}.png`
    if (skill.skill_type === 9) return `/UI/Icon/PlayerAbility/Base/Class${skill.class_type}/UI_PlayerAbilityB_${skill.skill_id}.png`
    if (skill.skill_type === 6) return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`
    return `/UI/Icon/PlayerSkill/Class${skill.class_type}/UI_PlayerSkill_${skill.skill_id}.png`
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
        const thumb = getSkillThumbnail(curr)
        const classImg = getClassThumbnail(curr.class_type)
        const skillType = getSkillType(curr.skill_type)
        const skillTypeImg = getSkillTypeImg(curr)
        const elementImg = getElementImg(curr)

        acc.push({
            ...curr,
            id: `${curr.skill_id}`,
            bapharia: {
                name,
                desc,
                thumb,
                classImg,
                abilities: [],
                skillType,
                skillTypeImg,
                elementImg,
                category: { ja_JP: "スキル", en_US: "Skill" },
                filterGroup: "skills"
            }
        });

        return acc;
    }, []);

    // alpha, beta..
    result.forEach(skill => {
        skill.abilities?.sort((a, b) => a.ability_type - b.ability_type)
    })

    return result
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

    return [...items, ...enemies, ...costumes, ...gestures, ...imagines, ...liquidMemories, ...stampSets, ...tokens, ...weapons, ...skills]
}