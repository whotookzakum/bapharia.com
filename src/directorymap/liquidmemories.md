# Liquid Memory-related files

## Server

### Variables
`id`
> orange
- 10: faster gathering
- 12: increase enemy drop rate
- 20: greater harvest when gathering
- 22: increase enemy exp
> purple
- 18: increased team exp
> blue
- 17: more GC from missions
> green
- 15: discounted npc shops
- 19: increased profits when selling
- 21: reduced luno cost when crafting weapons

`efficacy_value_type` whether the memory adjusts properties in the dimension of time, number, or rate
- 1: Time (reduce gathering TIME)
- 2: Number (increase NUMBER of items gathered)
- 3: Rate (increase drop/exp RATE)

enum class ESBLiquidMemory {
    None = 0,
    LevelMax = 5,
    AccumulateConditionMax = 5,
    ESBLiquidMemory_MAX = 6,
};

enum class ESBLiquidMemoryAccumulateConditionType {
    None = 0,
    TimeElapse = 1,
    EnemyKill = 2,
    Gather = 3,
    BattleImajinnCreate = 4,
    BattleImajinnEnhance = 5,
    TreasureBox = 6,
    Craft = 7,
    WeaponLevelup = 8,
    InnerImagineLevelup = 9,
    BattleImajineLevelup = 10,
    WeaponFusion = 11,
    LiquidMemoryUse = 12,
    RaidBattleEntry = 13,
    TimeAttackEntry = 14,
    ArenaEntry = 15,
    BuffNPC = 16,
    MissionClear = 17,
    LunoGet = 18,
    LunoUse = 19,
    RareEnemyKill = 20,
    TokenGet = 21,
    SkillUse = 22,
    MaterialSupporter = 23,
    GCGet = 24,
    ItemGet = 25,
    ItemUse = 26,
    ResurrectionSuccess = 27,
    TowerEntry = 28,
    ScoreAttackEntry = 29,
    ScenarioMissionClear = 30,
    Num = 31,
    ESBLiquidMemoryAccumulateConditionType_MAX = 32,
};

enum class ESBLiquidMemoryAccumulateTokenType {
    None = 0,
    Normal = 1,
    WildCard = 2,
    FullMax = 3,
    Num = 4,
    ESBLiquidMemoryAccumulateTokenType_MAX = 5,
};

enum class ESBLiquidMemoryAccumulationType {
    Quantitative = 0,
    Random = 1,
    Num = 2,
    ESBLiquidMemoryAccumulationType_MAX = 3,
};

enum class ESBLiquidMemoryCategory {
    None = 0,
    Craft_Weapon = 1,
    Craft_Item = 2,
    Craft_BattleImajinn = 3,
    Craft_Attachment = 4,
    Enhance_Weapon = 5,
    Enhance_BattleImajinn = 6,
    Enhance_Attachment = 7,
    Gather = 8,
    Enemy = 9,
    NpcFacility = 10,
    Bag = 11,
    GC = 12,
    Team = 13,
    Sell = 14,
    Mount_Imagine = 15,
    Fusion = 16,
    Other = 17,
    Num = 18,
    ESBLiquidMemoryCategory_MAX = 19,
};

enum class ESBLiquidMemoryEfficacyType {
    None = 0,
    Craft_WeaponCriticalRateUp = 1,
    Craft_ItemCriticalRateUp = 2,
    Craft_BattleImagineCriticalRateUp = 3,
    Craft_InnerImagineCriticalRateUp = 4,
    Craft_AbilityAddRateUp = 5,
    Craft_WeaponMinimumLevelHighRateUp = 6,
    Weapon_Enhance_ExpUp = 7,
    BattleImagine_Enhance_ExpUp = 8,
    InnerImagine_Enhance_ExpUp = 9,
    GatherTimeReduce = 10,
    GatherSpotRepopRateUp = 11,
    Enemy_DropRateUp = 12,
    Enemy_ExpUp = 13,
    Enemy_MoneyUp = 14,
    NpcFacility_MoneyConsumptionDiscount = 15,
    Craft_WeaponCriticalRateUp2 = 16,
    Craft_BattleImagineCriticalRateUp2 = 17,
    Craft_InnerImagineCriticalRateUp2 = 18,
    FieldBagCapacityUp = 19,
    ClearMissionGcUp = 20,
    TeamExpUp = 21,
    SellItemUp = 22,
    MountImagineEnergyDown = 23,
    TreasureRarityUp = 24,
    EnemyDropNumberUp = 25,
    FusionPrecisionUp = 26,
    Enemy_TreasureDropRateUp = 27,
    GatherSpotDropNumUp = 28,
    WeaponCraft_LunoDiscount = 29,
    Num = 30,
    ESBLiquidMemoryEfficacyType_MAX = 31,
};

enum class ESBLiquidMemoryEfficacyValueType {
    None = 0,
    Time = 1,
    Number = 2,
    Rate = 3,
    Num = 4,
    ESBLiquidMemoryEfficacyValueType_MAX = 5,
};