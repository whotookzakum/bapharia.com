#ifndef UE4SS_SDK_OtherPCMenu_HPP
#define UE4SS_SDK_OtherPCMenu_HPP

class UOtherPCMenu_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class USBButton_C* AutoRunButton;                                                 // 0x02C8 (size: 0x8)
    class USBRuntimeTextBlock* AutoRunTextBlock;                                      // 0x02D0 (size: 0x8)
    class UImage* BG_0;                                                               // 0x02D8 (size: 0x8)
    class UCaptureImageFace_C* CaptureImageFace;                                      // 0x02E0 (size: 0x8)
    class UClassIconProfile_C* ClassIconProfile;                                      // 0x02E8 (size: 0x8)
    class UCmnClose01_C* CmnClose01;                                                  // 0x02F0 (size: 0x8)
    class UTextBlock* CommentLabel;                                                   // 0x02F8 (size: 0x8)
    class USBButton_C* DirectChatButton;                                              // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* DirectChatTextLabel;                                   // 0x0308 (size: 0x8)
    class USBButton_C* EmotoButton;                                                   // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* EmotoButtonLabel;                                      // 0x0318 (size: 0x8)
    class USBButton_C* FollowButton;                                                  // 0x0320 (size: 0x8)
    class UTextBlock* FollowButtonLabel;                                              // 0x0328 (size: 0x8)
    class UOverlay* FriendIconOverlay;                                                // 0x0330 (size: 0x8)
    class UCanvasPanel* GuildCanvasPanel;                                             // 0x0338 (size: 0x8)
    class UImage* LeaderIconImage;                                                    // 0x0340 (size: 0x8)
    class UOverlay* LeaderIconOverlay;                                                // 0x0348 (size: 0x8)
    class UImage* MutualFollow;                                                       // 0x0350 (size: 0x8)
    class UImage* PartyIconImage;                                                     // 0x0358 (size: 0x8)
    class UOverlay* PartyIconOverlay;                                                 // 0x0360 (size: 0x8)
    class USBButton_C* PartyInviteButton;                                             // 0x0368 (size: 0x8)
    class USBRuntimeTextBlock* PartyInviteButtonLabel;                                // 0x0370 (size: 0x8)
    class UPlatformIcon_C* PlatformIcon;                                              // 0x0378 (size: 0x8)
    class UTextBlock* PlayerNameLabel;                                                // 0x0380 (size: 0x8)
    class UPlayerProfileLikeBtn_C* PlayerProfileLikeBtn;                              // 0x0388 (size: 0x8)
    class USBButton_C* ProfileViewButton;                                             // 0x0390 (size: 0x8)
    class USBRuntimeTextBlock* ProfileViewButtonLabel;                                // 0x0398 (size: 0x8)
    class UCanvasPanel* RootCanvasPanel;                                              // 0x03A0 (size: 0x8)
    class UTensionTagIcon_C* TensionTagIcon_320;                                      // 0x03A8 (size: 0x8)
    class USBRuntimeTextBlock* TensionTagLabel;                                       // 0x03B0 (size: 0x8)
    class UTextBlock* Txt_GuildName;                                                  // 0x03B8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x03C0 (size: 0x8)
    FOtherPCMenu_COnClose OnClose;                                                    // 0x03C8 (size: 0x10)
    void OnClose();
    bool IsClosingMenu;                                                               // 0x03D8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x03D9 (size: 0x7)
    class ASBPlayerState* Player;                                                     // 0x03E0 (size: 0x8)
    bool IsGetMiscData;                                                               // 0x03E8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x03E9 (size: 0x7)
    FPlayerProfileMenuDetailData ProfileData;                                         // 0x03F0 (size: 0x298)
    bool IsFavorite;                                                                  // 0x0688 (size: 0x1)
    char padding_2[0x7];                                                              // 0x0689 (size: 0x7)
    FString CharacterId;                                                              // 0x0690 (size: 0x10)
    FString OpenTargetCharacterName;                                                  // 0x06A0 (size: 0x10)
    class UUIBlocker_C* FollowWaitBlocker;                                            // 0x06B0 (size: 0x8)
    class UPlayerProfile_C* PlayerProfile;                                            // 0x06B8 (size: 0x8)
    bool IsBLCondition;                                                               // 0x06C0 (size: 0x1)
    ESBProfilePublicSettingType PublicSetting;                                        // 0x06C1 (size: 0x1)
    char padding_3[0x6];                                                              // 0x06C2 (size: 0x6)
    TArray<FPlayerProfileSummaryData> MyFollowList;                                   // 0x06C8 (size: 0x10)
    bool IsPCList;                                                                    // 0x06D8 (size: 0x1)
    bool isFriend;                                                                    // 0x06D9 (size: 0x1)
    bool IsCanSendAdv;                                                                // 0x06DA (size: 0x1)
    bool IsDoneAdv;                                                                   // 0x06DB (size: 0x1)
    char padding_4[0x4];                                                              // 0x06DC (size: 0x4)
    FString PlayerId;                                                                 // 0x06E0 (size: 0x10)
    FOtherPCMenu_COnDirectChat OnDirectChat;                                          // 0x06F0 (size: 0x10)
    void OnDirectChat();
    bool IsSendLIke;                                                                  // 0x0700 (size: 0x1)
    char padding_5[0x7];                                                              // 0x0701 (size: 0x7)
    class USBPlayerConcernedList* ConcernedLlist;                                     // 0x0708 (size: 0x8)
    FTimerHandle FollowIntervalTimerEventHandle;                                      // 0x0710 (size: 0x8)
    class USBBlackListComponent* Black List Component;                                // 0x0718 (size: 0x8)
    int32 Warning;                                                                    // 0x0720 (size: 0x4)
    bool IsBlackList;                                                                 // 0x0724 (size: 0x1)
    bool IsBindCBS;                                                                   // 0x0725 (size: 0x1)
    char padding_6[0x2];                                                              // 0x0726 (size: 0x2)
    FText PlayerName;                                                                 // 0x0728 (size: 0x18)
    FText PlayerComment;                                                              // 0x0740 (size: 0x18)

    void Update Player Comment();
    void UpdatePlayerName();
    void UpdatePlayerIcon(bool& Download);
    void Show Player Profile Error Message(FName InTextNameId, const int32 InTextId);
    bool ShowSendAdventureCardError(bool InWasSuccessful, FSendAdventureCardResult InSendAdventureResult);
    void SetPlatformIcon();
    void SetPlayerProfile_LikeBtn();
    class ASBPlayerCharacter* GetPlayerCharacter();
    void GetOtherPlayerState(class ASBPlayerState*& OutPlayerState);
    void ShowMessage_DisableProfile();
    void ShowMessage_IsBlackListed();
    void CanSendInvitationSelf(bool& bResult);
    void UpdateBlackListState(bool IsBlackList);
    void UpdatePartyIconVisible();
    void CheckProfileEnable(bool& IsOk);
    FText GetSendAdventurerCardButtonLabelText();
    void SetRootVisibility(bool InVisible);
    void InitProfileDetail(FPlayerProfileMenuDetailData ProfileData);
    void Init(FText InName, ESBClassType InRole, ESBTensionTagType InTensionTagId, FText InComment, int32 InAchievementId, bool IsSendLIke, int32 OnlineStatus);
    void CloseMenu();
    void Initialize GuildData();
    void Construct();
    void Destruct();
    void BndEvt__ProfileViewButton_K2Node_ComponentBoundEvent_571_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__PartyInviteButton_K2Node_ComponentBoundEvent_9_OnButtonClickedEvent__DelegateSignature();
    void CustomEvent_0(const EYesNoDialogResult Result);
    void BndEvt__EmotoButton_K2Node_ComponentBoundEvent_12_OnButtonClickedEvent__DelegateSignature();
    void OnPress_Cancel();
    void BndEvt__FollowButton_K2Node_ComponentBoundEvent_12_OnButtonClickedEvent__DelegateSignature();
    void OnGetPlayerProfileDetailMenuDelegate_Event(const bool bWasSuccessful, const FPlayerProfileMenuDetailData& PlayerProfileDetailMenuData, const int32 RetCode);
    void Close();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__ProfileViewButton_K2Node_ComponentBoundEvent_7_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ProfileViewButton_K2Node_ComponentBoundEvent_34_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__PartyInviteButton_K2Node_ComponentBoundEvent_6_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__PartyInviteButton_K2Node_ComponentBoundEvent_36_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__EmotoButton_K2Node_ComponentBoundEvent_54_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__EmotoButton_K2Node_ComponentBoundEvent_86_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__FollowButton_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__FollowButton_K2Node_ComponentBoundEvent_31_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__TradeButton_K2Node_ComponentBoundEvent_75_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__TradeButton_K2Node_ComponentBoundEvent_92_OnButtonHoverEvent__DelegateSignature();
    void OnCancelMatching_Dialog_Event(const EYesNoDialogResult Result);
    void BndEvt__DirectChatButton_K2Node_ComponentBoundEvent_118_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__DirectChatButton_K2Node_ComponentBoundEvent_142_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__DirectChatButton_K2Node_ComponentBoundEvent_179_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__AutoRunButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void OnGameOverDelegate_Event_0();
    void UnbindPlayerConcernedListDelegate();
    void UnbindGameOverDelegate();
    void AddBlackList_Event(FPlayerProfileMenuDetailData ProfileData);
    void RemoveBlackList();
    void UnbindBlackListDelegate();
    void Close_Force();
    void start_construct();
    void OnNotificationBlackListedDelegate_Event(const bool bBlackListed, FString SenderId);
    void UnBindNotificationBlackListedDelegate();
    void OnJankenUIDelegate_Event_0();
    void UnBindJankenUIDelegate();
    void SendMess(SendAdv)(const bool bWasSuccessful, const FSendAdventureCardResult SendAdventureCardResult);
    void OnRequestDirectChat_Event();
    void SendLike();
    void BndEvt__OtherPCMenu_CmnClose01_K2Node_ComponentBoundEvent_1_OnClosed__DelegateSignature();
    void OnSendLikeEvent();
    void OnCheckBlockStatus_Event(const bool bCheckBlockStatus);
    void ResultClose();
    void CustomEvent_1(class UObject* Sender, class UObject* Param);
    void OnSendAdventureCard();
    void ExecuteUbergraph_OtherPCMenu(int32 EntryPoint);
    void OnDirectChat__DelegateSignature();
    void OnClose__DelegateSignature();
}; // Size: 0x758

#endif
