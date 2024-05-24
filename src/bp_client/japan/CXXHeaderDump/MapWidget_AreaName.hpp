#ifndef UE4SS_SDK_MapWidget_AreaName_HPP
#define UE4SS_SDK_MapWidget_AreaName_HPP

class UMapWidget_AreaName_C : public UUserWidget
{
    class UImage* MapIcon;                                                            // 0x0278 (size: 0x8)
    class UTextBlock* MapName;                                                        // 0x0280 (size: 0x8)
    TSoftObjectPtr<UTexture2D> IconTexture;                                           // 0x0288 (size: 0x28)

    void Setup(FString MapId);
}; // Size: 0x2B0

#endif
