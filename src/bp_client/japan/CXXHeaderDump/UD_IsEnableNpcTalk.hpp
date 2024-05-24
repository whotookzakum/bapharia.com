#ifndef UE4SS_SDK_UD_IsEnableNpcTalk_HPP
#define UE4SS_SDK_UD_IsEnableNpcTalk_HPP

class UUD_IsEnableNpcTalk_C : public USBUtilityDataProvider_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0030 (size: 0x8)
    class ASBMobCharacter* OwnerMobCharacter;                                         // 0x0038 (size: 0x8)

    float ReceiveFetchValue();
    void ReceiveInitialize(class USBUtilityBrainComponent* OwnerComponent);
    void ExecuteUbergraph_UD_IsEnableNpcTalk(int32 EntryPoint);
}; // Size: 0x40

#endif
