#ifndef UE4SS_SDK_CommandMenu_Guild_Button_HPP
#define UE4SS_SDK_CommandMenu_Guild_Button_HPP

class UCommandMenu_Guild_Button_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimUnHovered;                                            // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimUnSelected;                                           // 0x0290 (size: 0x8)
    class UWidgetAnimation* AnimSelected;                                             // 0x0298 (size: 0x8)
    class UImage* BgGrd;                                                              // 0x02A0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_ValidEvent;                                       // 0x02A8 (size: 0x8)
    class UCommandMenu_BtnEffect_C* CommandMenu_BtnEffect;                            // 0x02B0 (size: 0x8)
    class USBButton_C* ContentButton;                                                 // 0x02B8 (size: 0x8)
    class UImage* EffectImage;                                                        // 0x02C0 (size: 0x8)
    class UImage* Icon1;                                                              // 0x02C8 (size: 0x8)
    class UImage* IconBase;                                                           // 0x02D0 (size: 0x8)
    class UImage* IconNew;                                                            // 0x02D8 (size: 0x8)
    class UImage* LineEffect;                                                         // 0x02E0 (size: 0x8)
    class UImage* LineImage;                                                          // 0x02E8 (size: 0x8)
    class UCanvasPanel* NormalGrp;                                                    // 0x02F0 (size: 0x8)
    class UWidgetSwitcher* SwitchMessage;                                             // 0x02F8 (size: 0x8)
    class UCanvasPanel* TitleGrp;                                                     // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x0308 (size: 0x8)
    FCommandMenu_Guild_Button_COpenGuildMenu OpenGuildMenu;                           // 0x0310 (size: 0x10)
    void OpenGuildMenu();
    bool IsActive;                                                                    // 0x0320 (size: 0x1)

    void SetBtn(bool bActive);
    void IsUpdateMatch(bool& Ret);
    void PlayBtnAnim(bool bInActive);
    FText Get_NowConfirmCountText_Text_0();
    FText Get_MaxConfirmCountText_Text_0();
    ESlateVisibility Get_MatchingText_Visibility_0();
    void IsParticipantNumberCompleted(bool& bCompleted);
    FText Get_NeedParticipantSizeText_Text_0();
    ESlateVisibility Get_ServerWaitText_Visibility_0();
    FText Get_NowParticipantSizeText_Text_0();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_27_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_37_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_56_OnButtonHoverEvent__DelegateSignature();
    void UpdateExclamation(bool IsShow);
    void Construct();
    void ExecuteUbergraph_CommandMenu_Guild_Button(int32 EntryPoint);
    void OpenGuildMenu__DelegateSignature();
}; // Size: 0x321

#endif
