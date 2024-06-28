# Treasure-related files
Treasures include overworld and dungeon treasure chests, and gathering nodes

## Server
- Treasure IDs, rewards, amount, respawn time: `/treasures.json`

### Variables
`rarity`
- 1: chest
- 3: gold chest
- 10: plant/generic resource
- 11: mineral/generic resource
- 12: aquatic/generic resource

`reward_type`
- 0: luno
- 2: exp
- 3: item
- 4: weapon
- 5: costume
- 7: mount
- 9: gesture/emote
- 10: stamp
- 11: imagine recipe
- 14: achievement
- 15: liquid memory
- 17: BPP ?
- 18: free currency (prob rose orbs) ?
- 19: token
- 20: crafting recipe
- 24: Season Reward Special ?
- 27: crafting recipe set
- 28: adventure board
- 30: warehouse ability
- 32: beta skill
- 33: lottery (RNG)

`se` = spawn environment? (grass/stone/water)


enum class ESBFieldActorInteractPoint {
    GatherPoint = 0,
    TreasureBox = 1,
    FreeBuffPoint = 2,
    DirectTreasureBox = 3,
    ESBFieldActorInteractPoint_MAX = 4,
};