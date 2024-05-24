#ifndef UE4SS_SDK_CommandMenu_Line_HPP
#define UE4SS_SDK_CommandMenu_Line_HPP

class UCommandMenu_Line_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UImage* LineAnimStart1;                                                     // 0x0288 (size: 0x8)
    class UImage* LineAnimStart10;                                                    // 0x0290 (size: 0x8)
    class UImage* LineAnimStart11;                                                    // 0x0298 (size: 0x8)
    class UImage* LineAnimStart2;                                                     // 0x02A0 (size: 0x8)
    class UImage* LineAnimStart3;                                                     // 0x02A8 (size: 0x8)
    class UImage* LineAnimStart4;                                                     // 0x02B0 (size: 0x8)
    class UImage* LineAnimStart5;                                                     // 0x02B8 (size: 0x8)
    class UImage* LineAnimStart6;                                                     // 0x02C0 (size: 0x8)
    class UImage* LineAnimStart7;                                                     // 0x02C8 (size: 0x8)
    class UImage* LineAnimStart8;                                                     // 0x02D0 (size: 0x8)
    class UImage* LineAnimStart9;                                                     // 0x02D8 (size: 0x8)
    class UImage* LineAnimStartPoint;                                                 // 0x02E0 (size: 0x8)
    class UWidgetSwitcher* SwitchTypeFirst;                                           // 0x02E8 (size: 0x8)
    class UWidgetSwitcher* SwitchTypeThird;                                           // 0x02F0 (size: 0x8)
    ESBCommandMenuType InType;                                                        // 0x02F8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02F9 (size: 0x3)
    int32 TypeFilrstIndex;                                                            // 0x02FC (size: 0x4)
    int32 TypeThirdIndex;                                                             // 0x0300 (size: 0x4)

    void PreConstruct(bool IsDesignTime);
    void Construct();
    void ExecuteUbergraph_CommandMenu_Line(int32 EntryPoint);
}; // Size: 0x304

#endif
