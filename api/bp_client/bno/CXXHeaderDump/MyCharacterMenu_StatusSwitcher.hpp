#ifndef UE4SS_SDK_MyCharacterMenu_StatusSwitcher_HPP
#define UE4SS_SDK_MyCharacterMenu_StatusSwitcher_HPP

class UMyCharacterMenu_StatusSwitcher_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UMyCharaMenu_BattleSet_C* BattleSet;                                        // 0x02B8 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_BattleSet;                          // 0x02C0 (size: 0x8)
    class UUIBlocker_C* UIBlocker_BattleSet;                                          // 0x02C8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_0;                                          // 0x02D0 (size: 0x8)
    bool IsFirstOpen;                                                                 // 0x02D8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02D9 (size: 0x7)
    FMyCharacterMenu_StatusSwitcher_COnSubMenuChanged OnSubMenuChanged;               // 0x02E0 (size: 0x10)
    void OnSubMenuChanged(int32 Index);
    FMyCharacterMenu_StatusSwitcher_COnAchievementChangeButtonClicked OnAchievementChangeButtonClicked; // 0x02F0 (size: 0x10)
    void OnAchievementChangeButtonClicked(class UMyCharaMenu_AchievementList_C* InAchievementList);
    FMyCharacterMenu_StatusSwitcher_COnAcquiredAchievementLoaded OnAcquiredAchievementLoaded; // 0x0300 (size: 0x10)
    void OnAcquiredAchievementLoaded(bool InResult);
    FMyCharacterMenu_StatusSwitcher_COnSelectAchievementSaved OnSelectAchievementSaved; // 0x0310 (size: 0x10)
    void OnSelectAchievementSaved(bool InResult);
    int32 TmpClickedTabButtonId;                                                      // 0x0320 (size: 0x4)
    int32 TmpCurrTabButtonId;                                                         // 0x0324 (size: 0x4)
    FMyCharacterMenu_StatusSwitcher_COnSetPlayerCaptureStudioHidden OnSetPlayerCaptureStudioHidden; // 0x0328 (size: 0x10)
    void OnSetPlayerCaptureStudioHidden(bool IsHidden);
    FString OpenBookMarkType;                                                         // 0x0338 (size: 0x10)
    TArray<FString> BookmarkTypeList;                                                 // 0x0348 (size: 0x10)
    FMyCharacterMenu_StatusSwitcher_COnPlayerAvatarRotateActive OnPlayerAvatarRotateActive; // 0x0358 (size: 0x10)
    void OnPlayerAvatarRotateActive(bool InIsActive);
    class UWidget* TempActiveWidget;                                                  // 0x0368 (size: 0x8)
    FMyCharacterMenu_StatusSwitcher_COnResetPlayerAvatarRotate OnResetPlayerAvatarRotate; // 0x0370 (size: 0x10)
    void OnResetPlayerAvatarRotate();
    FMyCharacterMenu_StatusSwitcher_COnPlayerCharacterEquippedCostumeChanged OnPlayerCharacterEquippedCostumeChanged; // 0x0380 (size: 0x10)
    void OnPlayerCharacterEquippedCostumeChanged();
    FMyCharacterMenu_StatusSwitcher_COnIsCmnBackBtnVisible OnIsCmnBackBtnVisible;     // 0x0390 (size: 0x10)
    void OnIsCmnBackBtnVisible(bool InIsVisible);
    FMyCharacterMenu_StatusSwitcher_COnEquippedWeaponSpawned OnEquippedWeaponSpawned; // 0x03A0 (size: 0x10)
    void OnEquippedWeaponSpawned();
    FMyCharacterMenu_StatusSwitcher_COnSetCostumeOnFlag OnSetCostumeOnFlag;           // 0x03B0 (size: 0x10)
    void OnSetCostumeOnFlag(bool InIsCostumeOn);
    bool ChangeTabFirst;                                                              // 0x03C0 (size: 0x1)

    void InitCostumeChangeMenu(class UMyCharaMenu_Costume_C* InCostumeChangeMenu);
    void IsBattleSetButtonEnable(bool& OutIsEnable);
    void Update Sub Button Excramation Icon();
    void Construct();
    void Init(bool IsFirstOpen, FString OpenBookMarkType);
    void Destruct();
    void OnSetPlayerCaptureStudioHidden_イベント(bool IsHidden);
    void ChangeTab(int32 TmpClickedTabButtonId);
    void OnClicked_BattleSet_DetailedStatus();
    void BndEvt__MyCharacterMenu_StatusSwitcher_ButtonFullScreen_BattleSet_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void BookmarkUpdateRequest();
    void Init_BattleSet_FullSrnBtn();
    void EscDetailedStatus();
    void OnClickedDetailedStatus();
    void Free_BattleSet_FullSrnBtn();
    void OnAdventureBoardBtn_Event();
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_6_OnSetPlayerAvatarRotateActive__DelegateSignature(bool InIsRotateActive);
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_7_OnPlayerCharacterEquippedCostumeChanged__DelegateSignature();
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_5_OnIsCmnBackBtnVisible__DelegateSignature(bool InIsVisible);
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_10_OnEquippedWeaponSpawned__DelegateSignature();
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_8_OnResetPlayerAvatarRotate__DelegateSignature();
    void BndEvt__MyCharacterMenu_StatusSwitcher_BattleSet_K2Node_ComponentBoundEvent_0_OnSetPlayerCaptureStudioHidden__DelegateSignature(bool InIsHidden);
    void ExecuteUbergraph_MyCharacterMenu_StatusSwitcher(int32 EntryPoint);
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
}; // Size: 0x3C1

#endif
