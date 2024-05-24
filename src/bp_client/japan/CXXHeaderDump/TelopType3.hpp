#ifndef UE4SS_SDK_TelopType3_HPP
#define UE4SS_SDK_TelopType3_HPP

class UTelopType3_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class UImage* Effect_star;                                                        // 0x0318 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0320 (size: 0x8)
    class USBRuntimeTextBlock* TextEff;                                               // 0x0328 (size: 0x8)
    class UWidgetSwitcher* WSBG;                                                      // 0x0330 (size: 0x8)

    void SetBG(int32 Index);
    class USBRuntimeTextBlock* GetTextEffect();
    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    void PlayBGM();
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopType3(int32 EntryPoint);
}; // Size: 0x338

#endif
