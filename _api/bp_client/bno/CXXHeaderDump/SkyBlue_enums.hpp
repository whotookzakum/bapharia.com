enum class EAIFwBTBattleEffectiveType {
    Paralyze = 0,
    SuperArmor = 1,
    Stun = 2,
    Freeze = 3,
    Sleep = 4,
    Fear = 5,
    Dark = 6,
    Restraint = 7,
    EAIFwBTBattleEffectiveType_MAX = 8,
};

enum class EAbilityCategoryType {
    AbilityType_Param = 0,
    AbilityType_Attack = 1,
    AbilityType_Defence = 2,
    AbilityType_Support = 3,
    AbilityType_Other = 4,
    AbilityType_MAX = 5,
};

enum class EAcceptedQuestErrorCode {
    None = 0,
    GenericError = 1,
    AlreadyAccepted = 2,
    PreconditionError = 3,
    LockedError = 4,
    Num = 5,
    EAcceptedQuestErrorCode_MAX = 6,
};

enum class EActionSwitchType {
    None = 0,
    Hold = 1,
    Toggle = 2,
    EActionSwitchType_MAX = 3,
};

enum class EAddItemOpResult {
    Succeeded = 0,
    Error_CapacityOver = 1,
    EAddItemOpResult_MAX = 2,
};

enum class EAestheShop {
    None = 0,
    AppearanceInfo_Slot_Max = 5,
    EAestheShop_MAX = 6,
};

enum class EAestheShopCourseUsableCategory {
    Unusable = 0,
    SameGenderOnly = 1,
    OppositeGenderOnly = 2,
    EitherGenderIsOK = 3,
    Num = 4,
    EAestheShopCourseUsableCategory_MAX = 5,
};

enum class EAppearanceWeaponStickerType {
    Peeling = 0,
    Duration = 1,
    Deadline = 2,
    Indefinite = 3,
    EAppearanceWeaponStickerType_MAX = 4,
};

