#ifndef UE4SS_SDK_ChatTypeWindow_HPP
#define UE4SS_SDK_ChatTypeWindow_HPP

class UChatTypeWindow_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0290 (size: 0x8)
    class USBButtonFullScreen_C* Button_Hit;                                          // 0x0298 (size: 0x8)
    class UChatWindowTypeItem_C* ChatWindowTypeItem1;                                 // 0x02A0 (size: 0x8)
    class UChatWindowTypeItem_C* ChatWindowTypeItem2;                                 // 0x02A8 (size: 0x8)
    class UChatWindowTypeItem_C* ChatWindowTypeItem3;                                 // 0x02B0 (size: 0x8)
    class UChatWindowTypeItem_C* ChatWindowTypeItem4;                                 // 0x02B8 (size: 0x8)
    class UCanvasPanel* TypeListGrp;                                                  // 0x02C0 (size: 0x8)
    class UVerticalBox* VerticalBox_Direct;                                           // 0x02C8 (size: 0x8)
    FChatTypeWindow_CEventTypeSelected EventTypeSelected;                             // 0x02D0 (size: 0x10)
    void EventTypeSelected(ESBChatLogType SelectedType);
    bool bVisible;                                                                    // 0x02E0 (size: 0x1)
    bool bTalkModeRestrictive;                                                        // 0x02E1 (size: 0x1)
    char padding_0[0x2];                                                              // 0x02E2 (size: 0x2)
    FVector2D Position;                                                               // 0x02E4 (size: 0x8)
    TEnumAsByte<E_ChatWindowChatType::Type> CurrentChatWindowType;                    // 0x02EC (size: 0x1)

    void InitDirectChatItem();
    void IsEndAnimOut(bool& IsEnd);
    void CalcPosition(FVector2D& Position);
    void EndChat();
    void HideWindow();
    void ShowWindow();
    void Construct();
    void BndEvt__ChatWindowTypeItem1_K2Node_ComponentBoundEvent_8_EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
    void BndEvt__ChatWindowTypeItem2_K2Node_ComponentBoundEvent_11_EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
    void BndEvt__ChatWindowTypeItem3_K2Node_ComponentBoundEvent_13_EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
    void BndEvt__ChatWindowTypeItem4_K2Node_ComponentBoundEvent_16_EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
    void OnAnimationFinished_イベント_0();
    void OnClickedDirectChatItem(class UChatWindowTypeItem_C* TypeItem);
    void OnPressCancel();
    void BndEvt__ChatTypeWindow_Button_Hit_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void ExecuteUbergraph_ChatTypeWindow(int32 EntryPoint);
    void EventTypeSelected__DelegateSignature(ESBChatLogType SelectedType);
}; // Size: 0x2ED

#endif
