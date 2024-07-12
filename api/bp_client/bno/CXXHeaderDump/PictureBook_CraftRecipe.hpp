#ifndef UE4SS_SDK_PictureBook_CraftRecipe_HPP
#define UE4SS_SDK_PictureBook_CraftRecipe_HPP

class UPictureBook_CraftRecipe_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UBackgroundBlur* BackgroundBlur;                                            // 0x0280 (size: 0x8)
    class UImage* Flame;                                                              // 0x0288 (size: 0x8)
    class UImage* Image_152;                                                          // 0x0290 (size: 0x8)
    class UImage* Image_209;                                                          // 0x0298 (size: 0x8)
    class UImage* ImageVLineWhite01;                                                  // 0x02A0 (size: 0x8)
    class UImage* ImageVLineWhite02;                                                  // 0x02A8 (size: 0x8)
    class UCanvasPanel* LimitedTime2;                                                 // 0x02B0 (size: 0x8)
    class UCanvasPanel* ListCautionWindow;                                            // 0x02B8 (size: 0x8)
    class UScrollBox* NeedItemList;                                                   // 0x02C0 (size: 0x8)
    class UPictureBook_BtnWishList_C* PictureBook_BtnWishList;                        // 0x02C8 (size: 0x8)
    class UPictureBook_CraftRecipeItem_C* PictureBook_CraftRecipeItem;                // 0x02D0 (size: 0x8)
    class UPictureBook_CraftRecipeItem_C* PictureBook_CraftRecipeItem_389;            // 0x02D8 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_Limit;                            // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_Header;                             // 0x02E8 (size: 0x8)
    class UCanvasPanel* SizeGrp;                                                      // 0x02F0 (size: 0x8)
    class USBRuntimeTextBlock* TextCaution;                                           // 0x02F8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Comment;                                           // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Comment_1;                                         // 0x0308 (size: 0x8)
    FSBWishListData WishListData;                                                     // 0x0310 (size: 0xC)
    bool IsOpenRecipe;                                                                // 0x031C (size: 0x1)
    bool IsExpired;                                                                   // 0x031D (size: 0x1)

    void SetTermId(FString TermId, bool& Result);
    void CreateImagineCraftList(int32 ImagineId, ELibraryImagineType ImagineType);
    void CreateWeaponCraftList(int32 WeaponID);
    void BndEvt__PictureBook_CraftRecipe_PictureBook_BtnWishList_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void ExecuteUbergraph_PictureBook_CraftRecipe(int32 EntryPoint);
}; // Size: 0x31E

#endif