enum class EAreaMapNum {
    None = 0,
    Num = 5,
    EAreaMapNum_MAX = 6,
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

enum class EAttackAttributeType {
    AttackAttributeType_None = 0,
    AttackAttributeType_Slash = 1,
    AttackAttributeType_Blow = 2,
    AttackAttributeType_Thrust = 3,
    AttackAttributeType_MAX = 4,
};

enum class EAttackHitType {
    AttackHitType_None = 0,
    AttackHitType_Slash = 1,
    AttackHitType_Blow = 2,
    AttackHitType_Thrust = 3,
    AttackHitType_Claw = 4,
    AttackHitType_Fang = 5,
    AttackHitType_BH_Blow = 6,
    AttackHitType_MAX = 7,
};

enum class EAutoWordEventType {
    None = 0,
    Spawn = 1,
    Respawn = 2,
    FewHp = 3,
    ReceiveHeal = 4,
    Dead = 5,
    Resurrection = 6,
    UsedUltimateSkill = 7,
    UsableUltimateSkill = 8,
    Freeze = 9,
    EnemyElementalLV3 = 10,
    Num = 11,
    EAutoWordEventType_MAX = 12,
};

enum class EBattleContentsHUDType {
    None = 0,
    Arena = 1,
    Tower = 2,
    TimeAttack = 3,
    ScoreAttack = 4,
    Raid = 5,
    InstanceBattle = 6,
    DxBattle = 7,
    DhcBattle = 8,
    OneShotArena = 9,
    KwmArena = 10,
    Max = 11,
};

enum ECameraAnimNotifyPlaySpace {
    PlaySpace_Local = 0,
    PlaySpace_World = 1,
    PlaySpace_MAX = 2,
};

enum ECameraPriority {
    CameraPriority_0 = 0,
    CameraPriority_1 = 1,
    CameraPriority_1_5 = 2,
    CameraPriority_2 = 3,
    CameraPriority_3 = 4,
    CameraPriority_4 = 5,
    CameraPriority_5 = 6,
    CameraPriority_6 = 7,
    CameraPriority_6_5 = 8,
    CameraPriority_7 = 9,
    CameraPriority_8 = 10,
    CameraPriority_9 = 11,
    CameraPriority_MAX = 12,
};

enum ECameraRayHitResult {
    HitResult_WorldStatic = 0,
    HitResult_Hostility = 1,
    HitResult_CanAttack = 2,
    HitResult_All = 3,
    HitResult_MAX = 4,
};

enum ECameraSettingsType {
    CameraSettingsType_None = 0,
    CameraSettingsType_Default = 1,
    CameraSettingsType_Custom = 2,
    CameraSettingsType_MAX = 3,
};

enum class ECauseOfDetah {
    Unknown = 0,
    HitPoint0 = 1,
    FallDown = 2,
    ECauseOfDetah_MAX = 3,
};

enum class ECharaCreateSliderType {
    Height = 0,
    Physique = 1,
    Bust = 2,
    MAX = 3,
};

enum class ECharaPartsAgeGroup {
    Child = 0,
    Teenager = 1,
    Young = 2,
    Middle = 3,
    Senior = 4,
    MAX = 5,
};

enum class ECharaPartsAsyncLoadState {
    None = 0,
    Standby = 1,
    WaitRequest = 2,
    Loading = 3,
    ECharaPartsAsyncLoadState_MAX = 4,
};

enum class ECharaPartsLocationGroup {
    None = 0,
    All = 1,
    BodyPartsAndBodyComponent = 2,
    BodyPartsWithoutBodyComponent = 3,
    FacePartsAndFaceComponent = 4,
    FacePartsWithoutFaceComponent = 5,
    AccessoryComponent = 6,
    UnderwearComponent = 7,
    SkeletonMergeComponent = 8,
    MAX = 9,
};

enum class ECharaPartsRegion {
    Common = 0,
    R01 = 1,
    R02 = 2,
    R03 = 3,
    R04 = 4,
    R05 = 5,
    R06 = 6,
    MAX = 7,
    Default = 0,
};

enum class EChatSpecialCommandType {
    None = 0,
    Dice = 1,
    Send = 2,
    EChatSpecialCommandType_MAX = 3,
};

enum class EClientExitStatus {
    Default = 0,
    LogoutEnd = 1,
    CharacterSelect = 2,
    KickAFK = 3,
    NetworkError = 4,
    EClientExitStatus_MAX = 5,
};

enum EClimbingEndActionType {
    ClimbingEndActionType_Drop = 0,
    ClimbingEndActionType_Clamber = 1,
    ClimbingEndActionType_MAX = 2,
};

enum EClimbingEndPointType {
    ClimbingEndPointType_None = 0,
    ClimbingEndPointType_Up = 1,
    ClimbingEndPointType_Down = 2,
    ClimbingEndPointType_MAX = 3,
};

enum class ECollisionOnOff {
    On = 0,
    Off = 1,
    ECollisionOnOff_MAX = 2,
};

enum class ECountdownResult {
    TimeUp = 0,
    Interaction = 1,
    Cancel = 2,
    ECountdownResult_MAX = 3,
};

enum class ECountdownType {
    RespawnFromDead = 0,
    Warp = 1,
    GameLogout = 2,
    ECountdownType_MAX = 3,
};

enum ECustomMoveMode {
    CustomMoveMode_None = 0,
    CustomMoveMode_MeshClimbing = 1,
    CustomMoveMode_CharaCreate = 2,
    CustomMoveMode_MAX = 3,
};

enum class EDamageSide {
    OnlyHostile = 0,
    OnlyFriend = 1,
    OnlyTargetHostile = 2,
    OnlyTargetFriend = 3,
    OnlyEnemyCharacter = 4,
    Self = 5,
    All = 6,
    EDamageSide_MAX = 7,
};

enum class EDamageType {
    None = 0,
    HPDamage = 1,
    HPRecovery = 2,
    DEPLICATED_HPDamageMPRecovery = 3,
    DEPLICATED_HPDamageMPRateRecovery = 4,
    HPFixDamage = 5,
    HPFixRateDamage = 6,
    HPFixRecovery = 7,
    HPFixRateRecovery = 8,
    DEPLICATED_Resurrection = 9,
    PerfectResurrection = 10,
    MPRecovery = 11,
    SYS_HPFixDamage = 12,
    SYS_HPFixRateDamage = 13,
    SYS_HPFixRecovery = 14,
    SYS_HPFixRateRecovery = 15,
    NUM = 16,
    EDamageType_MAX = 17,
};

enum class EDeathEffectType {
    UnActive = 0,
    NormalDeath = 1,
    FadeOut = 2,
    Vanish = 3,
    EDeathEffectType_MAX = 4,
};

enum class EDialogPositionType {
    Default = 0,
    Type1 = 1,
    Type2 = 2,
    Type3 = 3,
    Type4 = 4,
    Type5 = 5,
    EDialogPositionType_MAX = 6,
};

enum class EDialogResult {
    Ok = 0,
    Yes = 1,
    No = 2,
    Cancel = 3,
    None = 4,
    EDialogResult_MAX = 5,
};

enum class EDigitalSignageDataType {
    PackegeIndividualData = 0,
    PackegeConsolidatedData = 1,
    NetworkIndividualData = 2,
    NetworkConsolidatedData = 3,
    Num = 4,
    EDigitalSignageDataType_MAX = 5,
};

enum class EDungeonClearConditionType {
    Unknown = 0,
    KillEnemy = 1,
    AnyCondition = 2,
    EDungeonClearConditionType_MAX = 3,
};

enum class EEffectId {
    None = 0,
    Slash = 1,
    HiSlash = 2,
    LowSlash = 3,
    StepJumpSlash = 4,
    Blow = 5,
    HiBlow = 6,
    LowBlow = 7,
    StepJumpBlow = 8,
    Thrust = 9,
    HiThrust = 10,
    LowThrust = 11,
    StepJumpThrust = 12,
    Claw = 13,
    HiClaw = 14,
    LowClaw = 15,
    StepJumpClaw = 16,
    Fang = 17,
    HiFang = 18,
    LowFang = 19,
    StepJumpFang = 20,
    EarthMelt = 25,
    StoneBreak = 26,
    EarthMuzzle = 27,
    FireMelt = 28,
    FireBreak = 29,
    FireMuzzle = 30,
    IceMelt = 31,
    IceBreak = 32,
    IceMuzzle = 33,
    ThunderMelt = 34,
    ThunderBreak = 35,
    ThunderMuzzle = 36,
    LightMelt = 37,
    LightBreak = 38,
    LightMuzzle = 39,
    DarknessMelt = 40,
    DarknessBreak = 41,
    DarknessMuzzle = 42,
    GeneralEffective = 43,
    SuperArmor = 44,
    BackAttack = 45,
    ElementSpread = 46,
    ProjectileInWater = 47,
    DodgeSuccess_Roll = 48,
    DodgeSuccess_Step = 49,
    DodgeAttack_DodgeSuccess = 50,
    Resurrection = 51,
    ResurrectionComp = 52,
    BuffAuraATK = 53,
    BuffAuraDEF = 54,
    EnemySpawn = 55,
    AerialAttackBonus = 56,
    ClassLevelUp = 57,
    AdventurerRankUp = 58,
    MaxNum = 59,
    EEffectId_MAX = 60,
};

enum EEffectTarget {
    EffectTarget_ActorRoot = 0,
    EffectTarget_ActorMesh = 1,
    EffectTarget_PlayerFaceMesh = 2,
    EffectTarget_WeaponMesh_R = 3,
    EffectTarget_WeaponMesh_L = 4,
    EffectTarget_Inventory_0 = 5,
    EffectTarget_Inventory_1 = 6,
    EffectTarget_WeaponR_AdditionalMesh_0 = 7,
    EffectTarget_WeaponL_AdditionalMesh_0 = 8,
    EffectTarget_MAX = 9,
};

namespace EEnvironmentType {
    enum Type {
        Always = 0,
        Unsheathe = 1,
        Sheathe = 2,
        EEnvironmentType_MAX = 3,
    };
}

enum class EEquipableGender {
    Unknown = 0,
    Common = 1,
    Male = 2,
    Female = 3,
    EEquipableGender_MAX = 4,
};

enum class EFacilityIconStatus {
    Enable = 0,
    Disable = 1,
    EFacilityIconStatus_MAX = 2,
};

enum class EFacilityType {
    NONE = 0,
    CLASS_CHANGE = 1,
    PLAYER_CRAFT = 2,
    NPC_CRAFT = 3,
    CRAFT_RECEIVE = 4,
    EFacilityType_MAX = 5,
};

enum class EFieldStatus {
    Available = 0,
    Unavailable = 1,
    Visible = 2,
    Visible_NoDispose = 3,
    Invisible = 4,
    EFieldStatus_MAX = 5,
};

enum class EFileDialogResult {
    Successed = 0,
    Failed = 1,
    EFileDialogResult_MAX = 2,
};

enum class EFootPrintSide {
    None = 0,
    Right = 1,
    Left = 2,
    RightForefoot = 3,
    LeftForefoot = 4,
    NUM = 5,
    EFootPrintSide_MAX = 6,
};

namespace EFootPrintType {
    enum Type {
        None = 0,
        WalkStart = 1,
        Walk = 2,
        Run = 3,
        Dash = 4,
        Jump = 5,
        Landing_S = 6,
        Landing_M = 7,
        Landing_L = 8,
        Down = 9,
        Down_M = 10,
        Down_L = 11,
        HeavyAttack = 12,
        Step = 13,
        Swimming = 14,
        DirectWaterIn = 15,
        DirectWaterOut = 16,
        EFootPrintType_MAX = 17,
    };
}

enum class EGameInput {
    None = 0,
    DummyMove = 1,
    Walk = 2,
    Dash = 3,
    DummyAction = 4,
    MainAction = 5,
    SubAction = 6,
    AerialAction = 7,
    LeftSkill = 8,
    RightSkill = 9,
    Skill1 = 10,
    Skill2 = 11,
    Skill3 = 12,
    Skill4 = 13,
    SpecialAction = 14,
    DodgeAction = 15,
    DodgeAttack = 16,
    JumpAction = 17,
    UkemiAction = 18,
    CommandDodge = 19,
    CommandUkemi = 20,
    SkillCancelStep = 21,
    Dummy_0 = 22,
    Dummy_1 = 23,
    Skill5 = 24,
    Skill6 = 25,
    Skill7 = 26,
    Skill8 = 27,
    Reload = 28,
    Dummy_2 = 29,
    ImagineArts = 30,
    ImagineArts2 = 31,
    ImagineMount = 32,
    Interaction = 33,
    Function_Gamepad = 34,
    Function_Gamepad2 = 35,
    Function_Keyboard = 36,
    DummyButton = 37,
    LeftMouseButton = 38,
    RightMouseButton = 39,
    PadUp = 40,
    PadDown = 41,
    PadRight = 42,
    PadLeft = 43,
    PadL1 = 44,
    PadR1 = 45,
    DummySkill = 46,
    SkillGuard = 47,
    SkillCounterBarrier = 48,
    LABEL_NUM = 49,
    EGameInput_MAX = 50,
};

enum class EGatherHeight {
    Low = 0,
    Middle = 1,
    High = 2,
    EGatherHeight_MAX = 3,
};

namespace EGuildAcceptType {
    enum Type {
        NeedCertification = 0,
        AutoCertification = 1,
        InviteOnly = 2,
        EGuildAcceptType_MAX = 3,
    };
}

enum class EGuildActivityType {
    TEAM_CONSTRUCT = 0,
    INVITE_JOIN = 1,
    MEMBER_KICKED = 2,
    WITHDRAW = 3,
    REACH_ENTRY = 4,
    UPDATE_TEAMPROFILE = 5,
    RANKUP = 6,
    CHANGE_ROLE = 7,
    LEADER_CHANGE = 8,
    TEAM_RENAME = 9,
    EGuildActivityType_MAX = 10,
};

namespace EGuildAttribute {
    enum Type {
        Exprole = 0,
        Traning = 1,
        Communicate = 2,
        Creative = 3,
        Casual = 4,
        Hard = 5,
        RolePlay = 6,
        EGuildAttribute_MAX = 7,
    };
}

namespace EGuildMemberRole {
    enum Type {
        INVALID = 0,
        GRAND_MASTER = 1,
        SUB_MASTER = 2,
        MANAGER = 3,
        BASIC_GUILD_MEMBER = 4,
        EGuildMemberRole_MAX = 5,
    };
}

enum class EHealProcResult {
    None = 0,
    HealDone = 1,
    ShortOfMoney = 2,
    HealUnnecessary = 3,
    HealCanceled = 4,
    EHealProcResult_MAX = 5,
};

enum class EHealStationDialogMessage {
    None = 0,
    HealChargeConfirm = 1,
    ShortOfMoney = 2,
    HealUnnecessary = 3,
    EHealStationDialogMessage_MAX = 4,
};

enum class EHitEffectSpawnPosType {
    HitPosition = 0,
    SocketPosition = 1,
    ActorPosition = 2,
    InstigatorPosition = 3,
    EHitEffectSpawnPosType_MAX = 4,
};

enum class EHitEffectSpawnRotType {
    None = 0,
    ActorRotation = 1,
    HitActorRotation = 2,
    HitActorNormal = 3,
    HitActorSocketRotation = 4,
    EHitEffectSpawnRotType_MAX = 5,
};

enum class EHomingType {
    HomingAcceleration = 0,
    HomingCorrectionAngle = 1,
    HomingCorrectionVerticalAngle = 2,
    HomingCorrectionHorizontalOnlyAngle = 3,
    EHomingType_MAX = 4,
};

enum class EInteractionTargetType {
    None = 0,
    Player = 1,
    Npc = 2,
    GatherPoint = 3,
    WarpPoint = 4,
    NoticeBoard = 5,
    TreasureBox = 6,
    FishingPoint = 7,
    CraftMachine = 8,
    Gimmick = 9,
    Other = 10,
    Max = 11,
};

enum class EInterruptQuestAchievementType {
    None = 0,
    NamedEnemy_Kill = 1,
    EnemySet_AllKill = 2,
    NpcTalk = 3,
    Gimmick_Interaction = 4,
    Gimmick_AllBreak = 5,
    ItemUse = 6,
    Fishing = 7,
    Gimmick_Defense = 8,
    Max = 9,
};

enum class EInterruptQuestConditionType {
    QuestAreaIn = 0,
    GimmickAreaIn = 1,
    KillTarget_QuestArea = 2,
    KillTarget_GimmickArea = 3,
    QuestAreaIn_Mount = 4,
    GimmickAreaIn_Mount = 5,
    QuestAreaIn_PlayerNum = 6,
    GimmickAreaIn_PlayerNum = 7,
    HaveMoneyCount_QuestArea = 8,
    HaveMoneyCount_GimmickArea = 9,
    BadStatus_QuestArea = 10,
    BadStatus_GimmickArea = 11,
    ActionIntaract_QuestArea = 12,
    ActionIntaract_GimmickArea = 13,
    ActionRecovery_QuestArea = 14,
    ActionRecovery_GimmickArea = 15,
    ActionEmote_QuestArea = 16,
    ActionEmote_GimmickArea = 17,
    ActionGather_QuestArea = 18,
    ActionGather_GimmickArea = 19,
    ActionItemUse_QuestArea = 20,
    ActionItemUse_GimmickArea = 21,
    ActionNpcTalk_QuestArea = 22,
    ActionNpcTalk_GimmickArea = 23,
    EInterruptQuestConditionType_MAX = 24,
};

enum class EInterruptQuestDestructibleType {
    None = 0,
    Box = 1,
    Barrel = 2,
    EInterruptQuestDestructibleType_MAX = 3,
};

enum class EInterruptQuestEnemySpawnStatus {
    Idle = 0,
    Requested = 1,
    Spawned = 2,
    Max = 3,
};

enum class EInterruptQuestEventActionCondType {
    None = 0,
    All = 1,
    PlayerDead = 2,
    NpcTalkAfter = 3,
    GimmickIntaractAfter = 4,
    ItemUseAfter = 5,
    EInterruptQuestEventActionCondType_MAX = 6,
};

enum class EInterruptQuestFailureStepType {
    None = 0,
    QuestEnd = 1,
    StepBack = 2,
    Max = 3,
};

enum class EInterruptQuestMainConditionType {
    None = 0,
    AllTime = 1,
    DayTime = 2,
    NightTime = 3,
    EventTime = 4,
    EInterruptQuestMainConditionType_MAX = 5,
};

enum class EInterruptQuestRarePopType {
    None = 0,
    Probability = 1,
    EInterruptQuestRarePopType_MAX = 2,
};

enum class EInterruptQuestResult {
    Unknown = 0,
    Success = 1,
    Failed = 2,
    StepUp = 3,
    EInterruptQuestResult_MAX = 4,
};

enum class EInterruptQuestRewardType {
    None = 0,
    Unconditional = 1,
    Max = 2,
};

enum class EInterruptQuestStartMainActionType {
    None = 0,
    NamedEnemyPop = 1,
    EnemySpawn = 2,
    GimmickActorSpawn = 3,
    GatherPointSpawn = 4,
    NpcStandby = 5,
    EnemyRandomPop = 6,
    FishingPointPop = 7,
    Max = 8,
};

enum class EInterruptQuestStatus {
    Idle = 0,
    Loading = 1,
    EnemySyncWait = 2,
    EnemySpawnWait = 3,
    InitWait = 4,
    Running = 5,
    Done = 6,
    EInterruptQuestStatus_MAX = 7,
};

enum class EInterruptQuestStepupType {
    None = 0,
    Unconditional = 1,
    QuestStep = 2,
    Max = 3,
};

enum class EInterruptQuestSubConditionAreaType {
    None = 0,
    QuestArea = 1,
    GimmickArea = 2,
    Max = 3,
};

enum class EInterruptQuestSubConditionType {
    None = 0,
    KillTarget = 1,
    AreaIn = 2,
    NearGimmick = 3,
    NpcTalk = 4,
    GimmickActionIntaract = 5,
    GimmickBreak = 6,
    ActionItemUse = 7,
    AreaIn_Mount = 8,
    AreaIn_PlayerNum = 9,
    HaveMoneyCount = 10,
    BadStatus = 11,
    ActionRecovery = 12,
    ActionEmote = 13,
    ActionGather = 14,
    SignalDoor = 15,
    EInterruptQuestSubConditionType_MAX = 16,
};

enum class EItemAppraisalResultPhase {
    UNIDENTIFED = 0,
    UNDERAPPRAISA = 1,
    APPRAISED = 2,
    SALE = 3,
    END = 4,
    MAX = 5,
};

enum class EItemBoxType {
    None = 0,
    Set = 1,
    Random = 2,
    Select = 3,
    CostumeSet = 4,
    EItemBoxType_MAX = 5,
};

enum class EItemCategory {
    Consumption = 0,
    Sale = 1,
    Smelting = 2,
    Craft = 3,
    Idea = 4,
    SetBox = 5,
    SelectBox = 6,
    RandomBox = 7,
    EItemCategory_MAX = 8,
};

enum class EItemEfficacyType {
    Invalid = 0,
    HPRecovery = 1,
    MPRecovery = 2,
    SkillRecastReset = 3,
    SpecialRecovery = 4,
    ArtsRecovery = 5,
    FireStatusRecovery = 8,
    IceStatusRecovery = 9,
    ThunderStatusRecovery = 10,
    HPMaxRateUp = 12,
    HPDotRecovery = 13,
    ExpIncrease = 15,
    HPRangeHeal = 16,
    HPRangeHeal_Place = 17,
    HPRangeHeal_Rate = 18,
    HPRangeHeal_Place_Rate = 19,
    FrailnessRecovery = 33,
    CheerfulItem_Firework = 39,
    WeaponSticker = 40,
    MountEnergyReduceConsumption = 41,
    ItemDropRateUpByEnemy = 42,
    ItemDropRateUpByGather = 43,
    DropCountUpByTreasure = 44,
    ExpUpByEnemy = 45,
    ExpUpByMission = 46,
    LunoUpByEnemy = 47,
    LunoUpByMission = 48,
    ItemBox = 49,
    CheerfulItem_PartyPopper = 50,
    CommonAbility_Perk = 51,
    TokenDropCountUp = 52,
    TokenDropRateUp = 53,
    CheerfulItem_GlowStickSingle = 54,
    CheerfulItem_GlowStickMultiple = 55,
    CheerfulItem_Snowman = 56,
    Dye = 57,
    BackDyeingAgent = 58,
    ToningAgent = 59,
    CheerfulItem_FlowerShower = 60,
    ItemEfficacyType_Num = 61,
    EItemEfficacyType_MAX = 62,
};

enum class EItemEffictionType {
    Invalid = 0,
    Instant = 1,
    Set = 2,
    Volatile = 3,
    NonVolatile = 4,
    EItemEffictionType_MAX = 5,
};

namespace EItemFilterType {
    enum Type {
        None = 0,
        Filter_WeaponType_ShieldSword = 1,
        Filter_WeaponType_Axe = 2,
        Filter_WeaponType_Bow = 3,
        Filter_WeaponType_Cane = 4,
        Filter_Imagine_Active = 5,
        Filter_Imagine_Passive = 6,
        Filter_Imagine_Passive_Position1 = 7,
        Filter_Imagine_Passive_Position2 = 8,
        Filter_Imagine_Passive_Position3 = 9,
        Filter_Imagine_Passive_Position4 = 10,
        Filter_Imagine_Passive_Position5 = 11,
        Filter_Effective_None = 12,
        Filter_Effective_Physics = 13,
        Filter_Effective_Earth = 14,
        Filter_Effective_Fire = 15,
        Filter_Effective_Ice = 16,
        Filter_Effective_Thunder = 17,
        Filter_Effective_Light = 18,
        Filter_Effective_Darkness = 19,
        Filter_Items_CanUse = 20,
        Filter_Items_Material = 21,
        Filter_Items_Item = 22,
        Filter_Items_Weapon = 23,
        Filter_Items_Costume = 24,
        Filter_Items_Accessory = 25,
        Filter_Items_Equipment = 26,
        Filter_Items_Imagine = 27,
        Filter_Items_MountImagine = 28,
        Filter_Locked = 29,
        Filter_Costume_Protector_Head = 30,
        Filter_Costume_Protector_Body = 31,
        Filter_Costume_Protector_Hand = 32,
        Filter_Costume_Protector_Leg = 33,
        Filter_Costume_Protector_Shoes = 34,
        Filter_Costume_Protector_Accessory_HeadTop = 35,
        Filter_Costume_Protector_Accessory_Eye = 36,
        Filter_Costume_Protector_Accessory_Cheek = 37,
        Filter_Costume_Protector_Accessory_Ear = 38,
        Filter_Costume_Protector_Accessory_RightAndLeftHandFinger = 39,
        Filter_Costume_Protector_Accessory_LeftHandFinger = 40,
        Filter_Costume_Protector_Accessory_Back = 41,
        Filter_Costume_Protector_Accessory_Hip = 42,
        Filter_Costume_Protector_Accessory_Underwear = 43,
        Filter_Quest_Slay = 44,
        Filter_Quest_Errand = 45,
        Filter_Quest_Collect = 46,
        Filter_Quest_Traverse = 47,
        Filter_Quest_Level1 = 48,
        Filter_Quest_Level11 = 49,
        Filter_Quest_Level21 = 50,
        Filter_Quest_Level31 = 51,
        Filter_Quest_Level41 = 52,
        Filter_Quest_Level51 = 53,
        Filter_Quest_Level61 = 54,
        Filter_Quest_CantReceive = 55,
        Filter_Quest_Category_Main = 56,
        Filter_Quest_Category_Sub = 57,
        Filter_Quest_Category_Class = 58,
        Filter_Quest_Category_Extra = 59,
        Filter_Quest_Category_ReleaseFunctions = 60,
        Filter_Imagine_IllustImagine = 61,
        Filter_LevelMax = 62,
        Filter_NotLevelMax = 63,
        Filter_SyntheableWeapons = 64,
        Filter_AddSlotWeapons = 65,
        Filter_TuningWeapons = 66,
        Filter_RemoveAbilityWeapons = 67,
        Filter_HasAbilities = 68,
        Filter_SmeltingOnly = 69,
        Filter_BillingOnly = 70,
        Filter_RefiningMaterialOnly = 71,
        Filter_Extendable = 72,
        Filter_WeaponType_P020 = 73,
        Filter_WeaponType_P019 = 74,
        Filter_BlueProPointExchange = 75,
        Filter_FusionItemOnly = 76,
        Filter_FusionItemSlot1 = 77,
        Filter_FusionItemSlot2 = 78,
        Filter_FusionItemSlot3 = 79,
        Filter_FusionItemSlot4 = 80,
        Filter_WeaponSlot1 = 81,
        Filter_WeaponSlot2 = 82,
        Filter_WeaponSlot3 = 83,
        Filter_WeaponSlot4 = 84,
        Filter_FusionItemClass_P012 = 85,
        Filter_FusionItemClass_P007 = 86,
        Filter_FusionItemClass_P006 = 87,
        Filter_FusionItemClass_P011 = 88,
        Filter_FusionItemClass_P019 = 89,
        Filter_FusionItemClass_P020 = 90,
        Filter_AbilityType_Params = 91,
        Filter_AbilityType_Attack = 92,
        Filter_AbilityType_Defence = 93,
        Filter_AbilityType_Support = 94,
        Filter_AbilityType_Other = 95,
        Filter_LimitedWeapon = 96,
        Filter_UnlimitedWeapon = 97,
        Filter_ItemCategory_Consumable = 98,
        Filter_ItemCategory_Sale = 99,
        Filter_ItemCategory_Smelting = 100,
        Filter_ItemCategory_Craft = 101,
        Filter_ItemCategory_Idea = 102,
        Filter_ItemCategory_SetBox = 103,
        Filter_ItemCategory_SelectBox = 104,
        Filter_ItemCategory_RandomBox = 105,
        Filter_Costume_Composite = 106,
        Filter_Costume_NoComposite = 107,
        Filter_StackB_Enable = 108,
        Filter_StackB_Disable = 109,
        Filter_StackB_Applied = 110,
        Filter_StackB_NotApplied = 111,
        Filter_StackB_Incomplete = 112,
        Filter_StackB_Complete = 113,
        Filter_IsBattleBuildRegisted = 114,
        Filter_IsBattleBuildNotRegisted = 115,
        Filter_IsEquiped = 116,
        Filter_IsNotEquiped = 117,
        Filter_IsBuildEquipments = 118,
        Filter_AdventureBoard_Reward_Weapon_Recepi = 119,
        Filter_AdventureBoard_Reward_PassiveImagine_Recepi = 120,
        Filter_AdventureBoard_Reward_ActiveImagine_Recepi = 121,
        Filter_AdventureBoard_Reward_MountImagine = 122,
        Filter_AdventureBoard_Reward_Costume = 123,
        Filter_AdventureBoard_Reward_Currency = 124,
        Filter_AdventureBoard_Reward_Item = 125,
        Filter_AdventureBoard_AdventureRank = 126,
        Filter_AdventureBoard_Extra = 127,
        Filter_AdventureBoard_NotCleared = 128,
        Filter_AdventureBoard_Cleared = 129,
        Filter_AdventureBoard_Complete = 130,
        Filter_AdventureBoard_Favorite = 131,
        Filter_AdventureBoard_GetReward = 132,
        Filter_AdventureBoard_P012 = 133,
        Filter_AdventureBoard_P007 = 134,
        Filter_AdventureBoard_P006 = 135,
        Filter_AdventureBoard_P011 = 136,
        Filter_AdventureBoard_P019 = 137,
        Filter_AdventureBoard_P020 = 138,
        Filter_Hyoui = 139,
        Filter_FangExpedition_Using = 140,
        Filter_FangExpedition_NoUsing = 141,
        FILTER_MAX = 142,
        EItemFilterType_MAX = 143,
    };
}

enum class EItemObtainRouteType {
    Invalid = 0,
    Subdue = 1,
    Picking = 2,
    Craft = 3,
    DungeonClear = 4,
    EItemObtainRouteType_MAX = 5,
};

enum class EItemType {
    ItemType_Invalid = 0,
    ItemType_Item = 1,
    ItemType_Weapon = 2,
    ItemType_Costume = 3,
    ItemType_Imagine = 5,
    ItemType_MountImagine = 6,
    ItemType_Num = 7,
    ItemType_MAX = 8,
};

namespace EJingleType {
    enum Type {
        None = 0,
        TUTORIAL_HELP = 1,
        EJingleType_MAX = 2,
    };
}

enum class ELaunchSkillPreInputType {
    Attack = 0,
    Step = 1,
    None = 2,
    ELaunchSkillPreInputType_MAX = 3,
};

enum class ELibraryImagineType {
    BattleImagine = 0,
    EnhanceImagine = 1,
    Num = 2,
    ELibraryImagineType_MAX = 3,
};

enum class ELibraryItemCategory {
    Consumption = 0,
    Idea = 1,
    Smelting = 2,
    Craft = 3,
    Sale = 4,
    Num = 5,
    ELibraryItemCategory_MAX = 6,
};

enum class ELoadingType {
    Common = 0,
    Dungeon = 1,
    PvP = 2,
    Simple = 3,
    Max = 4,
};

enum class ELoginBonusCategory {
    LoginBonus_Invalid = 0,
    LoginBonus_Item = 1,
    LoginBonus_Weapon = 2,
    LoginBonus_Costume = 3,
    LoginBonus_Imagine = 4,
    LoginBonus_MountImagine = 5,
    LoginBonus_ExCategory_Start = 100,
    LoginBonus_Money = 100,
    LoginBonus_Orb = 101,
    LoginBonus_ItemBox = 102,
    LoginBonus_Emote = 103,
    LoginBonus_Stamp = 104,
    LoginBonus_Exp = 105,
    LoginBonus_Achievement = 106,
    LoginBonus_ImagineRecipe = 107,
    LoginBonus_BPP = 108,
    LoginBonus_ItemRecipe = 109,
    LoginBonus_WeaponRecipe = 110,
    LoginBonus_Token = 111,
    LoginBonus_StampCategory = 112,
    LoginBonus_WeaponSeries = 113,
    LoginBonus_AdventureBoard = 114,
    LoginBonus_FusionItem = 115,
    LoginBonus_MAX = 116,
};

enum class EMapFuncIconType {
    MapFuncIcon_CurrMap = 0,
    MapFuncIcon_WorldMap = 1,
    MapFuncIcon_MapOneBefore = 2,
    MapFuncIcon_LayerToggle = 3,
    MapFuncIcon_Max = 4,
};

enum class EMapPinType {
    MapPin_Type1 = 0,
    MapPin_Type2 = 1,
    MapPin_Type3 = 2,
    MapPin_Type4 = 3,
    MapPin_Type5 = 4,
    MapPin_Eraser = 5,
    MapPin_Max = 6,
};

enum class EMapSymbolIconType {
    MapSymbolIcon_Player = 0,
    MapSymbolIcon_PartyMember = 1,
    MapSymbolIcon_PartyMember_Dead = 2,
    MapSymbolIcon_FieldEnemy = 3,
    MapSymbolIcon_MainQuest_Acceptable = 4,
    MapSymbolIcon_MainQuest_InProgress = 5,
    MapSymbolIcon_MainQuest_Reportable = 6,
    MapSymbolIcon_MainQuest_Unprocessable = 7,
    MapSymbolIcon_SubQuest_Acceptable = 8,
    MapSymbolIcon_SubQuest_InProgress = 9,
    MapSymbolIcon_SubQuest_Reportable = 10,
    MapSymbolIcon_SubQuest_Unprocessable = 11,
    MapSymbolIcon_ExtraQuest_Acceptable = 12,
    MapSymbolIcon_ExtraQuest_InProgress = 13,
    MapSymbolIcon_ExtraQuest_Reportable = 14,
    MapSymbolIcon_ExtraQuest_Unprocessable = 15,
    MapSymbolIcon_MainQuest_Acceptable_Outside = 16,
    MapSymbolIcon_MainQuest_InProgress_Outside = 17,
    MapSymbolIcon_MainQuest_Reportable_Outside = 18,
    MapSymbolIcon_MainQuest_Unprocessable_Outside = 19,
    MapSymbolIcon_SubQuest_Acceptable_Outside = 20,
    MapSymbolIcon_SubQuest_InProgress_Outside = 21,
    MapSymbolIcon_SubQuest_Reportable_Outside = 22,
    MapSymbolIcon_SubQuest_Unprocessable_Outside = 23,
    MapSymbolIcon_ExtraQuest_Acceptable_Outside = 24,
    MapSymbolIcon_ExtraQuest_InProgress_Outside = 25,
    MapSymbolIcon_ExtraQuest_Reportable_Outside = 26,
    MapSymbolIcon_ExtraQuest_Unprocessable_Outside = 27,
    MapSymbolIcon_InterruptQuest_InProgress = 28,
    MapSymbolIcon_Shop_Weapon = 29,
    MapSymbolIcon_HealStation = 30,
    MapSymbolIcon_Shop_Item = 31,
    MapSymbolIcon_Shop_Peddler = 32,
    MapSymbolIcon_Npc_Tutorial = 33,
    MapSymbolIcon_Npc_Dungeon = 34,
    MapSymbolIcon_WarpPoint = 35,
    MapSymbolIcon_LocalWarpPoint = 36,
    MapSymbolIcon_InstanceDungeon = 37,
    MapSymbolIcon_Shop_Protector = 38,
    MapSymbolIcon_Npc_Quest = 39,
    MapSymbolIcon_Shop_Aesthe = 40,
    MapSymbolIcon_Shop_Dyeing = 41,
    MapSymbolIcon_ImagineLabo = 42,
    MapSymbolIcon_Workshop = 43,
    MapSymbolIcon_UserQuestHouse = 44,
    MapSymbolIcon_ExchangeShop = 45,
    MapSymbolIcon_CoinHouse = 46,
    MapSymbolIcon_Pin = 47,
    MapSymbolIcon_Craft = 48,
    MapSymbolIcon_ClassChange = 49,
    MapSymbolIcon_Shop_Synthe = 50,
    MapSymbolIcon_Restuarant = 51,
    MapSymbolIcon_ChallengeBox = 52,
    MapSymbolIcon_Arena = 53,
    MapSymbolIcon_Warehouse = 54,
    MapSymbolIcon_Guild = 55,
    MapSymbolIcon_GachaShop = 56,
    MapSymbolIcon_MemoryStand = 57,
    MapSymbolIcon_TimeAttack = 58,
    MapSymbolIcon_AdventurerRank = 59,
    MapSymbolIcon_RankingBoard = 60,
    MapSymbolIcon_ZoneBorder = 61,
    MapSymbolIcon_Cloud = 62,
    MapSymbolIcon_RegionIcon = 63,
    MapSymbolIcon_FightingToghterNPC = 64,
    MapSymbolIcon_FightingToghterNPC_Dead = 65,
    MapSymbolIcon_RaidDungeon = 66,
    MapSymbolIcon_BuffNPC = 67,
    MapSymbolIcon_BuffNPC_Invalid = 68,
    MapSymbolIcon_MaterialSupporter = 69,
    MapSymbolIcon_MaterialSupporter_Invalid = 70,
    MapSymbolIcon_ReleaseSubQuest_Acceptable = 71,
    MapSymbolIcon_ReleaseSubQuest_InProgress = 72,
    MapSymbolIcon_ReleaseSubQuest_Reportable = 73,
    MapSymbolIcon_ReleaseSubQuest_Unprocessable = 74,
    MapSymbolIcon_ClassSubQuest_Acceptable = 75,
    MapSymbolIcon_ClassSubQuest_InProgress = 76,
    MapSymbolIcon_ClassSubQuest_Reportable = 77,
    MapSymbolIcon_ClassSubQuest_Unprocessable = 78,
    MapSymbolIcon_RaidDungeon_Time = 79,
    MapSymbolIcon_AbilityMastery = 80,
    MapSymbolIcon_Fishing = 81,
    MapSymbolIcon_Camp = 82,
    MapSymbolIcon_ClimbPoint = 83,
    MapSymbolIcon_DxBattleNPC = 84,
    MapSymbolIcon_PineVillageNPC = 85,
    MapSymbolIcon_DhcNPC = 86,
    MapSymbolIcon_Unknown = 87,
    MapSymbolIcon_MAX = 88,
};

enum class EMarkerSizeType {
    Fixed = 0,
    AttackCollisionSize = 1,
    ProjectileSize = 2,
    EMarkerSizeType_MAX = 3,
};

enum class EMarkerTargetingType {
    OwnerCharacter = 0,
    TargetActor = 1,
    TargetLocation = 2,
    AttackCollisionCenter = 3,
    RootMotionAttackCollision = 4,
    RootMotionTargetLocation = 5,
    EMarkerTargetingType_MAX = 6,
};

enum EMasterDataType {
    PlayerStatusMaster = 0,
    PlayerStatusMasterCommonParams = 1,
    PlayerStatusMapTravelMaster = 2,
    AbilityMaster = 3,
    AbilityEffectMaster = 4,
    WeaponKillerPerkPickMaster = 5,
    ItemMaster = 6,
    ItemEfficacyTypeMaster = 7,
    OutGameBuffMaster = 8,
    WeaponMaster = 9,
    WeaponLevelStatusPatternMaster = 10,
    InitializeWeaponMaster = 11,
    QuestMaster = 12,
    WarpPointMaster = 13,
    TextMaster = 14,
    ShopItemMaster = 15,
    GameModeInfo = 16,
    MapInfo = 17,
    DungeonProcess = 18,
    EnemyParamMaster = 19,
    AchievementMaster = 20,
    NgWords = 21,
    StampMaster = 22,
    CraftMaster = 23,
    RecipeReleaseConditionMaster = 24,
    AdventurerRank = 25,
    Treasure = 26,
    MasterImagine = 27,
    MasterImagineParam = 28,
    MasterImaginePerk = 29,
    MasterImagineRecepi = 30,
    MasterMountImagine = 31,
    AttackDataMaster = 32,
    AttackOverrideDataMaster = 33,
    AttackModifyDataMaster = 34,
    SkillData = 35,
    MasterCostume = 36,
    MasterItemBox = 37,
    LiquidMemory = 38,
    LiquidMemoryAccumulateLotteryTable = 39,
    Token = 40,
    TokenUse = 41,
    Supply = 42,
    EventTerms = 43,
    Reward = 44,
    DungeonReward = 45,
    DungeonRankedReward = 46,
    RewardLotteryGroup = 47,
    DigitalSignage = 48,
    EmoteMaster = 49,
    FreeBuff = 50,
    AestheShopCourseMaster = 51,
    AestheShopPartsMaster = 52,
    AestheShopCharaParamRestrictionMaster = 53,
    CostumeExtraColorMaster = 54,
    GuildRankMaster = 55,
    GuildRankUnlockMaster = 56,
    PaymentLimitMaster = 57,
    RmShopMaster = 58,
    PurchaseConditionMaster = 59,
    ShopItemSetMaster = 60,
    RoseOrbShopItemMaster = 61,
    CurrencyShopItemMaster = 62,
    CurrencyShopPurchaseLimitMaster = 63,
    BPPtShopItemMaster = 64,
    BPPtShopPurchaseLimitMaster = 65,
    BPPtExchangeMaster = 66,
    SeasonPassShopItemMaster = 67,
    SeasonPassShopPurchaseLimitMaster = 68,
    MasterSeason = 69,
    MasterSeasonPass = 70,
    MasterSeasonPassReward = 71,
    WarehouseAbilityRecipesMaster = 72,
    WarehouseAbilityCollectionMaster = 73,
    WarehouseAbilityStoringMaster = 74,
    WarehouseAbilityMissionMaster = 75,
    WarehouseAbilityZoneMaster = 76,
    WarehouseAbilityProductionMaster = 77,
    RewardBoostMissionMaster = 78,
    WarehouseAbilityTokenMaster = 79,
    RewardBoostLiquidMemoryMaster = 80,
    ResearchTeamMaster_CostTime = 83,
    RaidBattleMaster = 84,
    DungeonEntryConditionMaster = 85,
    InterruptQuestMaster = 86,
    CraftTokenMaster = 87,
    EventShopMaster = 88,
    EventShopItemMaster = 89,
    EventShopItemSetMaster = 90,
    EventShopRealGoodsMaster = 91,
    BattleScoreMaster = 92,
    CouponMasterData = 93,
    NetworkCafeBuffsMasterData = 94,
    EventEnemyDropMasterData = 95,
    MasterEventChallengeQuestDrop = 96,
    SublevelLoad = 97,
    MasterVersionData = 98,
    InterruptQuestDestructibleObjectMasterData = 99,
    AdventureBoardParamMasterData = 100,
    LiquidMemoryAccumulateTokenInfoMasterData = 101,
    RecipeSetMaster = 102,
    AdventureBoardPanelParamMasterData = 103,
    AdventureBoardMissionParamMasterData = 104,
    CountryConfigMaster = 105,
    MasterFusionItem = 106,
    MasterSyntheAbilityPickup = 107,
    RankingReward = 108,
    HappyNappo = 109,
    FeatureSetting = 110,
    DxBattleContributonScoreConefficient = 111,
    DxBattleContributonScoreAttenuAtion = 112,
    FusionCost = 119,
    FusionTicket = 120,
    FusionAdjustment = 121,
    RandomTreasureBoxChest = 122,
    GameSettings = 124,
    AdventureCardDecoration = 126,
    Num = 128,
    EMasterDataType_MAX = 129,
};

enum class EMaterialLocation {
    None = 0,
    Upper = 1,
    Lower = 2,
    Gloves = 3,
    Shoes = 4,
    Hat = 5,
    EMaterialLocation_MAX = 6,
};

enum class EMaterialType {
    None = 0,
    Costume = 1,
    Skin = 2,
    Face = 3,
    Hair = 4,
    Outline = 5,
    Eye = 6,
    EyeLash = 7,
    Brow = 8,
    Socks = 9,
    EyeLeft = 10,
    EyeRight = 11,
    Beard = 12,
    EMaterialType_MAX = 13,
};

enum EMeshClimbingState {
    MeshClimbing_None = 0,
    MeshClimbing_Start_ParamSet = 1,
    MeshClimbing_Start_MoveRootMotion = 2,
    MeshClimbing_Start_SafeMove = 3,
    MeshClimbing_BetweenPoints = 4,
    MeshClimbing_AtPoint = 5,
    MeshClimbing_Drop = 6,
    MeshClimbing_Clamber = 7,
    MeshClimbing_MAX = 8,
};

namespace EMoneyUIText {
    enum Type {
        None = 0,
        Currency = 1,
        EMoneyUIText_MAX = 2,
    };
}

enum class EMovabilityType {
    MV_NORMAL = 0,
    MV_UnmovableAndUnrotatable = 1,
    MV_UnmovableOnly = 2,
    MV_UnrotatableOnly = 3,
    MV_DoNotMove = 4,
    MV_DoNotMoveAndRotate = 5,
    MV_UnmovableAndDoNotRotate = 6,
    Num = 7,
    EMovabilityType_MAX = 8,
};

enum class EMuzzleEffectSpawnPosType {
    SpawnPos = 0,
    Inventory0 = 1,
    Inventory1 = 2,
    Instigator = 3,
    EMuzzleEffectSpawnPosType_MAX = 4,
};

enum class EMuzzleEffectSpawnRotType {
    ProjectileDir = 0,
    TargetDir = 1,
    Inventory0 = 2,
    Inventory1 = 3,
    Instigator = 4,
    EMuzzleEffectSpawnRotType_MAX = 5,
};

enum class EMyCharacterWeaponSortType {
    SortType_WeaponName = 0,
    SortType_WeaponAura = 1,
    SortType_WeaponRarity = 2,
    SortType_Max = 3,
};

enum class ENavmeshDirection {
    Left = 0,
    Right = 1,
    ENavmeshDirection_MAX = 2,
};

namespace ENewMarkContentType {
    enum Type {
        MyChara = 0,
        Inventory = 1,
        Library = 2,
        ItemCraft = 3,
        ImagineCraft = 4,
        QuestBoard = 5,
        SeasonPassMenu_New = 6,
        WarehouseAbility = 7,
        AdventureBoard = 8,
        QuestList = 9,
        SeasonPassMenu_End = 10,
        SeasonPassMenu_ReceiveEnd = 11,
        SeasonPassPurchaseMenu_New = 12,
        SeasonPassPurchaseMenu_End = 13,
        SeasonPassRankPurchaseMenu_New = 14,
        SeasonPassRankPurchaseMenu_End = 15,
        SeasonPassShopMenu_New = 16,
        SeasonPassShopMenu_End = 17,
        SeasonPassShopMenu_ReceiveEnd = 18,
        BossIntroductionDemo = 19,
        EventShop_Event = 20,
        EventShop_Product = 21,
        NewEquipment = 22,
        Mission = 23,
        AutoDeliveryQuest = 24,
        Invalid = 25,
        ENewMarkContentType_MAX = 26,
    };
}

enum class ENotificationDialogStatus {
    Close = 0,
    Open = 1,
    Pending = 2,
    ENotificationDialogStatus_MAX = 3,
};

enum class ENotifyRuleLogic {
    AND = 0,
    OR = 1,
    NAND = 2,
    NOR = 3,
    ENotifyRuleLogic_MAX = 4,
};

enum class ENpcJob {
    Common = 0,
    Ordinary = 1,
    Guide = 2,
    Adventurer = 3,
    Noble = 4,
    Farmer = 5,
    Rogue = 6,
    Traveller = 7,
    Merchant = 8,
    Craftsman = 9,
    Guard = 10,
    Priest = 11,
    Sister = 12,
    Sailor = 13,
    Cook = 14,
    Artist = 15,
    Bandman = 16,
    Maid = 17,
    Butler = 18,
    Soothsayer = 19,
    Entertainer = 20,
    Scientist = 21,
    Exchange = 22,
    Brigade = 23,
    Sokoban = 24,
    ItemStore = 25,
    GeneralStore = 26,
    WeaponStore = 27,
    ImagineStore = 28,
    BeautySalon = 29,
    Dyers = 30,
    Arena = 31,
    CoinTei = 32,
    ClassChange = 33,
    Liquid = 34,
    ChallengeBox = 35,
    Enemy = 36,
    Civilian = 37,
    Drifter = 38,
    Worker = 39,
    Supporter = 40,
    Expedition = 41,
    MAX = 42,
};

enum class ENpcState {
    Idle = 0,
    Talk = 1,
    Stagger = 2,
    ENpcState_MAX = 3,
};

enum class ENpcType {
    None = 0,
    Shop = 1,
    GatherPoint = 2,
    WarpPoint = 3,
    QuestBoard = 4,
    DungeonEntrance = 5,
    ENpcType_MAX = 6,
};

enum class EOutGameBuffSourceType {
    None = 0,
    Item = 1,
    EOutGameBuffSourceType_MAX = 2,
};

enum class EOutGameBuffType {
    None = 0,
    MountEnergyReduceConsumption = 1,
    ItemDropRateUpByEnemy = 2,
    ItemDropRateUpByGather = 3,
    DropCountUpByTreasure = 4,
    ExpUpByEnemy = 5,
    ExpUpByMission = 6,
    LunoUpByEnemy = 7,
    LunoUpByMission = 8,
    TokenDropCountUp = 9,
    TokenDropRateUp = 10,
    Num = 11,
    EOutGameBuffType_MAX = 12,
};

enum class EOverlapBattleStatusTarget {
    None = 0,
    Enemy = 1,
    Friend = 2,
    All = 3,
    EOverlapBattleStatusTarget_MAX = 4,
};

enum class EPathDirection {
    OneWay = 0,
    BothWay = 1,
    EPathDirection_MAX = 2,
};

enum class EPathTarget {
    None = 0,
    EPathTarget_MAX = 1,
};

enum class EPhotoMode {
    None = 0,
    Image_Upload_Max = 100,
    Image_Lock_Max = 20,
    EPhotoMode_MAX = 101,
};

enum class EPhotoType {
    None = 0,
    FaceBg = 1,
    HeaderBg = 2,
    UserPhoto1 = 3,
    UserPhoto2 = 4,
    UserPhoto3 = 5,
    EPhotoType_MAX = 6,
};

enum class EPinMaxPerMap {
    None = 0,
    Max = 5,
};

enum class EPlacesObtained {
    None = 0,
    Treasure = 1,
    GatherPoint = 2,
    EnemyDrop = 3,
    QuestTrigger = 4,
    ChallengeQuest = 5,
    EPlacesObtained_MAX = 6,
};

enum EPlayerActionTagPower {
    ATPower_None = 0,
    ATPower_Light = 1,
    ATPower_High = 2,
    ATPower_Num = 3,
    ATPower_MAX = 4,
};

enum EPlayerActionTagRange {
    ATRange_None = 0,
    ATRange_Short = 1,
    ATRange_Long = 2,
    ATRange_Num = 3,
    ATRange_MAX = 4,
};

enum EPlayerActionTagTarget {
    ATTarget_None = 0,
    ATTarget_Single = 1,
    ATTarget_Multi = 2,
    ATTarget_Num = 3,
    ATTarget_MAX = 4,
};

enum EPlayerActionTagType {
    ATType_None = 0,
    ATType_Damage = 1,
    ATType_Healing = 2,
    ATType_Support = 3,
    ATType_Num = 4,
    ATType_MAX = 5,
};

enum class EPlayerFishingState {
    None = 0,
    Walk = 1,
    Wait = 2,
    Casting = 3,
    Fishing = 4,
    FishingPullUp = 5,
    Success = 6,
    Miss = 7,
    Exit = 8,
    Max = 9,
};

enum class EPlayerStateMachine {
    None = 0,
    Main = 1,
    AimBody = 2,
    AimOffset = 3,
    EPlayerStateMachine_MAX = 4,
};

enum class EProjectileAreaAttackSpawnOrder {
    Random = 0,
    Near = 1,
    Far = 2,
    EProjectileAreaAttackSpawnOrder_MAX = 3,
};

enum class EProjectileAttachTarget {
    None = 0,
    Invoker = 1,
    Target = 2,
    Spawner = 3,
    EProjectileAttachTarget_MAX = 4,
};

enum class EProjectileBaseDir {
    OwnerRotation = 0,
    InstigatorRotation = 1,
    SpawnerRotation = 2,
    EProjectileBaseDir_MAX = 3,
};

enum class EProjectileChangeDamage {
    None = 0,
    HitActorType = 1,
    EProjectileChangeDamage_MAX = 2,
};

enum class EProjectileChargeLevel {
    Level0 = 0,
    Level1 = 1,
    Level2 = 2,
    Level3 = 3,
    Num = 4,
    EProjectileChargeLevel_MAX = 5,
};

enum class EProjectileDirection {
    AutoSetDirection = 0,
    TargetDirection = 1,
    ProjectileDirection = 2,
    SocketDirection = 3,
    ScreenViewDirection = 4,
    BySystem = 5,
    EProjectileDirection_MAX = 6,
};

enum class EProjectileEffectAttachTargetType {
    Owner = 0,
    Mesh = 1,
    EProjectileEffectAttachTargetType_MAX = 2,
};

enum class EProjectileEffectType {
    Hit = 0,
    GroundHit = 1,
    Muzzle = 2,
    SelfDead = 3,
    ShieldHit = 4,
    DurabilityZero = 5,
    EProjectileEffectType_MAX = 6,
};

enum class EProjectileFollowSlopeRotType {
    None = 0,
    FollowPitchRoll = 1,
    FollowPitchOnly = 2,
    FollowRollOnly = 3,
    EProjectileFollowSlopeRotType_MAX = 4,
};

enum class EProjectileForecastState {
    None = 0,
    WaitForecast = 1,
    Forecast = 2,
    WaitMain = 3,
    Main = 4,
    End = 5,
    EProjectileForecastState_MAX = 6,
};

enum class EProjectileHitActorType {
    None = 0,
    SBPlayer = 1,
    SBEnemy = 2,
    EProjectileHitActorType_MAX = 3,
};

enum class EProjectileHitChainChangeTarget {
    InheritanceTarget = 0,
    ChangeInvoker = 1,
    EProjectileHitChainChangeTarget_MAX = 2,
};

enum class EProjectileHitRelative {
    Unknown = 0,
    Hostile = 1,
    Friend = 2,
    EProjectileHitRelative_MAX = 3,
};

enum class EProjectileNetworkRoleType {
    ReplicatedAuthority = 0,
    ReplicatedSimulated = 1,
    ReplicatedDelegateHitAuthority = 2,
    ReplicatedDelegateHitSimulated = 3,
    RemoteClientAuthority = 4,
    RemoteClientSimulated = 5,
    RemoteClientFromTargetAuthority = 6,
    RemoteClientFromTargetSimulated = 7,
    LocalAuthority = 8,
    None = 9,
    EProjectileNetworkRoleType_MAX = 10,
};

enum class EProjectileNetworkSpawnType {
    AutoSetting = 0,
    SendToAllFromRemoteSpawn = 1,
    SendToAllFromTargetClient = 2,
    SendToServerFromDelegateHitAuth = 3,
    SendToServerFromReplicate = 4,
    OnlyClientSpawn = 5,
    EProjectileNetworkSpawnType_MAX = 6,
};

enum class EProjectileNonTargetAction {
    InvokerFront = 0,
    ScreenViewDirection = 1,
    EProjectileNonTargetAction_MAX = 2,
};

enum class EProjectileOrderedChainType {
    ChainNoHitPoint = 0,
    ChainProjectileHit = 1,
    EProjectileOrderedChainType_MAX = 2,
};

enum class EProjectileRootCharacterCategory {
    PLAYER_CONTROL = 0,
    PLAYER_REMOTE_PARTY_IN = 1,
    PLAYER_REMOTE_PARTY_OUT = 2,
    ENEMY_ACTIVE = 3,
    ENEMY_NONACTIVE = 4,
    EProjectileRootCharacterCategory_MAX = 5,
};

enum class EProjectileShareGroup {
    None = 0,
    Group1 = 1,
    Group2 = 2,
    EProjectileShareGroup_MAX = 3,
};

enum class EProjectileShareHitKey {
    Instigator = 0,
    Spawner = 1,
    EProjectileShareHitKey_MAX = 2,
};

enum class EProjectileType {
    Straight = 0,
    Parabola = 1,
    AlongGround = 2,
    Fix = 3,
    Beam = 4,
    RapidShot = 5,
    WideShot = 6,
    Forecast = 7,
    AreaAttack = 8,
    PartyShot = 9,
    CustomBP_DEF = 10,
    EProjectileType_MAX = 11,
};

enum class EProtectorCategory {
    Unknown = 0,
    Head = 1,
    Body = 2,
    Hand = 3,
    Leg = 4,
    Shoes = 5,
    Accessory_HeadTop = 6,
    Accessory_Eye = 7,
    Accessory_Cheek = 8,
    Accessory_Ear = 9,
    Accessory_RightAndLeftHandFinger = 10,
    Accessory_LeftHandFinger = 11,
    Accessory_Back = 12,
    Accessory_Hip = 13,
    Accessory_Underwear = 14,
    EProtectorCategory_MAX = 15,
};

enum class EQuestCategory1 {
    Unknown = 0,
    Normal = 1,
    Interrupt = 2,
    EQuestCategory1_MAX = 3,
};

enum class EQuestCategory2 {
    Unknown = 0,
    Main = 1,
    Sub = 2,
    Extra = 3,
    Class = 4,
    ReleaseFunctions = 5,
    EQuestCategory2_MAX = 6,
};

enum class EQuestCategory3 {
    Unknown = 0,
    Errand = 1,
    Slay = 2,
    Collect = 3,
    Traverse = 4,
    EQuestCategory3_MAX = 5,
};

enum class EQuestCompleteResult {
    Success = 0,
    InvalidRequest = 1,
    InventoryNotCapacity = 2,
    EnougthDeliverables = 3,
    PreconditionError = 4,
    EquipBagNotCapacity = 5,
    StorageNotCapacity = 6,
    NotFoundMasterDataManager = 7,
    NotFoundQuestMasterData = 8,
    NotFoundAcceptedQuestInfo = 9,
    QuestStatusIsNotDone = 10,
    EQuestCompleteResult_MAX = 11,
};

enum class EQuestConditionType {
    Unknown = 0,
    TalkNpc = 1,
    KillEnemy = 2,
    CollectItem = 3,
    ClearID = 4,
    ArriveAt = 5,
    PayedMoney = 6,
    Emote = 7,
    WarpPortal = 8,
    Interaction = 9,
    CraftItem = 10,
    AdventurerRankUp = 11,
    AnyCondition = 12,
    CollectTriggerByEnemy = 13,
    CollectTriggerByGather = 14,
    CollectTrigger = 15,
    ChallengeQuestStart = 16,
    FangExpedition = 17,
    StackB = 18,
    Num = 19,
    EQuestConditionType_MAX = 20,
};

enum class EQuestContributionRank {
    None = 0,
    Bronze = 1,
    Silver = 2,
    Gold = 3,
    Num = 4,
    EQuestContributionRank_MAX = 5,
};

enum class EQuestIconType {
    None = 0,
    Start = 1,
    Target = 2,
    Report = 3,
    Stopping = 4,
    Num = 5,
    EQuestIconType_MAX = 6,
};

enum class EQuestListFilterType {
    MainQuest = 0,
    SubQuest = 1,
    ClassQuest = 2,
    ExtraQuest = 3,
    ReleaseFunctionQuest = 4,
    Num = 5,
    EQuestListFilterType_MAX = 6,
};

enum class EQuestRevivalConditionType {
    Unknown = 0,
    Immediately = 1,
    ElapsedHours = 2,
    ReachedDay = 3,
    ReachedDayOfWeek = 4,
    QuestClear = 5,
    QuestStep = 6,
    Max = 7,
};

enum class EQuestRewardCategory {
    Common = 0,
    Choice = 1,
    Contribution = 2,
    Additional = 3,
    Num = 4,
    EQuestRewardCategory_MAX = 5,
};

enum class EQuestStatus {
    QuestStatus_Locked = 0,
    QuestStatus_NotReceived = 1,
    QuestStatus_Proceeding = 2,
    QuestStatus_Done = 3,
    QuestStatus_Close = 4,
    QuestStatus_Num = 5,
    QuestStatus_MAX = 6,
};

enum class EQuestUnlockConditionType {
    Unknown = 0,
    SpecificQuestStatus = 1,
    QuestStepArrived = 2,
    AnyClassLevel = 3,
    ScenarioFlag = 4,
    EventTerm = 5,
    AdventurerRank = 6,
    Num = 7,
    EQuestUnlockConditionType_MAX = 8,
};

enum class ERaidBattleGameResult {
    Unknown = 0,
    Sucs = 1,
    Failed = 2,
    ERaidBattleGameResult_MAX = 3,
};

enum class ERaidBattleGameStatus {
    Idle = 0,
    Loading = 1,
    Loaded = 2,
    Running = 3,
    Done = 4,
    ERaidBattleGameStatus_MAX = 5,
};

enum class EReceiveDamageSide {
    None = 0,
    SelfIncludeProjectile = 1,
    EReceiveDamageSide_MAX = 2,
};

enum class ERoomMakeFunction {
    RoomMakeRandom = 0,
    RoomMakeStart = 1,
    RoomMakeGoal = 2,
    RoomMakeEnemy = 3,
    RoomMakeTrap = 4,
    RoomMakeCollect = 5,
    Max = 6,
};

enum class ERsDialogResult {
    Ok = 0,
    Yes = 1,
    No = 2,
    Cancel = 3,
    None = 4,
    ERsDialogResult_MAX = 5,
};

enum class ESBAIActionAreaType {
    Territory = 0,
    LineArea = 1,
    BuffArea = 2,
    Max = 3,
};

enum class ESBAICanAttackResult {
    NotPossible = 0,
    Possible = 1,
    NeedTurn = 2,
    NeedMove = 3,
    ESBAICanAttackResult_MAX = 4,
};

enum class ESBAICustomPriority {
    Default = 0,
    PartsBreak = 1,
    Ultimate = 2,
    ESBAICustomPriority_MAX = 3,
};

enum class ESBAIEnemyActionLotteryLogicalOperationType {
    AND = 0,
    OR = 1,
    ESBAIEnemyActionLotteryLogicalOperationType_MAX = 2,
};

enum class ESBAIEnemyActionLotteryModifierInstant {
    ClearRecast = 0,
    ESBAIEnemyActionLotteryModifierInstant_MAX = 1,
};

enum class ESBAIEnemyActionLotteryModifierTrigger {
    None = -1,
    OnPlayerDead = 0,
    ESBAIEnemyActionLotteryModifierTrigger_MAX = 1,
};

enum class ESBAIEnemyActionLotteryPartyBattle {
    None = -1,
    Normal = 0,
    Party = 1,
    ESBAIEnemyActionLotteryPartyBattle_MAX = 2,
};

enum class ESBAIEnemyActionLotteryPhase {
    None = -1,
    Phase1 = 0,
    Phase2 = 1,
    Phase3 = 2,
    Phase4 = 3,
    Phase5 = 4,
    ESBAIEnemyActionLotteryPhase_MAX = 5,
};

enum class ESBAIEnemyActionLotteryPriority {
    Unspecified = -1,
    P1 = 0,
    P2 = 1,
    P3 = 2,
    Bottom = 3,
    Num = 4,
    ESBAIEnemyActionLotteryPriority_MAX = 5,
};

enum class ESBAIOrderConditionComparison {
    Equal = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanEqual = 3,
    GreaterThan = 4,
    GreaterThanEqual = 5,
    ESBAIOrderConditionComparison_MAX = 6,
};

enum class ESBAIPartyStrategy {
    Normal = 0,
    Siege = 1,
    Line = 2,
    ESBAIPartyStrategy_MAX = 3,
};

enum class ESBAIPositioningType {
    Vanguard = 0,
    Rearguard = 1,
    ESBAIPositioningType_MAX = 2,
};

enum class ESBAIReactiveSkill_GuardState {
    Normal = 0,
    Guarding = 1,
    Both = 2,
    ESBAIReactiveSkill_MAX = 3,
};

enum class ESBAITacticalSkill_GuardState {
    Normal = 0,
    Guarding = 1,
    Both = 2,
    ESBAITacticalSkill_MAX = 3,
};

enum class ESBAITacticalSkill_StateComparison {
    Equal = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanEqual = 3,
    GreaterThan = 4,
    GreaterThanEqual = 5,
    ESBAITacticalSkill_MAX = 6,
};

enum class ESBAITacticalSkill_StateOperation {
    Set = 0,
    Add = 1,
    ESBAITacticalSkill_MAX = 2,
};

enum class ESBAITacticalSkill_StateType {
    Bool = 0,
    Int = 1,
    Float = 2,
    ESBAITacticalSkill_MAX = 3,
};

enum class ESBAbilityCalcSuccessRate {
    None = 0,
    Stun = 3,
    Sleep = 4,
    Poison = 5,
    FixTarget = 6,
    Fear = 7,
    Dark = 8,
    CannotSkill = 9,
    StaminaZero = 10,
    CannotItem = 11,
    Nappo = 12,
    Restraint = 13,
    Paralyze = 14,
    RecoverAttackerWhenRecieveDamage = 15,
    GiveDamageDown = 16,
    ReceiveDamageUp = 17,
    ChargeSpeedDown = 18,
    IntervalSpeedDown = 19,
    MoveSpeedDown = 20,
    StaminaRecoveryDown = 21,
    Earth = 22,
    Fire = 23,
    Ice = 24,
    Thunder = 25,
    Light = 26,
    Darkness = 27,
    BeginControlBadCondition = 3,
    EndControlBadCondition = 21,
    Max = 22,
};

enum class ESBAbilityCharacterStatusType {
    MoveSpeed = 0,
    StaminaRecoverySpeed = 1,
    ResurrectionSpeed = 2,
    JumpVelocity = 3,
    ESBAbilityCharacterStatusType_MAX = 4,
};

enum class ESBAbilityConditionOperator {
    Greater = 0,
    GreaterEqual = 1,
    Less = 2,
    LessEqual = 3,
    Equal = 4,
    NotEqual = 5,
    Num = 6,
    ESBAbilityConditionOperator_MAX = 7,
};

enum class ESBAbilityConditionType {
    AnyTime = 0,
    DeadInstigator = 1,
    SkillAttack = 2,
    ActiveBattleEffective = 3,
    ActiveBattleEffectiveGroup = 4,
    ActiveAbilityID = 5,
    ActiveBattleStatusID = 6,
    ActiveBattleMode = 7,
    InWater = 8,
    InBattleMap = 9,
    InMap = 10,
    InGameContentId = 11,
    MapInfo = 12,
    CharacterLevel = 13,
    PlayerClass = 14,
    PlayerClassTotalPower = 15,
    PlayerSpiritRank = 16,
    RemainHitPointRate = 17,
    Sheathe = 18,
    InParty = 19,
    BattleRange = 20,
    WeaponElement = 21,
    WeaponEnhance = 22,
    WeaponProficiency = 23,
    WeaponTotalPower = 24,
    TimeZoneNoon = 25,
    TimeZoneNight = 26,
    EnemyHasAttackOrder = 27,
    DynamicTrigger = 28,
    Num = 29,
    ESBAbilityConditionType_MAX = 30,
};

enum class ESBAbilityControlBadCondition {
    None = 0,
    Stun = 1,
    Sleep = 2,
    Poison = 3,
    FixTarget = 4,
    Fear = 5,
    Dark = 6,
    CannotSkill = 7,
    StaminaZero = 8,
    CannotItem = 9,
    Nappo = 10,
    Restraint = 11,
    Paralyze = 12,
    RecoverAttackerWhenRecieveDamage = 13,
    GiveDamageDown = 14,
    ReceiveDamageUp = 15,
    ChargeSpeedDown = 16,
    IntervalSpeedDown = 17,
    MoveSpeedDown = 18,
    StaminaRecoveryDown = 19,
    Max = 20,
};

enum class ESBAbilityDotAmountType {
    Fix = 0,
    Rate = 1,
    Scale = 2,
    ESBAbilityDotAmountType_MAX = 3,
};

enum class ESBAbilityDynamicTriggerType {
    None = 0,
    Ukemi = 1,
    BackAttackToEnemy = 2,
    AerialAttackBonusToEnemy = 3,
    SucceededDodgeAttackToEnemy = 4,
    ResurrectionSucceeded = 5,
    ESBAbilityDynamicTriggerType_MAX = 6,
};

enum class ESBAbilityEffectiveCategory {
    None = 0,
    Heal = 1,
    BuffPositive = 2,
    ESBAbilityEffectiveCategory_MAX = 3,
};

enum class ESBAbilityEnemyAttributeType {
    DemiHuman = 0,
    Avality = 1,
    Beast = 2,
    Crustacea = 3,
    Hygrophila = 4,
    Humanity = 5,
    Bufferia = 6,
    Makia = 7,
    Dragon = 8,
    Unknown01 = 9,
    Unknown02 = 10,
    Unknown03 = 11,
    Unknown04 = 12,
    Unknown05 = 13,
    Unknown06 = 14,
    RareEnemy = 15,
    Spirit = 16,
    Insect = 17,
    Ground = 18,
    Aerial = 19,
    Plant = 20,
    Bird = 21,
    Flux = 22,
    BstDevotee = 23,
    Distortion = 24,
    Max = 25,
};

enum class ESBAbilityExecuteEnv {
    All = 0,
    Server = 1,
    LocalController = 2,
    ESBAbilityExecuteEnv_MAX = 3,
};

enum class ESBAbilityExpirationType {
    UserAction = 0,
    TimeLimit = 1,
    dummy = 2,
    Count = 3,
    DotTimeCount = 4,
    CountWithTime = 5,
    Num = 6,
    ESBAbilityExpirationType_MAX = 7,
};

enum class ESBAbilityFlags {
    None = 0,
    Stun = 1,
    Freeze = 2,
    Sleep = 3,
    Fear = 4,
    Restraint = 5,
    DeathPenalty = 6,
    Player_CannotMove = 7,
    Player_CannotDash = 8,
    Player_CannotJump = 9,
    Player_CannotBattleAction = 10,
    Player_CannotSkill = 11,
    Player_CannotInteraction = 12,
    Player_CannotItem = 13,
    Player_StaminaZero = 14,
    Player_TransformNappo = 15,
    AllyAttack_AttackScale = 16,
    CurableByInteraction = 17,
    StatusAilmentHP = 18,
    MGC_MPRegen = 19,
    SMA_PowerReload = 20,
    SMA_StoneBody = 21,
    SMA_HealBullet = 22,
    BackHitTrigger = 23,
    Dummy_0 = 24,
    Dummy_1 = 25,
    Max = 26,
};

enum class ESBAbilityForceConditionType {
    NoCheck = 0,
    Success = 1,
    Failure = 2,
    Num = 3,
    ESBAbilityForceConditionType_MAX = 4,
};

enum class ESBAbilityLimitParamType {
    None = 0,
    HP = 1,
    ST = 2,
    STR = 3,
    VIT = 4,
    DEX = 5,
    INT = 6,
    MND = 7,
    AttackPower = 8,
    DefencePower = 9,
    RecuperativePower = 10,
    CriticalRate = 11,
    CriticalPower = 12,
    ElementResist = 13,
    ElementAttack = 14,
    ElementAccumulation = 15,
    GiveDamage = 16,
    GiveDamage_Main = 17,
    GiveDamage_Sub = 18,
    GiveDamage_TSkill = 19,
    GiveDamage_SpecialSkill = 20,
    GiveDamage_BI = 21,
    GiveDamage_NearFar = 22,
    GiveDamage_Race = 23,
    GiveDamage_EnemyAttribute = 24,
    GiveDamage_EnemyID = 25,
    GiveDamage_ContentID = 26,
    ReceiveDamage = 27,
    ReceiveDamage_NearFar = 28,
    ReceiveDamage_Element = 29,
    Amount_HealSkill = 30,
    Amount_BI = 31,
    SkillInterval = 32,
    ReduceStamina = 33,
    ReduceStamina_Dash = 34,
    ReduceStamina_Jump = 35,
    ReduceStamina_Dodge = 36,
    Success_Status = 37,
    Success_StatusResist = 38,
    SkillButtonCharge = 39,
    MoveSpeed = 40,
    JumpVelocity = 41,
    RecoveryStamina = 42,
    HPLoss = 43,
    Max = 44,
};

enum class ESBAbilityLimitSumParamType {
    None = 0,
    GiveDamage = 1,
    ReceiveDamage = 2,
    SkillInterval = 3,
    ReduceStamina = 4,
    ElementAccumulation = 5,
    Amount_HealSkill = 6,
    Max = 7,
};

enum class ESBAbilityLimitType {
    EquipItem = 0,
    NoEquipNoBilling = 1,
    Last = 2,
    ESBAbilityLimitType_MAX = 3,
};

enum class ESBAbilityOnlyEnemyStatus {
    FlashStun = 0,
    NUM = 1,
    ESBAbilityOnlyEnemyStatus_MAX = 2,
};

enum class ESBAbilityOnlyPlayerStatus {
    CannotMove = 0,
    CannotDash = 1,
    CannotJump = 2,
    CannotBattleAction = 3,
    CannotSkill = 4,
    CannotInteraction = 5,
    CannotItem = 6,
    StaminaZero = 7,
    TransformNappo = 8,
    CanTSkillToTSkill = 9,
    FixSpecialSkillRecast = 10,
    SheatheJump = 11,
    Dummy_2 = 12,
    HyouiImagineCommon = 13,
    HyouiImagineCommon_1 = 14,
    HyouiImagineCommon_2 = 15,
    BSK_FireUp = 16,
    BLS_HatTrick = 17,
    BSK_SelfBloodAxe = 18,
    BSK_BerserkMode = 19,
    MGC_ThunderCloud = 20,
    MGC_ElementAmp = 21,
    Dummy = 22,
    RBL_Protection = 23,
    RBL_Taunt = 24,
    RBL_GlitterMode = 25,
    RBL_GlitterGaugeBuff_1 = 26,
    RBL_GlitterGaugeBuff_2 = 27,
    RBL_GlitterGaugeBuff_3 = 28,
    RBL_GlitterGaugeBuff_4 = 29,
    Dummy_3 = 30,
    SMA_PowerReload = 31,
    SMA_StoneBody = 32,
    SMA_HealBullet = 33,
    Dummy_4 = 34,
    LAN_PrepareStyle = 35,
    LAN_ThrowingStyle = 36,
    LAN_WeaknessStance = 37,
    NUM = 38,
    ESBAbilityOnlyPlayerStatus_MAX = 39,
};

enum class ESBAbilityRecoveryAmountType {
    Fix = 0,
    Rate = 1,
    ESBAbilityRecoveryAmountType_MAX = 2,
};

enum class ESBAbilityReduceStaminaType {
    Dash = 0,
    Jump = 1,
    Dodge = 2,
    ESBAbilityReduceStaminaType_MAX = 3,
};

enum class ESBAbilityRequestSource {
    None = 0,
    WeaponAbility = 1,
    WeaponTag = 2,
    Imagine1 = 3,
    Imagine2 = 4,
    Imagine3 = 5,
    Imagine4 = 6,
    Imagine5 = 7,
    BattleAbility = 8,
    Item = 9,
    BattleImagine1 = 10,
    BattleImagine2 = 11,
    ESBAbilityRequestSource_MAX = 12,
};

enum class ESBAbilitySimultaneousActivationControl {
    Block = 0,
    FirstInFirstOut = 1,
    Max = 2,
};

enum class ESBAbilitySkillPosition {
    Main = 0,
    Sub = 1,
    TacticalSkill1 = 2,
    TacticalSkill2 = 3,
    TacticalSkill3 = 4,
    TacticalSkill4 = 5,
    ULT = 6,
    BattleImagine1 = 7,
    BattleImagine2 = 8,
    MountImagine = 9,
    TacticalSkill5 = 10,
    TacticalSkill6 = 11,
    TacticalSkill7 = 12,
    TacticalSkill8 = 13,
    Max = 14,
};

enum class ESBAbilityUIAttribute {
    FixAbility = 0,
    RateAbility = 1,
    ESBAbilityUIAttribute_MAX = 2,
};

enum class ESBAbilityValueLimitType {
    Max = 0,
    Min = 1,
};

enum class ESBAbilityValueShortAndExten {
    Shorten = 0,
    Extension = 1,
    ESBAbilityValueShortAndExten_MAX = 2,
};

enum class ESBAbilityValueUpAndDown {
    Up = 0,
    Down = 1,
    ESBAbilityValueUpAndDown_MAX = 2,
};

enum class ESBAbrityType {
    Unknown = 0,
    Warehouse = 1,
    Buff = 2,
    ESBAbrityType_MAX = 3,
};

enum class ESBAchievementAdventureBoardCompleteStatus {
    None = 0,
    Rewarded = 1,
    NextChallenging = 2,
    AllAcquired = 3,
    Num = 4,
    ESBAchievementAdventureBoardCompleteStatus_MAX = 5,
};

enum class ESBAchievementMasterTitleFlag {
    NoneTitle = 0,
    ConferTitle = 1,
    ESBAchievementMasterTitleFlag_MAX = 2,
};

namespace ESBAchievementSortType {
    enum Type {
        Default_Asc = 0,
        Default_Desc = 1,
        New = 2,
        Rank_Asc = 3,
        Rank_Desc = 4,
        Val_Asc = 5,
        Val_Desc = 6,
        Reward = 7,
        Term = 8,
        ESBAchievementSortType_MAX = 9,
    };
}

enum class ESBActivityCategory {
    Unknown = 0,
    Player = 1,
    Party = 2,
    Quest = 3,
    Colosseum = 4,
    Field = 5,
    ESBActivityCategory_MAX = 6,
};

enum class ESBActivityType {
    Unknown = 0,
    Login = 1,
    Logout = 2,
    StartParty = 3,
    JoinParty = 4,
    AcceptQuest = 5,
    CompleteQuest = 6,
    JoinColosseum = 7,
    ActivateField = 8,
    ActivateDungeon = 9,
    CraftSuccessed = 10,
    DefeatNamedEnemy = 11,
    Num = 12,
    ESBActivityType_MAX = 13,
};

enum class ESBActorHiddenType {
    WaitForLoading = 0,
    PlayerNumRestriction = 1,
    NpcPool = 2,
    PlayerAdmin = 3,
    NotDemoMember = 4,
    DemoHiddenRequest = 5,
    TalkMode = 6,
    QuestEventMode = 7,
    CoinPubPrivateRoom = 8,
    PlayerTransform = 9,
    FieldStatus = 10,
    CharaPartsUpdate = 11,
    BuddyNpc = 12,
    BuddyDrown = 13,
    SwimCamera = 14,
    CameraInRootCollision = 15,
    PhotoModeSpawnedClone = 16,
    PhotoModeTrace = 17,
    FishingMode = 18,
    ParentHidden = 19,
    PlayerCityNetCullDistance = 20,
    SimulatedPlayerMountMismatch = 21,
    Debug_EditorNotDemoMember = 22,
    Debug_HideLocallyPlayer = 23,
    Debug_HideNonLocallyPlayer = 24,
    Debug_HideAllActor_Linked = 25,
    Debug_HideAllActor_NonLinkage = 26,
    Debug_CharaCreate = 27,
    MAX = 28,
};

namespace ESBAdditionalColor {
    enum Type {
        Nomal = 0,
        Ignition = 1,
        Freeze = 2,
        Shock = 3,
        ESBAdditionalColor_MAX = 4,
    };
}

enum class ESBAdjustRootMotionAdjustType {
    Scale = 0,
    Linear = 1,
    ScaleWithPlayRate = 2,
    ESBAdjustRootMotionAdjustType_MAX = 3,
};

enum class ESBAdjustRootMotionTargetInterpolationType {
    Default = 0,
    OldTargetInfo_DEPRECATED = 1,
    InterpLinear_DEPRECATED = 2,
    InterpParaboraTop = 3,
    InterpCliffOutside = 4,
    DirectlyBelowSelf = 5,
    TargetTransitPoint = 6,
    NoTarget = 7,
    ESBAdjustRootMotionTargetInterpolationType_MAX = 8,
};

enum class ESBAdjustRootMotionTargetType {
    Default = 0,
    OldTargetInfo_DEPRECATED = 1,
    InterpLinear_DEPRECATED = 2,
    InterpParaboraTop = 3,
    InterpCliffOutside = 4,
    DirectlyBelowSelf = 5,
    TargetTransitPoint = 6,
    NoTarget = 7,
    ESBAdjustRootMotionTargetType_MAX = 8,
};

enum class ESBAdjustRootMotionZAxisMode {
    NoAdjustZAxis = 0,
    AdjustOnlyZAxis = 1,
    AdjustZAxisOnToNavMesh = 2,
    AdjustZAxisWithRaycastHitLocation = 3,
    Flying = 4,
    ESBAdjustRootMotionZAxisMode_MAX = 5,
};

enum class ESBAdminCommandCallbackRequest {
    None = 0,
    OpenConsole = 1,
    CloseConsole = 2,
    CloseChatWindow = 3,
    OpenBookmarkList = 4,
    StartCommand = 5,
    FinishCommand = 6,
    Max = 7,
};

enum class ESBAdminHideStatus {
    None = 0,
    Hide = 1,
    SHide = 2,
    Max = 3,
};

enum class ESBAdventureBoardClearStatus {
    None = 0,
    PanelClear = 1,
    BoardGoal = 2,
    Num = 3,
    ESBAdventureBoardClearStatus_MAX = 4,
};

enum class ESBAdventureBoardFilterType {
    None = 0,
    Active = 1,
    Favorite = 2,
    ESBAdventureBoardFilterType_MAX = 3,
};

enum class ESBAdventureBoardPanelMissionType {
    None = 0,
    Subjugation = 1,
    Gahter = 2,
    Adventure = 3,
    Survey = 4,
    ESBAdventureBoardPanelMissionType_MAX = 5,
};

enum class ESBAdventureBoardPanelStatus {
    Close = 0,
    Open = 1,
    ClearEffectBF = 2,
    Clear = 3,
    GetRewardAfter = 4,
    Num = 5,
    None = 6,
    ESBAdventureBoardPanelStatus_MAX = 7,
};

enum class ESBAdventureBoardPanelType {
    Start = 0,
    Goal = 1,
    Normal = 2,
    Route = 3,
    Emphasis = 4,
    Free = 5,
    EmphasisFree = 6,
    Num = 7,
    None = 8,
    ESBAdventureBoardPanelType_MAX = 9,
};

enum class ESBAdventureBoardRewardStatusType {
    Noarmal = 0,
    AllRewardGetAfter = 1,
    AllData = 2,
    Num = 3,
    None = 4,
    ESBAdventureBoardRewardStatusType_MAX = 5,
};

enum class ESBAdventureBoardRouteStatus {
    None = 0,
    Hide = 1,
    Visble = 2,
    ClearEffect = 3,
    Num = 4,
    ESBAdventureBoardRouteStatus_MAX = 5,
};

enum class ESBAdventureBoardStatus {
    Active = 0,
    Moving = 1,
    Complete = 2,
    GetRewardAfter = 3,
    None = 4,
    Num = 5,
    ESBAdventureBoardStatus_MAX = 6,
};

enum class ESBAdventureBoardType {
    Normal = 0,
    TimeLimit = 1,
    RankUp = 2,
    Num = 3,
    None = 4,
    ESBAdventureBoardType_MAX = 5,
};

enum class ESBAdventureCardDecorationType {
    None = 0,
    CardFrame = 1,
    CharaFrame = 2,
    Color = 3,
    MAX = 4,
};

enum class ESBAestheShopCharaBodyType {
    None = 0,
    Normal = 1,
    Senior = 2,
    Max = 3,
};

enum class ESBAestheShopCharaFaceType {
    None = 0,
    Normal = 1,
    Youth = 2,
    Senior = 3,
    Max = 4,
};

enum class ESBAestheShopCharaHairType {
    None = 0,
    Vst = 1,
    Sht = 2,
    Mid = 3,
    Lng = 4,
    Pny = 5,
    Twn = 6,
    Lcs = 7,
    Max = 8,
};

enum class ESBAestheShopCharaPartsAndParamEditType {
    CharaCreateOnly = 0,
    AestheShopOnly = 1,
    BothAvailable = 2,
    Max = 3,
};

enum class ESBAestheShopCharaPartsIconType {
    FaceType = 0,
    Hair = 1,
    FaceLine = 2,
    EyeBrow = 3,
    Eye = 4,
    Iris = 5,
    Nose = 6,
    Mouth = 7,
    Beard = 8,
    Lip = 9,
    SkinBase = 10,
    Paint = 11,
    CostumeSet = 12,
    Preset = 13,
    Hat = 14,
    Upper = 15,
    Gloves = 16,
    Lower = 17,
    Shoes = 18,
    Underwear = 19,
    Eyelash = 20,
    Tooth = 21,
    GradationType = 22,
    Max = 23,
};

enum class ESBAimDirection {
    None = 0,
    Camera = 1,
    TargetComponent = 2,
    LockonTargetComponent = 3,
    GuardDirection = 4,
    Fixed = 5,
    ESBAimDirection_MAX = 6,
};

enum class ESBAkEventLOD {
    LOD_Default = 0,
    LOD_1 = 1,
    LOD_2 = 2,
    LOD_3 = 3,
    LOD_4 = 4,
    LOD_5 = 5,
    LOD_6 = 6,
    LOD_7 = 7,
    LOD_8 = 8,
    LOD_9 = 9,
    LOD_Infinity = 10,
    LOD_MAX = 11,
};

enum class ESBAkEventRTPCType {
    None = 0,
    Chara_Height = 1,
    Water_Depth = 2,
    Player_SkillPlayRate = 3,
    ESBAkEventRTPCType_MAX = 4,
};

enum class ESBAkEventSwitchType {
    None = 0,
    Character_FloorType = 1,
    Character_Cloth = 2,
    Character_AttackElement = 3,
    Player_Class = 4,
    Player_Chair = 5,
    Player_Gather = 6,
    Player_ClimbSurface = 7,
    Player_Controlled = 8,
    Player_Fevertime = 9,
    Enemy_Type = 10,
    Enemy_Voice = 11,
    Enemy_Magic = 12,
    Mount_Type = 13,
    ESBAkEventSwitchType_MAX = 14,
};

enum class ESBAlertHateAlertStatus {
    Hide = 0,
    EnemyTarget = 1,
    FindByEnemy = 2,
    IsTrainingBattleState = 3,
    MAX = 4,
};

enum class ESBAmbientAkEventShape {
    Point = 0,
    Box = 1,
    Sphere = 2,
    ESBAmbientAkEventShape_MAX = 3,
};

enum class ESBAnimNotifyPlayType {
    None = 0,
    Normal = 1,
    Berserker_BrutalBlow = 2,
    ESBAnimNotifyPlayType_MAX = 3,
};

enum class ESBAppearEffectType {
    None = 0,
    Warp = 1,
    LocalWarp = 2,
    Respawn = 3,
    EngramCannon = 4,
    ESBAppearEffectType_MAX = 5,
};

enum class ESBArenaBGMType {
    None = 0,
    InWaitingRoom = 1,
    PreStart = 2,
    Battle = 3,
    PreBattleEnd = 4,
    Result = 5,
    ESBArenaBGMType_MAX = 6,
};

enum class ESBArrayLogicalOperator {
    None = 0,
    AND = 1,
    OR = 2,
    XOR = 3,
    ESBArrayLogicalOperator_MAX = 4,
};

enum class ESBAttackAttribute {
    ThroughInvincibleLevel1 = 0,
    ESBAttackAttribute_MAX = 1,
};

enum class ESBAttackDirectionOrigin {
    None = 0,
    Collision = 1,
    Owner = 2,
    Instigator = 3,
    ESBAttackDirectionOrigin_MAX = 4,
};

enum class ESBAttackDirectionType {
    None = 0,
    Forward = 1,
    OtherCollision = 2,
    OtherActor = 3,
    Velocity = 4,
    ESBAttackDirectionType_MAX = 5,
};

enum class ESBAttackMoveDestinationHeight {
    None = 0,
    OnStraightLine = 1,
    AttackerHeight = 2,
    TargetHeight = 3,
    TargetGround = 4,
    ESBAttackMoveDestinationHeight_MAX = 5,
};

enum class ESBAttackParam {
    None = 0,
    Common_StaminaRecovery = 1,
    Common_ShieldRecovery = 2,
    Rebellion_RageUp = 3,
    ESBAttackParam_MAX = 4,
};

enum class ESBAttackThroughType {
    None = 0,
    UnBlockable = 1,
    AbsoluteDamage = 2,
    Through = 3,
    ESBAttackThroughType_MAX = 4,
};

enum ESBAttackType {
    Attack_Light = 0,
    Attack_LightSpecial = 1,
    Attack_High = 2,
    Attack_HighSpecial = 3,
    Attack_Num = 4,
    Attack_MAX = 5,
};

enum class ESBAttribute {
    None = 0,
    Physics = 1,
    Earth = 2,
    Fire = 3,
    Ice = 4,
    Thunder = 5,
    Light = 6,
    Darkness = 7,
    Max = 8,
    Heal = 9,
    Buff = 10,
    Debuff = 11,
    Stun = 12,
    Sleep = 13,
    Poison = 14,
    TargetFixed = 15,
    Fear = 16,
    Blind = 17,
    Restraint = 18,
    Paralysis = 19,
    Nappo = 20,
    Drain = 21,
    GlitterMode = 22,
    Begin = 2,
    End = 7,
};

enum class ESBAutoDeliveryQuestReloadType {
    Point = 0,
    Pay = 1,
    ESBAutoDeliveryQuestReloadType_MAX = 2,
};

enum class ESBAutoDeliveryQuestUpdateStatus {
    Idle = 0,
    Requested = 1,
    Updated = 2,
    ESBAutoDeliveryQuestUpdateStatus_MAX = 3,
};

enum class ESBAutoDeliveryQuestUpdateType {
    Reload = 0,
    Clear = 1,
    Add = 2,
    DalyWeeklyEnd = 3,
    SeasonStart = 4,
    SeasonEnd = 5,
    Update = 6,
    ESBAutoDeliveryQuestUpdateType_MAX = 7,
};

enum class ESBAutoDeliveryRewardStatus {
    None = 0,
    Mail = 1,
    Exp = 2,
    MailExp = 3,
    ESBAutoDeliveryRewardStatus_MAX = 4,
};

enum class ESBAutoMessageTarget {
    Party = 0,
    All = 1,
    ESBAutoMessageTarget_MAX = 2,
};

namespace ESBAwardSortType {
    enum Type {
        Default_Asc = 0,
        Default_Desc = 1,
        Default_MAX = 2,
    };
}

enum class ESBBDFObjectDestroyedComparisonOperator {
    Equal = 0,
    OrMore = 1,
    OrLess = 2,
    ESBBDFObjectDestroyedComparisonOperator_MAX = 3,
};

enum class ESBBDFObjectManagerState {
    None = 0,
    BeginDeploy = 1,
    EndDeploy = 2,
    BeginCollect = 3,
    OnInhaled = 4,
    EndCollect = 5,
    ESBBDFObjectManagerState_MAX = 6,
};

enum class ESBBDFObjectType {
    Default = 0,
    RedBlack = 1,
    ESBBDFObjectType_MAX = 2,
};

enum class ESBBGMMapGameMode {
    None = 0,
    DungeonNormal = 1,
    DungeonScenario = 2,
    InstanceArea = 3,
    BattleArena = 4,
    PublicDungeon = 5,
    DungeonTimeAttack = 6,
    DungeonScoreAttack = 7,
    Survival = 8,
    DxBattle = 9,
    RankUpExam = 10,
    ESBBGMMapGameMode_MAX = 11,
};

enum class ESBBTComparison {
    Equal = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanEqual = 3,
    GreaterThan = 4,
    GreaterThanEqual = 5,
    ESBBTComparison_MAX = 6,
};

enum class ESBBanBasisType {
    None = 0,
    Investigation = 1,
    Punishment = 2,
    ESBBanBasisType_MAX = 3,
};

enum class ESBBanType {
    BAN_TYPE_NONE = 0,
    BAN_TYPE_CHAT = 1,
    BAN_TYPE_LOGIN = 2,
    BAN_TYPE_MAX = 3,
};

enum class ESBBaseStatusBoostType {
    HP = 0,
    ST = 1,
    STR = 2,
    VIT = 3,
    DEX = 4,
    INT = 5,
    MND = 6,
    Attack = 7,
    Defence = 8,
    Recuperative = 9,
    CriticalHitRate = 10,
    CriticalHitPower = 11,
    FireResist = 12,
    IceResist = 13,
    ThunderResist = 14,
    EarthResist = 15,
    LightResist = 16,
    DarknessResist = 17,
    FireAttack = 18,
    IceAttack = 19,
    ThunderAttack = 20,
    EarthAttack = 21,
    LightAttack = 22,
    DarknessAttack = 23,
    None = 24,
    ESBBaseStatusBoostType_MAX = 25,
};

enum class ESBBattleBGMType {
    None = 0,
    Zako = 1,
    MiddleBoss = 2,
    LargeBoss = 3,
    RaidBattleA = 4,
    RaidBattleSandwormA = 5,
    ArenaZako = 6,
    ArenaBoss = 7,
    Named = 8,
    UniqueBoss = 9,
    MapBoss = 10,
    ESBBattleBGMType_MAX = 11,
};

enum class ESBBattleDebugParamVariableType {
    Invalid = 0,
    Bool = 1,
    Float = 2,
    Int32 = 3,
    ESBBattleDebugParamVariableType_MAX = 4,
};

enum class ESBBattleEffectVisibleCategory {
    MyBattleVfx = 0,
    PartyMemberBattleVfx = 1,
    OtherMemberBattleVfx = 2,
    ActiveEnemyBattleVfx = 3,
    PassiveEnemyBattleVfx = 4,
    Max = 5,
};

enum class ESBBattleEffectVisibleType {
    Category = 0,
    AttackDirectingVfx = 1,
    AreaAttackVfx = 2,
    AreaHealVfx = 3,
    RangeAttackVfx = 4,
    BattleImagineVfx = 5,
    ULTVfx = 6,
    Max = 7,
};

enum class ESBBattleEffective {
    None = 0,
    Dummy = 1,
    RecoveryHPUp = 2,
    HPHeal = 3,
    DotDamage = 4,
    DotHeal = 5,
    Regenerate = 6,
    HPHealBelowHPRate = 7,
    ProjectileOnTimes = 8,
    Invincible = 9,
    Paralyze = 10,
    SuperArmor = 11,
    Stun = 12,
    Freeze = 13,
    Sleep = 14,
    Fear = 15,
    Dark = 16,
    Restraint = 17,
    RecoveryCoolTime = 18,
    MoveSpeedUp = 19,
    MoveSpeedDown = 20,
    SendStatusWhenBackAttack = 21,
    SendStatusWhenAttack = 22,
    DrainByAttackScale = 23,
    PointGravity = 24,
    HealStaminaWhenAttackHit = 25,
    RecoverAttackerWhenRecieveDamage = 26,
    GuardShieldDamageRate = 27,
    GuardSpecialGaugeRate = 28,
    GuardReduceSkillRecastTime = 29,
    GuardReduceSpecialSkillRecastTime = 30,
    AllyAttack_AttackScale = 31,
    CurableByInteraction = 32,
    StatusAilmentHP = 33,
    ElementStatusReinforce_Earth = 34,
    ElementStatusReinforce_Fire = 35,
    ElementStatusReinforce_Ice = 36,
    ElementStatusReinforce_Thunder = 37,
    ElementStatusReinforce_Light = 38,
    ElementStatusReinforce_Darkness = 39,
    ElementAccumulationRate = 40,
    ElementAccumulationTacticalSkillID = 41,
    ElementAccumulationReset = 42,
    BaseStatusBoost = 43,
    BaseStatusRateBoost = 44,
    CharacterStatusBoost = 45,
    StaminaRecovery = 46,
    Poison = 47,
    GiveDamage = 48,
    SkillActionGiveDamage = 49,
    ReceiveDamage = 50,
    BattleImagineGiveDamage = 51,
    DamageAttackTypeGiveDamage = 52,
    DamageAttackTypeReceiveDamage = 53,
    ElementReceiveDamage = 54,
    BattleImagineElementReceiveDamage = 55,
    RaceGiveDamage = 56,
    AttributeGiveDamage = 57,
    EnemyIDGiveDamage = 58,
    DungeonIDGiveDamage = 59,
    TacticalSkillIDGiveDamage = 60,
    SkillCoolTime = 61,
    TacticalSkillIDSkillCoolTime = 62,
    AllSkillCoolTime = 63,
    BattleImagineCoolTime = 64,
    SuccessRateBadCondition = 65,
    ReduceStaminaByAll = 66,
    ReduceStaminaByAction = 67,
    SkillButtonChargeTime = 68,
    OnlyPlayerStatus = 69,
    AllyAttack_Element = 70,
    ElementStatusReinforce = 71,
    DotMPRateHeal = 72,
    SpecialGaugeCharge = 73,
    FixTarget = 74,
    SendSelfStatusWhenAttack = 75,
    ForceCriticalWhenAttack = 76,
    InvalidAttackWhenReceiveDamage = 77,
    LancerMark = 78,
    StatusRecovery = 79,
    Resurrection = 80,
    InvalidStatus = 81,
    ResistBadCondition = 82,
    RecoveryShieldDurability = 83,
    Taunted = 84,
    HateCalcMagnification = 85,
    ExtendNegativeStatus = 86,
    FixHate = 87,
    GutsSelfDamage = 88,
    GutsOtherDamage = 89,
    HPLoss = 90,
    OnlyEnemyStatus = 91,
    FlashStun = 92,
    Num = 93,
    ESBBattleEffective_MAX = 94,
};

enum class ESBBattleEffectiveFeel {
    Positive = 0,
    Negative = 1,
    ESBBattleEffectiveFeel_MAX = 2,
};

enum class ESBBattleEffectiveGroup {
    None = 0,
    dum1 = 1,
    dum2 = 2,
    dum3 = 3,
    dum4 = 4,
    dum5 = 5,
    dum6 = 6,
    dum7 = 7,
    ElementResistDown = 8,
    GraceofForest = 9,
    GlitterGaugeBuff = 10,
    dum11 = 11,
    LancerMark = 12,
    PowerReload = 13,
    StoneBody = 14,
    HealBullet = 15,
    WeaponPerk = 16,
    System = 17,
    Fire = 18,
    Ice = 19,
    Earth = 20,
    dum21 = 21,
    dum22 = 22,
    Thunder = 23,
    Light = 24,
    Light_HPRegen = 25,
    Darkness = 26,
    Paralysis = 27,
    Sleep = 28,
    Fear = 29,
    FixTarget = 30,
    Blind = 31,
    DotDamageIce = 32,
    dum33 = 33,
    DotDamagePoison = 34,
    NoBattleHeal = 35,
    Drain = 36,
    Transform = 37,
    Frailness = 38,
    Stun = 39,
    Restraint = 40,
    ExtendNegativeStatus = 41,
    StaminaZero = 42,
    CannotSkill = 43,
    TakeDrain = 44,
    CannotItem = 45,
    dum46 = 46,
    StunNoAccumulation = 47,
    HPLoss = 48,
    dum49 = 49,
    RecoveryHPBelowHPRate = 50,
    LancerMarkFinish = 51,
    FlashStun = 52,
    SandArea = 53,
    Max = 54,
};

enum class ESBBattleLogType {
    Kill = 0,
    TakeDamage = 1,
    GiveDamage = 2,
    HealHP = 3,
    HealST = 4,
    UseSkill = 5,
    UseImagine = 6,
    UseSpecial = 7,
    Death = 8,
    StatusOff = 9,
    TakeWeaponExp = 10,
    TakeImagineExp = 11,
    ChainKill = 12,
    PlayerDeath = 13,
    EnemyDeath = 14,
    TakePlayerExp = 15,
    LevelUpPlayer = 16,
    GetBootyItem = 17,
    GetMoney = 18,
    DefeatEnemyExp = 19,
    GetEventToken = 20,
    MissionBag = 21,
    GetLiquidMemory = 22,
    GetAdventureBoard = 23,
    BattleDamage1 = 24,
    BattleDamage2 = 25,
    BattleDamage3 = 26,
    BattleDamage4 = 27,
    BattleDamageBonus1 = 28,
    BattleDamageBonus2 = 29,
    BattleDamageBonus3 = 30,
    BattleDamageBonus4 = 31,
    DefeatEnemy = 32,
    ESBBattleLogType_MAX = 33,
};

enum class ESBBattleRule {
    None = 0,
    InstanceArea = 1,
    DungeonNormal = 2,
    DungeonScenario = 3,
    DungeonTimeAttack = 4,
    DungeonScoreAttack = 5,
    BattleArena = 6,
    Survival = 7,
    TowerDefense = 8,
    Max = 9,
};

enum class ESBBattleScoreSettingType {
    TOTAL = 0,
    CLASS_LEVEL = 1,
    WEAPON_LEVEL = 2,
    INNER_IMAGINE = 3,
    BATTLE_IMAGINE = 4,
    SKILL = 5,
    StackB = 6,
    NUM = 7,
    ESBBattleScoreSettingType_MAX = 8,
};

enum class ESBBattleStatusEffectTiming {
    In = 0,
    Override = 1,
    InOrOverride = 2,
    Out = 3,
    ESBBattleStatusEffectTiming_MAX = 4,
};

enum class ESBBattleStatusMaterialParam {
    FixValue = 0,
    ESBBattleStatusMaterialParam_MAX = 1,
};

enum class ESBBattleStatusParamStoreType {
    Equip = 0,
    NoBilling = 1,
    Total = 2,
    ESBBattleStatusParamStoreType_MAX = 3,
};

enum class ESBBattleStatusResistType {
    None = 0,
    Stun = 1,
    Sleep = 2,
    Poison = 3,
    FixTarget = 4,
    Fear = 5,
    Dark = 6,
    Restraint = 7,
    Paralyze = 8,
    CannotSkill = 9,
    StaminaZero = 10,
    CannotItem = 11,
    Nappo = 12,
    RecoverAttackerWhenRecieveDamage = 13,
    GiveDamageDown = 14,
    ReceiveDamageUp = 15,
    ChargeSpeedDown = 16,
    IntervalSpeedDown = 17,
    MoveSpeedDown = 18,
    StaminaRecoveryDown = 19,
    FlashStun = 20,
    Max = 21,
};

enum class ESBBerserkerConsumeComboTiming {
    None = 0,
    StartSkill = 1,
    CastSkill = 2,
    ESBBerserkerConsumeComboTiming_MAX = 3,
};

enum class ESBBhtState {
    DoorClose = 0,
    DoorOpen = 1,
    CoolTime = 2,
    DoorCloseWait = 3,
    ESBBhtState_MAX = 4,
};

enum class ESBBoneScaleSliderIndex {
    Height = 0,
    Wight = 1,
    Bust = 2,
    Max = 3,
};

enum class ESBBookMarkerSlot {
    Marker1 = 0,
    Marker2 = 1,
    Marker3 = 2,
    Marker4 = 3,
    Marker5 = 4,
    Marker6 = 5,
    Marker7 = 6,
    Marker8 = 7,
    Marker9 = 8,
    Marker10 = 9,
    Marker11 = 10,
    Marker12 = 11,
    Marker13 = 12,
    Marker14 = 13,
    Marker15 = 14,
    Marker16 = 15,
    Marker17 = 16,
    Marker18 = 17,
    Marker19 = 18,
    Marker20 = 19,
    Marker21 = 20,
    Marker22 = 21,
    Marker23 = 22,
    Marker24 = 23,
    ESBBookMarkerSlot_MAX = 24,
};

enum class ESBBossBGMEventSettingType {
    None = 0,
    Type = 1,
    Unique = 2,
    ESBBossBGMEventSettingType_MAX = 3,
};

enum class ESBBossBGMSettingType {
    RemainingHP = 0,
    ESBBossBGMSettingType_MAX = 1,
};

enum class ESBBuddyIconType {
    Normal = 0,
    Clip = 1,
    Dead = 2,
    Nonactive = 4,
    Max = 5,
};

enum class ESBBuddyType {
    None = 0,
    BuddyType1 = 1,
    BuddyType2 = 2,
    BuddyType3 = 3,
    BuddyType4 = 4,
    BuddyType5 = 5,
    BuddyType6 = 6,
    BuddyType7 = 7,
    BuddyType8 = 8,
    BuddyType151 = 151,
    BuddyType152 = 152,
    BuddyType153 = 153,
    BuddyType154 = 154,
    BuddyType155 = 155,
    BuddyType156 = 156,
    BuddyType201 = 201,
    BuddyType202 = 202,
    BuddyType203 = 203,
    BuddyType204 = 204,
    BuddyType205 = 205,
    BuddyType206 = 206,
    BuddyType207 = 207,
    Max = 208,
};

enum class ESBCameraShakeControlType {
    Default = 0,
    EngramCannon = 1,
    ESBCameraShakeControlType_MAX = 2,
};

enum class ESBCameraType {
    Normal = 0,
    LockOn = 1,
    Mount = 2,
    Merker = 3,
    ESBCameraType_MAX = 4,
};

enum class ESBCannotInputType {
    AssetLoading = 0,
    BeforeKeySetup = 1,
    DisappearEffect = 2,
    WarpAroundEffect = 3,
    PerformanceCamera = 4,
    EngramCannon = 5,
    ShortcutRing = 6,
    MapEditWindow = 7,
    DebugMove = 8,
    MAX = 9,
};

enum class ESBCharaCreateColorHue {
    Red = 0,
    YellowishRed = 1,
    ReddishOrange = 2,
    YellowishOrange = 3,
    Yellow = 4,
    Blond = 5,
    YellowGreen = 6,
    Green = 7,
    BlueGreen = 8,
    Blue = 9,
    Violet = 10,
    Purple = 11,
    RedPurple = 12,
    PurplishRed = 13,
    Achromatic = 14,
    ESBCharaCreateColorHue_MAX = 15,
};

enum class ESBCharaCreateColorTable {
    Costume = 0,
    Skin = 1,
    Hair = 2,
    Eye = 3,
    Scar = 4,
    ESBCharaCreateColorTable_MAX = 5,
};

enum class ESBCharaCreateMole {
    None = 0,
    MoleNum = 8,
    MoleNumOnOneSide = 4,
    ESBCharaCreateMole_MAX = 9,
};

enum class ESBCharaEquipType {
    Weapon = 0,
    Costume_Head = 1,
    Costume_Body = 2,
    Costume_Hand = 3,
    Costume_Leg = 4,
    Costume_Shoes = 5,
    Costume_Accessory1 = 6,
    Costume_Accessory2 = 7,
    Costume_Accessory3 = 8,
    Costume_Accessory10 = 9,
    Imagine_Active1 = 10,
    Imagine_Active2 = 11,
    Imagine_Passive1 = 12,
    Imagine_Passive2 = 13,
    Imagine_Passive3 = 14,
    Imagine_Passive4 = 15,
    Imagine_Passive5 = 16,
    Imagine_Mount = 17,
    Costume_Accessory4 = 18,
    Costume_Accessory5 = 19,
    Costume_Accessory6 = 20,
    Costume_Accessory7 = 21,
    Costume_Accessory8 = 22,
    Costume_Accessory9 = 23,
    Costume_Underwear = 24,
    Max = 25,
};

enum class ESBCharacterAdjustRootMotion_Facing_RotationType {
    MoveDirection = 0,
    TargetDirection = 1,
    ESBCharacterAdjustRootMotion_Facing_MAX = 2,
};

enum class ESBCharacterAnimationSamplingResultActionDerivedType {
    Default = 0,
    MoveSpeed = 1,
    AnyCommand = 2,
    ESBCharacterAnimationSamplingResultActionDerivedType_MAX = 3,
};

enum class ESBCharacterBoneDisplay {
    None = 0,
    AllDisplay = 1,
    SelectDisplay = 2,
    Num = 3,
    ESBCharacterBoneDisplay_MAX = 4,
};

enum class ESBCharacterCardList {
    None = 0,
    CardNumMax = 6,
    ESBCharacterCardList_MAX = 7,
};

enum class ESBCharacterElementalBurstFlag {
    None = 0,
    Earth = 1,
    Fire = 2,
    Ice = 4,
    Thunder = 8,
    Light = 16,
    Darkness = 32,
    ESBCharacterElementalBurstFlag_MAX = 33,
};

enum ESBCharacterEquipsOrSkillsOrCostumesChangeableRetValues {
    Changeable = 0,
    UnChangeable_IsInMission = 1,
    UnChangeable_IsInBattleMode = 2,
    UnChangeable_IsMounting = 3,
    ESBCharacterEquipsOrSkillsOrCostumesChangeableRetValues_MAX = 4,
};

enum class ESBCharacterGender {
    Male = 0,
    Female = 1,
    Default = 0,
    ESBCharacterGender_MAX = 2,
};

enum class ESBCharacterStepListType {
    Quest = 0,
    WishList = 1,
    AdventureBoard = 2,
    ESBCharacterStepListType_MAX = 3,
};

enum class ESBCharactersLogTypes {
    Item = 0,
    Weapon = 1,
    Npc = 2,
    Enemy = 3,
    Action = 4,
    TutorialHelp = 5,
    Craft = 6,
    Imagine = 7,
    Map = 8,
    ESBCharactersLogTypes_MAX = 9,
};

enum class ESBChatDetailFilterType {
    None = 0,
    BattleInfo = 1,
    Stamp = 2,
    Gesture = 4,
    SystemMessage = 8,
    ItemGet = 16,
    LevelUp = 32,
    DamageMessage = 64,
    DamageBonus = 128,
    ESBChatDetailFilterType_MAX = 129,
};

enum class ESBChatFilterType {
    None = 0,
    Area = 1,
    Field = 2,
    Party = 4,
    Team = 8,
    Direct = 16,
    SystemLog = 32,
    BattleLog = 64,
    ESBChatFilterType_MAX = 65,
};

enum class ESBChatLogMode {
    AllLog = 0,
    BattleLog = 1,
    Max = 2,
};

enum class ESBChatLogOption {
    None = 0,
    NotifyBlackListed = 1,
    NotifyUnBlackListed = 2,
    BlueColor = 3,
    RedColor = 4,
    LightGreenColor = 5,
    BattleDamageColor = 6,
    ESBChatLogOption_MAX = 7,
};

enum class ESBChatLogTabType {
    MainTab = 0,
    Sub1Tab = 1,
    Sub2Tab = 2,
    ESBChatLogTabType_MAX = 3,
};

enum class ESBChatLogType {
    CloseAreaChat = 0,
    OpenChat = 1,
    PartyChat = 2,
    TeamChat = 3,
    GuildChat = 4,
    DirectMessage = 5,
    SystemLog = 6,
    BattleLog = 7,
    None = 8,
    ESBChatLogType_MAX = 9,
};

namespace ESBChatLogWindowSlot {
    enum Type {
        SLOT_1 = 0,
        SLOT_2 = 1,
        SLOT_3 = 2,
        SLOT_4 = 3,
        SLOT_MAX = 4,
    };
}

enum ESBChatOnlineStatus {
    Status_Offline = 0,
    Status_Mission = 1,
    Status_None = 2,
    Status_Online = 3,
    Status_MAX = 4,
};

enum class ESBChatSendErrorType {
    NoRecipient = 0,
    PrivateOffline = 1,
    PrivateMission = 2,
    ESBChatSendErrorType_MAX = 3,
};

enum class ESBCheatOshiokiType {
    Success = 0,
    NoGuilty = 1,
    Disconnection = 2,
    ESBCheatOshiokiType_MAX = 3,
};

enum class ESBCheerfulItemType {
    InvalidType = 0,
    Firework = 39,
    PartyPopper = 50,
    GlowStickSingle = 54,
    GlowStickMultiple = 55,
    Snowman = 56,
    FlowerShower = 57,
    ESBCheerfulItemType_MAX = 58,
};

enum class ESBCheerfulMoveRestrictMode {
    None = 0,
    CannotMove = 1,
    WalkOnly = 2,
    RunOnly = 3,
    DashOnly = 4,
    WalkAndRun = 5,
    RunAndDash = 6,
    WalkAndDash = 7,
    ESBCheerfulMoveRestrictMode_MAX = 8,
};

enum class ESBCheerfulProcessMode {
    CommonProcess_AttachmentType = 0,
    CommonProcess_OneMotionType = 1,
    ItemSpecificProcess = 2,
    ESBCheerfulProcessMode_MAX = 3,
};

enum class ESBClassRepNodeMapping {
    NotRouted = 0,
    RelevantAllConnections = 1,
    Connection_CityPlayerCharacter = 2,
    Connection_CityPlayerState = 3,
    Connection_CityRepTest = 4,
    Connection_FieldEnemyCharacter = 5,
    Spatialize_Static = 6,
    Spatialize_Dynamic = 7,
    Spatialize_Dormancy = 8,
    ESBClassRepNodeMapping_MAX = 9,
};

enum class ESBClassType {
    None = 0,
    P001 = 1,
    P002 = 2,
    P003 = 3,
    P004 = 4,
    P005 = 5,
    P006 = 6,
    P007 = 7,
    P008 = 8,
    P009 = 9,
    P010 = 10,
    P011 = 11,
    P012 = 12,
    P013 = 13,
    P014 = 14,
    P015 = 15,
    P016 = 16,
    P017 = 17,
    P018 = 18,
    P019 = 19,
    P020 = 20,
    P021 = 21,
    P022 = 22,
    Max = 23,
    AllType = 255,
};

enum class ESBClothSwitchType {
    Cloth = 0,
    Cloth_Under = 1,
    Cloth_Shoes = 2,
    ESBClothSwitchType_MAX = 3,
};

enum class ESBColoringItemIcon {
    None = 0,
    NormalDyeIconNumMax = 12,
    ExtraDyeIconNumMax = 7,
    ESBColoringItemIcon_MAX = 13,
};

enum class ESBColoringItemType {
    NormalDye = 0,
    ToningAgent = 1,
    ExtraDye = 2,
    ESBColoringItemType_MAX = 3,
};

enum class ESBCommandMenuType {
    Unknown = 0,
    MyCharacter = 1,
    Inventory = 2,
    Quest = 3,
    Map = 4,
    Communicate = 5,
    Library = 6,
    SeasonPass = 7,
    Matching = 8,
    Party = 9,
    DungeonParty = 10,
    Option = 11,
    ExitGame = 12,
    CharSelect = 13,
    Guild = 14,
    RmShop = 15,
    Letter = 16,
    ESBCommandMenuType_MAX = 17,
};

enum class ESBCommonFieldBGMType {
    None = 0,
    Shopping = 1,
    Fishing = 2,
    ESBCommonFieldBGMType_MAX = 3,
};

enum class ESBCommunicatePlayerSkillEvent {
    None = 0,
    dummy = 1,
    LargeShield_ShieldCreated_Lv1 = 2,
    LargeShield_ShieldCreated_Lv2 = 3,
    LargeShield_ShieldCreated_Lv3 = 4,
    LargeShield_ShieldDestroyed = 5,
    RegularBuffArrow_ResetGaugeAmount = 6,
    StoneBody_GuardBreak = 7,
    ESBCommunicatePlayerSkillEvent_MAX = 8,
};

enum class ESBCommunicatePlayerSkillFlag {
    None = 0,
    LargeShield_ShieldCreated_Lv1 = 1,
    LargeShield_ShieldCreated_Lv2 = 2,
    LargeShield_ShieldCreated_Lv3 = 3,
    LargeShield_ShieldReleased = 4,
    HatTrick_WeakPointHit = 5,
    LancerMain_ChargeMax = 6,
    LancerMain_Charging = 7,
    ResonanceSpear_SpreadingLancerMark = 8,
    ESBCommunicatePlayerSkillFlag_MAX = 9,
};

enum class ESBCommunicatePlayerSkillParam {
    None = 0,
    dummy = 1,
    RegularBuffArrow_AddGaugeAmount = 2,
    StoneBody_Durability = 3,
    ShieldDash_DamageUpRate = 4,
    ResonanceSpear_SpreadDamageUpRate = 5,
    ChargeSkill_LastCastSkillChargeTime = 6,
    ESBCommunicatePlayerSkillParam_MAX = 7,
};

enum class ESBComparisonOperator {
    OrMore = 0,
    OrLess = 1,
    ESBComparisonOperator_MAX = 2,
};

enum class ESBConditionCheckType {
    None = 0,
    SkillLevel = 1,
    EquippedPassiveSkill = 2,
    PassiveSkillLevel = 3,
    EquippedPassiveSkillLevel = 4,
    LastSetupSkill = 5,
    SkillCastCount = 6,
    LastSkillCastIndex = 7,
    SkillChargeLevel = 8,
    LastCastSkillChargeLevel = 9,
    DodgeSucceeded = 10,
    DodgeSucceededDodgeAttack = 11,
    HasAerialAttackBonus = 12,
    ActiveStatusGroup = 13,
    ActiveStatusFlag = 14,
    ActiveOnlyPlayerStatus = 15,
    ActiveStatusOnTarget = 16,
    ActiveStatusGroupOnTarget = 17,
    ActiveStatusByAttacker = 18,
    ActiveStatusGroupByAttacker = 19,
    SelfNegativeStatus = 20,
    TargetNegativeStatus = 21,
    SelfDeactivatedNegativeStatusTime = 22,
    AnimTag = 23,
    PlayerCharacter = 24,
    PlayerElementType = 25,
    BossEnemyType = 26,
    CanUseShield = 27,
    RemainHitPointRate = 28,
    PlayerNoDamageTimeAtFindByEnemy = 29,
    ImagineArtsKeepPress = 30,
    ImagineArtsStackBNum = 31,
    ProjectileBImaineStackBNumCache = 32,
    LastSetupSkillImaginStackBNum = 33,
    BSK_ComboGaugeAmount = 34,
    MGC_MovingFireBurner = 35,
    SMA_BallShootHitCount = 36,
    SMA_SkillAttackLevel = 37,
    SMA_ConsumedBoostCartridge = 38,
    SMA_LastBallShootHitCountInSkill = 39,
    LAN_AllLancerMark = 40,
    BLS_RegularSkillLastCastGaugeLevel = 41,
    BLS_RegularSkillCurrentGaugeLevel = 42,
    BLS_HatTrickWeakPointHit = 43,
    RBL_ShieldDashElapsedTime = 44,
    LAN_LancerMarkExceptAll = 45,
    LAN_AnyLancerMark = 46,
    LAN_ResonanceSpearSpreading = 47,
    Num = 48,
    ESBConditionCheckType_MAX = 49,
};

enum class ESBConditionalVoicePriority {
    PriorityA = 0,
    PriorityB = 1,
    PriorityC = 2,
    PriorityD = 3,
    PriorityE = 4,
    Max = 5,
};

enum class ESBConditionalVoiceRequestType {
    RandomOne = 0,
    Sequence = 1,
    Max = 2,
};

namespace ESBConfigSaveDataResult {
    enum Type {
        RESULT_SUCCESS = 0,
        RESULT_FAIL = 1,
        RESULT_MAX = 2,
    };
}

namespace ESBConfigWindowType {
    enum Type {
        WINDOWTYPE_FULLSCREEN = 0,
        WINDOWTYPE_WINDOW = 1,
        WINDOWTYPE_WINDOWED_FULLSCREEN = 2,
        WINDOWTYPE_MAX = 3,
    };
}

enum class ESBConnectGameServerFailure {
    None = 0,
    Unknown = 1,
    NotFound = 2,
    ESBConnectGameServerFailure_MAX = 3,
};

enum class ESBConnectWayType {
    ConnectOneRight = 0,
    ConnectOneLeft = 1,
    ConnectOneTop = 2,
    ConnectOneBottom = 3,
    ConnectTwoRightBottom = 4,
    ConnectTwoLeftBottom = 5,
    ConnectTwoRightUp = 6,
    ConnectTwoLeftUp = 7,
    ConnectThreeRightUpBottom = 8,
    ConnectThreeRightLeftBottom = 9,
    ConnectThreeRightLeftUp = 10,
    ConnectThreeLeftUpBottom = 11,
    ConnectThreeFourAll = 12,
    Max = 13,
};

enum class ESBConsentListSortType {
    Sort_Desc = 0,
    Sort_Asc = 1,
    Sort_MAX = 2,
};

enum class ESBContactListSortType {
    Sort_Name = 0,
    Sort_Send = 1,
    Sort_Acce = 2,
    Sort_MAX = 3,
};

enum class ESBContentExitTravelTarget {
    PreviousMap = 0,
    LastTravelCity = 1,
    ESBContentExitTravelTarget_MAX = 2,
};

enum class ESBContentLockType {
    Unknown = 0,
    Warp = 1,
    MyCharacter = 2,
    Inventory = 3,
    Quest = 4,
    Map = 5,
    Library = 6,
    Contents = 7,
    Party = 8,
    Guild = 9,
    Gacha = 10,
    Option = 11,
    Photo = 12,
    Hud = 13,
    Communicate = 14,
    ESBContentLockType_MAX = 15,
};

enum class ESBCostumeMaterial {
    None = 0,
    Naked = 1,
    Robe = 2,
    Robe_Feste = 3,
    Cloth_Thin = 4,
    Cloth_Thick = 5,
    Cloth_Tight = 6,
    Cloth_Jacket = 7,
    Cloth_Jacket_Light_Metal = 8,
    Leather_Plastic = 9,
    Metal = 10,
    Light_Metal = 11,
    Tight_Metal_Light = 12,
    Armor_Metal_Light = 13,
    Armor_Metal_Mid = 14,
    Armor_Metal_Hard = 15,
    Kimono = 16,
    Kimono_Long = 17,
    Sneaker = 18,
    Heel = 19,
    Leather = 20,
    Leather_Light = 21,
    Leather_Heavy = 22,
    Setta = 23,
    Geta = 24,
    INVALID = 25,
    ShadowAvater = 26,
    ESBCostumeMaterial_MAX = 27,
};

enum class ESBCostumeSet {
    Naked = 0,
    Common = 1,
    Giken = 2,
    Hero = 3,
    P016 = 4,
    Wizard = 5,
    P002 = 6,
    P004 = 7,
    Common2 = 8,
    Common3 = 9,
    Common4 = 10,
    Common5 = 11,
    Max = 12,
};

namespace ESBCounterDamageState {
    enum Type {
        None = 0,
        Attack = 1,
        Stun = 2,
        KneelDown = 3,
        Down = 4,
        UpperDown = 5,
        HiUpperDown = 6,
        Max = 7,
    };
}

enum class ESBCouponQuestType {
    Unknown = 0,
    Daily = 1,
    Weekly = 2,
    ESBCouponQuestType_MAX = 3,
};

enum class ESBCraftTokenType {
    INVALID = 0,
    BONUS_RATE_UP = 1,
    ESBCraftTokenType_MAX = 2,
};

enum class ESBCustomHudLayoutSlot {
    HudLayoutSlot_Now = 0,
    HudLayoutSlot_Custom1 = 1,
    HudLayoutSlot_Custom2 = 2,
    HudLayoutSlot_Custom3 = 3,
    HudLayoutSlot_MAX = 4,
};

enum class ESBCustomTextureType {
    None = 0,
    Eyelash = 1,
    Eye = 2,
    HairGradation = 3,
    MAX = 4,
};

enum class ESBDamageAttackType {
    MeleeAttack = 0,
    RangedAttack = 1,
    Max = 2,
};

enum ESBDamageDirection {
    SBDD_Front = 0,
    SBDD_Back = 1,
    SBDD_Left = 2,
    SBDD_Right = 3,
    SBDD_MAX = 4,
};

enum class ESBDamageEventGeneralParam {
    None = 0,
    Berserker_ComboGaugeAmount = 1,
    Smasher_BallShootHitCount = 2,
    ESBDamageEventGeneralParam_MAX = 3,
};

enum class ESBDateTimeFinishedTextTemplate {
    None = 0,
    Shortly = 1,
    MAX = 2,
};

enum class ESBDateTimeTextRemainTimeFlag {
    None = 0,
    LittleTime = 1,
    FinishedTime = 2,
    MAX = 3,
};

enum class ESBDateTimeTextRemainTimespanType {
    Normal = 0,
    Switch = 1,
    Short = 2,
    MAX = 3,
};

enum class ESBDateTimeTextTemplate {
    None = 0,
    DateTime = 1,
    DateTimeWithoutYear = 2,
    Date = 3,
    Timespan = 4,
    RemainTimespan = 5,
    RemainTimespanWithoutTitle = 6,
    PassedTimespan = 7,
    DurationTime = 8,
    MAX = 9,
};

enum class ESBDayTime {
    Morning = 0,
    Noon = 1,
    Evening = 2,
    Night = 3,
    Max = 4,
};

enum class ESBDeathReactionType {
    None = 0,
    Down = 1,
    KnockBack = 2,
    Up = 3,
    ESBDeathReactionType_MAX = 4,
};

enum ESBDebugMenuType {
    SB_DEBUG_MENU_NONE = 0,
    SB_DEBUG_MENU_TOP = 1,
    SB_DEBUG_MENU_COMMAND = 2,
    SB_DEBUG_MENU_PLAYER = 3,
    SB_DEBUG_MENU_PLAYER_BATTLE = 4,
    SB_DEBUG_MENU_ENEMY = 5,
    SB_DEBUG_MENU_MOUNT = 6,
    SB_DEBUG_MENU_NEARBY_CHARACTER = 7,
    SB_DEBUG_MENU_NEARBY_CHARACTER_BATTLE = 8,
    SB_DEBUG_MENU_EFFECT = 9,
    SB_DEBUG_MENU_UI = 10,
    SB_DEBUG_MENU_SCRIPT = 11,
    SB_DEBUG_MENU_CAMERA = 12,
    SB_DEBUG_MENU_RENDER = 13,
    SB_DEBUG_MENU_SOUND = 14,
    SB_DEBUG_MENU_FAST_TRAVEL = 15,
    SB_DEBUG_MENU_QUEST = 16,
    SB_DEBUG_MENU_TIME_SETTING = 17,
    SB_DEBUG_MENU_MAPS = 18,
    SB_DEBUG_MENU_ROUTEGUIDE = 19,
    SB_DEBUG_MENU_INTERRUPT_QUEST = 20,
    SB_DEBUG_MENU_LOAD = 21,
    SB_DEBUG_MENU_SAVE = 22,
    SB_DEBUG_MENU_RESET = 23,
    SB_DEBUG_MENU_CHANGECLASS = 24,
    SB_DEBUG_MENU_PROJECTILE = 25,
    SB_DEBUG_MENU_SEARCHPOINT = 26,
    SB_DEBUG_MENU_SYSYTEM = 27,
    SB_DEBUG_MENU_CHARACREATE = 28,
    SB_DEBUG_MENU_PROCEDUALANIM = 29,
    SB_DEBUG_MENU_FISHING = 30,
    SB_DEBUG_MENU_FOLIAGE = 31,
    SB_DEBUG_MENU_COMMAND_STAT = 32,
    SB_DEBUG_MENU_COMMAND_SHOWDEBUG = 33,
    SB_DEBUG_MENU_COMMON_FUNC_TOP = 34,
    SB_DEBUG_MENU_CHECK_BOX = 35,
    SB_DEBUG_MENU_FLOAT = 36,
    SB_DEBUG_MENU_INT32 = 37,
    SB_DEBUG_MENU_CONSOLE_COMMAND = 38,
    SB_DEBUG_MENU_STRING = 39,
    SB_DEBUG_MENU_COMBO_BOX = 40,
    SB_DEBUG_MENU_BUTTON = 41,
    SB_DEBUG_MENU_LIST = 42,
    SB_DEBUG_MENU_CHILD = 43,
    SB_DEBUG_MENU_TEXT = 44,
    SB_DEBUG_MENU_SPECIFIC_FUNC_TOP = 45,
    SB_DEBUG_MENU_CAMERA_DISP_PARAM = 46,
    SB_DEBUG_MENU_EFFECT_VISIBLE_PARAM = 47,
    SB_DEBUG_MENU_EFFECT_TRANSPARENT_PARAM = 48,
    SB_DEBUG_MENU_EFFECT_DISP_PARAM = 49,
    SB_DEBUG_MENU_ACCEPTED_QUEST_ACTION = 50,
    SB_DEBUG_MENU_MAX = 51,
};

enum class ESBDebugPostDataType {
    String = 0,
    Integer = 1,
    Number = 2,
    Boolean = 3,
    ArrayStart = 4,
    ArrayEnd = 5,
    ObjectStart = 6,
    ObjectEnd = 7,
    ESBDebugPostDataType_MAX = 8,
};

enum class ESBDecorationListSortType {
    Sort_Desc = 0,
    Sort_Asc = 1,
    Sort_MAX = 2,
};

enum class ESBDemoMediaType {
    Script = 0,
    Movie = 1,
    ESBDemoMediaType_MAX = 2,
};

enum class ESBDemoType {
    Demo_None = 0,
    Demo_Main = 1,
    Demo_Extra = 2,
    Demo_Sub = 3,
    Demo_Class = 4,
    Demo_Event = 5,
    Demo_MAX = 6,
};

enum class ESBDemoVisibleCharacterType {
    None = 0,
    VisibleEnemy = 1,
    VisibleNPC_ExceptStoryNPC = 2,
    ESBDemoVisibleCharacterType_MAX = 3,
};

enum class ESBDestrcutibleDamageType {
    All = 0,
    PlayerOnly = 1,
    EnemyOnly = 2,
    ESBDestrcutibleDamageType_MAX = 3,
};

enum class ESBDestrcutibleType {
    Normal = 0,
    EnemyGate = 1,
    EnemyBuffer = 2,
    TypeMax = 3,
    ESBDestrcutibleType_MAX = 4,
};

enum class ESBDisappearEffectType {
    None = 0,
    Warp = 1,
    Death = 2,
    FallDeath = 3,
    EngramCannon = 4,
    ESBDisappearEffectType_MAX = 5,
};

enum class ESBDisplayTextIdFlag {
    None = 0,
    Disable = 0,
    Enable = 1,
    Table = 2,
    TextId = 4,
    Type = 8,
    OptionMask = 14,
    ESBDisplayTextIdFlag_MAX = 15,
};

enum class ESBDroppingTextOption {
    None = 0,
    BlueColor = 1,
    RedColor = 2,
    ESBDroppingTextOption_MAX = 3,
};

enum class ESBDungeonBGMType {
    None = 0,
    Default = 1,
    Mount = 2,
    Battle = 3,
    InterruptQuest = 4,
    Clear = 5,
    ESBDungeonBGMType_MAX = 6,
};

enum class ESBDungeonBossBattleState {
    None = 0,
    Standby = 1,
    Battle = 2,
    Max = 3,
};

enum class ESBDungeonCameraDemoStatus {
    Ready = 0,
    Working = 1,
    End = 2,
    ESBDungeonCameraDemoStatus_MAX = 3,
};

enum class ESBDungeonClearCondition {
    PostLoad = 0,
    GameStart = 1,
    PreResult = 2,
    PostResult = 3,
    PreExit = 4,
    EnemySpawned = 5,
    EnemyDead = 6,
    EnemyDestroy = 7,
    EnemyWaveFinished = 8,
    OneEnemyDead = 9,
    OverlapSomePlayer = 10,
    OverlapAllPlayers = 11,
    InteractionSw = 12,
    BattleAreaStart = 13,
    BattleAreaClear = 14,
    Destructible = 15,
    AllPlayersScriptEnd = 16,
    ScriptCheck = 17,
    ESBDungeonClearCondition_MAX = 18,
};

enum class ESBDungeonCompleteType {
    Unopened = 0,
    Uncompleted = 1,
    Completed = 2,
    Unknown = 3,
    ESBDungeonCompleteType_MAX = 4,
};

enum class ESBDungeonEntryConditionAppearanceType {
    Unlimited = 0,
    Male = 1,
    Female = 2,
    Unisex = 3,
    ESBDungeonEntryConditionAppearanceType_MAX = 4,
};

enum class ESBDungeonEntryConditionElementType {
    None = 0,
    Physics = 1,
    Earth = 2,
    Fire = 3,
    Ice = 4,
    Thunder = 5,
    Light = 6,
    Darkness = 7,
    ESBDungeonEntryConditionElementType_MAX = 8,
};

enum class ESBDungeonEntryConditionItemType {
    Unknown = 0,
    Weapon = 2,
    Costume = 3,
    BattleImagine = 5,
    MountImagine = 6,
    ESBDungeonEntryConditionItemType_MAX = 7,
};

enum class ESBDungeonEvaluation {
    None = 0,
    Gold = 1,
    Silver = 2,
    Bronze = 3,
    Tower_0f = 100,
    Tower_35f = 65,
    Tower_30f = 70,
    Tower_20f = 80,
    Tower_10f = 90,
    Max = 91,
};

enum class ESBDungeonLaterJoinType {
    No = 0,
    FriendOnly = 1,
    ESBDungeonLaterJoinType_MAX = 2,
};

enum class ESBDungeonMatchMenuRegisterType {
    None = 0,
    WhenOpend = 1,
    WhenCompleted = 2,
    ESBDungeonMatchMenuRegisterType_MAX = 3,
};

enum class ESBDungeonMvpType {
    Attack = 0,
    Support = 1,
    EscortTime = 2,
    EscortDistance = 3,
    Max = 4,
};

enum class ESBDungeonNormalProgress {
    WaitJoin = 0,
    WaitStart = 1,
    Playing = 2,
    Cleared = 3,
    WaitExit = 4,
    GameOver = 5,
    ESBDungeonNormalProgress_MAX = 6,
};

enum class ESBDungeonProcessStatus {
    Wait = 0,
    Ready = 1,
    Cleared = 2,
    Failed = 3,
    None = 255,
    ESBDungeonProcessStatus_MAX = 256,
};

enum class ESBDungeonResultCause {
    Clear = 0,
    TimeOver = 1,
    Retire = 2,
    Failure = 3,
    ESBDungeonResultCause_MAX = 4,
};

enum class ESBDungeonScriptType {
    None = 0,
    Intro = 1,
    BossPre = 2,
    ResultPre = 3,
    ResultPost = 4,
    Max = 5,
};

enum class ESBDxBattleAwardFlag {
    DX_BATTLE_AWARDED_FLAG_NONE = 0,
    DX_BATTLE_AWARDED_FLAG_DAMAGE_ALL = 1,
    DX_BATTLE_AWARDED_FLAG_DAMAGE_SPECIAL = 2,
    DX_BATTLE_AWARDED_FLAG_RESUSCITATION = 4,
    DX_BATTLE_AWARDED_FLAG_GET_HOSTILITY_TIME_BY_NORMAL = 8,
    DX_BATTLE_AWARDED_FLAG_GET_HOSTILITY_TIME_BY_BOSS = 16,
    DX_BATTLE_AWARDED_FLAG_BIT_ALL = 255,
    DX_BATTLE_AWARDED_FLAG_MAX = 256,
};

enum class ESBDxBattleCoefficientScoreType {
    DX_BATTLE_COEFFICIENT_SCORE_TYPE_PERCENTAGE_NUM = 0,
    DX_BATTLE_COEFFICIENT_SCORE_TYPE_MULTIPLIER_NUM = 1,
    DX_BATTLE_COEFFICIENT_SCORE_TYPE_MAX = 2,
};

enum class ESBDxBattleContributonScoreType {
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_DAMAGE_TO_MINOR_ENEMIES_NUM = 0,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_DAMAGE_TO_BOSSES_NUM = 1,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_DAMAGE_TO_SPECIAL_ATTACK_SOLDIERS_NUM = 2,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_DAMAGE_TO_GATES_NUM = 3,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_DAMAGE_TO_DEVICES_NUM = 4,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_REVIVALS_SUCCESSFULLY_CASTED_NUM = 5,
    DX_BATTLE_CONTRIBUTON_SCORE_TYPE_MAX = 6,
};

enum class ESBDxBattleGameResult {
    Unknown = 0,
    Sucs = 1,
    Failed = 2,
    ESBDxBattleGameResult_MAX = 3,
};

enum class ESBDxBattleGameStatus {
    Idle = 0,
    Loading = 1,
    Loaded = 2,
    Running = 3,
    Done = 4,
    ESBDxBattleGameStatus_MAX = 5,
};

enum class ESBDxBattleScore {
    DX_BATTLE_SCORE_ENEMY_DAMAGE = 0,
    DX_BATTLE_SCORE_BOSS_DAMAGE = 1,
    DX_BATTLE_SCORE_INSTANTANEOUS_DAMAGE = 2,
    DX_BATTLE_SCORE_RESUSCITATION = 3,
    DX_BATTLE_SCORE_SPECIALATTACK_TOTALDAMAGE = 4,
    DX_BATTLE_SCORE_ENEMYGATE_TOTALDAMAGE = 5,
    DX_BATTLE_SCORE_ENEMYBUFFER_DAMAGE = 6,
    DX_BATTLE_SCORE_FACILITY_DAMAGE = 7,
    DX_BATTLE_SCORE_TAKE_HITS = 8,
    DX_BATTLE_SCORE_GET_HOSTILITY_TIME_BY_NORMAL = 9,
    DX_BATTLE_SCORE_GET_HOSTILITY_TIME_BY_BOSS = 10,
    DX_BATTLE_SCORE_ALL_CONTRIBUTION_1ST = 11,
    DX_BATTLE_SCORE_CLASS_CONTRIBUTION_1ST = 12,
    DX_BATTLE_SCORE_MAX = 13,
};

enum class ESBDxBattleWholeScore {
    DX_BATTLE_WHOLE_SCORE_ENEMYGATE_DESTRUCT_NUM = 0,
    DX_BATTLE_WHOLE_SCORE_ENEMYBUFFER_DESTRUCT_NUM = 1,
    DX_BATTLE_WHOLE_SCORE_MAX = 2,
};

enum class ESBEColorOverride {
    None = 0,
    Heal = 1,
    Buff = 2,
    Debuff = 3,
    Stun = 4,
    Sleep = 5,
    Poison = 6,
    TargetFixed = 7,
    Fear = 8,
    Blind = 9,
    Restraint = 10,
    Paralysis = 11,
    Nappo = 12,
    Drain = 13,
    GlitterMode = 14,
    ESBEColorOverride_MAX = 15,
};

enum class ESBEffectCullingType {
    Default = 0,
    Footprint = 1,
    ESBEffectCullingType_MAX = 2,
};

enum class ESBEffectShaderParamTarget {
    Actor = 0,
    Weapon_R = 1,
    Weapon_L = 2,
    Inventory_0 = 3,
    Inventory_1 = 4,
    ESBEffectShaderParamTarget_MAX = 5,
};

enum class ESBEffectVisibleSourceType {
    None = 0,
    Player_Self = 1,
    Player_Party = 2,
    Player_Other = 3,
    ESBEffectVisibleSourceType_MAX = 4,
};

enum class ESBEffectVisibleType {
    Default = 0,
    Battle_Production = 1,
    Battle_StatusAliment = 2,
    Battle_MarkerAttack = 3,
    Battle_MarkerHeal = 4,
    Battle_Projectile = 5,
    Battle_Imagine = 6,
    Battle_ULTProduction = 7,
    Battle_ULTProjectile = 8,
    Battle_Weapon = 9,
    Battle_GimmickProjectile = 10,
    UI = 11,
    MAX = 12,
};

enum class ESBEffectiveStatusDeactiveReason {
    None = 0,
    Condition_OK = 1,
    Condition_NG = 2,
    NoValidAbility = 3,
    GroupTriggerCount = 4,
    ExcludeGroup = 5,
    CuredByInteraction = 6,
    EraseLancerMark = 7,
    EraseDupeItem = 8,
    EraseExtendNegativeStatus = 9,
    EraseByAlternativeAdd = 10,
    DestroyedPlayerInvoker = 11,
    ESBEffectiveStatusDeactiveReason_MAX = 12,
};

enum class ESBEmotionAadditionalInfo {
    None = 0,
    CanSitAction = 1,
    Blank1 = 2,
    Blank2 = 4,
    Blank3 = 8,
    Blank4 = 16,
    Blank5 = 32,
    Blank6 = 64,
    Blank7 = 128,
    ESBEmotionAadditionalInfo_MAX = 129,
};

enum class ESBEnableTarget {
    Enable = 0,
    Disable_Invald = 1,
    Disable_AutoTarget = 2,
    Disable_MultiTarget = 3,
    Disable_LockOn = 4,
    Disable_Self = 5,
    Disable_NonTargetable = 6,
    Disable_Dead = 7,
    Disable_CanAttack = 8,
    Disable_Range = 9,
    Disable_Block = 10,
    Disable_Destructed = 11,
    ESBEnableTarget_MAX = 12,
};

enum class ESBEnemyAbilityType {
    None = 0,
    All = 1,
    Attack = 2,
    Movement = 3,
    ESBEnemyAbilityType_MAX = 4,
};

enum class ESBEnemyActionManagerResult {
    Success = 0,
    Cancel = 1,
    Error = 2,
    ESBEnemyActionManagerResult_MAX = 3,
};

enum class ESBEnemyCauseOfDeath {
    Unknown = 0,
    Attacked = 1,
    SelfDefeat = 4,
    NoPlayersAround = 6,
    QuestTimeout = 7,
    Max = 8,
};

enum class ESBEnemyDropItemConditionType {
    None = 0,
    Bonus = 1,
    Max = 2,
};

enum class ESBEnemyDropItemType {
    Item = 0,
    Money = 1,
    Treasure = 2,
    Max = 3,
};

enum class ESBEnemyDropLogLevel {
    None = 0,
    Minimum = 1,
    Normal = 2,
    Verbose = 3,
    Max = 4,
};

enum class ESBEnemyDropLogType {
    None = 0,
    SelfDefeat = 1,
    NullPlayerCharacter = 2,
    NoPlayersAround = 3,
    PlayerTooFarFromEnemy = 4,
    NoncontributoryPlayer = 5,
    NoncontributoryPlayerBailedOut = 6,
    NoncontributorySoloPlayer = 7,
    ContributoryPlayer = 8,
    ContributoryParty = 9,
    LootClassNormal = 10,
    LootClassSemiHigh = 11,
    LootClassHigh = 12,
    MoneyAndExp = 13,
    TreasureLot = 14,
    TreasureLotAdopted = 15,
    TreasurePoped = 16,
    GuranteedDrop_NbDraw = 17,
    GuranteedDrop_DropRate = 18,
    GuranteedDrop_ZeroRate = 19,
    ValidInstancePartyId = 20,
    NoInstantParty = 21,
    InvalidPlayerState = 22,
    Max = 23,
};

enum class ESBEnemyExpBonusScaleType {
    OnePeople = 0,
    TwoPeople = 1,
    ThreePeople = 2,
    More = 3,
    Max = 4,
};

enum class ESBEnemyIconType {
    Normal = 0,
    Named = 1,
    Boss = 2,
    Target = 4,
    Nonactive = 8,
    GateAttacker = 16,
    GuerrillaEnemy = 32,
    Gimmick = 64,
    Max = 65,
};

enum class ESBEnemyLoot {
    None = 0,
    Normal = 1,
    SemiHigh = 2,
    High = 3,
    Max = 4,
};

enum class ESBEnemyPhaseChangeRuleType {
    Or = 0,
    And = 1,
    Not = 2,
    CustomRule = 3,
    CheckIdle = 4,
    HitPointRate = 5,
    CheckPhaseProgression = 6,
    CheckNoBurstBonus = 7,
    PhaseControlIndex = 8,
    ESBEnemyPhaseChangeRuleType_MAX = 9,
};

enum class ESBEnemyRaceType {
    None = 0,
    BaseType1 = 1,
    BaseType2 = 2,
    BaseType3 = 3,
    BaseType4 = 4,
    BaseType5 = 5,
    BaseType6 = 6,
    BaseType20 = 20,
    BaseType21 = 21,
    BaseType22 = 22,
    BaseType23 = 23,
    BaseType24 = 24,
    BaseType25 = 25,
    BaseType26 = 26,
    BaseType27 = 27,
    BaseType30 = 30,
    BaseType31 = 31,
    BaseType32 = 32,
    BaseType33 = 33,
    BaseType34 = 34,
    BaseType35 = 35,
    BaseType36 = 36,
    BaseType40 = 40,
    BaseType41 = 41,
    BaseType42 = 42,
    BaseType50 = 50,
    BaseType51 = 51,
    BaseType52 = 52,
    BaseType60 = 60,
    BaseType61 = 61,
    BaseType62 = 62,
    BaseType63 = 63,
    BaseType70 = 70,
    BaseType71 = 71,
    BaseType72 = 72,
    BaseType73 = 73,
    BaseType74 = 74,
    BaseType75 = 75,
    BaseType76 = 76,
    BaseType77 = 77,
    BaseType78 = 78,
    BaseType79 = 79,
    BaseType80 = 80,
    BaseType81 = 81,
    BaseType82 = 82,
    BaseType83 = 83,
    BaseType84 = 84,
    Max = 85,
};

enum class ESBEnemyReactionType {
    Default = 0,
    Middle = 1,
    Heavy = 2,
    SuperHeavy = 3,
    PlayerType = 4,
    Max = 5,
};

enum class ESBEnemySkillActivationTrigger {
    Spawn = 0,
    Modifier = 1,
    Max = 2,
};

enum class ESBEnemySkillType {
    None = 0,
    Tactical = 1,
    Reactive = 2,
    Combo = 3,
    Max = 4,
};

enum class ESBEnemyStatusAilmentType {
    None = 0,
    Invincible = 1,
    FullHeal = 2,
    AutoHeal = 3,
    Num = 4,
    ESBEnemyStatusAilmentType_MAX = 5,
};

enum class ESBEnemyTakeDamageCounterComparison {
    Equal = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanEqual = 3,
    GreaterThan = 4,
    GreaterThanEqual = 5,
    ESBEnemyTakeDamageCounterComparison_MAX = 6,
};

enum class ESBEnemyTargetType {
    Projectile = 0,
    AdjustRootMotion = 1,
    Max = 2,
};

enum class ESBEnemyWalkingMode {
    Walk = 0,
    Run = 1,
    Dash = 2,
    ESBEnemyWalkingMode_MAX = 3,
};

enum class ESBEnemyWarpDirectionType {
    None = 0,
    Player = 1,
    Anchor = 2,
    ESBEnemyWarpDirectionType_MAX = 3,
};

enum class ESBEnemyWaveLocationType {
    Center = 0,
    Random = 1,
    ESBEnemyWaveLocationType_MAX = 2,
};

enum class ESBEnemyWaveRuleType {
    None = 0,
    RemainingEnemies = 1,
    HP = 2,
    ESBEnemyWaveRuleType_MAX = 3,
};

enum class ESBEnemyWaveSpawnLocation {
    EWSLoc_None = 0,
    EWSLoc_Random = 1,
    EWSLoc_Center = 2,
    EWSLoc_Max = 3,
};

enum class ESBEnemyWaveStepConditionType {
    EWSCType_None = 0,
    EWSCType_ElapsedTime = 1,
    EWSCType_RemainingEnemyNum = 2,
    EWSCType_RemainingEnemyHpRatio = 3,
    EWSCType_Max = 4,
};

enum class ESBEngramCannonAttributeBullet {
    None = 0,
    Fire = 1,
    Ice = 2,
    Thunder = 3,
    Earth = 4,
    Light = 5,
    Dark = 6,
    ESBEngramCannonAttributeBullet_MAX = 7,
};

enum class ESBEngramCannonRotateDirection {
    Left = 0,
    Right = 1,
    Up = 2,
    Down = 3,
    ESBEngramCannonRotateDirection_MAX = 4,
};

enum class ESBEngramCannonStatus {
    Idle = 0,
    NowCharge = 1,
    NowFullCharge = 2,
    NowFullChargeToEnter = 3,
    InRidePlayer = 4,
    NowShotting = 5,
    ShottingAfter = 6,
    CoolTime = 7,
    RechargeInit = 8,
    ESBEngramCannonStatus_MAX = 9,
};

enum ESBEntryConditionPartyState {
    EntryConditionPartyState_None = 0,
    EntryConditionPartyState_SoloOnly = 1,
    EntryConditionPartyState_PartyOnly = 2,
    EntryConditionPartyState_SoloOrParty = 3,
    EntryConditionPartyState_MatchingOnly = 4,
    EntryConditionPartyState_MAX = 5,
};

enum class ESBEquipImagineFrameType {
    Arts = 0,
    Support_1 = 1,
    Support_2 = 2,
    Support_3 = 3,
    Num = 4,
    ESBEquipImagineFrameType_MAX = 5,
};

enum class ESBEquipmentSeriesItemType {
    None = 0,
    Weapon = 1,
    Costume = 2,
    Imagine = 3,
    MountImagine = 4,
    Num = 5,
    ESBEquipmentSeriesItemType_MAX = 6,
};

enum class ESBEventExecutorOption {
    RequireReceiver = 0,
    DontRequireReceiver = 1,
    MAX = 2,
};

enum class ESBEventShopStorage {
    Bag = 0,
    Warehouse = 1,
    Select = 2,
    ESBEventShopStorage_MAX = 3,
};

enum class ESBEventTermCheckNormalStatus {
    OutofTerm = 0,
    OffDays = 1,
    OffHours = 2,
    OffWeek = 3,
    Active = 4,
    ESBEventTermCheckNormalStatus_MAX = 5,
};

enum class ESBEventTermVirtualDateType {
    None = 0,
    Stop = 1,
    Move = 2,
    Max = 3,
};

enum class ESBEventTermsCheckType {
    EVENT_TERMS_CHECK_TYPE_NORMAL = 0,
    EVENT_TERMS_CHECK_TYPE_END_OF_THE_MANTH = 1,
    EVENT_TERMS_CHECK_TYPE_NUMBER_OF_WEEK = 2,
    EVENT_TERMS_CHECK_TYPE_MAX = 3,
};

enum class ESBEventTermsDateType {
    EVENT_TERMS_DATE_TYPE_FREE = 0,
    EVENT_TERMS_DATE_TYPE_START_FREE = 1,
    EVENT_TERMS_DATE_TYPE_END_FREE = 2,
    EVENT_TERMS_DATE_TYPE_NORMAL = 3,
    EVENT_TERMS_CHECK_TYPE_MAX = 4,
    EVENT_TERMS_MAX = 5,
};

enum class ESBEventTermsType {
    EVENT_TERM_TYPE_NORMAL = 0,
    EVENT_TERM_TYPE_EXCLUSION = 1,
    EVENT_TERM_TYPE_MAX = 2,
};

enum class ESBEventTriggerCloseConditionType {
    QuestStep = 0,
    QuestStatus = 1,
    ESBEventTriggerCloseConditionType_MAX = 2,
};

enum class ESBEventTriggerConditionType {
    Unknown = 0,
    ScenarioFlag = 1,
    QuestStatus = 2,
    QuestStep = 3,
    EventTerm = 4,
    ChallengeQuest = 5,
    AdventurerRank_GE = 6,
    AdventurerRank_LT = 7,
    ESBEventTriggerConditionType_MAX = 8,
};

enum class ESBExplosionBarrelDamage {
    ExplosiveBarrel_Fix200 = 0,
    ExplosiveBarrel_Fix800 = 1,
    ExplosiveBarrel_Fix1000 = 2,
    ExplosiveBarrel_Rate10 = 3,
    ExplosiveBarrel_Rate15 = 4,
    ExplosiveBarrel_Rate20 = 5,
    ExplosiveBarrel_Rate25 = 6,
    ExplosiveBarrel_Rate30 = 7,
    ExplosiveBarrel_MAX = 8,
};

enum class ESBFacialType {
    Default = 0,
    Laugh = 1,
    Anger = 2,
    Sad = 3,
    Happy = 4,
    Hopeless = 5,
    Troubled = 6,
    Doubt = 7,
    Tease = 8,
    Endure = 9,
    Hustle = 10,
    Hurt = 11,
    Pinched = 12,
    Rushed = 13,
    Surprised = 14,
    Hate = 15,
    Flattering = 16,
    Fear = 17,
    Serious = 18,
    Smile = 19,
    Plot = 20,
    Attack = 21,
    Damage = 22,
    Dead = 23,
    Special = 24,
    EX1 = 25,
    EX2 = 26,
    EX3 = 27,
    EX4 = 28,
    EX5 = 29,
    EX6 = 30,
    EX7 = 31,
    EX8 = 32,
    EX9 = 33,
    EX10 = 34,
    EX11 = 35,
    EX12 = 36,
    EX13 = 37,
    EX14 = 38,
    EX15 = 39,
    CreationSmile = 40,
    CreationAnger = 41,
    CreationSad = 42,
    CreationPose1 = 43,
    CreationPose2 = 44,
    CreationPose3 = 45,
    CreationPose4 = 46,
    CreationPose5 = 47,
    Max = 48,
};

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

enum class ESBFailureUpdateBattleStatusOneReason {
    None = 0,
    ActorStatus = 1,
    Passive = 2,
    Condition = 3,
    EffectiveStatusItem = 4,
    Resist = 5,
    Immune = 6,
    LevelDifference = 7,
    TriggerCount = 8,
    ESBFailureUpdateBattleStatusOneReason_MAX = 9,
};

enum class ESBFang_expeditionItemCategory {
    None = 0,
    Money = 10,
    Token = 11,
    Emote = 12,
    Stamp = 13,
    Stamp_Category = 14,
    Recepi_Imagine = 15,
    Recepi_Craft = 16,
    Achievement = 17,
    LiquidMemory = 18,
    MissionCoin = 19,
    BPPoint = 20,
    FreeCurrencies = 21,
    Exp = 22,
    BonusSkillPoint = 23,
    ClassSkillPoint = 24,
    ESBFang_MAX = 25,
};

enum class ESBFang_expeditionLimitType {
    None = 0,
    AdventureRank = 1,
    Quest = 2,
    Achievement = 3,
    ESBFang_MAX = 4,
};

enum class ESBFang_expeditionStatus {
    None = 0,
    Play = 1,
    NoCheck = 2,
    Cancel = 3,
    Complete = 4,
    ESBFang_MAX = 5,
};

enum class ESBFieldActorExeWebAPI {
    SavedFieldActorPoint = 0,
    SetFlagFieldActorPoint = 1,
    SavedFieldActorFreeBuffPoint = 2,
    SavedDirectTreasureBox = 3,
    ResetRespawnTimeByCity = 4,
    ESBFieldActorExeWebAPI_MAX = 5,
};

enum class ESBFieldActorInteractPoint {
    GatherPoint = 0,
    TreasureBox = 1,
    FreeBuffPoint = 2,
    DirectTreasureBox = 3,
    ESBFieldActorInteractPoint_MAX = 4,
};

enum class ESBFieldBGMType {
    None = 0,
    Default = 1,
    Mounting = 2,
    Battle = 3,
    InterruptQuest = 4,
    Max = 5,
};

enum class ESBFieldDamageType {
    None = 0,
    DEAD_BEGIN = 1,
    FallDead = 2,
    DrowningDead = 3,
    NoPlayersAround = 4,
    QuestTimeout = 5,
    DEAD_END = 6,
    DAMAGE_BEGIN = 7,
    FallDamage = 8,
    DAMAGE_END = 9,
    ESBFieldDamageType_MAX = 10,
};

enum class ESBFieldStatusChallengeQuestSettingType {
    StartConditionPop = 0,
    StartConditionAndExectPop = 1,
    ExectPop = 2,
    ESBFieldStatusChallengeQuestSettingType_MAX = 3,
};

enum class ESBFieldStatusConditionType {
    Unknown = 0,
    QuestStatus = 1,
    ScenarioFlag = 2,
    ResearchTeam = 3,
    EventTerm = 4,
    EventTermStatus = 5,
    ChallengeQuest = 6,
    QuestConditionItem = 7,
    DungeonActivateFlag = 8,
    DungeonCompleteFlag = 9,
    ESBFieldStatusConditionType_MAX = 10,
};

enum class ESBFireNotifiesAtPosition {
    AtStartOfEvaluation = 0,
    AtEndOfEvaluation = 1,
    AfterSpawn = 2,
    None = 3,
    ESBFireNotifiesAtPosition_MAX = 4,
};

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

enum class ESBFoliageReactions {
    Radial = 0,
    Speed = 1,
    Height = 2,
    RadialSpeed = 3,
    ESBFoliageReactions_MAX = 4,
};

enum class ESBFollowStatusType {
    None = 0,
    Follow = 1,
    Followed = 2,
    MutualFollow = 3,
    ESBFollowStatusType_MAX = 4,
};

enum class ESBFootSESocketType {
    None = 0,
    L_Hand = 1,
    R_Hand = 2,
    L_Foot = 3,
    R_Foot = 4,
    L_ForeLeg = 5,
    R_ForeLeg = 6,
    L_BackLeg = 7,
    R_BackLeg = 8,
    ESBFootSESocketType_MAX = 9,
};

enum class ESBFrameRateLimitType {
    FPS_LIMIT_UNLIMIT = 0,
    FPS_LIMIT_30 = 1,
    FPS_LIMIT_60 = 2,
    FPS_LIMIT_120 = 3,
    FPS_LIMIT_MAX = 4,
};

enum class ESBFreeBuffPointHourType {
    Daytime = 0,
    Nighttime = 1,
    Alltime = 2,
    ESBFreeBuffPointHourType_MAX = 3,
};

enum class ESBFreeBuffPointLotResult {
    Success = 0,
    InternalError = 1,
    InvalidData = 2,
    ItemStorageSizeOver = 3,
    InvalidObjectId = 4,
    CantLootObjectId = 5,
    InvalidMasterTreasureID = 6,
    GatherPointLotNoLot = 7,
    NotFoundObjectIsServerActor = 8,
    NotAuthor = 9,
    NotServer = 10,
    NotPlayer = 11,
    NotPlayerState = 12,
    CantInteractReach = 13,
    InvalidMasterData0 = 14,
    InvalidMasterData1 = 15,
    InvalidMasterData2 = 16,
    InvalidMasterData3 = 17,
    InvalidMasterTreasure = 18,
    ProcessingFieldActor = 19,
    InvalidMasterDataByItemAndWeapon = 20,
    InternalErrorByDBAccess0 = 21,
    InternalErrorByDBAccess1 = 22,
    InternalErrorByDBAccess2 = 23,
    TresureLotFuncError = 24,
    FailedGetFieldActorPickupComponent = 25,
    LotItemTypeUnknown = 26,
    ESBFreeBuffPointLotResult_MAX = 27,
};

enum class ESBFreeBuffPointType {
    NotUse = 0,
    Dotheal = 1,
    Atkup = 2,
    Movespeedup = 3,
    Event = 10,
    Pickup = 11,
    Enemydropup = 12,
    Treasuredropup1 = 14,
    Treasuredropup2 = 15,
    Mountengdown1 = 17,
    Mountengdown2 = 18,
    Nappohensin = 20,
    Napposp1 = 21,
    Napposp2 = 23,
    Napposp3 = 25,
    Allattatkup = 27,
    Allattdefup = 29,
    Atkup1 = 31,
    Atkup2 = 32,
    Defup1 = 34,
    Defup2 = 35,
    Superarmor = 37,
    DotHeal1 = 39,
    DotHeal2 = 40,
    Speedup1 = 42,
    Speedup2 = 43,
    Napposp4 = 44,
    Staminaup1 = 46,
    Staminaup2 = 47,
    Intervalt1 = 49,
    Intervalt2 = 50,
    Intervalult1 = 52,
    Intervalult2 = 53,
    Intervalbi1 = 55,
    Intervalbi2 = 56,
    ESBFreeBuffPointType_MAX = 57,
};

enum class ESBFreeBuffPointView {
    NotSetting = 0,
    BuffObject = 1,
    BuffNPC = 2,
    MushroomA = 3,
    MushroomB = 4,
    MushroomC = 5,
    MushroomD = 6,
    CookerA = 7,
    CookerB = 8,
    CookerC = 9,
    CookerD = 10,
    CookerE = 11,
    BuffNappo = 12,
    ESBFreeBuffPointView_MAX = 13,
};

enum class ESBFriendListSortType {
    Sort_Desc = 0,
    Sort_Asc = 1,
    Sort_MAX = 2,
};

enum class ESBFriendStatusType {
    None = 0,
    Requested = 1,
    Friend = 2,
    ESBFriendStatusType_MAX = 3,
};

enum class ESBFusionTicketType {
    None = 0,
    Tuning = 1,
    Protect = 2,
    Delete = 3,
    Recycling = 4,
    Slot1Open = 5,
    Slot2Open = 6,
    Slot3Open = 7,
    Slot4Open = 8,
    Max = 9,
};

enum class ESBGameModeStartMode {
    OnlyStartImmediately = 0,
    OnlyStartWithOtherPlayers = 1,
    Any = 2,
    ESBGameModeStartMode_MAX = 3,
};

enum class ESBGameOver {
    INGAME = 0,
    GAMEOVER = 1,
    TIMEOVER = 2,
    ESBGameOver_MAX = 3,
};

enum class ESBGameSettingsType {
    None = 0,
    MaxClassLevel = 1,
    ExtraExpTokenId = 2,
    PlayerBehaviorLogInterval = 3,
    NUM = 4,
    ESBGameSettingsType_MAX = 5,
};

enum ESBGashaCategoryType {
    CategoryType_None = 0,
    CategoryType_RoseOrb = 1,
    CategoryType_Ticket = 2,
    CategoryType_Event = 3,
    CategoryType_MAX = 4,
};

enum ESBGashaCurrencyType {
    CurrencyType_None = 0,
    CurrencyType_Currenc = 1,
    CurrencyType_Paid = 2,
    CurrencyType_Free = 3,
    CurrencyType_SkyCoin = 4,
    CurrencyType_MAX = 5,
};

enum class ESBGashaDemoRank {
    None = 0,
    A = 1,
    S = 2,
    ESBGashaDemoRank_MAX = 3,
};

enum class ESBGashaExpectDemoType {
    GashaStart = 0,
    Character = 1,
    GashaMachine = 2,
    ESBGashaExpectDemoType_MAX = 3,
};

enum ESBGashaPurchaseType {
    PurchaseType_None = 0,
    PurchaseType_RoseOrb = 1,
    PurchaseType_Ticket = 2,
    PurchaseType_BP = 3,
    PurchaseType_MAX = 4,
};

enum ESBGashaType {
    GashaType_Normal = 0,
    GashaType_Box = 1,
    GashaType_Friend = 2,
    GashaType_StepUp = 3,
    GashaType_MAX = 4,
};

enum class ESBGatherPointLotResult {
    Success = 0,
    InternalError = 1,
    InvalidData = 2,
    ItemStorageSizeOver = 3,
    InvalidObjectId = 4,
    CantLootObjectId = 5,
    InvalidMasterTreasureID = 6,
    GatherPointLotNoLot = 7,
    NotFoundObjectIsServerActor = 8,
    NotAuthor = 9,
    NotServer = 10,
    NotPlayer = 11,
    NotPlayerState = 12,
    CantInteractReach = 13,
    InvalidMasterData0 = 14,
    InvalidMasterData1 = 15,
    InvalidMasterData2 = 16,
    InvalidMasterData3 = 17,
    InvalidMasterTreasure = 18,
    ProcessingFieldActor = 19,
    InvalidMasterDataByItemAndWeapon = 20,
    InternalErrorByDBAccess0 = 21,
    InternalErrorByDBAccess1 = 22,
    InternalErrorByDBAccess2 = 23,
    TresureLotFuncError = 24,
    FailedGetFieldActorPickupComponent = 25,
    LotItemTypeUnknown = 26,
    ESBGatherPointLotResult_MAX = 27,
};

enum class ESBGatherPointType {
    Normal = 0,
    MAX = 1,
};

enum class ESBGaugeWidgetPlayAnimt {
    None = 0,
    Normal = 1,
    Blink = 2,
    MAX = 3,
};

enum class ESBGeneralPurposeCounterType {
    Stamp = 0,
    Emote = 1,
    WishList = 2,
    Resuscitation = 3,
    Treasure = 4,
    MaxDamage = 5,
    ESBGeneralPurposeCounterType_MAX = 6,
};

enum class ESBGodModeType {
    GameMode = 0,
    User = 1,
    Admin = 2,
    ESBGodModeType_MAX = 3,
};

enum class ESBGuardKnockBackPower {
    None = 0,
    Small = 1,
    Mid = 2,
    Large = 3,
    ESBGuardKnockBackPower_MAX = 4,
};

enum class ESBGuildActivityTime {
    UNDECIDED = 0,
    MORNING = 1,
    NOON = 2,
    NIGHT = 3,
    MIDNIGHT = 4,
    WEEKDAYS = 5,
    WEEKENDS = 6,
    MAX = 7,
};

enum class ESBGuildErrorCode {
    SUCCESS = 0,
    UNKNOWN_ERROR = 1,
    GUILD_NOT_FOUND = 2,
    GUILD_NOT_MEMBER = 3,
    GUILD_PERMISSION_DENIED = 4,
    GUILD_NO_ENTRY = 5,
    DUPLICATE_ENTRY = 6,
    GUILD_ALREDY_MEMBER = 7,
    DUPLICATE_NAME = 8,
    MEMBER_MAX = 9,
    NG_WORD = 10,
    CHARACTER_NOT_FOUND = 11,
    ESBGuildErrorCode_MAX = 12,
};

enum class ESBHTNStateComparison {
    Equal = 0,
    NotEqual = 1,
    LessThan = 2,
    LessThanEqual = 3,
    GreaterThan = 4,
    GreaterThanEqual = 5,
    ESBHTNStateComparison_MAX = 6,
};

enum class ESBHealRecoveryType {
    HealSkill = 0,
    BattleImagine = 1,
    Item = 2,
    TacticalSkillID = 3,
    ESBHealRecoveryType_MAX = 4,
};

namespace ESBHintShowTypes {
    enum Type {
        MYCHARACTER = 0,
        ITEM_INVENTORY = 1,
        QUEST = 2,
        MAP = 3,
        COMMUNICATE = 4,
        EMOTE = 5,
        MATCHING = 6,
        PARTY = 7,
        OPTION = 8,
        DUNGEON = 9,
        NUM = 10,
        ESBHintShowTypes_MAX = 11,
    };
}

enum class ESBHistoryType {
    RoseOrb = 0,
    BPpoint = 1,
    ESBHistoryType_MAX = 2,
};

enum class ESBHitCameraShake {
    None = 0,
    Vertical_S = 1,
    Vertical_L = 2,
    Horizontal_S = 3,
    Horizontal_L = 4,
    ESBHitCameraShake_MAX = 5,
};

enum class ESBHitDirection {
    Front = 0,
    Side = 1,
    Back = 2,
    ESBHitDirection_MAX = 3,
};

enum class ESBHitEffectSize {
    None = 0,
    S = 1,
    M = 2,
    L = 3,
    ESBHitEffectSize_MAX = 4,
};

enum class ESBHitKnockBackPower {
    None = 0,
    Small = 1,
    Mid = 2,
    Large = 3,
    ESBHitKnockBackPower_MAX = 4,
};

enum class ESBHitKnockBackTime {
    None = 0,
    Short = 1,
    Mid = 2,
    Long = 3,
    ESBHitKnockBackTime_MAX = 4,
};

enum class ESBHitSlomoPower {
    None = 0,
    Light = 1,
    Middle = 2,
    Heavy = 3,
    StormRush = 4,
    ESBHitSlomoPower_MAX = 5,
};

enum class ESBHitSlomoType {
    None = 0,
    IgnoreSuperArmor = 1,
    ESBHitSlomoType_MAX = 2,
};

enum class ESBHoldHandResponse {
    None = 0,
    SentRequest = 1,
    CanFollow = 2,
    HoldHandSuccess = 3,
    Error = 4,
    Unknown = 5,
    InvalidState = 6,
    InvalidOwner = 7,
    InvalidTarget = 8,
    TargetAlreadyHoldingHand = 9,
    InvalidLead = 10,
    ESBHoldHandResponse_MAX = 11,
};

enum class ESBHostility {
    Unknown = 0,
    Friendly = 1,
    Hostility = 2,
    HostilityNotAttack = 3,
    Max = 4,
};

enum class ESBImagineCategory {
    Arts = 0,
    Passive = 1,
    ESBImagineCategory_MAX = 2,
};

enum class ESBImagineCategoryType {
    ImaginePassive = 0,
    ImagineActive = 1,
    ESBImagineCategoryType_MAX = 2,
};

enum class ESBImagineSummonCharacter {
    None = 0,
    Mount = 1,
    ESBImagineSummonCharacter_MAX = 2,
};

enum class ESBInfluencePropagationType {
    Linear = 0,
    Constant = 1,
    Custom = 2,
    ESBInfluencePropagationType_MAX = 3,
};

enum class ESBInstanceAreaBGMType {
    BattleBefore = 0,
    Battle = 1,
    BattleEnd = 2,
    NoBattle = 3,
    ESBInstanceAreaBGMType_MAX = 4,
};

enum class ESBInteractionSearchPriorityAdditional {
    NotSearchInCity = 0,
    IsSitAction = 1,
    ESBInteractionSearchPriorityAdditional_MAX = 2,
};

enum class ESBInteractionState {
    None = 0,
    Search = 1,
    Input = 2,
    PreAction = 3,
    Action = 4,
    ESBInteractionState_MAX = 5,
};

enum class ESBInteractionType {
    None = 0,
    InteractionTarget = 1,
    MeshClimbing = 2,
    Resurrection = 3,
    CureBadCondition = 4,
    Sheathe = 5,
    ESBInteractionType_MAX = 6,
};

enum class ESBInterruptQuestBGMState {
    None = 0,
    Start = 1,
    Battle = 2,
    Success = 3,
    Failed = 4,
    Leave = 5,
    StepUp = 6,
    ESBInterruptQuestBGMState_MAX = 7,
};

enum class ESBInterruptQuestBGMType {
    NamedEnemy = 0,
    ESBInterruptQuestBGMType_MAX = 1,
};

enum class ESBInventoryAccessType {
    City = 0,
    Field = 1,
    Dungeon = 2,
    ESBInventoryAccessType_MAX = 3,
};

namespace ESBInvincibleAnimation {
    enum Type {
        Default = 0,
        DodgeRoll = 1,
        DodgeStep = 2,
        BattleAction = 3,
        Max = 4,
    };
}

enum class ESBInvincibleLevel {
    None = 0,
    Level1 = 1,
    Level2 = 2,
    Level3 = 3,
    Level4 = 4,
    ESBInvincibleLevel_MAX = 5,
};

enum class ESBIrisType {
    Left = 0,
    Right = 1,
    ESBIrisType_MAX = 2,
};

enum class ESBIsRquestBlackListResult {
    Failure = 0,
    Registered_Black = 1,
    Registered_Safe = 2,
    Success = 3,
    ESBIsRquestBlackListResult_MAX = 4,
};

namespace ESBItemSortType {
    enum Type {
        Default_Time = 0,
        Default_Time_Reverse = 1,
        ItemId = 2,
        ItemId_Reverse = 3,
        ItemLevel = 4,
        ItemLevel_Reverse = 5,
        ItemType = 6,
        Item_Enhance = 7,
        SortId = 8,
        SortId_Reverse = 9,
        Str = 10,
        Dex = 11,
        Vit = 12,
        Mnd = 13,
        Int = 14,
        HP = 15,
        Attack = 16,
        Recomended = 17,
        Item_Slot = 18,
        Item_Slot_Reverse = 19,
        Weapon_Slot = 20,
        Weapon_Slot_Reverse = 21,
        StackB_Num = 22,
        StackB_Num_Reverse = 23,
        NoSort = 24,
        AdventurerLevel = 25,
        AdventurerLevel_Reverse = 26,
        SORT_TYPE_MAX = 27,
        ESBItemSortType_MAX = 28,
    };
}

enum class ESBItemUseStatus {
    CanUse = 0,
    NotHave = 1,
    NotUseItem = 2,
    NotClassLeve = 3,
    NotFieldBagAccess = 4,
    NotUseDungeonItemBox = 5,
    NotUseCity = 6,
    NotUseDead = 7,
    NotAllowUseOtherItem = 8,
    CannotItem = 9,
    EngramCannonAction = 10,
    RestrictPlayerActionByCheerfulItem = 11,
    RecastTime = 12,
    NotUseCheerfulItemMove = 13,
    NotUseCheerfulItemClimbing = 14,
    NotUseCheerfulItemUnsheathe = 15,
    NotUseCheerfulItemMounting = 16,
    NotUseCheerfulItemAir = 17,
    NotUseCheerfulItemSwimming = 18,
    EmoteNow = 19,
    NotUseCheerfulItemSit = 20,
    NotUseFishing = 21,
    NotUseCheerfulItemInteraction = 22,
    NotUseCheerfulItemBattleStatus = 23,
    IsItemLock = 24,
    NotThatClass = 25,
    Error = 26,
    ESBItemUseStatus_MAX = 27,
};

enum ESBJankenHandType {
    Hand_None = 0,
    Rock = 1,
    Scissors = 2,
    Paper = 3,
    ESBJankenHandType_MAX = 4,
};

enum class ESBJointGestureState {
    None = 0,
    HandHolding = 1,
    Janken = 2,
    ESBJointGestureState_MAX = 3,
};

enum ESBJointGestureStatusType {
    JointGestureStatus_None = 0,
    JointGestureStatus_HandHolding_Wait = 1,
    JointGestureStatus_HandHolding_WaitStart = 2,
    JointGestureStatus_HandHolding_Start = 3,
    JointGestureStatus_HandHolding_Play = 4,
    JointGestureStatus_Janken_Wait = 5,
    JointGestureStatus_Janken_WaitStart = 6,
    JointGestureStatus_Janken_Start = 7,
    JointGestureStatus_Janken_Play = 8,
    JointGestureStatus_Janken_Selected = 9,
    JointGestureStatus_Janken_GetTargetHandType_Wait = 10,
    JointGestureStatus_Janken_GetTargetHandType_Success = 11,
    JointGestureStatus_Janken_OnlyMeResult = 12,
    JointGestureStatus_Janken_ResultStart = 13,
    JointGestureStatus_MAX = 14,
};

enum class ESBKeepCameraAimLocation {
    None = 0,
    KeepIn = 1,
    KeepInOut = 2,
    NoKeepOut = 3,
    ESBKeepCameraAimLocation_MAX = 4,
};

namespace ESBKeyConfigAction {
    enum Type {
        None = 0,
        Pad_Begin = 1,
        Pad_Dash = 2,
        Pad_AutoRun = 3,
        Pad_Jump = 4,
        Pad_MainAction = 5,
        Pad_SubAction = 6,
        Pad_LeftSkill = 7,
        Pad_RightSkill = 8,
        Pad_Skill1 = 9,
        Pad_Skill2 = 10,
        Pad_Skill3 = 11,
        Pad_Skill4 = 12,
        Pad_SpecialSkill = 13,
        Pad_Dodge = 14,
        Pad_Interaction = 15,
        Pad_Reload = 16,
        Pad_ShortcutRingExeF5 = 17,
        Pad_ShortcutRingExeF6 = 18,
        Pad_ShortcutRingExeF7 = 19,
        Pad_ShortcutRingExeF8 = 20,
        Pad_ShortcutRingExeF9 = 21,
        Pad_ShortcutRingExeF10 = 22,
        Pad_ShortcutRingExeF11 = 23,
        Pad_ShortcutRingExeF12 = 24,
        Pad_ShortcutExec = 25,
        Pad_ShortcutMoveLeft = 26,
        Pad_ShortcutMoveRight = 27,
        Pad_Dummy108 = 28,
        Pad_Dummy109 = 29,
        Pad_MainMenu = 30,
        Pad_ChatWindow = 31,
        Pad_ImagineArts = 32,
        Pad_ImagineArts2 = 33,
        Pad_ImagineMount = 34,
        Pad_CameraReset = 35,
        Pad_LockOn = 36,
        Pad_Function = 37,
        Pad_Function2 = 38,
        Pad_Dummy110 = 39,
        Pad_Dummy111 = 40,
        Pad_Dummy112 = 41,
        Pad_Dummy113 = 42,
        Pad_ShortcutRing = 43,
        Pad_Dummy114 = 44,
        Pad_WholeMap = 45,
        Pad_CameraZoomIn = 46,
        Pad_CameraZoomOut = 47,
        Pad_PushPin = 48,
        Pad_PhotoMode = 49,
        Pad_ScreenShot = 50,
        Pad_Hud = 51,
        Pad_QuestHudChange = 52,
        Pad_KeyGuide = 53,
        Pad_SkillPaletteChange = 54,
        Pad_NowParty = 55,
        Pad_Dummy1 = 56,
        Pad_Dummy2 = 57,
        Pad_End = 58,
        KB_Begin = 59,
        KB_MoveFront = 60,
        KB_MoveBack = 61,
        KB_MoveLeft = 62,
        KB_MoveRight = 63,
        KB_Walk = 64,
        KB_Dash = 65,
        KB_AutoRun = 66,
        KB_Jump = 67,
        KB_OrientToCamera = 68,
        KB_MainAction = 69,
        KB_SubAction = 70,
        KB_LeftSkill = 71,
        KB_RightSkill = 72,
        KB_Skill1 = 73,
        KB_Skill2 = 74,
        KB_Skill3 = 75,
        KB_Skill4 = 76,
        KB_SpecialSkill = 77,
        KB_Dodge = 78,
        KB_Interaction = 79,
        KB_Reload = 80,
        KB_ShortcutRingExeF5 = 81,
        KB_ShortcutRingExeF6 = 82,
        KB_ShortcutRingExeF7 = 83,
        KB_ShortcutRingExeF8 = 84,
        KB_ShortcutRingExeF9 = 85,
        KB_ShortcutRingExeF10 = 86,
        KB_ShortcutRingExeF11 = 87,
        KB_ShortcutRingExeF12 = 88,
        KB_ShortcutExec = 89,
        KB_ShortcutMoveLeft = 90,
        KB_ShortcutMoveRight = 91,
        Pad_Dummy123 = 92,
        Pad_Dummy124 = 93,
        KB_MainMenu = 94,
        KB_ChatWindow = 95,
        KB_ImagineArts = 96,
        KB_ImagineArts2 = 97,
        KB_ImagineMount = 98,
        KB_CameraPitchUp = 99,
        KB_CameraPitchDown = 100,
        KB_CameraYawLeft = 101,
        KB_CameraYawRight = 102,
        KB_CameraZoomIn = 103,
        KB_CameraZoomOut = 104,
        KB_CameraReset = 105,
        KB_LockOn = 106,
        KB_LockOnTargetRight = 107,
        KB_LockOnTargetLeft = 108,
        KB_Function = 109,
        KB_QuickAccess_MyCharacter = 110,
        KB_QuickAccess_Inventory = 111,
        KB_QuickAccess_Quest = 112,
        KB_QuickAccess_Map = 113,
        KB_QuickAccess_Library = 114,
        KB_QuickAccess_Contents = 115,
        KB_QuickAccess_Party = 116,
        KB_QuickAccess_Guild = 117,
        KB_QuickAccess_Gacha = 118,
        KB_QuickAccess_Option = 119,
        KB_QuickAccess_Photo = 120,
        KB_QuickAccess_Hud = 121,
        KB_QuickAccess_Communicate = 122,
        Pad_Dummy125 = 123,
        Pad_Dummy126 = 124,
        Pad_Dummy127 = 125,
        Pad_Dummy128 = 126,
        KB_ShortcutRing = 127,
        Pad_Dummy129 = 128,
        KB_WholeMap = 129,
        KB_Screenshot = 130,
        KB_BookMarkRegist = 131,
        KB_BookMarkBegin = 132,
        KB_BookMark1 = 133,
        KB_BookMark2 = 134,
        KB_BookMark3 = 135,
        KB_BookMark4 = 136,
        KB_BookMark5 = 137,
        KB_BookMark6 = 138,
        KB_BookMark7 = 139,
        KB_BookMark8 = 140,
        KB_BookMark9 = 141,
        KB_BookMark10 = 142,
        KB_BookMark11 = 143,
        KB_BookMark12 = 144,
        KB_BookMark13 = 145,
        KB_BookMark14 = 146,
        KB_BookMark15 = 147,
        KB_BookMark16 = 148,
        KB_BookMark17 = 149,
        KB_BookMark18 = 150,
        KB_BookMark19 = 151,
        KB_BookMark20 = 152,
        KB_BookMark21 = 153,
        KB_BookMark22 = 154,
        KB_BookMark23 = 155,
        KB_BookMark24 = 156,
        KB_BookMarkEnd = 157,
        KB_Pushpin = 158,
        KB_PhotoMode = 159,
        KB_QuestHudChange = 160,
        KB_KeyGuide = 161,
        KB_SkillPaletteChange = 162,
        KB_NowParty = 163,
        KB_Dummy1 = 164,
        KB_Dummy2 = 165,
        KB_End = 166,
        Max = 167,
    };
}

enum class ESBKeyConfigFloatParam {
    None = 0,
    Pad_LeftStickInputThresholdX = 1,
    Pad_LeftStickInputStrengthX = 2,
    Pad_LeftStickInputThresholdY = 3,
    Pad_LeftStickInputStrengthY = 4,
    Pad_RightStickInputThresholdX = 5,
    Pad_RightStickInputStrengthX = 6,
    Pad_RightStickInputThresholdY = 7,
    Pad_RightStickInputStrengthY = 8,
    Pad_CameraSpeedRateYaw = 9,
    Pad_CameraSpeedRatePitch = 10,
    Pad_AimAssist_FitTargetStrength = 11,
    Pad_AimAssist_FollowTargetStrength = 12,
    Pad_AimAssist_CameraBrakeStrength = 13,
    KB_CameraSpeedRateYaw = 14,
    KB_CameraSpeedRatePitch = 15,
    KB_AimAssist_FitTargetStrength = 16,
    KB_AimAssist_FollowTargetStrength = 17,
    KB_AimAssist_CameraBrakeStrength = 18,
    Mouse_InputStrength = 19,
    Mouse_AimAssist_FitTargetStrength = 20,
    Mouse_AimAssist_FollowTargetStrength = 21,
    Mouse_AimAssist_CameraBrakeStrength = 22,
    Max = 23,
};

namespace ESBKeyConfigGamepadKey {
    enum Type {
        None = 0,
        X = 1,
        Y = 2,
        A = 3,
        B = 4,
        L1 = 5,
        L2 = 6,
        L3 = 7,
        R1 = 8,
        R2 = 9,
        R3 = 10,
        Start = 11,
        Select = 12,
        Direction_Up = 13,
        Direction_Down = 14,
        Direction_Left = 15,
        Direction_Right = 16,
        TouchPad = 17,
        Fn_Begin = 18,
        Fn_X = 19,
        Fn_Y = 20,
        Fn_A = 21,
        Fn_B = 22,
        Fn_L3 = 23,
        Fn_R3 = 24,
        Fn_Direction_Up = 25,
        Fn_Direction_Down = 26,
        Fn_Direction_Left = 27,
        Fn_Direction_Right = 28,
        Fn_Start = 29,
        Fn_Select = 30,
        Fn_TouchPad = 31,
        Fn_End = 32,
        Fn2_Begin = 33,
        Fn2_X = 34,
        Fn2_Y = 35,
        Fn2_A = 36,
        Fn2_B = 37,
        Fn2_L3 = 38,
        Fn2_R3 = 39,
        Fn2_Direction_Up = 40,
        Fn2_Direction_Down = 41,
        Fn2_Direction_Left = 42,
        Fn2_Direction_Right = 43,
        Fn2_Start = 44,
        Fn2_Select = 45,
        Fn2_TouchPad = 46,
        Fn2_End = 47,
        Fn3 = 48,
        Max = 49,
    };
}

namespace ESBKeyConfigKeyboardKey {
    enum Type {
        None = 0,
        A = 1,
        B = 2,
        C = 3,
        D = 4,
        E = 5,
        F = 6,
        G = 7,
        H = 8,
        I = 9,
        J = 10,
        K = 11,
        L = 12,
        M = 13,
        N = 14,
        O = 15,
        P = 16,
        Q = 17,
        R = 18,
        S = 19,
        T = 20,
        U = 21,
        V = 22,
        W = 23,
        X = 24,
        Y = 25,
        Z = 26,
        Escape = 27,
        Hyphen = 28,
        Caret = 29,
        BackSlash = 30,
        Backspace = 31,
        Tab = 32,
        AtSign = 33,
        LeftSquareBracket = 34,
        CapsLock = 35,
        SemiColon = 36,
        Colon = 37,
        RightSquareBracket = 38,
        Comma = 39,
        Period = 40,
        Slash = 41,
        Space = 42,
        Enter = 43,
        ScrollLock = 44,
        Pause = 45,
        Insert = 46,
        Home = 47,
        PageUp = 48,
        Delete = 49,
        End = 50,
        PageDown = 51,
        ArrowUp = 52,
        ArrowDown = 53,
        ArrowLeft = 54,
        ArrowRight = 55,
        LeftShift = 56,
        RightShift = 57,
        Shift = 58,
        LeftControl = 59,
        RightControl = 60,
        Control = 61,
        LeftAlt = 62,
        RightAlt = 63,
        Alt = 64,
        F1 = 65,
        F2 = 66,
        F3 = 67,
        F4 = 68,
        F5 = 69,
        F6 = 70,
        F7 = 71,
        F8 = 72,
        F9 = 73,
        F10 = 74,
        F11 = 75,
        F12 = 76,
        FullKey1 = 77,
        FullKey2 = 78,
        FullKey3 = 79,
        FullKey4 = 80,
        FullKey5 = 81,
        FullKey6 = 82,
        FullKey7 = 83,
        FullKey8 = 84,
        FullKey9 = 85,
        FullKey0 = 86,
        TenKeySlash = 87,
        TenKeyAsterisk = 88,
        TenKeyHyphen = 89,
        TenKeyPlus = 90,
        TenKey1 = 91,
        TenKey2 = 92,
        TenKey3 = 93,
        TenKey4 = 94,
        TenKey5 = 95,
        TenKey6 = 96,
        TenKey7 = 97,
        TenKey8 = 98,
        TenKey9 = 99,
        TenKey0 = 100,
        PrintScreen = 101,
        Max = 102,
    };
}

namespace ESBKeyConfigMouseKey {
    enum Type {
        None = 0,
        LeftButton = 1,
        RightButton = 2,
        CenterButton = 3,
        ThumbButton1 = 4,
        ThumbButton2 = 5,
        WheelUp = 6,
        WheelDown = 7,
        Max = 8,
    };
}

enum class ESBKeyGuideDisplayType {
    KEYGUIDE_AUTO = 0,
    KEYGUIDE_INVISIBLE = 1,
    KEYGUIDE_VISIBLE = 2,
    KEYGUIDE_TYPE_MAX = 3,
    KEYGUIDE_MAX = 4,
};

enum class ESBKnockBackWeightClass {
    None = 0,
    KnockBackMoveReceiverEmphasisSuper = 1,
    KnockBackMoveReceiverEmphasis = 2,
    KnockBackMoveFare = 3,
    KnockBackMoveAttackerOnly = 4,
    ESBKnockBackWeightClass_MAX = 5,
};

enum class ESBLanguage {
    Japanese = 0,
    English = 1,
    ESBLanguage_MAX = 2,
};

enum class ESBLevelBuddyVoiceCondition {
    DungeonStart = 0,
    BattleStart = 1,
    AreaStart = 2,
    AreaClear = 3,
    QuestFailed = 4,
    ESBLevelBuddyVoiceCondition_MAX = 5,
};

enum class ESBLevelSequenceType {
    Default = 0,
    Demo = 1,
    ESBLevelSequenceType_MAX = 2,
};

enum class ESBLibraryEnemyAppearanceTime {
    All = 0,
    Noon = 1,
    Night = 2,
    ESBLibraryEnemyAppearanceTime_MAX = 3,
};

enum class ESBLibraryEnemyDropItemIconType {
    Unknown = 0,
    Item = 1,
    Weapon = 2,
    Costume = 3,
    Imagine_Battle = 4,
    Imagine_Inner = 5,
    Mount = 6,
    Token = 7,
    Emote = 8,
    Stamp = 9,
    ImagineRecipe = 10,
    CraftMachineRecipe = 11,
    CraftRecipeSet = 12,
    AdventureBoard = 13,
    Direct_Item = 14,
    Direct_Weapon = 15,
    Direct_Costume = 16,
    Direct_Imagine = 17,
    Direct_Mount = 18,
    Direct_Token = 19,
    Direct_Emote = 20,
    Direct_Stamp = 21,
    Direct_ImagineRecipe = 22,
    Direct_CraftMachineRecipe = 23,
    Direct_CraftRecipeSet = 24,
    Direct_AdventureBoard = 25,
    Other = 26,
    ESBLibraryEnemyDropItemIconType_MAX = 27,
};

enum class ESBLibraryEnemyElementType {
    None = 0,
    Fire = 1,
    Thunder = 2,
    Ice = 3,
    Rock = 4,
    Light = 5,
    Darkness = 6,
    Stun = 7,
    Poison = 8,
    Sleep = 9,
    FixTarget = 10,
    Fear = 11,
    Dark = 12,
    Bind = 13,
    Palsy = 14,
    Drain = 15,
    FlashStun = 16,
    CannotSkill = 17,
    StaminaZero = 18,
    TransformNappo = 19,
    StaminaRecoveryDown = 20,
    Max = 21,
};

enum class ESBLibraryEnemyViewSetting {
    Default = 0,
    Battle = 1,
    ESBLibraryEnemyViewSetting_MAX = 2,
};

enum class ESBLibraryEnemyWeaponSetting {
    Main = 0,
    Sub = 1,
    ESBLibraryEnemyWeaponSetting_MAX = 2,
};

enum class ESBLibraryPictureBookType {
    Item = 0,
    Weapon = 1,
    BattleImagine = 2,
    EnhanceImagine = 3,
    Num = 4,
    ESBLibraryPictureBookType_MAX = 5,
};

enum class ESBLieOnGroundSituation {
    Down = 0,
    Running = 1,
    MAX = 2,
};

enum class ESBLipSyncType {
    Default = 0,
    Loop = 1,
    Close = 2,
    Open = 3,
    HalfOpen = 4,
    ESBLipSyncType_MAX = 5,
};

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

enum class ESBLiquidMemoryInfoSortType {
    LiquidMemoryId_Ascending = 0,
    LiquidMemoryId_Descending = 1,
    Num = 2,
    ESBLiquidMemoryInfoSortType_MAX = 3,
};

enum class ESBListenerPosition {
    None = 0,
    Camera = 1,
    Player = 2,
    ESBListenerPosition_MAX = 3,
};

enum class ESBLobbyChangedType {
    Player = 0,
    Room = 1,
    ESBLobbyChangedType_MAX = 2,
};

enum class ESBLocationInfoType {
    None = 0,
    InstanceDungeon = 1,
    RaidDungeon = 2,
    FishingPoint = 3,
    PublicDungeon = 4,
    ESBLocationInfoType_MAX = 5,
};

enum class ESBLocationType {
    None = 0,
    Normal = 1,
    Dungeon = 2,
    ESBLocationType_MAX = 3,
};

enum class ESBLockOnCameraLookPoint {
    RootComponent = 0,
    TargetableComponent = 1,
    ESBLockOnCameraLookPoint_MAX = 2,
};

enum class ESBLoginBanDurationType {
    BanTypeNone = 0,
    BanTypeLimitedTimeSuspension = 1,
    BanTypeIndefiniteSuspension = 2,
    BanTypePermanent = 3,
    ESBLoginBanDurationType_MAX = 4,
};

enum class ESBLoginBanType {
    None = 0,
    Investigation = 1,
    Sanction = 2,
    ESBLoginBanType_MAX = 3,
};

namespace ESBLowVGAMemory {
    enum Type {
        SBLowVGA_Invalid = 0,
        SBLowVGA_Off = 1,
        SBLowVGA_On = 2,
        SBLowVGA_MAX = 3,
    };
}

enum class ESBMagnitudeRelation {
    None = 0,
    Less = 1,
    LessOrEqual = 2,
    Equal = 3,
    NotEqual = 4,
    GreaterOrEqual = 5,
    Greater = 6,
    AlwaysTrue = 7,
    AlwaysFalse = 8,
    Num = 9,
    ESBMagnitudeRelation_MAX = 10,
};

enum class ESBMailAttachOverflowType {
    None = 0,
    Over_Vanish = 1,
    Over_NoVanish = 2,
    ESBMailAttachOverflowType_MAX = 3,
};

enum class ESBMailAttachmentViewType {
    Amount = 0,
    TransferType = 1,
    Storage = 2,
    ESBMailAttachmentViewType_MAX = 3,
};

enum class ESBMailFilterType {
    NoRead = 0,
    Protcted = 1,
    Important = 2,
    System = 3,
    GameMaster = 4,
    Transfer = 5,
    Transable = 6,
    Attached = 7,
    Account = 8,
    Character = 9,
    Other = 10,
    ESBMailFilterType_MAX = 11,
};

enum class ESBMailPlatformType {
    MAIL_PLATFORM_NONE = 0,
    MAIL_PLATFORM_PC = 1,
    MAIL_PLATFORM_PS5 = 2,
    MAIL_PLATFORM_XBOX = 3,
    MAIL_PLATFORM_NSW = 4,
    MAIL_PLATFORM_MAX = 5,
};

enum class ESBMailReadStatus {
    MAIL_NOREAD = 0,
    MAIL_READED = 1,
    MAIL_GETED = 2,
    MAIL_TRANSED = 4,
    MAIL_TRANSRECV = 8,
    MAIL_ALL = 15,
    MAIL_MAX = 16,
};

enum class ESBMailSortType {
    DayTime_Desc = 0,
    DayTime_Asc = 1,
    Sender_Asc = 2,
    ESBMailSortType_MAX = 3,
};

enum class ESBMailType {
    MailType_All = 0,
    MailType_Management = 1,
    MailType_System = 2,
    MailType_Avator = 3,
    MailType_StorageBox = 4,
    MailType_MAX = 5,
};

enum class ESBMakeupType {
    None = 0,
    Condition = 1,
    Lip = 2,
    Paint = 3,
    MAX = 4,
};

enum class ESBMapBossBGMConditionType {
    Or = 0,
    And = 1,
    ESBMapBossBGMConditionType_MAX = 2,
};

enum class ESBMapBossBGMEnemyConditionType {
    EnemyID = 0,
    EnemyTag_ClearBoss = 1,
    EnemyTag_Unique = 2,
    EnemyTotal = 3,
    ESBMapBossBGMEnemyConditionType_MAX = 4,
};

enum class ESBMapErrorCode {
    SUCCESS = 0,
    HIT_NG_WORD = 1,
    UNKNOWN_ERROR = 2,
    MAX = 3,
};

enum ESBMapRegion {
    MapRegion_None = 0,
    MapRegion_R01 = 1,
    MapRegion_R02 = 2,
    MapRegion_R03 = 3,
    MapRegion_R04 = 4,
    MapRegion_R05 = 5,
    MapRegion_MAX = 6,
};

enum ESBMapType {
    MapType_None = 0,
    MapType_OutGame = 1,
    MapType_City = 2,
    MapType_Field = 3,
    MapType_InstanceDungeon = 4,
    MapType_InstanceArea = 5,
    MapType_OfflineBattle = 6,
    MapType_RaidBattle = 7,
    MapType_Arena = 8,
    MapType_Theater = 9,
    MapType_MAX = 10,
};

enum ESBMapUIType {
    MapUITypeNone = 0,
    MapUITypeMapBlur = 1,
    MapUITypeMapBlurAndLocation = 2,
    MapUITypeMapLandscapeAndLocation = 3,
    ESBMapUIType_MAX = 4,
};

enum class ESBMarkerTargetState {
    UnActive = 0,
    Active = 1,
    UnReplicated = 2,
    ESBMarkerTargetState_MAX = 3,
};

enum class ESBMarkerType {
    NormalMarker = 0,
    ParabolaMarker = 1,
    ChantMarker = 2,
    ESBMarkerType_MAX = 3,
};

enum class ESBMasterDataStatus {
    Unavailable = 0,
    Loading = 1,
    Available = 2,
    Abort = 3,
    ESBMasterDataStatus_MAX = 4,
};

enum class ESBMatchingFailureType {
    Unknown = 0,
    InternalError = 1,
    Canceld = 2,
    TimeOut = 3,
    Declined = 4,
    NotPartyLeader = 5,
    TooMuchMember = 6,
    AlreadyStartMatchmaking = 7,
    OnlyOneSelect = 8,
    LackTotalPower = 9,
    NotOpenDungeon = 10,
    Inviting = 11,
    Recruiting = 12,
    InvalidDungeon = 13,
    PenaltyNotExpired = 14,
    BackfillNotAllowed = 15,
    StillPlaying = 16,
    NotMeetEntryConditions = 17,
    ContentUsageRestrictedDueToNumberOfMails = 18,
    NotEnoughAdventureRankForRaid = 19,
    MaxCcuExceeded = 20,
    ESBMatchingFailureType_MAX = 21,
};

enum class ESBMatchingGameStateStatusType {
    Matching = 0,
    Canceled = 1,
    ESBMatchingGameStateStatusType_MAX = 2,
};

enum class ESBMatchingMenuCancelMatchResult {
    Success = 0,
    UnknownFailure = 1,
    NotLeader = 2,
    ESBMatchingMenuCancelMatchResult_MAX = 3,
};

enum class ESBMatchingMenuStartMatchResult {
    Success = 0,
    UnknownFailure = 1,
    NoContents = 2,
    NotLeader = 3,
    Unopened = 4,
    Test_OnlyOne = 5,
    ESBMatchingMenuStartMatchResult_MAX = 6,
};

enum class ESBMerchandiseCounterType {
    None = 0,
    Exchange = 1,
    Weapon = 2,
    Item = 3,
    TAbiliry = 4,
    ESBMerchandiseCounterType_MAX = 5,
};

enum class ESBMigrationInfoRequestResult {
    Success = 0,
    ArbitraryByLeader = 1,
    UnknownFailure = 2,
    GameServerNotFound = 109,
    GameServerReservationFailure = 110,
    ESBMigrationInfoRequestResult_MAX = 111,
};

enum ESBMiniMapIconType {
    MiniMapIconTypeShortPin = 0,
    MiniMapIconTypeNamedEnemy = 1,
    MiniMapIconTypeBossEnemy = 2,
    MiniMapIconTypeAttackerEnemy = 3,
    MiniMapIconTypeGuerrillaEnemy = 4,
    MiniMapIconTypeEnemy = 5,
    MiniMapIconTypeTargetEnemy = 6,
    MiniMapIconTypePlayer = 7,
    MiniMapIconTypeWorldWerp = 8,
    MiniMapIconTypeLocalWerp = 9,
    MiniMapIconTypePin = 10,
    MiniMapIconTypeEngramCanon = 11,
    MiniMapIconTypePartyPlayerDead = 12,
    MiniMapIconTypePartyPlayer = 13,
    MiniMapIconTypeFightingToghterNPCDead = 14,
    MiniMapIconTypeFightingToghterNPC = 15,
    MiniMapIconTypeCarry = 16,
    MiniMapIconTypeCarryBase = 17,
    MiniMapIconTypeDxBattleEnemyObj = 18,
    MiniMapIconTypeMainQuestReport = 19,
    MiniMapIconTypeMainQuestOrder = 20,
    MiniMapIconTypeMainQuestStopping = 21,
    MiniMapIconTypeMainQuestProgress = 22,
    MiniMapIconTypeReleaseSubQuestReport = 23,
    MiniMapIconTypeReleaseSubQuestOrder = 24,
    MiniMapIconTypeReleaseSubQuestStopping = 25,
    MiniMapIconTypeReleaseSubQuestProgress = 26,
    MiniMapIconTypeClassSubQuestReport = 27,
    MiniMapIconTypeClassSubQuestOrder = 28,
    MiniMapIconTypeClassSubQuestStopping = 29,
    MiniMapIconTypeClassSubQuestProgress = 30,
    MiniMapIconTypeSubQuestReport = 31,
    MiniMapIconTypeSubQuestOrder = 32,
    MiniMapIconTypeSubQuestStopping = 33,
    MiniMapIconTypeSubQuestProgress = 34,
    MiniMapIconTypeChallengeQuestNpc = 35,
    MiniMapIconTypeChallengeQuestGimmick = 36,
    MiniMapIconTypeChallengeQuestDestructible = 37,
    MiniMapIconTypeQuestNpc = 38,
    MiniMapIconTypeRaidDungeonGate = 39,
    MiniMapIconTypeDungeonGate = 40,
    MiniMapIconTypeDxBattleNPC = 41,
    MiniMapIconTypePineVillageNPC = 42,
    MiniMapIconTypeDhcNPC = 43,
    MiniMapIconTypeAdventurerRank = 44,
    MiniMapIconTypeWarehouse = 45,
    MiniMapIconTypeSyntheShop = 46,
    MiniMapIconTypeCraft = 47,
    MiniMapIconTypeImagineLaboratory = 48,
    MiniMapIconTypeFangExpedition = 49,
    MiniMapIconTypeBuffNPC = 50,
    MiniMapIconTypeCamp = 51,
    MiniMapIconTypeClimbPoint = 52,
    MiniMapIconTypeUpdraft = 53,
    MiniMapIconTypeTradeShop = 54,
    MiniMapIconTypeArena = 55,
    MiniMapIconTypeAbilityMasteryShop = 56,
    MiniMapIconTypeMemoryStand = 57,
    MiniMapIconTypeAesthe = 58,
    MiniMapIconTypeDyeingShop = 59,
    MiniMapIconTypeItemShop = 60,
    MiniMapIconTypeWeaponShop = 61,
    MiniMapIconTypeGuild = 62,
    MiniMapIconTypeRankingBoard = 63,
    MiniMapIconTypeBuffNPCInvalid = 64,
    MiniMapIconTypeFishing = 65,
    MiniMapIconTypeIntrruptQuest = 66,
    MiniMapIconTypeZoneBorder = 67,
    MiniMapIconTypeMapName = 68,
    MiniMapIconTypeQuestArea = 69,
    MiniMapIconTypeCloud = 70,
    MiniMapIconTypeRegionIcon = 71,
    MiniMapIconTypeBase = 72,
    MiniMapIconTypeNum = 73,
    ESBMiniMapIconType_MAX = 74,
};

enum class ESBMissionQuestItemType {
    NONE = 0,
    LUNO = 1,
    GC = 2,
    ITEM = 3,
    WEAPON = 4,
    COSTUME = 5,
    BATTLE_IMAGINE = 6,
    INNER_IMAGINE = 7,
    MOUNT_IMAGINE = 8,
    EMOTE = 9,
    STAMP = 10,
    IMAGINE_RECIPE = 11,
    BONUS_SKILL_POINT = 12,
    CLASS_SKILL_POINT = 13,
    ACHIEVEMENT = 14,
    LIQUID_MEMORY = 15,
    COIN = 16,
    CURRENCY = 17,
    TOKEN = 18,
    CRAFT_MACHINE_RECIPE = 19,
    ITEM_BOX = 20,
    WEAPON_DECORATION_STICKER = 21,
    SEASON_RANK_POINT = 22,
    STAMPS_CATEGORY = 23,
    EQUIPMENT_SERIES = 24,
    ESBMissionQuestItemType_MAX = 25,
};

enum class ESBMissionQuestPlaceType {
    None = 0,
    EventShop = 1,
    WeaponShop = 2,
    ItemShop = 3,
    ESBMissionQuestPlaceType_MAX = 4,
};

enum class ESBMissionQuestType {
    None = 0,
    Designated_ClassLevelUp = 1,
    ClassChangeCount = 2,
    ClassChange = 3,
    GetCount = 4,
    ItemGet = 5,
    Equip = 6,
    ItemUse = 7,
    Forge = 8,
    Fusion = 9,
    Smelting = 10,
    WeaponChange = 11,
    WeaponImagineSmelting = 12,
    Staining = 13,
    Mount = 14,
    Claft = 15,
    QuestAccepted = 16,
    QuestClear = 17,
    SubQuestCompleted = 18,
    QuestCompleted = 19,
    EnemySubjugation = 20,
    MissionJoin = 21,
    MissionClear = 22,
    MissionCompleted = 23,
    DominateField = 24,
    Designated_GameModeMissionJoin = 25,
    Designated_GameModeMissionClear = 26,
    SkillRelease = 27,
    SkillLevelUp = 28,
    SkillEquip = 29,
    StorageSkilEntry = 30,
    StorageChack = 31,
    Resuscitation = 32,
    TreasureGet = 33,
    Gather = 34,
    BattleScoreAchievement = 35,
    AdventurerRankAchievement = 36,
    AdventurerCardSend = 37,
    WishListEntry = 38,
    TermJoin = 39,
    PartyJoin = 40,
    CostumeChange = 41,
    AutoMessegeSet = 42,
    AutoGestureSet = 43,
    ProfileCommentSet = 44,
    FacilityIn = 45,
    AchievementSet = 46,
    RankingBoardCheck = 47,
    Logine = 48,
    BufNpc = 49,
    AbilityGet = 50,
    WarehouseAbilityUse = 51,
    E_EggClear = 52,
    Designated_MissionClear = 53,
    Designated_MissionClear_Class = 54,
    ItemConsumption = 55,
    DailyQuestClearCount = 56,
    WeeklyQuestClearCount = 57,
    DailyQuestAllClear = 58,
    WeeklyQuestAllClear = 59,
    SoloBattle = 60,
    MissionBestScore = 61,
    DesignatedEquipment_Mission = 62,
    NoneBadStatus_Mission = 63,
    Designated_Taken_DumagePointUnder_Mission = 64,
    Designated_Taken_DumageCountUnder_Mission = 65,
    Designated_RemainingTime_Mission = 66,
    Designated_DeadCountUnder_Mission = 67,
    Designated_ElementBurstCount_Mission = 68,
    Designated_ElementBurstTotalCount_Mission = 69,
    Designated_BatStatusCount_Mission = 70,
    Designated_BatStatusTotalCount_Mission = 71,
    Designated_Damege_Mission = 72,
    Designated_TotalDamege_Mission = 73,
    Dummy_74 = 74,
    Dummy_75 = 75,
    Designated_CriticalCount_Mission = 76,
    Designated_CriticalTotalCount_Mission = 77,
    Designated_CriticalDamage_Mission = 78,
    Designated_CriticalTotalDamage_Mission = 79,
    SpecifiedSkillUse_Mission = 80,
    SpecifiedSkillTotalUse_Mission = 81,
    JustAvoidanceCount_Mission = 82,
    JustAvoidanceTotalCount_Mission = 83,
    GetTreasureBoxCount_Mission = 84,
    GetTreasureBoxTotalCount_Mission = 85,
    ExplosiveBarrelBreakCount_Mission = 86,
    ExplosiveBarrelBreakTotalCount_Mission = 87,
    SupplierUseTotal_Mission = 88,
    SupplierUseTotalCount_Mission = 89,
    DestructibleObjectBreak_Mission = 90,
    DestructibleObjectTotalBreak_Mission = 91,
    LiquidMemoryOneStock = 92,
    LiquidMemoryUse = 93,
    NpcTalkCount = 94,
    Dummy_95 = 95,
    WarehouseAbilityGet = 96,
    MoneyUse = 97,
    ElementBurstCount = 98,
    BadStatusCount = 99,
    SpecifiedDamagePoint = 100,
    JustAvoidanceCount = 101,
    EquipStackBCount = 102,
    EquipStackBNum = 103,
    EquipStackBClear_Mission = 104,
    DXBattle_Clear = 105,
    DXBattle_Perfect = 106,
    Designated_EquipStackBCount = 107,
    Designated_EquipStackBNum = 108,
    Designated_EquipStackBClear_Mission = 109,
    FangExpeditionDispatch_Count = 110,
    ShieldGuard_Count = 111,
    EnemySubjugation_Count_CounterAttack = 112,
    ComboGaugeMax_TimeCount_Clear_Mission = 113,
    EnemySubjugation_Count_WeekPoint = 114,
    BuffChargeMax_CureArrow_Count_Mission = 115,
    EnemySubjugation_MeteorInferno_Hit = 116,
    EnemySubjugation_Count_QuickReload_BoostMax = 117,
    CarvedSeal_Count_Mission = 118,
    EnemySubjugation_Count_LeapShot = 119,
    EnemySubjugation_Count_FeverTime = 120,
    EnemySubjugation_Count_JustPerformance_Hit = 121,
    SkillEnemySubjugation = 122,
    SkillUseCount_Mission = 123,
    EnemySubjugation_Cumulative = 124,
    Gather_Cumulative = 125,
    ItemGet_Cumulative = 126,
    MAX = 127,
};

enum ESBMissionType {
    MissionType_Normal = 0,
    MissionType_Event = 1,
    MissionType_MAX = 2,
};

enum class ESBMountEffectType {
    Mount_Run = 0,
    Mount_Walk = 1,
    Mount_Wait = 2,
    Mount_Dash = 3,
    Mount_DashStart = 4,
    Default = 5,
    MAX = 6,
};

enum class ESBMouseCursorType {
    Default = 0,
    MapPin = 1,
    MapEraser = 2,
    Max = 3,
};

enum class ESBMoveInputCommandInterval {
    None = 0,
    Short = 1,
    Normal = 2,
    Long = 3,
    ESBMoveInputCommandInterval_MAX = 4,
};

enum class ESBMoveInputDirection {
    None = 0,
    Front = 1,
    Right = 2,
    Left = 3,
    Back = 4,
    Neutral = 5,
    ESBMoveInputDirection_MAX = 6,
};

enum class ESBMovieSceneAkEventSwitchType {
    Character_FloorType = 0,
    Character_Cloth = 1,
    Language = 2,
    ESBMovieSceneAkEventSwitchType_MAX = 3,
};

enum class ESBMovieScenePlayerStatus {
    Stopped = 0,
    Playing = 1,
    Scrubbing = 2,
    Jumping = 3,
    Stepping = 4,
    Paused = 5,
    ESBMovieScenePlayerStatus_MAX = 6,
};

enum class ESBMovieSceneTextWindowGender {
    TWG_None = 0,
    TWG_Male = 1,
    TWG_Female = 2,
    TWG_MAX = 3,
};

enum class ESBMuscleMass {
    Default = 0,
    Low = 1,
    High = 2,
    MAX = 3,
};

enum class ESBNameConventionsType {
    Contains = 0,
    StartsWith = 1,
    EndsWith = 2,
    MatchesWildcard = 3,
    ESBNameConventionsType_MAX = 4,
};

enum class ESBNetworkCafeRewardType {
    REWARD_TYPE_ITEM = 0,
    REWARD_TYPE_TOKEN = 1,
    REWARD_ITEM_TYPE_NUM = 2,
    REWARD_MAX = 3,
};

enum class ESBNgWordTarget {
    All = 0,
    Name = 1,
    Text = 3,
    ESBNgWordTarget_MAX = 4,
};

enum class ESBNpcLaneDirection {
    BothWays = 0,
    LeftToRight = 1,
    RightToLeft = 2,
    ESBNpcLaneDirection_MAX = 3,
};

enum ESBNpcPathFindQueryFlag {
    SearchName = 0,
    SearchTarget = 1,
    SearchDirection = 2,
    ESBNpcPathFindQueryFlag_MAX = 3,
};

enum class ESBNpcSpawnPointCharacterType {
    RandomAppearance = 0,
    CharaCreate = 1,
    ExtraNPC = 2,
    Animal = 3,
    ESBNpcSpawnPointCharacterType_MAX = 4,
};

enum class ESBNpcSpawnPriority {
    Low = 0,
    High = 20,
    OutRange = 100,
    Max = 101,
};

enum class ESBNpcWaitType {
    Wait = 0,
    WaitShift = 1,
    WaitShiftEnd = 2,
    ESBNpcWaitType_MAX = 3,
};

enum class ESBObjectConditionType {
    Daytime = 0,
    Nighttime = 1,
    Alltime = 2,
    ESBObjectConditionType_MAX = 3,
};

enum class ESBOccupiedState {
    None = 0,
    Register = 1,
    Success = 2,
    Failed = 3,
    ESBOccupiedState_MAX = 4,
};

enum class ESBOnlineStatus {
    Online = 0,
    PlayingDemo = 1,
    InParty = 2,
    BuildingParty = 3,
    ApplyingInstance = 4,
    InInstance = 5,
    Busy = 6,
    AFK = 7,
    PlayInterruptQuest = 8,
    Max = 32,
};

enum class ESBOnlineSubsystemType {
    Unknown = 0,
    Session = 1,
    Party = 2,
    Chat = 3,
    Matchmaking = 4,
    Num = 5,
    ESBOnlineSubsystemType_MAX = 6,
};

enum class ESBOperateMode {
    MouseAndKeyboard = 0,
    Gamepad = 1,
    Max = 2,
};

enum class ESBPadKeySkinType {
    XBOX = 0,
    DualShock4 = 1,
    DualSense = 2,
    Max = 2,
};

enum class ESBParabolaMoveType {
    SpawnDirection = 0,
    Degree = 1,
    DirectionDegree = 2,
    ReachHeight = 3,
    ReachTime = 4,
    ESBParabolaMoveType_MAX = 5,
};

enum class ESBPartsConditonLogic {
    AND = 0,
    OR = 1,
    ESBPartsConditonLogic_MAX = 2,
};

enum class ESBPartyChainComboCountLogType {
    None = 0,
    BonusStatus_DotHeal = 1,
    BonusStatus_ReceiveDamageDown = 2,
    BonusStatus_SuperArmor = 3,
    BonusStatus_RecastReductionULT = 4,
    ESBPartyChainComboCountLogType_MAX = 5,
};

enum class ESBPartyChainSettingType {
    Invalid = 0,
    Default = 1,
    RaidBattle = 2,
    DxBattle = 3,
    ESBPartyChainSettingType_MAX = 4,
};

enum class ESBPartySystemTextType {
    Unknown = 0,
    ConfirmInvite = 1,
    InviteSuccess = 2,
    InviteFail = 3,
    InviteCancel = 4,
    InviteReceive = 5,
    ConfirmJoin = 6,
    JoinSuccess = 7,
    JoinFail = 8,
    MemberJoin = 9,
    ConfirmLeave = 10,
    LeaveSuccess = 11,
    LeaveFail = 12,
    MemberExit = 13,
    ConfirmRelease = 14,
    ReleaseSuccess = 15,
    ReleaseFail = 16,
    ReleasedParty = 17,
    ConfirmPromote = 18,
    PromoteSuccess = 19,
    PromoteFail = 20,
    PromotedLeader = 21,
    PromotedMember = 22,
    ConfirmKick = 23,
    KickSuccess = 24,
    KickFail = 25,
    KickedTarget = 26,
    KickedMember = 27,
    InacceptInvite = 28,
    ChannelMigrationReject = 29,
    ChannelMigrationCancel = 30,
    ChannelMigrationForbiddenCommandBlock = 31,
    ChannelMigrationIncompleteSummon = 32,
    ChannelMigrationGameServerNotFound = 33,
    ChannelMigrationRejectByOthersAll = 34,
    ChannelMigrationFailure = 35,
    PartyInviteFail = 36,
    SimplicityPartyGuideMessage = 37,
    SimplicityPartySettingMenu = 38,
    SimplycityPartyChange = 39,
    MemberOffline = 40,
    MemberRejoin = 41,
    RejoinSuccess = 42,
    ChannelMigrationWaitMembers = 43,
    InacceptSimplicityPartyWhileOnMatching = 44,
    ESBPartySystemTextType_MAX = 45,
};

enum class ESBPartyType {
    Persistent = 0,
    Instant = 1,
    Unknown = 2,
    ESBPartyType_MAX = 3,
};

enum class ESBPassiveArtsModifyCategory {
    None = 0,
    STR = 1,
    VIT = 2,
    DEX = 3,
    MND = 4,
    INT = 5,
    BaseStatusAll = 6,
    HP = 7,
    Attack = 8,
    Defense = 9,
    RecoveryPower = 10,
    CriticalRate = 11,
    StaminaMax = 12,
    ConsumeStaminaAtDash = 13,
    ConsumeStaminaAtDodge = 14,
    ConsumeStaminaAtDashAndJump = 15,
    SkillRecastZeroRate = 16,
    SpecialArtsRecast = 17,
    DodgeDistance = 18,
    GiveResurrectionSpeed = 19,
    ResurrectedHP = 20,
    ResurrectTargetHP = 21,
    GiveHealAmount = 22,
    BSK_IncComboGauge = 23,
    BSK_MaxComboGaugeBonus = 24,
    HealTypeItemRecast = 25,
    ItemHPHealAmount = 26,
    AerialGiveDamage = 27,
    WeakPointDamageRate = 28,
    HPRateDamageRate = 29,
    DamageRateByAttackSkillCount = 30,
    DamageHateMagnification = 31,
    MoveSpeedTargeted = 32,
    DamageDownTargeted = 33,
    ElementAttackPower_Fire = 34,
    ElementAttackPower_Ice = 35,
    ElementAttackPower_Thunder = 36,
    ElementAttackPower_Earth = 37,
    ElementAttackPower_Light = 38,
    ElementAttackPower_Darkness = 39,
    ESBPassiveArtsModifyCategory_MAX = 40,
};

enum class ESBPassiveStatusParamCalcType {
    None = 0,
    Add = 1,
    Percent = 2,
    ESBPassiveStatusParamCalcType_MAX = 3,
};

enum class ESBPerceiveLevel {
    Level0 = 0,
    Level1 = 1,
    Level2 = 2,
    Level3 = 3,
    ESBPerceiveLevel_MAX = 4,
};

enum class ESBPerformanceCameraLocationBase {
    None = 0,
    WatchPoint = 1,
    Player = 2,
    ESBPerformanceCameraLocationBase_MAX = 3,
};

enum class ESBPerformanceCameraLocationOffsetRotation {
    None = 0,
    Player = 1,
    WatchLocationDir = 2,
    ESBPerformanceCameraLocationOffsetRotation_MAX = 3,
};

enum class ESBPerformanceCameraPlayType {
    None = 0,
    Immediate = 1,
    Reserve = 2,
    ESBPerformanceCameraPlayType_MAX = 3,
};

enum class ESBPerformanceCameraType {
    Default = 0,
    ULT = 1,
    Enemy = 2,
    ESBPerformanceCameraType_MAX = 3,
};

enum class ESBPerformanceCameraWatchPointBase {
    None = 0,
    Player = 1,
    Target = 2,
    InteractionInfo = 3,
    JointGestureTarget = 4,
    HoldHand = 5,
    MGC_Meteor = 6,
    ESBPerformanceCameraWatchPointBase_MAX = 7,
};

enum class ESBPhotoModeStartState {
    Unknown = 0,
    Interaction = 1,
    CantInput = 2,
    Shielding = 3,
    CanStart = 4,
    MAX = 5,
};

enum class ESBPineVillageLeaguesType {
    AAA = 0,
    AA = 1,
    A = 2,
    B = 3,
    C = 4,
    D = 5,
    E = 6,
    F = 7,
    Num = 8,
    ESBPineVillageLeaguesType_MAX = 9,
};

enum class ESBPlatformId {
    PlatformId_Invalid = 0,
    PlatformId_PC = 1,
    PlatformId_PS5 = 2,
    PlatformId_XBOX = 3,
    PlatformId_Max = 4,
};

enum class ESBPlatformType {
    Pf0 = 0,
    Pf1 = 1,
    Pf2 = 2,
    Pf3 = 3,
    Pf4 = 4,
    Pf5 = 5,
    Pf99 = 99,
    Max = 100,
};

enum class ESBPlayGameMode {
    Unknown = 0,
    Scenario = 1,
    Battle = 2,
    ESBPlayGameMode_MAX = 3,
};

enum class ESBPlayRateSwitch {
    Continue = 0,
    Variable = 1,
    Normal = 2,
    Toggle = 3,
    ESBPlayRateSwitch_MAX = 4,
};

enum class ESBPlayerActiveArtsSlotType {
    Slot1 = 0,
    Slot2 = 1,
    Slot3 = 2,
    Slot4 = 3,
    Slot5 = 4,
    Slot6 = 5,
    Slot7 = 6,
    Slot8 = 7,
    Max = 8,
};

enum class ESBPlayerArtsType {
    Active = 0,
    Passive = 1,
    PassiveCommon = 2,
    Max = 3,
};

enum class ESBPlayerBattlePresetEquipItem {
    Weapon = 0,
    ClassSkill_1 = 1,
    ClassSkill_2 = 2,
    ClassSkill_3 = 3,
    ClassSkill_4 = 4,
    ClassSkill_5 = 5,
    ClassSkill_6 = 6,
    ClassSkill_7 = 7,
    ClassSkill_8 = 8,
    Ability_1 = 9,
    Ability_2 = 10,
    CommonAbility_1 = 11,
    CommonAbility_2 = 12,
    BattleImagen_1 = 13,
    BattleImagen_2 = 14,
    AttachmentHead = 15,
    AttachmentRightArm = 16,
    AttachmentLeftArm = 17,
    AttachmentRightLeg = 18,
    AttachmentLeftLeg = 19,
    Max = 20,
    None = 255,
};

enum class ESBPlayerClassBattleRange {
    None = 0,
    ShortRange = 1,
    LongRange = 2,
    ESBPlayerClassBattleRange_MAX = 3,
};

enum class ESBPlayerClassChangeable {
    Changeable = 0,
    UnChangeable_IsInMission = 1,
    UnChangeable_IsDHCMapParty = 2,
    UnChangeable_IsInBattleMode = 3,
    UnChangeable_IsNotNormalWait = 4,
    UnChangeable_IsAutoRunActive = 5,
    UnChangeable_IsFollowee = 6,
    UnChangeable_IsMounting = 7,
    UnChangeable_IsSwimming = 8,
    UnChangeable_IsNegativeStatus = 9,
    UnChangeable_IsDhcBattle = 10,
    UnChangeable_Error = 11,
    ESBPlayerClassChangeable_MAX = 12,
};

enum class ESBPlayerClassCommonParam {
    None = 0,
    AutoSheatheTime = 1,
    ComboKeepTime = 2,
    ComboCountMax = 3,
    CommandInputTime = 4,
    CommandInputTime_Short = 5,
    CommandInputTime_Long = 6,
    SkillPreInputHoldTime = 7,
    SkillPreInputActiveTime = 8,
    SkillPreInputLaunchWaitTime = 9,
    SkillPreInputMoveDirectionUpdatableTime = 10,
    AimAngleReplicateTime = 11,
    ResurrectionTime = 12,
    ResurrectionSubtractTime = 13,
    ResurrectionMaxHPDecreaseRate = 14,
    ResurrectionMaxHPDecreaseMin = 15,
    RayCheckForPlayerReticle = 16,
    MinMoveInput = 17,
    CityCapsuleRadius = 18,
    SpawnEffectWaitTime = 19,
    DashInputAutoSheatheTime = 20,
    DashStartEffectDashTime = 21,
    ControlCameraByMoveInputTime = 22,
    PerformanceCameraCancelLookInput = 23,
    MashingInputInterval = 24,
    AerialActionTransTimeLimit = 25,
    AerialInputToleranceTime = 26,
    BackHitStunLevel = 27,
    PlayerNumLimitHeightCompressThreshold = 28,
    PlayerNumLimitHeightCompressPower = 29,
    Max = 30,
};

enum class ESBPlayerCostumePresetEquipItem {
    Hat = 0,
    Upper = 1,
    Gloves = 2,
    Lower = 3,
    Shoes = 4,
    Accessory_1 = 5,
    Accessory_2 = 6,
    Accessory_3 = 7,
    Max = 8,
    None = 255,
};

enum class ESBPlayerDamageCollisionTransformType {
    None = 0,
    Stand = 1,
    LieOnGround = 2,
    ESBPlayerDamageCollisionTransformType_MAX = 3,
};

enum class ESBPlayerDungeonStartType {
    RootStart = 0,
    Frontline = 1,
    ModeSpecial = 2,
    ESBPlayerDungeonStartType_MAX = 3,
};

enum class ESBPlayerListStatus {
    Offline = 0,
    OnMission = 1,
    OnParty = 2,
    Online = 3,
    Max = 4,
};

enum class ESBPlayerPassiveArtsSlotType {
    Slot1 = 0,
    Slot2 = 1,
    Slot3 = 2,
    Slot4 = 3,
    Max = 4,
    EquippableLimitNum = 9,
};

enum class ESBPlayerPassiveImagineSlotType {
    Slot1 = 0,
    Slot2 = 1,
    Slot3 = 2,
    Slot4 = 3,
    Slot5 = 4,
    Max = 5,
};

enum class ESBPlayerPresetCarryFilterType {
    ItemBag = 0,
    Storage = 1,
    ESBPlayerPresetCarryFilterType_MAX = 2,
};

enum class ESBPlayerPresetCarryStates {
    NoneCarry = 0,
    ItemBag = 1,
    Storage = 2,
    Max = 3,
};

enum class ESBPlayerPresetEquipItem {
    BatttleWeapon = 0,
    BatttleClassSkill_1 = 1,
    BatttleClassSkill_2 = 2,
    BatttleClassSkill_3 = 3,
    BatttleClassSkill_4 = 4,
    BatttleClassSkill_5 = 5,
    BatttleClassSkill_6 = 6,
    BatttleClassSkill_7 = 7,
    BatttleClassSkill_8 = 8,
    BatttleAbility_1 = 9,
    BatttleAbility_2 = 10,
    BatttleCommonAbility_1 = 11,
    BatttleCommonAbility_2 = 12,
    BatttleBattleImagen_1 = 13,
    BatttleBattleImagen_2 = 14,
    BatttleAttachmentHead = 15,
    BatttleAttachmentRightArm = 16,
    BatttleAttachmentLeftArm = 17,
    BatttleAttachmentRightLeg = 18,
    BatttleAttachmentLeftLeg = 19,
    CostumeHat = 20,
    CostumeUpper = 21,
    CostumeGloves = 22,
    CostumeLower = 23,
    CostumeShoes = 24,
    CostumeAccessory_1 = 25,
    CostumeAccessory_2 = 26,
    CostumeAccessory_3 = 27,
    Max = 28,
    None = 255,
};

enum class ESBPlayerPresetFunction {
    Rename = 0,
    Equip = 1,
    Save = 2,
    Setting = 3,
    Clear = 4,
    TakeOut = 5,
    Max = 6,
};

enum class ESBPlayerPresetType {
    None = 0,
    BattleSet = 1,
    CostumeSet = 2,
    Max = 3,
};

enum class ESBPlayerSkillActionType {
    None = 0,
    MainAction = 1,
    SubAction = 2,
    AerialAction = 3,
    TacticalSkill = 4,
    SpecialSkill = 5,
    DodgeAction = 6,
    ImagineArts = 7,
    EnemyStepJump = 8,
    UkemiAction = 9,
    SkillCancelStep = 10,
    Dummy_1 = 11,
    Dummy_2 = 12,
    ESBPlayerSkillActionType_MAX = 13,
};

enum class ESBPlayerSkillPaletteSide {
    Front = 0,
    Back = 1,
    ESBPlayerSkillPaletteSide_MAX = 2,
};

enum class ESBPlayerStartType {
    Unknown = 0,
    FieldMove = 1,
    WarpPoint = 2,
    DungeonExit = 3,
    LocalWarpPoint = 4,
    EventPoint = 5,
    ESBPlayerStartType_MAX = 6,
};

enum class ESBPlayerStatusTravelType {
    MapTravel = 0,
    SelfRespawn = 1,
    Resurrection = 2,
    FieldDeadRespawn = 3,
    ESBPlayerStatusTravelType_MAX = 4,
};

enum class ESBPlayerTransformCharacter {
    None = 0,
    Nappo = 1,
    ESBPlayerTransformCharacter_MAX = 2,
};

namespace ESBPlayerVisibleLimit {
    enum Type {
        Unlimit = 0,
        Limit_5 = 1,
        Limit_10 = 2,
        Limit_20 = 3,
        Limit_30 = 4,
        Limit_40 = 5,
        Limit_50 = 6,
        ESBPlayerVisibleLimit_MAX = 7,
    };
}

enum class ESBPlayerWalkSpeedType {
    None = 0,
    Walk = 1,
    Run = 2,
    Dash = 3,
    ESBPlayerWalkSpeedType_MAX = 4,
};

enum class ESBPlayerWarpType {
    Unknown = 0,
    PartyMigration = 1,
    Confluence = 2,
    ESBPlayerWarpType_MAX = 3,
};

enum class ESBPreJoinMode {
    Invalid = 0,
    First = 1,
    AnyMap = 2,
    PreviousMap = 3,
    Friend = 4,
    Migration = 5,
    AnyMapKeepLocation = 6,
    JumpTarget = 7,
    RejoinParty = 8,
    ESBPreJoinMode_MAX = 9,
};

enum class ESBPreJoinSessionType {
    First = 0,
    DummyClient = 1,
    ESBPreJoinSessionType_MAX = 2,
};

enum class ESBProfilePublicSettingType {
    All = 0,
    Community = 1,
    Guild = 2,
    Private = 3,
    ESBProfilePublicSettingType_MAX = 4,
};

enum class ESBProjectileBDFRotType {
    Front = 0,
    Back = 1,
    Right = 2,
    Left = 3,
    ESBProjectileBDFRotType_MAX = 4,
};

enum class ESBProjectileBeamDirectingType {
    BeamModule = 0,
    UnitExtend = 1,
    ESBProjectileBeamDirectingType_MAX = 2,
};

enum class ESBProjectileCollisionSpecificGroup {
    None = 0,
    Group01 = 1,
    Group02 = 2,
    Group03 = 3,
    Group04 = 4,
    ESBProjectileCollisionSpecificGroup_MAX = 5,
};

enum class ESBProjectileCollisionSpecificUseType {
    Default = 0,
    UseAsAttackCollision = 1,
    UseAsDamageCollision = 2,
    ESBProjectileCollisionSpecificUseType_MAX = 3,
};

enum class ESBProjectileCompTickType {
    AuthorityOnly = 0,
    ExcludeServer = 1,
    ServerAndClient = 2,
    NotServerAndClient = 3,
    Default = 0,
    ESBProjectileCompTickType_MAX = 4,
};

enum class ESBProjectileEffectVisibleType {
    Battle_Production = 0,
    Battle_MarkerAttack = 1,
    Battle_MarkerHeal = 2,
    Battle_Projectile = 3,
    Battle_ULTProjectile = 4,
    Battle_GimmickProjectile = 5,
    Default = 6,
    MAX = 7,
};

enum class ESBProjectileHitResult {
    Success = 0,
    Success_Simulate = 1,
    Failed = 2,
    Failed_Avoid = 3,
    ESBProjectileHitResult_MAX = 4,
};

enum class ESBProjectileMeshCollisionType {
    Cylinder = 0,
    Custom = 1,
    ESBProjectileMeshCollisionType_MAX = 2,
};

enum class ESBProjectileSplashSize {
    Small = 0,
    Big = 1,
    NONE = 255,
    ESBProjectileSplashSize_MAX = 256,
};

enum class ESBQuest {
    None = 0,
    CheckableNum = 3,
    ESBQuest_MAX = 4,
};

enum class ESBQuestStatusOnClassChange {
    None = 0,
    DifferentClass = 1,
    NotEnoughLevel = 2,
    Both = 3,
    ESBQuestStatusOnClassChange_MAX = 4,
};

enum class ESBRaidBattleBGMType {
    None = 0,
    BeforeBattle = 1,
    Battle = 2,
    ESBRaidBattleBGMType_MAX = 3,
};

enum class ESBRankingTargetType {
    None = 0,
    TimeAtacck = 1,
    ScoreAttack = 2,
    ESBRankingTargetType_MAX = 3,
};

enum class ESBRankingType {
    None = 0,
    Solo = 1,
    Party = 2,
    ESBRankingType_MAX = 3,
};

enum class ESBRarity {
    Common = 0,
    Uncommon = 1,
    Rare = 2,
    Epic = 3,
    Legend = 4,
    Max = 5,
};

enum class ESBRecipeType {
    NONE = 0,
    RECIPE_ITEM = 1,
    RECIPE_WEAPON = 2,
    RECIPE_IMAGINE = 3,
    RECIPE_STORAGE = 4,
    RECIPE_TYPE_NUM = 5,
    ESBRecipeType_MAX = 6,
};

enum class ESBRecoverRewardPlusCountResult {
    Success = 0,
    PreRecoveryCountIsGraterThanOrEqualToUpperLimit = 1,
    NotEnoughTickets = 2,
    UnknownFailure = 3,
    ESBRecoverRewardPlusCountResult_MAX = 4,
};

enum class ESBRequestSpecialSkillReason {
    OK = 0,
    NotOwner = 1,
    NotAuthority = 2,
    NotFullGauge = 3,
    NotHaveBattleComp = 4,
    BadCondition = 5,
    ESBRequestSpecialSkillReason_MAX = 6,
};

enum class ESBResearchTeamStatus {
    Unreleased = 0,
    Available = 1,
    InUse = 2,
    Charging = 3,
    ESBResearchTeamStatus_MAX = 4,
};

enum class ESBResultBGMType {
    None = 0,
    Dungeon = 1,
    InstanceArea = 2,
    RaidBattle = 3,
    Arena = 4,
    UniqueBoss = 5,
    ESBResultBGMType_MAX = 6,
};

enum class ESBRewardBoostFangExpeditionType {
    None = 0,
    Fixed = 1,
    Ratio = 2,
    MAX = 3,
};

enum class ESBRewardBoostResetPattern {
    None = 0,
    Daily = 1,
    MAX = 2,
};

enum class ESBRewardBoostStackBItemType {
    None = 0,
    Weapon = 1,
    BattleImagine = 2,
    InnerImagine = 3,
    Mount = 4,
    MAX = 5,
};

enum class ESBRewardBoostType {
    Mission = 0,
    Collection = 1,
    Storing = 2,
    Production = 3,
    LiquidMemory = 4,
    Token = 5,
    FangExpedition = 6,
    StackB = 7,
    Quest = 8,
    SeasonPass = 9,
    Invalid = 10,
    MAX = 11,
};

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

enum class ESBRewardLotteryGroupsPickType {
    OWN_CLASS = 0,
    OUTSIDE_OWN_CLASS = 1,
    ALL = 2,
    NUM = 3,
    ESBRewardLotteryGroupsPickType_MAX = 4,
};

enum class ESBRewardMethod {
    REWARD_METHOD_FIXED = 0,
    REWARD_METHOD_SELECTION = 1,
    REWARD_METHOD_LOTTERY = 2,
    REWARD_METHOD_LOTTERY_GROUP = 3,
    REWARD_METHOD_NUM = 4,
    REWARD_METHOD_MAX = 5,
};

enum class ESBRewardSetType {
    REWARD_SET_TYPE_NORMAL = 0,
    REWARD_SET_TYPE_FIRST = 1,
    REWARD_SET_TYPE_BOOST = 2,
    REWARD_SET_TYPE_NUM = 3,
    REWARD_SET_TYPE_MAX = 4,
};

enum class ESBRmShopErrorStatus {
    NONE = 0,
    FEATURE_DISABLED = 1,
    FEATURE_DISABLED_SHOP = 2,
    FEATURE_UPDATE = 3,
    UNKNOWN = 4,
    MAX = 5,
};

enum class ESBRmShopMenuType {
    Unknown = 0,
    RoseOrbPurchase = 1,
    RoseOrbShop = 2,
    BpPointExchange = 3,
    BpPointShop = 4,
    Gasya = 5,
    SeasonPassPurchase = 6,
    SeasonPassShop = 7,
    SeasonPassRankPurchase = 8,
    Max = 9,
};

enum class ESBRmShopType {
    BPP_EXCHANGE = 0,
    SEASON_PASS_BUY = 1,
    SEASON_PASS_BUY_RANKUP = 2,
    MAX = 3,
};

enum class ESBRoleRangeType {
    Close = 0,
    Long = 1,
    Max = 2,
};

enum class ESBRoleType {
    None = 0,
    Attacker = 1,
    Defender = 2,
    Supporter = 3,
    Max = 4,
};

enum class ESBRootMotionType {
    Disable = 1,
    Absolute = 2,
    Relative = 4,
    ESBRootMotionType_MAX = 5,
};

enum class ESBRouteGuideArea {
    AreaNONE = 0,
    AreaRED = 1,
    AreaGREEN = 2,
    AreaBLUE = 3,
    AreaALL = 4,
    ESBRouteGuideArea_MAX = 5,
};

enum class ESBRouteGuideDestIdType {
    Auto = 0,
    MiniMapQuestAreaIconInfoDB = 1,
    ESBRouteGuideDestIdType_MAX = 2,
};

enum class ESBSMCSituation {
    Relaxed = 0,
    Combat = 1,
    Misc = 2,
    Flee = 3,
    ESBSMCSituation_MAX = 4,
};

enum class ESBSSLogoPosition {
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3,
    ESBSSLogoPosition_MAX = 4,
};

enum class ESBSTMasterDataType {
    EnemyParamMaster = 0,
    MapInfo = 1,
    ESBSTMasterDataType_MAX = 2,
};

enum ESBSaveGameReturn {
    SB_SAVE_GAME_SUCCESS = 0,
    SB_SAVE_GAME_FAILURE = 1,
    SB_LOAD_GAME_SUCCESS = 2,
    SB_LOAD_GAME_FAILURE = 3,
    SB_LOAD_GAME_SEVERAL_FAILURES = 4,
    SB_MAX = 5,
};

enum class ESBScoreAttackRemainTime {
    Start = 0,
    Over60 = 1,
    Under60 = 2,
    Under30 = 3,
    ESBScoreAttackRemainTime_MAX = 4,
};

enum class ESBScreenShotUtilsProcess {
    None = 0,
    Prepare = 1,
    Prepare2 = 2,
    Normal = 3,
    Upload = 4,
    MAX = 5,
};

enum class ESBScriptStatus {
    None = 0,
    Ready = 1,
    Running = 2,
    ESBScriptStatus_MAX = 3,
};

enum class ESBScriptVariableType {
    Integer = 0,
    Boolean = 1,
    String = 2,
    ESBScriptVariableType_MAX = 3,
};

enum class ESBSeasonPassPlanState {
    Free = 0,
    Subscribed = 1,
    Subscribed1 = 2,
    MAX = 3,
};

enum class ESBSeasonPassPurchaseRewordType {
    UnlockQuest = 0,
    RankUp = 1,
    DailyQuestReload = 2,
    Item = 3,
    MAX = 4,
};

enum class ESBSeasonPassQuestCycleType {
    Daily = 0,
    Weekly = 1,
    Season = 2,
    Bonus = 3,
    MAX = 4,
    Mix = 5,
};

enum class ESBSeasonPassQuestFilterType {
    All = 0,
    Week1 = 1,
    Week2 = 2,
    Week3 = 3,
    Week4 = 4,
    Week5 = 5,
    Week6 = 6,
    Week7 = 7,
    Week8 = 8,
    Week9 = 9,
    Week10 = 10,
    Week11 = 11,
    Week12 = 12,
    Week13 = 13,
    Week14 = 14,
    Week15 = 15,
    Week16 = 16,
    Week17 = 17,
    Week18 = 18,
    Week19 = 19,
    Week20 = 20,
    ESBSeasonPassQuestFilterType_MAX = 21,
};

enum class ESBSeasonPassQuestPlanState {
    OutOfTerm = 0,
    Free = 1,
    Subscribed = 2,
    MAX = 3,
};

enum class ESBSeasonPassQuestType {
    Standard = 0,
    Event = 1,
    MAX = 2,
};

enum class ESBSeasonPassRewardItemState {
    Unachieved = 0,
    Achieved = 1,
    Received = 2,
    MAX = 3,
};

enum class ESBSeasonPassRewardType {
    Free = 0,
    Paid = 1,
    MAX = 2,
};

enum class ESBSendMaterialParamCalcType {
    ElapsedTime = 0,
    ElapsedRate = 1,
    ESBSendMaterialParamCalcType_MAX = 2,
};

enum class ESBSendPartyInvitationRequestCompleteResult {
    Success = 0,
    UnknownFailure = 1,
    InParty = 2,
    BuildingParty = 3,
    PlayingDemo = 4,
    InInstance = 5,
    Busy = 6,
    PlayInterruptQuest = 7,
    ESBSendPartyInvitationRequestCompleteResult_MAX = 8,
};

enum class ESBServerShutDownReason {
    FromAws = 0,
    AutoScaling = 1,
    Unknown = 2,
    ESBServerShutDownReason_MAX = 3,
};

enum class ESBShapeSoundType {
    None = 0,
    Line = 1,
    Circle = 2,
    ESBShapeSoundType_MAX = 3,
};

enum class ESBShieldGuardResult {
    Guard = 0,
    CannotGuard = 1,
    ESBShieldGuardResult_MAX = 2,
};

enum class ESBShortPinType {
    Ground = 0,
    Enemy = 1,
    Player = 2,
    ESBShortPinType_MAX = 3,
};

enum class ESBShortcutRingMode {
    Default = 0,
    Simple = 1,
    ESBShortcutRingMode_MAX = 2,
};

enum class ESBSitTargetSoundType {
    None = 0,
    Hard = 1,
    Wood = 2,
    Plastic = 3,
    Plastic_Light = 4,
    ESBSitTargetSoundType_MAX = 5,
};

enum class ESBSkillAbilityType {
    None = 0,
    Alpha = 1,
    Beta = 2,
    Camma = 3,
    ClassCommon = 100,
    ESBSkillAbilityType_MAX = 101,
};

enum class ESBSkillElementIconType {
    None = 0,
    Fire = 1,
    Ice = 2,
    Thunder = 3,
    Earth = 4,
    Light = 5,
    Darkness = 6,
    ESBSkillElementIconType_MAX = 7,
};

enum class ESBSkillIconBgType {
    None = 0,
    Attack = 1,
    Heal = 2,
    Buf = 3,
    Debuf = 4,
    AttackHeal = 5,
    AttackBuf = 6,
    AttackDebuf = 7,
    HealBuf = 8,
    HealDebuf = 9,
    BufDebuf = 10,
    ESBSkillIconBgType_MAX = 11,
};

namespace ESBSkillMarkerAim {
    enum Type {
        None = 0,
        ReticleFront = 1,
        ReticleFrontDown = 2,
        ReticleHorizontalFrontDown = 3,
        Player = 4,
        PlayerFront = 5,
        PlayerFrontDown = 6,
        TargetDown = 7,
        ESBSkillMarkerAim_MAX = 8,
    };
}

namespace ESBSkillMarkerPlace {
    enum Type {
        None = 0,
        Ground = 1,
        Terrain = 2,
        Air = 3,
        ESBSkillMarkerPlace_MAX = 4,
    };
}

namespace ESBSkillMarkerRange {
    enum Type {
        None = 0,
        Direct = 1,
        Horizontal = 2,
        ESBSkillMarkerRange_MAX = 3,
    };
}

namespace ESBSkillMarkerRayCollision {
    enum Type {
        Terrain = 0,
        Enemy = 1,
        TerrainAndEnemy = 2,
        ESBSkillMarkerRayCollision_MAX = 3,
    };
}

enum class ESBSkillType {
    Main = 0,
    Sub = 1,
    Skill1 = 2,
    Skill2 = 3,
    Skill3 = 4,
    Skill4 = 5,
    Special = 6,
    Dodge = 7,
    Pasive1 = 8,
    Pasive2 = 9,
    Aerial = 10,
    ActiveAbility = 11,
    EnemyStepJump = 12,
    Ukemi = 13,
    SkillCancelStep = 14,
    Dummy_1 = 15,
    Dummy_2 = 16,
    Skill5 = 17,
    Skill6 = 18,
    Skill7 = 19,
    Skill8 = 20,
    Max = 21,
};

enum class ESBSmasherReloadType {
    None = 0,
    FullReload = 1,
    QuickReload = 2,
    PowerReload = 3,
    QuickPowerReload = 4,
    HealBulletReload = 5,
    QuickHealBulletReload = 6,
    ESBSmasherReloadType_MAX = 7,
};

namespace ESBSortFilterSaveType {
    enum Type {
        Recent = 0,
        WeaponLeveling_Material = 1,
        WeaponSynthe_Weapon = 2,
        WeaponSynthe_Item = 3,
        Inventory = 4,
        Storage = 5,
        Equip = 6,
        ItemCraft = 7,
        ImagineCraft = 8,
        MyChara_Weapon = 9,
        MyChara_Costume = 10,
        MyChara_Mount = 11,
        MyChara_BattleImagine = 12,
        MyChara_Attachment = 13,
        MyChara_Accessory = 14,
        BlueProPointExchange = 15,
        Weapon = 16,
        StackB_Weapon = 17,
        StackB_Imagine = 18,
        StackB_MountImagine = 19,
        AlbumListPhoto = 20,
        ESBSortFilterSaveType_MAX = 21,
    };
}

enum class ESBSortType {
    ASC = 0,
    DESC = 1,
    ESBSortType_MAX = 2,
};

enum class ESBSoundDemoState {
    None = 0,
    DemoSt = 1,
    DemoEd = 2,
    SkilSt = 3,
    SkitEd = 4,
    ESBSoundDemoState_MAX = 5,
};

namespace ESBSoundVolumeType {
    enum Type {
        VOLUME_MASTETR = 0,
        VOLUME_SOUNDEFFECT = 1,
        VOLUME_BGM = 2,
        VOLUME_VOICE = 3,
        VOLUME_SYSTEM = 4,
        VOLUME_AMBIENT = 5,
        VOLUME_TYPE_MAX = 6,
        VOLUME_MAX = 7,
    };
}

enum class ESBSpawnFailedProcessType {
    FailToWait = 0,
    FailToNext = 1,
    ESBSpawnFailedProcessType_MAX = 2,
};

enum ESBSpecialCutType {
    SpecialCutType_None = 0,
    SpecialCutType_RankS = 1,
    SpecialCutType_RarityUp = 2,
    SpecialCutType_MAX = 3,
};

enum class ESBStackBEnableType {
    StackB_Disable = 0,
    StackB_Enable_Low = 1,
    StackB_Enable_Full = 2,
    StackB_MAX = 3,
};

enum class ESBStackBItemType {
    Invalid = 0,
    Weapon = 1,
    Battle = 2,
    Inner = 3,
    Mount = 4,
    ESBStackBItemType_MAX = 5,
};

enum class ESBStackBTicketType {
    StackBTicket_Invalid = 0,
    StackBTicket_SuccessRateUp = 1,
    StackBTicket_Alternative = 2,
    StackBTicket_NUM = 3,
    StackBTicket_MAX = 4,
};

enum class ESBStatusAilmentEffectTiming {
    In = 0,
    Override = 1,
    InOrOverride = 2,
    Out = 3,
    ESBStatusAilmentEffectTiming_MAX = 4,
};

enum class ESBStatusAilmentIconCombineCategory {
    None = 0,
    Dummy_1 = 1,
    ESBStatusAilmentIconCombineCategory_MAX = 2,
};

enum class ESBStatusAilmentIconType {
    None = 0,
    FireLv1 = 1,
    FireLv2 = 2,
    FireLv3 = 3,
    IceLv1 = 4,
    IceLv2 = 5,
    IceLv3 = 6,
    ThunderLv1 = 7,
    ThunderLv2 = 8,
    ThunderLv3 = 9,
    EarthLv1 = 10,
    EarthLv2 = 11,
    EarthLv3 = 12,
    LightLv1 = 13,
    LightLv2 = 14,
    LightLv3 = 15,
    DarknessLv1 = 16,
    DarknessLv2 = 17,
    DarknessLv3 = 18,
    Stun = 19,
    Sleep = 20,
    Poison = 21,
    FixTarget = 22,
    Fear = 23,
    Blind = 24,
    NoSkill = 25,
    Stamina0 = 26,
    NoItem = 27,
    Transform = 28,
    Restraint = 29,
    Paralyze = 30,
    Drained = 31,
    Weakness = 32,
    Invincible = 33,
    IncreaseGiveDamage = 34,
    DecreaseGiveDamage = 35,
    IncreaseReceiveDamage = 36,
    DecreaseReceiveDamage = 37,
    Drain = 38,
    SuperArmor = 39,
    HPRegenerate = 40,
    MPRegenerate = 41,
    RapidChargeSpeed = 42,
    SlowChargeSpeed = 43,
    ExpansionSkillRecastTime = 44,
    ReduceSkillRecastTime = 45,
    RepidMoveSpeed = 46,
    SlowMoveSpeed = 47,
    Protection = 48,
    FollowBullet = 49,
    FireAttackPowerUp = 50,
    IceAttackPowerUp = 51,
    ThunderAttackPowerUp = 52,
    EarthAttackPowerUp = 53,
    LightAttackPowerUp = 54,
    DarknessAttackPowerUp = 55,
    FireAttackPowerDown = 56,
    IceAttackPowerDown = 57,
    ThunderAttackPowerDown = 58,
    EarthAttackPowerDown = 59,
    LightAttackPowerDown = 60,
    DarknessAttackPowerDown = 61,
    FireResistUp = 62,
    IceResistUp = 63,
    ThunderResistUp = 64,
    EarthResistUp = 65,
    LightResistUp = 66,
    DarknessResistUp = 67,
    FireResistDown = 68,
    IceResistDown = 69,
    ThunderResistDown = 70,
    EarthResistDown = 71,
    LightResistDown = 72,
    DarknessResistDown = 73,
    StaminaRecoverySpeedUp = 74,
    StaminaRecoverySpeedDown = 75,
    InvalidReceiveAttackOnce = 76,
    ForceCritical = 77,
    Taunt = 78,
    dummy = 79,
    StoneBody = 80,
    WeaknessStance = 81,
    StaminaReduceDown = 82,
    InvalidGeneralBadCondition = 83,
    Player_ThrowingStyle = 84,
    CriticalRateUp = 85,
    ScoreRateUp = 86,
    BerserkMode = 87,
    HunterSpirit = 88,
    HealBullet = 89,
    PrepareStyle = 90,
    Hyoui = 91,
    dummy_2 = 92,
    dummy_3 = 93,
    HatTrick = 94,
    ESBStatusAilmentIconType_MAX = 95,
};

enum class ESBStatusAilmentPlateType {
    Buff = 0,
    Debuff = 1,
    Attribute = 2,
    Regist = 3,
    ESBStatusAilmentPlateType_MAX = 4,
};

enum class ESBStatusAilmentRegisterState {
    None = 0,
    Additional = 1,
    AlternativeAdd = 2,
    Override = 3,
    Count = 4,
    ESBStatusAilmentRegisterState_MAX = 5,
};

enum class ESBStatusProjectileInvoker {
    Invoker = 0,
    Self = 1,
    ESBStatusProjectileInvoker_MAX = 2,
};

enum class ESBStatusProjectileRequestCondition {
    None = 0,
    OnlyPlayerType = 1,
    ExceptPlayerType = 2,
    ESBStatusProjectileRequestCondition_MAX = 3,
};

namespace ESBStorageNumber {
    enum Type {
        Inventory = -1,
        DungeonBag = -4,
        EquipmentBag = -5,
        CharacterStorage = 0,
        AccountStorage = 1,
        Unpossessed = -98,
        Drop = -99,
        ESBStorageNumber_MAX = 2,
    };
}

enum class ESBStunDirection {
    None = 0,
    Down = 1,
    KnockBack = 2,
    Up = 3,
    ESBStunDirection_MAX = 4,
};

enum class ESBStunValueCalculation {
    None = 0,
    Add = 1,
    Override = 2,
    WeakOverride = 3,
    ESBStunValueCalculation_MAX = 4,
};

enum class ESBSystemLogDetailType {
    BattleInfo = 0,
    Stamp = 1,
    Gesture = 2,
    SystemMessage = 3,
    ItemGet = 4,
    LevelUp = 5,
    DamageMessage = 6,
    DamageBonus = 7,
    None = 8,
    ESBSystemLogDetailType_MAX = 9,
};

enum class ESBSystemMessageFlag {
    None = 0,
    PlayerLoggedIn = 1,
    GetItem_Single = 2,
    GetItem_Plural = 3,
    GetItemFailure_InventoryFull = 4,
    HealStation_HealDone = 5,
    GetEmote = 6,
    FailedQuitGame = 7,
    CantOpenDuringDead = 8,
    CantOpenDuringBattle = 9,
    CantOpenDuringAction = 10,
    CantOpenDuringTransform = 11,
    CantStartDungeonDuringDead = 12,
    CantStartDungeonDuringBattle = 13,
    FailedFieldTravel = 14,
    ChatErrorSendTime = 15,
    ChatErrorBan = 16,
    LevelSyncApplied = 17,
    MissionTerminated = 18,
    CantOpenCommandMenu = 19,
    MAX = 20,
};

enum class ESBTSkillStepInputDirection {
    None = 0,
    Front = 1,
    Back = 2,
    Right = 4,
    Left = 8,
    ESBTSkillStepInputDirection_MAX = 9,
};

enum class ESBTargetChangRule {
    NoTargetChange = 0,
    Sequence = 1,
    Ramdom = 2,
    ESBTargetChangRule_MAX = 3,
};

enum class ESBTargetSelectRule {
    OnlyFirstTarget = 0,
    SeqOneFireChangeTarget = 1,
    SeqRapidNumChagneTarget = 2,
    ESBTargetSelectRule_MAX = 3,
};

enum class ESBTelopPlayType {
    TelopPlayType_None = 0,
    TelopPlayType_QuestAccept = 1,
    TelopPlayType_QuestUpdate = 2,
    TelopPlayType_QuestClear = 3,
    TelopPlayType_InterruptQuestAccept = 4,
    TelopPlayType_InterruptQuestClear = 5,
    TelopPlayType_InterruptQuestFailed = 6,
    TelopPlayType_InterruptQuestStepUp = 7,
    TelopPlayType_RaidBattleStart = 8,
    TelopPlayType_RaidBattleClear = 9,
    TelopPlayType_RaidBattleFailed = 10,
    TelopPlayType_ClassLevelUp = 11,
    TelopPlayType_LearningSkill = 12,
    TelopPlayType_AdventureBoardClear = 13,
    TelopPlayType_AdventureBoardGoal = 14,
    TelopPlayType_AdventureBoardComplate = 15,
    TelopPlayType_TowerSurvaivalStart = 16,
    TelopPlayType_ArenaMissionStart = 17,
    TelopPlayType_ArenaMissionSuccess = 18,
    TelopPlayType_ArenaMissionFailed = 19,
    TelopPlayType_TimeOver = 20,
    TelopPlayType_MissionFailed = 21,
    TelopPlayType_MissionFailed_Raid = 22,
    TelopPlayType_MissionFailed_Tower = 23,
    TelopPlayType_Finish = 24,
    TelopPlayType_DungeonClear = 25,
    TelopPlayType_FloorClear = 26,
    TelopPlayType_TowerSurvaivalClear = 27,
    TelopPlayType_MissionClear = 28,
    TelopPlayType_ArenaClear = 29,
    TelopPlayType_ReadyGo = 30,
    TelopPlayType_BattleAreaStart = 31,
    TelopPlayType_BattleAreaClear = 32,
    TelopPlayType_TimeAttackBackToStart = 33,
    TelopPlayType_DxBattleStart = 34,
    TelopPlayType_DxBattleNormalPhase = 35,
    TelopPlayType_DxBattleClear = 36,
    TelopPlayType_DxBattleTimeOverClear = 37,
    TelopPlayType_DxBattleFailed = 38,
    TelopPlayType_DxBattleStartJingle = 39,
    TelopPlayType_DxBattleRest = 40,
    TelopPlayType_DxBattleMidBoss = 41,
    TelopPlayType_DxBattleWallHP = 42,
    TelopPlayType_DxBattleWallHP50 = 43,
    TelopPlayType_DxBattleWallHP20 = 44,
    TelopPlayType_DxBattleWallHP10 = 45,
    TelopPlayType_DxBattleWallHP05 = 46,
    TelopPlayType_DxBattleAttacked = 47,
    TelopPlayType_DxBattleBoss = 48,
    TelopPlayType_DxBattleSupplier = 49,
    TelopPlayType_DxBattleGate = 50,
    TelopPlayType_DxBattleSpawnedEnemy = 51,
    TelopPlayType_DxBattleLastPhase = 52,
    TelopPlayType_SpawnSupplier = 53,
    TelopPlayType_SksBattleRush = 54,
    TelopPlayType_SksBattleMinTelop = 55,
    TelopPlayType_SksBattle30Sec = 56,
    TelopPlayType_HintSwitch = 57,
    TelopPlayType_OpenBarrier = 58,
    TelopPlayType_Proficiency = 59,
    TelopPlayType_EraseBarrier = 60,
    TelopPlayType_DHCBattleNewRecord = 61,
    TelopPlayType_DHCBattleFinish = 62,
    TelopPlayType_SignalLighting = 63,
    TelopPlayType_SignalDoor = 64,
    TelopPlayType_ExpBonus = 65,
    TelopPlayType_SkillReversePallet = 66,
    TelopPlayType_MAX = 67,
};

enum class ESBTelopType {
    TelopType_None = 0,
    TelopType_Type1 = 1,
    TelopType_Type2 = 2,
    TelopType_Type3 = 3,
    TelopType_LevelUp = 4,
    TelopType_InterruptQuestFailed = 5,
    TelopType_GameOver = 6,
    TelopType_Finish = 7,
    TelopType_Clear = 8,
    TelopType_Challenge = 9,
    TelopType_Mission = 10,
    TelopType_ReadyGo = 11,
    TelopType_Normal = 12,
    TelopType_Proficiency = 13,
    TelopType_MAX = 14,
};

enum class ESBTensionTagType {
    None = 0,
    AlwayPartyOK = 1,
    GoToDungeon = 2,
    Busy = 3,
    WelcomeFollow = 4,
    RecruitPTM = 5,
    DoQuest = 6,
    WillHelp = 7,
    RecruitGM = 8,
    NeedHelp = 9,
    SimplycityPartyOn = 10,
    Max = 11,
};

enum class ESBTextIdType {
    Number = 0,
    String = 1,
    ESBTextIdType_MAX = 2,
};

enum class ESBTheaterBGMType {
    Before = 0,
    Playing = 1,
    After = 2,
    ESBTheaterBGMType_MAX = 3,
};

enum class ESBTidalOceanGridPlayInEditor {
    Default = 0,
    HiTide = 1,
    LowTide = 2,
    ESBTidalOceanGridPlayInEditor_MAX = 3,
};

enum class ESBTokenCategory {
    None = 0,
    Event = 1,
    Ticket = 2,
    ESBTokenCategory_MAX = 3,
};

enum class ESBTokenConsumeType {
    INVALID = 0,
    REMOVE_WEAPON_ABILITY = 1,
    RESET_WEAPON_ABILITY = 2,
    PROTECT_WEAPON_ABILITY = 3,
    UNLOCK_WEAPON_ABILITY = 4,
    ESBTokenConsumeType_MAX = 5,
};

enum class ESBTokenDayOfWeek {
    None = 0,
    Sunday = 1,
    Monday = 2,
    Tuesday = 3,
    Wednesday = 4,
    Thursday = 5,
    Friday = 6,
    Saturday = 7,
    ESBTokenDayOfWeek_MAX = 8,
};

enum class ESBTokenEffectType {
    None = 0,
    AddReward = 1,
    AddExp = 2,
    ShortTime = 3,
    Finish = 4,
    Rare = 5,
    MAX = 6,
};

enum class ESBTokenOverflowType {
    None = 0,
    Choice = 1,
    Forced = 2,
    Impossible = 3,
    ESBTokenOverflowType_MAX = 4,
};

enum class ESBTokenPlaceToConsumeType {
    None = 0,
    SkillReset = 1,
    ReviveBattle = 2,
    ExchangeWeaponSkin = 3,
    GloryCoin = 4,
    ChangeTeamName = 5,
    RemoveWeaponAbility = 6,
    ResetWeaponAbilities = 7,
    ResetWeaponAbilitySkip = 8,
    UnlockWeaponAbilitySlot = 9,
    RewardPlusCount = 10,
    RewardPlusTicket = 11,
    ESBTokenPlaceToConsumeType_MAX = 12,
};

enum class ESBTokenPossessionType {
    None = 0,
    Account = 1,
    Character = 2,
    ESBTokenPossessionType_MAX = 3,
};

enum class ESBTokenPurchaseType {
    Free = 0,
    Paid = 1,
    ESBTokenPurchaseType_MAX = 2,
};

enum class ESBTokenRecoveryType {
    None = 0,
    Daily = 1,
    Weekly = 2,
    Monthly = 3,
    Time = 4,
    ESBTokenRecoveryType_MAX = 5,
};

enum class ESBTransition_IsElementalBurstWithChanceTimeAutoSettingType {
    None = 0,
    ElementalBurstStart = 1,
    ElementalBurstFinish = 2,
    ESBTransition_MAX = 3,
};

enum class ESBTreasureBoxLotResult {
    Success = 0,
    InternalError = 1,
    InvalidData = 2,
    ItemStorageSizeOver = 3,
    InvalidObjectId = 4,
    CantLootObjectId = 5,
    InvalidMasterTreasureID = 6,
    TresureLotNoLot = 7,
    NotFoundObjectIsServerActor = 8,
    NotAuthor = 9,
    NotServer = 10,
    NotPlayer = 11,
    NotPlayerState = 12,
    CantInteractReach = 13,
    InvalidMasterData0 = 14,
    InvalidMasterData1 = 15,
    InvalidMasterData2 = 16,
    InvalidMasterData3 = 17,
    InvalidMasterTreasure = 18,
    ProcessingFieldActor = 19,
    InvalidMasterDataByItemAndWeapon = 20,
    InternalErrorByDBAccess0 = 21,
    InternalErrorByDBAccess1 = 22,
    InternalErrorByDBAccess2 = 23,
    TresureLotFuncError = 24,
    NotFoundSpawnObjectId = 25,
    ESBTreasureBoxLotResult_MAX = 26,
};

enum class ESBTreasureBoxRarity {
    NotUse = 0,
    Silver = 1,
    Random = 2,
    Gorgeous = 3,
    Reserved0 = 4,
    Reserved1 = 5,
    Reserved2 = 6,
    Event = 7,
    Reserved3 = 8,
    Reserved4 = 9,
    Plant = 10,
    Mineral = 11,
    Aquatic = 12,
    AnyGatherPoint = 13,
    ESBTreasureBoxRarity_MAX = 14,
};

enum class ESBTreasureBoxRewardType {
    Money = 0,
    GC = 1,
    Exp = 2,
    Item = 3,
    Weapon = 4,
    Costume = 5,
    Imagine = 6,
    Mount = 7,
    MissionCoin = 8,
    Emote = 9,
    Stamp = 10,
    ImagineRecipe = 11,
    BonusSkillPoint = 12,
    ClassSkillPoint = 13,
    Achievement = 14,
    LiquidMemory = 15,
    Blank01 = 16,
    Coin = 17,
    FreeCurrency = 18,
    Token = 19,
    CraftMachineRecipe = 20,
    ItemBox = 21,
    WeaponDecorationSticker = 22,
    SeasonRankPoint = 23,
    SeasonRewardSpecial = 24,
    StampCategory = 25,
    UserAuthrizationCoupon = 26,
    CraftRecipeSet = 27,
    AdventureBoard = 28,
    StorageExpansionTicket = 29,
    WareHouseAbility = 30,
    TacticalAbility = 31,
    TacticalAbilityBeta = 32,
    Lottery = 33,
    ESBTreasureBoxRewardType_MAX = 34,
};

enum class ESBTurnPlayerActorDirection {
    None = 0,
    Left = 1,
    Right = 2,
    ESBTurnPlayerActorDirection_MAX = 3,
};

enum class ESBTurnPlayerActorType {
    None = 0,
    UnsheatheMove = 1,
    CurveMove = 2,
    Camera = 3,
    CameraBySpecialKey = 4,
    TargetComponent = 5,
    LockonTargetComponent = 6,
    Location = 7,
    SkillMarker = 8,
    InteractionTarget = 9,
    EmoteTarget = 10,
    JointGestureTarget = 11,
    GuardDirection = 12,
    MoveInput = 13,
    RBL_ShieldDash = 14,
    ESBTurnPlayerActorType_MAX = 15,
};

enum class ESBTutorialHelpCategoryType {
    None = 0,
    Control = 1,
    Character = 2,
    Equip = 3,
    Battle = 4,
    City = 5,
    Field = 6,
    Mission = 7,
    Quest = 8,
    Party = 9,
    Communication = 10,
    Team = 11,
    Shop = 12,
    Advice = 13,
    Other = 14,
    ESBTutorialHelpCategoryType_MAX = 15,
};

enum class ESBTutorialHelpTextDispType {
    None = 0,
    Top = 1,
    Bottom = 2,
    ESBTutorialHelpTextDispType_MAX = 3,
};

enum class ESBUIBlockerType {
    Default = 0,
    CommandMenu = 1,
    MAX = 2,
};

enum class ESBUIKeyConfigAction {
    Unknown = 0,
    MainAction = 1,
    SubAction = 2,
    LeftSkill = 3,
    RightSkill = 4,
    Skill1 = 5,
    Skill2 = 6,
    Skill3 = 7,
    Skill4 = 8,
    SpecialSkill = 9,
    Jump = 10,
    Dodge = 11,
    Dash = 12,
    Interaction = 13,
    Reload = 14,
    CameraReset = 15,
    CommandMenu = 16,
    ChatMode = 17,
    LockOn = 18,
    LockOnLeft = 19,
    LockOnRight = 20,
    ImagineArts = 21,
    ImagineArts2 = 22,
    ImagineMount = 23,
    MoveFront = 24,
    MoveBack = 25,
    MoveLeft = 26,
    MoveRight = 27,
    Walk = 28,
    OrientToCamera = 29,
    CameraPitchUp = 30,
    CameraPitchDown = 31,
    CameraYawLeft = 32,
    CameraYawRight = 33,
    CameraZoomIn = 34,
    CameraZoomOut = 35,
    ShortcutRingExeF5 = 36,
    ShortcutRingExeF6 = 37,
    ShortcutRingExeF7 = 38,
    ShortcutRingExeF8 = 39,
    ShortcutRingExeF9 = 40,
    ShortcutRingExeF10 = 41,
    ShortcutRingExeF11 = 42,
    ShortcutRingExeF12 = 43,
    ShortcutExec = 44,
    ShortcutMoveLeft = 45,
    ShortcutMoveRight = 46,
    ShortcutPageNext = 47,
    ShortcutPageBack = 48,
    Function = 49,
    Function2 = 50,
    QuickAccess_MyCharacter = 51,
    QuickAccess_Inventory = 52,
    QuickAccess_Quest = 53,
    QuickAccess_Map = 54,
    QuickAccess_Library = 55,
    QuickAccess_Contents = 56,
    QuickAccess_Party = 57,
    QuickAccess_Guild = 58,
    QuickAccess_Gacha = 59,
    QuickAccess_Option = 60,
    QuickAccess_Photo = 61,
    QuickAccess_Hud = 62,
    QuickAccess_Communicate = 63,
    AutoRun = 64,
    SupplyShortcut1 = 65,
    SupplyShortcut2 = 66,
    SupplyShortcut3 = 67,
    SupplyShortcut4 = 68,
    ShortcutRing = 69,
    ShortcutRing2 = 70,
    WholeMap = 71,
    Screenshot = 72,
    BookMarkRegist = 73,
    BookMark1 = 74,
    BookMark2 = 75,
    BookMark3 = 76,
    BookMark4 = 77,
    BookMark5 = 78,
    BookMark6 = 79,
    BookMark7 = 80,
    BookMark8 = 81,
    BookMark9 = 82,
    BookMark10 = 83,
    BookMark11 = 84,
    BookMark12 = 85,
    BookMark13 = 86,
    BookMark14 = 87,
    BookMark15 = 88,
    BookMark16 = 89,
    BookMark17 = 90,
    BookMark18 = 91,
    BookMark19 = 92,
    BookMark20 = 93,
    BookMark21 = 94,
    BookMark22 = 95,
    BookMark23 = 96,
    BookMark24 = 97,
    Pushpin = 98,
    PhotoMode = 99,
    QuestHudChange = 100,
    KeyGuide = 101,
    SkillPaletteChange = 102,
    NowParty = 103,
    ContentAction1 = 104,
    ContentAction2 = 105,
    KeyConfigActionMax = 106,
    ESBUIKeyConfigAction_MAX = 107,
};

enum class ESBUIType {
    DamageUI = 0,
    TargetCursor = 1,
    NamePlate = 2,
    BalloonWindow = 3,
    BattleHUD = 4,
    PlayerGauge = 5,
    SkillPalette = 6,
    MiniMap = 7,
    ChatWindow = 8,
    AcceptedQuest = 9,
    TutorialCtrlGuide = 10,
    LevelUpDisplay = 11,
    StepList = 12,
    PlaceGuide = 13,
    PlaceGuideDemo = 14,
    TickerMessage = 15,
    TextWindow = 16,
    SelectWindow = 17,
    DungeonFinder = 18,
    QuestUpdateProgressInfo = 19,
    QuestClearInfo = 20,
    QuestBoard = 21,
    DungeonResult = 22,
    MainMenu = 23,
    PlayerAim = 24,
    P006HUD = 25,
    P007HUD = 26,
    P011HUD = 27,
    P012HUD = 28,
    P019HUD = 29,
    P020HUD = 30,
    P021HUD = 31,
    HealChainUI = 32,
    PhotoMode = 33,
    PhotoPlayerControlMode = 34,
    EngramCannon = 35,
    DebugMenu = 36,
    DebugCameraAdjust = 37,
    DebugCameraRotationSpeed = 38,
    Num = 39,
    ESBUIType_MAX = 40,
};

enum ESBUIVisibleSettingOwner {
    DebugMenu = 0,
    WarpAroundEffect = 1,
    ULTSkill = 2,
    DhcBattleHUD = 3,
    ESBUIVisibleSettingOwner_MAX = 4,
};

enum class ESBUiAkEventCategory {
    Default = 0,
    Positive = 1,
    Negative = 2,
    Max = 3,
};

enum class ESBUseCheckDialogType {
    WeaponSynthe_Fusion = 0,
    StackB_Weapon = 1,
    StackB_Imagine = 2,
    StackB_Fang = 3,
    MAX = 4,
};

enum class ESBUserPrivileges {
    CanPlay = 0,
    CanPlayOnline = 1,
    CanCommunicateOnline = 2,
    CanUseUserGeneratedContent = 3,
    CanUserCrossPlay = 4,
    CanGameDvr = 5,
    ESBUserPrivileges_MAX = 6,
};

enum class ESBUtilityScoreFunction {
    Linear = 0,
    Step = 1,
    ESBUtilityScoreFunction_MAX = 2,
};

enum class ESBUtilityScoreOperator {
    Min = 0,
    Max = 1,
    Average = 2,
};

enum class ESBVirtualDateTimeParam {
    Now_Year = 0,
    Now_Month = 1,
    Now_Day = 2,
    Now_Hour = 3,
    Now_Minute = 4,
    Now_Second = 5,
    Vtl_Year = 6,
    Vtl_Month = 7,
    Vtl_Day = 8,
    Vtl_Hour = 9,
    Vtl_Minute = 10,
    Vtl_Second = 11,
    Vts_Year = 12,
    Vts_Month = 13,
    Vts_Day = 14,
    Vts_Hour = 15,
    Vts_Minute = 16,
    Vts_Second = 17,
    ESBVirtualDateTimeParam_MAX = 18,
};

enum class ESBWarehouseAbilityCategory {
    Material = 0,
    Zone = 1,
    Mission = 2,
    Other = 3,
    Event = 4,
    ESBWarehouseAbilityCategory_MAX = 5,
};

enum class ESBWarehouseAbilityCharacterStatus {
    Hidden = 0,
    PreconditionCleared = 1,
    Published = 2,
    ConditionsCleared = 3,
    Mastered = 4,
    ESBWarehouseAbilityCharacterStatus_MAX = 5,
};

enum class ESBWarehouseAbilityConditionType {
    ObtainedItem = 0,
    ObtainedWeapon = 1,
    ObtainedCostume = 2,
    ObtainedImagine = 3,
    ObtainedMount = 4,
    AbilityRecipeAcquired = 5,
    AbilityRecipeMastered = 6,
    ReachedAdventurerRank = 7,
    ReachedClassLevel = 8,
    DefeatedEnemy = 9,
    ZoneTraversed = 10,
    MissionReleased = 11,
    MissionCleared = 12,
    QuestClearFlagAchieved = 13,
    ESBWarehouseAbilityConditionType_MAX = 14,
};

enum class ESBWarehouseAbilityProductionType {
    Craft = 0,
    ImagineCraft = 1,
    WeaponRefining = 2,
    ImagineRefining = 3,
    WeaponFusion = 4,
    Invalid = 5,
    MAX = 6,
};

enum ESBWeaponAttach {
    WA_Right = 0,
    WA_Left = 1,
    WA_Custom0 = 2,
    WA_Custom1 = 3,
    WA_Custom2 = 4,
    WA_Custom3 = 5,
    WA_Custom4 = 6,
    WA_Custom5 = 7,
    WA_Num = 8,
    WA_Invalid = 255,
    WA_MAX = 256,
};

enum ESBWeaponComponentType {
    WeaponComponentType_Bow = 0,
    WeaponComponentType_Shine = 1,
    WeaponComponentType_BallHammer = 2,
    WeaponComponentType_Bend = 3,
    WeaponComponentType_FishingRod = 4,
    WeaponComponentType_MAX = 5,
};

enum ESBWeaponEquipType {
    WeaponEquipType_None = 0,
    WeaponEquipType_Main = 1,
    WeaponEquipType_Sub = 2,
    WeaponEquipType_FishingRod = 3,
    WeaponEquipType_MAX = 4,
};

enum class ESBWeaponHiddenConditions {
    WHC_OwnerInvalid = 0,
    WHC_OwnerHidden = 1,
    WHC_GuardBreak = 2,
    WHC_LargeShield = 3,
    WHC_Demo = 4,
    WHC_QuestEvent = 5,
    WHC_Option = 6,
    WHC_Option_Fishing = 7,
    WHC_Notify = 8,
    WHC_Num = 9,
    WHC_MAX = 10,
};

enum ESBWeaponShapeType {
    WeaponShapeType_None = 0,
    WeaponShapeType_Cutlery = 1,
    WeaponShapeType_Blunt = 2,
    WeaponShapeType_MAX = 3,
};

enum class ESBWeaponStatus {
    AP = 0,
    CP = 1,
    STR = 2,
    VIT = 3,
    DEX = 4,
    INT = 5,
    MND = 6,
    ATTR = 7,
    SPC = 8,
    Max = 9,
};

enum ESBWeaponType {
    WeaponType_None = 0,
    WeaponType_HandAxe = 1,
    WeaponType_HandSword = 2,
    WeaponType_HandGun = 3,
    WeaponType_Rifle = 4,
    WeaponType_Spear = 5,
    WeaponType_Bow = 6,
    WeaponType_Staff = 7,
    WeaponType_Shield = 8,
    WeaponType_Club = 9,
    WeaponType_CannonSword = 10,
    WeaponType_BallHammer = 11,
    Dummy_0 = 12,
    ESBWeaponType_MAX = 13,
};

enum class ESBWeaponVisibilitySlot {
    WVSlot_All = 255,
    WVSlot_Right = 1,
    WVSlot_Left = 2,
    WVSlot_Both = 3,
    WVSlot_SheathedShield = 8,
    WVSlot_Other = 244,
    WVSlot_None = 0,
    WVSlot_MAX = 256,
};

enum class ESBWeaponVisibleType {
    AlwaysVisible = 0,
    CityOnly = 1,
    FieldOnly = 2,
    NotVisible = 3,
    ESBWeaponVisibleType_MAX = 4,
};

enum class ESBWeekChangeDayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    ESBWeekChangeDayOfWeek_MAX = 7,
};

