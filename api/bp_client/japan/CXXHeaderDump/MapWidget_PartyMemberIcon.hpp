#ifndef UE4SS_SDK_MapWidget_PartyMemberIcon_HPP
#define UE4SS_SDK_MapWidget_PartyMemberIcon_HPP

class UMapWidget_PartyMemberIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimScale;                                                // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0288 (size: 0x8)
    class UImage* Icon_Dead;                                                          // 0x0290 (size: 0x8)
    class UImage* Icon_Default;                                                       // 0x0298 (size: 0x8)
    class UWidgetSwitcher* Switcher;                                                  // 0x02A0 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x02A8 (size: 0x8)
    class UMapWidget_IconTooltip1_C* ToolTip;                                         // 0x02B0 (size: 0x8)
    class ASBPlayerState* PlayerState;                                                // 0x02B8 (size: 0x8)
    bool IsDead;                                                                      // 0x02C0 (size: 0x1)

    void GetDeadFlag(bool& OutDeadFlag);
    void GetPlayerState(class ASBPlayerState*& OutPlayerState);
    void SetPlayerState(class ASBPlayerState* InPlayerState);
    void GetText(FText& OutText);
    void CheckDead();
    void SetText(FText InText);
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void CheckVisible();
    void ExecuteUbergraph_MapWidget_PartyMemberIcon(int32 EntryPoint);
}; // Size: 0x2C1

#endif
