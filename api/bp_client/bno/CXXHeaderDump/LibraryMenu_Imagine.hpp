#ifndef UE4SS_SDK_LibraryMenu_Imagine_HPP
#define UE4SS_SDK_LibraryMenu_Imagine_HPP

class ULibraryMenu_Imagine_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreenForFilterSelector;                          // 0x02B0 (size: 0x8)
    class UCategoryList_Type1_C* CategoryList_Type1;                                  // 0x02B8 (size: 0x8)
    class UFilterSelector_C* FilterSelector;                                          // 0x02C0 (size: 0x8)
    class USBButton_C* FilterSelectorBtn;                                             // 0x02C8 (size: 0x8)
    class ULibraryMenu_ImagineDetails_C* LibraryMenu_ImagineDetails;                  // 0x02D0 (size: 0x8)
    class ULibraryMenu_List_C* LibraryMenu_List;                                      // 0x02D8 (size: 0x8)
    class ULibraryMenu_Search_C* LibraryMenu_Search;                                  // 0x02E0 (size: 0x8)
    class UOverlay* ListSelectTextOverlay;                                            // 0x02E8 (size: 0x8)
    class UCanvasPanel* MoveAnim_1;                                                   // 0x02F0 (size: 0x8)
    class USBButton_C* SBButton_C;                                                    // 0x02F8 (size: 0x8)
    class USBButton_C* SBButton_C_356;                                                // 0x0300 (size: 0x8)
    class USBRichTextBlock* SBRichTextBlock_142;                                      // 0x0308 (size: 0x8)
    class UWidgetSwitcher* Switch_Details;                                            // 0x0310 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0318 (size: 0x8)
    class UUMG_DetailsImagineBattleZoomIn_C* UMG_DetailsImagineBattleZoomIn;          // 0x0320 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_Mark;                                       // 0x0328 (size: 0x8)
    class USBCharactersLogComponent* LogComponent;                                    // 0x0330 (size: 0x8)
    int32 SelectedItemListIndex;                                                      // 0x0338 (size: 0x4)
    int32 SelectCategoryId;                                                           // 0x033C (size: 0x4)
    int32 SelectCategoryListIndex;                                                    // 0x0340 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0344 (size: 0x4)
    TArray<FSBMasterImagine> List;                                                    // 0x0348 (size: 0x10)
    TArray<int32> CategoryIdList;                                                     // 0x0358 (size: 0x10)
    TArray<FSBMasterImagine> ImagineList;                                             // 0x0368 (size: 0x10)
    bool IsSecret;                                                                    // 0x0378 (size: 0x1)
    bool IsDbg;                                                                       // 0x0379 (size: 0x1)
    char padding_1[0x2];                                                              // 0x037A (size: 0x2)
    int32 SelectImagineId;                                                            // 0x037C (size: 0x4)
    TArray<bool> ReadList;                                                            // 0x0380 (size: 0x10)
    ELibraryImagineType ImagineType;                                                  // 0x0390 (size: 0x1)
    char padding_2[0x7];                                                              // 0x0391 (size: 0x7)
    TArray<FName> BattleImajineCategoryList;                                          // 0x0398 (size: 0x10)
    FLibraryMenu_Imagine_CAllReadImagine AllReadImagine;                              // 0x03A8 (size: 0x10)
    void AllReadImagine(int32 Index);
    FSBImagineInfo SummonedInfo;                                                      // 0x03B8 (size: 0x48)
    bool IsFilterHyoui;                                                               // 0x0400 (size: 0x1)
    bool IsDbg_2;                                                                     // 0x0401 (size: 0x1)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void UpdateFilter(TArray<FFilterGroup>& Filter);
    void UpdateCategoryNewIcon(int32 InListIndex, bool IsCheckAllRead);
    void IsSecretItem(int32 ImagineId, bool& Result);
    void CreateImagineList();
    void CreateCategoryList();
    void OnClickImagineEvent(int32 listIndex);
    void BndEvt__LibraryMenu_Search_K2Node_ComponentBoundEvent_13_OnTextChange__DelegateSignature(FText NewParam);
    void BndEvt__LibraryMenu_Weapon_CategoryList_Type1_K2Node_ComponentBoundEvent_0_CategoryChanged__DelegateSignature(int32 ItemIndex);
    void BndEvt__LibraryMenu_Weapon_UMG_DetailsImagineBattleZoomIn_K2Node_ComponentBoundEvent_1_OnClickZoomOut__DelegateSignature();
    void Construct();
    void ResetMouseCursorTypeToDefaultRequest();
    void BndEvt__LibraryMenu_Weapon_SBButton_C_356_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void BndEvt__LibraryMenu_Imagine_LibraryMenu_ImagineDetails_K2Node_ComponentBoundEvent_11_OnRecipeTabRead__DelegateSignature();
    void BndEvt__LibraryMenu_Imagine_LibraryMenu_ImagineDetails_K2Node_ComponentBoundEvent_12_OnClickZoomIn__DelegateSignature();
    void OnRMShopClosed();
    void OnParentTerm();
    void BndEvt__LibraryMenu_Imagine_FilterSelectorBtn_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Imagine_FilterSelector_K2Node_ComponentBoundEvent_4_OnFilterApply__DelegateSignature(TArray<FFilterGroup>& Filters);
    void BndEvt__LibraryMenu_Imagine_FilterSelector_K2Node_ComponentBoundEvent_5_OnClose__DelegateSignature();
    void BndEvt__LibraryMenu_Imagine_BtnScreenForFilterSelector_K2Node_ComponentBoundEvent_6_OnButtonClickedEvent__DelegateSignature();
    void CloseFilter();
    void BndEvt__LibraryMenu_Imagine_SBButton_C_K2Node_ComponentBoundEvent_7_OnButtonClickedEvent__DelegateSignature();
    void GetIdListCallback(bool WasSuccessful, int32 RetCode, const ESBLibraryPictureBookType Type);
    void ExecuteUbergraph_LibraryMenu_Imagine(int32 EntryPoint);
    void AllReadImagine__DelegateSignature(int32 Index);
}; // Size: 0x402

#endif
