import questsData from "$bp_api/japan/quests.json"
import enemiesData from "$bp_api/japan/enemyparams.json"
import itemsData from "$bp_api/japan/items.json"
import rewardsData from "$bp_api/japan/rewards.json"
import adventureBoardsData from "$bp_api/japan/master_adventure_board.json"
import mountsData from "$bp_api/japan/mount.json"
import achievementsData from "$bp_api/japan/achievements.json";
import craftingRecipesData from "$bp_api/japan/craft.json";
import craftingRecipeSetsData from "$bp_api/japan/master_craft_recipe_sets.json";
import warehouseAbilitiesData from "$bp_api/japan/master_warehouse_storing_abilities.json"

import { getText } from '../utils';
import weapons from "../weapons";
import items from "../items";
import stampSets from "../stamps";
import tokens from "../tokens";
import gestures from "../emotes";
import costumes from "../costumes";
import liquidMemories from "../liquidmemories";
import imagines from "./imagines"

// EQ101_907 is a quest that has multiple conditions; I don't think any have multiple descriptions yet?

// TODO Step NPC names
// TODO interpolate descriptions such as in SQ103_234
// TODO: quest_condition_steps[x].condition_items[y].synopsisId is undefined for class quests
// TODO: "completing this quest unlocks: ..." ("Main Quest: Dragon's Rive")
// TODO: TQ (Time-limited Quest)

const quests = questsData.map(quest => {
    const ns = `${quest.source_file}_text`
    const name = getText(ns, quest.name)
    const desc = getText(ns, quest.desc)
    const prefix = quest.long_id.slice(0, 2)
    const quest_condition_steps = getSteps(quest.quest_condition_steps, ns)
    const quest_unlock_data = getUnlockData(quest.quest_unlock_data)
    const quest_preconditions = getPreconditions(quest.quest_preconditions)
    const subcategoryName = getSubcategory(prefix)
    const thumb = getThumbnail(prefix)
    const doneSynopsis = getText(ns, quest.done_synopsis)
    const doneText = getText(ns, quest.done_text)
    const quest_rewards = getRewards(quest.quest_rewards)

    return {
        ...quest,
        id: `${quest.long_id}`,
        name,
        desc,
        thumb,
        prefix,
        quest_unlock_data,
        quest_preconditions,
        quest_condition_steps,
        quest_rewards,
        subcategoryName,
        doneSynopsis,
        doneText,
        entryTypes: ["Quest"]
    }
})

function getSteps(steps, ns) {
    return steps.map(step => {
        const condition_items = getStepConditions(step, ns)
        return {
            ...step,
            condition_items
        }
    })
}

// For each object in quest_condition_steps.condition_items, do stuff like adding text
function getStepConditions(step, ns) {
    return step.condition_items.map(condition => {
        const descriptionId = getConditionDescriptions(condition, ns, condition.type)
        const synopsisId = getConditionSynopses(condition, ns)
        return {
            ...condition,
            descriptionId,
            synopsisId
        }
    })
}

// For each object in condition_items.descriptionId, add text
function getConditionDescriptions(condition, ns, type) {
    return condition.descriptionId.map(descriptionObj => {
        let desc = getText(ns, descriptionObj.descriptionId)
        desc = interpolateStepConditionText(condition, desc, type)
        return {
            ...descriptionObj,
            desc
        }
    })
}

// For each object in condition_items.synopsisId, add text
function getConditionSynopses(condition, ns) {
    return condition.synopsisId?.reduce((acc, synopsisObj) => {
        // Remove empty synopsis items "synopsisId": [ [] ]
        if (Array.isArray(synopsisObj)) return acc

        let desc = getText(ns, synopsisObj?.synopsisId)

        acc.push({
            ...synopsisObj,
            desc
        })

        return acc
    }, [])
}

// Replace things like {enemyId} with the enemy name
function interpolateStepConditionText(condition, desc, type) {
    const interpolatedText = desc

    Object.keys(interpolatedText).forEach(lang => {
        switch (type) {
            case 2: // Defeat enemy
            case 13: // Get enemy drop
                const enemyData = enemiesData.find(enemy => enemy.enemy_id === condition.enemyId)
                const enemyName = getText("enemyparam_text", enemyData.name_id)
                interpolatedText[lang] = interpolatedText[lang].replace("{enemyId}", enemyName[lang])
                break;
            case 3: // Get item
                const itemData = itemsData.find(item => item.id === condition.item_id)
                const itemName = getText("item_text", itemData?.name)
                interpolatedText[lang] = interpolatedText[lang].replace("{item_id}", itemName[lang])
                break;
            // case 14: // Gather item
        }
        interpolatedText[lang] = interpolatedText[lang].replace("{progress}", ` x${condition.amount}`)
    })

    return interpolatedText;
}

