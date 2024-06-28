enum class EAIFwBTParamType {
    Bool = 0,
    Int = 1,
    Float = 2,
    String = 3,
    Unknown = 255,
    EAIFwBTParamType_MAX = 256,
};

enum class EAIFwBTStatus {
    Invalid = 0,
    Success = 1,
    Failure = 2,
    Running = 3,
    EAIFwBTStatus_MAX = 4,
};

enum class EAIFwFocusPriority {
    Default = 0,
    Gameplay = 1,
    EAIFwFocusPriority_MAX = 2,
};

enum class EAIFwPTEvalPathfindingMode {
    Exist = 0,
    Cost = 1,
    Length = 2,
    EAIFwPTEvalPathfindingMode_MAX = 3,
};

enum class EAIFwPTRunMode {
    Best = 0,
    Random = 1,
    All = 2,
    EAIFwPTRunMode_MAX = 3,
};

enum class EPTCriterionSlot {
    Slot1 = 0,
    Slot2 = 1,
    Slot3 = 2,
    Slot4 = 3,
    EPTCriterionSlot_MAX = 4,
};

enum class EPTEvalOperation {
    Constant = 0,
    Linear = 1,
    InverseLinear = 2,
    EPTEvalOperation_MAX = 3,
};

enum class EPTEvalScoreType {
    Min = 0,
    Max = 1,
    Average = 2,
};

