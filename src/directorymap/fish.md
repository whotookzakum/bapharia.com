enum class ESBFishId {
    BlueDevil = 0,
    ScorpionFish = 1,
    PufferFish = 2,
    JackMackerel = 3,
    Skipjack = 4,
    AnglerFish = 5,
    Marlin = 6,
    ItemBox = 7,
    ESBFishId_MAX = 8,
};

enum class ESBFishMoveState {
    Break = 0,
    Tired = 1,
    Rampage = 2,
    Landing = 3,
    ESBFishMoveState_MAX = 4,
};

enum class ESBFishPosition {
    Center = 0,
    Left = 1,
    Right = 2,
    ESBFishPosition_MAX = 3,
};

enum class ESBFishRarityClassId {
    Common = 0,
    Rare = 1,
    ESBFishRarityClassId_MAX = 2,
};

enum class ESBFishScaleClassId {
    Small = 0,
    Middle = 1,
    Large = 2,
    ESBFishScaleClassId_MAX = 3,
};

enum class ESBFishingGameState {
    None = 0,
    Menu = 1,
    CastLine = 2,
    WaitForBite = 3,
    Bite = 4,
    HookSuccess = 5,
    HookTimeout = 6,
    FishingCancel = 7,
    FishingFight = 8,
    FishingSuccess = 9,
    FishingFail = 10,
    ESBFishingGameState_MAX = 11,
};