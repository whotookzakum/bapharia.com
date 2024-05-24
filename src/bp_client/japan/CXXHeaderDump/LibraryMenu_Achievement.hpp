#ifndef UE4SS_SDK_LibraryMenu_Achievement_HPP
#define UE4SS_SDK_LibraryMenu_Achievement_HPP

class ULibraryMenu_Achievement_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimDetailsIn;                                            // 0x0280 (size: 0x8)
    class UWidgetSwitcher* AchievementData_Switcher;                                  // 0x0288 (size: 0x8)
    class UImage* AchievementGraffiti;                                                // 0x0290 (size: 0x8)
    class ULibraryMenu_AchievementProgressIcon_C* AchievementProgressIcon_0;          // 0x0298 (size: 0x8)
    class ULibraryMenu_AchievementProgressIcon_C* AchievementProgressIcon_1;          // 0x02A0 (size: 0x8)
    class ULibraryMenu_AchievementProgressIcon_C* AchievementProgressIcon_2;          // 0x02A8 (size: 0x8)
    class ULibraryMenu_AchievementProgressIcon_C* AchievementProgressIcon_3;          // 0x02B0 (size: 0x8)
    class ULibraryMenu_AchievementProgressIcon_C* AchievementProgressIcon_4;          // 0x02B8 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02C0 (size: 0x8)
    class USBComboBoxCmn01_C* ComboBox;                                               // 0x02C8 (size: 0x8)
    class UImage* Frame;                                                              // 0x02D0 (size: 0x8)
    class USBButton_C* GetRewardBtn;                                                  // 0x02D8 (size: 0x8)
    class USBRuntimeTextBlock* GetRewardBtnText;                                      // 0x02E0 (size: 0x8)
    class ULibraryMenu_AchievementDetails_C* LibraryMenu_AchievementDetails;          // 0x02E8 (size: 0x8)
    class ULibraryMenu_AchievementList_C* LibraryMenu_AchievementList;                // 0x02F0 (size: 0x8)
    class UImage* NoneAchievement_BG;                                                 // 0x02F8 (size: 0x8)
    class USBRichTextBlock* NoneAchievement_Desc2_Text;                               // 0x0300 (size: 0x8)
    class USBRichTextBlock* NoneAchievement_Desc_Text;                                // 0x0308 (size: 0x8)
    class UCanvasPanel* Progress;                                                     // 0x0310 (size: 0x8)
    class UHorizontalBox* RankProgress;                                               // 0x0318 (size: 0x8)
    class UShowTutorialHelpBtn_C* ShowTutorialHelpBtn;                                // 0x0320 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0328 (size: 0x8)
    int32 SelectLargeCategoryListId;                                                  // 0x0330 (size: 0x4)
    int32 SelectMediumCategoryListId;                                                 // 0x0334 (size: 0x4)
    int32 SelectItemListId;                                                           // 0x0338 (size: 0x4)
    bool IsBindedToOnLoadAchievementDelgate;                                          // 0x033C (size: 0x1)
    char padding_0[0x3];                                                              // 0x033D (size: 0x3)
    int32 CheckAchievementId;                                                         // 0x0340 (size: 0x4)
    bool IsSaving;                                                                    // 0x0344 (size: 0x1)
    bool IsAchievementOnly;                                                           // 0x0345 (size: 0x1)
    bool IsLoadAchievementData;                                                       // 0x0346 (size: 0x1)
    bool IsLoadAchievementData_Bind;                                                  // 0x0347 (size: 0x1)
    TArray<FAchievementMasterData> ItemListInfo;                                      // 0x0348 (size: 0x10)
    TEnumAsByte<ESBAchievementSortType::Type> SortType;                               // 0x0358 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0359 (size: 0x7)
    FLibraryMenu_Achievement_CUpdateNewIcon UpdateNewIcon;                            // 0x0360 (size: 0x10)
    void UpdateNewIcon(int32 MenuButtonListId);
    TArray<FSBAchievementLargeCategoryInfo> LargeCategoryInfo;                        // 0x0370 (size: 0x10)
    TArray<FSBCharacterAchievementDataInfo> CharacterAchievementDataList;             // 0x0380 (size: 0x10)
    int32 SelectCategoryListId;                                                       // 0x0390 (size: 0x4)
    bool IsRewardBtnEnable;                                                           // 0x0394 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0395 (size: 0x3)
    class UMailAttachmentsAcceptWindow_C* AttachmentListData;                         // 0x0398 (size: 0x8)
    bool IsRequest;                                                                   // 0x03A0 (size: 0x1)
    char padding_3[0x7];                                                              // 0x03A1 (size: 0x7)
    class UMailListAttachmentAcceptedResult_C* MailListAttachmentAcceptResultWG;      // 0x03A8 (size: 0x8)
    TArray<int32> RewardAchievementIds;                                               // 0x03B0 (size: 0x10)
    FMargin InListItemPadding;                                                        // 0x03C0 (size: 0x10)
    class UUMG_ProductDetailMenu_C* ProductDetailMenu;                                // 0x03D0 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x03D8 (size: 0x8)
    bool IsOverLimitDiscard;                                                          // 0x03E0 (size: 0x1)
    bool IsOverLimitSell;                                                             // 0x03E1 (size: 0x1)
    char padding_4[0x6];                                                              // 0x03E2 (size: 0x6)
    FDateTime LoadDateTime;                                                           // 0x03E8 (size: 0x8)
    bool IsColorChange;                                                               // 0x03F0 (size: 0x1)

    void SetLimitedTime(FString TermId, bool& OutValue);
    void UpdateCharacterAchievementDataInfo();
    void CheckAllAchievement(TArray<FAchievementMasterData>& outItemListInfo);
    void GetAchievementReward(TArray<FSBMailData>& OutMailData);
    void Set Reward Btn();
    void GetCategoryID(int32 Value, int32& outLargeCategoryId, int32& outMediumCategoryId);
    FString GetLargeCategoryName(int32 inInt);
    FString GetGroupName(int32 inInt);
    void SetAchievedDate(int32 AchievementId, FDateTime& InDateTime);
    void GetCharacterAchievementData(int32 AchievementId, FSBCharacterAchievementDataInfo& Data);
    class UWidget* On_ComboBox_GenerateWidget_0(FString item);
    void CheckCategory(FAchievementMasterData MasterData, bool& Result);
    void UpdateSelectCategoryNewIcon();
    void Get Read Achievement Id List(TArray<int32>& ReadAchievementIdList);
    void SetAchievementId(bool IsChecked, int32 listIndex);
    void ClickListItem(int32 listIndex);
    void CreateItemList(int32 InSelectId);
    void Create Category List();
    void Initialize_RankProgress();
    void Initialize();
    void Construct();
    void Destruct();
    void OnLoadAchievementDelegate(const bool Result, const TArray<FSBAchievementInfo>& AchievementList);
    void OnSaveAchievementSelectedDelegate_Event(const bool Result);
    void BndEvt__ComboBox_K2Node_ComponentBoundEvent_3_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void RequestAPI_LoadAchievementData();
    void OnLoadAchievementDataDelegate_Event(const bool Result, const int32 RetCode);
    void CallErrorMessage(int32 RetCode);
    void RequestAPI_GetAchievementRewards();
    void OnGetAchievementRewardsDelegate_Event(const bool Result, const int32 RetCode, const FSBAchievementRewardData AchievementRewardData);
    void AttachmentListWindow_Close();
    void OnGetRewardItemEvent();
    void MailListAttachmentAcceptResult_CloseEvent();
    void BndEvt__LibraryMenu_Achievement_GetRewardBtn_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_LibraryMenu_AchievementDetails_K2Node_ComponentBoundEvent_6_OnSetAchievement__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_LibraryMenu_AchievementDetails_K2Node_ComponentBoundEvent_0_OnClickRewardIcon__DelegateSignature(FSBMasterReward InMasterReward);
    void OnCloseDetailMenu(class UUMG_ProductDetailMenu_C* Sender);
    void BndEvt__LibraryMenu_Achievement_CategoryList_Type1_K2Node_ComponentBoundEvent_5_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void BndEvt__LibraryMenu_Achievement_GetRewardBtn_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_GetRewardBtn_K2Node_ComponentBoundEvent_7_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_GetRewardBtn_K2Node_ComponentBoundEvent_8_OnButtonPressedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Achievement_LibraryMenu_AchievementDetails_K2Node_ComponentBoundEvent_4_OnGetRewardItem__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_Achievement(int32 EntryPoint);
    void UpdateNewIcon__DelegateSignature(int32 MenuButtonListId);
}; // Size: 0x3F1

#endif
