#ifndef UE4SS_SDK_BattleInfoHUD_HPP
#define UE4SS_SDK_BattleInfoHUD_HPP

class UBattleInfoHUD_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UOverlay* Combination;                                                      // 0x0280 (size: 0x8)
    class UTextBlock* CombinationNumber;                                              // 0x0288 (size: 0x8)
    class UTextBlock* CombinationTimer;                                               // 0x0290 (size: 0x8)
    class UComboHUD_C* ComboHUD;                                                      // 0x0298 (size: 0x8)
    class UHitIndicator_C* HitIndicator;                                              // 0x02A0 (size: 0x8)
    class UInstanceDungeonBattleinfoHUD_C* InstanceDungeonBattleinfoHUD;              // 0x02A8 (size: 0x8)
    class UInteractNotice_C* InteractNotice;                                          // 0x02B0 (size: 0x8)
    class URespawnHUD_C* RespawnHUD;                                                  // 0x02B8 (size: 0x8)
    class USimpleAlert_C* SimpleAlert;                                                // 0x02C0 (size: 0x8)
    TEnumAsByte<HUDUI::Type> LayoutingUI;                                             // 0x02C8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02C9 (size: 0x3)
    int32 ScreenWidth;                                                                // 0x02CC (size: 0x4)
    int32 ScreenHeight;                                                               // 0x02D0 (size: 0x4)
    bool KeyBoard;                                                                    // 0x02D4 (size: 0x1)
    char padding_1[0x3];                                                              // 0x02D5 (size: 0x3)
    class UPlaceGuide_C* PlaceGuide2;                                                 // 0x02D8 (size: 0x8)
    class UTickerMessage_C* TickerMessage;                                            // 0x02E0 (size: 0x8)
    class UTutorialHelpDialogBox_C* TutorialHelpWidget;                               // 0x02E8 (size: 0x8)
    FName TutorialHelpId;                                                             // 0x02F0 (size: 0x8)
    bool isCheckTutorialHelp;                                                         // 0x02F8 (size: 0x1)

    void GetRespawnHUD(class URespawnHUD_C*& RespawnHUD);
    void GetHitIndicator(class UHitIndicator_C*& HitIndicator);
    ESlateVisibility Get_Countdown_Visibility_0();
    void IsAllHUDCreated(bool& OutIsCreated);
    FText Get_CombinationTimer_Text_0();
    FText Get_CombinationNumber_Text_0();
    ESlateVisibility Get_Combination_Visibility_0();
    FText Get_PartyLevel();
    FText Get_NextValue();
    FText Get_PartyEngram();
    void InitTutorialHelp_Event();
    void JingleTutorialHelp_Events(FName TutorialHelpId);
    void OnTutorialHelp_Close();
    void UnbindTutorialHelpJingleDelegate();
    void InitWeaponEvents();
    void Construct();
    void UIVisibleSettingChangeDelegate_Event_0(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void OnShowCombo_Event(int32 Combo);
    void OnShowRespawn_Event(float InRespawnTime);
    void OnDisableRespawn_Event();
    void UpdateInteractionNotice();
    void OnShowRespawnBattleArea_Event();
    void BattleAreaDisableMessage();
    void Destruct();
    void OnUpdateRespawnGauge();
    void ExecuteUbergraph_BattleInfoHUD(int32 EntryPoint);
}; // Size: 0x2F9

#endif
