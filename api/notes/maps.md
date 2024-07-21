# Map-related files

## Client
- Nappo locations: `/Content/Maps/*/*/sublevel/*_Nappo.umap`
- Resource, Chef, Treasure Chest locations: `/Content/Maps/*/*/sublevel/*_PU.umap`
- Shop NPC, Storage, Leaderboard, Memory Stand locations: `/Content/Maps/*/*/sublevel/*_SHP.umap`
- Warp Point, Fishing locations: `/Content/Maps/*/*/sublevel/*_SC.umap` *SceneComponent interactable triggers*
- Enemy locations: `/Content/Maps/*/*/sublevel/*_EN.umap`
- Quest locations: `/Content/Maps/*/*/sublevel/*_QST_*.umap`
> Misc NPC spawn points and movement paths: `/Content/Maps/*/*/sublevel/*_MOB.umap`
> Route guide: `/Content/Maps/*/*/sublevel/*_RG.umap`
> Environment?: `/Content/Maps/*/*/sublevel/*_EF.umap`
> General Meshes? (rocks, chairs, landmarks..): `/Content/Maps/*/*/sublevel/*_GM.umap`
> Landscape?: `/Content/Maps/*/*/sublevel/*_LS.umap`
> Lighting?: `/Content/Maps/*/*/sublevel/*_LT.umap`
> unknown: `/Content/Maps/*/*/sublevel/*_EST.umap`
> Lighting, fod, etc.: `/Content/Maps/*/*/sublevel/*_SKY.umap`
> Effects: `/Content/Maps/*/*/sublevel/*_EF.umap`
> Sounds: `/Content/Maps/*/*/sublevel/*_SD.umap`
- `DT_ZoneDB`

### Naming conventions
- 100100 (Asterleeds): `[MapType(10)][MapNumber(01)][Blank/MapVariant?(00)]`

### Variables
`id`
- 10****: cty
- 20****: fld
- 30****: dng, pub
- 30******: pat, pub
- 40**: story instance?
- 50****: ??
- 70****: rai, twr
- 80****: arn

## Server
- `maps.json`

enum class ESBFacilityType {
    None = 0,
    WeaponShop = 1,
    ItemShop = 2,
    HealStation = 3,
    TutorialGuide = 4,
    DungeonGuide = 5,
    WarpPoint = 6,
    LocalWarpPoint = 7,
    ExchangeShop = 8,
    ArmorShop = 9,
    QuestGuide = 10,
    Craft = 11,
    ClassChange = 12,
    SyntheShop = 13,
    ImagineLabo = 14,
    Aesthetician = 15,
    DyeingShop = 16,
    Restaurant = 17,
    ChallengeBox = 18,
    Arena = 19,
    Warehouse = 20,
    Guild = 21,
    GachaShop = 22,
    MemoryStand = 23,
    CoinBower = 24,
    TimeAttack = 25,
    EventPeddler = 26,
    AdventurerRank = 27,
    RankingBoard = 28,
    BuffNPC = 29,
    BuffObject = 30,
    MaterialSupporter = 31,
    ChallengeQuestNpc = 32,
    ChallengeQuestGimmick = 33,
    ChallengeQuestDestructible = 34,
    AbilityMasteryShop = 35,
    FishingSpot = 36,
    Camp = 37,
    ClimbPoint = 38,
    DxBattleNPC = 39,
    PineVillageNPC = 40,
    Fang_expedition = 41,
    DhcNPC = 42,
    ESBFacilityType_MAX = 43,
};

enum class EArenaMissionAchieveType {
    Unknown = 0,
    DealDamage = 1,
    DealDamageAmount = 2,
    CriticalAmount = 3,
    HitSkill = 4,
    KillTargetEnemy = 5,
    SummonImagine = 6,
    CastSkill = 7,
    EArenaMissionAchieveType_MAX = 8,
};