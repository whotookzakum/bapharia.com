#ifndef UE4SS_SDK_LibraryMenu_LoginBonus_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonus_HPP

class ULibraryMenu_LoginBonus_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimLoginBonusInfoIn;                                     // 0x02B0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x02B8 (size: 0x8)
    class ULibraryMenu_LoginBonusInfo_C* LibraryMenu_LoginBonusInfo;                  // 0x02C0 (size: 0x8)
    class ULibraryMenu_LoginBonusList_C* List;                                        // 0x02C8 (size: 0x8)
    class UUMG_DetailsImagineBattleZoomIn_C* UMG_DetailsImagineBattleZoomIn;          // 0x02D0 (size: 0x8)
    class UUMG_ProductDetail_C* UMG_ProductDetail;                                    // 0x02D8 (size: 0x8)
    TArray<FSBLoginBonusWindowData> LoginBonusData;                                   // 0x02E0 (size: 0x10)
    int32 ViewIndex;                                                                  // 0x02F0 (size: 0x4)
    bool bInitialize;                                                                 // 0x02F4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02F5 (size: 0x3)
    FLibraryMenu_LoginBonus_COnFinishDelegate OnFinishDelegate;                       // 0x02F8 (size: 0x10)
    void OnFinishDelegate();
    TArray<class UTexture2DDynamic*> BannerImageList;                                 // 0x0308 (size: 0x10)
    int32 BannerLoadCount;                                                            // 0x0318 (size: 0x4)
    char padding_1[0x4];                                                              // 0x031C (size: 0x4)
    TArray<int32> BannerImageIndex;                                                   // 0x0320 (size: 0x10)
    class UBP_SBProductItemData_C* ProductData;                                       // 0x0330 (size: 0x8)
    TArray<class UTexture2D*> TextureImageList;                                       // 0x0338 (size: 0x10)
    int32 ViewDetailIndex;                                                            // 0x0348 (size: 0x4)
    char padding_2[0x4];                                                              // 0x034C (size: 0x4)
    class UUMG_ProductDetailMenu_C* ProductDetailMenu;                                // 0x0350 (size: 0x8)

    void SetItemDetail(FSBLoginBonusWindowDayData ItemData);
    void DetailVisibility(int32 Index);
    void DetailBannerChange();
    void ItemClickChange(int32 Index);
    void SetInfomation(int32 Index);
    void OnLoaded_ED6E864F49F04294CCC4DFAE0330EDC4(class UObject* Loaded);
    void ImageLoadWork();
    void Construct();
    void Initialize(int32 DataCount);
    void LoginBonusListChange(int32 Index);
    void Finish();
    void DetailClose();
    void BannerImageLoadCompleted();
    void BndEvt__LibraryMenu_LoginBonus_UMG_ProductDetail_K2Node_ComponentBoundEvent_0_OnClickItemBoxDetail__DelegateSignature(class UBP_SBProductItemData_C* Data);
    void OnCloseDetailMenu(class UUMG_ProductDetailMenu_C* Sender);
    void BndEvt__LibraryMenu_LoginBonus_UMG_ProductDetail_K2Node_ComponentBoundEvent_1_OnClickZoomIn__DelegateSignature(TEnumAsByte<E_SBDetailsZoomIn::Type> Type);
    void BndEvt__LibraryMenu_LoginBonus_UMG_DetailsImagineBattleZoomIn_K2Node_ComponentBoundEvent_2_OnClickZoomOut__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_LoginBonus(int32 EntryPoint);
    void OnFinishDelegate__DelegateSignature();
}; // Size: 0x358

#endif
