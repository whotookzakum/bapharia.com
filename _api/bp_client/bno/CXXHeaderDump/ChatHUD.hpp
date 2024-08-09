#ifndef UE4SS_SDK_ChatHUD_HPP
#define UE4SS_SDK_ChatHUD_HPP

class UChatHUD_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* BtnChatSetting;                                                // 0x0280 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_OtherPClist;                        // 0x0288 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_UnreadNotifySettingWindow;          // 0x0290 (size: 0x8)
    class UCanvasPanel* CanvasPanel_1;                                                // 0x0298 (size: 0x8)
    class UCanvasPanel* CanvasPanel_ChatSettingWindow;                                // 0x02A0 (size: 0x8)
    class UUMG_ChatLogWindow_C* ChatLog01;                                            // 0x02A8 (size: 0x8)
    class UUMG_ChatLogWindow_C* ChatLog02;                                            // 0x02B0 (size: 0x8)
    class UUMG_ChatLogWindow_C* ChatLog03;                                            // 0x02B8 (size: 0x8)
    class UUMG_ChatWindow_C* ChatWindow;                                              // 0x02C0 (size: 0x8)
    class UCmnBack01_C* CmnBack01;                                                    // 0x02C8 (size: 0x8)
    class UBorder* DropHitBG;                                                         // 0x02D0 (size: 0x8)
    class UEmotionMenu_C* EmotionMenu;                                                // 0x02D8 (size: 0x8)
    class UImage* Image_54;                                                           // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* Label;                                                 // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* Label_1;                                               // 0x02F0 (size: 0x8)
    class UMouseCursorModeIcon_C* MouseCursorModeIcon;                                // 0x02F8 (size: 0x8)
    class UOtherPCList_C* OtherPCList;                                                // 0x0300 (size: 0x8)
    class USBButton_C* ResetLayoutButton;                                             // 0x0308 (size: 0x8)
    class UShowTutorialHelpBtn_C* ShowTutorialHelpBtn;                                // 0x0310 (size: 0x8)
    class UImage* TitleBg;                                                            // 0x0318 (size: 0x8)
    class UCanvasPanel* TitleGrp;                                                     // 0x0320 (size: 0x8)
    TArray<class UUMG_ChatLogWindow_C*> ChatLogs;                                     // 0x0328 (size: 0x10)
    TArray<FAnchors> InitChatLogsAnchors;                                             // 0x0338 (size: 0x10)
    TArray<FVector2D> InitChatLogsPos;                                                // 0x0348 (size: 0x10)
    TArray<int32> ChatLogsZOder;                                                      // 0x0358 (size: 0x10)
    bool bCurVisible;                                                                 // 0x0368 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0369 (size: 0x7)
    TArray<FVector2D> InitChatLogsWindowSize;                                         // 0x0370 (size: 0x10)
    FVector2D InitStampEmotWindowPos;                                                 // 0x0380 (size: 0x8)
    FAnchors InitStampEmotWindowAnchors;                                              // 0x0388 (size: 0x10)
    int32 InitStampEmotWindowZOder;                                                   // 0x0398 (size: 0x4)
    FAnchors InitChatWindowAnchors;                                                   // 0x039C (size: 0x10)
    FVector2D InitChatWindowPos;                                                      // 0x03AC (size: 0x8)
    int32 InitChatWindowZOder;                                                        // 0x03B4 (size: 0x4)
    class ULayoutableHUD_C* LayoutableHUD;                                            // 0x03B8 (size: 0x8)
    TArray<FName> TutorialHelpIds;                                                    // 0x03C0 (size: 0x10)
    class UTutorialHelpDialogBox_C* TutorialHelpWidget;                               // 0x03D0 (size: 0x8)
    class UObject* Work;                                                              // 0x03D8 (size: 0x8)
    bool IsMenuMode;                                                                  // 0x03E0 (size: 0x1)
    char padding_1[0x7];                                                              // 0x03E1 (size: 0x7)
    class UUMG_AdminGotoBookmarkWindow_C* AdminGotoBookmarkWindow;                    // 0x03E8 (size: 0x8)
    class UTutorialHelpDialogBox_C* TutorialHelpDialogWidget;                         // 0x03F0 (size: 0x8)
    class UFishingHUD_C* FishingHUD;                                                  // 0x03F8 (size: 0x8)
    class UChatSettingWindow_C* ChatSettingWindow;                                    // 0x0400 (size: 0x8)
    bool IsMouseCursorAcion;                                                          // 0x0408 (size: 0x1)

    void SetFishHUD(class UFishingHUD_C* HUD);
    void Get Log Window Visible Status List(TArray<bool>& IsVisibleStatusList);
    void UpdateUnread();
    void CheckLogWindowFilter(ESBChatLogType logType, TEnumAsByte<ESBChatLogWindowSlot::Type> NewParam, bool& Result);
    void CheckReceivedMessageSound(ESBChatLogType logType, bool IsCloseArea, bool& Result);
    void UpdateMouseCursorIcon();
    void ForceClose();
    void IsActive(bool& IsActive);
    class UWidget* On_TextSizeComboBox_GenerateWidget_0(FString item);
    void ResetAllLayout();
    FEventReply OnMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
    void LoadStampHisoryData();
    void InitChatHUDLayout();
    void InitStampEmoteHUDLayout();
    void SaveLayoutWindowSizeData(class UUserWidget* InWidget);
    bool OnDragOver(FGeometry MyGeometry, FPointerEvent PointerEvent, class UDragDropOperation* Operation);
    bool OnDrop(FGeometry MyGeometry, FPointerEvent PointerEvent, class UDragDropOperation* Operation);
    void Refresh Chat Logs();
    void SetChatLogsWindow(bool InWindow);
    void InitChatLogSlots();
    void SaveHudLayout();
    void SaveLayoutData(class UUserWidget* InWidget);
    void LoadHudLayout();
    void InitChatLogsHUDLayout();
    void AddTab(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void AddChatLogWindow(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void IsFullChildLogWindows(bool& Ret);
    void Hide();
    void Show();
    void KeyShortcut_TextMode();
    void KeyShortcut_FixedPhrase();
    void KeyShortcut_Stamp();
    void KeyShortcut_ChatTypeList();
    void KeyShortcut_PlayerList();
    void KeyShortcut_TabChange();
    void BndEvt__ButtonFullScreen_OtherPClist_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void InputPadButton();
    void BndEvt__OtherPCList_K2Node_ComponentBoundEvent_1_EventButtonClicked__DelegateSignature();
    void OpenCursorModeToOtherPCMenu(class ASBPlayerCharacter* InOtherPC);
    void BndEvt__ChatHUD_OtherPCList_K2Node_ComponentBoundEvent_2_OnAllClose__DelegateSignature();
    void OnCloseAdminWindow();
    void OnMouseButtonDownByAdminMode();
    void Construct_Admin();
    void OnAdminCommandRequest(ESBAdminCommandCallbackRequest Request);
    void OpenGotoBookmarkWindow();
    void Hide_Admin();
    void UnbindAdminCommandCallbeck();
    void Emite_Construct();
    void OnChang_ChatMode_Event();
    void Construct_Chat();
    void OnClosedChatWindow();
    void RequestChatLogAdd(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void CloseRequestChatLogs(TEnumAsByte<ESBChatLogWindowSlot::Type> SlotType);
    void OnChatRoomMessageReceived(class USBChatMessage* Message);
    void RequestDirectChat(FString PlayerId, FText Name, const FString CharacterId);
    void OnClickedClose();
    void ChatTempLogs_Init();
    void RequestTabAdd(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void RequestTabClose(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot, int32 InFilterType, int32 InDetailFilterType);
    void DelayUpdateMouseCursorIcon();
    void UpdateCursorMode(bool Flag);
    void BndEvt__ChatHUD_BtnChatUnreadNotify_ON_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__ChatHUD_ButtonFullScreen_UnreadNotifySettingWindow_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void EndChatSettingWindow();
    void ChatSettingWindow_OnClose_Event();
    void OnRefreshChatLogs_event();
    void OnLogDispTime_event();
    void Construct();
    void Init();
    void OnChangeVisibility(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void BndEvt__ResetLayoutButton_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnReceivedMessage(const class USBChatMessage* Message, const FSBChatUIMessage Mess);
    void Destruct();
    void OnGameOverDelegate_Event_0();
    void BndEvt__CmnBack01_K2Node_ComponentBoundEvent_2_EventClicked__DelegateSignature();
    void MouseInteraction();
    void MouseInteractionRelease();
    void OnRequestTutorialHelp(bool CheckUnlock);
    void CameraCtrl_Up();
    void CameraCtrl_Up_Rel();
    void CameraCtrl_Down();
    void CameraCtrl_Down_Rel();
    void CameraCtrl_Left();
    void CameraCtrl_Left_Rel();
    void CameraCtrl_Right();
    void CameraCtrl_Right_Rel();
    void OnClosePCList_Event_0();
    void OnClose_Event_0();
    void ResultClose(class UObject* Sender, class UObject* Param);
    void ExecuteUbergraph_ChatHUD(int32 EntryPoint);
}; // Size: 0x409

#endif
