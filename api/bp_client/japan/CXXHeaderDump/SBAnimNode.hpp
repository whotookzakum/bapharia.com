#ifndef UE4SS_SDK_SBAnimNode_HPP
#define UE4SS_SDK_SBAnimNode_HPP

#include "SBAnimNode_enums.hpp"

struct FMechanicalLookAtRotateSetting
{
    FBoneReference Bone;                                                              // 0x0000 (size: 0x10)
    FAxis Rotate_Axis;                                                                // 0x0010 (size: 0x10)
    float SpeedRate;                                                                  // 0x0020 (size: 0x4)
    float MinDegree;                                                                  // 0x0024 (size: 0x4)
    float MaxDegree;                                                                  // 0x0028 (size: 0x4)
    float Weight;                                                                     // 0x002C (size: 0x4)

}; // Size: 0x30

struct FPDCachedBoneData
{
    FBoneReference Bone;                                                              // 0x0000 (size: 0x10)
    int32 RefSkeletonIndex;                                                           // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FSBAnimNode_Base : public FAnimNode_SkeletalControlBase
{
    bool bActive;                                                                     // 0x00C8 (size: 0x1)
    bool bSkipRoleAuthority;                                                          // 0x00C9 (size: 0x1)
    char padding_0[0xE];                                                              // 0x00CA (size: 0xE)
    FBoneReference ScaleBaseBone;                                                     // 0x00D8 (size: 0x10)

}; // Size: 0xF8

struct FSBAnimNode_CameraLookAt : public FAnimNode_SkeletalControlBase
{
    FBoneReference BoneToModify;                                                      // 0x00C8 (size: 0x10)
    char padding_0[0x8];                                                              // 0x00D8 (size: 0x8)
    FBoneSocketTarget LookAtTarget;                                                   // 0x00E0 (size: 0x60)
    FBoneSocketTarget UpTarget;                                                       // 0x0140 (size: 0x60)

}; // Size: 0x1A0

struct FSBAnimNode_CopyBone : public FSBAnimNode_Base
{
    TArray<FSBAnimNode_CopyBoneParameter> ParamArray;                                 // 0x00F8 (size: 0x10)
    FPoseLink SourcePose;                                                             // 0x0108 (size: 0x10)
    float BlendTime;                                                                  // 0x0118 (size: 0x4)

}; // Size: 0x128

struct FSBAnimNode_CopyBoneParameter
{
    FBoneReference SourceBone;                                                        // 0x0000 (size: 0x10)
    FBoneReference TargetBone;                                                        // 0x0010 (size: 0x10)
    bool bCopyTranslation;                                                            // 0x0020 (size: 0x1)
    bool bCopyRotation;                                                               // 0x0021 (size: 0x1)
    bool bCopyScale;                                                                  // 0x0022 (size: 0x1)
    TEnumAsByte<EBoneControlSpace> ControlSpace;                                      // 0x0023 (size: 0x1)
    float BlendAlpha;                                                                 // 0x0024 (size: 0x4)

}; // Size: 0x28

struct FSBAnimNode_CrtBoneScale : public FAnimNode_SkeletalControlBase
{
    bool bDivide;                                                                     // 0x00C8 (size: 0x1)

}; // Size: 0xD0

struct FSBAnimNode_CustomBoneScale : public FAnimNode_SkeletalControlBase
{
    bool bDivide;                                                                     // 0x00C8 (size: 0x1)
    FSBCustomBoneScaleAxisSwapType AxisSwap;                                          // 0x00C9 (size: 0x1)

}; // Size: 0xD0

struct FSBAnimNode_CustomBoneScaleLocal : public FAnimNode_Base
{
    FPoseLink InputPose;                                                              // 0x0010 (size: 0x10)

}; // Size: 0x1048

struct FSBAnimNode_FacialEyelid : public FAnimNode_PoseHandler
{
    FPoseLink SourcePose;                                                             // 0x0080 (size: 0x10)
    FName MoveUEyeLPoseName;                                                          // 0x0090 (size: 0x8)
    FName MoveDEyeLPoseName;                                                          // 0x0098 (size: 0x8)
    FName MoveLEyeLPoseName;                                                          // 0x00A0 (size: 0x8)
    FName MoveREyeLPoseName;                                                          // 0x00A8 (size: 0x8)
    FName MoveUEyeRPoseName;                                                          // 0x00B0 (size: 0x8)
    FName MoveDEyeRPoseName;                                                          // 0x00B8 (size: 0x8)
    FName MoveLEyeRPoseName;                                                          // 0x00C0 (size: 0x8)
    FName MoveREyeRPoseName;                                                          // 0x00C8 (size: 0x8)
    float EyeUD;                                                                      // 0x00D0 (size: 0x4)
    float EyeLR;                                                                      // 0x00D4 (size: 0x4)

}; // Size: 0xE8

struct FSBAnimNode_LegIK : public FSBAnimNode_Base
{
    FPoseLink ReferencePose;                                                          // 0x00F8 (size: 0x10)
    bool bStickReferencePoseLimb;                                                     // 0x0108 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0109 (size: 0x3)
    FBoneReference BaseBone;                                                          // 0x010C (size: 0x10)
    bool bBaseMove;                                                                   // 0x011C (size: 0x1)
    char padding_1[0x3];                                                              // 0x011D (size: 0x3)
    FPlane RefAnimPlane;                                                              // 0x0120 (size: 0x10)
    char padding_2[0x10];                                                             // 0x0130 (size: 0x10)
    float PlaneNormalScale;                                                           // 0x0140 (size: 0x4)
    TEnumAsByte<ESBIKMode::Type> ModeType;                                            // 0x0144 (size: 0x1)
    char padding_3[0x3];                                                              // 0x0145 (size: 0x3)
    float RotateLeftRightWeight;                                                      // 0x0148 (size: 0x4)
    float RotateForeBackWeight;                                                       // 0x014C (size: 0x4)
    float OffsetDistance;                                                             // 0x0150 (size: 0x4)
    char padding_4[0x4];                                                              // 0x0154 (size: 0x4)
    TArray<FSBLegIKInfo> LegIKInfoArray;                                              // 0x0158 (size: 0x10)
    float BaseInterpSpeedMultiple;                                                    // 0x0168 (size: 0x4)
    float BaseInterpSpeedPow;                                                         // 0x016C (size: 0x4)
    float BaseRotateInterpSpeedMultiple;                                              // 0x0170 (size: 0x4)
    float BaseRotateInterpSpeedPow;                                                   // 0x0174 (size: 0x4)
    float LegInGroundInterpSpeedMultiple;                                             // 0x0178 (size: 0x4)
    float LegInterpSpeedMultiple;                                                     // 0x017C (size: 0x4)
    float LegInterpSpeedPow;                                                          // 0x0180 (size: 0x4)
    float FootRotateInterpSpeedMultiple;                                              // 0x0184 (size: 0x4)
    float FootRotateInterpSpeedPow;                                                   // 0x0188 (size: 0x4)
    float GroundLegMoveThreshold;                                                     // 0x018C (size: 0x4)
    float SleepTraceDuration;                                                         // 0x0190 (size: 0x4)
    bool bEnableDebugDrawInGame;                                                      // 0x0194 (size: 0x1)
    char padding_5[0x3];                                                              // 0x0195 (size: 0x3)
    FSBThreeFourBoneIKParam ThreeFourBoneIKParam;                                     // 0x0198 (size: 0x10)
    FSBIKStatusAll IKStatusAll;                                                       // 0x01A8 (size: 0x10)
    float BaseMoveLimit;                                                              // 0x01B8 (size: 0x4)
    float TraceStartRatio;                                                            // 0x01BC (size: 0x4)
    float TraceEndRatio;                                                              // 0x01C0 (size: 0x4)
    float BaseRotateLimit;                                                            // 0x01C4 (size: 0x4)

}; // Size: 0x7C0

struct FSBAnimNode_LookAt : public FSBAnimNode_Base
{
    FBoneReference RotateBoneReference;                                               // 0x00F8 (size: 0x10)
    char padding_0[0x8];                                                              // 0x0108 (size: 0x8)
    FBoneSocketTarget AimTReference;                                                  // 0x0110 (size: 0x60)
    FBoneSocketTarget TargetTReference;                                               // 0x0170 (size: 0x60)
    FBoneReference EyeBoneReference;                                                  // 0x01D0 (size: 0x10)
    TArray<FBoneReference> ArmRotateBoneReferenceArray;                               // 0x01E0 (size: 0x10)
    float ArmRotateSpineTwist;                                                        // 0x01F0 (size: 0x4)
    float ArmRotateSpineBend;                                                         // 0x01F4 (size: 0x4)
    FVector ArmRotateSpineAxis;                                                       // 0x01F8 (size: 0xC)
    FVector LookAtTargetLocation;                                                     // 0x0204 (size: 0xC)
    bool bActiveCustomEye;                                                            // 0x0210 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0211 (size: 0x3)
    FVector LookAtCustomEyeTargetLocation;                                            // 0x0214 (size: 0xC)
    FAxis LookAt_Axis;                                                                // 0x0220 (size: 0x10)
    FAxis LookUp_Axis;                                                                // 0x0230 (size: 0x10)
    float LookAtClampYaw;                                                             // 0x0240 (size: 0x4)
    float LookAtClampPitch;                                                           // 0x0244 (size: 0x4)
    float LookAtEyeClampYaw;                                                          // 0x0248 (size: 0x4)
    float LookAtEyeClampPitch;                                                        // 0x024C (size: 0x4)
    float FilterTerm;                                                                 // 0x0250 (size: 0x4)
    bool bEnableFiltering;                                                            // 0x0254 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0255 (size: 0x3)
    float InterpolationVelocityMultiple;                                              // 0x0258 (size: 0x4)
    float InterpolationVelocityPow;                                                   // 0x025C (size: 0x4)
    float InterpolationVelocityMin;                                                   // 0x0260 (size: 0x4)
    float TotalWeight;                                                                // 0x0264 (size: 0x4)
    float FadeOutWeightStrength;                                                      // 0x0268 (size: 0x4)
    FSBLookAtBlendWeight TopWeight;                                                   // 0x026C (size: 0x10)
    char padding_3[0x4];                                                              // 0x027C (size: 0x4)
    TArray<FSBLookAtBlendWeight> WeightArray;                                         // 0x0280 (size: 0x10)
    bool bEnableDebug;                                                                // 0x0290 (size: 0x1)
    char padding_4[0x3];                                                              // 0x0291 (size: 0x3)
    FSBLookAtCustomParam CustomParam;                                                 // 0x0294 (size: 0x1C)
    bool bArmRotateControl;                                                           // 0x02B0 (size: 0x1)
    bool bForceDisable;                                                               // 0x02B1 (size: 0x1)

}; // Size: 0xD00

struct FSBAnimNode_MechanicalLookAt : public FSBAnimNode_Base
{
    FBoneSocketTarget AimTReference;                                                  // 0x0100 (size: 0x60)
    FAxis LookAt_Axis;                                                                // 0x0160 (size: 0x10)
    TArray<FMechanicalLookAtRotateSetting> LookAtRotateSettingArray;                  // 0x0170 (size: 0x10)
    FVector LookAtTargetLocation;                                                     // 0x0180 (size: 0xC)
    bool bEnableDebug;                                                                // 0x018C (size: 0x1)
    char padding_0[0x3];                                                              // 0x018D (size: 0x3)
    float FilterTerm;                                                                 // 0x0190 (size: 0x4)
    bool bEnableFiltering;                                                            // 0x0194 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0195 (size: 0x3)
    float SpeedPow;                                                                   // 0x0198 (size: 0x4)
    float SpeedMin;                                                                   // 0x019C (size: 0x4)
    float Speed;                                                                      // 0x01A0 (size: 0x4)

}; // Size: 0x670

struct FSBAnimNode_ModifyBone : public FAnimNode_SkeletalControlBase
{
    TArray<FSBAnimNode_ModifyBoneParameter> ParamArray;                               // 0x00C8 (size: 0x10)

}; // Size: 0xD8

struct FSBAnimNode_ModifyBoneParameter
{
    FBoneReference BoneToModify;                                                      // 0x0000 (size: 0x10)
    FVector Translation;                                                              // 0x0010 (size: 0xC)
    FRotator Rotation;                                                                // 0x001C (size: 0xC)
    FVector Scale;                                                                    // 0x0028 (size: 0xC)
    TEnumAsByte<ESBBoneModificationMode> TranslationMode;                             // 0x0034 (size: 0x1)
    TEnumAsByte<ESBBoneModificationMode> RotationMode;                                // 0x0035 (size: 0x1)
    TEnumAsByte<ESBBoneModificationMode> ScaleMode;                                   // 0x0036 (size: 0x1)
    TEnumAsByte<EBoneControlSpace> TranslationSpace;                                  // 0x0037 (size: 0x1)
    TEnumAsByte<EBoneControlSpace> RotationSpace;                                     // 0x0038 (size: 0x1)
    TEnumAsByte<EBoneControlSpace> ScaleSpace;                                        // 0x0039 (size: 0x1)

}; // Size: 0x3C

struct FSBAnimNode_ObserveBone : public FAnimNode_SkeletalControlBase
{
    FBoneReference BoneToObserve;                                                     // 0x00C8 (size: 0x10)
    TEnumAsByte<EBoneControlSpace> DisplaySpace;                                      // 0x00D8 (size: 0x1)
    bool bRelativeToRefPose;                                                          // 0x00D9 (size: 0x1)
    char padding_0[0x2];                                                              // 0x00DA (size: 0x2)
    FVector Translation;                                                              // 0x00DC (size: 0xC)
    FRotator Rotation;                                                                // 0x00E8 (size: 0xC)
    FVector Scale;                                                                    // 0x00F4 (size: 0xC)

}; // Size: 0x100

struct FSBAnimNode_PartsDamage : public FSBAnimNode_Base
{
    TArray<FSBPDCollisionSetting> CollisionSettingArray;                              // 0x00F8 (size: 0x10)
    FBoneReference RootBone;                                                          // 0x0108 (size: 0x10)
    float ToParentInfluence;                                                          // 0x0118 (size: 0x4)
    float ToChildInfluence;                                                           // 0x011C (size: 0x4)
    float RootMoveImpact;                                                             // 0x0120 (size: 0x4)
    float TimeLen;                                                                    // 0x0124 (size: 0x4)
    float FadeOutStartTimeLen;                                                        // 0x0128 (size: 0x4)
    float FadeOutTimeLen;                                                             // 0x012C (size: 0x4)
    float Impact;                                                                     // 0x0130 (size: 0x4)
    float OverrideImpact;                                                             // 0x0134 (size: 0x4)
    bool EnableOverrideImpact;                                                        // 0x0138 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0139 (size: 0x3)
    float SwingDecay;                                                                 // 0x013C (size: 0x4)
    float TimeWarpPower;                                                              // 0x0140 (size: 0x4)
    float PropagationTimeRate;                                                        // 0x0144 (size: 0x4)
    float RandomImpact;                                                               // 0x0148 (size: 0x4)
    float RandomDirection;                                                            // 0x014C (size: 0x4)
    float ImpactDistanceInfluence;                                                    // 0x0150 (size: 0x4)
    int32 MaxAnimationAdditive;                                                       // 0x0154 (size: 0x4)
    float ParentPropagationRate;                                                      // 0x0158 (size: 0x4)
    float AutoRootHierarchy;                                                          // 0x015C (size: 0x4)
    float BaseBoneScaleRate;                                                          // 0x0160 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0164 (size: 0x4)
    class USBPartsDamageAnimParamter* PartsDamageAnimParamter;                        // 0x0168 (size: 0x8)

}; // Size: 0x198

struct FSBAnimNode_PoseAlong : public FSBAnimNode_Base
{
    FVector2D CenterPosition;                                                         // 0x00F8 (size: 0x8)
    float CenterRotation;                                                             // 0x0100 (size: 0x4)
    float Width;                                                                      // 0x0104 (size: 0x4)
    float Height;                                                                     // 0x0108 (size: 0x4)
    float TraceStart;                                                                 // 0x010C (size: 0x4)
    float TraceEnd;                                                                   // 0x0110 (size: 0x4)
    float TranslateLimitScale;                                                        // 0x0114 (size: 0x4)
    float TraceScaleCorrection;                                                       // 0x0118 (size: 0x4)
    FBoneReference BaseBone;                                                          // 0x011C (size: 0x10)
    char padding_0[0x4];                                                              // 0x012C (size: 0x4)
    FPlane AnimPlane;                                                                 // 0x0130 (size: 0x10)
    float GroundThreshold;                                                            // 0x0140 (size: 0x4)
    float RotateLeftRightWeight;                                                      // 0x0144 (size: 0x4)
    float RotateForeBackWeight;                                                       // 0x0148 (size: 0x4)
    float PlaneNormalScale;                                                           // 0x014C (size: 0x4)
    float RotateForeWeight;                                                           // 0x0150 (size: 0x4)
    float RotateBackWeight;                                                           // 0x0154 (size: 0x4)
    float RotateLeftWeight;                                                           // 0x0158 (size: 0x4)
    float RotateRightWeight;                                                          // 0x015C (size: 0x4)
    TArray<FSBPoseAlongInfo> PoseAlongInfoArray;                                      // 0x0160 (size: 0x10)
    float BaseInterpSpeedMultiple;                                                    // 0x0170 (size: 0x4)
    float BaseInterpSpeedPow;                                                         // 0x0174 (size: 0x4)
    float BaseRotateInterpSpeedMultiple;                                              // 0x0178 (size: 0x4)
    float BaseRotateInterpSpeedPow;                                                   // 0x017C (size: 0x4)
    float BaseRotateLimit;                                                            // 0x0180 (size: 0x4)
    bool bEnableDebugDrawInGame;                                                      // 0x0184 (size: 0x1)

}; // Size: 0x210

struct FSBAnimNode_RigidBody : public FAnimNode_RigidBody
{
    float LimitBoneLengthScale;                                                       // 0x08E0 (size: 0x4)
    float LimitBoneLengthBaseBoneRelativeScale;                                       // 0x08E4 (size: 0x4)
    FBoneReference LimitTransformReferenceBaseBone;                                   // 0x08E8 (size: 0x10)
    bool bAlwaysUpdateParam;                                                          // 0x08F8 (size: 0x1)
    bool bCachePhysicsResult;                                                         // 0x08F9 (size: 0x1)
    char padding_0[0x2];                                                              // 0x08FA (size: 0x2)
    float StiffnessScale;                                                             // 0x08FC (size: 0x4)
    float DampingScale;                                                               // 0x0900 (size: 0x4)
    float MassScale;                                                                  // 0x0904 (size: 0x4)
    float CustomMassScale;                                                            // 0x0908 (size: 0x4)
    float TransformAlpha;                                                             // 0x090C (size: 0x4)
    FBoneReference ParameterReferenceBaseBone;                                        // 0x0910 (size: 0x10)
    float ScaleInfuence;                                                              // 0x0920 (size: 0x4)
    float ConstrainPowerScaleInfluence;                                               // 0x0924 (size: 0x4)
    float ScaleInfuenceGravity;                                                       // 0x0928 (size: 0x4)

}; // Size: 0x9A0

struct FSBAnimNode_Rotate : public FSBAnimNode_Base
{
    float Yaw;                                                                        // 0x00F8 (size: 0x4)
    float Pitch;                                                                      // 0x00FC (size: 0x4)
    float Roll;                                                                       // 0x0100 (size: 0x4)
    FAxis Yaw_Axis;                                                                   // 0x0104 (size: 0x10)
    FAxis Roll_Axis;                                                                  // 0x0114 (size: 0x10)
    FBoneReference RotateBoneReference;                                               // 0x0124 (size: 0x10)
    FBoneReference RotateBaseBoneReference;                                           // 0x0134 (size: 0x10)
    float FilterTerm;                                                                 // 0x0144 (size: 0x4)
    float InterpolationVelocityMultiple;                                              // 0x0148 (size: 0x4)
    float InterpolationVelocityPow;                                                   // 0x014C (size: 0x4)
    float TotalWeight;                                                                // 0x0150 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0154 (size: 0x4)
    TArray<FSBRotateBlendWeight> WeightArray;                                         // 0x0158 (size: 0x10)
    bool bEnableDebug;                                                                // 0x0168 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0169 (size: 0x3)
    FSBRotateCustomParam CustomParam;                                                 // 0x016C (size: 0x10)

}; // Size: 0x620

struct FSBAnimNode_SimpleIK : public FSBAnimNode_Base
{
    FPoseLink ReferencePose;                                                          // 0x00F8 (size: 0x10)
    FSBThreeFourBoneIKParam ThreeFourBoneIKParam;                                     // 0x0108 (size: 0x10)
    TArray<FSBLimbIKInfo> LimbIKInfoArray;                                            // 0x0118 (size: 0x10)
    TArray<FSBLimbIKUpdateParam> LimbIKUpdateParamArray;                              // 0x0128 (size: 0x10)
    float LimbInterpSpeedMultiple;                                                    // 0x0138 (size: 0x4)
    float LimbInterpSpeedPow;                                                         // 0x013C (size: 0x4)
    bool bEnableDebugDrawInGame;                                                      // 0x0140 (size: 0x1)

}; // Size: 0x170

struct FSBAnimNode_SnakeTail : public FSBAnimNode_Base
{
    FBoneReference StartBone;                                                         // 0x00F8 (size: 0x10)
    FBoneReference EndBone;                                                           // 0x0108 (size: 0x10)
    float Stretch;                                                                    // 0x0118 (size: 0x4)
    float Offset;                                                                     // 0x011C (size: 0x4)
    float ControlPointDistRate;                                                       // 0x0120 (size: 0x4)
    float AlphaDelay;                                                                 // 0x0124 (size: 0x4)
    float LimitAngleInterp;                                                           // 0x0128 (size: 0x4)
    float BlendDuration;                                                              // 0x012C (size: 0x4)
    uint32 ControlPoint_SkipBoneNum;                                                  // 0x0130 (size: 0x4)
    uint32 ControlPoint_Sub;                                                          // 0x0134 (size: 0x4)
    char padding_0[0xB0];                                                             // 0x0138 (size: 0xB0)
    FSplineCurves BoneSpline;                                                         // 0x01E8 (size: 0x70)
    float OriginalSplineLength;                                                       // 0x0258 (size: 0x4)
    char padding_1[0x4];                                                              // 0x025C (size: 0x4)
    TArray<FSplineIKCachedBoneData> CachedBoneReferences;                             // 0x0260 (size: 0x10)
    TArray<float> CachedBoneLengths;                                                  // 0x0270 (size: 0x10)
    FSplineIKCachedBoneData CachedRootBoneReference;                                  // 0x0280 (size: 0x14)

}; // Size: 0x2A8

struct FSBAnimNode_SplineIK : public FAnimNode_SkeletalControlBase
{
    FBoneReference StartControlBone;                                                  // 0x00C8 (size: 0x10)
    FBoneReference EndControlBone;                                                    // 0x00D8 (size: 0x10)
    FBoneReference StartBone;                                                         // 0x00E8 (size: 0x10)
    FBoneReference EndBone;                                                           // 0x00F8 (size: 0x10)
    ESBSplineBoneAxis BoneAxis;                                                       // 0x0108 (size: 0x1)
    bool bAutoCalculateSpline;                                                        // 0x0109 (size: 0x1)
    char padding_0[0x2];                                                              // 0x010A (size: 0x2)
    int32 PointCount;                                                                 // 0x010C (size: 0x4)
    TArray<FTransform> ControlPoints;                                                 // 0x0110 (size: 0x10)
    float Roll;                                                                       // 0x0120 (size: 0x4)
    float TwistStart;                                                                 // 0x0124 (size: 0x4)
    float TwistEnd;                                                                   // 0x0128 (size: 0x4)
    char padding_1[0x4];                                                              // 0x012C (size: 0x4)
    FAlphaBlend TwistBlend;                                                           // 0x0130 (size: 0x30)
    float Stretch;                                                                    // 0x0160 (size: 0x4)
    float Offset;                                                                     // 0x0164 (size: 0x4)
    char padding_2[0x80];                                                             // 0x0168 (size: 0x80)
    FSplineCurves BoneSpline;                                                         // 0x01E8 (size: 0x70)
    float OriginalSplineLength;                                                       // 0x0258 (size: 0x4)
    char padding_3[0x4];                                                              // 0x025C (size: 0x4)
    TArray<FSBSplineIKCachedBoneData> CachedBoneReferences;                           // 0x0260 (size: 0x10)
    TArray<float> CachedBoneLengths;                                                  // 0x0270 (size: 0x10)
    TArray<FQuat> CachedOffsetRotations;                                              // 0x0280 (size: 0x10)
    TArray<FSBSplineIKCachedBoneData> CachedControlBoneReferences;                    // 0x0290 (size: 0x10)

}; // Size: 0x2A0

struct FSBAnimNode_TailCollision : public FSBAnimNode_Base
{
    FBoneReference StartBone;                                                         // 0x00F8 (size: 0x10)
    FBoneReference EndBone;                                                           // 0x0108 (size: 0x10)
    TArray<FBoneReference> RayCalcOmitBones;                                          // 0x0118 (size: 0x10)
    TArray<FTailBoneParam> TailBoneParams;                                            // 0x0128 (size: 0x10)
    TArray<FTailCachedBoneData> CachedBoneReferences;                                 // 0x0138 (size: 0x10)
    TArray<float> CachedBoneLengths;                                                  // 0x0148 (size: 0x10)

}; // Size: 0x1C8

struct FSBCustomBoneScaleLocal
{
    FBoneReference TargetBone;                                                        // 0x0000 (size: 0x10)
    ECharaCreateBoneScaleID SourceBoneScaleID;                                        // 0x0010 (size: 0x1)
    ECharaPartsCrtBone SourceCrtBoneScaleID;                                          // 0x0011 (size: 0x1)
    bool bDivide;                                                                     // 0x0012 (size: 0x1)
    FSBCustomBoneScaleAxisSwapType AxisSwap;                                          // 0x0013 (size: 0x1)

}; // Size: 0x14

struct FSBIKStatus
{
    bool bForceContact;                                                               // 0x0000 (size: 0x1)

}; // Size: 0x1

struct FSBIKStatusAll
{
    TArray<FSBIKStatus> IKStatusArray;                                                // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSBIKTraceResult
{
    bool Hit;                                                                         // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FVector HitPositionLocal;                                                         // 0x0004 (size: 0xC)
    FVector RayCenterPositionLocal;                                                   // 0x0010 (size: 0xC)
    FVector HitNormal;                                                                // 0x001C (size: 0xC)
    FVector RayCenterPosition;                                                        // 0x0028 (size: 0xC)

}; // Size: 0x34

struct FSBIKTraceResultAll
{
    TArray<FSBIKTraceResult> IKTraceResultArray;                                      // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSBIKUpdateParamAll
{
    char padding_0[0x58];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x58

struct FSBLegIKInfo
{
    FBoneReference IKBone;                                                            // 0x0000 (size: 0x10)
    ESBIKBoneNum BoneNum;                                                             // 0x0010 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0011 (size: 0x3)
    FBoneReference SoleBone;                                                          // 0x0014 (size: 0x10)
    FBoneReference SoleBoneForTrace;                                                  // 0x0024 (size: 0x10)
    FBoneReference CachedEndBone;                                                     // 0x0034 (size: 0x10)
    FVector JointTargetLocation;                                                      // 0x0044 (size: 0xC)
    bool bStickPosition;                                                              // 0x0050 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0051 (size: 0x3)
    float StickLimitDistanceOffset;                                                   // 0x0054 (size: 0x4)
    FVector SoleDirection;                                                            // 0x0058 (size: 0xC)
    bool bRotate;                                                                     // 0x0064 (size: 0x1)
    ESBLegIKRotateType LegIKRotateType;                                               // 0x0065 (size: 0x1)
    bool bOneAxisRotate;                                                              // 0x0066 (size: 0x1)
    char padding_2[0x1];                                                              // 0x0067 (size: 0x1)
    FVector RotateDirection;                                                          // 0x0068 (size: 0xC)
    FSBMinAndMax AngleMinAndMaxSole;                                                  // 0x0074 (size: 0x8)
    char padding_3[0x4];                                                              // 0x007C (size: 0x4)
    TArray<FSBMinAndMax> AngleLimitArray;                                             // 0x0080 (size: 0x10)
    float SoleContactLimbRatio;                                                       // 0x0090 (size: 0x4)
    float TraceStartLimbRatio;                                                        // 0x0094 (size: 0x4)
    float TraceEndLimbRatio;                                                          // 0x0098 (size: 0x4)

}; // Size: 0xB0

struct FSBLegIKInfoAll
{
    TArray<FSBLegIKInfo> IKLegIKInfoArray;                                            // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSBLimbIKInfo
{
    FBoneReference IKBone;                                                            // 0x0000 (size: 0x10)
    ESBIKBoneNum BoneNum;                                                             // 0x0010 (size: 0x1)
    char padding_0[0xF];                                                              // 0x0011 (size: 0xF)
    FBoneSocketTarget EffectorBone;                                                   // 0x0020 (size: 0x60)
    FVector BoneRotaterLocation;                                                      // 0x0080 (size: 0xC)
    char padding_1[0x4];                                                              // 0x008C (size: 0x4)
    FBoneSocketTarget EffectorTargetBone;                                             // 0x0090 (size: 0x60)

}; // Size: 0xF0

struct FSBLimbIKUpdateParam
{
    bool bParamActive;                                                                // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FVector Position;                                                                 // 0x0004 (size: 0xC)

}; // Size: 0x10

struct FSBLookAtBlendWeight
{
    float Yaw;                                                                        // 0x0000 (size: 0x4)
    float Pitch;                                                                      // 0x0004 (size: 0x4)
    float Roll;                                                                       // 0x0008 (size: 0x4)
    float Speed;                                                                      // 0x000C (size: 0x4)

}; // Size: 0x10

struct FSBLookAtCustomParam
{
    float SpeedMultiply;                                                              // 0x0000 (size: 0x4)
    float SpeedPowMultiply;                                                           // 0x0004 (size: 0x4)
    float ClampPitchMultiply;                                                         // 0x0008 (size: 0x4)
    float ClampYawMultiply;                                                           // 0x000C (size: 0x4)
    float PropagationHierarchyWeight;                                                 // 0x0010 (size: 0x4)
    float DeadBandMultiply;                                                           // 0x0014 (size: 0x4)
    bool bEnableFiltering;                                                            // 0x0018 (size: 0x1)

}; // Size: 0x1C

struct FSBMinAndMax
{
    float Min;                                                                        // 0x0000 (size: 0x4)
    float Max;                                                                        // 0x0004 (size: 0x4)

}; // Size: 0x8

struct FSBPDAxisRad
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FSBPDBranchSetting
{
    FBoneReference EndBone;                                                           // 0x0000 (size: 0x10)
    float EndStickAlpha;                                                              // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FSBPDCollisionSetting
{
    FBoneReference CollisionBone;                                                     // 0x0000 (size: 0x10)
    FBoneReference EndBone;                                                           // 0x0010 (size: 0x10)
    FName GroupName;                                                                  // 0x0020 (size: 0x8)
    TArray<FName> ExtraGroupNameArray;                                                // 0x0028 (size: 0x10)
    FBoneReference CustomRootBone;                                                    // 0x0038 (size: 0x10)
    float EndStickAlpha;                                                              // 0x0048 (size: 0x4)
    char padding_0[0x4];                                                              // 0x004C (size: 0x4)
    TArray<FSBPDBranchSetting> BranchSettingArray;                                    // 0x0050 (size: 0x10)
    float ImpactRate;                                                                 // 0x0060 (size: 0x4)

}; // Size: 0x68

struct FSBPDDecayLine
{
    FBoneReference EndBone;                                                           // 0x0000 (size: 0x10)
    float ToEndInfluence;                                                             // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FSBPoseAlongInfo
{
    FBoneReference TraceBone;                                                         // 0x0000 (size: 0x10)
    FBoneReference SoleBoneForTrace;                                                  // 0x0010 (size: 0x10)
    FVector TraceDirection;                                                           // 0x0020 (size: 0xC)

}; // Size: 0x2C

struct FSBPoseAlongStatusAll
{
    bool bActive;                                                                     // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FSBIKTraceResult TraceResultForeL;                                                // 0x0004 (size: 0x34)
    FSBIKTraceResult TraceResultForeR;                                                // 0x0038 (size: 0x34)
    FSBIKTraceResult TraceResultBackL;                                                // 0x006C (size: 0x34)
    FSBIKTraceResult TraceResultBackR;                                                // 0x00A0 (size: 0x34)

}; // Size: 0xD4

struct FSBRotateBlendWeight
{
    float Yaw;                                                                        // 0x0000 (size: 0x4)
    float Pitch;                                                                      // 0x0004 (size: 0x4)
    float Roll;                                                                       // 0x0008 (size: 0x4)
    float Speed;                                                                      // 0x000C (size: 0x4)

}; // Size: 0x10

struct FSBRotateCustomParam
{
    float SpeedMultiply;                                                              // 0x0000 (size: 0x4)
    float ClampPitchMultiply;                                                         // 0x0004 (size: 0x4)
    float ClampYawMultiply;                                                           // 0x0008 (size: 0x4)
    float PropagationHierarchyWeight;                                                 // 0x000C (size: 0x4)

}; // Size: 0x10

struct FSBSplineIKCachedBoneData
{
    FBoneReference Bone;                                                              // 0x0000 (size: 0x10)
    int32 RefSkeletonIndex;                                                           // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FSBThreeFourBoneIKParam
{
    float TranslationLimit;                                                           // 0x0000 (size: 0x4)
    float Lambda;                                                                     // 0x0004 (size: 0x4)
    int32 MaxIterationNum;                                                            // 0x0008 (size: 0x4)
    float ErrorToleranceTranslation;                                                  // 0x000C (size: 0x4)

}; // Size: 0x10

struct FTailBoneParam
{
    FBoneReference StartBone;                                                         // 0x0000 (size: 0x10)
    float InterpPowCollision;                                                         // 0x0010 (size: 0x4)
    float InterpPowRecovery;                                                          // 0x0014 (size: 0x4)
    float Thickness;                                                                  // 0x0018 (size: 0x4)
    float LimitAngle;                                                                 // 0x001C (size: 0x4)
    int32 TraceBack;                                                                  // 0x0020 (size: 0x4)

}; // Size: 0x24

struct FTailCachedBoneData
{
    FBoneReference Bone;                                                              // 0x0000 (size: 0x10)
    int32 RefSkeletonIndex;                                                           // 0x0010 (size: 0x4)

}; // Size: 0x14

class ISBBoneScaleCacheInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class ISBPartsDamageAnimInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USBPartsDamageAnimParamter : public UObject
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

#endif
