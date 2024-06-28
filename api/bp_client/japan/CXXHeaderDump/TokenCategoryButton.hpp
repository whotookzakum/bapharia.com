#ifndef UE4SS_SDK_TokenCategoryButton_HPP
#define UE4SS_SDK_TokenCategoryButton_HPP

class UTokenCategoryButton_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x0288 (size: 0x8)
    class UWidgetSwitcher* SwitchSelected;                                            // 0x0290 (size: 0x8)
    FText Text;                                                                       // 0x0298 (size: 0x18)
    int32 listIndex;                                                                  // 0x02B0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02B4 (size: 0x4)
    FTokenCategoryButton_COnClick OnClick;                                            // 0x02B8 (size: 0x10)
    void OnClick(int32 listIndex);

    void SetButtonSelected(bool Selected);
    void Setup(int32 Index, FText Text);
    void PreConstruct(bool IsDesignTime);
    void Construct();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_147_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_117_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_136_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_TokenCategoryButton(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x2C8

#endif
