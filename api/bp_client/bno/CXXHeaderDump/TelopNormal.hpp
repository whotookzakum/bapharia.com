#ifndef UE4SS_SDK_TelopNormal_HPP
#define UE4SS_SDK_TelopNormal_HPP

class UTelopNormal_C : public USBTelopBase
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
    void ExecuteUbergraph_TelopNormal(int32 EntryPoint);
}; // Size: 0x320

#endif
