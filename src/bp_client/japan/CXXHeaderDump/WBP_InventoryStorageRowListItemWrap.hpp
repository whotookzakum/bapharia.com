#ifndef UE4SS_SDK_WBP_InventoryStorageRowListItemWrap_HPP
#define UE4SS_SDK_WBP_InventoryStorageRowListItemWrap_HPP

class UWBP_InventoryStorageRowListItemWrap_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_48;                                               // 0x0280 (size: 0x8)
    int32 ItemIndex;                                                                  // 0x0288 (size: 0x4)
    int32 Storage Amount;                                                             // 0x028C (size: 0x4)
    FInventoryData Inventory Data;                                                    // 0x0290 (size: 0x98)
    bool enable;                                                                      // 0x0328 (size: 0x1)
    bool bCreate;                                                                     // 0x0329 (size: 0x1)
    char padding_0[0x2];                                                              // 0x032A (size: 0x2)
    float CreateDelay;                                                                // 0x032C (size: 0x4)
    class UWBP_InventoryStorageRowListItem_C* InventoryStorageRowListItem;            // 0x0330 (size: 0x8)
    FWBP_InventoryStorageRowListItemWrap_COnItemClick OnItemClick;                    // 0x0338 (size: 0x10)
    void OnItemClick(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    FWBP_InventoryStorageRowListItemWrap_COnItemClickRight OnItemClickRight;          // 0x0348 (size: 0x10)
    void OnItemClickRight(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    bool Is Selected;                                                                 // 0x0358 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0359 (size: 0x3)
    int32 listIndex;                                                                  // 0x035C (size: 0x4)
    float BaseSize;                                                                   // 0x0360 (size: 0x4)
    float OverSize;                                                                   // 0x0364 (size: 0x4)
    float BasePos;                                                                    // 0x0368 (size: 0x4)
    bool ScrollVisible;                                                               // 0x036C (size: 0x1)

    void SetScrollVisible(float Offset);
    void Destruct();
    void InitializeItemData(int32 InItemIndex, int32 StorageAmount, FInventoryData InventoryData);
    void CreateAndInitialize();
    void CustomEvent_0(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void CustomEvent_1(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void Initialize();
    void Set Icon Selected(bool IsSelected);
    void Construct();
    void ExecuteUbergraph_WBP_InventoryStorageRowListItemWrap(int32 EntryPoint);
    void OnItemClickRight__DelegateSignature(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
    void OnItemClick__DelegateSignature(FInventoryData ItemData, class UWBP_InventoryStorageRowListItem_C* UpdetaListItem);
}; // Size: 0x36D

#endif
