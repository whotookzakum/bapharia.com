#ifndef UE4SS_SDK_CommandMenu_BtnSkyStore_HPP
#define UE4SS_SDK_CommandMenu_BtnSkyStore_HPP

class UCommandMenu_BtnSkyStore_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimBlink;                                                // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimClicked;                                              // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0290 (size: 0x8)
    class UImage* BgGrd;                                                              // 0x0298 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x02A0 (size: 0x8)
    class UImage* Effect1_2;                                                          // 0x02A8 (size: 0x8)
    class UImage* Effect2;                                                            // 0x02B0 (size: 0x8)
    FCommandMenu_BtnSkyStore_CEventOnClicked EventOnClicked;                          // 0x02B8 (size: 0x10)
    void EventOnClicked();

    void Construct();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CommandMenu_BtnSkyStore(int32 EntryPoint);
    void EventOnClicked__DelegateSignature();
}; // Size: 0x2C8

#endif
