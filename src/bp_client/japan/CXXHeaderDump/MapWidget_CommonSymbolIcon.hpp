#ifndef UE4SS_SDK_MapWidget_CommonSymbolIcon_HPP
#define UE4SS_SDK_MapWidget_CommonSymbolIcon_HPP

class UMapWidget_CommonSymbolIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimPublicDungeon;                                        // 0x0280 (size: 0x8)
    class USBButton_C* Btn;                                                           // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0290 (size: 0x8)
    class UImage* Image_Icon;                                                         // 0x0298 (size: 0x8)
    class UImage* Image_Icon_Effect;                                                  // 0x02A0 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x02A8 (size: 0x8)
    bool IsToolTipEnable;                                                             // 0x02B0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02B1 (size: 0x7)
    class UMapWidget_IconTooltip1_C* ToolTip;                                         // 0x02B8 (size: 0x8)
    FString TooltipString;                                                            // 0x02C0 (size: 0x10)

    void SetTooltipTextColor(FSlateColor InColorAndOpacity);
    void GetTooltipText(FString& OutTooltipText);
    void SetIconTextureBySymbolIconType(EMapSymbolIconType InSymbolIconType);
    void SetIconTexture(class UTexture2D* InTexture);
    void SetTextToTooltip(FText InText);
    void SetTooltipEnable(bool IsEnable);
    class UWidget* GetToolTipWidget_0();
    void Construct();
    void PlayPublicDungeonAnimation();
    void ExecuteUbergraph_MapWidget_CommonSymbolIcon(int32 EntryPoint);
}; // Size: 0x2D0

#endif
