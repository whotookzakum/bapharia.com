#ifndef UE4SS_SDK_MapWidget_TimeTooltip_HPP
#define UE4SS_SDK_MapWidget_TimeTooltip_HPP

class UMapWidget_TimeTooltip_C : public UUserWidget
{
    class UImage* Image_0;                                                            // 0x0278 (size: 0x8)
    class USBDateTimeTextBlock* TimeLabel;                                            // 0x0280 (size: 0x8)
    TEnumAsByte<E_MapWidget_Tooltip1_TextureTypes::Type> TooltipTextureType;          // 0x0288 (size: 0x1)

    void SetEndTime(FDateTime DateTime);
    void SetTooltipTextureType(TEnumAsByte<E_MapWidget_Tooltip1_TextureTypes::Type> InType);
    void GetName(FText& OutName);
    void SetName(FText InText);
}; // Size: 0x289

#endif
