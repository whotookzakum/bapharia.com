#ifndef UE4SS_SDK_CommandMenu_MenuItem_HPP
#define UE4SS_SDK_CommandMenu_MenuItem_HPP

class UCommandMenu_MenuItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimUnHovered;                                            // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimUnSelected;                                           // 0x0290 (size: 0x8)
    class UWidgetAnimation* AnimSelected;                                             // 0x0298 (size: 0x8)
    class UImage* BgGrd;                                                              // 0x02A0 (size: 0x8)
    class USBButton_C* BtnHit;                                                        // 0x02A8 (size: 0x8)
    class UCommandMenu_BtnEffect_C* CommandMenu_BtnEffect;                            // 0x02B0 (size: 0x8)
    class UImage* EffectImage;                                                        // 0x02B8 (size: 0x8)
    class UImage* Icon1;                                                              // 0x02C0 (size: 0x8)
    class UImage* IconNew;                                                            // 0x02C8 (size: 0x8)
    class UImage* Img_MailAleat;                                                      // 0x02D0 (size: 0x8)
    class UImage* Img_MailWarn;                                                       // 0x02D8 (size: 0x8)
    class UImage* LineEffect;                                                         // 0x02E0 (size: 0x8)
    class UImage* LineImage;                                                          // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x02F0 (size: 0x8)
    class UWidgetSwitcher* WS_Aleats;                                                 // 0x02F8 (size: 0x8)
    FCommandMenu_MenuItem_COnSelect OnSelect;                                         // 0x0300 (size: 0x10)
    void OnSelect(class UCommandMenu_MenuItem_C* Button);
    FCommandMenu_MenuConfig Config;                                                   // 0x0310 (size: 0x18)
    bool bActive;                                                                     // 0x0328 (size: 0x1)

    void UpdateMailRestrictions(bool Aleat, bool Warning);
    void IsActiveExcramation(bool& Active);
    void SetBtn(bool bActive);
    void SetBtnTextColor(bool bActive);
    void GetMenuType(ESBCommandMenuType& MenuType);
    void Play Btn Anim(bool bActive);
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_51_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_76_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_97_OnButtonHoverEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void ShowExcramation(bool bIsShow);
    void ExecuteUbergraph_CommandMenu_MenuItem(int32 EntryPoint);
    void OnSelect__DelegateSignature(class UCommandMenu_MenuItem_C* Button);
}; // Size: 0x329

#endif
