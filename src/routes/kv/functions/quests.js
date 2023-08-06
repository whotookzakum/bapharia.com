import questsData from "$bp_server/japan/quests.json"
import enemiesData from "$bp_server/japan/enemyparams.json"
import itemsData from "$bp_server/japan/items.json"
import { getText } from './utils';

// TODO Step NPC names
// TODO interpolate descriptions such as in SQ103_234
// TODO done synopsis, close synopsis
// TODO rewards

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
        subcategoryName,
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
                    ja_JP: `クエスト「${questName.ja_JP}」のStep ${condition.quest_step}を達成`,
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