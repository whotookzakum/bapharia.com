#ifndef UE4SS_SDK_CharaCreate_DressVisibilitySwitchOn_HPP
#define UE4SS_SDK_CharaCreate_DressVisibilitySwitchOn_HPP

class UCharaCreate_DressVisibilitySwitchOn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* DressVisibilitySwitch;                                             // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* DressVisibilitySwitchLabel;                            // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* DressVisibilitySwitchLabel2;                           // 0x0290 (size: 0x8)
    class UImage* Image_120;                                                          // 0x0298 (size: 0x8)
    FCharaCreate_DressVisibilitySwitchOn_COnSwitchOnPressed OnSwitchOnPressed;        // 0x02A0 (size: 0x10)
    void OnSwitchOnPressed();

    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__DressVisibilitySwitch_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CharaCreate_DressVisibilitySwitchOn(int32 EntryPoint);
    void OnSwitchOnPressed__DelegateSignature();
}; // Size: 0x2B0

#endif