enum class ESBWishListType {
    None = 0,
    ItemCraft = 1,
    ImagineCraft = 2,
    Quest = 3,
    WarehouseAbility = 4,
    ESBWishListType_MAX = 5,
};

enum class ESBWorldUIType {
    NormalBattle = 0,
    OfflineBattle = 1,
    ShadowAvatarBattle = 2,
    Unknown = 3,
    Max = 4,
};

enum class ESelfDeadEffectSpawnRotType {
    None = 0,
    ProjectileDir = 1,
    TargetDir = 2,
    ESelfDeadEffectSpawnRotType_MAX = 3,
};

enum class ESendSecondPasswordRole {
    Activate = 0,
    Delete = 1,
    ESendSecondPasswordRole_MAX = 2,
};

enum class ESenseChangerType {
    AddSensor = 0,
    Cross = 1,
    VolumeOnly = 2,
    ESenseChangerType_MAX = 3,
};

enum class ESerialCodeRewardType {
    Money = 0,
    Engram = 1,
    Item = 2,
    Weapon = 3,
    Costume = 4,
    ESerialCodeRewardType_MAX = 5,
};

enum class ESerialCodeType {
    AllOnce = 0,
    OnlyOnce = 1,
    ESerialCodeType_MAX = 2,
};

enum class EShopType {
    Item = 0,
    Weapon = 1,
    Exchange = 2,
    TAbiliry = 3,
    EShopType_MAX = 4,
};

