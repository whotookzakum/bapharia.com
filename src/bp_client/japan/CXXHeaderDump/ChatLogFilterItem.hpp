#ifndef UE4SS_SDK_ChatLogFilterItem_HPP
#define UE4SS_SDK_ChatLogFilterItem_HPP

class UChatLogFilterItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBCheckBox_C* CheckBox1;                                                   // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* ItemNameLabel;                                         // 0x0288 (size: 0x8)
    FChatLogFilterItem_CEventCheckStateChanged EventCheckStateChanged;                // 0x0290 (size: 0x10)
    void EventCheckStateChanged(bool IsChecked);
    int32 TextId;                                                                     // 0x02A0 (size: 0x4)

    void SetChecked(bool IsChecked);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__CheckBox_0_K2Node_ComponentBoundEvent_90_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void ExecuteUbergraph_ChatLogFilterItem(int32 EntryPoint);
    void EventCheckStateChanged__DelegateSignature(bool IsChecked);
}; // Size: 0x2A4

#endif
