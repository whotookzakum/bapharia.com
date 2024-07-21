#ifndef UE4SS_SDK_UMG_SeasonPassMenuBtn1_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuBtn1_HPP

class UUMG_SeasonPassMenuBtn1_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UBorder* BorderForColor;                                                    // 0x0280 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0288 (size: 0x8)
    class UWidgetSwitcher* SwitchTxtImage;                                            // 0x0290 (size: 0x8)
    FUMG_SeasonPassMenuBtn1_CEventOnClicked EventOnClicked;                           // 0x0298 (size: 0x10)
    void EventOnClicked();
    int32 BtnType;                                                                    // 0x02A8 (size: 0x4)

    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_UMG_SeasonPassMenuBtn1(int32 EntryPoint);
    void EventOnClicked__DelegateSignature();
}; // Size: 0x2AC

#endif
