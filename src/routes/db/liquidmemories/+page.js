import texts from "$lib/apiext/texts/ja_JP.json";
import liquidMemoriesData from "$lib/apiext/liquid_memory.json";
import accumulationLotteriesData from "$lib/apiext/liquid_memory_accumulate_lottery_table.json";

function getText(ns, id) {
    const namespaceTexts = texts.find(namespace => namespace.name === ns) || {}
    const textObj = namespaceTexts.texts.find(obj => obj.id === id) || {}
    return textObj.text
}


export const load = async () => {

    const liquidMemories = liquidMemoriesData.map(memory => {
        const name = getText("master_liquid_memory_text", memory.efficacy_name)

        memory.efficacy_parameters = memory.efficacy_parameters.map(level => {
            // Currently all liquid memories use "use_count" and not "use_time"
            const desc =
                getText("master_liquid_memory_text", level.efficacy_value_desc)
                    .replace("{value}", level.efficacy_value)
                    .replace("{count}", level.use_count)
                    .replace("(実機非表示)", "")

            return {
                ...level,
                desc
            }
        })



        const accumulate = memory.accumulate_condition_parameters.map(params => {
            let desc =
                getText("master_liquid_memory_text", params.accumulate_condition_desc)

            let rates = []

            if (desc.includes("{value}")) {
                desc = desc.replace("{value}", params.value)
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
            name,
            accumulate_condition_parameters: accumulate
        }
    })

    return {
        liquidMemories
    }
}