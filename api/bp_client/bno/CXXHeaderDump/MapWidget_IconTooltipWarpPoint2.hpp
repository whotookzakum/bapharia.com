#ifndef UE4SS_SDK_MapWidget_IconTooltipWarpPoint2_HPP
#define UE4SS_SDK_MapWidget_IconTooltipWarpPoint2_HPP

class UMapWidget_IconTooltipWarpPoint2_C : public UUserWidget
{
    class UImage* BG;                                                                 // 0x0278 (size: 0x8)
    class UImage* Image_94;                                                           // 0x0280 (size: 0x8)
    class UImage* Image_347;                                                          // 0x0288 (size: 0x8)
    class UTextBlock* LabelInfo;                                                      // 0x0290 (size: 0x8)
    class UTextBlock* LabelName;                                                      // 0x0298 (size: 0x8)

    void SetInfo(FText InText);
    void SetText(FText InText);
}; // Size: 0x2A0

#endif
