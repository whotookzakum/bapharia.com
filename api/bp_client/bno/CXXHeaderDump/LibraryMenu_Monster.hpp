#ifndef UE4SS_SDK_LibraryMenu_Monster_HPP
#define UE4SS_SDK_LibraryMenu_Monster_HPP

class ULibraryMenu_Monster_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimSwitchWindow;                                         // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimNameWindow;                                           // 0x02B8 (size: 0x8)
    class UWidgetAnimation* ModelFadeIn2;                                             // 0x02C0 (size: 0x8)
    class UWidgetAnimation* ModelFadeIn;                                              // 0x02C8 (size: 0x8)
    class UWidgetAnimation* AnimPreviewClose;                                         // 0x02D0 (size: 0x8)
    class UWidgetAnimation* AnimPreviewOpen;                                          // 0x02D8 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_ModelView;                          // 0x02E0 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_MonsterDetails;                     // 0x02E8 (size: 0x8)
    class ULibraryMenu_EnemyCaptureStudio_C* CaptureStudio;                           // 0x02F0 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02F8 (size: 0x8)
    class UCmnBack01_C* CmnBack01;                                                    // 0x0300 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x0308 (size: 0x8)
    class UCmnOperationRotate_C* CmnOperationRotate;                                  // 0x0310 (size: 0x8)
    class UCmnOperationRotate_C* CmnOperationRotate_114;                              // 0x0318 (size: 0x8)
    class UCanvasPanel* EnemyImagePanel;                                              // 0x0320 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x0328 (size: 0x8)
    class ULibraryMenu_Monster_NameWindow_C* LibraryMenu_Monster_NameWindow;          // 0x0330 (size: 0x8)
    class ULibraryMenu_Monster_SwitchWindow_C* LibraryMenu_Monster_SwitchWindow;      // 0x0338 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x0340 (size: 0x8)
    class UOverlay* ListSelectTextOverlay;                                            // 0x0348 (size: 0x8)
    class UButton* ModelChangeButton;                                                 // 0x0350 (size: 0x8)
    class USBRuntimeTextBlock* ModelChangeText;                                       // 0x0358 (size: 0x8)
    class UImage* ModelImage;                                                         // 0x0360 (size: 0x8)
    class UOverlay* ModelViewWindow;                                                  // 0x0368 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x0370 (size: 0x8)
    class UImage* PreviewImage;                                                       // 0x0378 (size: 0x8)
    class USBRichTextBlock* SBRichTextBlock_142;                                      // 0x0380 (size: 0x8)
    class UImage* TextLine;                                                           // 0x0388 (size: 0x8)
    class UUIBlocker_C* UIBlocker_ModelView;                                          // 0x0390 (size: 0x8)
    class UUIBlocker_C* UIBlocker_MonsterDetails;                                     // 0x0398 (size: 0x8)
    class UImage* ViewWindowBG;                                                       // 0x03A0 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_139;                                        // 0x03A8 (size: 0x8)
    class USBButton_C* WindowOpenButton;                                              // 0x03B0 (size: 0x8)
    class USBButton_C* WindowOpenButton_2;                                            // 0x03B8 (size: 0x8)
    FSBTextTableHash SelectCategoryId;                                                // 0x03C0 (size: 0x4)
    FName SelectEnemyId;                                                              // 0x03C4 (size: 0x8)
    char padding_0[0x4];                                                              // 0x03CC (size: 0x4)
    class ASBEnemyCharacter* EnemyModel;                                              // 0x03D0 (size: 0x8)
    class ALibraryMenu_Studio_C* Studio;                                              // 0x03D8 (size: 0x8)
    bool IsUpdatedModel;                                                              // 0x03E0 (size: 0x1)
    char padding_1[0x3];                                                              // 0x03E1 (size: 0x3)
    int32 SelectedMonsterListIndex;                                                   // 0x03E4 (size: 0x4)
    int32 Count;                                                                      // 0x03E8 (size: 0x4)
    char padding_2[0x4];                                                              // 0x03EC (size: 0x4)
    TArray<FEnemyParamMasterData> List;                                               // 0x03F0 (size: 0x10)
    TArray<FName> AllActiveMonsterNameList;                                           // 0x0400 (size: 0x10)
    bool AllRead;                                                                     // 0x0410 (size: 0x1)
    char padding_3[0x7];                                                              // 0x0411 (size: 0x7)
    FLibraryMenu_Monster_CAllReadMonster AllReadMonster;                              // 0x0418 (size: 0x10)
    void AllReadMonster(int32 Index);
    TArray<int32> AppearnceIndexList;                                                 // 0x0428 (size: 0x10)
    TArray<FSBLibraryEnemyPartsBreakData> PartsBreakData;                             // 0x0438 (size: 0x10)
    int32 PartsBreakState;                                                            // 0x0448 (size: 0x4)
    char padding_4[0x4];                                                              // 0x044C (size: 0x4)
    TArray<FSBLibraryEnemyData> Enemy List;                                           // 0x0450 (size: 0x10)
    int32 SelectEnemyTypeIndex;                                                       // 0x0460 (size: 0x4)
    bool bIsAllMipLoaded;                                                             // 0x0464 (size: 0x1)
    bool bIsModelLoadedComplete;                                                      // 0x0465 (size: 0x1)
    char padding_5[0x2];                                                              // 0x0466 (size: 0x2)
    float AllLoadedMipWaitTimeout;                                                    // 0x0468 (size: 0x4)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void ChangeDetailEnemyId(FName EnemyId);
    void UpdateCategoryListMark();
    void BossFlagCheck(FName EnemyId, bool& Boss, bool& Unique);
    void ModelPartsChange();
    void UpdateSearchVisibility(FText SearchWord);
    void OnAppearanceListClick(int32 listIndex);
    void CreateAppearanceList();
    void SaveEnemyReadId(FName EnemyId, bool& SaveAdd);
    void IsReadCategory(FSBTextTableHash ID, FSBTextTableHash RaceId, FSBTextTableHash& readId, bool& IsRead);
    bool IsAllRead();
    void CreateCategoryList();
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void InitializeCaptureStudio();
    void OnModelLoadComplete();
    void FinalizeCaptureStudio();
    void SetModelControllEnabled(bool enable);
    void SetModelVisibility(bool Visible);
    void ModelLoadRequest(FString EnemyCharacterId, ESBLibraryEnemyViewSetting ViewSetting, ESBLibraryEnemyWeaponSetting WeaponSetting);
    void BndEvt__LibraryMenu_Monster_ModelChangeButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void OnModelLoadedAllMipFunc();
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void UpdateEnemyModel();
    void ImageVisibleEvent();
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_19_OnTextChange__DelegateSignature(FText NewParam);
    void Destruct();
    void BndEvt__LibraryMenu_Monster_WindowOpenButton_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void Esc_ModelView();
    void BndEvt__LibraryMenu_Monster_ButtonFullScreen_ModelView_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void Close_ModelView();
    void OnClosePopup();
    void BndEvt__LibraryMenu_Monster_ButtonFullScreen_MonsterDetails_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void PressedAreaList();
    void UnBindArealistBtn();
    void OnEnemyDataLoaded(bool Result);
    void AreaListVisibleChange(bool Visible);
    void BndEvt__LibraryMenu_Monster_CmnBack01_K2Node_ComponentBoundEvent_4_EventClicked__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_CategoryList_Type1_K2Node_ComponentBoundEvent_2_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void BndEvt__LibraryMenu_Monster_ModelChangeButton_K2Node_ComponentBoundEvent_5_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_ModelChangeButton_K2Node_ComponentBoundEvent_6_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_WindowOpenButton_2_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void AreaListSelect(int32 Index, FName EnemyId);
    void ExecuteUbergraph_LibraryMenu_Monster(int32 EntryPoint);
    void AllReadMonster__DelegateSignature(int32 Index);
}; // Size: 0x46C

#endif
