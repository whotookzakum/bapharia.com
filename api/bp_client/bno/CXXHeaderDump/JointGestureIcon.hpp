#ifndef UE4SS_SDK_JointGestureIcon_HPP
#define UE4SS_SDK_JointGestureIcon_HPP

class UJointGestureIcon_C : public UUserWidget
{
    class UImage* Icon_HandHolding;                                                   // 0x0278 (size: 0x8)
    class UImage* Icon_Janken;                                                        // 0x0280 (size: 0x8)
    class UWidgetSwitcher* Switcher;                                                  // 0x0288 (size: 0x8)
    int32 SwitchIndex;                                                                // 0x0290 (size: 0x4)

    void CheckTargetPlayer(class ASBPlayerCharacter* InTargetCharacter, bool& Result);
    void Update Icon(class ASBCharacter* Character);
}; // Size: 0x294

#endif
