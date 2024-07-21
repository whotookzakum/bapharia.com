#ifndef UE4SS_SDK_WBP_InventoryStorageRowListItem_HPP
#define UE4SS_SDK_WBP_InventoryStorageRowListItem_HPP

class UWBP_InventoryStorageRowListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCommonIconSimple_C* CommonIconSimple;                                      // 0x0280 (size: 0x8)
    class UImage* Image_LimitedIcon;                                                  // 0x0288 (size: 0x8)
    class UImage* Image_LockIcon;                                                     // 0x0290 (size: 0x8)
    class UImage* Image_ShortcutIcon;                                                 // 0x0298 (size: 0x8)
    class UImage* InventoryBtn01_bg;                                                  // 0x02A0 (size: 0x8)
    class UTextBlock* ItemNameText;                                                   // 0x02A8 (size: 0x8)
    class UTextBlock* ItemNumText;                                                    // 0x02B0 (size: 0x8)
    class UTextBlock* ItemNumText_1;                                                  // 0x02B8 (size: 0x8)
    class UTextBlock* ItemNumText_2;                                                  // 0x02C0 (size: 0x8)
    class UImage* NumMax;                                                             // 0x02C8 (size: 0x8)
    class USBButton_C* SBButton_ItemName;                                             // 0x02D0 (size: 0x8)
    FWBP_InventoryStorageRowListItem_COnItemClick OnItemClick;                        // 0x02D8 (size: 0x10)
    void OnItemClick(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    EItemType ItemType;                                                               // 0x02E8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02E9 (size: 0x3)
    int32 MyItenIndex;                                                                // 0x02EC (size: 0x4)
    FInventoryData ItemData;                                                          // 0x02F0 (size: 0x98)
    FButtonStyle BaseButtonStyle;                                                     // 0x0388 (size: 0x278)
    FWBP_InventoryStorageRowListItem_COnItemClickRight OnItemClickRight;              // 0x0600 (size: 0x10)
    void OnItemClickRight(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);

    FEventReply OnPreviewMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
    void SetIconSelected(bool IsSelected);
    void SetLockIconVisibility(bool isVisibility);
    void InitializeItemData(int32 InItemIndex, int32 StorageAmount, FInventoryData InventoryData);
    void BndEvt__SBButton_ItemName_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void UpdetaLockIcon();
    void Construct();
    void ExecuteUbergraph_WBP_InventoryStorageRowListItem(int32 EntryPoint);
    void OnItemClickRight__DelegateSignature(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void OnItemClick__DelegateSignature(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
}; // Size: 0x610

#endif
