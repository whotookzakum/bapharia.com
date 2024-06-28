#ifndef UE4SS_SDK_MapWidget_TimeSymbolIcon_HPP
#define UE4SS_SDK_MapWidget_TimeSymbolIcon_HPP

class UMapWidget_TimeSymbolIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* IconAnimation;                                            // 0x0280 (size: 0x8)
    class USBButton_C* Btn;                                                           // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0290 (size: 0x8)
    class UImage* Image_Icon;                                                         // 0x0298 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x02A0 (size: 0x8)
    bool IsToolTipEnable;                                                             // 0x02A8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02A9 (size: 0x7)
    class UMapWidget_IconTooltip1_C* ToolTip;                                         // 0x02B0 (size: 0x8)
    FString EventTermId;                                                              // 0x02B8 (size: 0x10)
    class UMapWidget_TimeTooltip_C* TimeTooltip;                                      // 0x02C8 (size: 0x8)
    FDateTime EndTime;                                                                // 0x02D0 (size: 0x8)
    bool AnimationPlay;                                                               // 0x02D8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x02D9 (size: 0x7)
    FMapWidget_TimeSymbolIcon_COnOpenTimeEnd OnOpenTimeEnd;                           // 0x02E0 (size: 0x10)
    void OnOpenTimeEnd(int32 Index, class UMapWidget_TimeSymbolIcon_C* Widget);
    int32 Index;                                                                      // 0x02F0 (size: 0x4)
    char padding_2[0x4];                                                              // 0x02F4 (size: 0x4)
    FTimerHandle TimerHandle;                                                         // 0x02F8 (size: 0x8)
    bool TimerStop;                                                                   // 0x0300 (size: 0x1)

    void IconStateCheck();
    void SetTimeData(FString TermId);
    void GetTooltipText(FString& OutTooltipText);
    void SetIconTextureBySymbolIconType(EMapSymbolIconType InSymbolIconType);
    void SetIconTexture(class UTexture2D* InTexture);
    void SetTextToTooltip(FText InText);
    void SetTooltipEnable(bool IsEnable);
    class UWidget* GetToolTipWidget_0();
    void Construct();
    void Destruct();
    void TimerEvent_IconCheck();
    void ExecuteUbergraph_MapWidget_TimeSymbolIcon(int32 EntryPoint);
    void OnOpenTimeEnd__DelegateSignature(int32 Index, class UMapWidget_TimeSymbolIcon_C* Widget);
}; // Size: 0x301

#endif
