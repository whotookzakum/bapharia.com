#ifndef UE4SS_SDK_CharaCreate_DressVisibilityOnOffSwitch_HPP
#define UE4SS_SDK_CharaCreate_DressVisibilityOnOffSwitch_HPP

class UCharaCreate_DressVisibilityOnOffSwitch_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetSwitcher* DressVisibilityControlBtnSwitcher;                         // 0x0280 (size: 0x8)
    class UCharaCreate_DressVisibilitySwitchOff_C* DressVisibilitySwitchOff;          // 0x0288 (size: 0x8)
    class UCharaCreate_DressVisibilitySwitchOn_C* DressVisibilitySwitchOn;            // 0x0290 (size: 0x8)
    FCharaCreate_DressVisibilityOnOffSwitch_COnDressVisibilitySwitchClicked OnDressVisibilitySwitchClicked; // 0x0298 (size: 0x10)
    void OnDressVisibilitySwitchClicked(bool InIsDressVisibilitySwitchOn);
    bool IsDressVisibilityOn;                                                         // 0x02A8 (size: 0x1)

    void SetActiveDressVisibilitySwitch(bool InIsDressVisibilitySwitchOnActive);
    void BndEvt__DressVisibilitySwitchOff_K2Node_ComponentBoundEvent_3_OnSwitchOffPressed__DelegateSignature();
    void BndEvt__DressVisibilitySwitchOn_K2Node_ComponentBoundEvent_4_OnSwitchOnPressed__DelegateSignature();
    void ExecuteUbergraph_CharaCreate_DressVisibilityOnOffSwitch(int32 EntryPoint);
    void OnDressVisibilitySwitchClicked__DelegateSignature(bool InIsDressVisibilitySwitchOn);
}; // Size: 0x2A9

#endif
