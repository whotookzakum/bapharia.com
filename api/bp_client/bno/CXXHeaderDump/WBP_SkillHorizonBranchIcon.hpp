#ifndef UE4SS_SDK_WBP_SkillHorizonBranchIcon_HPP
#define UE4SS_SDK_WBP_SkillHorizonBranchIcon_HPP

class UWBP_SkillHorizonBranchIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Hovered01;                                                          // 0x0280 (size: 0x8)
    class UImage* Hovered02;                                                          // 0x0288 (size: 0x8)
    class UImage* Hovered03_01;                                                       // 0x0290 (size: 0x8)
    class UImage* Hovered03_03;                                                       // 0x0298 (size: 0x8)
    class UImage* Image03_02;                                                         // 0x02A0 (size: 0x8)
    class UImage* Pressed01;                                                          // 0x02A8 (size: 0x8)
    class UImage* Pressed02;                                                          // 0x02B0 (size: 0x8)
    class UImage* Pressed03_01;                                                       // 0x02B8 (size: 0x8)
    class UImage* Pressed03_02;                                                       // 0x02C0 (size: 0x8)
    class UImage* Pressed03_03;                                                       // 0x02C8 (size: 0x8)
    class UImage* Unhover01;                                                          // 0x02D0 (size: 0x8)
    class UImage* Unhover02;                                                          // 0x02D8 (size: 0x8)
    class UImage* Unhover03_01;                                                       // 0x02E0 (size: 0x8)
    class UImage* Unhover03_02;                                                       // 0x02E8 (size: 0x8)
    class UImage* Unhover03_03;                                                       // 0x02F0 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher_1;                          // 0x02F8 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher_1_1;                        // 0x0300 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher_3_1;                        // 0x0308 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher_3_2;                        // 0x0310 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher_3_3;                        // 0x0318 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_47;                                         // 0x0320 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_HoverChangeSingle1;                         // 0x0328 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_HoverChangeSingle1_1;                       // 0x0330 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_HoverChangeSingle_3_1;                      // 0x0338 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_HoverChangeSingle_3_2;                      // 0x0340 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_HoverChangeSingle_3_3;                      // 0x0348 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_press1;                                     // 0x0350 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_press1_1;                                   // 0x0358 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_press3_1;                                   // 0x0360 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_press3_2;                                   // 0x0368 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_press3_3;                                   // 0x0370 (size: 0x8)
    TEnumAsByte<ESkillTreeIconFormation::Type> SkillTreeHorizonBranchType;            // 0x0378 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0379 (size: 0x7)
    FWBP_SkillHorizonBranchIcon_COnClick OnClick;                                     // 0x0380 (size: 0x10)
    void OnClick(int32 SkillId, int32 SkillLV);
    TArray<FCharaSkillMasteryInfo> MySkill List;                                      // 0x0390 (size: 0x10)
    TArray<class UWidgetSwitcher*> WidgetSwitcher_pressList;                          // 0x03A0 (size: 0x10)
    int32 SelectNumber;                                                               // 0x03B0 (size: 0x4)

    void PreConstruct(bool IsDesignTime);
    void SkillSetSingleUpper();
    void UpdetIcon();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_K2Node_ComponentBoundEvent_0_OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_110_K2Node_ComponentBoundEvent_1_OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_206_K2Node_ComponentBoundEvent_2_OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void SetMulti();
    void Init(const TArray<FCharaSkillMasteryInfo>& InSkillList, ESkillTreeHorizonBranchType Brunch);
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_1_K2Node_ComponentBoundEvent_3_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_1_K2Node_ComponentBoundEvent_4_OnUnhovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_1_K2Node_ComponentBoundEvent_5_OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_1_K2Node_ComponentBoundEvent_6_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_1_K2Node_ComponentBoundEvent_7_OnUnhovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_2_K2Node_ComponentBoundEvent_8_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_2_K2Node_ComponentBoundEvent_9_OnUnhovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_3_K2Node_ComponentBoundEvent_10_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_3_3_K2Node_ComponentBoundEvent_11_OnUnhovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_K2Node_ComponentBoundEvent_12_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_K2Node_ComponentBoundEvent_13_OnUnhovered__DelegateSignature();
    void BndEvt__WBP_SkillHorizonBranchIcon_WBP_SkillIconSwitcher_1_K2Node_ComponentBoundEvent_14_OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void SkillSetSingleCenter();
    void Construct();
    void SelectUpdate();
    void ExecuteUbergraph_WBP_SkillHorizonBranchIcon(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
}; // Size: 0x3B4

#endif
