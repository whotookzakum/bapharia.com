#ifndef UE4SS_SDK_CountdownUI_HPP
#define UE4SS_SDK_CountdownUI_HPP

class UCountdownUI_C : public USBCountdownUI
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02D0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02D8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02E0 (size: 0x8)
    class UCanvasPanel* BattleAreaGrp;                                                // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* BattleAreaMessage;                                     // 0x02F0 (size: 0x8)
    class UCmnNumber1_0to99_C* CmnNumber1_0to99;                                      // 0x02F8 (size: 0x8)
    class UCanvasPanel* CountdownGrp;                                                 // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* CountdownMessage;                                      // 0x0308 (size: 0x8)
    class UCanvasPanel* DownPanel;                                                    // 0x0310 (size: 0x8)
    class UImage* Gauge;                                                              // 0x0318 (size: 0x8)
    class UImage* Icon;                                                               // 0x0320 (size: 0x8)
    class UImage* NoCountdownGauge;                                                   // 0x0328 (size: 0x8)
    class UCanvasPanel* NoCountdownGrp;                                               // 0x0330 (size: 0x8)
    class USBRuntimeTextBlock* NoCountdownMessage;                                    // 0x0338 (size: 0x8)
    float CurrCountdownRemainTime;                                                    // 0x0340 (size: 0x4)
    int32 CountdownRemainTimeMax;                                                     // 0x0344 (size: 0x4)
    FCountdownUI_COnCountdownEnd OnCountdownEnd;                                      // 0x0348 (size: 0x10)
    void OnCountdownEnd();
    int32 OldRemainTime;                                                              // 0x0358 (size: 0x4)
    int32 NewRemainTime;                                                              // 0x035C (size: 0x4)
    FCountdownUI_COnCountdownCancel OnCountdownCancel;                                // 0x0360 (size: 0x10)
    void OnCountdownCancel();
    bool IsChatMode;                                                                  // 0x0370 (size: 0x1)
    bool IsInteractionWait;                                                           // 0x0371 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0372 (size: 0x2)
    float CurrInteractionWaitTime;                                                    // 0x0374 (size: 0x4)
    float InteractionWaitTimeMax;                                                     // 0x0378 (size: 0x4)
    bool NoCountdown;                                                                 // 0x037C (size: 0x1)
    char padding_1[0x3];                                                              // 0x037D (size: 0x3)
    float InteractionGaugeWidthMax;                                                   // 0x0380 (size: 0x4)
    float CurrInteractionGaugeWidth;                                                  // 0x0384 (size: 0x4)
    class UMaterialInstanceDynamic* GaugeMat;                                         // 0x0388 (size: 0x8)
    class UMaterialInstanceDynamic* NoCountdownGaugeMat;                              // 0x0390 (size: 0x8)
    bool IsClosingCountdownUI;                                                        // 0x0398 (size: 0x1)

    void SetYPosition(float Y);
    void CheckCountCancel(bool& NotCancel);
    void SetBlockInputForCountdownUI(bool InBlockInput);
    void UpdateInteractionGauge();
    void IsChatModeActive(bool& IsActive);
    void SetMessageTextId(int32 InTextId, bool IsCountdown);
    void SetCountdownTime(int32 InTime);
    void SetCountdownTimeValueText(int32 InValue);
    void SetMessageText(FText InText, bool IsCountdown);
    void BeginInteractionWait();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void Construct();
    void StartCountdown(const FText& InMessage, const int32 InCountdownTime);
    void Hide(ECountdownResult Result);
    void StartCountdown_ECountdownType(const ECountdownType InCountdownType, const int32 InCountdownTime);
    void OnPressInteraction();
    void OnReleaseInteraction();
    void StartNoCountdown(const FText& InMessage);
    void StartNoCountdown_ECountdownType(const ECountdownType InCountdownType);
    void OnCountdownCancelDelegate_イベント();
    void OnCountdownInteractionDelegate_イベント(bool bPress);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void Destruct();
    void StartNoCountdown_BattleAreaMessage();
    void UnbindCountdownCancelDelegate();
    void ExecuteUbergraph_CountdownUI(int32 EntryPoint);
    void OnCountdownCancel__DelegateSignature();
    void OnCountdownEnd__DelegateSignature();
}; // Size: 0x399

#endif
