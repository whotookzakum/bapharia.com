import { json } from '@sveltejs/kit'
import questsData from "../../graphql/bp_server/japan/quests.json"
import enemiesData from "../../graphql/bp_server/japan/enemyparams.json"
import itemsData from "../../graphql/bp_server/japan/items.json"
import en_US from "../../graphql//bp_server/global/texts/en_US.json";

function getText(ns, id) {
    const namespaceObj = en_US.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceObj.texts.find(obj => obj.id == id) || {}
    return textObj.text || "-"
}

export const GET = async () => {
    const allQuests = questsData.map(quest => {
        const ns = `${quest.source_file}_text`
        const name = getText(ns, quest.name)
        const desc = getText(ns, quest.desc)
        const prereqs = getPrereqs(quest.quest_unlock_data.quest_conditions, quest.quest_preconditions)
        const steps = getSteps(quest.quest_condition_steps, ns)

        return {
            // ...quest,
            name,
            // desc,
            prereqs,
            steps
        }
    })

    return json(allQuests)
}

function getPrereqs(prereqs, preconditions) {
    let myPrereqs = []
    let myPreconditions = []

    if (prereqs) {
        myPrereqs = prereqs.map(prereq => {
            if (prereq.type === 1) {
                const questData = questsData.find(q => q.long_id === prereq.quest_id)
                const name = getText(`${questData.source_file}_text`, questData.name)
                return `Complete quest ${name}`
            }
    
            if (prereq.type === 2) {
                const questData = questsData.find(q => q.long_id === prereq.quest_id)
                const name = getText(`${questData.source_file}_text`, questData.name)
                return `Complete step ${prereq.quest_step} on quest ${name}`
            }
    
            if (prereq.type === 4) {
                return `Reach story flag ${prereq.scenario_flag_key} ?`
            }
    
            if (prereq.type === 5) {
                return `Can be accepted during event ${prereq.event_term_id} ?`
            }
    
            if (prereq.type === 6) {
                return `Reach Adventurer Rank ${prereq.adventurer_rank}`
            }
    
            return `No prereq data!`
        })
    }

    if (preconditions) {
        myPreconditions = preconditions.map(precondition => {
            if (precondition.type === 1) {
                const classes = {
                    6: "Blast Archer",
                    7: "Twin Striker",
                    11: "Spell Caster",
                    12: "Aegis Fighter",
                    19: "Heavy Smasher",
                    20: "Blitz Lancer"
                }

                return `${classes[precondition.value1]} only`
            }

            if (precondition.type === 2) {
                return `Requires class level ${precondition.value1}`
            }
    
            if (precondition.type === 4) {
                return `Requires Adventurer Rank ${precondition.value1}`
            }
    
            return `No precondition data!`
        })
    }

    return myPreconditions.concat(myPrereqs)
}

function getSteps(steps, ns) {
    if (!steps) return []
    return steps.map(step => {
        const conditions = step.condition_items.map(condition => {
            let desc = getText(ns, condition.descriptionId[0].descriptionId)

            // if (condition.descriptionId.length > 1) {
            //     desc = condition.descriptionId.map(desc => getText(ns, desc.descriptionId))
            // }

            // Interpolate strings
            if (condition.type === 2) {
                const enemyData = enemiesData.find(enemy => enemy.enemy_id === condition.enemyId)
                const enemyName = getText("enemyparam_text", enemyData.name_id)
                desc = desc.replace("{enemyId}", enemyName).replace("{progress}", ` x${condition.amount}`)
            }

            if (condition.type === 3) {
                const itemData = itemsData.find(item => item.id === condition.item_id)
                const itemName = getText("item_text", itemData?.name)
                desc = desc.replace("{item_id}", itemName).replace("{progress}", ` x${condition.amount}`)
            }

            return desc // for now there is only 1 description per condition

            return {
                // ...condition,
                // npcId: condition.npcId,
                // placeId: condition.placeId,
                // locationId: condition.locationId,
                // dungeonId: condition.dungeonId,
                desc
            }
        })

        return {
            conditions
        }
    })
}