#ifndef UE4SS_SDK_SkillTree_SkillIconSub_HPP
#define UE4SS_SDK_SkillTree_SkillIconSub_HPP

class USkillTree_SkillIconSub_C : public USkillTree_SkillIconBase_C
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0388 (size: 0x8)
    class UImage* Image_142;                                                          // 0x0390 (size: 0x8)
    class UImage* Image_EquipmentIcon;                                                // 0x0398 (size: 0x8)
    class UImage* ImageIcon1;                                                         // 0x03A0 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_SkillTree_SkillIconSub(int32 EntryPoint);
}; // Size: 0x3A8

#endif
