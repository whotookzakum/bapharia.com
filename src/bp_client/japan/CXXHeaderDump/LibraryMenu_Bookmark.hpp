#ifndef UE4SS_SDK_LibraryMenu_Bookmark_HPP
#define UE4SS_SDK_LibraryMenu_Bookmark_HPP

class ULibraryMenu_Bookmark_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UImage* BookmarkGraffiti;                                                   // 0x02B8 (size: 0x8)
    class UImage* BookmarkLogo;                                                       // 0x02C0 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02C8 (size: 0x8)
    class ULibraryMenu_BookmarkDetails_C* LibraryMenu_BookmarkDetails;                // 0x02D0 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x02D8 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x02E0 (size: 0x8)
    class USBTextTableAsset* TextTableAsset;                                          // 0x02E8 (size: 0x8)
    class USBTextTableAsset* CategoryTextTableAsset;                                  // 0x02F0 (size: 0x8)
    int32 SelectedCategoryListIndex;                                                  // 0x02F8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02FC (size: 0x4)
    TMap<class FName, class FName> RowNameMap;                                        // 0x0300 (size: 0x50)
    int32 SelectCategoryId;                                                           // 0x0350 (size: 0x4)
    int32 SelectedListIndex;                                                          // 0x0354 (size: 0x4)
    FName NewVar_0;                                                                   // 0x0358 (size: 0x8)
    TArray<FName> DefaultOpenHelp;                                                    // 0x0360 (size: 0x10)
    FLibraryMenu_Bookmark_COnClickDetail OnClickDetail;                               // 0x0370 (size: 0x10)
    void OnClickDetail(int32 Index);
    TArray<bool> IsReadCategoryList;                                                  // 0x0380 (size: 0x10)
    bool AllRead;                                                                     // 0x0390 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0391 (size: 0x7)
    TArray<FName> AllActiveIdList;                                                    // 0x0398 (size: 0x10)
    TArray<int32> CategoryIdList;                                                     // 0x03A8 (size: 0x10)
    TMap<int32, int32> NewVar_1;                                                      // 0x03B8 (size: 0x50)
    TArray<FSBTutorialHelpData> HelpDataList;                                         // 0x0408 (size: 0x10)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    bool IsAllRead();
    void IsReadCategory(int32 ID, int32 CategoryType, int32& readId, bool& IsRead);
    void UpdateNewIcon(int32 Dimension 1);
    bool IsReadListItem(FName ItemName);
    bool IsAllReadCategory(int32 CategoryIndex);
    void CreateCategoryList();
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void Construct();
    void CreateList();
    void ClickListItem(int32 listIndex);
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_0_OnTextChange__DelegateSignature(FText NewParam);
    void BndEvt__LibraryMenu_Bookmark_CategoryList_Type1_K2Node_ComponentBoundEvent_2_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void ExecuteUbergraph_LibraryMenu_Bookmark(int32 EntryPoint);
    void OnClickDetail__DelegateSignature(int32 Index);
}; // Size: 0x418

#endif
