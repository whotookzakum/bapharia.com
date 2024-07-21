#ifndef UE4SS_SDK_AB_HumanoidEnemy_HPP
#define UE4SS_SDK_AB_HumanoidEnemy_HPP

class UAB_HumanoidEnemy_C : public USBEnemyCharacterAnimInstance
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x1050 (size: 0x8)
    FAnimNode_Root AnimGraphNode_Root;                                                // 0x1058 (size: 0x30)
    FASAnimNode_StateMachine ASAnimGraphNode_StateMachine_1;                          // 0x1088 (size: 0x310)
    FAnimNode_Slot AnimGraphNode_Slot;                                                // 0x1398 (size: 0x48)
    FSBAnimNode_LookAt SBAnimGraphNode_LookAt;                                        // 0x13E0 (size: 0xD00)
    FSBAnimNode_LegIK SBAnimGraphNode_LegIK;                                          // 0x20E0 (size: 0x7C0)
    FAnimNode_ConvertLocalToComponentSpace AnimGraphNode_LocalToComponentSpace;       // 0x28A0 (size: 0x20)
    FAnimNode_ConvertComponentToLocalSpace AnimGraphNode_ComponentToLocalSpace;       // 0x28C0 (size: 0x20)
    FSBAnimNode_PoseAlong SBAnimGraphNode_PoseAlong;                                  // 0x28E0 (size: 0x210)
    FASAnimNode_StateMachine ASAnimGraphNode_StateMachine;                            // 0x2AF0 (size: 0x310)
    FAnimNode_LayeredBoneBlend AnimGraphNode_LayeredBoneBlend;                        // 0x2E00 (size: 0xC0)
    FAnimNode_PoseSnapshot AnimGraphNode_PoseSnapshot;                                // 0x2EC0 (size: 0x90)
    FSBAnimNode_CustomBoneScaleLocal SBAnimGraphNode_CustomBoneScaleLocal;            // 0x2F50 (size: 0x1048)
    FSBAnimNode_PartsDamage SBAnimGraphNode_PartsDamage;                              // 0x3F98 (size: 0x198)
    FAnimNode_SaveCachedPose AnimGraphNode_SaveCachedPose;                            // 0x4130 (size: 0x158)
    FAnimNode_UseCachedPose AnimGraphNode_UseCachedPose_1;                            // 0x4288 (size: 0x28)
    FAnimNode_UseCachedPose AnimGraphNode_UseCachedPose;                              // 0x42B0 (size: 0x28)
    FAnimNode_ModifyBone AnimGraphNode_ModifyBone_1;                                  // 0x42D8 (size: 0x108)
    FAnimNode_ModifyBone AnimGraphNode_ModifyBone;                                    // 0x43E0 (size: 0x108)
    class UASStateMachine* Main_SM;                                                   // 0x44E8 (size: 0x8)
    class UASAnimationSet* AST;                                                       // 0x44F0 (size: 0x8)
    class UASStateMachine* Sub_SM;                                                    // 0x44F8 (size: 0x8)
    FVector VB_NamePlate_Location;                                                    // 0x4500 (size: 0xC)
    FVector VB_BadStatus_Location;                                                    // 0x450C (size: 0xC)

    void AnimGraph(FPoseLink& AnimGraph);
    void BlueprintInitializeAnimation();
    void ExecuteUbergraph_AB_HumanoidEnemy(int32 EntryPoint);
}; // Size: 0x4518

#endif
