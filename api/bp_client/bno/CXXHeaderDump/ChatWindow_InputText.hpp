#ifndef UE4SS_SDK_ChatWindow_InputText_HPP
#define UE4SS_SDK_ChatWindow_InputText_HPP

class UChatWindow_InputText_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCmnBtn15_C* CmnBtn15;                                                      // 0x0280 (size: 0x8)
    class UImage* InputBG;                                                            // 0x0288 (size: 0x8)
    class UMultiLineEditableText* InputMessage;                                       // 0x0290 (size: 0x8)
    class UTextBlock* TxtCount;                                                       // 0x0298 (size: 0x8)
    bool IsShift;                                                                     // 0x02A0 (size: 0x1)
    bool IsInitPressEnter;                                                            // 0x02A1 (size: 0x1)
    char padding_0[0x6];                                                              // 0x02A2 (size: 0x6)
    class UUMG_ChatWindow_C* ChatWindow;                                              // 0x02A8 (size: 0x8)
    FChatWindow_InputText_COnClose OnClose;                                           // 0x02B0 (size: 0x10)
    void OnClose();
    int32 TextCountMax;                                                               // 0x02C0 (size: 0x4)
    bool IsTextCommitted;                                                             // 0x02C4 (size: 0x1)
    bool IsRoundTextCheck;                                                            // 0x02C5 (size: 0x1)

    class APlayerController* GetPlayerControllerEx();
    FEventReply OnPreviewMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
    void IsTextInputFocus(bool& Result);
    void UpdateTextCount();
    void SetUserFocusAtITextInput(bool MessageReset);
    void Hide();
    void Show();
    void RoundText(FText InText, bool& IsRound, FText& OutText);
    FEventReply OnKeyUp(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    FEventReply OnPreviewKeyDown(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    void BndEvt__InputMessage_K2Node_ComponentBoundEvent_0_OnMultiLineEditableTextCommittedEvent__DelegateSignature(const FText& Text, TEnumAsByte<ETextCommit::Type> CommitMethod);
    void BndEvt__CmnBtn15_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void BndEvt__InputMessage_K2Node_ComponentBoundEvent_2_OnMultiLineEditableTextChangedEvent__DelegateSignature(const FText& Text);
    void UpdateMouseCursorIcon();
    void SendMessage(FText InText);
    void ExecuteUbergraph_ChatWindow_InputText(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x2C6

#endif
