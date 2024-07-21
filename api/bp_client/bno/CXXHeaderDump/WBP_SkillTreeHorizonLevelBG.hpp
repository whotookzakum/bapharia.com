#ifndef UE4SS_SDK_WBP_SkillTreeHorizonLevelBG_HPP
#define UE4SS_SDK_WBP_SkillTreeHorizonLevelBG_HPP

class UWBP_SkillTreeHorizonLevelBG_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Bg01;                                                               // 0x0280 (size: 0x8)
    class UImage* BG02;                                                               // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock;                                    // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_95;                                 // 0x0298 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_51;                                         // 0x02A0 (size: 0x8)
    bool Select;                                                                      // 0x02A8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02A9 (size: 0x3)
    int32 Level;                                                                      // 0x02AC (size: 0x4)

    void Init(bool IsSelect, int32 Level);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_WBP_SkillTreeHorizonLevelBG(int32 EntryPoint);
}; // Size: 0x2B0

#endif
