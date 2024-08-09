#ifndef UE4SS_SDK_SS_NPC_WalkRun_HPP
#define UE4SS_SDK_SS_NPC_WalkRun_HPP

class USS_NPC_WalkRun_C : public USBCustomState_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0040 (size: 0x8)
    float MotionMaxSpeed;                                                             // 0x0048 (size: 0x4)
    float MotionMinSpeed;                                                             // 0x004C (size: 0x4)
    float MinBlendRate;                                                               // 0x0050 (size: 0x4)
    float StopSpeed;                                                                  // 0x0054 (size: 0x4)
    float ChangeFrontSpeed;                                                           // 0x0058 (size: 0x4)
    bool NoWalkRun;                                                                   // 0x005C (size: 0x1)

    void FNC_GetBSFront(class USBCharacterAnimInstance* NpcAnim, float FrontVelocity, float DeltaSec, float& BS_Front);
    void ReceiveTick(float DeltaTime, class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ReceiveBeginPlay(class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ExecuteUbergraph_SS_NPC_WalkRun(int32 EntryPoint);
}; // Size: 0x5D

#endif
