#ifndef UE4SS_SDK_LibraryMenu_Item_HPP
#define UE4SS_SDK_LibraryMenu_Item_HPP

class ULibraryMenu_Item_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreenForFilterSelector;                          // 0x02B0 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02B8 (size: 0x8)
    class UFilterSelector_C* FilterSelector;                                          // 0x02C0 (size: 0x8)
    class ULibraryMenu_ItemDetails_C* LibraryMenu_ItemDetails;                        // 0x02C8 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x02D0 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x02D8 (size: 0x8)
    class UOverlay* ListSelectTextOverlay;                                            // 0x02E0 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x02E8 (size: 0x8)
    class USBButton_C* SBButton_C;                                                    // 0x02F0 (size: 0x8)
    class USBButton_C* SBButton_C_356;                                                // 0x02F8 (size: 0x8)
    class USBRichTextBlock* SBRichTextBlock_142;                                      // 0x0300 (size: 0x8)
    class UWidgetSwitcher* Switch_Details;                                            // 0x0308 (size: 0x8)
    class UImage* TextLine;                                                           // 0x0310 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0318 (size: 0x8)
    int32 SelectedItemListIndex;                                                      // 0x0320 (size: 0x4)
    int32 SelectCategoryId;                                                           // 0x0324 (size: 0x4)
    int32 SelectCategoryListIndex;                                                    // 0x0328 (size: 0x4)
    char padding_0[0x4];                                                              // 0x032C (size: 0x4)
    TArray<FItemMasterData> List;                                                     // 0x0330 (size: 0x10)
    int32 SelectItemIndex;                                                            // 0x0340 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0344 (size: 0x4)
    TArray<int32> CategoryItemIndexList;                                              // 0x0348 (size: 0x10)
    TArray<int32> CategoryIdList;                                                     // 0x0358 (size: 0x10)
    TArray<bool> ReadList;                                                            // 0x0368 (size: 0x10)
    FLibraryMenu_Item_CAllReadItem AllReadItem;                                       // 0x0378 (size: 0x10)
    void AllReadItem(int32 Index);
    TArray<FItemMasterData> ItemList;                                                 // 0x0388 (size: 0x10)
    bool IsCateroryAll;                                                               // 0x0398 (size: 0x1)
    bool IsSecret;                                                                    // 0x0399 (size: 0x1)
    bool IsDbg;                                                                       // 0x039A (size: 0x1)
    bool IsDbg_2;                                                                     // 0x039B (size: 0x1)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void IsSecretItem(int32 ItemId, bool& Result);
    void UpdateCategoryNewIcon(int32 InCategoryId, int32 InListIndex, bool IsCheckAllRead);
    void UpdateListItemNewIcon(const int32& ItemIndex);
    void CreateItemList();
    void CreateCategoryList();
    void ResetMouseCursorTypeToDefaultRequest();
    void Construct();
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_13_OnTextChange__DelegateSignature(FText NewParam);
    void OnClickEvent(int32 listIndex);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnRMShopClosed();
    void OnParentTerm();
    void BndEvt__LibraryMenu_Item_CategoryList_Type1_K2Node_ComponentBoundEvent_0_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void BndEvt__LibraryMenu_Item_FilterSelector_K2Node_ComponentBoundEvent_1_OnFilterApply__DelegateSignature(TArray<FFilterGroup>& Filters);
    void BndEvt__LibraryMenu_Item_FilterSelector_K2Node_ComponentBoundEvent_2_OnClose__DelegateSignature();
    void BndEvt__LibraryMenu_Item_BtnScreenForFilterSelector_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void CloseFilter();
    void BndEvt__LibraryMenu_Item_LibraryMenu_ItemDetails_K2Node_ComponentBoundEvent_4_OnFilterSelectorBtn__DelegateSignature();
    void BndEvt__LibraryMenu_Item_LibraryMenu_ItemDetails_K2Node_ComponentBoundEvent_6_OnChangeFilter__DelegateSignature(TEnumAsByte<EPictureBookMakeListSortType::Type> SortType);
    void BndEvt__LibraryMenu_Item_SBButton_C_356_K2Node_ComponentBoundEvent_5_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Item_LibraryMenu_ItemDetails_K2Node_ComponentBoundEvent_7_OnMakeListAllRead__DelegateSignature();
    void BndEvt__LibraryMenu_Item_SBButton_C_K2Node_ComponentBoundEvent_8_OnButtonClickedEvent__DelegateSignature();
    void GetIdListCallback(bool WasSuccessful, int32 RetCode, const ESBLibraryPictureBookType Type);
    void ExecuteUbergraph_LibraryMenu_Item(int32 EntryPoint);
    void AllReadItem__DelegateSignature(int32 Index);
}; // Size: 0x39C

#endif
