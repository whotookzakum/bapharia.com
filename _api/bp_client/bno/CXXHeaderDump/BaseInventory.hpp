#ifndef UE4SS_SDK_BaseInventory_HPP
#define UE4SS_SDK_BaseInventory_HPP

class UBaseInventory_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_3;                                                // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_InventorySlot;                                    // 0x0290 (size: 0x8)
    class USBComboBoxCmn01_C* ComboBoxString_Filter;                                  // 0x0298 (size: 0x8)
    class USBComboBoxCmn01_C* ComboBoxString_Sort;                                    // 0x02A0 (size: 0x8)
    class UCommonPagerWidget_C* CommonPagerWidget;                                    // 0x02A8 (size: 0x8)
    class UFilterButton_C* FilterButton;                                              // 0x02B0 (size: 0x8)
    class UGridPanel* InventorySlot;                                                  // 0x02B8 (size: 0x8)
    class UWBP_InventoryStorageRowListOwner_C* InventoryStorageRowListOwner;          // 0x02C0 (size: 0x8)
    class UTextBlock* Label_Capacity;                                                 // 0x02C8 (size: 0x8)
    class UTextBlock* Label_Slash;                                                    // 0x02D0 (size: 0x8)
    class UTextBlock* Label_UseBlock;                                                 // 0x02D8 (size: 0x8)
    class UImage* LIne_Liquid;                                                        // 0x02E0 (size: 0x8)
    class UUMG_LiquidMemory_ForInventory_C* LiquidMemoryList;                         // 0x02E8 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x02F0 (size: 0x8)
    class UPlayerGaugeCommandMenu_C* PlayerGaugeCommandMenu;                          // 0x02F8 (size: 0x8)
    class UScrollBox* ScrollBox_0;                                                    // 0x0300 (size: 0x8)
    class USelectBlankText_C* SelectBlankText_131;                                    // 0x0308 (size: 0x8)
    class UWidgetSwitcher* Switch_BagStorage;                                         // 0x0310 (size: 0x8)
    class UTokenDisplay_C* TokenDisplay;                                              // 0x0318 (size: 0x8)
    class UImage* UI_InventoryIcon1;                                                  // 0x0320 (size: 0x8)
    class UImage* UI_InventoryIcon2;                                                  // 0x0328 (size: 0x8)
    class UImage* UI_InventoryIcon3;                                                  // 0x0330 (size: 0x8)
    class UImage* UI_InventoryIcon4;                                                  // 0x0338 (size: 0x8)
    FBaseInventory_COnClickedButton OnClickedButton;                                  // 0x0340 (size: 0x10)
    void OnClickedButton(TEnumAsByte<DescripionButtonType::Type> Button);
    class USBOwnItemListContainer* Inventory;                                         // 0x0350 (size: 0x8)
    TEnumAsByte<InventoryType::Type> InventoryType;                                   // 0x0358 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0359 (size: 0x7)
    FBaseInventory_COnClickedItemButton OnClickedItemButton;                          // 0x0360 (size: 0x10)
    void OnClickedItemButton(FInventoryData InventoryData);
    TArray<FInventoryData> InventoryData;                                             // 0x0370 (size: 0x10)
    class UItemIconBtn_C* SelectedItemBtn;                                            // 0x0380 (size: 0x8)
    int32 InventoryItemMax;                                                           // 0x0388 (size: 0x4)
    int32 BeforeItemLength;                                                           // 0x038C (size: 0x4)
    FBaseInventory_COnClickedItemRightButton OnClickedItemRightButton;                // 0x0390 (size: 0x10)
    void OnClickedItemRightButton(class UItemIconBtn_C* SelectButton, FInventoryData InventoryData);
    bool DoCheckSlotIconTextureLoadProgress;                                          // 0x03A0 (size: 0x1)
    char padding_1[0x7];                                                              // 0x03A1 (size: 0x7)
    FBaseInventory_COnPressItemButton OnPressItemButton;                              // 0x03A8 (size: 0x10)
    void OnPressItemButton(class UItemIconBtn_C* SelectButton, FInventoryData InventoryData);
    int32 TempSlotNum;                                                                // 0x03B8 (size: 0x4)
    char padding_2[0x4];                                                              // 0x03BC (size: 0x4)
    TArray<class UItemIconBtn_C*> TempSlotItems;                                      // 0x03C0 (size: 0x10)
    TArray<FName> FilterList_Item;                                                    // 0x03D0 (size: 0x10)
    TArray<FName> FilterList_Equipment;                                               // 0x03E0 (size: 0x10)
    FBaseInventory_COnComboChanged OnComboChanged;                                    // 0x03F0 (size: 0x10)
    void OnComboChanged();
    bool bIsRecastTime;                                                               // 0x0400 (size: 0x1)
    char padding_3[0x7];                                                              // 0x0401 (size: 0x7)
    FBaseInventory_COnRefreshRegisterRequest OnRefreshRegisterRequest;                // 0x0408 (size: 0x10)
    void OnRefreshRegisterRequest();
    FInventoryData LastSelectInventoryStorageList;                                    // 0x0418 (size: 0x98)
    bool bNowInitialize;                                                              // 0x04B0 (size: 0x1)
    char padding_4[0x7];                                                              // 0x04B1 (size: 0x7)
    TArray<FFilterGroup> Filters;                                                     // 0x04B8 (size: 0x10)
    FSBSendIdentifiedMaterialsToWarehouseData ResultData;                             // 0x04C8 (size: 0x48)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0510 (size: 0x8)
    int32 ItemNum;                                                                    // 0x0518 (size: 0x4)
    int32 ItemMaxNum;                                                                 // 0x051C (size: 0x4)
    bool InitializeNow;                                                               // 0x0520 (size: 0x1)
    char padding_5[0x3];                                                              // 0x0521 (size: 0x3)
    int32 InventoryViewSlotNum;                                                       // 0x0524 (size: 0x4)
    TMap<TEnumAsByte<InventoryType::Type>, int32> InventoryViewSlotNumBase;           // 0x0528 (size: 0x50)
    int32 ItemIconMax;                                                                // 0x0578 (size: 0x4)
    int32 PageNum;                                                                    // 0x057C (size: 0x4)

    void GetFilterType(TEnumAsByte<EItemFilterType::Type>& FilterType);
    void GetSortMode(int32& ModeNum);
    void GetSortRule(TEnumAsByte<ESBItemSortType::Type>& SortType);
    void SetSelectBlankTextOff();
    void SetSelectBlankText(TEnumAsByte<InventoryType::Type> Selection);
    void SetSelectedItemBtn(FString ItemId);
    void GetSelectItemData(FInventoryItemData& InventoryItemData);
    class UWidget* On_ComboBoxString_Filter_GenerateWidget_0(FString item);
    void IconAnimInPlay();
    void UpdateLockInventory(TArray<FSBLockItemData>& LockItems);
    void NeedItemVisible();
    void CheckSlotIconTextureLoadProgress(bool& OutIsLoadFinished);
    void FindInventoryDatafromUniqueId(FString InUniqueId, FInventoryData& OutInventoryData);
    void SetRegisterMode(bool bIsRegisterMode);
    void FindInventoryDataFromIndex(int32 ItemIndex, FInventoryData& Array Element);
    void SelectedAll(bool IsSelected);
    void AdjustItemIcons();
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void OnReflesh();
    void OnSelect(class UItemIconBtn_C* SelectItem);
    void ChangeCategory(TEnumAsByte<InventoryType::Type> Inventory);
    void OnRefleshFromRegister();
    void OnRefleshWithNoAnim();
    void Destruct();
    void UnbindDelegate();
    void BndEvt__ComboBoxString_Sort_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void BndEvt__ComboBoxString_Filter_K2Node_ComponentBoundEvent_1_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void RecastTimeIconUpdate(bool bIsRecastTime);
    void Event_PressItemEnable(class UItemIconBtn_C* Target);
    void CustomEvent_0(FInventoryData OnItemClick);
    void BndEvt__FilterButton_K2Node_ComponentBoundEvent_2_OnApplyFilter__DelegateSignature(TArray<FFilterGroup>& Filters);
    void UpdateFilterButton();
    void UpdateFilterComboBox();
    void UpdateSortComboBox();
    void BndEvt__BaseInventory_ScrollBox_0_K2Node_ComponentBoundEvent_3_OnUserScrolledEvent__DelegateSignature(float CurrentOffset);
    void InventoryScrollStart();
    void ScrollVisibleUpdate(float Offset);
    void CustomEvent_1();
    void BndEvt__BaseInventory_CommonPagerWidget_K2Node_ComponentBoundEvent_1_OnPageChange__DelegateSignature(int32 PageCurrent);
    void ExecuteUbergraph_BaseInventory(int32 EntryPoint);
    void OnRefreshRegisterRequest__DelegateSignature();
    void OnComboChanged__DelegateSignature();
    void OnPressItemButton__DelegateSignature(class UItemIconBtn_C* SelectButton, FInventoryData InventoryData);
    void OnClickedItemRightButton__DelegateSignature(class UItemIconBtn_C* SelectButton, FInventoryData InventoryData);
    void OnClickedItemButton__DelegateSignature(FInventoryData InventoryData);
    void OnClickedButton__DelegateSignature(TEnumAsByte<DescripionButtonType::Type> Button);
}; // Size: 0x580

#endif
