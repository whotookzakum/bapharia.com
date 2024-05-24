#ifndef UE4SS_SDK_MyCharaMenu_HPP
#define UE4SS_SDK_MyCharaMenu_HPP

class UMyCharaMenu_C : public USBCommandMenuChildBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* CategoryTabButtonList;                   // 0x02C0 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02C8 (size: 0x8)
    class UCommandMenuBg_C* CommandMenuBg;                                            // 0x02D0 (size: 0x8)
    class UCanvasPanel* MenuCanvas;                                                   // 0x02D8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02E0 (size: 0x8)
    TEnumAsByte<EMyCharaMenu_ItemType::Type> CurrMenuItemType;                        // 0x02E8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02E9 (size: 0x7)
    class ABP_PlayerSceneCapture2D_Studio_C* PlayerAvatarStudio;                      // 0x02F0 (size: 0x8)
    class UUserWidget* CurrSelectedMenuWidget;                                        // 0x02F8 (size: 0x8)
    bool bHiding;                                                                     // 0x0300 (size: 0x1)
    bool IsFirstOpen;                                                                 // 0x0301 (size: 0x1)
    char padding_1[0x2];                                                              // 0x0302 (size: 0x2)
    int32 HelpId;                                                                     // 0x0304 (size: 0x4)
    int32 CurrAvatarPoseStateNo;                                                      // 0x0308 (size: 0x4)
    bool PlayerAvatarImageReuploadFlag;                                               // 0x030C (size: 0x1)
    ESubMenuTermReason TermRequestReason;                                             // 0x030D (size: 0x1)
    char padding_2[0x2];                                                              // 0x030E (size: 0x2)
    class ABP_PlayerSceneCapture2D_C* TmpBPPlayerSceneCapture2D;                      // 0x0310 (size: 0x8)
    class USBCharaCreateComponent* SBCharaCreateComponent;                            // 0x0318 (size: 0x8)
    class UWidgetAnimation* FinishedAnimation;                                        // 0x0320 (size: 0x8)
    class USBPlayerCharacterCommonComponent* SBPlayerCharacterCommonComp;             // 0x0328 (size: 0x8)
    TArray<FString> BookmarkTypeButtonList;                                           // 0x0330 (size: 0x10)
    bool IsCostumeOn;                                                                 // 0x0340 (size: 0x1)
    bool TempIsChangeCostumeProcStart;                                                // 0x0341 (size: 0x1)
    bool bIsIdleMotionPlaying;                                                        // 0x0342 (size: 0x1)
    char padding_3[0x5];                                                              // 0x0343 (size: 0x5)
    TMap<FString, TEnumAsByte<EMyCharaMenu_ItemType::Type>> MenuMap;                  // 0x0348 (size: 0x50)
    TEnumAsByte<EMyCharaMenu_ItemType::Type> TempMenuItemType;                        // 0x0398 (size: 0x1)
    char padding_4[0x3];                                                              // 0x0399 (size: 0x3)
    int32 CurrCostumeAndMountsSubMenuId;                                              // 0x039C (size: 0x4)
    bool bAvatarSetSavedPose;                                                         // 0x03A0 (size: 0x1)
    bool bReturnToCategoryTabChangeProc;                                              // 0x03A1 (size: 0x1)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void UpdatePlayerAvatarWeapon();
    void Set Player Avater Current Mode Motion(TEnumAsByte<EMyCharaMenu_ItemType::Type> InMyCharaMenuItemType, bool ForceEnable);
    void Set Player Avater Motion Mode(TEnumAsByte<EMyCharaMenu_ItemType::Type>& InMyCharaMenuItemType, bool& IsIdleMotionPlaying);
    void UpdateArmamentChangeButtonEnable();
    void Initialize Open Menu Type();
    void SetPlayerAvatarStudioHidden(bool InIsHidden);
    void FindCurrMapPlayerAvatarTransform(FString InCurrMapName, FTransform& OutTransform);
    void Setup Selected Menu(TEnumAsByte<EMyCharaMenu_ItemType::Type> InSelectedItemType);
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void StartUploadImage();
    void OnSaveCommandMenuPlayerAvatarPoseId_イベント(int32 InRetCode, int32 InAvatarPoseId);
    void OnUploadImageCompleted_イベント();
    void StartPlayerAvatarUploadImage();
    void OnUploadImageEnded();
    void AchievementChangeButtonClicked(class UMyCharaMenu_AchievementList_C* InAchievementList);
    void AcquiredAchievementLoaded(bool InResult);
    void SelectAchievementSaved(bool InResult);
    void Construct();
    void Destruct();
    void Init();
    void BndEvt__MenuItemTabList_K2Node_ComponentBoundEvent_120_OnClick__DelegateSignature(int32 ButtonId);
    void SetUIBlockerVisibility(bool IsVisible);
    void OnPlayerAvatarRotateActive_イベント(bool InIsActive);
    void ChangeCostumeProc(bool InProcStart);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnRequestDirectChat_Event();
    void CustomEvent_0();
    void BattleSetSubMenuChanged(int32 Index);
    void EffectListSubMenuChanged(int32 Index);
    void OnPlayerAvatarSwitchPosing_イベント(FName OnPosingCommandName, bool InSwitchPosingToPrev);
    void OnPlayerAvatarStudio_CharaPartsLoaded_イベント();
    void OnChangeState_イベント(FString InPrevStateName, FString InNextStateName);
    void StartOpenMenuAnimation();
    void OnChangeStateByCostumeChange_イベント(FString InPrevStateName, FString InNextStateName);
    void OnCharaPartsLoadedDelegate_ByChangeCostume_イベント(bool Result);
    void DoMenuClose();
    void OnSetPlayerCaptureStudioHidden_イベント(bool IsHidden);
    void BookmarkUpdateRequest();
    void UpdateBookmarkStatusButton();
    void OnCostumeSwitchOnOffEvent(bool InIsCostumeOn);
    void OnChangeEquipCostumeOccuredAtOtherEquipChange();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnIsCmnBackBtnVisibleEvent(bool InIsVisible);
    void OnEquippedWeaponSpawned();
    void OnResetPlayerAvatarRotate_イベント();
    void SetCostumePreviewParameter(FSBCharaCreateParameter CharaCreateParameter, bool Start);
    void SetAvatarImageReuploadFlag();
    void RefreshPreviewCostume(FSBCharaCreateParameter CharaCreateParameter);
    void OnCharaPartsLoaded_CostumePreviewRefresh(bool Result);
    void OnIsCostumeOn(bool InIsCostumeOn);
    void OnCostumeAndMountsSubMenuChanged(int32 InSubMenuId);
    void OnResetAvatarCostumeOnOffToDefault();
    void CostumeAndMountsSubMenuChanged(int32 Index);
    void SkillBoardSetSubMenuChanged(int32 Index);
    void AdventurerRankSubMenuChanged(int32 Index);
    void ExecuteUbergraph_MyCharaMenu(int32 EntryPoint);
}; // Size: 0x3A2

#endif
