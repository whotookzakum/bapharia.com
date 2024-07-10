import LIQUID_MEMORY from "./bp_api/japan/liquid_memory.json";
import LIQUID_MEMORY_ACCUMULATE_LOTTERY_TABLE from "./bp_api/japan/liquid_memory_accumulate_lottery_table.json";
import { getCategory, getSources, getText } from "./utils";

function processLiqMem(lm, lang) {
    const name = getText("master_liquid_memory_text", lm.efficacy_name, lang)
    const category = getCategory("LiquidMemory", "default", lang)
    const sources = getSources(lm, lang, [15])

    // Effects for each level of the liquid memory
    const efficacy_parameters = lm.efficacy_parameters.map(level => ({
        ...level,
        text: {
            desc: getText("master_liquid_memory_text", level.efficacy_value_desc, lang)
                .replace("{value}", level.efficacy_value)
                .replace("{count}", level.use_count)
                .replace(/\(実機非表示\)|\(Not Visible in Live Build\) /, "")
        }
    }))

    // Conditions for refilling the liquid memory
    const accumulate_condition_parameters = lm.accumulate_condition_parameters.map(params => {
        let random_accumulate_values;
        const desc = getText("master_liquid_memory_text", params.accumulate_condition_desc, lang).replace("{value}", params.value)
        
        if (params.random_accumulate_table_id) {
            random_accumulate_values = LIQUID_MEMORY_ACCUMULATE_LOTTERY_TABLE
                .reduce((acc, { table_type, accumulate_value, lottery_rate }) => {
                    if (table_type === params.random_accumulate_table_id) {
                        acc.push({
                            accumulate_value,
                            lottery_rate
                        })
                    }
                    return acc
                }, [])
        }

        return {
            text: {
                desc
            },
            ...params,
            random_accumulate_values
        }
    })

    return {
        text: {
            name,
            category
        },
        assets: {
            icon: getIcon(lm.id)
        },
        sources,
        ...lm,
        efficacy_parameters,
        accumulate_condition_parameters
    }
}

function getIcon(id) {
    switch (id) {
        case 10: // faster gathering speed
        case 12: // increased enemy drop rate
        case 20: // greater harvest when gathering
        case 22: // increased enemy exp
            return `/images/liquidMemory/orange.png`
        case 17: // more GC from missions
            return `/images/liquidMemory/blue.png`
        case 18: // increased alliance exp
            return `/images/liquidMemory/purple.png`
        case 15: // cheaper prices from npc shops
        case 19: // increased profits when selling
        case 21: // reduce luno cost when crafting weapons
            return `/images/liquidMemory/green.png`
    }
}

export function getEntry(id, lang) {
    return processLiqMem(LIQUID_MEMORY.find(lm => lm.id == id), lang)
}

export const getSummaries = (lang) => LIQUID_MEMORY.map(lm => {
    return {
        href: `/db/liquidmemories/${lm.id}`,
        name: getText("master_liquid_memory_text", lm.efficacy_name, lang),
        jpName: getText("master_liquid_memory_text", lm.efficacy_name, "ja_JP"),
        icon: getIcon(lm.id),
        category: "LiquidMemory"
    }
})

const liquidMemories = (lang) => LIQUID_MEMORY.map(lm => processLiqMem(lm, lang))

export default liquidMemories;