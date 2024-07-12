#ifndef UE4SS_SDK_CharaCreate_DressVisibilitySwitchOff_HPP
#define UE4SS_SDK_CharaCreate_DressVisibilitySwitchOff_HPP

class UCharaCreate_DressVisibilitySwitchOff_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* DressVisibilitySwitch;                                             // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* DressVisibilitySwitchLabel;                            // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* DressVisibilitySwitchLabel2;                           // 0x0290 (size: 0x8)
    FCharaCreate_DressVisibilitySwitchOff_COnSwitchOffPressed OnSwitchOffPressed;     // 0x0298 (size: 0x10)
    void OnSwitchOffPressed();

    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CharaCreate_DressVisibilitySwitchOff(int32 EntryPoint);
    void OnSwitchOffPressed__DelegateSignature();
}; // Size: 0x2A8

#endif