enum class EShortcutIconCommandID {
    BookMark1 = 0,
    BookMark2 = 1,
    BookMark3 = 2,
    BookMark4 = 3,
    BookMark5 = 4,
    BookMark6 = 5,
    BookMark7 = 6,
    BookMark8 = 7,
    BookMark9 = 8,
    BookMark10 = 9,
    BookMark11 = 10,
    BookMark12 = 11,
    BookMark13 = 12,
    BookMark14 = 13,
    BookMark15 = 14,
    BookMark16 = 15,
    BookMark17 = 16,
    BookMark18 = 17,
    BookMark19 = 18,
    BookMark20 = 19,
    BookMark21 = 20,
    BookMark22 = 21,
    BookMark23 = 22,
    BookMark24 = 23,
    MyCharacter = 24,
    Inventory = 25,
    Quest = 26,
    AdventureBoard = 27,
    Map = 28,
    Communicate = 29,
    Friend = 30,
    Library = 31,
    SeasonPass = 32,
    Mail = 33,
    Contents = 34,
    Party = 35,
    Guild = 36,
    Option = 37,
    RmShop = 38,
    EShortcutIconCommandID_MAX = 39,
};

enum class EShortcutIconType {
    F1 = 0,
    F2 = 1,
    F3 = 2,
    F4 = 3,
    F5 = 4,
    F6 = 5,
    F7 = 6,
    F8 = 7,
    Num = 8,
    EShortcutIconType_MAX = 9,
};

