#ifndef UE4SS_SDK_PictureBook_CraftRecipeItem_HPP
#define UE4SS_SDK_PictureBook_CraftRecipeItem_HPP

class UPictureBook_CraftRecipeItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UItemDropInfo_C* ItemDropInfo;                                              // 0x0280 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x0288 (size: 0x8)
    class UTextBlock* ItemNum;                                                        // 0x0290 (size: 0x8)
    class UTextBlock* Num_Inventory;                                                  // 0x0298 (size: 0x8)
    class UImage* TermIcon;                                                           // 0x02A0 (size: 0x8)
    class UCanvasPanel* WidthGrp;                                                     // 0x02A8 (size: 0x8)
    FCraftNeedItems NeedItem;                                                         // 0x02B0 (size: 0x8)
    bool bIsCraftable;                                                                // 0x02B8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02B9 (size: 0x7)
    FString TermId;                                                                   // 0x02C0 (size: 0x10)
    bool IsExpired;                                                                   // 0x02D0 (size: 0x1)

    void IsCraftable(bool& Craftable);
    void getStorageItemAmount(int32 ItemIdx, int32& OutIsAmount);
    void getInventoryItemAmount(int32 ItemIdx, int32& OutIsAmount);
    void GetItemName(int32 ItemIdx, FText& OutIsItemNameText);
    void OnOwnItemChangeDelegate(const FSBChangeItemAmountParam& InParam);
    void UnbindItemChangeAmountDelegate();
    void Destruct();
    void Construct();
    void ExecuteUbergraph_PictureBook_CraftRecipeItem(int32 EntryPoint);
}; // Size: 0x2D1

#endif
