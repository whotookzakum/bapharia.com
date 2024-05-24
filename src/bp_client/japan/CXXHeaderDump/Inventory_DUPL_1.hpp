#ifndef UE4SS_SDK_Inventory_DUPL_1_HPP
#define UE4SS_SDK_Inventory_DUPL_1_HPP

class UInventory_C : public USBCommandMenuChildBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UCanvasPanel* CanvasPanel;                                                  // 0x02C0 (size: 0x8)
    class UCanvasPanel* CaptureStudioCanvas;                                          // 0x02C8 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* CategoryTabButtonList;                   // 0x02D0 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x02D8 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02E0 (size: 0x8)
    class UCommandMenu_SubMenuLine_C* CommandMenu_SubMenuLine;                        // 0x02E8 (size: 0x8)
    class UCommandMenu_SubMenuLine_C* CommandMenu_SubMenuLine2;                       // 0x02F0 (size: 0x8)
    class UCommandMenuBg_C* CommandMenuBg;                                            // 0x02F8 (size: 0x8)
    class USBDateTimeTextBlock* DateTimeTextForWeaponSticker;                         // 0x0300 (size: 0x8)
    class UDescriptionWindow_C* Descriptions;                                         // 0x0308 (size: 0x8)
    class UBaseInventory_C* ItemInventory;                                            // 0x0310 (size: 0x8)
    class UCanvasPanel* SubMenuGrp;                                                   // 0x0318 (size: 0x8)
    class UCanvasPanel* SubMenuGrp2;                                                  // 0x0320 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* TabButtons;                              // 0x0328 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* TabButtons2;                             // 0x0330 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0338 (size: 0x8)
    class UUIBlocker_C* UIBlocker_Tarm;                                               // 0x0340 (size: 0x8)
    class UUIBlocker_C* UIBlocker_Under;                                              // 0x0348 (size: 0x8)
    class UUIBlocker_C* UIBlockerForSystemMessage;                                    // 0x0350 (size: 0x8)
    FInventory_COnClose OnClose;                                                      // 0x0358 (size: 0x10)
    void OnClose();
    TArray<FOwnItemInfo> OwnItemList;                                                 // 0x0368 (size: 0x10)
    TArray<FInventoryItemData> InventoryItemList;                                     // 0x0378 (size: 0x10)
    bool IsItemCommandOpen;                                                           // 0x0388 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0389 (size: 0x7)
    class UItemIconBtn_C* SelectedInventoryItem;                                      // 0x0390 (size: 0x8)
    FString SelectedItemUniqueId;                                                     // 0x0398 (size: 0x10)
    bool IsShortcutRegUIOpen;                                                         // 0x03A8 (size: 0x1)
    char padding_1[0x3];                                                              // 0x03A9 (size: 0x3)
    int32 FirstChosenShortcutIcon;                                                    // 0x03AC (size: 0x4)
    int32 DumpNum;                                                                    // 0x03B0 (size: 0x4)
    char padding_2[0x4];                                                              // 0x03B4 (size: 0x4)
    class UNumberInputDialog_C* NumberInputDialog;                                    // 0x03B8 (size: 0x8)
    class UBP_Dialog_C* YesNoDialog;                                                  // 0x03C0 (size: 0x8)
    FCharaEquipItemInfo NewCosItem;                                                   // 0x03C8 (size: 0x28)
    ESBCharaEquipType SelectedCosType;                                                // 0x03F0 (size: 0x1)
    TEnumAsByte<InventoryType::Type> CurrInventoryType;                               // 0x03F1 (size: 0x1)
    char padding_3[0x6];                                                              // 0x03F2 (size: 0x6)
    FSBLockItemData LockItemData;                                                     // 0x03F8 (size: 0x20)
    bool bIsItemLock;                                                                 // 0x0418 (size: 0x1)
    char padding_4[0x7];                                                              // 0x0419 (size: 0x7)
    class UWeaponBrakeAnim_C* WeaponBrakeAnim;                                        // 0x0420 (size: 0x8)
    class UBP_Dialog_C* BrokeDialog;                                                  // 0x0428 (size: 0x8)
    int32 add_break_base;                                                             // 0x0430 (size: 0x4)
    int32 add_break_append;                                                           // 0x0434 (size: 0x4)
    FOwnItemInfo AppendItemData;                                                      // 0x0438 (size: 0xF8)
    uint8 BrokeErrorCode;                                                             // 0x0530 (size: 0x1)
    char padding_5[0x3];                                                              // 0x0531 (size: 0x3)
    int32 ErrorTextId;                                                                // 0x0534 (size: 0x4)
    bool IsAfterTermReques;                                                           // 0x0538 (size: 0x1)
    char padding_6[0x3];                                                              // 0x0539 (size: 0x3)
    int32 HelpId;                                                                     // 0x053C (size: 0x4)
    TEnumAsByte<InventoryType::Type> ClickItemInventoryType;                          // 0x0540 (size: 0x1)
    char padding_7[0x7];                                                              // 0x0541 (size: 0x7)
    class UUIBlocker_C* UpdateModelBlocker;                                           // 0x0548 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioWeapon_N;                                // 0x0550 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioCostume_N;                               // 0x0558 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioImagine_N;                               // 0x0560 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioMountImagine_N;                          // 0x0568 (size: 0x8)
    TEnumAsByte<UseItemWindowType::Type> LastUseWindowType;                           // 0x0570 (size: 0x1)
    char padding_8[0x3];                                                              // 0x0571 (size: 0x3)
    int32 SwapValu;                                                                   // 0x0574 (size: 0x4)
    TArray<FString> BookmarkTypeList;                                                 // 0x0578 (size: 0x10)
    FInventoryItemData LastUseItemData;                                               // 0x0588 (size: 0x60)
    FInventoryItemData SelectedItemData;                                              // 0x05E8 (size: 0x60)
    EItemType TempItemType;                                                           // 0x0648 (size: 0x1)
    char padding_9[0x7];                                                              // 0x0649 (size: 0x7)
    class UAppearanceWeaponStickerWeaponSelectMenuWindow_C* WeaponStickerWeaponSelectMenuWindow; // 0x0650 (size: 0x8)
    class UAppearanceWeaponStickerRemoveWindow_C* WeaponStickerRemoveWindow;          // 0x0658 (size: 0x8)
    FAppearanceWeaponSticker UseWeaponStickerInfo;                                    // 0x0660 (size: 0x10)
    FString WeaponStickerRemoveItemUniqueId;                                          // 0x0670 (size: 0x10)
    bool IsWeaponStickerUsedWeapon;                                                   // 0x0680 (size: 0x1)
    bool IsWeaponStickerUsedToEquippedWeapon;                                         // 0x0681 (size: 0x1)
    bool IsWeaponStickerRemovedFromEquippedWeapon;                                    // 0x0682 (size: 0x1)
    char padding_10[0x1];                                                             // 0x0683 (size: 0x1)
    int32 WeaponStickerWeaponId;                                                      // 0x0684 (size: 0x4)
    FInventoryItemData TempItemDataForWeaponStickerInUseWeapon;                       // 0x0688 (size: 0x60)
    bool TempIsExpiredStickerWeapons;                                                 // 0x06E8 (size: 0x1)
    char padding_11[0x7];                                                             // 0x06E9 (size: 0x7)
    FString TempStickerUsedWeaponUniqueId;                                            // 0x06F0 (size: 0x10)
    TArray<FString> TempExpiredStickerWeaponUniqueIds;                                // 0x0700 (size: 0x10)
    FString TempWeaponStickerName;                                                    // 0x0710 (size: 0x10)
    FString TempWeaponName;                                                           // 0x0720 (size: 0x10)
    class UCommandMenuCommonSubButtonList_C* SelectedTab;                             // 0x0730 (size: 0x8)
    FTimerHandle AssetLoadTimeoutHandle;                                              // 0x0738 (size: 0x8)
    bool IsWeaponStickerInUse;                                                        // 0x0740 (size: 0x1)
    bool IsWeaponStickerIndefinite;                                                   // 0x0741 (size: 0x1)
    bool IsWeaponStickerDiscard;                                                      // 0x0742 (size: 0x1)
    char padding_12[0x5];                                                             // 0x0743 (size: 0x5)
    FSBWeaponItemData WeaponItemData;                                                 // 0x0748 (size: 0x50)
    FString WeaponStickerName;                                                        // 0x0798 (size: 0x10)
    int32 AttachedWeaponStickerId;                                                    // 0x07A8 (size: 0x4)
    char padding_13[0x4];                                                             // 0x07AC (size: 0x4)
    class UUMG_ProductDetailMenu_C* DetailViewWidget;                                 // 0x07B0 (size: 0x8)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void Update New Button();
    void Initialize Open Menu Type();
    void Create Capture Studio(TEnumAsByte<InventoryType::Type> InventoryType);
    void Enable Capture Studios(bool enable);
    void GetCostumePartsLocationFromCostumeEquipType(ESBCharaEquipType InCostumeType, bool& IsValid, ECharaPartsLocation& OutPartsLocation);
    void GetEquipItemCharaCreateInfoFromEquipItemInfo(FCharaEquipItemInfo InEquipItemInfo, ESBCharaEquipType InEquipType, bool& IsValid, FCharaEquipItemCharaCreateInfo& OutEquipItemCharaCreateInfo);
    void RefreshOnRegister();
    void FindInventoryItem(int32 ItemIndex, TArray<FInventoryItemData>& InventoryItemList, FInventoryItemData& InventoryItem);
    void SortItemList(TArray<FInventoryItemData>& ItemList);
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void OnSaveItemStorageDelegate_Event_0(const int32 InRetCode, const TArray<FOwnItemInfo>& InDirtyItems);
    void QueryTrashItem();
    void CustomEvent_0(const EYesNoDialogResult Result);
    void TrashItem();
    void OnHideDeligate(TEnumAsByte<ENumberInputDialogResult::Type> InResult, int32 InNumber);
    void CustomEvent_7(const EYesNoDialogResult Result);
    void UpdateModelStudio(FInventoryItemData InInventoryItemData);
    void AssetLoadComplete();
    void Timeout();
    void OnClickedItemButton_Event(FInventoryData InventoryData);
    void Init BaseInventories();
    void OnClickedButton_Type(TEnumAsByte<DescripionButtonType::Type> Button);
    void Item Equipment Weapon();
    void UiInputBlock(bool IsVisible);
    void OnWeaponEquipDelegate_イベント_0(int32 RetCode, const bool bInIsExpiredStickerWeapons, const TArray<FString>& InExpiredStickerWeaponUniqueIds, const FSBExpiredEquipmentData& InExpiredEquipmentData);
    void WeaponEquipmented(int32 RetCode);
    void Equipment();
    void Item Equipment Costume();
    void OnSaveEquipInfo(int32 RetCode);
    void UploadEquipment();
    void OnUploded Costume Data(bool Result);
    void OnEndRegister();
    void OnClick_MenuButton(int32 ButtonId);
    void ItemLock();
    void OnPressItemButton(class UItemIconBtn_C* SelectButton, FInventoryData InventoryData);
    void OnSaveCharaCostumeEquipDelegate_イベント(int32 RetCode, const FSBExpiredEquipmentData& InExpiredEquipmentData);
    void DestroyNewInventory();
    void BndEvt__TabButtons_K2Node_ComponentBoundEvent_0_OnClick__DelegateSignature(int32 ButtonId);
    void UpdateCommandMenuBgHelp(TEnumAsByte<InventoryType::Type> InInventoryType);
    void SetSubMenuVisiblity(class UCanvasPanel* SubMenu, class UCommandMenuCommonSubButtonList_C* Tab, bool StorageFlag, bool InventoryFlag);
    void BndEvt__TabButtons2_K2Node_ComponentBoundEvent_1_OnClick__DelegateSignature(int32 ButtonId);
    void OnSaveItemLockCompleteDelegate(const bool Result, const TArray<FSBLockItemData>& LockItemData, const int32 InRetCode);
    void UpdateSubMenuGrp(TEnumAsByte<InventoryType::Type> InputPin);
    void UseItem();
    void ItemUseAfter(const int32 InRetCode, const TArray<FOwnItemInfo>& InDirtyItems);
    void UseItem_Internal(int32 Amount);
    void UseItemAfter();
    void CustomEvent_1(TEnumAsByte<ENumberInputDialogResult::Type> NewParam, class UWBP_ItemBox_C* ItemBox);
    void IQStartCheck(bool Start);
    void NowBookmarkUpdate(TEnumAsByte<InventoryType::Type> Selection);
    void UseExp(int32 Amount);
    void CustomEvent_5(const int32 InRetCode, const FSBStorageItemBoxResultData& InItemBoxResultData);
    void UseItemBox();
    void UseWeaponSticker(FAppearanceWeaponSticker InWeaponStickerInfo, FString InWeaponStickerUniqueId);
    void OnUseWeaponStickerDecideEvent(FString InSelectedWeaponUniqueItemId);
    void OnWeaponStickerWeaponSelectWindowHideEndEvent(bool InIsHideWindowCalledByDecide);
    void BndEvt__Descriptions_K2Node_ComponentBoundEvent_0_OnWeaponStickerButtonPressed__DelegateSignature(FString InWeaponUniqueId, FSBWeaponItemData InWeaponItemData);
    void OnWeaponStickerRemoveDecideEvent(bool InIsStickerDiscardSelected);
    void OnWeaponStickerRemoveWindowHideEnd();
    void OnUseWeaponStickerDelegateEvent(const int32 InRetCode, FString InStickerUsedWeaponUniqueId, const bool InIsExpiredStickerWeapons, const TArray<FString>& InExpiredStickerWeaponUniqueIds, const TArray<FSBWeaponItemData>& InExpiredStickerWeaponItemDatas);
    void OnRemoveWeaponStickerDelegateEvent(const int32 InRetCode, FString InStickerRemovedWeaponUniqueId, const bool InIsExpiredStickerWeapons, const TArray<FString>& InExpiredStickerWeaponUniqueIds, const TArray<FSBWeaponItemData>& InExpiredStickerWeaponItemDatas);
    void BndEvt__Descriptions_K2Node_ComponentBoundEvent_3_OnWeaponStickerInUseButtonPressed__DelegateSignature(bool InIsInUse);
    void EndSystemMessage();
    void ShowExpiredWeaponStickerSystemMessage(const TArray<FString>& InExpiredStickerWeaponUniqueIds, FString InEquippedWeaponUniqueId, bool InActivateWeaponModelRotate);
    void ShowUsedWeaponStickerAndAttachedWeaponNoticeDialog(FString InStickerAttachedWeaponUniqueId);
    void CustomEvent_4(TEnumAsByte<ENumberInputDialogResult::Type> InResult, FInventoryItemData NewParam);
    void DetailView();
    void OnCloseDetailMenu(class UUMG_ProductDetailMenu_C* Sender);
    void CustomEvent_2(TEnumAsByte<ENumberInputDialogResult::Type> InResult, int32 InNumber);
    void SetLevelAfter(int32 Value, class UWBP_ExpIncrease_C* CallerDialg);
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnShortcutIconSelected(EShortcutIconType InShortcutKey);
    void Destruct();
    void ShowErrorMessageDialog(TEnumAsByte<InventoryMessageType::Type> InMessageType, int32 RetCode);
    void BookmarkUpdateRequest();
    void UpdateBookmarkStatusButton();
    void UnbindWeaponStickerEventDelegates();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void CustomEvent_3(class UObject* Sender, class UObject* Param);
    void CustomEvent_6();
    void ExecuteUbergraph_Inventory(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x7B8

#endif
