#ifndef UE4SS_SDK_WarpCountDown_HPP
#define UE4SS_SDK_WarpCountDown_HPP

class UWarpCountDown_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UCmnNumber1_0to99_C* CmnNumber1_0to99;                                      // 0x02C8 (size: 0x8)
    class UImage* Gauge;                                                              // 0x02D0 (size: 0x8)
    class UTextBlock* Label_WarpCancel;                                               // 0x02D8 (size: 0x8)
    FString WarpCancelMessage;                                                        // 0x02E0 (size: 0x10)
    class UMaterialInstanceDynamic* GaugeMat;                                         // 0x02F0 (size: 0x8)
    float CurrInteractWaitTime;                                                       // 0x02F8 (size: 0x4)
    float MaxInteractWaitTime;                                                        // 0x02FC (size: 0x4)
    bool IsInteractWait;                                                              // 0x0300 (size: 0x1)
    bool IsChatMode;                                                                  // 0x0301 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0302 (size: 0x2)
    int32 DisplayCount;                                                               // 0x0304 (size: 0x4)

    void SetInputBlock(bool IsInputBlock);
    void UpdateInteractGauge();
    void SetRemainCount(float InRemainCount);
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void OnCountdownInteractionDelegate_イベント(bool bPress);
    void Hide();
    void OnCountdownCancelDelegate_イベント();
    void Destruct();
    void OnInteractPress();
    void OnInteractRelease();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_WarpCountDown(int32 EntryPoint);
}; // Size: 0x308

#endif
