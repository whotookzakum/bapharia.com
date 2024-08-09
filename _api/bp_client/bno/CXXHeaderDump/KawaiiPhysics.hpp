#ifndef UE4SS_SDK_KawaiiPhysics_HPP
#define UE4SS_SDK_KawaiiPhysics_HPP

#include "KawaiiPhysics_enums.hpp"

struct FAnimNode_KawaiiPhysics : public FAnimNode_SkeletalControlBase
{
    FBoneReference RootBone;                                                          // 0x00C8 (size: 0x10)
    TArray<FBoneReference> ExcludeBones;                                              // 0x00D8 (size: 0x10)
    int32 TargetFramerate;                                                            // 0x00E8 (size: 0x4)
    bool OverrideTargetFramerate;                                                     // 0x00EC (size: 0x1)
    char padding_0[0x3];                                                              // 0x00ED (size: 0x3)
    FKawaiiPhysicsSettings PhysicsSettings;                                           // 0x00F0 (size: 0x18)
    class UCurveFloat* DampingCurve;                                                  // 0x0108 (size: 0x8)
    class UCurveFloat* WorldDampingLocationCurve;                                     // 0x0110 (size: 0x8)
    class UCurveFloat* WorldDampingRotationCurve;                                     // 0x0118 (size: 0x8)
    class UCurveFloat* StiffnessCurve;                                                // 0x0120 (size: 0x8)
    class UCurveFloat* RadiusCurve;                                                   // 0x0128 (size: 0x8)
    class UCurveFloat* LimitAngleCurve;                                               // 0x0130 (size: 0x8)
    FRuntimeFloatCurve DampingCurveData;                                              // 0x0138 (size: 0x88)
    FRuntimeFloatCurve WorldDampingLocationCurveData;                                 // 0x01C0 (size: 0x88)
    FRuntimeFloatCurve WorldDampingRotationCurveData;                                 // 0x0248 (size: 0x88)
    FRuntimeFloatCurve StiffnessCurveData;                                            // 0x02D0 (size: 0x88)
    FRuntimeFloatCurve RadiusCurveData;                                               // 0x0358 (size: 0x88)
    FRuntimeFloatCurve LimitAngleCurveData;                                           // 0x03E0 (size: 0x88)
    bool bLimitLocalSpace;                                                            // 0x0468 (size: 0x1)
    bool bUpdatePhysicsSettingsInGame;                                                // 0x0469 (size: 0x1)
    char padding_1[0x2];                                                              // 0x046A (size: 0x2)
    float DummyBoneLength;                                                            // 0x046C (size: 0x4)
    EBoneForwardAxis BoneForwardAxis;                                                 // 0x0470 (size: 0x1)
    EPlanarConstraint PlanarConstraint;                                               // 0x0471 (size: 0x1)
    char padding_2[0x6];                                                              // 0x0472 (size: 0x6)
    TArray<FSphericalLimit> SphericalLimits;                                          // 0x0478 (size: 0x10)
    TArray<FCapsuleLimit> CapsuleLimits;                                              // 0x0488 (size: 0x10)
    TArray<FPlanarLimit> PlanarLimits;                                                // 0x0498 (size: 0x10)
    float TeleportDistanceThreshold;                                                  // 0x04A8 (size: 0x4)
    float TeleportRotationThreshold;                                                  // 0x04AC (size: 0x4)
    FVector Gravity;                                                                  // 0x04B0 (size: 0xC)
    bool bCorrectGravityDown;                                                         // 0x04BC (size: 0x1)
    char padding_3[0x3];                                                              // 0x04BD (size: 0x3)
    int32 CorrectGravityDownResetCount;                                               // 0x04C0 (size: 0x4)
    FVector ExternalAccelerate;                                                       // 0x04C4 (size: 0xC)
    bool bComponentSpaceSimulation;                                                   // 0x04D0 (size: 0x1)
    char padding_4[0x3];                                                              // 0x04D1 (size: 0x3)
    float ResetCountScale;                                                            // 0x04D4 (size: 0x4)
    TArray<FTransform> DiffTransforms;                                                // 0x04D8 (size: 0x10)
    TArray<FVector> TempLocations;                                                    // 0x04E8 (size: 0x10)
    TArray<FQuat> TempRotations;                                                      // 0x04F8 (size: 0x10)
    TArray<FTransform> NewWorldTransforms;                                            // 0x0508 (size: 0x10)
    int32 ChainMaxNum;                                                                // 0x0518 (size: 0x4)
    bool bEnableWind;                                                                 // 0x051C (size: 0x1)
    char padding_5[0x3];                                                              // 0x051D (size: 0x3)
    float WindScale;                                                                  // 0x0520 (size: 0x4)
    char padding_6[0x4];                                                              // 0x0524 (size: 0x4)
    TArray<FKawaiiPhysicsModifyBone> ModifyBones;                                     // 0x0528 (size: 0x10)
    float StiffnessScale;                                                             // 0x0538 (size: 0x4)
    float DampingScale;                                                               // 0x053C (size: 0x4)
    float TotalBoneLength;                                                            // 0x0540 (size: 0x4)
    char padding_7[0xC];                                                              // 0x0544 (size: 0xC)
    FTransform PreSkelCompTransform;                                                  // 0x0550 (size: 0x30)
    bool bInitPhysicsSettings;                                                        // 0x0580 (size: 0x1)

}; // Size: 0x610

