import adventureboards from '$api/adventureboards.js'
import quests from '$api/quests.js'

export const load = async () => {
    const processedQuests = quests.map(quest => {
        const { id, name, quest_condition_steps, thumb } = quest

        const steps = quest_condition_steps.reduce((acc, step) => {
            
            step.condition_items.forEach(condition => {
                condition.descriptionId.forEach(descId => {
                    acc.push({
                        id: step.id,
                        desc: descId.desc
                    })
                })
            })

            return acc
        }, [])

        return {
            id,
            name,
            steps,
            thumb
        }
    })

    return { adventureboards, quests: processedQuests }
}