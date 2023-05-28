import stampSets from "./stampsets.js"
import maps from "./maps.js"
import items from "./items.js"
import enemies from "./enemies.js"
import skills from "./skills.js"
import costumes from "./costumes.js"
import gestures from "./gestures.js"
import tokens from "./tokens.js"
import liquidMemories from "./liquidmemories.js"
import imagines from "./imagines.js"
import weapons from "./weapons.js"
import avatars from "./avatars.js"

const entries = [
    ...items,
    ...enemies,
    ...costumes,
    ...gestures,
    ...imagines,
    ...liquidMemories,
    ...stampSets,
    ...tokens,
    ...weapons,
    ...skills,
    ...maps,
    ...avatars
]

export default entries

// Not yet implemented
// import npcs  from "./npcs.js"
// import shops  from "./shops.js"
// import quests  from "./quests.js"
// import adventureBoards  from "./adventureBoards.js"
// import abnormalStatuses  from "./abnormalStatuses.js" (client)