#ifndef UE4SS_SDK_KeyGuide2_HPP
#define UE4SS_SDK_KeyGuide2_HPP

class UKeyGuide2_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetSwitcher* Disp;                                                      // 0x0280 (size: 0x8)
    class UKeyGuide_Gamepad2_C* KeyGuide_Gamepad2;                                    // 0x0288 (size: 0x8)
    class UKeyGuide_Gamepad2_CheerfulItem_C* KeyGuide_Gamepad2_CheerfulItem;          // 0x0290 (size: 0x8)
    class UKeyGuide_Gamepad2_cty_C* KeyGuide_Gamepad2_cty;                            // 0x0298 (size: 0x8)
    class UKeyGuide_Gamepad2_Mount_C* KeyGuide_Gamepad2_Mount;                        // 0x02A0 (size: 0x8)
    class UKeyGuide_Gamepad2_OfflineBattle_C* KeyGuide_Gamepad2_OfflineBattle;        // 0x02A8 (size: 0x8)
    class UKeyGuide_Mouse2_C* KeyGuide_Mouse2;                                        // 0x02B0 (size: 0x8)
    class UKeyGuide_Mouse2_CheerfulItem_C* KeyGuide_Mouse2_CheerfulItem;              // 0x02B8 (size: 0x8)
    class UKeyGuide_Mouse2_cty_C* KeyGuide_Mouse2_cty;                                // 0x02C0 (size: 0x8)
    class UKeyGuide_Mouse2_Mount_C* KeyGuide_Mouse2_Mount;                            // 0x02C8 (size: 0x8)
    class UKeyGuide_Mouse2_OfflineBattle_C* KeyGuide_Mouse2_OfflineBattle;            // 0x02D0 (size: 0x8)
    bool bShowGamepad;                                                                // 0x02D8 (size: 0x1)
    bool bIsInitKeyGuideSettingDone;                                                  // 0x02D9 (size: 0x1)
    TEnumAsByte<EKeyGuideType::Type> CurrKeyGuideType;                                // 0x02DA (size: 0x1)
    bool IsDesignTime;                                                                // 0x02DB (size: 0x1)
    char padding_0[0x4];                                                              // 0x02DC (size: 0x4)
    class USBPlayerAdventurerComponent* AdvComponent;                                 // 0x02E0 (size: 0x8)
    bool IsMounting;                                                                  // 0x02E8 (size: 0x1)
    bool IsCheerfulItem;                                                              // 0x02E9 (size: 0x1)
    char padding_1[0x6];                                                              // 0x02EA (size: 0x6)
    FKeyGuide2_COnChangeKeyGuideVisibilityEvent OnChangeKeyGuideVisibilityEvent;      // 0x02F0 (size: 0x10)
    void OnChangeKeyGuideVisibilityEvent();
    int32 VisibleAdventureRank;                                                       // 0x0300 (size: 0x4)
    char padding_2[0x4];                                                              // 0x0304 (size: 0x4)
    FKeyGuide2_COnChangeMountEvent OnChangeMountEvent;                                // 0x0308 (size: 0x10)
    void OnChangeMountEvent(bool IsMount);
    class ASBPlayerCharacter* As SBPlayer Character;                                  // 0x0318 (size: 0x8)
    FKeyGuide2_COnCheerfulItemEvent OnCheerfulItemEvent;                              // 0x0320 (size: 0x10)
    void OnCheerfulItemEvent(bool IsCheerfulItem);
    class UUserWidget* tmpNextActiveWidget;                                           // 0x0330 (size: 0x8)
    FTimerHandle SettingTimer;                                                        // 0x0338 (size: 0x8)

    void ExecChangeKeyGuide();
    FSBPlayerClassKeyConfigData GetPlayerClassKeyConfigData();
    void SetIsMount(bool& RetValue);
    void SetKeyConfig_OfflineBattle(bool& RetValue);
    void SetKeyConfig_Cty(bool& RetValue);
    void SetCheerfulItem(bool& RetValue);
    void SetKeyConfig(bool& RetValue);
    void IsKeyGuideAuto(bool& bAuto);
    void Construct();
    void ChangeKeyGuide(TEnumAsByte<EKeyGuideType::Type> InKeyGuideType);
    void ChangeKeyGuideVisibility();
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
    void ExecuteUbergraph_KeyGuide2(int32 EntryPoint);
    void OnCheerfulItemEvent__DelegateSignature(bool IsCheerfulItem);
    void OnChangeMountEvent__DelegateSignature(bool IsMount);
    void OnChangeKeyGuideVisibilityEvent__DelegateSignature();
}; // Size: 0x340

#endif
