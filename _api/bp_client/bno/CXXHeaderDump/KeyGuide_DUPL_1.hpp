#ifndef UE4SS_SDK_KeyGuide_DUPL_1_HPP
#define UE4SS_SDK_KeyGuide_DUPL_1_HPP

class UKeyGuide_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetSwitcher* Disp;                                                      // 0x0280 (size: 0x8)
    class UKeyGuide_Gamepad_C* KeyGuide_Gamepad;                                      // 0x0288 (size: 0x8)
    class UKeyGuide_Gamepad_OfflineBattle_C* KeyGuide_Gamepad_OfflineBattle;          // 0x0290 (size: 0x8)
    class UKeyGuide_Mouse_C* KeyGuide_Mouse;                                          // 0x0298 (size: 0x8)
    class UKeyGuide_Mouse_OfflineBattle_C* KeyGuide_Mouse_OfflineBattle;              // 0x02A0 (size: 0x8)
    bool bShowGamepad;                                                                // 0x02A8 (size: 0x1)
    TEnumAsByte<EKeyGuideType::Type> CurrKeyGuideType;                                // 0x02A9 (size: 0x1)
    bool IsDesignTime;                                                                // 0x02AA (size: 0x1)
    char padding_0[0x5];                                                              // 0x02AB (size: 0x5)
    class USBPlayerAdventurerComponent* AdvComponent;                                 // 0x02B0 (size: 0x8)
    bool bVisible;                                                                    // 0x02B8 (size: 0x1)
    ESkillActionPosition SkillActionPosition;                                         // 0x02B9 (size: 0x1)
    bool IsMounting;                                                                  // 0x02BA (size: 0x1)
    char padding_1[0x5];                                                              // 0x02BB (size: 0x5)
    FKeyGuide_COnChangeKeyGuideVisibilityEvent OnChangeKeyGuideVisibilityEvent;       // 0x02C0 (size: 0x10)
    void OnChangeKeyGuideVisibilityEvent();
    int32 VisibleAdventureRank;                                                       // 0x02D0 (size: 0x4)
    char padding_2[0x4];                                                              // 0x02D4 (size: 0x4)
    class UUserWidget* tmpNextActiveWidget;                                           // 0x02D8 (size: 0x8)
    FTimerHandle SettingTimer;                                                        // 0x02E0 (size: 0x8)
    int32 VisibleAdventureRank_0;                                                     // 0x02E8 (size: 0x4)

    void ExecChangeKeyGuide();
    void SetKeyGuide_CheerfulItem();
    void SetKeyGuide_Mount();
    void SetKeyGuide_OfflineBattle();
    void UpdateTextVisible();
    void SetTextVisible(ESkillActionPosition SkillActionPosition, bool IsVisible);
    void IsKeyGuideAuto(bool& bAuto);
    void Construct();
    void ChangeKeyGuide(TEnumAsByte<EKeyGuideType::Type> InKeyGuideType);
    void ChangeKeyGuideVisibility(bool IsVisible);
    void OnUpdateKeyConfig();
    void OnRetryKeyGuideType();
    void PreConstruct(bool IsDesignTime);
    void OnAdventurerRankDelegate_Event(const int32 InRetCode);
    void ChangeKeyGuideVisibilityAuto();
    void SetEditMode(bool bIsEdit);
    void UnbindAdventurerRankDelegate();
    void Destruct();
    void UnbindUpdateKeyConfigDelegate();
    void CustomEvent_0(class UObject* Sender, class UObject* Param);
    void OnChangePad(const ESBPadKeySkinType SkinType);
    void Bind Pad Skin Change();
    void Unbind Pad Skin Change();
    void InitKeyGuideSettingTimerEvent();
    void ExecuteUbergraph_KeyGuide(int32 EntryPoint);
    void OnChangeKeyGuideVisibilityEvent__DelegateSignature();
}; // Size: 0x2EC

#endif
