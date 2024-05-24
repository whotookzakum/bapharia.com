#ifndef UE4SS_SDK_AB_ExtraNPC_Common_Demo_HPP
#define UE4SS_SDK_AB_ExtraNPC_Common_Demo_HPP

class UAB_ExtraNPC_Common_Demo_C : public USBNpcCharacterAnimInstance
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0FF0 (size: 0x8)
    FAnimNode_Slot AnimGraphNode_Slot_1;                                              // 0x0FF8 (size: 0x48)
    FSBAnimNode_LookAt SBAnimGraphNode_LookAt;                                        // 0x1040 (size: 0xD00)
    FAnimNode_ConvertComponentToLocalSpace AnimGraphNode_ComponentToLocalSpace_1;     // 0x1D40 (size: 0x20)
    FAnimNode_ConvertLocalToComponentSpace AnimGraphNode_LocalToComponentSpace_1;     // 0x1D60 (size: 0x20)
    FASAnimNode_StateMachine ASAnimGraphNode_StateMachine;                            // 0x1D80 (size: 0x310)
    FAnimNode_Slot AnimGraphNode_Slot;                                                // 0x2090 (size: 0x48)
    FAnimNode_Root AnimGraphNode_Root_1;                                              // 0x20D8 (size: 0x30)
    FAnimNode_ConvertComponentToLocalSpace AnimGraphNode_ComponentToLocalSpace;       // 0x2108 (size: 0x20)
    FAnimNode_ConvertLocalToComponentSpace AnimGraphNode_LocalToComponentSpace;       // 0x2128 (size: 0x20)
    char padding_0[0x8];                                                              // 0x2148 (size: 0x8)
    FAnimNode_KawaiiPhysics AnimGraphNode_KawaiiPhysics;                              // 0x2150 (size: 0x610)
    FAnimNode_LinkedInputPose AnimGraphNode_LinkedInputPose;                          // 0x2760 (size: 0x118)
    FSBAnimNode_CustomBoneScaleLocal SBAnimGraphNode_CustomBoneScaleLocal;            // 0x2878 (size: 0x1048)
    FAnimNode_Root AnimGraphNode_Root;                                                // 0x38C0 (size: 0x30)
    FAnimNode_UseCachedPose AnimGraphNode_UseCachedPose_1;                            // 0x38F0 (size: 0x28)
    FAnimNode_UseCachedPose AnimGraphNode_UseCachedPose;                              // 0x3918 (size: 0x28)
    FAnimNode_SaveCachedPose AnimGraphNode_SaveCachedPose;                            // 0x3940 (size: 0x158)
    FAnimNode_LayeredBoneBlend AnimGraphNode_LayeredBoneBlend;                        // 0x3A98 (size: 0xC0)
    FAnimNode_LinkedAnimGraph AnimGraphNode_LinkedAnimGraph_3;                        // 0x3B58 (size: 0xA0)
    FAnimNode_LinkedAnimGraph AnimGraphNode_LinkedAnimGraph_2;                        // 0x3BF8 (size: 0xA0)
    FAnimNode_LinkedAnimGraph AnimGraphNode_LinkedAnimGraph_1;                        // 0x3C98 (size: 0xA0)
    FAnimNode_LinkedAnimGraph AnimGraphNode_LinkedAnimGraph;                          // 0x3D38 (size: 0xA0)
    FAnimNode_BlendListByBool AnimGraphNode_BlendListByBool;                          // 0x3DD8 (size: 0xA8)
    bool __CustomProperty_bActive_0ECE649E48FF8768D0CAC1A4619446C1;                   // 0x3E80 (size: 0x1)
    bool __CustomProperty_bActive_9DE4EE444D7283CC57EA209CD6BD8963;                   // 0x3E81 (size: 0x1)
    bool __CustomProperty_bActive_8EF3463841808113CD3A5DB2B81608B9;                   // 0x3E82 (size: 0x1)
    bool __CustomProperty_bActive_62B1D4C54227581CABC290B203E7A33B;                   // 0x3E83 (size: 0x1)
    char padding_1[0x4];                                                              // 0x3E84 (size: 0x4)
    class UASAnimationSet* AnimSet;                                                   // 0x3E88 (size: 0x8)

    void HairLayer(FPoseLink InPose, FVector Acceralation, bool Active, FPoseLink& HairLayer);
    void AnimGraph(FPoseLink& AnimGraph);
    void EvaluateGraphExposedInputs_ExecuteUbergraph_AB_ExtraNPC_Common_Demo_AnimGraphNode_LayeredBoneBlend_0F69395E4C7BF0B1A9E39E81E7A73811();
    void BlueprintUpdateAnimation(float DeltaTimeX);
    void BlueprintInitializeAnimation();
    void ExecuteUbergraph_AB_ExtraNPC_Common_Demo(int32 EntryPoint);
}; // Size: 0x3E90

#endif
