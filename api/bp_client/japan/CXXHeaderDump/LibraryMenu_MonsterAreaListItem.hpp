#ifndef UE4SS_SDK_LibraryMenu_MonsterAreaListItem_HPP
#define UE4SS_SDK_LibraryMenu_MonsterAreaListItem_HPP

class ULibraryMenu_MonsterAreaListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* AreaText;                                              // 0x0280 (size: 0x8)
    class UImage* NewIcon;                                                            // 0x0288 (size: 0x8)
    class USBButton_C* SBButton_C_402;                                                // 0x0290 (size: 0x8)
    class UImage* TimeIcon1;                                                          // 0x0298 (size: 0x8)
    class UImage* TimeIcon2;                                                          // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* TimeIconSwitch;                                            // 0x02A8 (size: 0x8)
    FLibraryMenu_MonsterAreaListItem_COnSelect OnSelect;                              // 0x02B0 (size: 0x10)
    void OnSelect(int32 Value);
    int32 EnterValue;                                                                 // 0x02C0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02C4 (size: 0x4)
    FSlateColor DefaultTextColor;                                                     // 0x02C8 (size: 0x28)
    FSlateColor SelectedTextColor;                                                    // 0x02F0 (size: 0x28)
    FButtonStyle NormalBtn;                                                           // 0x0318 (size: 0x278)
    FButtonStyle SelectedBtn;                                                         // 0x0590 (size: 0x278)
    bool BtnSelected;                                                                 // 0x0808 (size: 0x1)

    void SetSelectColor(bool Selected);
    void SetTimeIcon(int32 Type);
    void SetNewIcon(bool Visible);
    void SetText(FString AreaNameText);
    void BndEvt__LibraryMenu_MonsterAreaListItem_SBButton_C_402_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_MonsterAreaListItem_SBButton_C_402_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_MonsterAreaListItem_SBButton_C_402_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_MonsterAreaListItem(int32 EntryPoint);
    void OnSelect__DelegateSignature(int32 Value);
}; // Size: 0x809

#endif
