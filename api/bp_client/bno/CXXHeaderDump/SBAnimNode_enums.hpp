enum class ECharaCreateBoneScaleID {
    Root_J = 0,
    Hip_J__offset = 1,
    HLP_Spine1__offset = 2,
    Spine1_J = 3,
    Spine1_J__offset = 4,
    Spine2_J__offset = 5,
    Neck_J = 6,
    Neck_J__offset = 7,
    Head_J = 8,
    Head_J__offset = 9,
    L_Clavicle_J = 10,
    L_Arm_J__offset = 11,
    L_ForeArm_J__offset = 12,
    L_Wrist_J = 13,
    HLP_L_ForeArm_Mid = 14,
    HLP_L_ForeArm_Btm = 15,
    HLP_L_ForeArm_Slide = 16,
    HLP_L_Arm_Mid = 17,
    HLP_L_Arm_Top = 18,
    HLP_L_Elbow = 19,
    HLP_L_Arm_Slide = 20,
    HLP_L_ShldrBlade = 21,
    HLP_L_ShldrBlade_Trans = 22,
    HLP_L_CollarBone = 23,
    Chest_J = 24,
    L_Pectoral_OPT001 = 25,
    L_Pectoral_OPT002 = 26,
    Rear_J = 27,
    L_UpLeg_J = 28,
    L_UpLeg_J__offset = 29,
    L_Leg_J__offset = 30,
    L_Foot_J = 31,
    L_Foot_J__offset = 32,
    HLP_L_Leg_Slide = 33,
    HLP_L_Leg_Btm = 34,
    HLP_L_Leg_Mid = 35,
    HLP_L_Knee = 36,
    HLP_L_UpLeg_Top = 37,
    HLP_L_UpLeg_Mid = 38,
    HLP_L_UpLeg_Slide = 39,
    HLP_L_Butt = 40,
    HLP_L_Butt_Trans = 41,
    HLP_L_Hip = 42,
    HLP_L_Hip_Trans = 43,
    MAX = 44,
};

enum class ECharaCreateBoneScaleType {
    XYZ_Scale = 0,
    YZ_Scale = 1,
    X_Scale = 2,
    Y_Scale = 3,
    Z_Scale = 4,
    ECharaCreateBoneScaleType_MAX = 5,
};

enum class ECharaPartsCrtBone {
    None = 0,
    CRT_L_Arm_UPPER = 1,
    CRT_L_ForeArm_UPPER1 = 2,
    CRT_L_ForeArm_UPPER2 = 3,
    CRT_L_ForeArm_UPPER3 = 4,
    CRT_Hip_Upper = 5,
    CRT_L_UpLeg_LOWER1 = 6,
    CRT_L_UpLeg_LOWER2 = 7,
    CRT_L_Leg_LOWER1 = 8,
    CRT_L_Leg_LOWER2 = 9,
    CRT_Hip_Lower = 10,
    CRT_L_Ankle = 11,
    MAX = 12,
};

enum class EPartsDamageState {
    Off = 0,
    On = 1,
    Cancel = 2,
    EPartsDamageState_MAX = 3,
};

enum ESBBoneModificationMode {
    SB_BMM_Ignore = 0,
    SB_BMM_Replace = 1,
    SB_BMM_Additive = 2,
    SB_BMM_MAX = 3,
};

enum class ESBIKBoneNum {
    Two = 2,
    Three = 3,
    Four = 4,
    ESBIKBoneNum_MAX = 5,
};

enum class ESBIKJointNum {
    Two = 2,
    Three = 3,
    Four = 4,
    ESBIKJointNum_MAX = 5,
};

namespace ESBIKMode {
    enum Type {
        Leg = 0,
        Climb = 1,
        Quadruped = 2,
        Arm = 3,
        ESBIKMode_MAX = 4,
    };
}

enum class ESBLegIKRotateType {
    OneAxis = 0,
    TwoAxis = 1,
    ThreeAxis = 2,
    Num = 3,
    ESBLegIKRotateType_MAX = 4,
};

enum class ESBSplineBoneAxis {
    X = 1,
    Y = 2,
    Z = 3,
    ESBSplineBoneAxis_MAX = 4,
};

enum class FSBCustomBoneScaleAxisSwapType {
    NoSwap = 0,
    ToYXZ = 1,
    ToXZY = 2,
    ToZYX = 3,
    ToYZX = 4,
    ToZXY = 5,
    Num = 6,
    FSBCustomBoneScaleAxisSwapType_MAX = 7,
};