function getUnlockData(unlockData) {
    const quest_conditions = unlockData.quest_conditions?.map(condition => {
        const desc = getUnlockCondition(condition)
        return {
            ...condition,
            desc
        }
    })
    return {
        ...unlockData,
        quest_conditions
    }
}

function getUnlockCondition(condition) {
    let quest;
    let questName;

    if (condition.type === 1 || condition.type === 2) {
        quest = questsData.find(q => q.long_id === condition.quest_id)
        questName = getText(`${quest.source_file}_text`, quest.name)
    }

    switch (condition.type) {
        case 1:
            if (condition.quest_status === 1) {
                return {
                    ja_JP: `クエスト「${questName.ja_JP}」を完了`,
                    en_US: `Complete quest "${questName.en_US}"`
                }
            }
        case 2:
            return {
                ja_JP: `クエスト「${questName.ja_JP}」のStep ${condition.quest_step}を達成`,
                en_US: `Complete Step ${condition.quest_step} of quest "${questName.en_US}"`
            }
        case 4:
            return {
                ja_JP: `ストーリーフラグ${condition.scenario_flag_key}を達成`,
                en_US: `Reach story flag ${condition.scenario_flag_key}`
            }
        case 5:
            return {
                ja_JP: `イベント「${condition.event_term_id}」が期間中`,
                en_US: `Available during event "${condition.event_term_id}"`
            }
        case 6:
            return {
                ja_JP: `冒険者ランク${condition.adventurer_rank}以上`,
                en_US: `Adventurer Rank ${condition.adventurer_rank}+`
            }
        default:
            return {
                ja_JP: `解放条件なし`,
                en_US: `No unlock condition`
            }
    }
}

function getPreconditions(preconditions) {
    return preconditions.map(condition => {
        const desc = getPreconditionText(condition)
        return {
            ...condition,
            desc
        }
    })
}

function getPreconditionText(condition) {
    switch (condition.type) {
        case 1:
            const classNameObj = getClassName(condition.value1)
            return {
                ja_JP: `${classNameObj?.ja_JP}のみ`,
                en_US: `${classNameObj?.en_US} only`
            }
        case 2:
            return {
                ja_JP: `クラスレベル${condition.value1}以上`,
                en_US: `Class level ${condition.value1}+`
            }

        case 4:
            return {
                ja_JP: `冒険者ランク${condition.value1}以上`,
                en_US: `Adventurer Rank ${condition.value1}+`
            }
        default:
            return {
                ja_JP: `受注条件なし`,
                en_US: `No precondition`
            }
    }
}

function getClassName(id) {
    id = parseInt(id)
    switch (id) {
        case 6:
            return {
                ja_JP: "ブラストアーチャー",
                en_US: "Blast Archer"
            }
        case 7:
            return {
                ja_JP: "ツインストライカー",
                en_US: "Twin Striker"
            }
        case 11:
            return {
                ja_JP: "スペルキャスター",
                en_US: "Spell Caster",
            }
        case 12:
            return {
                ja_JP: "イージスファイター",
                en_US: "Aegis Fighter",
            }
        case 19:
            return {
                ja_JP: "ヘヴィスマッシャー",
                en_US: "Heavy Smasher",
            }
        case 20:
            return {
                ja_JP: "ブリッツランサー",
                en_US: "Blitz Lancer"
            }
    }
}

function getSubcategory(prefix) {
    switch (prefix) {
        case "MQ":
            return {
                ja_JP: "メインクエスト",
                en_US: "Main Quest"
            }
        case "SQ":
            return {
                ja_JP: "サブクエスト",
                en_US: "Side Quest"
            }
        case "CQ":
            return {
                ja_JP: "クラスクエスト",
                en_US: "Class Quest"
            }
        default:
            return {
                ja_JP: "クエスト",
                en_US: "Quest"
            }
    }
}

function getRewards(rewards) {
    return rewards.map(reward => {
        const rewardData = rewardsData.find(r => r.id === reward.master_rewards_id)
        const rewardItemDetails = getRewardItem(rewardData)

        // Debugging rewards
        // reward_type: 3 is an item
        // const test_weapon = { reward_type: 4, item_id: 106000100 }
        // const test_costume = { reward_type: 5, item_id: 101000320 }
        // const test_mount = { reward_type: 7, item_id: 100000200 }
        // const test_gesture = { reward_type: 9, item_id: 101000201 }
        // const test_stampset = { reward_type: 10, item_id: 69 }
        // const test_imagine = { reward_type: 11, item_id: 115000600 }
        // const test_achievement = { reward_type: 14, item_id: 48112 }
        // const test_bpp = { reward_type: 17 }
        // const test_roseorb = { reward_type: 18 }
        // const test_token = { reward_type: 19, item_id: 110000300 }
        // const test_recipe = { reward_type: 20, item_id: 70004 }
        // const test_seasonpoints = { reward_type: 24 }
        // const test_recipeset = { reward_type: 27, item_id: 300000 }
        // const test_warehouseability = { reward_type: 30, item_id: 11002100 }
        // const test_betaskill = { reward_type: 32 }
        // const test_rng = { reward_type: 33 }
        // const rewardItemDetails = getRewardItem(test_rng)

        return {
            ...rewardData,
            ...rewardItemDetails
        }
    })
}

