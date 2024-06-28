#ifndef UE4SS_SDK_ActionSystem_HPP
#define UE4SS_SDK_ActionSystem_HPP

#include "ActionSystem_enums.hpp"

struct FASActiveTransition
{
    char padding_0[0x98];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x98

struct FASAnimInstanceProxy : public FAnimInstanceProxy
{
    char padding_0[0x820];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x820

struct FASAnimNode_StateMachine : public FAnimNode_Base
{
    FString NodeName;                                                                 // 0x0010 (size: 0x10)
    class UASStateMachine* StateMachine;                                              // 0x0020 (size: 0x8)
    class UASAnimationSet* AnimationSet;                                              // 0x0028 (size: 0x8)
    float PlayRate;                                                                   // 0x0030 (size: 0x4)
    int32 MaxTransitionsPerFrame;                                                     // 0x0034 (size: 0x4)
    TArray<FString> BlendSpaceName;                                                   // 0x0038 (size: 0x10)
    TArray<float> BlendSpaceValue;                                                    // 0x0048 (size: 0x10)
    FPoseLink BasePose;                                                               // 0x0058 (size: 0x10)
    bool bEnableStateChangeNotify;                                                    // 0x0068 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0069 (size: 0x7)
    FASStateInstance_StateMachine MachineInstance;                                    // 0x0070 (size: 0x158)
    char padding_1[0x20];                                                             // 0x01C8 (size: 0x20)
    TArray<class UASState_Base*> CustomStates;                                        // 0x01E8 (size: 0x10)
    TArray<class UASAnimNotify_StateChange*> StateChangeNotifies;                     // 0x01F8 (size: 0x10)
    char padding_2[0x10];                                                             // 0x0208 (size: 0x10)
    TMap<class FString, class UASStateMachine*> DynamicSubMachine;                    // 0x0218 (size: 0x50)
    TMap<class FString, class UASAnimationSet*> DynamicAnimationSet;                  // 0x0268 (size: 0x50)

}; // Size: 0x310

struct FASAnimationSetEntry
{
    FName EntryName;                                                                  // 0x0000 (size: 0x8)
    TArray<class UASState_Base*> CustomStates;                                        // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FASAnimationSetEntry_BlendSpace : public FASAnimationSetEntry
{
    class UBlendSpaceBase* BlendSpace;                                                // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FASAnimationSetEntry_Sequence : public FASAnimationSetEntry
{
    class UAnimSequenceBase* Sequence;                                                // 0x0018 (size: 0x8)
    float StartOffset;                                                                // 0x0020 (size: 0x4)
    float EndOffset;                                                                  // 0x0024 (size: 0x4)
    TArray<FASPlayRateSection> PlayRate;                                              // 0x0028 (size: 0x10)
    float RootMotionScale;                                                            // 0x0038 (size: 0x4)

}; // Size: 0x40

struct FASAnimationSetEntry_StateMachine : public FASAnimationSetEntry
{
    class UASStateMachine* StateMachine;                                              // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FASAttackCollision
{
    FName SocketName;                                                                 // 0x0000 (size: 0x8)
    FVector LocationOffset;                                                           // 0x0008 (size: 0xC)
    FRotator RotationOffset;                                                          // 0x0014 (size: 0xC)
    EASAttackCollisionShape Shape;                                                    // 0x0020 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0021 (size: 0x3)
    float SphereRadius;                                                               // 0x0024 (size: 0x4)
    float CapsuleHalfHeight;                                                          // 0x0028 (size: 0x4)
    float CapsuleRadius;                                                              // 0x002C (size: 0x4)
    FVector BoxExtent;                                                                // 0x0030 (size: 0xC)
    float DelayTime;                                                                  // 0x003C (size: 0x4)
    float LifeTime;                                                                   // 0x0040 (size: 0x4)

}; // Size: 0x58

struct FASEDTransitionCheckCommandDelegatePair
{
    char padding_0[0x20];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x20

struct FASEmptyStruct
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FASEquipWeapon
{
    int32 InventoryIndex;                                                             // 0x0000 (size: 0x4)
    FVector Location;                                                                 // 0x0004 (size: 0xC)
    FRotator Rotation;                                                                // 0x0010 (size: 0xC)
    FVector Scale3D;                                                                  // 0x001C (size: 0xC)

}; // Size: 0x28

struct FASEventDrivenTransitionContext
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FASPlayRateSection
{
    float Time;                                                                       // 0x0000 (size: 0x4)
    float Scale;                                                                      // 0x0004 (size: 0x4)
    EASEasing Easing;                                                                 // 0x0008 (size: 0x1)

}; // Size: 0xC

struct FASReplicateState
{
    int16 StateMachine;                                                               // 0x0000 (size: 0x2)
    int16 CurrentState;                                                               // 0x0002 (size: 0x2)

}; // Size: 0x4

struct FASReplicateStateInfo
{
    int16 StateMachineNum;                                                            // 0x0000 (size: 0x2)
    char padding_0[0x6];                                                              // 0x0002 (size: 0x6)
    TArray<FASReplicateState> StateMachineList;                                       // 0x0008 (size: 0x10)
    uint32 Hash;                                                                      // 0x0018 (size: 0x4)

}; // Size: 0x20

struct FASStateInstance : public FASStateInstanceBase
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

struct FASStateInstanceBase
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FASStateInstancePtr
{
    char padding_0[0x18];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x18

struct FASStateInstance_AimOffset : public FASStateInstance_BlendSpace
{
    char padding_0[0x118];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x118

struct FASStateInstance_BlendSpace : public FASStateInstance
{
    char padding_0[0x118];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x118

struct FASStateInstance_Conduit : public FASStateInstance
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

struct FASStateInstance_Sequence : public FASStateInstance
{
    char padding_0[0x88];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x88

struct FASStateInstance_Slot : public FASStateInstance
{
    char padding_0[0x118];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x118

struct FASStateInstance_StateMachine : public FASStateInstance
{
    TArray<FASStateInstancePtr> States;                                               // 0x0138 (size: 0x10)

}; // Size: 0x158

struct FASStateInstance_Terminate : public FASStateInstance
{
    char padding_0[0x1E8];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x1E8

struct FASStateInstance_Through : public FASStateInstance
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class AASCharacter : public AASCharacterBase
{
    class UASCollisionGroupComponent* CollisionGroup;                                 // 0x04F8 (size: 0x8)
    class UASCollisionSphereComponent* DamageCollision;                               // 0x0500 (size: 0x8)

    bool IsSuperArmor();
    bool IsHitAttack();
}; // Size: 0x580

class AASCharacterBase : public ACharacter
{
    FASReplicateStateInfo ReplicateStateInfo;                                         // 0x04C8 (size: 0x20)

    void SendCommand(FName Command, bool Force, bool bNoEndCancel);
    void SendAnimCommand(FString Command, bool Force);
    void ReceiveStateChange(FString PreviousStateName, FString NextStateName);
    void OnRep_ReplicateStateInfo();
    void JumpMachineState(FString MachinName, FString StateName);
    bool HasAnimTag(FName Tag);
    TArray<FName> GetAnimTags();
}; // Size: 0x4F0

class IASCollisionInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class IASCollisionListener : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool OnAttackOverlapCallback(class UPrimitiveComponent* MyComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, const FHitResult& SweepResult);
}; // Size: 0x28

class UASAnimInstance : public UAnimInstance
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)

    void SetDynamicTransition(const FString AnimNodeName, const FString TransitionName, float CrossfadeDuration);
    void SetDynamicSubMachine(const FString AnimNodeName, const FString StateName, const class UASStateMachine* StateMachineAsset);
    void SetDynamicSequence(const FString AnimNodeName, const FString StateName, const class UAnimSequenceBase* SequenceAsset);
    void SetDynamicAnimationSet(const FString AnimNodeName, const FString StateName, const class UASAnimationSet* AnimationSetAsset);
    void SendCommand(FName Command, const bool bForce);
    void ReceiveStateChange(FString PreviousStateName, FString NextStateName);
    void JumpMachineState(FString MachinName, FString StateName);
    bool IsHitShift();
    bool HasTagAny(const TArray<FName>& Tags);
    bool HasTag(const FName& Tag);
    void AnimNotify_StateChange(class UASAnimNotify_StateChange* Notify);
}; // Size: 0x470

class UASAnimNotifyState : public UAnimNotifyState
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UASAnimNotifyState_Attack : public UASAnimNotifyState
{
    TArray<FASAttackCollision> AttackCollisions;                                      // 0x0038 (size: 0x10)

}; // Size: 0x98

class UASAnimNotifyState_EndCancel : public UASAnimNotifyState
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UASAnimNotifyState_Float : public UASAnimNotifyState
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UASAnimNotifyState_Input : public UASAnimNotifyState
{
    float ShiftStartTime;                                                             // 0x0030 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0034 (size: 0x4)
    TArray<FName> Commands;                                                           // 0x0038 (size: 0x10)

}; // Size: 0x48

class UASAnimNotifyState_Invincible : public UASAnimNotifyState
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UASAnimNotifyState_SuperArmor : public UASAnimNotifyState
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UASAnimNotify_EndCancel : public UAnimNotify
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

class UASAnimNotify_HitShift : public UAnimNotify
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

class UASAnimNotify_StateChange : public UAnimNotify
{
    char padding_0[0x78];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x78

class UASAnimationSet : public UDataAsset
{
    TArray<class UASAnimationSet*> Parents;                                           // 0x0030 (size: 0x10)
    TArray<FASAnimationSetEntry_Sequence> Sequences;                                  // 0x0040 (size: 0x10)
    TArray<FASAnimationSetEntry_BlendSpace> BlendSpaces;                              // 0x0050 (size: 0x10)
    TArray<FASAnimationSetEntry_StateMachine> StateMachines;                          // 0x0060 (size: 0x10)

    class UASStateMachine* GetStateMachine(const FName& KeyName);
    class UAnimSequenceBase* GetSequence(const FName& KeyName);
    class UBlendSpaceBase* GetBlendSpace(const FName& KeyName);
}; // Size: 0x78

class UASCharacterMovementComponent : public UCharacterMovementComponent
{
    char padding_0[0xB20];                                                            // 0x0000 (size: 0x0)

    void SetImpulse(FVector Impulse, bool bVelocityChange);
    void SendCommand(FName Command, bool Force);
    void SendAnimCommand(FString Command, bool Force);
    bool HasAnimTag(FName Tag);
}; // Size: 0xB20

class UASCollisionBoxComponent : public UBoxComponent
{
    char padding_0[0x4B0];                                                            // 0x0000 (size: 0x0)

    void OnAttackEndOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);
    void OnAttackBeginOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);
}; // Size: 0x4B0

class UASCollisionCapsuleComponent : public UCapsuleComponent
{
    char padding_0[0x4B0];                                                            // 0x0000 (size: 0x0)

    void OnAttackEndOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);
    void OnAttackBeginOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);
}; // Size: 0x4B0

class UASCollisionGroupComponent : public USceneComponent
{
    char padding_0[0x230];                                                            // 0x0000 (size: 0x0)

    void StopAttack();
    void StartAttack(int32 HitCount, float HitInterval);
    void SetActiveCollision(bool Active);
    void OnAttackEndOverlap(class UPrimitiveComponent* MyComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp);
    void OnAttackBeginOverlap(class UPrimitiveComponent* MyComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, const FHitResult& SweepResult);
}; // Size: 0x230

class UASCollisionSphereComponent : public USphereComponent
{
    char padding_0[0x4C0];                                                            // 0x0000 (size: 0x0)

    void OnAttackEndOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex);
    void OnAttackBeginOverlap(class UPrimitiveComponent* OverlappedComponent, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, int32 OtherBodyIndex, bool bFromSweep, const FHitResult& SweepResult);
}; // Size: 0x4C0

class UASCustomStartSate_Base : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UASDamageType : public UDamageType
{
    uint8 bUseDirection;                                                              // 0x0040 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0041 (size: 0x3)
    FVector Direction;                                                                // 0x0044 (size: 0xC)
    float HitStopTimeAttack;                                                          // 0x0050 (size: 0x4)
    float HitStopTimeDamage;                                                          // 0x0054 (size: 0x4)

}; // Size: 0x58

class UASSMNode : public UObject
{
    FString StateName;                                                                // 0x0028 (size: 0x10)
    TArray<class UASSMNode*> LinkedTo;                                                // 0x0038 (size: 0x10)
    class UASStateMachine* MachineAsset;                                              // 0x0048 (size: 0x8)

}; // Size: 0x50

class UASSMStateNode : public UASSMNode
{
    TArray<FName> Tags;                                                               // 0x0050 (size: 0x10)
    uint8 bAlwaysCanceledCommand;                                                     // 0x0060 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0061 (size: 0x7)
    TArray<class UASState_Base*> CustomStates;                                        // 0x0068 (size: 0x10)
    TArray<class UASState_Base*> LocalCustomStates;                                   // 0x0078 (size: 0x10)
    int32 StateIndex;                                                                 // 0x0088 (size: 0x4)
    char padding_1[0x4];                                                              // 0x008C (size: 0x4)
    TArray<class UASSMTransitionNode_Base*> TransitionList;                           // 0x0090 (size: 0x10)

}; // Size: 0xA0

class UASSMState_AimOffset : public UASSMState_BlendSpace
{
    char padding_0[0xC8];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC8

class UASSMState_BlendSpace : public UASSMStateNode
{
    float PlayRate;                                                                   // 0x00A0 (size: 0x4)
    bool bLoop;                                                                       // 0x00A4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00A5 (size: 0x3)
    float RootMotionScale;                                                            // 0x00A8 (size: 0x4)
    FName BlendSpaceName;                                                             // 0x00AC (size: 0x8)
    bool bReplaceWithThroughNodeInServer;                                             // 0x00B4 (size: 0x1)
    char padding_1[0x3];                                                              // 0x00B5 (size: 0x3)
    FAnimationGroupReference SyncGroup;                                               // 0x00B8 (size: 0xC)

}; // Size: 0xC8

class UASSMState_Conduit : public UASSMStateNode
{
    char padding_0[0xA0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xA0

class UASSMState_Sequence : public UASSMStateNode
{
    float PlayRate;                                                                   // 0x00A0 (size: 0x4)
    bool bLoop;                                                                       // 0x00A4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00A5 (size: 0x3)
    float RootMotionScale;                                                            // 0x00A8 (size: 0x4)
    FName SequenceName;                                                               // 0x00AC (size: 0x8)
    FAnimationGroupReference SyncGroup;                                               // 0x00B4 (size: 0xC)

}; // Size: 0xC0

class UASSMState_Slot : public UASSMStateNode
{
    FName SlotName;                                                                   // 0x00A0 (size: 0x8)
    uint8 bInertialBlend;                                                             // 0x00A8 (size: 0x1)

}; // Size: 0xB0

class UASSMState_StateMachine : public UASSMStateNode
{
    float PlayRate;                                                                   // 0x00A0 (size: 0x4)
    FName StateMachineName;                                                           // 0x00A4 (size: 0x8)
    uint8 bDisableChildMachinePlayEnd;                                                // 0x00AC (size: 0x1)
    uint8 bSkipPlayEndTransitionNumCheck;                                             // 0x00AC (size: 0x1)
    uint8 bSkipFirstTransition;                                                       // 0x00AC (size: 0x1)
    char padding_0[0x3];                                                              // 0x00AD (size: 0x3)
    class UASAnimationSet* AnimationSetAsset;                                         // 0x00B0 (size: 0x8)
    uint8 bReplicates;                                                                // 0x00B8 (size: 0x1)

}; // Size: 0xC0

class UASSMState_Terminate : public UASSMStateNode
{
    char padding_0[0xA0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xA0

class UASSMState_Through : public UASSMStateNode
{
    char padding_0[0xA0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xA0

class UASSMTransitionNode : public UASSMTransitionNode_Base
{
    char padding_0[0xC8];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC8

class UASSMTransitionNodeEventDriven : public UASSMTransitionNode_Base
{
    char padding_0[0xC8];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC8

class UASSMTransitionNode_Base : public UASSMNode
{
    TArray<class UASTransition_CommonBase*> TransitionRules;                          // 0x0050 (size: 0x10)
    int32 PriorityOrder;                                                              // 0x0060 (size: 0x4)
    uint8 bEnable;                                                                    // 0x0064 (size: 0x1)
    bool Bidirectional;                                                               // 0x0065 (size: 0x1)
    uint8 bAuthorityOnly;                                                             // 0x0066 (size: 0x1)
    uint8 bLocallyControlledOnly;                                                     // 0x0066 (size: 0x1)
    char padding_0[0x1];                                                              // 0x0067 (size: 0x1)
    float CrossfadeDuration;                                                          // 0x0068 (size: 0x4)
    EASAlphaBlendOption BlendOption;                                                  // 0x006C (size: 0x1)
    char padding_1[0x3];                                                              // 0x006D (size: 0x3)
    class UCurveFloat* CustomBlendCurve;                                              // 0x0070 (size: 0x8)
    uint8 bRootMotionBlend;                                                           // 0x0078 (size: 0x1)
    uint8 bSyncTime;                                                                  // 0x0078 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0079 (size: 0x3)
    float StartTime;                                                                  // 0x007C (size: 0x4)
    FString StartStateName;                                                           // 0x0080 (size: 0x10)
    TSubclassOf<class UASCustomStartSate_Base> CustomStartState;                      // 0x0090 (size: 0x8)
    TArray<FAnimNotifyEvent> InterruptNotifyEvents;                                   // 0x0098 (size: 0x10)
    uint8 bClearCommand;                                                              // 0x00A8 (size: 0x1)
    uint8 bResetInputNotifyTimer;                                                     // 0x00A8 (size: 0x1)
    char padding_3[0x7];                                                              // 0x00A9 (size: 0x7)
    class UASSMStateNode* PreviousState;                                              // 0x00B0 (size: 0x8)
    class UASSMStateNode* NextState;                                                  // 0x00B8 (size: 0x8)
    TEnumAsByte<ENextStateType> NextStateType;                                        // 0x00C0 (size: 0x1)

}; // Size: 0xC8

class UASStateMachine : public UObject
{
    class UASSMStateNode* RootNode;                                                   // 0x0028 (size: 0x8)
    TArray<class UASSMStateNode*> StateTable;                                         // 0x0030 (size: 0x10)
    class UASAnimationSet* AnimationSetAsset;                                         // 0x0040 (size: 0x8)
    bool DisableAnimationSetOverride;                                                 // 0x0048 (size: 0x1)
    bool bInertialBlend;                                                              // 0x0049 (size: 0x1)

}; // Size: 0x50

class UASState_Base : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UASState_BlueprintBase : public UASState_Base
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)

    void StopSlotAnimation(float BlendTime);
    void SetRootMotionScale(float NewScale, FName RootMotionScaleName);
    void SetPlayRateScale(float RateScale);
    void SetPlayRate(float NewRate);
    void SetBlendSpaceInputY(float NewBlendInputY);
    void SetBlendSpaceInputX(float NewBlendInputX);
    void SetBlendSpaceInput(FVector NewBlendInput);
    void SetAnimTimeRatio(float TimeRatio);
    void SetAnimTime(float Time);
    void ResetRootMotionScale(FName RootMotionScaleName);
    void ResetPlayRate();
    void ReceiveTick(float DeltaTime, class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ReceiveEndPlay(class UAnimInstance* AnimInstance);
    void ReceiveBeginPlay(class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void PlaySlotAnimation(class UAnimSequenceBase* AnimSequence, float BlendTime, bool bLoop);
    bool HasCommand(FName Command, bool bAlwaysCanceledCommand, bool bOnce);
    float GetRootMotionDistanceRange(float StartTime, float EndTime);
    float GetRootMotionDistance();
    float GetAnimTimeRatio();
    float GetAnimTimeLength();
    float GetAnimTime();
}; // Size: 0x38

class UASTransitionEventDriven_Base : public UASTransition_CommonBase
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UASTransitionEventDriven_Command : public UASTransitionEventDriven_Base
{
    TArray<FName> Commands;                                                           // 0x0038 (size: 0x10)

}; // Size: 0x48

class UASTransition_Base : public UASTransition_CommonBase
{
    uint8 bNotEqual;                                                                  // 0x0028 (size: 0x1)

}; // Size: 0x30

class UASTransition_BlueprintBase : public UASTransition_Base
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)

    bool ReceiveCanEnter(class UAnimInstance* AnimInstance);
    void OutputLog(FString Value);
    bool IsPlayEnd();
    bool HasCommand(FName Command, bool bOnce);
    float GetElapsedTime();
    float GetAnimTimeLength();
    float GetAnimTime();
    TEnumAsByte<EAnimCommandState> CheckCommandState(FName Command, bool bOnce);
    bool CheckCommand(FString Command, bool bOnce);
}; // Size: 0x50

class UASTransition_Command : public UASTransition_Base
{
    FName Command;                                                                    // 0x0030 (size: 0x8)

}; // Size: 0x38

class UASTransition_CommonBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UASTransition_MovementMode : public UASTransition_Base
{
    TEnumAsByte<EMovementMode> MovementMode;                                          // 0x0030 (size: 0x1)
    uint8 CustomMovementMode;                                                         // 0x0031 (size: 0x1)

}; // Size: 0x38

class UASTransition_PlayEnd : public UASTransition_Base
{
    uint8 bIgnoreEndCancel;                                                           // 0x0030 (size: 0x1)

}; // Size: 0x38

#endif
