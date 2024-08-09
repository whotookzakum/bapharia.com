#ifndef UE4SS_SDK_MapWidget_IconTooltip1_HPP
#define UE4SS_SDK_MapWidget_IconTooltip1_HPP

class UMapWidget_IconTooltip1_C : public UUserWidget
{
    class UImage* Image_0;                                                            // 0x0278 (size: 0x8)
    class UTextBlock* NameLabel;                                                      // 0x0280 (size: 0x8)
    TEnumAsByte<E_MapWidget_Tooltip1_TextureTypes::Type> TooltipTextureType;          // 0x0288 (size: 0x1)

    void Set Text Color(FSlateColor InColorAndOpacity);
    void SetTooltipTextureType(TEnumAsByte<E_MapWidget_Tooltip1_TextureTypes::Type> InType);
    void GetName(FText& OutName);
    void SetName(FText InText);
}; // Size: 0x289

#endif
