#ifndef UE4SS_SDK_LibraryMenu_Theater_HPP
#define UE4SS_SDK_LibraryMenu_Theater_HPP

class ULibraryMenu_Theater_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class ULibraryMenuBtn3_C* BtnPlay;                                                // 0x02B0 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02B8 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x02C0 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x02C8 (size: 0x8)
    class ULibraryMenu_TheaterDetails_C* LibraryMenu_TheaterDetails;                  // 0x02D0 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x02D8 (size: 0x8)
    class UImage* TheateGraffiti;                                                     // 0x02E0 (size: 0x8)
    class UImage* TheateLogo;                                                         // 0x02E8 (size: 0x8)
    int32 CategoryListMax;                                                            // 0x02F0 (size: 0x4)
    int32 SelectedItemListIndex;                                                      // 0x02F4 (size: 0x4)
    int32 SelectCategoryId;                                                           // 0x02F8 (size: 0x4)
    int32 SelectCategoryListId;                                                       // 0x02FC (size: 0x4)
    int32 DemoChapter;                                                                // 0x0300 (size: 0x4)
    ESBDemoType DemoType;                                                             // 0x0304 (size: 0x1)
    bool IsCty;                                                                       // 0x0305 (size: 0x1)
    bool UseCurrentMap;                                                               // 0x0306 (size: 0x1)
    char padding_0[0x1];                                                              // 0x0307 (size: 0x1)
    FString CurrentMapName;                                                           // 0x0308 (size: 0x10)
    TArray<FName> ViewedDemoList;                                                     // 0x0318 (size: 0x10)
    TArray<FSBTheaterData> DemoList;                                                  // 0x0328 (size: 0x10)
    TArray<FName> DemoAllList;                                                        // 0x0338 (size: 0x10)
    class USBCommandMenu* CommandMenu;                                                // 0x0348 (size: 0x8)
    class USBTheaterComponent* TheaterComponent;                                      // 0x0350 (size: 0x8)
    class ASBPlayerController* PlayerController;                                      // 0x0358 (size: 0x8)
    bool IsCreatedAllList;                                                            // 0x0360 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0361 (size: 0x7)
    TArray<FName> Dummy_nllptr;                                                       // 0x0368 (size: 0x10)
    TArray<FString> Dummy_ViewedDemoList;                                             // 0x0378 (size: 0x10)
    TMap<int32, int32> CategoryListMap;                                               // 0x0388 (size: 0x50)
    TArray<int32> CategoryList;                                                       // 0x03D8 (size: 0x10)
    FLibraryMenu_Theater_CUpdateNewIcon UpdateNewIcon;                                // 0x03E8 (size: 0x10)
    void UpdateNewIcon(int32 Index);
    bool IsNotViewdDemoList;                                                          // 0x03F8 (size: 0x1)
    char padding_2[0x7];                                                              // 0x03F9 (size: 0x7)
    class UUIBlocker_C* AllBlocker;                                                   // 0x0400 (size: 0x8)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void Check Read Demo Id List(TArray<FName>& In);
    void InitExclamationIcon();
    void ExtractCategory(FName Category, int32 ID, bool& Ret);
    void IsReadAllCategory();
    void IsReadCategory(int32 CategoryId);
    void AddDemoAllList(FName DemoName);
    void CheckViewedDemoId(FName DemoId, bool& IsOk);
    void Load Lib Save Data(class USBLibrarySaveManager*& LibSaveData);
    void SaveLibSaveData();
    void CreteGameContentId(FName LevelName, FName& GameContentId);
    void CreateItemDetail(int32 Index);
    void CreateItemList();
    void CheckLevelName(FName Name, bool IsScript, bool& IsDemo);
    void GetDemoTypeName(ESBDemoType Type);
    void CreateCategoryList();
    void OnLoaded_56ABDCA943F8CB39C0C21897E8372530(class UObject* Loaded);
    void ResetMouseCursorTypeToDefaultRequest();
    void Construct();
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_13_OnTextChange__DelegateSignature(FText NewParam);
    void OnClickEvent(int32 listIndex);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnRMShopClosed();
    void OnParentTerm();
    void Destruct();
    void OnEndDialog(const EYesNoDialogResult Result);
    void Initialize();
    void LoadThumbnail(TSoftObjectPtr<UTexture2D> Thumbail);
    void Request_SaveDemo(FName DemoId);
    void SaveTheaterSelectedInfo(int32 CategoryId, int32 ListId, float CategoryOffset, float ListOffset);
    void BndEvt__LibraryMenu_Theater_BtnPlay_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void BndEvt__LibraryMenu_Theater_CategoryList_Type1_K2Node_ComponentBoundEvent_0_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void ReleaseUIBlocker();
    void ExecuteUbergraph_LibraryMenu_Theater(int32 EntryPoint);
    void UpdateNewIcon__DelegateSignature(int32 Index);
}; // Size: 0x408

#endif
