#ifndef UE4SS_SDK_MapWidget_PlaceNamePlate_HPP
#define UE4SS_SDK_MapWidget_PlaceNamePlate_HPP

class UMapWidget_PlaceNamePlate_C : public UUserWidget
{
    class USBRuntimeTextBlock* TxtPlaceName;                                          // 0x0278 (size: 0x8)

    void SetTextId(FName InTextId);
    void SetText(FText InText);
}; // Size: 0x280

#endif
