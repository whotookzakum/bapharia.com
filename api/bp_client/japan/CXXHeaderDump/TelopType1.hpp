#ifndef UE4SS_SDK_TelopType1_HPP
#define UE4SS_SDK_TelopType1_HPP

class UTelopType1_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class UCommonIcon_C* CommonIcon;                                                  // 0x0318 (size: 0x8)
    class UCanvasPanel* IconGrp;                                                      // 0x0320 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0328 (size: 0x8)

    void OnPlay();
    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    void PlayBGM();
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopType1(int32 EntryPoint);
}; // Size: 0x330

#endif
