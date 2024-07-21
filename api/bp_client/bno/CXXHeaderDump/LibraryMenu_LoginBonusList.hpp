#ifndef UE4SS_SDK_LibraryMenu_LoginBonusList_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonusList_HPP

class ULibraryMenu_LoginBonusList_C : public USBLoginBonusWindow
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02F8 (size: 0x8)
    class UWidgetAnimation* AnimLoginBonusListIn;                                     // 0x0300 (size: 0x8)
    class UScrollBox* BannerBox;                                                      // 0x0308 (size: 0x8)
    class USBButton_C* LeftArrow;                                                     // 0x0310 (size: 0x8)
    class UWidgetSwitcher* LeftArrowSwitcher;                                         // 0x0318 (size: 0x8)
    class ULibraryMenu_LoginBonus_BannerImage_C* LibraryMenu_LoginBonus_BannerImage;  // 0x0320 (size: 0x8)
    class ULibraryMenu_LoginBonus_BannerImage_C* LibraryMenu_LoginBonus_BannerImage_1; // 0x0328 (size: 0x8)
    class ULibraryMenu_LoginBonus_BannerImage_C* LibraryMenu_LoginBonus_BannerImage_2; // 0x0330 (size: 0x8)
    class UImage* Line;                                                               // 0x0338 (size: 0x8)
    class UImage* Line_2;                                                             // 0x0340 (size: 0x8)
    class USBButton_C* RightArrow;                                                    // 0x0348 (size: 0x8)
    class UWidgetSwitcher* RightArrowSwitcher;                                        // 0x0350 (size: 0x8)
    class USpacer* SpacerLeft;                                                        // 0x0358 (size: 0x8)
    class USpacer* SpacerRight;                                                       // 0x0360 (size: 0x8)
    class UUMG_LoginBonusList_C* UMG_LoginBonusList;                                  // 0x0368 (size: 0x8)
    bool IsInitialize;                                                                // 0x0370 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0371 (size: 0x7)
    FLibraryMenu_LoginBonusList_COnListInitComplete OnListInitComplete;               // 0x0378 (size: 0x10)
    void OnListInitComplete();
    FLibraryMenu_LoginBonusList_CListItemClick ListItemClick;                         // 0x0388 (size: 0x10)
    void ListItemClick(int32 Index);
    TArray<class ULibraryMenu_LoginBonusListLine_C*> LineWidget;                      // 0x0398 (size: 0x10)
    TArray<class ULibraryMenu_LoginBonus_BannerImage_C*> BannerDataList;              // 0x03A8 (size: 0x10)
    int32 BannerViewIndex;                                                            // 0x03B8 (size: 0x4)
    char padding_1[0x4];                                                              // 0x03BC (size: 0x4)
    FLibraryMenu_LoginBonusList_CBannerClick BannerClick;                             // 0x03C0 (size: 0x10)
    void BannerClick(int32 ID);
    class ULibraryMenu_LoginBonus_BannerImage_C* LastSelectedBunner;                  // 0x03D0 (size: 0x8)

    void Play Anim Login Bonus List In();
    void UpdateBannerViewIndex();
    void SetBannerTexture(int32 Index, class UTexture2D* Texture);
    void SetBannerViewIndex(int32 ViewIndex);
    void SetBannerData(TArray<FSBLoginBonusWindowData>& DataList);
    void SetBannerImage(int32 Index, class UTexture2DDynamic* TextureData);
    void SetupMouseClickEvent();
    void SetData(FSBLoginBonusWindowData DataList, bool MouseClick);
    void Initialize();
    void Finish();
    void OnImageLoadComplete(bool enable);
    void Construct();
    void OnListItemClick(int32 Index);
    void BndEvt__LibraryMenu_LoginBonusList_LeftArrow_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_LoginBonusList_RightArrow_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnBannerClicked(int32 ID, class ULibraryMenu_LoginBonus_BannerImage_C* SelectedBtn);
    void ExecuteUbergraph_LibraryMenu_LoginBonusList(int32 EntryPoint);
    void BannerClick__DelegateSignature(int32 ID);
    void ListItemClick__DelegateSignature(int32 Index);
    void OnListInitComplete__DelegateSignature();
}; // Size: 0x3D8

#endif
