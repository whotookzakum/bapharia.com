#ifndef UE4SS_SDK_UMG_PartyMenu_Button_HPP
#define UE4SS_SDK_UMG_PartyMenu_Button_HPP

class UUMG_PartyMenu_Button_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimUnHovered;                                            // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimUnSelected;                                           // 0x0290 (size: 0x8)
    class UWidgetAnimation* AnimSelected;                                             // 0x0298 (size: 0x8)
    class UImage* BgGrd;                                                              // 0x02A0 (size: 0x8)
    class UCommandMenu_BtnEffect_C* CommandMenu_BtnEffect;                            // 0x02A8 (size: 0x8)
    class USBButton_C* ContentButton;                                                 // 0x02B0 (size: 0x8)
    class UTextBlock* CurrentMemberCountText;                                         // 0x02B8 (size: 0x8)
    class UImage* EffectImage;                                                        // 0x02C0 (size: 0x8)
    class UImage* Icon1;                                                              // 0x02C8 (size: 0x8)
    class UImage* IconBase;                                                           // 0x02D0 (size: 0x8)
    class UCanvasPanel* InvitedGrp;                                                   // 0x02D8 (size: 0x8)
    class UImage* LineEffect;                                                         // 0x02E0 (size: 0x8)
    class UImage* LineImage;                                                          // 0x02E8 (size: 0x8)
    class UTextBlock* MaxMemberCountText;                                             // 0x02F0 (size: 0x8)
    class UHorizontalBox* MemberCountGrp;                                             // 0x02F8 (size: 0x8)
    class UCanvasPanel* NoPartyGrp;                                                   // 0x0300 (size: 0x8)
    class UCanvasPanel* PartyGrp;                                                     // 0x0308 (size: 0x8)
    class UWidgetSwitcher* SwitchMessage;                                             // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x0318 (size: 0x8)
    FUMG_PartyMenu_Button_COnOpernPartyMenu OnOpernPartyMenu;                         // 0x0320 (size: 0x10)
    void OnOpernPartyMenu();
    TEnumAsByte<EPartyButtonType::Type> CurrentStatus;                                // 0x0330 (size: 0x1)
    TEnumAsByte<EPartyButtonType::Type> PrevStatus;                                   // 0x0331 (size: 0x1)
    bool bActive;                                                                     // 0x0332 (size: 0x1)

    void SetBtn(bool bActive);
    void PlayBtnAnim(bool bInActive);
    void SetButtonType(TEnumAsByte<EPartyButtonType::Type> Type);
    void CustomEvent_0(const EYesNoDialogResult Result);
    void ResetButtonState();
    void CustomEvent_1(const int32 SelectIndex);
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_36_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_55_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_19_OnButtonClickedEvent__DelegateSignature();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void Construct();
    void PartyUnbindDelegates();
    void Destruct();
    void ExecuteUbergraph_UMG_PartyMenu_Button(int32 EntryPoint);
    void OnOpernPartyMenu__DelegateSignature();
}; // Size: 0x333

#endif
