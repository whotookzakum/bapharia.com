#ifndef UE4SS_SDK_SkillTree_SkillIconPassive_HPP
#define UE4SS_SDK_SkillTree_SkillIconPassive_HPP

class USkillTree_SkillIconPassive_C : public USkillTree_SkillIconBase_C
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0388 (size: 0x8)
    class UImage* Image_142;                                                          // 0x0390 (size: 0x8)
    class UImage* Image_EquipmentIcon_1;                                              // 0x0398 (size: 0x8)
    class UImage* ImageIcon1;                                                         // 0x03A0 (size: 0x8)

    void SetEquipmentIconVisibility(bool InIsVisible);
    void SetIconEmpty();
    void Construct();
    void ExecuteUbergraph_SkillTree_SkillIconPassive(int32 EntryPoint);
}; // Size: 0x3A8

#endif
