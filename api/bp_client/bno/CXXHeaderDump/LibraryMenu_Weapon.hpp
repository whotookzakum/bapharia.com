#ifndef UE4SS_SDK_LibraryMenu_Weapon_HPP
#define UE4SS_SDK_LibraryMenu_Weapon_HPP

class ULibraryMenu_Weapon_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02B0 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x02B8 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x02C0 (size: 0x8)
    class ULibraryMenu_WeaponDetails_C* LibraryMenu_WeaponDetails;                    // 0x02C8 (size: 0x8)
    class UOverlay* ListSelectTextOverlay;                                            // 0x02D0 (size: 0x8)
    class UCanvasPanel* MoveAnim_1;                                                   // 0x02D8 (size: 0x8)
    class USBButton_C* SBButton_C;                                                    // 0x02E0 (size: 0x8)
    class USBButton_C* SBButton_C_356;                                                // 0x02E8 (size: 0x8)
    class USBRichTextBlock* SBRichTextBlock_142;                                      // 0x02F0 (size: 0x8)
    class UWidgetSwitcher* Switch_Details;                                            // 0x02F8 (size: 0x8)
    class UImage* TextLine;                                                           // 0x0300 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0308 (size: 0x8)
    class UUMG_DetailsImagineBattleZoomIn_C* UMG_DetailsImagineBattleZoomIn;          // 0x0310 (size: 0x8)
    int32 SelectedItemListIndex;                                                      // 0x0318 (size: 0x4)
    int32 SelectCategoryId;                                                           // 0x031C (size: 0x4)
    int32 SelectCategoryListIndex;                                                    // 0x0320 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0324 (size: 0x4)
    TArray<FSBWeaponMasterData> List;                                                 // 0x0328 (size: 0x10)
    TArray<int32> CategoryIdList;                                                     // 0x0338 (size: 0x10)
    FLibraryMenu_Weapon_CAllReadWeapon AllReadWeapon;                                 // 0x0348 (size: 0x10)
    void AllReadWeapon(int32 Index);
    TArray<FSBWeaponMasterData> WeaponList;                                           // 0x0358 (size: 0x10)
    bool IsSecret;                                                                    // 0x0368 (size: 0x1)
    bool IsDbg;                                                                       // 0x0369 (size: 0x1)
    char padding_1[0x2];                                                              // 0x036A (size: 0x2)
    int32 SelectWeaponId;                                                             // 0x036C (size: 0x4)
    TArray<bool> ReadList;                                                            // 0x0370 (size: 0x10)
    bool IsDbg_2;                                                                     // 0x0380 (size: 0x1)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void CreateData();
    void UpdateCategoryNewIcon(int32 InCategoryId, int32 InListIndex, bool IsCheckAllRead);
    void IsSecretItem(int32 WeaponID, bool& Result);
    void CreateWeaponList();
    void CreateCategoryList();
    void BndEvt__LibraryMenu_Weapon_CategoryList_Type1_K2Node_ComponentBoundEvent_0_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void BndEvt__LibraryMenu_Weapon_UMG_DetailsImagineBattleZoomIn_K2Node_ComponentBoundEvent_1_OnClickZoomOut__DelegateSignature();
    void BndEvt__LibraryMenu_Weapon_LibraryMenu_WeaponDetails_K2Node_ComponentBoundEvent_2_OnClickZoomIn__DelegateSignature();
    void OnClickWeaponEvent(int32 listIndex);
    void BndEvt__LibraryMenu_Weapon_SBButton_C_356_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_13_OnTextChange__DelegateSignature(FText NewParam);
    void BndEvt__LibraryMenu_Weapon_LibraryMenu_WeaponDetails_K2Node_ComponentBoundEvent_4_OnRecipeTabRead__DelegateSignature();
    void Construct();
    void ResetMouseCursorTypeToDefaultRequest();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnRMShopClosed();
    void OnParentTerm();
    void BndEvt__LibraryMenu_Weapon_SBButton_C_K2Node_ComponentBoundEvent_5_OnButtonClickedEvent__DelegateSignature();
    void GetIdListCallback(bool WasSuccessful, int32 RetCode, const ESBLibraryPictureBookType Type);
    void ExecuteUbergraph_LibraryMenu_Weapon(int32 EntryPoint);
    void AllReadWeapon__DelegateSignature(int32 Index);
}; // Size: 0x381

#endif
