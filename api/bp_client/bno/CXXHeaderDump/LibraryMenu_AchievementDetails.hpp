#ifndef UE4SS_SDK_LibraryMenu_AchievementDetails_HPP
#define UE4SS_SDK_LibraryMenu_AchievementDetails_HPP

class ULibraryMenu_AchievementDetails_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* AchievementData_Canvas;                                       // 0x0280 (size: 0x8)
    class UWidgetSwitcher* AchievementData_Switcher;                                  // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_NoSelect;                                         // 0x0290 (size: 0x8)
    class UCmnCleared_L_C* CmnCleared_L;                                              // 0x0298 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02A0 (size: 0x8)
    class ULibraryMenuBtn3_C* GetRewardBtn;                                           // 0x02A8 (size: 0x8)
    class UHorizontalBox* HorizontalBox;                                              // 0x02B0 (size: 0x8)
    class UImage* IconLimited;                                                        // 0x02B8 (size: 0x8)
    class ULibraryMenu_Achievement_SwitchOnOff_C* LibraryMenu_Achievement_SwitchOnOff; // 0x02C0 (size: 0x8)
    class UWidgetSwitcher* Limited_Desc_Switcher;                                     // 0x02C8 (size: 0x8)
    class UScaleBox* LimitedTime;                                                     // 0x02D0 (size: 0x8)
    class UImage* Line_1;                                                             // 0x02D8 (size: 0x8)
    class UCmnCleared_L_C* NoneAchievementData_CmnCleared_L;                          // 0x02E0 (size: 0x8)
    class UImage* NoneAchievementData_IconLimited;                                    // 0x02E8 (size: 0x8)
    class UWidgetSwitcher* NoneAchievementData_Limited_Desc_Switcher;                 // 0x02F0 (size: 0x8)
    class UScaleBox* NoneAchievementData_LimitedTime;                                 // 0x02F8 (size: 0x8)
    class USBDateTimeTextBlock* NoneAchievementData_SBDateTimeTextBlock_LimitedTime;  // 0x0300 (size: 0x8)
    class UCanvasPanel* NoneAchievmentData_Canvas;                                    // 0x0308 (size: 0x8)
    class UHorizontalBox* RewardList;                                                 // 0x0310 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_LimitedTime;                      // 0x0318 (size: 0x8)
    class UShowTutorialHelpBtn_C* ShowTutorialHelpBtn;                                // 0x0320 (size: 0x8)
    class UWidgetSwitcher* SwitchRank;                                                // 0x0328 (size: 0x8)
    class UTextBlock* TextAchievementName_1;                                          // 0x0330 (size: 0x8)
    class UTextBlock* TextConditions;                                                 // 0x0338 (size: 0x8)
    class UTextBlock* TxtGaugeNum;                                                    // 0x0340 (size: 0x8)
    class UTextBlock* TxtGaugeTotal;                                                  // 0x0348 (size: 0x8)
    class USBRuntimeTextBlock* TxtMessage1;                                           // 0x0350 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_261;                                        // 0x0358 (size: 0x8)
    FAchievementMasterData AchievementData;                                           // 0x0360 (size: 0x78)
    int32 ID;                                                                         // 0x03D8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x03DC (size: 0x4)
    FLibraryMenu_AchievementDetails_COnGetRewardItem OnGetRewardItem;                 // 0x03E0 (size: 0x10)
    void OnGetRewardItem();
    class UMailAttachmentsAcceptWindow_C* AttachmentListData;                         // 0x03F0 (size: 0x8)
    TArray<FSBMasterReward> RewardDatas;                                              // 0x03F8 (size: 0x10)
    bool IsRequest;                                                                   // 0x0408 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0409 (size: 0x7)
    class UMailListAttachmentAcceptedResult_C* MailListAttachmentAcceptResultWG;      // 0x0410 (size: 0x8)
    FLibraryMenu_AchievementDetails_COnSetAchievement OnSetAchievement;               // 0x0418 (size: 0x10)
    void OnSetAchievement();
    FLibraryMenu_AchievementDetails_COnClickRewardIcon OnClickRewardIcon;             // 0x0428 (size: 0x10)
    void OnClickRewardIcon(FSBMasterReward InMasterReward);
    bool IsTermEventTimeEnd;                                                          // 0x0438 (size: 0x1)
    char padding_2[0x7];                                                              // 0x0439 (size: 0x7)
    TArray<float> RewardAlphaList;                                                    // 0x0440 (size: 0x10)
    FSBCharacterAchievementDataInfo Character Achievement Data;                       // 0x0450 (size: 0x18)
    bool IsOverLimitDiscard;                                                          // 0x0468 (size: 0x1)
    bool IsOverLimitSell;                                                             // 0x0469 (size: 0x1)

    void CheckAchievementReward(TArray<FSBMailData>& OutMailDatas);
    void SetRewardIconAlpha(float InAlpha);
    void SetRank(int32 InRankId);
    void GetAchievementReward(TArray<FSBMailData>& OutMailData);
    void SetLimitedTime(FString TeamID, FDateTime InLoadDateTime);
    void SetReward(bool IsEneble, TArray<FString>& RewardIdList, bool IsRecieved);
    void Set Achievement Id(FAchievementMasterData AchievementMasterData, FSBCharacterAchievementDataInfo CharacterAchievementData, FDateTime InLoadDateTime);
    void SetDetailsVisibility(bool Visible);
    void Construct();
    void RequestAPI_GetAchievementRewards();
    void OnGetAchievementRewardsDelegate_Event(const bool Result, const int32 RetCode, const FSBAchievementRewardData AchievementRewardData);
    void CallErrorMessage(int32 RetCode);
    void BndEvt__LibraryMenu_AchievementDetails_LibraryMenu_Achievement_SwitchOnOff_K2Node_ComponentBoundEvent_2_OnSwitchOnPressed__DelegateSignature(bool outIsSetAchievement);
    void SaveAchievementSelectEvent(const bool Result);
    void MailListAttachmentAcceptResult_CloseEvent();
    void BndEvt__LibraryMenu_AchievementDetails_GetRewardBtn_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void RewardIconClick(class UQuestRewardIcon_C* Sender);
    void MailAcceptWindowClose();
    void GetOverFlowRewards();
    void ExecuteUbergraph_LibraryMenu_AchievementDetails(int32 EntryPoint);
    void OnClickRewardIcon__DelegateSignature(FSBMasterReward InMasterReward);
    void OnSetAchievement__DelegateSignature();
    void OnGetRewardItem__DelegateSignature();
}; // Size: 0x46A

#endif
