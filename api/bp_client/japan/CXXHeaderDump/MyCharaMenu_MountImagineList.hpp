#ifndef UE4SS_SDK_MyCharaMenu_MountImagineList_HPP
#define UE4SS_SDK_MyCharaMenu_MountImagineList_HPP

class UMyCharaMenu_MountImagineList_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UCmnBtn16_C* BtnChange;                                                     // 0x02C8 (size: 0x8)
    class UCmnBtn16_C* BtnRemove;                                                     // 0x02D0 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreen;                                           // 0x02D8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreenForFilterSelector;                          // 0x02E0 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x02E8 (size: 0x8)
    class UFilterSelector_C* FilterSelector;                                          // 0x02F0 (size: 0x8)
    class USBButton_C* FilterSelectorBtn;                                             // 0x02F8 (size: 0x8)
    class UGridPanel* GridPanel_ImagineIcon;                                          // 0x0300 (size: 0x8)
    class UCanvasPanel* ImagineListGrp;                                               // 0x0308 (size: 0x8)
    class USortBox_C* SortBox;                                                        // 0x0310 (size: 0x8)
    class UWidgetSwitcher* SwitchArrow;                                               // 0x0318 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0320 (size: 0x8)
    FMyCharaMenu_MountImagineList_CMountImagineChangeClicked MountImagineChangeClicked; // 0x0328 (size: 0x10)
    void MountImagineChangeClicked(FString InUEquipniqueId);
    int32 CandidateItemCnt;                                                           // 0x0338 (size: 0x4)
    char padding_0[0x4];                                                              // 0x033C (size: 0x4)
    class USBOwnItemListContainer* Inventory;                                         // 0x0340 (size: 0x8)
    class UItemIconBtn_C* SelectedItemBtn;                                            // 0x0348 (size: 0x8)
    FString Equipped_ImagineUniqueId;                                                 // 0x0350 (size: 0x10)
    FMyCharaMenu_MountImagineList_CMountImagineChangeRequest MountImagineChangeRequest; // 0x0360 (size: 0x10)
    void MountImagineChangeRequest(FString UniqueId);
    FMyCharaMenu_MountImagineList_COnHideWindow OnHideWindow;                         // 0x0370 (size: 0x10)
    void OnHideWindow();
    FMyCharaMenu_MountImagineList_COnHideFinished OnHideFinished;                     // 0x0380 (size: 0x10)
    void OnHideFinished(bool IsChangeRequest);
    bool bIsChangeRequested;                                                          // 0x0390 (size: 0x1)
    TEnumAsByte<ESBItemSortType::Type> SortType;                                      // 0x0391 (size: 0x1)
    bool bIsFilterSelectorOpened;                                                     // 0x0392 (size: 0x1)
    char padding_1[0x5];                                                              // 0x0393 (size: 0x5)
    TArray<FFilterGroup> SortFilters;                                                 // 0x0398 (size: 0x10)
    FMyCharaMenu_MountImagineList_COnMountImagineSelectReleased OnMountImagineSelectReleased; // 0x03A8 (size: 0x10)
    void OnMountImagineSelectReleased();
    FString SelectedImagineUniqueId;                                                  // 0x03B8 (size: 0x10)
    bool bIsImagineSelectReleased;                                                    // 0x03C8 (size: 0x1)
    TEnumAsByte<ESBItemSortType::Type> DefaultSortType;                               // 0x03C9 (size: 0x1)

    void ClearSlotList();
    void PlayFilterSelectorAnimInOrOut(bool InPlayAnimIn);
    void ChangeActiveWindow(bool InIsFilterSelectorWindowActive, bool InDoAnimation);
    void HideAllSlotListItem();
    void SortList(class USBOwnItemListContainer* InOwnItemListContainer, TEnumAsByte<ESBItemSortType::Type> InSortType, TArray<FFilterGroup>& InSortFilters, int32& OutCandidateItemCnt);
    void InitSortBox();
    void ChangeEquip(bool IsEquip);
    void IsChangeEquip(TEnumAsByte<ESBCharacterEquipsOrSkillsOrCostumesChangeableRetValues>& Result);
    void IsCloseAnimePlaying(bool& IsPlaying);
    void ChangeMountImagine(bool IsEquip, bool InIgnoreUnsusedEquipConfirm);
    void Update_ChangeBtn(FString InUniqueId);
    void Update_RemoveBtn(FString InUniqueId);
    void CreateInventoryData(FOwnItemInfo InItemInfo, FInventoryData& OutInventryData, bool& OutIsAdd);
    void SetItemIconBtn(FInventoryData InInventoryData, int32 InSlotItemId, bool& OutIsIconSet);
    void IsAddMountImagine(FInventoryData InInventoryData, bool& IsAdd);
    void CreateItemList(class USBOwnItemListContainer* InInventory, TEnumAsByte<ESBItemSortType::Type> InSortType, TArray<FFilterGroup>& InSortFilters);
    void SelectAll(bool InIsSelected, bool InDoToAllCreatedItems);
    void CreateSlotList();
    void HideWindow();
    void ShowWindow(FString InUniqueId);
    void ShowImagineUnchangeableMessageDialog(TEnumAsByte<ESBCharacterEquipsOrSkillsOrCostumesChangeableRetValues> InUnchangeableRetValue);
    void ShowUsingUnusedEquipConfirmDialog();
    void Construct();
    void BndEvt__BtnChange_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_0();
    void BndEvt__BtnScreen_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnSelect_ItemIcon(class UItemIconBtn_C* SelectIcon);
    void BndEvt__BtnRemove_K2Node_ComponentBoundEvent_3_EventOnClicked__DelegateSignature();
    void OnPress_Cancel();
    void BndEvt__SortBox_K2Node_ComponentBoundEvent_4_OnSelectSortType__DelegateSignature(TEnumAsByte<ESBItemSortType::Type> SortType);
    void EndUsingUnusedEquipConfirmDialog(EYesNoDialogResult InYesNoResult);
    void BndEvt__MyCharaMenu_MountImagineList_CmnClose02_K2Node_ComponentBoundEvent_8_OnClosed__DelegateSignature();
    void BndEvt__MyCharaMenu_MountImagineList_FilterSelectorBtn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__MyCharaMenu_MountImagineList_FilterSelector_K2Node_ComponentBoundEvent_5_OnFilterApply__DelegateSignature(TArray<FFilterGroup>& Filters);
    void BndEvt__MyCharaMenu_MountImagineList_FilterSelector_K2Node_ComponentBoundEvent_6_OnClose__DelegateSignature();
    void BndEvt__MyCharaMenu_MountImagineList_BtnScreenForFilterSelector_K2Node_ComponentBoundEvent_7_OnButtonClickedEvent__DelegateSignature();
    void Destruct();
    void ExecuteUbergraph_MyCharaMenu_MountImagineList(int32 EntryPoint);
    void OnMountImagineSelectReleased__DelegateSignature();
    void OnHideFinished__DelegateSignature(bool IsChangeRequest);
    void OnHideWindow__DelegateSignature();
    void MountImagineChangeRequest__DelegateSignature(FString UniqueId);
    void MountImagineChangeClicked__DelegateSignature(FString InUEquipniqueId);
}; // Size: 0x3CA

#endif
