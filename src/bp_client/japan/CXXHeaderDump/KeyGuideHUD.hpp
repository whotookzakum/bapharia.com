#ifndef UE4SS_SDK_KeyGuideHUD_HPP
#define UE4SS_SDK_KeyGuideHUD_HPP

class UKeyGuideHUD_C : public USBKeyGuideHUDWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0280 (size: 0x8)
    class UWidgetAnimation* InAnim;                                                   // 0x0288 (size: 0x8)
    class UKeyGuide_C* KeyGuide_95;                                                   // 0x0290 (size: 0x8)
    class UKeyGuide2_C* KeyGuide2_53;                                                 // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* KeyGuide_GamepadTitleText;                             // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* KeyGuide_KBTitleText;                                  // 0x02A8 (size: 0x8)
    class UImage* KeyGuideBaseImage;                                                  // 0x02B0 (size: 0x8)
    class UCanvasPanel* KeyGuideNaviPanel;                                            // 0x02B8 (size: 0x8)
    class UOverlay* Overlay_106;                                                      // 0x02C0 (size: 0x8)
    class USBTextKeyIcon_C* txtKey;                                                   // 0x02C8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcherTitle;                                       // 0x02D0 (size: 0x8)
    bool IsDesignTime;                                                                // 0x02D8 (size: 0x1)
    bool IsOldMount;                                                                  // 0x02D9 (size: 0x1)
    bool IsOldCheerful;                                                               // 0x02DA (size: 0x1)
    bool IsEditMode;                                                                  // 0x02DB (size: 0x1)
    bool IsInitialize;                                                                // 0x02DC (size: 0x1)
    char padding_0[0x3];                                                              // 0x02DD (size: 0x3)
    FTimerHandle KeyGuide2VisibilityEventTimerHandle;                                 // 0x02E0 (size: 0x8)
    FTimerHandle KeyGuideVisibilityEventTimerHandle;                                  // 0x02E8 (size: 0x8)
    bool IsUIVisibileSettingChangeEnvet;                                              // 0x02F0 (size: 0x1)

    bool IsPlayAnimation();
    void SetKeyGuideNaviVisibility(ESlateVisibility InVisibility);
    void UpdateKeyGuide();
    FSBPlayerClassKeyConfigData GetClassKeyConfig(class ASBPlayerCharacter* ターゲット);
    void GetGamepadPressed(class ASBPlayerCharacter* ターゲット, bool& Result);
    void GetKBPressed(class ASBPlayerCharacter* ターゲット, bool& Result);
    void GetPlayerCharacter(bool& Result, class ASBPlayerCharacter*& AsSBPlayer Character);
    void Is Key Input BP(bool& Result);
    void SetKeyGuideTextVisible(ESkillActionPosition SkillActionPosition, bool IsVisible);
    void Reset();
    void Is Key Guide Animation(bool& Result);
    void ChangeKeyGuide2(TEnumAsByte<EKeyGuideType::Type> InKeyGuideType);
    void ChangeKeyGuide(TEnumAsByte<EKeyGuideType::Type> InKeyGuideType);
    FVector2D GetKeyGuide2Size();
    FVector2D GetKeyGuideSize();
    void ChangeKeyGuide2Visibility();
    void ChangeKeyGuideVisibility();
    void Initialize();
    void PreConstruct(bool IsDesignTime);
    void SetEditMode(bool IsEdit);
    void BndEvt__KeyGuideHUD_KeyGuide2_53_K2Node_ComponentBoundEvent_2_OnChangeMountEvent__DelegateSignature(bool IsMount);
    void CustomEvent_0(bool Result);
    void OnPlayAnim(bool bOpen);
    void OnReset();
    void BndEvt__KeyGuideHUD_KeyGuide2_53_K2Node_ComponentBoundEvent_3_OnCheerfulItemEvent__DelegateSignature(bool IsCheerfulItem);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__KeyGuideHUD_KeyGuide_95_K2Node_ComponentBoundEvent_4_OnChangeKeyGuideVisibilityEvent__DelegateSignature();
    void BndEvt__KeyGuideHUD_KeyGuide2_53_K2Node_ComponentBoundEvent_0_OnChangeKeyGuideVisibilityEvent__DelegateSignature();
    void RetryKeyGuide2VisibilityEvent();
    void RetryKeyGuideVisibilityEvent();
    void Construct();
    void UIVisibleSettingChangeEnvet(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void ExecuteUbergraph_KeyGuideHUD(int32 EntryPoint);
}; // Size: 0x2F1

#endif
