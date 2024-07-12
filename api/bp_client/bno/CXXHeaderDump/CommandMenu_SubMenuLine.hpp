#ifndef UE4SS_SDK_CommandMenu_SubMenuLine_HPP
#define UE4SS_SDK_CommandMenu_SubMenuLine_HPP

class UCommandMenu_SubMenuLine_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UImage* LineAnimStartPoint;                                                 // 0x0288 (size: 0x8)
    class UImage* LineAnimStartPoint_1;                                               // 0x0290 (size: 0x8)
    class UWidgetSwitcher* SwitchLine12;                                              // 0x0298 (size: 0x8)
    int32 BtnNum;                                                                     // 0x02A0 (size: 0x4)

    void InAnimation();
    void PreConstruct(bool IsDesignTime);
    void SetBtnNumSwitch(int32 BtnNum);
    void ExecuteUbergraph_CommandMenu_SubMenuLine(int32 EntryPoint);
}; // Size: 0x2A4

#endif
