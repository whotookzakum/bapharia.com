#ifndef UE4SS_SDK_NotificationCircleAnim_HPP
#define UE4SS_SDK_NotificationCircleAnim_HPP

class UNotificationCircleAnim_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimLoop;                                                 // 0x0280 (size: 0x8)
    class UImage* Image_41;                                                           // 0x0288 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_NotificationCircleAnim(int32 EntryPoint);
}; // Size: 0x290

#endif
