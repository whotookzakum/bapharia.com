#ifndef UE4SS_SDK_TelopProficiency_HPP
#define UE4SS_SDK_TelopProficiency_HPP

class UTelopProficiency_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* GlowAnim;                                                 // 0x0310 (size: 0x8)
    class UWidgetAnimation* Out;                                                      // 0x0318 (size: 0x8)
    class UWidgetAnimation* In;                                                       // 0x0320 (size: 0x8)
    class UHorizontalBox* HBStar;                                                     // 0x0328 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0330 (size: 0x8)

    void PlayAnimGlow();
    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    void PlayAnimOut();
    void SetupStar();
    void OnPlay();
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void EndAnimStarActive();
    void ExecuteUbergraph_TelopProficiency(int32 EntryPoint);
}; // Size: 0x338

#endif
