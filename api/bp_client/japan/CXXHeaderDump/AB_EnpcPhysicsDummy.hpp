#ifndef UE4SS_SDK_AB_EnpcPhysicsDummy_HPP
#define UE4SS_SDK_AB_EnpcPhysicsDummy_HPP

class UAB_EnpcPhysicsDummy_C : public USBPhysicsAnimInstance
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x04A0 (size: 0x8)
    FAnimNode_Root AnimGraphNode_Root;                                                // 0x04A8 (size: 0x30)
    FAnimNode_LinkedInputPose AnimGraphNode_LinkedInputPose;                          // 0x04D8 (size: 0x118)

    void AnimGraph(FPoseLink InPose, FPoseLink& AnimGraph);
    void ExecuteUbergraph_AB_EnpcPhysicsDummy(int32 EntryPoint);
}; // Size: 0x5F0

#endif
