import { json } from '@sveltejs/kit'
import stampSets from "../../graphql/functions/stampsets.js"
import maps from "../../graphql/functions/maps.js"
import items from "../../graphql/functions/items.js"
import enemies from "../../graphql/functions/enemies.js"
import skills from "../../graphql/functions/skills.js"
import costumes from "../../graphql/functions/costumes.js"
import gestures from "../../graphql/functions/gestures.js"
import tokens from "../../graphql/functions/tokens.js"
import liquidMemories from "../../graphql/functions/liquidmemories.js"
import imagines from "../../graphql/functions/imagines.js"
import weapons from "../../graphql/functions/weapons.js"
import avatars from "../../graphql/functions/avatars.js"

const data = {
    items,
    enemies,
    costumes,
    gestures,
    imagines,
    liquidMemories,
    stampSets,
    tokens,
    weapons,
    skills,
    maps,
    avatars
}

export const GET = async () => {
    const formattedData = Object.entries(data).map(([key, value]) => {
        return {
            key,
            value: JSON.stringify(value)
        }
    })

    return json(formattedData)
}