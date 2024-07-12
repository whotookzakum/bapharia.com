#ifndef UE4SS_SDK_TelopGameOver_HPP
#define UE4SS_SDK_TelopGameOver_HPP

class UTelopGameOver_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0318 (size: 0x8)
    bool bValidAnimFInished;                                                          // 0x0320 (size: 0x1)

    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    void PlayBGM();
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void OnPlayAnim();
    void ExecuteUbergraph_TelopGameOver(int32 EntryPoint);
}; // Size: 0x321

#endif
