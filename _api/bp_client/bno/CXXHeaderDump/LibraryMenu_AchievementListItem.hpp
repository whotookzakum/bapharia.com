#ifndef UE4SS_SDK_LibraryMenu_AchievementListItem_HPP
#define UE4SS_SDK_LibraryMenu_AchievementListItem_HPP

class ULibraryMenu_AchievementListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UAchievementRankIcon_C* AchievementRankIcon;                                // 0x0280 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0288 (size: 0x8)
    class UImage* IconLimited;                                                        // 0x0290 (size: 0x8)
    class UImage* IconNew;                                                            // 0x0298 (size: 0x8)
    class UWidgetSwitcher* IconRewordSwitcher;                                        // 0x02A0 (size: 0x8)
    class UImage* IconTitleSet;                                                       // 0x02A8 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x02B0 (size: 0x8)
    class USBRichTextBlock* ProgressText;                                             // 0x02B8 (size: 0x8)
    class USBRichTextBlock* ProgressText_1;                                           // 0x02C0 (size: 0x8)
    class UWidgetSwitcher* SwitchSelected;                                            // 0x02C8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_263;                                        // 0x02D0 (size: 0x8)
    FLibraryMenu_AchievementListItem_COnClick OnClick;                                // 0x02D8 (size: 0x10)
    void OnClick(int32 listIndex);
    int32 listIndex;                                                                  // 0x02E8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02EC (size: 0x4)
    FAchievementMasterData AchievementMasterData;                                     // 0x02F0 (size: 0x78)
    FLibraryMenu_AchievementListItem_CEventCheckStateChanged EventCheckStateChanged;  // 0x0368 (size: 0x10)
    void EventCheckStateChanged(bool IsChecked, int32 listIndex);
    bool IsNew;                                                                       // 0x0378 (size: 0x1)
    bool CheckBoxEnabled;                                                             // 0x0379 (size: 0x1)
    char padding_1[0x2];                                                              // 0x037A (size: 0x2)
    FLinearColor UnSelectAndUnHoverColor;                                             // 0x037C (size: 0x10)
    FLinearColor SelectAndHoverColor;                                                 // 0x038C (size: 0x10)

    void SetFontColor(FLinearColor Specified Color);
    void SetVisibilityAchievementEventTermIcon(bool isVisibility);
    void SetVisibilityAchievementTitleIcon(bool isVisibility);
    void SetRewardIcon(TArray<FString>& RewardIdList, bool IsClear, bool IsRecievedReward, bool IsTermEnd);
    void SetProgress(int32 InObjectNum, int32 InProgress, int32 InObejectKind);
    void SetExcramationIconVisible(bool Visible);
    void SetBtnSelected(bool bSelected);
    void Initialize();
    void Construct();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_147_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_103_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_122_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_AchievementListItem(int32 EntryPoint);
    void EventCheckStateChanged__DelegateSignature(bool IsChecked, int32 listIndex);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x39C

#endif
