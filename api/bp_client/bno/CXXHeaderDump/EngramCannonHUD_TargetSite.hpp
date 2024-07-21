#ifndef UE4SS_SDK_EngramCannonHUD_TargetSite_HPP
#define UE4SS_SDK_EngramCannonHUD_TargetSite_HPP

class UEngramCannonHUD_TargetSite_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Arrow_D;                                                            // 0x0280 (size: 0x8)
    class UImage* Arrow_L;                                                            // 0x0288 (size: 0x8)
    class UImage* Arrow_R;                                                            // 0x0290 (size: 0x8)
    class UImage* Arrow_U;                                                            // 0x0298 (size: 0x8)
    class UImage* TargetMarkShadow;                                                   // 0x02A0 (size: 0x8)
    FVector NowPoint;                                                                 // 0x02A8 (size: 0xC)
    FVector PrevPoint;                                                                // 0x02B4 (size: 0xC)
    float DeltaTime;                                                                  // 0x02C0 (size: 0x4)
    float PitchLimitMax;                                                              // 0x02C4 (size: 0x4)
    float PitchLimitMin;                                                              // 0x02C8 (size: 0x4)
    float YawLimitMax;                                                                // 0x02CC (size: 0x4)
    float YawLimitMin;                                                                // 0x02D0 (size: 0x4)
    bool IsNoiseAnim;                                                                 // 0x02D4 (size: 0x1)

    void UpdateArrowVisible();
    void UpdateWidgetLocation(class UWidget* WidgetObject, FVector Location, float Delta Time, float Move Speed);
    void UpdatePoint();
    void InitPoint();
    FVector Get Camera Foward Point(float Distance);
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void ExecuteUbergraph_EngramCannonHUD_TargetSite(int32 EntryPoint);
}; // Size: 0x2D5

#endif
