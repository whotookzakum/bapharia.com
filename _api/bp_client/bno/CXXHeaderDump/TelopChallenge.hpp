#ifndef UE4SS_SDK_TelopChallenge_HPP
#define UE4SS_SDK_TelopChallenge_HPP

class UTelopChallenge_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class UTextBlock* SubText;                                                        // 0x0318 (size: 0x8)
    class UWidgetSwitcher* SwitchBgColor;                                             // 0x0320 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0328 (size: 0x8)
    FTimerHandle TimerHandle;                                                         // 0x0330 (size: 0x8)

    void SetBG(int32 Index);
    class UTextBlock* GetSubText();
    class USBRuntimeTextBlock* GetText();
    void OnTimerEvent();
    void PlaySE(class UAkAudioEvent* SE);
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopChallenge(int32 EntryPoint);
}; // Size: 0x338

#endif
