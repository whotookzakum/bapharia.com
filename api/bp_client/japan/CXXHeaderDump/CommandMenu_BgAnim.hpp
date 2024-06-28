#ifndef UE4SS_SDK_CommandMenu_BgAnim_HPP
#define UE4SS_SDK_CommandMenu_BgAnim_HPP

class UCommandMenu_BgAnim_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimBgColor;                                              // 0x0280 (size: 0x8)
    class UImage* BG;                                                                 // 0x0288 (size: 0x8)
    class UImage* BgForAnim;                                                          // 0x0290 (size: 0x8)
    class UCanvasPanel* Canvas1;                                                      // 0x0298 (size: 0x8)
    float HueShiftPerFrom;                                                            // 0x02A0 (size: 0x4)
    float HueShiftPerTo;                                                              // 0x02A4 (size: 0x4)
    bool bFirstTime;                                                                  // 0x02A8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02A9 (size: 0x3)
    float DesaturationFracFrom;                                                       // 0x02AC (size: 0x4)
    float DesaturationFracTo;                                                         // 0x02B0 (size: 0x4)

    void Set Bg Color(ESBCommandMenuType MenuType, bool bAnim);
    void Construct();
    void ExecuteUbergraph_CommandMenu_BgAnim(int32 EntryPoint);
}; // Size: 0x2B4

#endif
