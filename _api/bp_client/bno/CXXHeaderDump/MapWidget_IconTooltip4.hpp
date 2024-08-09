#ifndef UE4SS_SDK_MapWidget_IconTooltip4_HPP
#define UE4SS_SDK_MapWidget_IconTooltip4_HPP

class UMapWidget_IconTooltip4_C : public UUserWidget
{
    class UImage* Image_0;                                                            // 0x0278 (size: 0x8)
    class UTextBlock* NameLabel;                                                      // 0x0280 (size: 0x8)

    void SetDesc(FText InDesc);
    void SetName(FText InText);
}; // Size: 0x288

#endif
