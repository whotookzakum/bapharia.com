#ifndef UE4SS_SDK_AB_CommonNPC_HPP
#define UE4SS_SDK_AB_CommonNPC_HPP

class UAB_CommonNPC_C : public USBNpcCharacterAnimInstance
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0FF0 (size: 0x8)
    FAnimNode_Root AnimGraphNode_Root;                                                // 0x0FF8 (size: 0x30)
    FASAnimNode_StateMachine ASAnimGraphNode_StateMachine;                            // 0x1028 (size: 0x310)
    FAnimNode_Slot AnimGraphNode_Slot_1;                                              // 0x1338 (size: 0x48)
    FSBAnimNode_LegIK SBAnimGraphNode_LegIK;                                          // 0x1380 (size: 0x7C0)
    FAnimNode_ConvertLocalToComponentSpace AnimGraphNode_LocalToComponentSpace;       // 0x1B40 (size: 0x20)
    FAnimNode_ConvertComponentToLocalSpace AnimGraphNode_ComponentToLocalSpace;       // 0x1B60 (size: 0x20)
    FSBAnimNode_PoseAlong SBAnimGraphNode_PoseAlong;                                  // 0x1B80 (size: 0x210)
    FSBAnimNode_LookAt SBAnimGraphNode_LookAt;                                        // 0x1D90 (size: 0xD00)
    FSBAnimNode_CustomBoneScaleLocal SBAnimGraphNode_CustomBoneScaleLocal;            // 0x2A90 (size: 0x1048)
    FAnimNode_Slot AnimGraphNode_Slot;                                                // 0x3AD8 (size: 0x48)
    class UASStateMachine* SM_Main;                                                   // 0x3B20 (size: 0x8)
    class UASAnimationSet* AnimSet;                                                   // 0x3B28 (size: 0x8)
    FString Wait_Stance;                                                              // 0x3B30 (size: 0x10)
    float Temp_Float;                                                                 // 0x3B40 (size: 0x4)
    float Counter;                                                                    // 0x3B44 (size: 0x4)
    bool StartCounter;                                                                // 0x3B48 (size: 0x1)
    bool StartWaitCounter;                                                            // 0x3B49 (size: 0x1)
    char padding_0[0x2];                                                              // 0x3B4A (size: 0x2)
    float WaitCounter;                                                                // 0x3B4C (size: 0x4)
    FName NPC_Stance;                                                                 // 0x3B50 (size: 0x8)
    float HeelLength;                                                                 // 0x3B58 (size: 0x4)
    char padding_1[0x4];                                                              // 0x3B5C (size: 0x4)
    class APawn* NewVar_0;                                                            // 0x3B60 (size: 0x8)

    void AnimGraph(FPoseLink& AnimGraph);
    void BlueprintInitializeAnimation();
    void BlueprintUpdateAnimation(float DeltaTimeX);
    void ExecuteUbergraph_AB_CommonNPC(int32 EntryPoint);
}; // Size: 0x3B68

#endif
