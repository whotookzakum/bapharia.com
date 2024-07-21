#ifndef UE4SS_SDK_WeaponBrakeAnim_HPP
#define UE4SS_SDK_WeaponBrakeAnim_HPP

class UWeaponBrakeAnim_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* Play;                                                     // 0x0280 (size: 0x8)
    class UImage* Image_43;                                                           // 0x0288 (size: 0x8)
    class UImage* Image_44;                                                           // 0x0290 (size: 0x8)
    class UImage* Image_45;                                                           // 0x0298 (size: 0x8)
    class UImage* Image_46;                                                           // 0x02A0 (size: 0x8)
    class UImage* Image_47;                                                           // 0x02A8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02B0 (size: 0x8)
    FWeaponBrakeAnim_COnAnimFinished OnAnimFinished;                                  // 0x02B8 (size: 0x10)
    void OnAnimFinished();
    bool IsQuitable;                                                                  // 0x02C8 (size: 0x1)

    void PlayAnim();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void EnableQuit();
    void Replay();
    void ExecuteUbergraph_WeaponBrakeAnim(int32 EntryPoint);
    void OnAnimFinished__DelegateSignature();
}; // Size: 0x2C9

#endif
