#ifndef UE4SS_SDK_CommandMenu_MenuItem2_HPP
#define UE4SS_SDK_CommandMenu_MenuItem2_HPP

class UCommandMenu_MenuItem2_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* Btn1;                                                              // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x0288 (size: 0x8)
    ESBCommandMenuType MenuType;                                                      // 0x0290 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0291 (size: 0x7)
    FCommandMenu_MenuItem2_COnSelect OnSelect;                                        // 0x0298 (size: 0x10)
    void OnSelect(ESBCommandMenuType MenuType);

    void Construct();
    void BndEvt__Button_46_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_26_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CommandMenu_MenuItem2(int32 EntryPoint);
    void OnSelect__DelegateSignature(ESBCommandMenuType MenuType);
}; // Size: 0x2A8

#endif
