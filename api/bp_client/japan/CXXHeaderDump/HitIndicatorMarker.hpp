#ifndef UE4SS_SDK_HitIndicatorMarker_HPP
#define UE4SS_SDK_HitIndicatorMarker_HPP

class UHitIndicatorMarker_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* Anim1;                                                    // 0x0280 (size: 0x8)
    class UImage* Image_Marker;                                                       // 0x0288 (size: 0x8)
    FVector HitLocation;                                                              // 0x0290 (size: 0xC)

    void UpdateDirection();
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_HitIndicatorMarker(int32 EntryPoint);
}; // Size: 0x29C

#endif
