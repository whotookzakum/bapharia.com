#ifndef UE4SS_SDK_PictureBook_MakeListItem_HPP
#define UE4SS_SDK_PictureBook_MakeListItem_HPP

class UPictureBook_MakeListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* BG;                                                                 // 0x0280 (size: 0x8)
    class UCommonIconSimple_C* CommonIconSimple;                                      // 0x0288 (size: 0x8)
    class UImage* IconLimit;                                                          // 0x0290 (size: 0x8)
    class UImage* IconNew;                                                            // 0x0298 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x02A0 (size: 0x8)
    class UOverlay* LackAdvRank;                                                      // 0x02A8 (size: 0x8)
    class UWidgetSwitcher* SwitchIcon;                                                // 0x02B0 (size: 0x8)
    class UWidgetSwitcher* SwitchName;                                                // 0x02B8 (size: 0x8)
    class UTextBlock* TxtAmount;                                                      // 0x02C0 (size: 0x8)
    class UTextBlock* TxtAmount_1;                                                    // 0x02C8 (size: 0x8)
    class USBRadioBtnCmn01_C* WishlistCheck_RadioBtn;                                 // 0x02D0 (size: 0x8)
    FPictureBook_MakeListItem_COnWishlist OnWishlist;                                 // 0x02D8 (size: 0x10)
    void OnWishlist();
    EItemType ItemType;                                                               // 0x02E8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02E9 (size: 0x3)
    int32 ItemIndex;                                                                  // 0x02EC (size: 0x4)
    int32 RecepiId;                                                                   // 0x02F0 (size: 0x4)
    bool IsSecret;                                                                    // 0x02F4 (size: 0x1)
    bool isLackAdvRank;                                                               // 0x02F5 (size: 0x1)

    void SetTermId(FString TermId);
    void CheckAdventurerRank(bool& Result);
    void SetWishlistBtnEnable(bool IsEnable);
    void SetNew(bool IsRead, bool& IsAddRead);
    void SetSecret(bool IsSecret);
    void SetName(FText InText);
    void BndEvt__PictureBook_MakeListItem_HudCheck_RadioBtn_K2Node_ComponentBoundEvent_0_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void Construct();
    void ExecuteUbergraph_PictureBook_MakeListItem(int32 EntryPoint);
    void OnWishlist__DelegateSignature();
}; // Size: 0x2F6

#endif
