#ifndef UE4SS_SDK_LibraryMenu_WeaponDetails_HPP
#define UE4SS_SDK_LibraryMenu_WeaponDetails_HPP

class ULibraryMenu_WeaponDetails_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimDetailsIn;                                            // 0x02B0 (size: 0x8)
    class UAttributeIcon_C* Attribute1;                                               // 0x02B8 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x02C0 (size: 0x8)
    class UCmnOperationRotate_C* CmnOperationRotate;                                  // 0x02C8 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02D0 (size: 0x8)
    class USBButton_C* DetailTabButton;                                               // 0x02D8 (size: 0x8)
    class UImage* Img_Weapon;                                                         // 0x02E0 (size: 0x8)
    class UTextBlock* Name;                                                           // 0x02E8 (size: 0x8)
    class UPictureBook_CraftRecipe_C* PictureBook_CraftRecipe;                        // 0x02F0 (size: 0x8)
    class USBButton_C* RecipeTabButton;                                               // 0x02F8 (size: 0x8)
    class UWidgetSwitcher* Switch_LibraryType;                                        // 0x0300 (size: 0x8)
    class UImage* TabIconNew;                                                         // 0x0308 (size: 0x8)
    class UTextBlock* TextBlock_1;                                                    // 0x0310 (size: 0x8)
    class UTextBlock* TxtAttack;                                                      // 0x0318 (size: 0x8)
    class UTextBlock* TxtAttribute;                                                   // 0x0320 (size: 0x8)
    class UTextBlock* TxtCp;                                                          // 0x0328 (size: 0x8)
    class UTextBlock* TxtDesc;                                                        // 0x0330 (size: 0x8)
    class UTextBlock* TxtDesc_1;                                                      // 0x0338 (size: 0x8)
    class UTextBlock* TxtDEX;                                                         // 0x0340 (size: 0x8)
    class UTextBlock* TxtINT;                                                         // 0x0348 (size: 0x8)
    class UTextBlock* TxtLv;                                                          // 0x0350 (size: 0x8)
    class UTextBlock* TxtLvMax;                                                       // 0x0358 (size: 0x8)
    class UTextBlock* TxtMND;                                                         // 0x0360 (size: 0x8)
    class UTextBlock* TxtSTR;                                                         // 0x0368 (size: 0x8)
    class UTextBlock* TxtVIT;                                                         // 0x0370 (size: 0x8)
    class UImage* VLineImage;                                                         // 0x0378 (size: 0x8)
    class USBButton_C* WindowOpenButton;                                              // 0x0380 (size: 0x8)
    int32 SelectTab;                                                                  // 0x0388 (size: 0x4)
    char padding_0[0x4];                                                              // 0x038C (size: 0x4)
    FSBWeaponMasterData SelectWeaponData;                                             // 0x0390 (size: 0xB0)
    bool IsDbg;                                                                       // 0x0440 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0441 (size: 0x7)
    FLibraryMenu_WeaponDetails_COnRecipeTabRead OnRecipeTabRead;                      // 0x0448 (size: 0x10)
    void OnRecipeTabRead();
    class ABP_WeaponForCapture_Studio_C* WeaponModelStudio;                           // 0x0458 (size: 0x8)
    FLibraryMenu_WeaponDetails_COnClickZoomIn OnClickZoomIn;                          // 0x0460 (size: 0x10)
    void OnClickZoomIn();

    void UpdateReadRecipeTab();
    void SetActiveTab(int32 Index);
    void SetWeaponData(FSBWeaponMasterData InWeaponMasterData);
    void SetDetailsVisibility(bool bVisible);
    void BndEvt__LibraryMenu_ItemDetails_DetailTabButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_ItemDetails_ExplainTabButton_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void Construct();
    void Destruct();
    void BndEvt__LibraryMenu_WeaponDetails_WindowOpenButton_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void OnWeaponLoaded_Event();
    void ExecuteUbergraph_LibraryMenu_WeaponDetails(int32 EntryPoint);
    void OnClickZoomIn__DelegateSignature();
    void OnRecipeTabRead__DelegateSignature();
}; // Size: 0x470

#endif
