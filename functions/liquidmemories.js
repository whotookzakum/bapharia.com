import liquidMemoriesData from "$bp_server/japan/liquid_memory.json";
import accumulationLotteriesData from "$bp_server/japan/liquid_memory_accumulate_lottery_table.json";
import { getText } from "./utils";

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
        thumb: getThumbnail(memory.id),
        accumulate_condition_parameters: accumulate,
        subcategoryName: { ja_JP: "リキッドメモリ", en_US: "Liquid Memory" },
        entryTypes: ["LiquidMemory"]
    }
})

function getThumbnail(id) {
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

export default liquidMemories;