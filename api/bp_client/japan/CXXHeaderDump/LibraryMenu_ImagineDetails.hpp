#ifndef UE4SS_SDK_LibraryMenu_ImagineDetails_HPP
#define UE4SS_SDK_LibraryMenu_ImagineDetails_HPP

class ULibraryMenu_ImagineDetails_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UAttributeIcon_C* Attribute1_1;                                             // 0x02B0 (size: 0x8)
    class USBButton_C* Button_EnhanceImagine;                                         // 0x02B8 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioCostume;                                 // 0x02C0 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioMountImagine;                            // 0x02C8 (size: 0x8)
    class UUMG_CaptureStudio_C* CaptureStudioWeapon;                                  // 0x02D0 (size: 0x8)
    class UCmnGauge1_C* CmnGauge1;                                                    // 0x02D8 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x02E0 (size: 0x8)
    class UCmnOperationRotate_C* CmnOperationRotate;                                  // 0x02E8 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02F0 (size: 0x8)
    class USBButton_C* DetailTabButton;                                               // 0x02F8 (size: 0x8)
    class UCanvasPanel* EXPGaugeSize;                                                 // 0x0300 (size: 0x8)
    class UImage* Image;                                                              // 0x0308 (size: 0x8)
    class UImage* Image_2;                                                            // 0x0310 (size: 0x8)
    class UImage* Image_3;                                                            // 0x0318 (size: 0x8)
    class UImage* Image_8;                                                            // 0x0320 (size: 0x8)
    class UImage* Image_104;                                                          // 0x0328 (size: 0x8)
    class UImage* Img_Enhance;                                                        // 0x0330 (size: 0x8)
    class UTextBlock* Name;                                                           // 0x0338 (size: 0x8)
    class UNiagaraSystemWidget* NS_BackGroundAura;                                    // 0x0340 (size: 0x8)
    class UPictureBook_CraftRecipe_C* PictureBook_CraftRecipe;                        // 0x0348 (size: 0x8)
    class USizeBox* PosIcon1;                                                         // 0x0350 (size: 0x8)
    class USizeBox* PosIcon2;                                                         // 0x0358 (size: 0x8)
    class USizeBox* PosIcon3;                                                         // 0x0360 (size: 0x8)
    class USizeBox* PosIcon4;                                                         // 0x0368 (size: 0x8)
    class USizeBox* PosIcon5;                                                         // 0x0370 (size: 0x8)
    class USBButton_C* RecipeTabButton;                                               // 0x0378 (size: 0x8)
    class UWidgetSwitcher* Switch_DetailsType;                                        // 0x0380 (size: 0x8)
    class UWidgetSwitcher* Switch_LibraryType;                                        // 0x0388 (size: 0x8)
    class UWidgetSwitcher* SwitchImageType;                                           // 0x0390 (size: 0x8)
    class UImage* TabIconNew;                                                         // 0x0398 (size: 0x8)
    class UTextBlock* TextBlock;                                                      // 0x03A0 (size: 0x8)
    class UTextBlock* TxtArtsName;                                                    // 0x03A8 (size: 0x8)
    class UTextBlock* TxtATK;                                                         // 0x03B0 (size: 0x8)
    class UTextBlock* TxtDesc;                                                        // 0x03B8 (size: 0x8)
    class UTextBlock* TxtDesc_1;                                                      // 0x03C0 (size: 0x8)
    class UTextBlock* TxtDEX;                                                         // 0x03C8 (size: 0x8)
    class UTextBlock* TxtEffectValue;                                                 // 0x03D0 (size: 0x8)
    class UTextBlock* TxtExp;                                                         // 0x03D8 (size: 0x8)
    class UHorizontalBox* TxtExpGrp;                                                  // 0x03E0 (size: 0x8)
    class UTextBlock* TxtExpTotal;                                                    // 0x03E8 (size: 0x8)
    class UTextBlock* TxtHP;                                                          // 0x03F0 (size: 0x8)
    class UTextBlock* TxtINT;                                                         // 0x03F8 (size: 0x8)
    class UTextBlock* TxtLvl;                                                         // 0x0400 (size: 0x8)
    class UTextBlock* TxtMND;                                                         // 0x0408 (size: 0x8)
    class UTextBlock* TxtSTR;                                                         // 0x0410 (size: 0x8)
    class USBRuntimeTextBlock* TxtType;                                               // 0x0418 (size: 0x8)
    class UTextBlock* TxtVIT;                                                         // 0x0420 (size: 0x8)
    class UUMG_CaptureStudio_C* UMG_CaptureStudio;                                    // 0x0428 (size: 0x8)
    class UImage* VLineImage;                                                         // 0x0430 (size: 0x8)
    class UWBP_BattleImagineSkillInfoParts_C* WBP_BattleImagineSkillInfoParts;        // 0x0438 (size: 0x8)
    class USBButton_C* WindowOpenButton;                                              // 0x0440 (size: 0x8)
    int32 SelectTab;                                                                  // 0x0448 (size: 0x4)
    char padding_0[0x4];                                                              // 0x044C (size: 0x4)
    FSBMasterImagine SelectImagineData;                                               // 0x0450 (size: 0xB0)
    bool IsDbg;                                                                       // 0x0500 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0501 (size: 0x7)
    FLibraryMenu_ImagineDetails_COnRecipeTabRead OnRecipeTabRead;                     // 0x0508 (size: 0x10)
    void OnRecipeTabRead();
    FLibraryMenu_ImagineDetails_COnClickZoomIn OnClickZoomIn;                         // 0x0518 (size: 0x10)
    void OnClickZoomIn();
    ELibraryImagineType ImagineType;                                                  // 0x0528 (size: 0x1)

    void UpdateReadRecipeTab();
    void SetActiveTab(int32 Index);
    void SetImagineData(FSBMasterImagine InImagineMasterData, ELibraryImagineType InImagineType);
    void SetDetailsVisibility(bool bVisible);
    void OnLoaded_9077E37640FA46939F1F1AB3BCBE4946(class UObject* Loaded);
    void BndEvt__LibraryMenu_ItemDetails_ExplainTabButton_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void Construct();
    void Destruct();
    void BndEvt__LibraryMenu_WeaponDetails_WindowOpenButton_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_ItemDetails_DetailTabButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void SetEnhanceImage(int32 InImagineId);
    void BndEvt__LibraryMenu_ImagineDetails_Button_EnhanceImagine_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_ImagineDetails_UMG_CaptureStudio_K2Node_ComponentBoundEvent_3_OnLoadAssetComplete__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_ImagineDetails(int32 EntryPoint);
    void OnClickZoomIn__DelegateSignature();
    void OnRecipeTabRead__DelegateSignature();
}; // Size: 0x529

#endif
