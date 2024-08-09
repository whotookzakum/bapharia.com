#ifndef UE4SS_SDK_MapWidget_PlayerIcon_HPP
#define UE4SS_SDK_MapWidget_PlayerIcon_HPP

class UMapWidget_PlayerIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimPublicDungeon;                                        // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimScale;                                                // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0290 (size: 0x8)
    class UImage* Image_Icon;                                                         // 0x0298 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x02A0 (size: 0x8)
    class UMapWidget_IconTooltip1_C* ToolTip;                                         // 0x02A8 (size: 0x8)

    void PlayPublicDungeonAnimation();
    void GetCursorAngle(float& OutCursorAngle);
    void SetCursorAngle(float InAngle);
    void Construct();
    void ExecuteUbergraph_MapWidget_PlayerIcon(int32 EntryPoint);
}; // Size: 0x2B0

#endif