struct FCapsuleLimit : public FCollisionLimitBase
{
    float Radius;                                                                     // 0x0060 (size: 0x4)
    float Length;                                                                     // 0x0064 (size: 0x4)

}; // Size: 0x70

struct FCollisionLimitBase
{
    FBoneReference DrivingBone;                                                       // 0x0000 (size: 0x10)
    FVector OffsetLocation;                                                           // 0x0010 (size: 0xC)
    FRotator OffsetRotation;                                                          // 0x001C (size: 0xC)
    FVector Location;                                                                 // 0x0028 (size: 0xC)
    char padding_0[0xC];                                                              // 0x0034 (size: 0xC)
    FQuat Rotation;                                                                   // 0x0040 (size: 0x10)
    FVector Scale;                                                                    // 0x0050 (size: 0xC)

}; // Size: 0x60

struct FKawaiiPhysicsModifyBone
{
    FBoneReference BoneRef;                                                           // 0x0000 (size: 0x10)
    int32 ParentIndex;                                                                // 0x0010 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0014 (size: 0x4)
    TArray<int32> ChildIndexs;                                                        // 0x0018 (size: 0x10)
    FKawaiiPhysicsSettings PhysicsSettings;                                           // 0x0028 (size: 0x18)
    FVector Location;                                                                 // 0x0040 (size: 0xC)
    FVector PrevLocation;                                                             // 0x004C (size: 0xC)
    char padding_1[0x8];                                                              // 0x0058 (size: 0x8)
    FQuat PrevRotation;                                                               // 0x0060 (size: 0x10)
    FVector PoseLocation;                                                             // 0x0070 (size: 0xC)
    char padding_2[0x4];                                                              // 0x007C (size: 0x4)
    FQuat PoseRotation;                                                               // 0x0080 (size: 0x10)
    FVector PoseScale;                                                                // 0x0090 (size: 0xC)
    float LengthFromRoot;                                                             // 0x009C (size: 0x4)
    bool bDummy;                                                                      // 0x00A0 (size: 0x1)
    char padding_3[0xF];                                                              // 0x00A1 (size: 0xF)
    FQuat DiffRot;                                                                    // 0x00B0 (size: 0x10)
    TArray<FQuat> ChildRots;                                                          // 0x00C0 (size: 0x10)

}; // Size: 0xD0

struct FKawaiiPhysicsSettings
{
    float Damping;                                                                    // 0x0000 (size: 0x4)
    float WorldDampingLocation;                                                       // 0x0004 (size: 0x4)
    float WorldDampingRotation;                                                       // 0x0008 (size: 0x4)
    float Stiffness;                                                                  // 0x000C (size: 0x4)
    float Radius;                                                                     // 0x0010 (size: 0x4)
    float LimitAngle;                                                                 // 0x0014 (size: 0x4)

}; // Size: 0x18

struct FPlanarLimit : public FCollisionLimitBase
{
    FPlane Plane;                                                                     // 0x0060 (size: 0x10)

}; // Size: 0x70

struct FSphericalLimit : public FCollisionLimitBase
{
    float Radius;                                                                     // 0x0060 (size: 0x4)
    ESphericalLimitType LimitType;                                                    // 0x0064 (size: 0x1)

}; // Size: 0x70

#endif
