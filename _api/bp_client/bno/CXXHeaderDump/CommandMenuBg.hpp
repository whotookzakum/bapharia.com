#ifndef UE4SS_SDK_CommandMenuBg_HPP
#define UE4SS_SDK_CommandMenuBg_HPP

class UCommandMenuBg_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UCanvasPanel* HelpGrp;                                                      // 0x0290 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_Help;                             // 0x0298 (size: 0x8)
    class UCanvasPanel* TitleHelpGrp;                                                 // 0x02A0 (size: 0x8)
    FCommandMenuBg_COnAnimInFinished OnAnimInFinished;                                // 0x02A8 (size: 0x10)
    void OnAnimInFinished();
    int32 HelpId;                                                                     // 0x02B8 (size: 0x4)
    bool bVisible;                                                                    // 0x02BC (size: 0x1)
    char padding_0[0x3];                                                              // 0x02BD (size: 0x3)
    FCommandMenuBg_COnAnimTabInFinished OnAnimTabInFinished;                          // 0x02C0 (size: 0x10)
    void OnAnimTabInFinished();

    void SetHelpText(int32 ID, FText Text);
    void PlayInOut(bool bVisible, int32 HelpId, FText Text, int32 Pos);
    void PreConstruct(bool IsDesignTime);
    void Construct();
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_0();
    void ExecuteUbergraph_CommandMenuBg(int32 EntryPoint);
    void OnAnimTabInFinished__DelegateSignature();
    void OnAnimInFinished__DelegateSignature();
}; // Size: 0x2D0

#endif
