#ifndef UE4SS_SDK_UMG_MultipleSelectDialog_Button_HPP
#define UE4SS_SDK_UMG_MultipleSelectDialog_Button_HPP

class UUMG_MultipleSelectDialog_Button_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Button;                                                        // 0x0280 (size: 0x8)
    class UTextBlock* Txt1;                                                           // 0x0288 (size: 0x8)
    FText Text;                                                                       // 0x0290 (size: 0x18)
    int32 Index;                                                                      // 0x02A8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02AC (size: 0x4)
    FUMG_MultipleSelectDialog_Button_COnSelected OnSelected;                          // 0x02B0 (size: 0x10)
    void OnSelected(int32 SelectIndex);

    void BndEvt__Button_K2Node_ComponentBoundEvent_67_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button_K2Node_ComponentBoundEvent_29_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button_K2Node_ComponentBoundEvent_48_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_UMG_MultipleSelectDialog_Button(int32 EntryPoint);
    void OnSelected__DelegateSignature(int32 SelectIndex);
}; // Size: 0x2C0

#endif
