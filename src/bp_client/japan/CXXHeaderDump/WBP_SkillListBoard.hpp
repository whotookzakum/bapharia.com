#ifndef UE4SS_SDK_WBP_SkillListBoard_HPP
#define UE4SS_SDK_WBP_SkillListBoard_HPP

class UWBP_SkillListBoard_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* SkillListIn;                                              // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UImage* BG;                                                                 // 0x0290 (size: 0x8)
    class UImage* BG_1;                                                               // 0x0298 (size: 0x8)
    class UImage* BG_2;                                                               // 0x02A0 (size: 0x8)
    class UImage* BG_3;                                                               // 0x02A8 (size: 0x8)
    class UImage* BG_4;                                                               // 0x02B0 (size: 0x8)
    class UImage* Bg01;                                                               // 0x02B8 (size: 0x8)
    class UImage* Bg03;                                                               // 0x02C0 (size: 0x8)
    class UImage* BG04;                                                               // 0x02C8 (size: 0x8)
    class UImage* Line01;                                                             // 0x02D0 (size: 0x8)
    class UImage* Line02;                                                             // 0x02D8 (size: 0x8)
    class UImage* Line02_1;                                                           // 0x02E0 (size: 0x8)
    class UImage* Line02_2;                                                           // 0x02E8 (size: 0x8)
    class UImage* Line02_3;                                                           // 0x02F0 (size: 0x8)
    class UImage* Line02_4;                                                           // 0x02F8 (size: 0x8)
    class UScrollBox* ScrollBox_Base;                                                 // 0x0300 (size: 0x8)
    class UScrollBox* ScrollBox_Class;                                                // 0x0308 (size: 0x8)
    class UScrollBox* ScrollBox_Regular;                                              // 0x0310 (size: 0x8)
    class UScrollBox* ScrollBox_Tactical;                                             // 0x0318 (size: 0x8)
    class UScrollBox* ScrollBox_ULT;                                                  // 0x0320 (size: 0x8)
    class UWBP_SkillBoardTabBox_C* WBP_SkillBoardTabBox;                              // 0x0328 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem;                                    // 0x0330 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_123;                                // 0x0338 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_134;                                // 0x0340 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_345;                                // 0x0348 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_503;                                // 0x0350 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_627;                                // 0x0358 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_725;                                // 0x0360 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_791;                                // 0x0368 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_904;                                // 0x0370 (size: 0x8)
    class UWBP_SkillListItem_C* WBP_SkillListItem_1106;                               // 0x0378 (size: 0x8)
    class UWBP_SkillTreeHorizon_C* WBP_SkillTreeHorizon;                              // 0x0380 (size: 0x8)
    ESBClassType SelectClass;                                                         // 0x0388 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0389 (size: 0x7)
    class USBCommandMenu* OwnerCommandMenu;                                           // 0x0390 (size: 0x8)
    FWBP_SkillListBoard_COnSubMenuChanged OnSubMenuChanged;                           // 0x0398 (size: 0x10)
    void OnSubMenuChanged(int32 Index);

    void PassiveSkillListSetting();
    void Skill List Setting();
    void Get Now Select Class(ESBClassType& Output);
    void BoardUpdate();
    void OpenSkillTree(FSBSkillDataMasterData Skill);
    void Construct();
    void CustomEvent_0(ESBClassType Typr);
    void CustomEvent_1();
    void OnCharaSkillMasteryOthersComplete(const int32 Result);
    void Destruct();
    void ExecuteUbergraph_WBP_SkillListBoard(int32 EntryPoint);
    void OnSubMenuChanged__DelegateSignature(int32 Index);
}; // Size: 0x3A8

#endif
