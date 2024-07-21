#ifndef UE4SS_SDK_SimpleAlert_HPP
#define UE4SS_SDK_SimpleAlert_HPP

class USimpleAlert_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* FadeInOut;                                                // 0x0280 (size: 0x8)
    class UTextBlock* MessageLabel;                                                   // 0x0288 (size: 0x8)
    class USBOverlay* SBOverlay_0;                                                    // 0x0290 (size: 0x8)
    bool Show;                                                                        // 0x0298 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0299 (size: 0x7)
    FString CurrentText;                                                              // 0x02A0 (size: 0x10)

    void Construct();
    void SetText(FString Message);
    void SetTextById(FName TextId);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_SimpleAlert(int32 EntryPoint);
}; // Size: 0x2B0

#endif
