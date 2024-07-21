#ifndef UE4SS_SDK_UD_NpcCanWander_HPP
#define UE4SS_SDK_UD_NpcCanWander_HPP

class UUD_NpcCanWander_C : public USBUtilityDataProvider_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0030 (size: 0x8)
    class ASBMobCharacter* OwnerCharacter;                                            // 0x0038 (size: 0x8)

    float ReceiveFetchValue();
    void ReceiveInitialize(class USBUtilityBrainComponent* OwnerComponent);
    void OnWanderingModeChanged(bool bCanWander);
    void ExecuteUbergraph_UD_NpcCanWander(int32 EntryPoint);
}; // Size: 0x40

#endif
