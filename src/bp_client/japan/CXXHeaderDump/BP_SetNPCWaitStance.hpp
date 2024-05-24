#ifndef UE4SS_SDK_BP_SetNPCWaitStance_HPP
#define UE4SS_SDK_BP_SetNPCWaitStance_HPP

class UBP_SetNPCWaitStance_C : public USBAnimNotify
{
    FName Stance;                                                                     // 0x0070 (size: 0x8)

    FString GetNotifyName();
    bool Received_Notify(class USkeletalMeshComponent* MeshComp, class UAnimSequenceBase* Animation);
}; // Size: 0x78

#endif
