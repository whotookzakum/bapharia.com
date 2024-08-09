#ifndef UE4SS_SDK_OtherPCList_HPP
#define UE4SS_SDK_OtherPCList_HPP

class UOtherPCList_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimAllClose_5;                                           // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimSlideTabToMenu_4_4B;                                  // 0x02C0 (size: 0x8)
    class UWidgetAnimation* AnimTabAndMenu_3_3B;                                      // 0x02C8 (size: 0x8)
    class UWidgetAnimation* AnimSlideListToMenu_2_2B;                                 // 0x02D0 (size: 0x8)
    class UWidgetAnimation* AnimSlideTabToList_1_1B;                                  // 0x02D8 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02E0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02E8 (size: 0x8)
    class USBButton_C* BtnPlayerList;                                                 // 0x02F0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_List;                                             // 0x02F8 (size: 0x8)
    class UCanvasPanel* CursorPoint;                                                  // 0x0300 (size: 0x8)
    class UOtherPCListMain_C* OtherPCListMain;                                        // 0x0308 (size: 0x8)
    class UCanvasPanel* PCMenu;                                                       // 0x0310 (size: 0x8)
    class UCanvasPanel* RootCanvasPanel;                                              // 0x0318 (size: 0x8)
    class UTextBlock* txtKey;                                                         // 0x0320 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0328 (size: 0x8)
    FOtherPCList_COnClose OnClose;                                                    // 0x0330 (size: 0x10)
    void OnClose();
    bool IsClosingMenu;                                                               // 0x0340 (size: 0x1)
    bool IsOtherPCMenuOpen;                                                           // 0x0341 (size: 0x1)
    char padding_0[0x6];                                                              // 0x0342 (size: 0x6)
    FOtherPCList_CEventButtonClicked EventButtonClicked;                              // 0x0348 (size: 0x10)
    void EventButtonClicked();
    bool bListVisible;                                                                // 0x0358 (size: 0x1)
    bool bMenuVisible;                                                                // 0x0359 (size: 0x1)
    bool bAnimeForward;                                                               // 0x035A (size: 0x1)
    bool bMouseCorsorMode;                                                            // 0x035B (size: 0x1)
    bool IsAllClose;                                                                  // 0x035C (size: 0x1)
    bool bIsDirectChatClose;                                                          // 0x035D (size: 0x1)
    char padding_1[0x2];                                                              // 0x035E (size: 0x2)
    class APlayerState* MouseCorsorPlayerState;                                       // 0x0360 (size: 0x8)
    FOtherPCList_COnAllClose OnAllClose;                                              // 0x0368 (size: 0x10)
    void OnAllClose();

    void ClearPCMenu();
    void OpenCursorModeToOtherPCMenu(class ASBPlayerCharacter* InOtherPC, bool bListUpdate);
    void UpdateMouseCursorIcon();
    void UpdateTabKey();
    void AllClose();
    void Anime_Tab_Menu();
    void Anime_AllOpen();
    void Anime_Tab_List();
    void Anime_Tab();
    void IsRootVisibility(bool& OutVisible);
    void SetRootVisibility(bool InVisible);
    void CloseMenu();
    void Open();
    void OnCloseOtherPCMenu();
    void BndEvt__BtnPlayerList_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void InputPadButton();
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__BtnPlayerList_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__BtnPlayerList_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__OtherPCList_OtherPCListMain_K2Node_ComponentBoundEvent_4_OnListSelected__DelegateSignature(class ASBPlayerState* PlayerState, FName CharacterId);
    void BndEvt__OtherPCList_OtherPCListMain_K2Node_ComponentBoundEvent_6_OnClickUpdateButton__DelegateSignature();
    void BndEvt__OtherPCList_OtherPCListMain_K2Node_ComponentBoundEvent_8_OnListUpdated__DelegateSignature();
    void Close();
    void OnDirectChatEvent();
    void OnPress_Cancel();
    void Destruct();
    void ExecuteUbergraph_OtherPCList(int32 EntryPoint);
    void OnAllClose__DelegateSignature();
    void EventButtonClicked__DelegateSignature();
    void OnClose__DelegateSignature();
}; // Size: 0x378

#endif
