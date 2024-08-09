#ifndef UE4SS_SDK_ChatWindowTypeItem_HPP
#define UE4SS_SDK_ChatWindowTypeItem_HPP

class UChatWindowTypeItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Arrow;                                                              // 0x0280 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0288 (size: 0x8)
    class UImage* Bg1_1;                                                              // 0x0290 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0298 (size: 0x8)
    class USBButton_C* Btn1_1;                                                        // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitchLengthType;                                          // 0x02A8 (size: 0x8)
    class UWidgetSwitcher* SwitchType;                                                // 0x02B0 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x02B8 (size: 0x8)
    class USBRuntimeTextBlock* Txt1_1;                                                // 0x02C0 (size: 0x8)
    class USBRuntimeTextBlock* Txt2;                                                  // 0x02C8 (size: 0x8)
    class UOverlay* TypeWindowPointer;                                                // 0x02D0 (size: 0x8)
    class UOverlay* TypeWindowPointer_1;                                              // 0x02D8 (size: 0x8)
    ESBChatLogType InChatLogType;                                                     // 0x02E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02E1 (size: 0x7)
    FChatWindowTypeItem_CEventBtnClicked EventBtnClicked;                             // 0x02E8 (size: 0x10)
    void EventBtnClicked(class UChatWindowTypeItem_C* TypeItem);
    bool bArrow;                                                                      // 0x02F8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x02F9 (size: 0x7)
    FSBDirectChatSenderLogData SenderLogData;                                         // 0x0300 (size: 0x30)

    void SetDirectChatData(FSBDirectChatSenderLogData InSenderData);
    void GetTypeWindowPosition(FVector2D& Position);
    void SetType(ESBChatLogType InChatLogType);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__ChatWindowTypeItem_Btn1_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void BndEvt__ChatWindowTypeItem_Btn1_1_K2Node_ComponentBoundEvent_2_OnButtonPressedEvent__DelegateSignature();
    void ExecuteUbergraph_ChatWindowTypeItem(int32 EntryPoint);
    void EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
}; // Size: 0x330

#endif
