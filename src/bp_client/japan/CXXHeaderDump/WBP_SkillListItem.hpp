#ifndef UE4SS_SDK_WBP_SkillListItem_HPP
#define UE4SS_SDK_WBP_SkillListItem_HPP

class UWBP_SkillListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* Alpha;                                                        // 0x0280 (size: 0x8)
    class UCanvasPanel* Base;                                                         // 0x0288 (size: 0x8)
    class UCanvasPanel* Beta;                                                         // 0x0290 (size: 0x8)
    class UImage* BG;                                                                 // 0x0298 (size: 0x8)
    class UImage* BG_1;                                                               // 0x02A0 (size: 0x8)
    class UCanvasPanel* Camma;                                                        // 0x02A8 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Ability;                                          // 0x02B0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Type;                                             // 0x02B8 (size: 0x8)
    class UTextBlock* ClassLvText_2;                                                  // 0x02C0 (size: 0x8)
    class UImage* Image_Arrow;                                                        // 0x02C8 (size: 0x8)
    class UTextBlock* ItemNameText;                                                   // 0x02D0 (size: 0x8)
    class UTextBlock* ItemNameText_1;                                                 // 0x02D8 (size: 0x8)
    class UTextBlock* ItemNameText_2;                                                 // 0x02E0 (size: 0x8)
    class UImage* Line01;                                                             // 0x02E8 (size: 0x8)
    class USBButton_C* SBButton_C_174;                                                // 0x02F0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_248;                                // 0x02F8 (size: 0x8)
    class UTextBlock* SkillLvText_1;                                                  // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* TextLearningConditions;                                // 0x0308 (size: 0x8)
    class UImage* Type00;                                                             // 0x0310 (size: 0x8)
    class UImage* Type01;                                                             // 0x0318 (size: 0x8)
    class UImage* Type02;                                                             // 0x0320 (size: 0x8)
    class UImage* Type03;                                                             // 0x0328 (size: 0x8)
    class UWBP_SkillIconSwitcher_C* WBP_SkillIconSwitcher;                            // 0x0330 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_Bg;                                         // 0x0338 (size: 0x8)
    FSBSkillDataMasterData SBSkill Data Master Data;                                  // 0x0340 (size: 0x58)
    FSBSkillMasteryParam Mastery;                                                     // 0x0398 (size: 0x8)
    FWBP_SkillListItem_COnClick OnClick;                                              // 0x03A0 (size: 0x10)
    void OnClick(FSBSkillDataMasterData SkillId);
    int32 CurrentLV;                                                                  // 0x03B0 (size: 0x4)

    void UpdateAbility(bool& Use);
    void Init(const FSBSkillDataMasterData& SBSkillDataMasterData);
    void BndEvt__WBP_SkillListItem_SBButton_C_174_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_WBP_SkillListItem(int32 EntryPoint);
    void OnClick__DelegateSignature(FSBSkillDataMasterData SkillId);
}; // Size: 0x3B4

#endif
