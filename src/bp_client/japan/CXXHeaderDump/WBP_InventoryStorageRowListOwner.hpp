#ifndef UE4SS_SDK_WBP_InventoryStorageRowListOwner_HPP
#define UE4SS_SDK_WBP_InventoryStorageRowListOwner_HPP

class UWBP_InventoryStorageRowListOwner_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBComboBoxCmn01_C* ComboBoxString_Filter;                                  // 0x0280 (size: 0x8)
    class USBComboBoxCmn01_C* ComboBoxString_Sort;                                    // 0x0288 (size: 0x8)
    class UFilterButton_C* FilterButton;                                              // 0x0290 (size: 0x8)
    class UWBP_InventoryStorageRowListItem_C* InventoryStorageRowListItem;            // 0x0298 (size: 0x8)
    class UVerticalBox* ItemListSlot;                                                 // 0x02A0 (size: 0x8)
    class USBButton_C* SBButton_C_80;                                                 // 0x02A8 (size: 0x8)
    class UScrollBox* ScrollBox_0;                                                    // 0x02B0 (size: 0x8)
    class UTextBlock* TextBlock_129;                                                  // 0x02B8 (size: 0x8)
    class UImage* UI_InventoryIcon1_1;                                                // 0x02C0 (size: 0x8)
    TArray<FName> SortList;                                                           // 0x02C8 (size: 0x10)
    TArray<FName> FilterList;                                                         // 0x02D8 (size: 0x10)
    TArray<class UWBP_InventoryStorageRowListItemWrap_C*> ItemLists;                  // 0x02E8 (size: 0x10)
    TArray<FOwnItemInfo> StorageItemList;                                             // 0x02F8 (size: 0x10)
    TArray<FString> TestData;                                                         // 0x0308 (size: 0x10)
    int32 DebugCnt;                                                                   // 0x0318 (size: 0x4)
    int32 DebugAddCnt;                                                                // 0x031C (size: 0x4)
    bool DebugBlock;                                                                  // 0x0320 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0321 (size: 0x7)
    FWBP_InventoryStorageRowListOwner_COnItemClick OnItemClick;                       // 0x0328 (size: 0x10)
    void OnItemClick(FInventoryData OnItemClick);
    FInventoryItemData InventoryItemData;                                             // 0x0338 (size: 0x60)
    class UWBP_InventoryStorageRowListItem_C* LastClickItem;                          // 0x0398 (size: 0x8)
    FFilterGroup FilterGroup;                                                         // 0x03A0 (size: 0x10)
    uint8 SortType;                                                                   // 0x03B0 (size: 0x1)
    TEnumAsByte<EItemFilterType::Type> FilterType;                                    // 0x03B1 (size: 0x1)
    char padding_1[0x6];                                                              // 0x03B2 (size: 0x6)
    FWBP_InventoryStorageRowListOwner_COnItemClickRight OnItemClickRight;             // 0x03B8 (size: 0x10)
    void OnItemClickRight();
    bool bMultipleSelection;                                                          // 0x03C8 (size: 0x1)
    char padding_2[0x7];                                                              // 0x03C9 (size: 0x7)
    TArray<class UWBP_InventoryStorageRowListItem_C*> SelectListItems;                // 0x03D0 (size: 0x10)
    bool IsComboSetting;                                                              // 0x03E0 (size: 0x1)
    bool InventoryUpdate;                                                             // 0x03E1 (size: 0x1)
    char padding_3[0x6];                                                              // 0x03E2 (size: 0x6)
    TArray<FFilterGroup> Filters;                                                     // 0x03E8 (size: 0x10)

    void GetSortRule(TEnumAsByte<ESBItemSortType::Type>& SortType);
    void GetFilterType(TEnumAsByte<EItemFilterType::Type>& FilterType);
    void GetSortMode(int32& ModeNum);
    void Create List();
    void SetInventoryUpdeta();
    class UWidget* On_ComboBoxString_Sort_GenerateWidget_0(FString item);
    void RemoveSelectListItems();
    void SetScrollBoxSizeX(float SizeX);
    void Construct();
    void StorageItemGet(const TEnumAsByte<ESBItemSortType::Type> InSortType, TEnumAsByte<EItemFilterType::Type> InFilter);
    void AddStorageListItem(float CreateDelay);
    void BndEvt__SBButton_C_80_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void ResettingStorageListItem();
    void UpdetaItemList(const TEnumAsByte<ESBItemSortType::Type> InSortType, TEnumAsByte<EItemFilterType::Type> FilterType);
    void LockIconUpdate(FString UniqueId, bool bLock);
    void IconAllSelectfalse();
    void MultiStart();
    void CustomEvent_2(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void CustomEvent_3(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void InitializeComboBox();
    void BndEvt__ComboBoxString_Filter_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void BndEvt__ComboBoxString_Sort_K2Node_ComponentBoundEvent_1_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void Open();
    void Update();
    void BndEvt__WBP_InventoryStorageRowListOwner_FilterButton_K2Node_ComponentBoundEvent_3_OnApplyFilter__DelegateSignature(TArray<FFilterGroup>& Filters);
    void UpdateSortCombo();
    void UpdateFilterCombo();
    void UpdateFilterButton();
    void BndEvt__WBP_InventoryStorageRowListOwner_ScrollBox_0_K2Node_ComponentBoundEvent_4_OnUserScrolledEvent__DelegateSignature(float CurrentOffset);
    void ScrollVisibleUpdate(float Offset);
    void ExecuteUbergraph_WBP_InventoryStorageRowListOwner(int32 EntryPoint);
    void OnItemClickRight__DelegateSignature();
    void OnItemClick__DelegateSignature(FInventoryData OnItemClick);
}; // Size: 0x3F8

#endif
