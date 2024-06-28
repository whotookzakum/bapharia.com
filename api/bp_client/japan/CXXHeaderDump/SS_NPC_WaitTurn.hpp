#ifndef UE4SS_SDK_SS_NPC_WaitTurn_HPP
#define UE4SS_SDK_SS_NPC_WaitTurn_HPP

class USS_NPC_WaitTurn_C : public USBCustomState_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0040 (size: 0x8)
    float Start_Ratio;                                                                // 0x0048 (size: 0x4)
    float End_Ratio;                                                                  // 0x004C (size: 0x4)
    float Complete_Ratio;                                                             // 0x0050 (size: 0x4)

    void IsCompleteAnimTimeRatio(class USBNpcCharacterAnimInstance* AnimInstance, bool& IsCompleted);
    void SetCompleteAnimTimeRatio(class USBNpcCharacterAnimInstance* AnimInstance, bool IsCompleted);
    void GetTempAnimTimeLength(class USBNpcCharacterAnimInstance* AnimInstance, float& AnimTimeLength);
    void GetTempAnimTimeRatio(class USBNpcCharacterAnimInstance* AnimInstance, float& AnimTimeRatio);
    void SetTempAnimTimeLength(class USBNpcCharacterAnimInstance* AnimInstance, float AnimTimeLength);
    void Set Temp Anim Time Ratio(class USBNpcCharacterAnimInstance* AnimInstance, float AnimTimeRatio);
    void GetStartTime(class USBNpcCharacterAnimInstance* Anim Instance, FDateTime& StartTime);
    void SetStartTime(class USBNpcCharacterAnimInstance* Anim Instance);
    void EndProcess(class ASBMobCharacter* MobCharacter, class USBNpcCharacterAnimInstance* AnimInstance);
    void TickDelegateProcess(class AActor* Actor, class USBNpcCharacterAnimInstance* AnimInstance);
    void TickProcess(class USBNpcCharacterAnimInstance* AnimInstance);
    void BeginProcess(class ASBMobCharacter* MobCharacer, class USBNpcCharacterAnimInstance* AnimInstance);
    void ReceiveEndPlay(class UAnimInstance* AnimInstance);
    void TickDelegate(class ASBMobCharacter* InMobCharacter);
    void ReceiveBeginPlay(class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ReceiveTick(float DeltaTime, class UAnimInstance* AnimInstance, const class UASAnimationSet* AnimationSet);
    void ExecuteUbergraph_SS_NPC_WaitTurn(int32 EntryPoint);
}; // Size: 0x54

#endif
