enum class EASAlphaBlendOption {
    Linear = 0,
    Cubic = 1,
    HermiteCubic = 2,
    Sinusoidal = 3,
    QuadraticInOut = 4,
    CubicInOut = 5,
    QuarticInOut = 6,
    QuinticInOut = 7,
    CircularIn = 8,
    CircularOut = 9,
    CircularInOut = 10,
    ExpIn = 11,
    ExpOut = 12,
    ExpInOut = 13,
    Custom = 14,
    Inertial = 15,
    EASAlphaBlendOption_MAX = 16,
};

enum class EASAttackCollisionShape {
    Sphere = 0,
    Capsule = 1,
    Box = 2,
    EASAttackCollisionShape_MAX = 3,
};

enum class EASEasing {
    Step = 0,
    Linear = 1,
    Cubic = 2,
    EASEasing_MAX = 3,
};

namespace EASSMStateType {
    enum Type {
        Sequence = 1,
        BlendSpace = 2,
        AimOffset = 3,
        StateMachine = 4,
        Slot = 5,
        EASSMStateType_MAX = 6,
    };
}

enum class EASSMTransitionType {
    None = 0,
    Default = 1,
    EventDriven = 2,
    EASSMTransitionType_MAX = 3,
};

enum EAnimCommandState {
    ACS_Failed = 0,
    ACS_Precede = 1,
    ASC_Just = 2,
    EAnimCommandState_MAX = 3,
};

enum ENextStateType {
    NST_Invalid = 0,
    NST_Sequence = 1,
    NST_BlendSpace = 2,
    NST_StateMachine = 3,
    NST_Conduit = 4,
    NST_Terminate = 5,
    NST_Through = 6,
    NST_Slot = 7,
    NST_MAX = 8,
};

enum ETransitionRule {
    TR_PlayEnd = 0,
    TR_Command = 1,
    TR_MovementMode = 2,
    TR_Blueprint = 3,
    TR_Custom = 4,
    TR_MAX = 5,
};

