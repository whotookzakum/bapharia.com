#ifndef UE4SS_SDK_TelopReadyGo_HPP
#define UE4SS_SDK_TelopReadyGo_HPP

class UTelopReadyGo_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)

    void PlaySE(class UAkAudioEvent* SE);
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopReadyGo(int32 EntryPoint);
}; // Size: 0x318

#endif
