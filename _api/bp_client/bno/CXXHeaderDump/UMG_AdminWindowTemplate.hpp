#ifndef UE4SS_SDK_UMG_AdminWindowTemplate_HPP
#define UE4SS_SDK_UMG_AdminWindowTemplate_HPP

class UUMG_AdminWindowTemplate_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UChatHudMovableWidget_C* ChatHudMovableWidget;                              // 0x0280 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x0288 (size: 0x8)
    class UNamedSlot* MainContents;                                                   // 0x0290 (size: 0x8)
    class UNamedSlot* OtherContents;                                                  // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_WidowTitle;                                  // 0x02A0 (size: 0x8)
    FText WindowTitle;                                                                // 0x02A8 (size: 0x18)
    class UUserWidget* OwnerWidget;                                                   // 0x02C0 (size: 0x8)

    void PreConstruct(bool IsDesignTime);
    void Init(class UUserWidget* OwnerWidget);
    void BndEvt__UMG_AdminWindowTemplate_CmnClose02_K2Node_ComponentBoundEvent_1_OnClosed__DelegateSignature();
    void ExecuteUbergraph_UMG_AdminWindowTemplate(int32 EntryPoint);
}; // Size: 0x2C8

#endif
