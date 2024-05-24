#ifndef UE4SS_SDK_HitIndicator_HPP
#define UE4SS_SDK_HitIndicator_HPP

class UHitIndicator_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_Circle;                                                       // 0x0280 (size: 0x8)
    class UOverlay* Overlay_0;                                                        // 0x0288 (size: 0x8)
    float MarkerHarfHeight;                                                           // 0x0290 (size: 0x4)

    void AddMarker(FVector HitLocation);
    void Construct();
    void ExecuteUbergraph_HitIndicator(int32 EntryPoint);
}; // Size: 0x294

#endif
