#ifndef UE4SS_SDK_SkillTree_SkillIconTacticalAbility_HPP
#define UE4SS_SDK_SkillTree_SkillIconTacticalAbility_HPP

class USkillTree_SkillIconTacticalAbility_C : public USkillTree_SkillIconBase_C
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0388 (size: 0x8)
    class UImage* Image_EquipmentIcon2;                                               // 0x0390 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_50;                                         // 0x0398 (size: 0x8)

    void Construct();
    void SelectActiveAbility(ESkillTreeAbilityType AbilityType);
    void ExecuteUbergraph_SkillTree_SkillIconTacticalAbility(int32 EntryPoint);
}; // Size: 0x3A0

#endif