enum class EShortcutRingEditFilterType {
    All = 0,
    InPosession = 1,
    EShortcutRingEditFilterType_MAX = 2,
};

enum class EShortcutType {
    None = 0,
    OwnItem = 1,
    Imagine = 2,
    Emotion = 3,
    Stamp = 4,
    Supply = 5,
    FixedPhrase = 6,
    Command = 7,
    Warp = 8,
    EShortcutType_MAX = 9,
};

enum class ESimpleAlertType {
    None = 0,
    NotEnoughStamina = 1,
    Recasting = 2,
    NotRemainCount = 3,
    NoBullet = 4,
    NotEnoughShieldDurability = 5,
    NotEnoughMagicPoint = 6,
    InvalidMarkerLocation = 7,
    ShieldIsBroken = 8,
    CanUseSkillOnlyOnGround = 9,
    MountNotUseLocation = 10,
    CannotUseSkillByBattleStatus = 11,
    Max = 12,
};

enum class ESkillActionPosition {
    SAP_Main = 0,
    SAP_Sub = 1,
    SAP_Aerial = 2,
    SAP_Skill1 = 3,
    SAP_Skill2 = 4,
    SAP_Skill3 = 5,
    SAP_Skill4 = 6,
    SAP_Skill5 = 7,
    SAP_Skill6 = 8,
    SAP_Skill7 = 9,
    SAP_Skill8 = 10,
    SAP_Special = 11,
    SAP_Dodge = 12,
    SAP_ImagineArts = 13,
    SAP_ImagineArts2 = 14,
    SAP_ImagineMount = 15,
    SAP_EnemyStepJump = 16,
    SAP_Ukemi = 17,
    SAP_SkillCancelStep = 18,
    SAP_Dummy_0 = 19,
    SAP_Dummy_1 = 20,
    SAP_Dummy_2 = 21,
    SAP_Num = 22,
    Begin = 0,
    End = 21,
    ESkillActionPosition_MAX = 23,
};