function getRewardTypeName(type) {
    switch (type) {
        case 0:
            return {
                ja_JP: "ルーノ",
                en_US: "Luno"
            }
        case 2:
            return {
                ja_JP: "経験値",
                en_US: "EXP"
            }
        case 3:
            return {
                ja_JP: "アイテム",
                en_US: "Item"
            }
        case 4:
            return {
                ja_JP: "武器",
                en_US: "Weapon"
            }
        case 5:
            return {
                ja_JP: "コスチューム",
                en_US: "Costume"
            }
        case 7:
            return {
                ja_JP: "マウント",
                en_US: "Mount"
            }
        case 9:
            return {
                ja_JP: "ジェスチャー",
                en_US: "Emote"
            }
        case 10:
            return {
                ja_JP: "スタンプ",
                en_US: "Stamp"
            }
        case 11:
            return {
                ja_JP: "イマジンレシピ",
                en_US: "Imagine Recipe"
            }
        case 14:
            return {
                ja_JP: "称号・アチーブメント",
                en_US: "Title/Achievement"
            }
        case 15:
            return {
                ja_JP: "リキッドメモリ",
                en_US: "Liquid Memory"
            }
        case 17:
            return {
                ja_JP: "BPポイント",
                en_US: "BP Points"
            }
        case 18:
            return {
                ja_JP: "無償ローズオーブ",
                en_US: "Free Rose Orbs"
            }
        case 19:
            return {
                ja_JP: "トークン",
                en_US: "Ticket"
            }
        case 20:
            return {
                ja_JP: "レシピ",
                en_US: "Crafting Recipe"
            }
        case 24:
            return {
                ja_JP: "シーズンポイント",
                en_US: "Season Points"
            }
        case 27:
            return {
                ja_JP: "レシピセット",
                en_US: "Crafting Recipe Set"
            }
        case 28:
            return {
                ja_JP: "アドベンチャーボード",
                en_US: "Adventure Board"
            }
        case 30:
            return {
                ja_JP: "開拓アビリティ",
                en_US: "Pioneer Ability"
            }
        case 32:
            return {
                ja_JP: "βスキル",
                en_US: "β Skill"
            }
        case 33:
            return {
                ja_JP: "RNG",
                en_US: "RNG"
            }
        default:
            return {
                ja_JP: "報酬",
                en_US: "Reward"
            }
    }
}

