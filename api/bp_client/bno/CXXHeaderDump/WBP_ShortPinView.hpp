#ifndef UE4SS_SDK_WBP_ShortPinView_HPP
#define UE4SS_SDK_WBP_ShortPinView_HPP

class UWBP_ShortPinView_C : public USBShortPinView
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02E8 (size: 0x8)
    class UCommonAimModeUI_C* CommonAimModeUI_145;                                    // 0x02F0 (size: 0x8)
    class UShortPin_C* ShortPin_0;                                                    // 0x02F8 (size: 0x8)
    class UShortPin_C* ShortPin_1;                                                    // 0x0300 (size: 0x8)
    class UShortPin_C* ShortPin_2;                                                    // 0x0308 (size: 0x8)
    class UShortPin_C* ShortPin_3;                                                    // 0x0310 (size: 0x8)
    class UShortPin_C* ShortPin_4;                                                    // 0x0318 (size: 0x8)
    class UShortPin_C* ShortPin_5;                                                    // 0x0320 (size: 0x8)
    class UShortPin_C* ShortPin_6;                                                    // 0x0328 (size: 0x8)
    class UShortPin_C* ShortPin_7;                                                    // 0x0330 (size: 0x8)
    class UShortPin_C* ShortPin_8;                                                    // 0x0338 (size: 0x8)
    class UShortPin_C* ShortPin_9;                                                    // 0x0340 (size: 0x8)
    TArray<class UShortPin_C*> ShortPinListBP;                                        // 0x0348 (size: 0x10)
    bool IsRayButtonDownBP;                                                           // 0x0358 (size: 0x1)
    bool IsEnemyTargetBP;                                                             // 0x0359 (size: 0x1)
    char padding_0[0x2];                                                              // 0x035A (size: 0x2)
    float CoolTimeBP;                                                                 // 0x035C (size: 0x4)
    float TimerBP;                                                                    // 0x0360 (size: 0x4)
    float HalfScaleDistanceBP;                                                        // 0x0364 (size: 0x4)

    void SetPinPositionBP(class USBShortPinWidget* Pin);
    void GetPlayerShortPinComponent(class USBPlayerShortPinComponent*& PlayerShortPinComponent);
    void IsReleaseRayButton(bool& NewParam);
    void Construct();
    void UpdateKeyConfig();
    void SetUIVisible(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void ExecuteUbergraph_WBP_ShortPinView(int32 EntryPoint);
}; // Size: 0x368

#endif
