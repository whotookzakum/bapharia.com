#ifndef UE4SS_SDK_SS_NPCBeforeStance_HPP
#define UE4SS_SDK_SS_NPCBeforeStance_HPP

class USS_NPCBeforeStance_C : public USBCustomState_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0040 (size: 0x8)
    FName BeforeStance;                                                               // 0x0048 (size: 0x8)

    void ReceiveBeginPlay(class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ExecuteUbergraph_SS_NPCBeforeStance(int32 EntryPoint);
}; // Size: 0x50

#endif
