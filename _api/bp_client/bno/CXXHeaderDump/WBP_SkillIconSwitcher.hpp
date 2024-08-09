#ifndef UE4SS_SDK_WBP_SkillIconSwitcher_HPP
#define UE4SS_SDK_WBP_SkillIconSwitcher_HPP

class UWBP_SkillIconSwitcher_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* Alpha;                                                        // 0x0280 (size: 0x8)
    class UCanvasPanel* Base;                                                         // 0x0288 (size: 0x8)
    class UCanvasPanel* Beta;                                                         // 0x0290 (size: 0x8)
    class UCanvasPanel* Camma;                                                        // 0x0298 (size: 0x8)
    class UWidgetSwitcher* IconSwitcher;                                              // 0x02A0 (size: 0x8)
    class USBButton_C* SBButton_C_40;                                                 // 0x02A8 (size: 0x8)
    class USkillTree_SkillIconMain_C* SkillTree_SkillIconMain;                        // 0x02B0 (size: 0x8)
    class USkillTree_SkillIconPassive_C* SkillTree_SkillIconPassive;                  // 0x02B8 (size: 0x8)
    class USkillTree_SkillIconPassiveAlways_C* SkillTree_SkillIconPassiveAlways;      // 0x02C0 (size: 0x8)
    class USkillTree_SkillIconSpecial_C* SkillTree_SkillIconSpecial;                  // 0x02C8 (size: 0x8)
    class USkillTree_SkillIconSub_C* SkillTree_SkillIconSub;                          // 0x02D0 (size: 0x8)
    class USkillTree_SkillIconTactical_C* SkillTree_SkillIconTactical;                // 0x02D8 (size: 0x8)
    class USkillTree_SkillIconTacticalAbility_C* SkillTree_SkillIconTacticalAbility;  // 0x02E0 (size: 0x8)
    class UImage* Type_00;                                                            // 0x02E8 (size: 0x8)
    class UImage* Type_01;                                                            // 0x02F0 (size: 0x8)
    class UImage* Type_02;                                                            // 0x02F8 (size: 0x8)
    class UImage* Type_03;                                                            // 0x0300 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_76;                                         // 0x0308 (size: 0x8)
    int32 SkillId;                                                                    // 0x0310 (size: 0x4)
    int32 SkillLV;                                                                    // 0x0314 (size: 0x4)
    FWBP_SkillIconSwitcher_COnHovered OnHovered;                                      // 0x0318 (size: 0x10)
    void OnHovered();
    FWBP_SkillIconSwitcher_COnUnhovered OnUnhovered;                                  // 0x0328 (size: 0x10)
    void OnUnHovered();
    FWBP_SkillIconSwitcher_COnClick OnClick;                                          // 0x0338 (size: 0x10)
    void OnClick(int32 SkillId, int32 SkillLV);
    FSBSkillDataMasterData Master;                                                    // 0x0348 (size: 0x58)
    class UWBP_ToolTip_Skill_C* CachedToolTipWidget;                                  // 0x03A0 (size: 0x8)

    class UWidget* GetToolTipWidget_0();
    void Set Equipment Icon Visible(bool Visible);
    void Update();
    void Init(int32 SkillId, int32 SkillLevel, ESkillTreeAbilityType AbilityType);
    void Destruct();
    void BndEvt__WBP_SkillIconSwitcher_SBButton_C_40_K2Node_ComponentBoundEvent_18_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__WBP_SkillIconSwitcher_SBButton_C_40_K2Node_ComponentBoundEvent_19_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__WBP_SkillIconSwitcher_SBButton_C_40_K2Node_ComponentBoundEvent_20_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_WBP_SkillIconSwitcher(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 SkillId, int32 SkillLV);
    void OnUnHovered__DelegateSignature();
    void OnHovered__DelegateSignature();
}; // Size: 0x3A8

#endif
