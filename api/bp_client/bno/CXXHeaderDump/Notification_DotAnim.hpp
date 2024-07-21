#ifndef UE4SS_SDK_Notification_DotAnim_HPP
#define UE4SS_SDK_Notification_DotAnim_HPP

class UNotification_DotAnim_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimDotBlink;                                             // 0x0280 (size: 0x8)
    class UImage* Dot;                                                                // 0x0288 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_Notification_DotAnim(int32 EntryPoint);
}; // Size: 0x290

#endif
