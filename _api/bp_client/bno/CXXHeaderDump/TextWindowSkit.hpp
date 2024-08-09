#ifndef UE4SS_SDK_TextWindowSkit_HPP
#define UE4SS_SDK_TextWindowSkit_HPP

class UTextWindowSkit_C : public USBTextWindow
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0298 (size: 0x8)
    class UWidgetAnimation* AnimIn_WithoutBg;                                         // 0x02A0 (size: 0x8)
    class UWidgetAnimation* AnimOut_WithoutBg;                                        // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimTextIn;                                               // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimWaitUserInputPressed;                                 // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimWaitUserInputLoop;                                    // 0x02C0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02C8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02D0 (size: 0x8)
    class UImage* Bg1;                                                                // 0x02D8 (size: 0x8)
    class UImage* Bg2;                                                                // 0x02E0 (size: 0x8)
    class UImage* ImgWaitUserInput;                                                   // 0x02E8 (size: 0x8)
    class UImage* ImgWaitUserInputPressed;                                            // 0x02F0 (size: 0x8)
    class UTextBlock* LabelSpeaker;                                                   // 0x02F8 (size: 0x8)
    class UImage* Line1;                                                              // 0x0300 (size: 0x8)
    class UImage* Line2;                                                              // 0x0308 (size: 0x8)
    class UImage* Line3;                                                              // 0x0310 (size: 0x8)
    class USBRichTextBlock* TextBox;                                                  // 0x0318 (size: 0x8)
    class UCanvasPanel* TextWindowGrp;                                                // 0x0320 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0328 (size: 0x8)
    bool AutoCloseFlag;                                                               // 0x0330 (size: 0x1)
    bool bActive;                                                                     // 0x0331 (size: 0x1)
    bool bSetText;                                                                    // 0x0332 (size: 0x1)
    bool bShowAnimationEnd;                                                           // 0x0333 (size: 0x1)
    bool bWaitUserInputMarkEnable;                                                    // 0x0334 (size: 0x1)
    bool bPressedAnimStarted;                                                         // 0x0335 (size: 0x1)
    bool bIsHideWithoutBG;                                                            // 0x0336 (size: 0x1)

    bool GetBGVisible();
    void SetBGOpacity(float Opacity);
    bool IsShow();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void Destruct();
    void CustomEvent_0();
    void CustomEvent_1();
    void CustomEvent_2();
    void OnInputKey();
    void CustomEvent_3();
    void Construct();
    void SetText(const FText& InText);
    void Hide();
    void Show();
    void SetSpeaker(const FName& InProfileId);
    void SetNextMarkVisibility(const bool bInVisibility);
    void HideWithoutBG();
    void SetBGVisible(bool bVisible);
    void ExecuteUbergraph_TextWindowSkit(int32 EntryPoint);
}; // Size: 0x337

#endif
