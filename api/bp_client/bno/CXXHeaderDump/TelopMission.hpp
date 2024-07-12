#ifndef UE4SS_SDK_TelopMission_HPP
#define UE4SS_SDK_TelopMission_HPP

class UTelopMission_C : public USBTelopBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0308 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0310 (size: 0x8)
    class UWidgetSwitcher* SwitchBgColor;                                             // 0x0318 (size: 0x8)
    class USBRuntimeTextBlock* Text;                                                  // 0x0320 (size: 0x8)

    void SetBG(int32 Index);
    class USBRuntimeTextBlock* GetText();
    void PlaySE(class UAkAudioEvent* SE);
    bool IsPlayAnim();
    void StopAnim();
    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_TelopMission(int32 EntryPoint);
}; // Size: 0x328

#endif
