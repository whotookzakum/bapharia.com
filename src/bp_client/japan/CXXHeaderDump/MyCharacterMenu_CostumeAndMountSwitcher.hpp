#ifndef UE4SS_SDK_MyCharacterMenu_CostumeAndMountSwitcher_HPP
#define UE4SS_SDK_MyCharacterMenu_CostumeAndMountSwitcher_HPP

class UMyCharacterMenu_CostumeAndMountSwitcher_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_BattleSet;                          // 0x02B8 (size: 0x8)
    class UCommandMenu_SubMenuLine_C* CommandMenu_SubMenuLine;                        // 0x02C0 (size: 0x8)
    class UMyCharaMenu_ArmamentChange_C* MyCharaMenu_ArmamentChange;                  // 0x02C8 (size: 0x8)
    class UMyCharaMenu_Costume_C* MyCharaMenu_Costume;                                // 0x02D0 (size: 0x8)
    class UCanvasPanel* SubMenuGrp;                                                   // 0x02D8 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* TabButtons;                              // 0x02E0 (size: 0x8)
    class UUIBlocker_C* UIBlocker_BattleSet;                                          // 0x02E8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_0;                                          // 0x02F0 (size: 0x8)
    bool IsFirstOpen;                                                                 // 0x02F8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02F9 (size: 0x7)
    FMyCharacterMenu_CostumeAndMountSwitcher_COnSubMenuChanged OnSubMenuChanged;      // 0x0300 (size: 0x10)
    void OnSubMenuChanged(int32 Index);
    FMyCharacterMenu_CostumeAndMountSwitcher_COnAchievementChangeButtonClicked OnAchievementChangeButtonClicked; // 0x0310 (size: 0x10)
    void OnAchievementChangeButtonClicked(class UMyCharaMenu_AchievementList_C* InAchievementList);
    FMyCharacterMenu_CostumeAndMountSwitcher_COnAcquiredAchievementLoaded OnAcquiredAchievementLoaded; // 0x0320 (size: 0x10)
    void OnAcquiredAchievementLoaded(bool InResult);
    FMyCharacterMenu_CostumeAndMountSwitcher_COnSelectAchievementSaved OnSelectAchievementSaved; // 0x0330 (size: 0x10)
    void OnSelectAchievementSaved(bool InResult);
    int32 TmpClickedTabButtonId;                                                      // 0x0340 (size: 0x4)
    int32 TmpCurrTabButtonId;                                                         // 0x0344 (size: 0x4)
    FMyCharacterMenu_CostumeAndMountSwitcher_COnSetPlayerCaptureStudioHidden OnSetPlayerCaptureStudioHidden; // 0x0348 (size: 0x10)
    void OnSetPlayerCaptureStudioHidden(bool IsHidden);
    FString OpenBookMarkType;                                                         // 0x0358 (size: 0x10)
    TArray<FString> BookmarkTypeList;                                                 // 0x0368 (size: 0x10)
    FMyCharacterMenu_CostumeAndMountSwitcher_COnPlayerAvatarRotateActive OnPlayerAvatarRotateActive; // 0x0378 (size: 0x10)
    void OnPlayerAvatarRotateActive(bool InIsActive);
    class UWidget* TempActiveWidget;                                                  // 0x0388 (size: 0x8)
    FMyCharacterMenu_CostumeAndMountSwitcher_COnResetPlayerAvatarRotate OnResetPlayerAvatarRotate; // 0x0390 (size: 0x10)
    void OnResetPlayerAvatarRotate();
    FMyCharacterMenu_CostumeAndMountSwitcher_COnPlayerCharacterEquippedCostumeChanged OnPlayerCharacterEquippedCostumeChanged; // 0x03A0 (size: 0x10)
    void OnPlayerCharacterEquippedCostumeChanged();
    FMyCharacterMenu_CostumeAndMountSwitcher_COnIsCmnBackBtnVisible OnIsCmnBackBtnVisible; // 0x03B0 (size: 0x10)
    void OnIsCmnBackBtnVisible(bool InIsVisible);
    FMyCharacterMenu_CostumeAndMountSwitcher_COnEquippedWeaponSpawned OnEquippedWeaponSpawned; // 0x03C0 (size: 0x10)
    void OnEquippedWeaponSpawned();
    FMyCharacterMenu_CostumeAndMountSwitcher_COnSetCostumeOnFlag OnSetCostumeOnFlag;  // 0x03D0 (size: 0x10)
    void OnSetCostumeOnFlag(bool InIsCostumeOn);
    bool ChangeTabFirst;                                                              // 0x03E0 (size: 0x1)
    char padding_1[0x7];                                                              // 0x03E1 (size: 0x7)
    class UWidget* TmpSwitcherChild;                                                  // 0x03E8 (size: 0x8)

    void GetWidgetSwitcherActiveWidget(class UWidget*& OutWidget);
    void InitCostumeChangeMenu(class UMyCharaMenu_Costume_C* InCostumeChangeMenu);
    void IsBattleSetButtonEnable(bool& OutIsEnable);
    void Update Sub Button Excramation Icon();
    void Destruct();
    void Construct();
    void SetTab(const FString& ItemToFind);
    void BndEvt__TabButtons_K2Node_ComponentBoundEvent_0_OnClick__DelegateSignature(int32 ButtonId);
    void Init(bool IsFirstOpen, FString OpenBookMarkType);
    void OnSetPlayerCaptureStudioHidden_イベント(bool IsHidden);
    void ChangeTab(int32 TmpClickedTabButtonId);
    void BookmarkUpdateRequest();
    void UpdateBookmarkStatusButton();
    void OnClicked_BattleSet_DetailedStatus();
    void BndEvt__MyCharacterMenu_StatusSwitcher_ButtonFullScreen_BattleSet_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void Init_BattleSet_FullSrnBtn();
    void EscDetailedStatus();
    void OnClickedDetailedStatus();
    void Free_BattleSet_FullSrnBtn();
    void OnAdventureBoardBtn_Event();
    void ExecuteUbergraph_MyCharacterMenu_CostumeAndMountSwitcher(int32 EntryPoint);
    void OnSetCostumeOnFlag__DelegateSignature(bool InIsCostumeOn);
    void OnResetPlayerAvatarRotate__DelegateSignature();
    void OnEquippedWeaponSpawned__DelegateSignature();
    void OnIsCmnBackBtnVisible__DelegateSignature(bool InIsVisible);
    void OnPlayerCharacterEquippedCostumeChanged__DelegateSignature();
    void OnPlayerAvatarRotateActive__DelegateSignature(bool InIsActive);
    void OnSetPlayerCaptureStudioHidden__DelegateSignature(bool IsHidden);
    void OnSelectAchievementSaved__DelegateSignature(bool InResult);
    void OnAcquiredAchievementLoaded__DelegateSignature(bool InResult);
    void OnAchievementChangeButtonClicked__DelegateSignature(class UMyCharaMenu_AchievementList_C* InAchievementList);
    void OnSubMenuChanged__DelegateSignature(int32 Index);
}; // Size: 0x3F0

#endif
