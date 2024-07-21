# Rewards-related files

## Server
- Rewards for quests, adventure boards, etc: `/rewards.json`
- Lottery rewards: `/master_reward_lottery_groups.json`

### Variables
Also check /UI/Icon/Reward for more
`reward_type`
- 0: luno
- 1: gc
- 2: exp
- 3: item
- 4: weapon
- 5: costume
- 6: battle imagine
- 7: mount
- 8: mission coin(?)
- 9: gesture/emote
- 10: stamp
- 11: imagine recipe
- 12: bonus skill point
- 13: class skill point
- 14: achievement
- 15: liquid memory
- 17: BPP ?
- 18: free currency (prob rose orbs) ?
- 19: token
- 20: crafting recipe
- 23: season rank point
- 24: Season Reward Special ?
- 27: crafting recipe set
- 28: adventure board
- 29: storage expansion ticket
- 30: warehouse ability
- 31: tactical skill
- 32: beta skill
- 33: lottery (RNG)
- 34: real goods
- 35: costume parts
- 36: award
- 37: adventure card decoration


enum class ESBRewardItemType {
    REWARD_ITEM_TYPE_LUNO = 0,
    REWARD_ITEM_TYPE_GC = 1,
    REWARD_ITEM_TYPE_EXP = 2,
    REWARD_ITEM_TYPE_ITEM = 3,
    REWARD_ITEM_TYPE_WEAPON = 4,
    REWARD_ITEM_TYPE_COSTUME = 5,
    REWARD_ITEM_TYPE_IMAGINE_SEED = 6,
    REWARD_ITEM_TYPE_MOUNT = 7,
    REWARD_ITEM_TYPE_MISSION_COIN = 8,
    REWARD_ITEM_TYPE_EMOTE = 9,
    REWARD_ITEM_TYPE_STAMP = 10,
    REWARD_ITEM_TYPE_IMAGINE_RECIPE = 11,
    REWARD_ITEM_TYPE_BONUS_SKILL_POINT = 12,
    REWARD_ITEM_TYPE_CLASS_SKILL_POINT = 13,
    REWARD_ITEM_TYPE_ACHIEVEMENT = 14,
    REWARD_ITEM_TYPE_LIQUID_MEMORY = 15,
    REWARD_ITEM_TYPE_COIN = 17,
    REWARD_ITEM_TYPE_FREE_CURRENCY = 18,
    REWARD_ITEM_TYPE_TOKEN = 19,
    REWARD_ITEM_TYPE_CRAFT_MACHINE_RECIPE = 20,
    REWARD_ITEM_TYPE_SEASON_RANK_POINT = 23,
    REWARD_ITEM_TYPE_SEASON_REWARD_SPECIAL = 24,
    REWARD_ITEM_TYPE_STAMPS_CATEGORY = 25,
    REWARD_ITEM_TYPE_RECIPE_SET = 27,
    REWARD_ITEM_TYPE_ADVENTURE_BOARD = 28,
    REWARD_ITEM_TYPE_STORAGE_EXPANSION_TICKET = 29,
    REWARD_ITEM_TYPE_WAREHOUSE_ABILITY = 30,
    REWARD_ITEM_TYPE_TACTICAL_ABILITY = 31,
    REWARD_ITEM_TYPE_TACTICAL_ABILITY_BETA = 32,
    REWARD_ITEM_TYPE_LOTTERY = 33,
    REWARD_ITEM_TYPE_REAL_GOODS = 34,
    REWARD_ITEM_TYPE_COUSTOM_PARTS = 35,
    REWARD_ITEM_TYPE_AWARD = 36,
    REWARD_ITEM_TYPE_ADVENTURE_CARD_DECORATION = 37,
    REWARD_ITEM_TYPE_NUM = 38,
    REWARD_ITEM_TYPE_MAX = 39,
};