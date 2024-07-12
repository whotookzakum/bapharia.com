#ifndef UE4SS_SDK_UMG_ChatWindow_HPP
#define UE4SS_SDK_UMG_ChatWindow_HPP

class UUMG_ChatWindow_C : public USBChatWindow
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02D8 (size: 0x8)
    class UWidgetAnimation* RecconectAnim;                                            // 0x02E0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02E8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02F0 (size: 0x8)
    class UChatHudMovableWidget_C* ChatHudMovableWidget;                              // 0x02F8 (size: 0x8)
    class UChatWindowTypeItem_C* ChatType;                                            // 0x0300 (size: 0x8)
    class UChatWindow_InputText_C* ChatWindow_Input;                                  // 0x0308 (size: 0x8)
    class UCanvasPanel* DirectChatGrp;                                                // 0x0310 (size: 0x8)
    class UEmotionMenu_StampMenu_C* EmotionMenu_StampMenu;                            // 0x0318 (size: 0x8)
    class UFixedPhrase_Menu_C* FixedPhrase_Menu;                                      // 0x0320 (size: 0x8)
    class USBButton_C* FixedPhraseButton;                                             // 0x0328 (size: 0x8)
    class UWidgetSwitcher* InputTextWidgetSwitcher;                                   // 0x0330 (size: 0x8)
    class UImage* PartyIcon;                                                          // 0x0338 (size: 0x8)
    class UCanvasPanel* ReconnectAnimation;                                           // 0x0340 (size: 0x8)
    class USBButton_C* StampButton;                                                   // 0x0348 (size: 0x8)
    class UWidgetSwitcher* SwitchFixedPhrase;                                         // 0x0350 (size: 0x8)
    class UWidgetSwitcher* SwitchIcon;                                                // 0x0358 (size: 0x8)
    class UWidgetSwitcher* SwitchStamp;                                               // 0x0360 (size: 0x8)
    class UWidgetSwitcher* SwitchTextInput;                                           // 0x0368 (size: 0x8)
    class UTextBlock* TalkID;                                                         // 0x0370 (size: 0x8)
    class UTextBlock* TalkTo;                                                         // 0x0378 (size: 0x8)
    class USBButton_C* TextInputButton;                                               // 0x0380 (size: 0x8)
    FUMG_ChatWindow_COnClose OnClose;                                                 // 0x0388 (size: 0x10)
    void OnClose();
    TArray<ESBChatLogType> ChatModeList;                                              // 0x0398 (size: 0x10)
    FUMG_ChatWindow_COnAddDirectChatWindow OnAddDirectChatWindow;                     // 0x03A8 (size: 0x10)
    void OnAddDirectChatWindow(FString PlayerId, FText Name, FString CharacterId);
    FUMG_ChatWindow_COnRemoveDirectChatWindow OnRemoveDirectChatWindow;               // 0x03B8 (size: 0x10)
    void OnRemoveDirectChatWindow(FString PlayerId);
    bool IsAddDirectChatLogMode;                                                      // 0x03C8 (size: 0x1)
    bool IsRemoveDirectChatMode;                                                      // 0x03C9 (size: 0x1)
    ESBChatLogType CurChatMode;                                                       // 0x03CA (size: 0x1)
    ESBChatLogType PrvChatMode;                                                       // 0x03CB (size: 0x1)
    char padding_0[0x4];                                                              // 0x03CC (size: 0x4)
    class UChatTypeWindow_C* ChatTypeWindow_N;                                        // 0x03D0 (size: 0x8)
    FString DMSpeakerId;                                                              // 0x03D8 (size: 0x10)
    FUMG_ChatWindow_COnChangeChatMode OnChangeChatMode;                               // 0x03E8 (size: 0x10)
    void OnChangeChatMode();
    FString CharacterId;                                                              // 0x03F8 (size: 0x10)
    TEnumAsByte<E_ChatWindowChatType::Type> CurrentchatType;                          // 0x0408 (size: 0x1)
    bool IsKeyShotcut;                                                                // 0x0409 (size: 0x1)
    bool bTalkModeRestrictive;                                                        // 0x040A (size: 0x1)
    bool bInPhotoMode;                                                                // 0x040B (size: 0x1)
    char padding_1[0x4];                                                              // 0x040C (size: 0x4)
    class UUserWidget* CachedToolTipWidget;                                           // 0x0410 (size: 0x8)
    bool bServerReconnection;                                                         // 0x0418 (size: 0x1)
    bool bCheckShortCycle;                                                            // 0x0419 (size: 0x1)

    void RequestAPICheckOnlineStatus();
    void Open Server Reconnection Notice Tool Tip Widget(bool bOpen);
    void SetServerReconnectionMode(bool OnServerReconnection);
    void GetChatType(TEnumAsByte<E_ChatWindowChatType::Type>& ChatType);
    void CheckChatModeIsValid(ESBChatLogType ChatType, bool& Result);
    void IsTextInputFocus(bool& Resurl);
    void IsVisibleChatType(bool& Result);
    void SpecialCommandProcess(FString InChatMessage, FString& OutChatMessage, ESBChatLogType& ChatLogType);
    void SetIcon(ESBChatLogType logType);
    void SetChatType(TEnumAsByte<E_ChatWindowChatType::Type> InChatType);
    void LoadChatSendData();
    void SaveChatSendData();
    void SetTeamParameter();
    void SetDirectChatParameter(FString PlayerId, FText Name, FString CharacterId);
    void ShowErrorDirectChatSearch(int32 TextIdx);
    void GetPlayerSearchList(FText InText);
    void UpdatePartyIcon();
    void UpdateDirectChatLogButton();
    void SetChatMode(ESBChatLogType NewParam);
    void Hide();
    void Show();
    void SendChatMessage(FString Message, ESBChatLogType ChatLogType);
    void BndEvt__ChatType_K2Node_ComponentBoundEvent_2_EventBtnClicked__DelegateSignature(class UChatWindowTypeItem_C* TypeItem);
    void OnEventTypeSelected(ESBChatLogType SelectedType);
    void SetDirectChatMode(FString PlayerId, FText Name, const FString CharacterId, bool SearchShortID);
    void OpenChatType();
    void CloseChatType();
    void Construct();
    void SetUserFocusAtITextInput();
    void OnPress_EndChat();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnEnterClose();
    void Destruct();
    void OnGetPlayerProfileDetailMenuDelegate_Event(const bool bWasSuccessful, FString shortId, const int32 RetCode);
    void Init();
    void Errorr(ESBChatSendErrorType ErrorType);
    void BndEvt__ChatWindow_Input_K2Node_ComponentBoundEvent_0_OnClose__DelegateSignature();
    void BndEvt__TextInputButton_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__StampButton_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__FixedPhraseButton_K2Node_ComponentBoundEvent_5_OnButtonClickedEvent__DelegateSignature();
    void SetInputFocus();
    void PreConstruct(bool IsDesignTime);
    void OnChanged_ConnectionChatServer(bool IsLogin);
    void RemoveDirectChatSenderLogs(FString CharacterId);
    void OnNotificationBlackListedDelegate_Event(const bool bBlackListed, FString SenderId);
    void Unbind();
    void OnDirectChatSenderRemoveDelegate_Event(FString CharacterId);
    void OnIsGetPlayerSearchListDelegate_Event(const bool bWasSuccessful, const TArray<FPlayerProfileSummaryData>& PlayerSearchListData, bool bIsOver, const int32 RetCode);
    void ExecuteUbergraph_UMG_ChatWindow(int32 EntryPoint);
    void OnChangeChatMode__DelegateSignature();
    void OnRemoveDirectChatWindow__DelegateSignature(FString PlayerId);
    void OnAddDirectChatWindow__DelegateSignature(FString PlayerId, FText Name, FString CharacterId);
    void OnClose__DelegateSignature();
}; // Size: 0x41A

#endif
