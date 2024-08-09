#ifndef UE4SS_SDK_LibraryMenu_ListItem_HPP
#define UE4SS_SDK_LibraryMenu_ListItem_HPP

class ULibraryMenu_ListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class UImage* IconNew;                                                            // 0x0288 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x0290 (size: 0x8)
    class UWidgetSwitcher* SwitchSelected;                                            // 0x0298 (size: 0x8)
    FLibraryMenu_ListItem_COnClick OnClick;                                           // 0x02A0 (size: 0x10)
    void OnClick(int32 listIndex);
    int32 listIndex;                                                                  // 0x02B0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02B4 (size: 0x4)
    FText Text;                                                                       // 0x02B8 (size: 0x18)

    void Set New Icon(ESlateVisibility InVisibility);
    void SetBtnSelected(bool bSelected);
    void SetName(FText InText);
    void Construct();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_147_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_103_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_122_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_ListItem(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x2D0

#endif
