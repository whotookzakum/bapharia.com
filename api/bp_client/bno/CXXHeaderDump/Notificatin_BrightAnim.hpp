#ifndef UE4SS_SDK_Notificatin_BrightAnim_HPP
#define UE4SS_SDK_Notificatin_BrightAnim_HPP

class UNotificatin_BrightAnim_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimScaleLoop;                                            // 0x0290 (size: 0x8)
    bool bVisible;                                                                    // 0x0298 (size: 0x1)

    void Hide();
    void Show();
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_Notificatin_BrightAnim(int32 EntryPoint);
}; // Size: 0x299

#endif
