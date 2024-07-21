#ifndef UE4SS_SDK_MyCharaMenu_EffectList_HPP
#define UE4SS_SDK_MyCharaMenu_EffectList_HPP

class UMyCharaMenu_EffectList_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimSubMenuIn;                                            // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02C0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C8 (size: 0x8)
    class UBorder* BorderCtrl;                                                        // 0x02D0 (size: 0x8)
    class UCommandMenu_MenuItem3_C* BtnAbility;                                       // 0x02D8 (size: 0x8)
    class UCommandMenu_MenuItem3_C* BtnActive;                                        // 0x02E0 (size: 0x8)
    class UCommandMenu_MenuItem3_C* BtnDrink;                                         // 0x02E8 (size: 0x8)
    class UCommandMenu_MenuItem3_C* BtnPioneerAbility;                                // 0x02F0 (size: 0x8)
    class UCommandMenu_MenuItem3_C* BtnTickets;                                       // 0x02F8 (size: 0x8)
    class USBButtonFullScreen_C* ButtonFullScreen_DetailedStatus;                     // 0x0300 (size: 0x8)
    class UMyCharaMenu_DetailedStatus_C* DetailedStatus;                              // 0x0308 (size: 0x8)
    class UMyCharaMenu_EffectDetailsList_C* EffectDetailsList;                        // 0x0310 (size: 0x8)
    class UCanvasPanel* EffectGrp1;                                                   // 0x0318 (size: 0x8)
    class UMyCharaMenu_LeftSideParameters_C* LeftSideParameters;                      // 0x0320 (size: 0x8)
    class UMyCharaMenu_LvSync_C* LevelSync;                                           // 0x0328 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x0330 (size: 0x8)
    class UMyCharaMenu_Ability_C* MyCharaMenu_Ability;                                // 0x0338 (size: 0x8)
    class UMyCharaMenu_ActiveEffects_C* MyCharaMenu_ActiveEffects;                    // 0x0340 (size: 0x8)
    class UMyCharaMenu_Drink_C* MyCharaMenu_Drink;                                    // 0x0348 (size: 0x8)
    class UMyCharaMenu_Other_C* MyCharaMenu_Other;                                    // 0x0350 (size: 0x8)
    class UMyCharaMenu_PioneerAbility_C* MyCharaMenu_PioneerAbility;                  // 0x0358 (size: 0x8)
    class UMyWalletWidget_C* MyWalletWidget;                                          // 0x0360 (size: 0x8)
    class UScrollBox* SBox_Effects;                                                   // 0x0368 (size: 0x8)
    class USizeBox* SizeBoxBtnAbility;                                                // 0x0370 (size: 0x8)
    class USizeBox* SizeBoxBtnActive;                                                 // 0x0378 (size: 0x8)
    class USizeBox* SizeBoxBtnDrink;                                                  // 0x0380 (size: 0x8)
    class USizeBox* SizeBoxBtnPioneerAbility;                                         // 0x0388 (size: 0x8)
    class USizeBox* SizeBoxBtnTickets;                                                // 0x0390 (size: 0x8)
    class UCanvasPanel* SubMenuGrp;                                                   // 0x0398 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x03A0 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_Effect;                                     // 0x03A8 (size: 0x8)
    FString CurrEquipWeaponUniqueId;                                                  // 0x03B0 (size: 0x10)
    FMyCharaMenu_EffectList_COnChangeEquipWeaponProc OnChangeEquipWeaponProc;         // 0x03C0 (size: 0x10)
    void OnChangeEquipWeaponProc(bool ProcStart);
    FMyCharaMenu_EffectList_COnAnimFinishedMyCharaOut OnAnimFinishedMyCharaOut;       // 0x03D0 (size: 0x10)
    void OnAnimFinishedMyCharaOut();
    bool TickCheck;                                                                   // 0x03E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x03E1 (size: 0x7)
    FMyCharaMenu_EffectList_COnSubMenuChanged OnSubMenuChanged;                       // 0x03E8 (size: 0x10)
    void OnSubMenuChanged(int32 Index);
    FMyCharaMenu_EffectList_COnAchievementChangeButtonClicked OnAchievementChangeButtonClicked; // 0x03F8 (size: 0x10)
    void OnAchievementChangeButtonClicked(class UMyCharaMenu_AchievementList_C* InAchievementList);
    FMyCharaMenu_EffectList_COnAcquiredAchievementLoaded OnAcquiredAchievementLoaded; // 0x0408 (size: 0x10)
    void OnAcquiredAchievementLoaded(bool InResult);
    FMyCharaMenu_EffectList_COnSelectAchievementSaved OnSelectAchievementSaved;       // 0x0418 (size: 0x10)
    void OnSelectAchievementSaved(bool InResult);
    TMap<class ESBCharaEquipType, class FString> TypeString;                          // 0x0428 (size: 0x50)
    class UCommandMenu_MenuItem3_C* SelectedBtn;                                      // 0x0478 (size: 0x8)

    void Correct EquipedUIDs();
    void AnimMyCharaOut();
    void AddEffectItemToList(FText InEffectNameText);
    void SetupEffectParameters();
    void Close();
    void EscDetailedStatus();
    void ClsoeDetailedStatus();
    void BndEvt__MyCharaMenu_BasicStatus_DetailedStatusButtonFullScreen_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void Construct();
    void Init();
    void Destruct();
    void BndEvt__LeftSideParameters_K2Node_ComponentBoundEvent_3_OnDetailedStatusClicked__DelegateSignature();
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_0();
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_1();
    void BndEvt__LeftSideParameters_K2Node_ComponentBoundEvent_2_OnSaveAchievement__DelegateSignature(bool InResult);
    void BndEvt__LeftSideParameters_K2Node_ComponentBoundEvent_1_OnLoadAchievement__DelegateSignature(bool InResult);
    void BndEvt__BtnActive_K2Node_ComponentBoundEvent_5_EventClicked__DelegateSignature();
    void BndEvt__BtnAbility_K2Node_ComponentBoundEvent_6_EventClicked__DelegateSignature();
    void BndEvt__BtnDrink_K2Node_ComponentBoundEvent_7_EventClicked__DelegateSignature();
    void BndEvt__BtnTickets_K2Node_ComponentBoundEvent_8_EventClicked__DelegateSignature();
    void BndEvt__LeftSideParameters_K2Node_ComponentBoundEvent_0_OnClicked_AchievementChangeButton__DelegateSignature(class UMyCharaMenu_AchievementList_C* InAchievementListRef);
    void BndEvt__MyCharaMenu_EffectList_BtnPioneerAbility_K2Node_ComponentBoundEvent_0_EventClicked__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_EffectList(int32 EntryPoint);
    void OnSelectAchievementSaved__DelegateSignature(bool InResult);
    void OnAcquiredAchievementLoaded__DelegateSignature(bool InResult);
    void OnAchievementChangeButtonClicked__DelegateSignature(class UMyCharaMenu_AchievementList_C* InAchievementList);
    void OnSubMenuChanged__DelegateSignature(int32 Index);
    void OnAnimFinishedMyCharaOut__DelegateSignature();
    void OnChangeEquipWeaponProc__DelegateSignature(bool ProcStart);
}; // Size: 0x480

#endif
