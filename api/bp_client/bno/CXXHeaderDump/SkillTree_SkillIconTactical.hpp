#ifndef UE4SS_SDK_SkillTree_SkillIconTactical_HPP
#define UE4SS_SDK_SkillTree_SkillIconTactical_HPP

class USkillTree_SkillIconTactical_C : public USkillTree_SkillIconBase_C
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0388 (size: 0x8)
    class UWidgetAnimation* AnimUpgratable;                                           // 0x0390 (size: 0x8)
    class UImage* Image_142;                                                          // 0x0398 (size: 0x8)
    class UImage* Image_EquipmentIcon;                                                // 0x03A0 (size: 0x8)
    class UImage* ImageElementIcon1;                                                  // 0x03A8 (size: 0x8)
    class UImage* ImageIcon1;                                                         // 0x03B0 (size: 0x8)
    class UImage* ImageIconBg1;                                                       // 0x03B8 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_SkillTree_SkillIconTactical(int32 EntryPoint);
}; // Size: 0x3C0

#endif
