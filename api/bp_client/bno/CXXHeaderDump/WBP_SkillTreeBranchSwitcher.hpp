#ifndef UE4SS_SDK_WBP_SkillTreeBranchSwitcher_HPP
#define UE4SS_SDK_WBP_SkillTreeBranchSwitcher_HPP

class UWBP_SkillTreeBranchSwitcher_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Line01;                                                             // 0x0280 (size: 0x8)
    class UImage* Line03;                                                             // 0x0288 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_58;                                         // 0x0290 (size: 0x8)
    ESkillTreeHorizonBranchType BrunchType;                                           // 0x0298 (size: 0x1)

    void Set Brunch Color(bool Index);
    void Init(ESkillTreeHorizonBranchType InBrunchType);
    void PreConstruct(bool IsDesignTime);
    void SetBrunchType(ESkillTreeHorizonBranchType BrunchType);
    void ExecuteUbergraph_WBP_SkillTreeBranchSwitcher(int32 EntryPoint);
}; // Size: 0x299

#endif
