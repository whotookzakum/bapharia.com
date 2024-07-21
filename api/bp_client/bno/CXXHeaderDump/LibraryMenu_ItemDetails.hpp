#ifndef UE4SS_SDK_LibraryMenu_ItemDetails_HPP
#define UE4SS_SDK_LibraryMenu_ItemDetails_HPP

class ULibraryMenu_ItemDetails_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimDetailsIn;                                            // 0x02B0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_FusionItemEffect1;                                // 0x02B8 (size: 0x8)
    class UCanvasPanel* CanvasPanel_FusionItemEffect2;                                // 0x02C0 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x02C8 (size: 0x8)
    class UVerticalBox* DescVB;                                                       // 0x02D0 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02D8 (size: 0x8)
    class USBButton_C* DetailTabButton;                                               // 0x02E0 (size: 0x8)
    class UVerticalBox* EffectsVB;                                                    // 0x02E8 (size: 0x8)
    class USBButton_C* FilterSelectorBtn;                                             // 0x02F0 (size: 0x8)
    class UVerticalBox* FusionItemEffectsVB;                                          // 0x02F8 (size: 0x8)
    class UHorizontalBox* HorizontalBox;                                              // 0x0300 (size: 0x8)
    class UHorizontalBox* HorizontalBox_1;                                            // 0x0308 (size: 0x8)
    class UHorizontalBox* HorizontalBox_6;                                            // 0x0310 (size: 0x8)
    class UImage* Image_116;                                                          // 0x0318 (size: 0x8)
    class UImage* Image_WishListIcon;                                                 // 0x0320 (size: 0x8)
    class UImage* Img_Item;                                                           // 0x0328 (size: 0x8)
    class UVerticalBox* ItemIntervalVB;                                               // 0x0330 (size: 0x8)
    class UVerticalBox* ItemLvVB;                                                     // 0x0338 (size: 0x8)
    class UVerticalBox* MakeList;                                                     // 0x0340 (size: 0x8)
    class USBButton_C* MakeTabButton;                                                 // 0x0348 (size: 0x8)
    class UTextBlock* Name;                                                           // 0x0350 (size: 0x8)
    class UVerticalBox* NeedSlotCountVB;                                              // 0x0358 (size: 0x8)
    class UVerticalBox* ObtainRouteVB;                                                // 0x0360 (size: 0x8)
    class UScrollBox* ScrollBox_108;                                                  // 0x0368 (size: 0x8)
    class USBComboBoxCmn01_C* Sort_ComboBox;                                          // 0x0370 (size: 0x8)
    class UWidgetSwitcher* Switch_LibraryType;                                        // 0x0378 (size: 0x8)
    class UWidgetSwitcher* Switch_MakeList;                                           // 0x0380 (size: 0x8)
    class UImage* TabIconNew;                                                         // 0x0388 (size: 0x8)
    class UTextBlock* Txt_IntervalMax;                                                // 0x0390 (size: 0x8)
    class UTextBlock* Txt_ItemLv;                                                     // 0x0398 (size: 0x8)
    class UTextBlock* Txt_NeedSlotCountValue;                                         // 0x03A0 (size: 0x8)
    class UTextBlock* TxtDesc;                                                        // 0x03A8 (size: 0x8)
    class UTextBlock* TxtDesc_1;                                                      // 0x03B0 (size: 0x8)
    class UTextBlock* TxtEffect_1;                                                    // 0x03B8 (size: 0x8)
    class UTextBlock* TxtFusionItemEffectName1;                                       // 0x03C0 (size: 0x8)
    class UTextBlock* TxtFusionItemEffectName2;                                       // 0x03C8 (size: 0x8)
    class UTextBlock* TxtFusionItemEffectValue1;                                      // 0x03D0 (size: 0x8)
    class UTextBlock* TxtFusionItemEffectValue2;                                      // 0x03D8 (size: 0x8)
    class UTextBlock* TxtObtainRoute;                                                 // 0x03E0 (size: 0x8)
    int32 ItemId;                                                                     // 0x03E8 (size: 0x4)
    int32 SelectTab;                                                                  // 0x03EC (size: 0x4)
    FItemMasterData SelectItemData;                                                   // 0x03F0 (size: 0xD0)
    FLibraryMenu_ItemDetails_COnFilterSelectorBtn OnFilterSelectorBtn;                // 0x04C0 (size: 0x10)
    void OnFilterSelectorBtn();
    TArray<FFilterGroup> FilterList;                                                  // 0x04D0 (size: 0x10)
    TEnumAsByte<EPictureBookMakeListSortType::Type> SortType;                         // 0x04E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x04E1 (size: 0x7)
    FLibraryMenu_ItemDetails_COnChangeFilter OnChangeFilter;                          // 0x04E8 (size: 0x10)
    void OnChangeFilter(TEnumAsByte<EPictureBookMakeListSortType::Type> SortType);
    bool IsDbg;                                                                       // 0x04F8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x04F9 (size: 0x7)
    TArray<int32> AddReadMakeList;                                                    // 0x0500 (size: 0x10)
    FLibraryMenu_ItemDetails_COnMakeListAllRead OnMakeListAllRead;                    // 0x0510 (size: 0x10)
    void OnMakeListAllRead();

    void CheckTerm(FString TermId, bool& Result);
    class UWidget* On Sort Combo Box Generate Widget 0(FString item);
    void Event_Wishlist();
    void UpdateMakeListNewIcon();
    void UpdateReadMakeList();
    void CheckImagineFilter(FSBMasterImagine Data, bool& Result);
    void CheckWeaponFilter(FSBWeaponMasterData Data, bool& Result);
    void CheckSortFilterType(TEnumAsByte<EPictureBookMakeListSortType::Type> SortType, bool& Result);
    void SetSortFilter(TArray<FFilterGroup>& Filter);
    void SetActiveTab(int32 Index);
    void SetMakeData();
    void SetItemData(FItemMasterData InItemMasterData);
    void SetDetailsVisibility(bool bVisible);
    void Initialize();
    void OnLoaded_809AD089417D6D92E51C08859E31E5BD(class UObject* Loaded);
    void SetItemImage(int32 InItemIndex);
    void BndEvt__LibraryMenu_ItemDetails_DetailTabButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_ItemDetails_ExplainTabButton_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void Construct();
    void PreConstruct(bool IsDesignTime);
    void BndEvt__LibraryMenu_ItemDetails_ComboBox_K2Node_ComponentBoundEvent_2_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void BndEvt__LibraryMenu_ItemDetails_FilterSelectorBtn_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void DelayUpdateMakeListNewIcon();
    void ExecuteUbergraph_LibraryMenu_ItemDetails(int32 EntryPoint);
    void OnMakeListAllRead__DelegateSignature();
    void OnChangeFilter__DelegateSignature(TEnumAsByte<EPictureBookMakeListSortType::Type> SortType);
    void OnFilterSelectorBtn__DelegateSignature();
}; // Size: 0x520

#endif
