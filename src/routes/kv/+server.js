import { json } from '@sveltejs/kit'
import stampSets from "./functions/stampsets.js"
import maps from "./functions/maps.js"
import items from "./functions/items.js"
import enemies from "./functions/enemies.js"
import skills from "./functions/skills.js"
import costumes from "./functions/costumes.js"
import gestures from "./functions/gestures.js"
import tokens from "./functions/tokens.js"
import liquidMemories from "./functions/liquidmemories.js"
import imagines from "./functions/imagines.js"
import weapons from "./functions/weapons.js"
import avatars from "./functions/avatarparts.js"
import quests from "./functions/quests.js"

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
    avatars,
    quests
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