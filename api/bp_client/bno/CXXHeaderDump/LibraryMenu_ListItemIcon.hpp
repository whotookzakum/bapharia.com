#ifndef UE4SS_SDK_LibraryMenu_ListItemIcon_HPP
#define UE4SS_SDK_LibraryMenu_ListItemIcon_HPP

class ULibraryMenu_ListItemIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class UCommonIconSimple_C* CommonIconSimple;                                      // 0x0288 (size: 0x8)
    class UImage* IconNew;                                                            // 0x0290 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x0298 (size: 0x8)
    class UImage* PossessionMarkIcon;                                                 // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitchIcon;                                                // 0x02A8 (size: 0x8)
    class UWidgetSwitcher* SwitchName;                                                // 0x02B0 (size: 0x8)
    class UWidgetSwitcher* SwitchSelected;                                            // 0x02B8 (size: 0x8)
    FLibraryMenu_ListItemIcon_COnClick OnClick;                                       // 0x02C0 (size: 0x10)
    void OnClick(int32 listIndex);
    int32 listIndex;                                                                  // 0x02D0 (size: 0x4)
    EItemType ItemType;                                                               // 0x02D4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02D5 (size: 0x3)
    FText Text;                                                                       // 0x02D8 (size: 0x18)
    int32 ItemIndex;                                                                  // 0x02F0 (size: 0x4)
    bool IsSecret;                                                                    // 0x02F4 (size: 0x1)

    void SetPossessionMarkIcon(bool InVisible);
    void SetBtnSelected(bool bSelected);
    void SetName(FText InText);
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_147_OnButtonClickedEvent__DelegateSignature();
    void Construct();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_80_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_99_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_ListItemIcon(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x2F5

#endif
