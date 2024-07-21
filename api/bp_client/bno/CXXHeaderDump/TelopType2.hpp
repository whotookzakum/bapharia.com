#ifndef UE4SS_SDK_TelopType2_HPP
#define UE4SS_SDK_TelopType2_HPP

class UTelopType2_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0318 (size: 0x8)

    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopType2(int32 EntryPoint);
}; // Size: 0x320

#endif
