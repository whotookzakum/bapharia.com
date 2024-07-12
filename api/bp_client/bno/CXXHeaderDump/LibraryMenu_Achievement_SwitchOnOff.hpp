#ifndef UE4SS_SDK_LibraryMenu_Achievement_SwitchOnOff_HPP
#define UE4SS_SDK_LibraryMenu_Achievement_SwitchOnOff_HPP

class ULibraryMenu_Achievement_SwitchOnOff_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* OnArea;                                                             // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* OnOffText;                                             // 0x0288 (size: 0x8)
    class UImage* TitleIcon;                                                          // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* TitltText;                                             // 0x0298 (size: 0x8)
    class UButton* VisibilitySwitch;                                                  // 0x02A0 (size: 0x8)
    FLibraryMenu_Achievement_SwitchOnOff_COnSwitchOnPressed OnSwitchOnPressed;        // 0x02A8 (size: 0x10)
    void OnSwitchOnPressed(bool outIsSetAchievement);
    bool IsSetAchievement;                                                            // 0x02B8 (size: 0x1)

    void DataSet(bool bInIsEnabled);
    void BndEvt__LibraryMenu_Achievement_SwitchOnOff_VisibilitySwitch_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_SwitchOnOff_VisibilitySwitch_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_SwitchOnOff_VisibilitySwitch_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void Construct();
    void SwitchOnOff(bool InIsSwitchOn);
    void ExecuteUbergraph_LibraryMenu_Achievement_SwitchOnOff(int32 EntryPoint);
    void OnSwitchOnPressed__DelegateSignature(bool outIsSetAchievement);
}; // Size: 0x2B9

#endif
