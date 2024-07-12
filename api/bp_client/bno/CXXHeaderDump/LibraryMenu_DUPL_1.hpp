#ifndef UE4SS_SDK_LibraryMenu_DUPL_1_HPP
#define UE4SS_SDK_LibraryMenu_DUPL_1_HPP

class ULibraryMenu_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimPageIn;                                               // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02C0 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02C8 (size: 0x8)
    class UCommandMenu_SubMenuLine_C* CommandMenu_SubMenuLine;                        // 0x02D0 (size: 0x8)
    class UCommandMenuBg_C* CommandMenuBg;                                            // 0x02D8 (size: 0x8)
    class UImage* LibraryMenuBg03_1;                                                  // 0x02E0 (size: 0x8)
    class UImage* LibraryMenuBg03_2;                                                  // 0x02E8 (size: 0x8)
    class UImage* LibraryMenuBg03_3;                                                  // 0x02F0 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* MenuButtonList;                          // 0x02F8 (size: 0x8)
    class UCanvasPanel* MenuCanvas;                                                   // 0x0300 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* SubButtonList;                           // 0x0308 (size: 0x8)
    class UCanvasPanel* SubMenu_Library;                                              // 0x0310 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0318 (size: 0x8)
    TEnumAsByte<ELibraryMenuType::Type> CurrMenueType;                                // 0x0320 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0321 (size: 0x7)
    class UUserWidget* CurrSelectedMenuWidget;                                        // 0x0328 (size: 0x8)
    int32 HelpId;                                                                     // 0x0330 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0334 (size: 0x4)
    TArray<bool> IsReadCategoryList;                                                  // 0x0338 (size: 0x10)
    TArray<FString> BookmarkTypeList;                                                 // 0x0348 (size: 0x10)
    TEnumAsByte<ELibraryMenuType::Type> SelectMenuType;                               // 0x0358 (size: 0x1)
    bool IsLoadAchievement;                                                           // 0x0359 (size: 0x1)
    TEnumAsByte<ELibraryMenuType::Type> SetupMenuButtonId;                            // 0x035A (size: 0x1)
    char padding_2[0x5];                                                              // 0x035B (size: 0x5)
    TArray<FName> ViewedDemoIdList;                                                   // 0x0360 (size: 0x10)
    TArray<FString> Dummy_ViewedDemoList;                                             // 0x0370 (size: 0x10)
    TMap<FString, TEnumAsByte<ELibraryMenuType::Type>> BookmarkToLibraryMenuTypeMap;  // 0x0380 (size: 0x50)
    int32 SubMenuType;                                                                // 0x03D0 (size: 0x4)
    char padding_3[0x4];                                                              // 0x03D4 (size: 0x4)
    TArray<FSBAchievementInfo> Achievement List;                                      // 0x03D8 (size: 0x10)
    bool IsLoginBonusBtnEnable;                                                       // 0x03E8 (size: 0x1)
    char padding_4[0x7];                                                              // 0x03E9 (size: 0x7)
    TArray<FName> ReadDemoIdList;                                                     // 0x03F0 (size: 0x10)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void CheckReadDemoIdList(TArray<FName>& In);
    void Setup Library Button Excrametion();
    void GetCharacterAchievementData(int32 InputPin, FSBAchievementInfo& Output);
    void SetupSelectedSubMenu(int32 Index);
    TEnumAsByte<ELibraryMenuType::Type> BookmarkTypeToMenueType(const FString& Key);
    void Set Title And Help Text Id(TEnumAsByte<ELibraryMenuType::Type> InSelectedMenuType, int32 InSubIndex);
    void RefleshNewIcon(int32 Index);
    void SetupTheaterButtonExcrametion();
    void SetupAchievementButtonExcrametion();
    void SetupMenuButtonExcrametion(int32 Selection);
    void Setup Selected Menu(TEnumAsByte<ELibraryMenuType::Type> InSelectedMenuType);
    void GetIdListCallback(bool WasSuccessful, int32 RetCode, const ESBLibraryPictureBookType Type);
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__CommandMenuCommonSubButtonList_K2Node_ComponentBoundEvent_0_OnClick__DelegateSignature(int32 ButtonId);
    void SelectTab(TEnumAsByte<ELibraryMenuType::Type> InputPin);
    void BookmarkUpdateRequest();
    void UpdateBookmarkStatusButton();
    void OnLoadAchivementDelegate_event(const bool Result, const TArray<FSBAchievementInfo>& AchievementList);
    void SetupAchievement_Event();
    void SetupTheater_Event();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void Library_SubMenu_Open();
    void BndEvt__LibraryMenu_SubButtonList_K2Node_ComponentBoundEvent_1_OnClick__DelegateSignature(int32 ButtonId);
    void ButtonRefreshAchievement();
    void OnLoadAchievementDataDelegate_Event(const bool Result, const int32 RetCode);
    void ExecuteUbergraph_LibraryMenu(int32 EntryPoint);
}; // Size: 0x400

#endif
