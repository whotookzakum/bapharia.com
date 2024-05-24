#ifndef UE4SS_SDK_Fishing_Cast_HPP
#define UE4SS_SDK_Fishing_Cast_HPP

class UFishing_Cast_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* TensionGauge仮;                                           // 0x0280 (size: 0x8)
    class UWidgetAnimation* FishingFail仮;                                            // 0x0288 (size: 0x8)
    class UWidgetAnimation* FishingSuccess仮;                                         // 0x0290 (size: 0x8)
    class UWidgetAnimation* HookSuccess仮;                                            // 0x0298 (size: 0x8)
    class UWidgetAnimation* Fighting仮;                                               // 0x02A0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_FishIcon;                                         // 0x02A8 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Gauge;                                            // 0x02B0 (size: 0x8)
    class UImage* Circle01;                                                           // 0x02B8 (size: 0x8)
    class UImage* Circle02;                                                           // 0x02C0 (size: 0x8)
    class UImage* Circle03;                                                           // 0x02C8 (size: 0x8)
    class UEditableTextBox* EditableTextBox_Cast;                                     // 0x02D0 (size: 0x8)
    class UEditableTextBox* EditableTextBox_Hook;                                     // 0x02D8 (size: 0x8)
    class UImage* FishBackGround;                                                     // 0x02E0 (size: 0x8)
    class UImage* FishIcon;                                                           // 0x02E8 (size: 0x8)
    class UImage* Fishing_BG01;                                                       // 0x02F0 (size: 0x8)
    class UTextBlock* FishingFail_Text;                                               // 0x02F8 (size: 0x8)
    class UCanvasPanel* FishingFight_Panel;                                           // 0x0300 (size: 0x8)
    class UTextBlock* FishingSuccess_Text;                                            // 0x0308 (size: 0x8)
    class UTextBlock* HookSuccess_Text;                                               // 0x0310 (size: 0x8)
    class UImage* LineTensionGauge;                                                   // 0x0318 (size: 0x8)
    class UImage* LineTensionGauge_Frame;                                             // 0x0320 (size: 0x8)
    class UImage* LineTensionGauge_FrameIcon;                                         // 0x0328 (size: 0x8)
    class USBRuntimeTextBlock* RuntimeText_Cast;                                      // 0x0330 (size: 0x8)
    class USBRuntimeTextBlock* RuntimeText_Hook_1;                                    // 0x0338 (size: 0x8)
    class UTextBlock* TensionPercent;                                                 // 0x0340 (size: 0x8)
    FSlateBrush ColorStaminaGauge;                                                    // 0x0348 (size: 0x88)
    float InitPos;                                                                    // 0x03D0 (size: 0x4)
    float FishDistanceBuff;                                                           // 0x03D4 (size: 0x4)
    TArray<FFishing_LineTensionStruct> LineTensionColorData;                          // 0x03D8 (size: 0x10)
    class UWidgetAnimation* LineTensionAnimation;                                     // 0x03E8 (size: 0x8)
    float DefaultGaugeSizeX;                                                          // 0x03F0 (size: 0x4)

    void Reset();
    void Init();
    void HookSuccess();
    void AnimFail();
    void AnimSuccess();
    void AnimHookSuccess();
    void UpdateLineColor(float LineTensionPercentage, FLinearColor& NewParam);
    void InitLineTensionColorData();
    void InitFishIconPos();
    FSlateBrush Get_FishStaminaGauge_Brush_0();
    void SetTensionGauge(float TensionValue);
    void SetStaminaGauge(float CurentStamina, float MaxStamina);
    void PreConstruct(bool IsDesignTime);
    void Construct();
    void ExecuteUbergraph_Fishing_Cast(int32 EntryPoint);
}; // Size: 0x3F4

#endif
