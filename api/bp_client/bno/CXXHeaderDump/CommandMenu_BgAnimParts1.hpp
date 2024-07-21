#ifndef UE4SS_SDK_CommandMenu_BgAnimParts1_HPP
#define UE4SS_SDK_CommandMenu_BgAnimParts1_HPP

class UCommandMenu_BgAnimParts1_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimBlink;                                                // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimAlpha;                                                // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimVibration;                                            // 0x0290 (size: 0x8)
    class UWidgetAnimation* AnimDirY;                                                 // 0x0298 (size: 0x8)
    class UWidgetAnimation* AnimDirX;                                                 // 0x02A0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02A8 (size: 0x8)
    class UImage* Image;                                                              // 0x02B0 (size: 0x8)
    class UCanvasPanel* StartPosGrp;                                                  // 0x02B8 (size: 0x8)
    float Start Time;                                                                 // 0x02C0 (size: 0x4)
    float Speed;                                                                      // 0x02C4 (size: 0x4)

    void StopAnim(class UWidgetAnimation* InAnim);
    void Construct();
    void SetPat(float StartTime);
    void WidgetAnimationEvt_AnimAlpha_K2Node_WidgetAnimationEvent_0();
    void ExecuteUbergraph_CommandMenu_BgAnimParts1(int32 EntryPoint);
}; // Size: 0x2C8

#endif