function getRewardItem(rewardData) {
    let rewardItem;
    let name = {
        ja_JP: "報酬",
        en_US: "Reward"
    }
    let thumb = "/UI/Icon/Reward/UI_Icon_Unidentified.png"
    let href = "/db"
    
    switch (rewardData.reward_type) {
        case 0:
            name = {
                ja_JP: "ルーノ",
                en_US: "Luno",
            }
            thumb = "/UI/Icon/Reward/UI_Icon_0.png"
            href = `/db`
            break;
        case 2:
            name = {
                ja_JP: "経験値",
                en_US: "EXP"
            },
            thumb = "/UI/Icon/Reward/UI_Icon_2.png",
            href = `/db`
            break;
        case 3:
            rewardItem = items.find(item => item.id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/item/${rewardItem.id}`
            break;
        case 4:
            rewardItem = weapons.find(item => item.id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/weapon/${rewardItem.id}`
            break;
        case 5:
            rewardItem = costumes.find(item => item.id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/costume/${rewardItem.id}`
            break;
        case 7:
            rewardItem = mountsData.find(item => item.id === rewardData.item_id)
            name = getText("master_mount_imagine_text", rewardItem.name)
            thumb = `/UI/Icon/Imagine/Mount/UI_Icon_${rewardItem.id}.png`
            href = `/db`
            break;
        case 9:
            rewardItem = gestures.find(item => item.emote_id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/gesture/${rewardItem.id}`
            break;
        case 10:
            rewardItem = stampSets.find(item => item.stamp_data.some(stamp => stamp.stamp_id === rewardData.item_id))
            if (rewardItem) {
                name = rewardItem.name
                thumb = rewardItem.thumb
                href = `/db/stampset/${rewardItem.id}`
            }
            break;
        case 11:
            rewardItem = imagines.find(item => item.id == rewardData.item_id)
            name = {
                ja_JP: rewardItem.name.ja_JP + "レシピ",
                en_US: rewardItem.name.en_US + " Recipe"
            }
            thumb = "/UI/Icon/Reward/UI_Icon_11.png"
            href = `/db/imagine/${rewardItem.id}#recipe`
            break;
        case 14:
            rewardItem = achievementsData.find(item => item.id == rewardData.item_id)
            name = getText("achievements_text", rewardItem.name)
            thumb = "/UI/Icon/Reward/UI_Icon_14.png"
            href = `/db`
            break;
        case 15:
            rewardItem = liquidMemories.find(item => item.id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/liquidmemory/${rewardItem.id}`
            break;
        case 17:
            name = {
                ja_JP: "BPポイント",
                en_US: "BP Points",
            },
            thumb = "/UI/Icon/Reward/UI_Icon_17.png",
            href = `/db`
            break;
        case 18:
            name = {
                ja_JP: "無償ローズオーブ",
                en_US: "Free Rose Orbs",
            },
            thumb = "/UI/Icon/Reward/UI_Icon_18.png",
            href = `/db`
            break;
        case 19:
            rewardItem = tokens.find(item => item.id == rewardData.item_id)
            name = rewardItem.name
            thumb = rewardItem.thumb
            href = `/db/token/${rewardItem.id}`
            break;
        case 20:
            rewardItem = craftingRecipesData.find(item => item.id === rewardData.item_id)
            // Consumable recipe
            if (rewardItem.out_item_type === 1) {
                let item = items.find(i => i.id == rewardItem.out_item_id)
                name = {
                    ja_JP: item.name.ja_JP + "レシピ",
                    en_US: item.name.en_US + " Recipe",
                }
                href = `/db/item/${item.id}#recipe`
            }
            // Weapon recipe
            else if (rewardItem.out_item_type === 2) {
                let weapon = weapons.find(i => i.id == rewardItem.out_item_id)
                name = {
                    ja_JP: weapon.name.ja_JP + "レシピ",
                    en_US: weapon.name.en_US + " Recipe",
                }
                href = `/db/weapon/${weapon.id}#recipe`
            }
            thumb = "/UI/Icon/Reward/UI_Icon_20.png"
            break;
        case 24:
            name = {
                ja_JP: "シーズンポイント", 
                en_US: "Season Points"
            }
            thumb = "/UI/Icon/Reward/UI_Icon_23.png"
            href = "/db"
            break;
        case 27:
            rewardItem = craftingRecipeSetsData.find(item => item.id === rewardData.item_id)
            // Could add text for all recipes in this set, but the Recipe Set Name seems self explanatory for now
            name = getText("master_craft_recipe_set_text", rewardItem.name)
            thumb = "/UI/Icon/Reward/UI_Icon_27.png"
            href = "/db"
            break;
        case 28:
            rewardItem = adventureBoardsData.find(item => item.id === rewardData.item_id)
            name = getText("master_adventure_boards_text", rewardItem.name)
            thumb = "/UI/Icon/Reward/UI_Icon_28.png"
            href = `/db`
            break;
        case 30:
            rewardItem = warehouseAbilitiesData.find(item => item.recipe_id === rewardData.item_id)
            name = getText("master_warehouse_ability_recipes_text", rewardItem.id)
            thumb = "/UI/Icon/Reward/UI_Icon_30.png"
            href = `/db/item/${rewardItem.item_id}`
            break;
        case 32:
            name = {
                ja_JP: "βスキル",
                en_US: "β Skill"
            },
            thumb = "/UI/Icon/Reward/UI_Icon_31.png"
            href = `/db`
            break;
        case 33:
            // TODO Get the specific item 
            name = {
                ja_JP: "RNG",
                en_US: "RNG"
            }
            thumb = "/UI/Icon/Reward/UI_Icon_Unidentified.png"
            href = "/db"
            break;
    }

    return {
        name,
        thumb,
        href
    }
}

function getThumbnail(prefix) {
    switch (prefix) {
        case "MQ":
            return `/UI/Icon/Quest/UI_IconQuest_MainPop.png`
        // case "SQ":
        //     return `/UI/Icon/Quest/UI_IconQuest_PlusSubPop.png`
        // case "CQ":
        //     return `/UI/Icon/Quest/UI_IconQuest_KeyChaPop.png`
        default:
            return `/UI/Icon/Quest/UI_IconQuest_SubPop.png`
    }
}

export default quests