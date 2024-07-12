#ifndef UE4SS_SDK_ActionMenuButton_HPP
#define UE4SS_SDK_ActionMenuButton_HPP

class UActionMenuButton_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* Button_0;                                                          // 0x0280 (size: 0x8)
    class UTextBlock* LabelButton;                                                    // 0x0288 (size: 0x8)
    FActionMenuButton_COnClicked OnClicked;                                           // 0x0290 (size: 0x10)
    void OnClicked(class UActionMenuButton_C* Button);
    FText Text;                                                                       // 0x02A0 (size: 0x18)

    void SetText(FText InText);
    void Construct();
    void BndEvt__Button_0_K2Node_ComponentBoundEvent_30_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button_0_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button_0_K2Node_ComponentBoundEvent_4_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_ActionMenuButton(int32 EntryPoint);
    void OnClicked__DelegateSignature(class UActionMenuButton_C* Button);
}; // Size: 0x2B8

#endif