enum class ESkillTreeAbilityType {
    None = 0,
    Base = 1,
    Alpha = 2,
    Beta = 3,
    Camma = 4,
    MAX = 5,
};

enum class ESkillTreeHorizonBranchType {
    Upper = 0,
    Central = 1,
    None = 2,
    MAX = 3,
};

enum class ESkillTreeIconPutType {
    Single = 0,
    Double = 1,
    Alternative = 2,
    MAX = 3,
};

enum class ESkyBlueSecondPasswordStatus {
    NoAuthenticationRequired = 0,
    RegistrationRequired = 1,
    NotAuthenticated = 2,
    Authenticated = 3,
    Expired = 4,
    CharactersCanBeDeleted = 5,
    Unknown = 6,
    ESkyBlueSecondPasswordStatus_MAX = 7,
};

enum class ESpawnRotType {
    FaceTarget = 0,
    SameOwner = 1,
    SameSocket = 2,
    InheritanceSpawnPos = 3,
    AttackDirection = 4,
    Up = 5,
    Down = 6,
    None = 7,
    ESpawnRotType_MAX = 8,
};

enum class ESpawnType {
    ActorSocket = 0,
    ActorRoot = 1,
    ActorRootOffsetScreenView = 2,
    SpawnerSocket = 3,
    SpawnerRootOffsetPosOnDir = 4,
    SpawnerRoot = 5,
    FoundationCharacterRoot = 6,
    WeaponSocket = 7,
    WeaponSocketL = 8,
    WeaponRoot = 9,
    TargetCompOffsetPosOnDir = 10,
    TargetComponent = 11,
    TargetPoint = 12,
    BySystem = 13,
    ESpawnType_MAX = 14,
};

