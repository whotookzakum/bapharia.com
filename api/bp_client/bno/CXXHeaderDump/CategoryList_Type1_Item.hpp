#ifndef UE4SS_SDK_CategoryList_Type1_Item_HPP
#define UE4SS_SDK_CategoryList_Type1_Item_HPP

class UCategoryList_Type1_Item_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class UImage* IconNew;                                                            // 0x0288 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x0290 (size: 0x8)
    class UWidgetSwitcher* SwitchSelected;                                            // 0x0298 (size: 0x8)
    FCategoryList_Type1_Item_COnClick OnClick;                                        // 0x02A0 (size: 0x10)
    void OnClick(int32 listIndex);
    FString Text;                                                                     // 0x02B0 (size: 0x10)
    int32 listIndex;                                                                  // 0x02C0 (size: 0x4)
    bool IsNew;                                                                       // 0x02C4 (size: 0x1)

    void SetNewIcon(bool IsVisible);
    void SetBtnSelected(bool bSelected);
    void SetName(FText InText);
    void Construct();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_147_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_117_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_136_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CategoryList_Type1_Item(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x2C5

#endif
