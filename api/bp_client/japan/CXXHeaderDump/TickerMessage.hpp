#ifndef UE4SS_SDK_TickerMessage_HPP
#define UE4SS_SDK_TickerMessage_HPP

class UTickerMessage_C : public USBTickerMessageBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_BG;                                                           // 0x0280 (size: 0x8)
    class USBRichTextBlock* Text;                                                     // 0x0288 (size: 0x8)
    class UOverlay* VisibleRoot;                                                      // 0x0290 (size: 0x8)
    int32 MessageIndex;                                                               // 0x0298 (size: 0x4)
    TEnumAsByte<TickerMessageStatus::Type> Status;                                    // 0x029C (size: 0x1)
    char padding_0[0x3];                                                              // 0x029D (size: 0x3)
    float ScrollSpeed;                                                                // 0x02A0 (size: 0x4)
    float IntervalElapsed;                                                            // 0x02A4 (size: 0x4)
    FTimerHandle CheckTimerHandle;                                                    // 0x02A8 (size: 0x8)

    void DumpDebugInfo_Internal(FString InTrigger);
    void OnCheckTime();
    void CheckNextMessage();
    void OnMessageChange();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void Proc_Idle();
    void Proc_Scroll(float DeltaTime);
    void Proc_Interval(float DeltaTime);
    void Construct();
    void OnTickerMessageChanged();
    void OnUIVisibleSettingChange(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void Destruct();
    void DumpDebugInfo();
    void ExecuteUbergraph_TickerMessage(int32 EntryPoint);
}; // Size: 0x2B0

#endif