enum class ESpawnedBuddyResult {
    Success = 0,
    BuddyAlreadyExist = 1,
    InvalidPlayerCharacter = 2,
    InvalidGameState = 3,
    InvalidEnemySpawner = 4,
    InvalidSpawnedBuddy = 5,
    AnotherError = 6,
    ESpawnedBuddyResult_MAX = 7,
};

enum class EStaminaType {
    None = 0,
    Jump = 1,
    Dash = 2,
    Num = 3,
    EStaminaType_MAX = 4,
};

enum class EStatusAilmentDuplicateType {
    Default = 0,
    Count = 1,
    InvokerAlternativeAdd = 2,
    Additional = 3,
    EStatusAilmentDuplicateType_MAX = 4,
};

enum class EStatusTargetSide {
    All = 0,
    OnlyHostile = 1,
    OnlyFriend = 2,
    EStatusTargetSide_MAX = 3,
};

enum class EStorageApiType {
    UseItems = 0,
    ConsumeItems = 1,
    DropItems = 2,
    MoveItems = 3,
    UseExpItems = 4,
    EStorageApiType_MAX = 5,
};

enum class ESubMenuTermReason {
    SwitchMenu = 0,
    Close = 1,
    ESubMenuTermReason_MAX = 2,
};

enum class ESubMenuTermRequestReply {
    Immediate = 0,
    Wait = 1,
    Never = 2,
    ESubMenuTermRequestReply_MAX = 3,
};

