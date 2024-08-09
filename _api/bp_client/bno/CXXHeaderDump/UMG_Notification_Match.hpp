#ifndef UE4SS_SDK_UMG_Notification_Match_HPP
#define UE4SS_SDK_UMG_Notification_Match_HPP

class UUMG_Notification_Match_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UTextBlock* Applying_CurNumText;                                            // 0x0288 (size: 0x8)
    class UTextBlock* Applying_MaxNumText;                                            // 0x0290 (size: 0x8)
    class UNotificatin_BrightAnim_C* Notificatin_BrightAnim;                          // 0x0298 (size: 0x8)
    class UWidgetSwitcher* SwitchMatching;                                            // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* TxtAccepted;                                           // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* TxtAccepting;                                          // 0x02B0 (size: 0x8)
    class UTextBlock* TxtAcceptingCount;                                              // 0x02B8 (size: 0x8)
    class USBRuntimeTextBlock* TxtApplying;                                           // 0x02C0 (size: 0x8)
    class USBRuntimeTextBlock* TxtPartyMemberParticipating;                           // 0x02C8 (size: 0x8)
    bool bVisible;                                                                    // 0x02D0 (size: 0x1)
    bool IsPlaySE;                                                                    // 0x02D1 (size: 0x1)
    char padding_0[0x6];                                                              // 0x02D2 (size: 0x6)
    FText KeyConfigText;                                                              // 0x02D8 (size: 0x18)
    bool IsMouseMode;                                                                 // 0x02F0 (size: 0x1)
    char padding_1[0x7];                                                              // 0x02F1 (size: 0x7)
    FText TxtAcceptedCopy;                                                            // 0x02F8 (size: 0x18)
    FText TxtAcceptingCopy;                                                           // 0x0310 (size: 0x18)
    FText TxtApplyingCopy;                                                            // 0x0328 (size: 0x18)
    FText TxtPartyMemberParticipatingCopy;                                            // 0x0340 (size: 0x18)
    float ConfirmLimitTime_Pre;                                                       // 0x0358 (size: 0x4)
    float ConfirmLimitTime_Now;                                                       // 0x035C (size: 0x4)
    int32 ParticipantNumber_Pre;                                                      // 0x0360 (size: 0x4)
    int32 ParticipantNumber_Now;                                                      // 0x0364 (size: 0x4)
    bool bShowSystemMessage;                                                          // 0x0368 (size: 0x1)

    void UpdateParticipantNumber();
    void UpdateConfirmTime();
    void HideBright();
    void ShowBright();
    void PlayAnimationForwardIfNotVisible();
    void SetMatchingText(class UTextBlock* OutText, FText BaseText);
    void GetOperateMode();
    void GetQuickAccessKeyText();
    FText Get_Accepting_CountText_Text_0();
    FText Get_Applying_MaxNumText_Text_0();
    FText Get_Applying_CurNumText_Text_0();
    void Init();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void Construct();
    void OnUpdateKeyConfig();
    void ChangeKeyGuide();
    void Destruct();
    void ExecuteUbergraph_UMG_Notification_Match(int32 EntryPoint);
}; // Size: 0x369

#endif
