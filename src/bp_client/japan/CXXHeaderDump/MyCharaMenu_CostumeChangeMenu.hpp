#ifndef UE4SS_SDK_MyCharaMenu_CostumeChangeMenu_HPP
#define UE4SS_SDK_MyCharaMenu_CostumeChangeMenu_HPP

class UMyCharaMenu_CostumeChangeMenu_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimIconIn;                                               // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02C0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C8 (size: 0x8)
    class UMyCharaMenu_CostumeChangeAccessoryCategoryTab_C* AccessoryCategoryTab;     // 0x02D0 (size: 0x8)
    class UImage* BgImage;                                                            // 0x02D8 (size: 0x8)
    class UImage* BgImage_1;                                                          // 0x02E0 (size: 0x8)
    class UImage* BgImage_2;                                                          // 0x02E8 (size: 0x8)
    class UCanvasPanel* Body;                                                         // 0x02F0 (size: 0x8)
    class USBButton_C* BtnFilter;                                                     // 0x02F8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreen;                                           // 0x0300 (size: 0x8)
    class UMyCharaMenu_CostumeChangeCategoryTab_C* CostumeCategoryTab;                // 0x0308 (size: 0x8)
    class UFilterSelector_C* FilterSelectorAccessory;                                 // 0x0310 (size: 0x8)
    class UFilterSelector_C* FilterSelectorCostume;                                   // 0x0318 (size: 0x8)
    class UGridPanel* GridPanel_0;                                                    // 0x0320 (size: 0x8)
    class UImage* LineImage1;                                                         // 0x0328 (size: 0x8)
    class UImage* LineImage1_1;                                                       // 0x0330 (size: 0x8)
    class UImage* LineImage1_2;                                                       // 0x0338 (size: 0x8)
    class UImage* LineImage1_3;                                                       // 0x0340 (size: 0x8)
    class UImage* LineImage1_4;                                                       // 0x0348 (size: 0x8)
    class UImage* LineImage1_5;                                                       // 0x0350 (size: 0x8)
    class UCanvasPanel* ListGrp;                                                      // 0x0358 (size: 0x8)
    class UScrollBox* ScrollBox;                                                      // 0x0360 (size: 0x8)
    class USortBox_C* SortBox;                                                        // 0x0368 (size: 0x8)
    class USBRuntimeTextBlock* TxtSelectedCostumeCategory;                            // 0x0370 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0378 (size: 0x8)
    FMyCharaMenu_CostumeChangeMenu_COnSelected OnSelected;                            // 0x0380 (size: 0x10)
    void OnSelected(FString InItemUniqueId);
    class USBOwnItemListContainer* Inventory;                                         // 0x0390 (size: 0x8)
    ESBCharaEquipType CostumeType;                                                    // 0x0398 (size: 0x1)
    ESBCharacterGender GenderType;                                                    // 0x0399 (size: 0x1)
    ESBClassType ClassType;                                                           // 0x039A (size: 0x1)
    bool bIsDetachingAfterCheckingChangeable;                                         // 0x039B (size: 0x1)
    int32 UnchangeableTextId_Condition;                                               // 0x039C (size: 0x4)
    int32 UnchangeableTextId_Target;                                                  // 0x03A0 (size: 0x4)
    TEnumAsByte<ESBItemSortType::Type> SortType;                                      // 0x03A4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x03A5 (size: 0x3)
    TArray<FFilterGroup> SortFilterForCostume;                                        // 0x03A8 (size: 0x10)
    TArray<FFilterGroup> SortFilterForAccessory;                                      // 0x03B8 (size: 0x10)
    bool bIsFilterSelectorOpen;                                                       // 0x03C8 (size: 0x1)
    TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> SelectedCostumeCategory;         // 0x03C9 (size: 0x1)
    TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> SelectedAccesoryCategory;      // 0x03CA (size: 0x1)
    TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> TempSelectedCostumeCategory;     // 0x03CB (size: 0x1)
    TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> TempSelectedAccesoryCategory;  // 0x03CC (size: 0x1)
    char padding_1[0x3];                                                              // 0x03CD (size: 0x3)
    FMyCharaMenu_CostumeChangeMenu_COnOpenEquipRingHandSelectDialog OnOpenEquipRingHandSelectDialog; // 0x03D0 (size: 0x10)
    void OnOpenEquipRingHandSelectDialog(FString InRingUniqueId);
    class UItemIconBtn_C* TempSelectedIcon;                                           // 0x03E0 (size: 0x8)
    FMyCharaMenu_CostumeChangeMenu_COnOpenUsingUnusedEquipConfirmDialog OnOpenUsingUnusedEquipConfirmDialog; // 0x03E8 (size: 0x10)
    void OnOpenUsingUnusedEquipConfirmDialog();
    FMyCharaMenu_CostumeChangeMenu_COnEndUsingUnusedEquipConfirmDialog OnEndUsingUnusedEquipConfirmDialog; // 0x03F8 (size: 0x10)
    void OnEndUsingUnusedEquipConfirmDialog();
    FCharaEquipInfo TempEquipInfo;                                                    // 0x0408 (size: 0x10)
    bool IsColoringShop;                                                              // 0x0418 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0419 (size: 0x3)
    int32 TempChildCnt;                                                               // 0x041C (size: 0x4)

    void UpdateIconSelected(FCharaEquipInfo EquipInfo);
    void SetSelectedCostumeCategoryTitleText(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory, TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void GetAccessoryCostumeTypeFromAccessoryCategory(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory, bool& IsValid, ESBCharaEquipType& OutCostumeType);
    void GetCostumeTypeFromProtectorCategory(EProtectorCategory InProtectorCategory, bool& IsValid, ESBCharaEquipType& OutCostumeType);
    void GetSelectedCostumeCategory(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type>& OutCostumeCategory);
    void SetSelectedCostumeCategory(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    void ChangeActiveWindow(bool InIsFilterSelectorWindowActive, bool InDoAnimation);
    void InitSortBox();
    void Get Filter(ESBCharaEquipType InCostumeType, TArray<FFilterGroup>& OutSortFilter);
    void GetCurrentSortType(TEnumAsByte<ESBItemSortType::Type>& OutSortType);
    void SetInventory(class USBOwnItemListContainer* InOwnItemListContainer);
    void IsCostumeTypeAccessory(ESBCharaEquipType InEquipType, bool& OutIsAccessory);
    void HideAllSlotListItem();
    void CreateInventoryItemData(FOwnItemInfo InOwnItemInfo, FInventoryItemData& OutInventoryItemData);
    void Setup List(TEnumAsByte<ESBItemSortType::Type> InSortType, ESBCharaEquipType InEquipType, ESBCharacterGender InGenderType, ESBClassType InClassType, TArray<FFilterGroup>& InSortFilters, TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory, TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void CreateEmptySlotList();
    void Close();
    void ShowUnchangeableMessageDialog(TEnumAsByte<ESBCharacterEquipsOrSkillsOrCostumesChangeableRetValues> InUnchangeableRetValue, bool InIsAccessory);
    void ShowUsingUnusedEquipConfirmDialog();
    void Construct();
    void Destruct();
    void OnSelect_CandidateItemIcon(class UItemIconBtn_C* InSelectedIcon);
    void BndEvt__BtnFilter_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__FilterSelectorCostume_K2Node_ComponentBoundEvent_4_OnFilterApply__DelegateSignature(TArray<FFilterGroup>& Filters);
    void BndEvt__FilterSelectorCostume_K2Node_ComponentBoundEvent_5_OnClose__DelegateSignature();
    void BndEvt__FilterSelectorAccessory_K2Node_ComponentBoundEvent_6_OnFilterApply__DelegateSignature(TArray<FFilterGroup>& Filters);
    void BndEvt__FilterSelectorAccessory_K2Node_ComponentBoundEvent_7_OnClose__DelegateSignature();
    void BndEvt__SortBox_K2Node_ComponentBoundEvent_8_OnSelectSortType__DelegateSignature(TEnumAsByte<ESBItemSortType::Type> SortType);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__CostumeCategoryTab_K2Node_ComponentBoundEvent_9_OnCostumeCategoryIconBtnClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    void BndEvt__BtnScreen_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnPress_Cancel();
    void BndEvt__AccessoryCategoryTab_K2Node_ComponentBoundEvent_2_OnAccessoryCategoryIconBtnClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void EndUsingUnusedEquipConfirmDialog(EYesNoDialogResult InYesNoResult);
    void ExecuteUbergraph_MyCharaMenu_CostumeChangeMenu(int32 EntryPoint);
    void OnEndUsingUnusedEquipConfirmDialog__DelegateSignature();
    void OnOpenUsingUnusedEquipConfirmDialog__DelegateSignature();
    void OnOpenEquipRingHandSelectDialog__DelegateSignature(FString InRingUniqueId);
    void OnSelected__DelegateSignature(FString InItemUniqueId);
}; // Size: 0x420

#endif