enum class ESystemSE {
    None = 0,
    Play_Sys_Config_mst = 1,
    Play_Sys_Config_bgm = 2,
    Play_Sys_Config_se = 3,
    Play_Sys_Config_vo = 4,
    Play_Sys_Config_sys = 5,
    Play_Sys_Config_env = 6,
    Play_Sys_Title_Start = 7,
    Play_Sys_ok_1_Small = 8,
    Play_Sys_ok_1 = 9,
    Play_Sys_ok_2 = 10,
    Play_Sys_hover = 11,
    Play_Sys_cancel = 12,
    Play_Sys_caution = 13,
    Play_Sys_forward = 14,
    Play_Sys_back = 15,
    Play_Sys_interact = 16,
    Play_Sys_open = 17,
    Play_Sys_count = 18,
    Play_Sys_alert = 19,
    Play_Sys_trade = 20,
    Play_Sys_countdown = 21,
    Play_Sys_warp_release = 22,
    Play_Sys_warp = 23,
    Play_Sys_warp_local = 24,
    Play_Sys_equip = 25,
    Play_Sys_imagine = 26,
    Play_Sys_revive = 27,
    Play_Sys_collect = 28,
    Play_Sys_recover = 29,
    Play_Sys_reward = 30,
    Play_Sys_speech = 31,
    Play_Sys_weaponup = 32,
    Play_Sys_display = 33,
    Play_Sys_rankup_1 = 34,
    Play_Sys_rankup_2 = 35,
    Play_Sys_rankup_3 = 36,
    Play_Sys_rankup_4 = 37,
    Play_Sys_breakthrough = 38,
    Play_Sys_select = 39,
    Play_Sys_menu_open = 40,
    Play_Sys_menu_close = 41,
    Play_Sys_window_open = 42,
    Play_Sys_window_close = 43,
    Play_Sys_itemdrop = 44,
    Play_Sys_item = 45,
    Play_Sys_max = 46,
    Play_Sys_chat_me = 47,
    Play_Sys_chat_others = 48,
    Play_Sys_follow = 49,
    Play_TUT_Target = 50,
    Play_TUT_Clear = 51,
    ESystemSE_MAX = 52,
};

enum ETargetState {
    TargetState_None = 0,
    TargetState_Auto = 1,
    TargetState_Multi = 2,
    TargetState_LockOn = 3,
    TargetState_LockOnSuspend = 4,
    TargetState_MAX = 5,
};

enum class ETimeNotifyNetMode {
    ServerOnly = 0,
    ClientOnly = 1,
    ServerClinet = 2,
    MAX = 3,
};

enum class ETimerHUDType {
    None = 0,
    Arena = 1,
    Tower = 2,
    TimeAttack = 3,
    ScoreAttack = 4,
    Raid = 5,
    InstanceBattle = 6,
    DxBattle = 7,
    DhcBattle = 8,
    OneShotArena = 9,
    Max = 10,
};

enum class EToggleLookDirection {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3,
    EToggleLookDirection_MAX = 4,
};

enum class ETowerChallengeAchieveType {
    Unknown = 0,
    KillAllEnemy = 1,
    KillTargetEnemy = 2,
    DestructObject = 3,
    CorrectItem = 4,
    FreeCounter = 5,
    NoCounterFreeText = 6,
    ETowerChallengeAchieveType_MAX = 7,
};

namespace EUIZOrder {
    enum Type {
        DamageUI = 0,
        TargetCursor = 1,
        BalloonWindow = 2,
        BalloonWindowSelf = 3,
        HUD_Layer1 = 4,
        HUD_Layer2 = 5,
        HUD_Layer3 = 6,
        HUD_Layer4 = 7,
        HUD_Layer5 = 8,
        HUD_Layer6 = 9,
        HUD_Layer7 = 10,
        HUD_Layer8 = 11,
        HUD_Layer9 = 12,
        HUD_Layer10 = 13,
        HUD_Layer11 = 14,
        HUD_Layer12 = 15,
        HUD_Layer13 = 16,
        EngramCannonKeyHelp = 17,
        TickerMessage = 18,
        TextWindow = 19,
        DungeonFinder = 20,
        QuestUpdateProgressInfo = 21,
        QuestClearInfo = 22,
        DropDownText = 23,
        LevelUpUI = 24,
        QuestBoard = 25,
        QuestReportWindow = 26,
        MainMenu = 27,
        SubMenu = 28,
        Menu_Layer3 = 29,
        Menu_Layer4 = 30,
        Menu_Layer5 = 31,
        Menu_Layer6 = 32,
        Menu_Layer7 = 33,
        Menu_Layer8 = 34,
        Menu_Layer9 = 35,
        Menu_Layer10 = 36,
        Menu_Layer11 = 37,
        Menu_Layer12 = 38,
        Menu_Layer13 = 39,
        Menu_Layer14 = 40,
        Menu_Layer15 = 41,
        Menu_Layer16 = 42,
        Menu_Layer17 = 43,
        Menu_Layer18 = 44,
        Menu_Layer19 = 45,
        Notifications = 46,
        MyMoneyUI = 47,
        QuestJingle = 48,
        YesNoPopup = 49,
        Dialog = 50,
        OverlayMessage = 51,
        FadeFilter = 52,
        LoadingScreen = 53,
        SystemMessage = 54,
        ScreenshotNotification = 55,
        SystemDialog = 56,
        WindowsSystemDialog = 57,
        Debug = 58,
        Num = 59,
        EUIZOrder_MAX = 60,
    };
}

enum class EYesNoDialogResult {
    Yes = 0,
    No = 1,
    EYesNoDialogResult_MAX = 2,
};

enum class FProjectileBeamDirection {
    ActorRotation = 0,
    PlayerReticle = 1,
    FProjectileBeamDirection_MAX = 2,
};

enum class FProjectilePartyShotTargetType {
    LimitedPartyMember = 0,
    AllPartyMember = 1,
    OnlyMyself = 2,
    FProjectilePartyShotTargetType_MAX = 3,
};

enum class FSBCharaCreateMakeupIndex {
    Condition = 0,
    Lip = 1,
    Paint1 = 2,
    Paint2 = 3,
    FSBCharaCreateMakeupIndex_MAX = 4,
};

enum class FSBCountryTimeZoneType {
    UTC = 0,
    JST = 1,
    AWST = 2,
    KRAT = 3,
    FSBCountryTimeZoneType_MAX = 4,
};

enum class FSBReplaceMaterialBaseType {
    None = 0,
    Imagine = 1,
    Max = 2,
};

enum class MarkerState {
    Waiting = 0,
    Chanting = 1,
    Fired = 2,
    MarkerState_MAX = 3,
};

enum class NavigationTestingType {
    PathFinding = 0,
    RunAwayPathFinding = 1,
    NavigationTestingType_MAX = 2,
};

enum class RAID_BATTLE_SCORE {
    RAID_BATTLE_SCORE_MOST_DAMAGE = 0,
    RAID_BATTLE_SCORE_INSTANTANEOUS_DAMAGE = 1,
    RAID_BATTLE_SCORE_MOST_BUFF = 2,
    RAID_BATTLE_SCORE_MOST_RESUSCITATION = 3,
    RAID_BATTLE_SCORE_MOST_DEBUFF = 4,
    RAID_BATTLE_SCORE_GIMMICK_ATTACK = 5,
    RAID_BATTLE_SCORE_TARGET_KILL = 6,
    RAID_BATTLE_SCORE_MOST_TAKE_HITS = 7,
    RAID_BATTLE_SCORE_MAX = 8,
};

