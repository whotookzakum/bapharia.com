#ifndef UE4SS_SDK_UMG_Notification_Party_HPP
#define UE4SS_SDK_UMG_Notification_Party_HPP

class UUMG_Notification_Party_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimPush;                                                 // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0290 (size: 0x8)
    class UImage* Bg1_2;                                                              // 0x0298 (size: 0x8)
    class UImage* Bg2_ChannelMigrationCount;                                          // 0x02A0 (size: 0x8)
    class UImage* Bg2_InviteCount;                                                    // 0x02A8 (size: 0x8)
    class UImage* CircleGauge_LeaveParty;                                             // 0x02B0 (size: 0x8)
    class UImage* CircleGauge_Off;                                                    // 0x02B8 (size: 0x8)
    class UImage* CircleGauge_Push;                                                   // 0x02C0 (size: 0x8)
    class UImage* GaugeBg_LeaveParty;                                                 // 0x02C8 (size: 0x8)
    class UImage* GaugeBg_Off;                                                        // 0x02D0 (size: 0x8)
    class UImage* GaugeBg_Push;                                                       // 0x02D8 (size: 0x8)
    class UImage* Image;                                                              // 0x02E0 (size: 0x8)
    class UImage* Image_84;                                                           // 0x02E8 (size: 0x8)
    class UImage* Image_Simplycity;                                                   // 0x02F0 (size: 0x8)
    class UNotificatin_BrightAnim_C* Notificatin_BrightAnim;                          // 0x02F8 (size: 0x8)
    class UWidgetSwitcher* SwitchParty;                                               // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* TxtChannelMigration;                                   // 0x0308 (size: 0x8)
    class UTextBlock* TxtChannelMigrationAnswerCount;                                 // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* TxtInvitation;                                         // 0x0318 (size: 0x8)
    class UTextBlock* TxtInviteReceivedCount;                                         // 0x0320 (size: 0x8)
    class USBRuntimeTextBlock* TxtSimplycityOn;                                       // 0x0328 (size: 0x8)
    class USBRuntimeTextBlock* TxtSimplycityOn_LeaveParty;                            // 0x0330 (size: 0x8)
    class USBRuntimeTextBlock* TxtSimplycityOn_Push;                                  // 0x0338 (size: 0x8)
    class UNotification_DotAnim_C* UMG_Notification_DotAnim;                          // 0x0340 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_197;                                        // 0x0348 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_Bg;                                         // 0x0350 (size: 0x8)
    bool bVisible;                                                                    // 0x0358 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0359 (size: 0x7)
    FText KeyConfigText;                                                              // 0x0360 (size: 0x18)
    bool IsMouseMode;                                                                 // 0x0378 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0379 (size: 0x7)
    FText KeyConfigTextBlank;                                                         // 0x0380 (size: 0x18)
    FText TxtConvocationCopy;                                                         // 0x0398 (size: 0x18)
    FText TxtInvitationCopy;                                                          // 0x03B0 (size: 0x18)
    class USBPartyGameStateGeneral* CurrentPartyGameStateGeneral;                     // 0x03C8 (size: 0x8)
    class ASBPlayerController* SBPlayerController;                                    // 0x03D0 (size: 0x8)
    FText InvitePlayerName;                                                           // 0x03D8 (size: 0x18)
    class UUMG_MultipleSelectDialog_C* MultiDialog;                                   // 0x03F0 (size: 0x8)
    FPlayerProfileMenuDetailData InvitePlayerProfile;                                 // 0x03F8 (size: 0x298)
    bool IsFavoritePlayer;                                                            // 0x0690 (size: 0x1)
    char padding_2[0x7];                                                              // 0x0691 (size: 0x7)
    class UPlayerProfile_C* PlayerProfileWidget;                                      // 0x0698 (size: 0x8)
    float ChannelMigrationAnswerRemainTime;                                           // 0x06A0 (size: 0x4)
    float EickDeltaTime;                                                              // 0x06A4 (size: 0x4)
    class UBP_Dialog_C* PartyMigrationAnswerDialog;                                   // 0x06A8 (size: 0x8)
    int32 Migration Response Code;                                                    // 0x06B0 (size: 0x4)
    char padding_3[0x4];                                                              // 0x06B4 (size: 0x4)
    class ASBPlayerState* PlayerState;                                                // 0x06B8 (size: 0x8)
    TEnumAsByte<E_NotificationPartyStatus::Type> StatusData;                          // 0x06C0 (size: 0x1)
    char padding_4[0x7];                                                              // 0x06C1 (size: 0x7)
    class UMaterialInstanceDynamic* GaugeMatOn;                                       // 0x06C8 (size: 0x8)
    class UMaterialInstanceDynamic* GaugeMatOff;                                      // 0x06D0 (size: 0x8)
    bool IsPush;                                                                      // 0x06D8 (size: 0x1)
    char padding_5[0x7];                                                              // 0x06D9 (size: 0x7)
    class UMaterialInstanceDynamic* GaugeMatLeave;                                    // 0x06E0 (size: 0x8)
    bool StopPush;                                                                    // 0x06E8 (size: 0x1)

    void IsPressStatus(bool& Press);
    void IsPress(bool& Press);
    void Get Change Time(float& Tiem);
    float Get Status Time();
    void NotificationConvocationMessage();
    void ResetPartyDialogState();
    void Can Open Party Member Migration Dialog(bool& Result);
    void HideNotification();
    bool IsOwningPlayerPartyLeader();
    void GetCurrentPartyMemberStateGeneral(class USBPartyMemberStateGeneral*& CurrentPartyMemberStateGeneral);
    void PartyMigrationAnswerRemainTimeCounter();
    void CanCreateInviteMessage(bool& bResult);
    void CanAcceptInvite(bool& bResult);
    void SetPartyText(class UTextBlock* OutText, FText BaseText);
    void GetOperateMode();
    void GetQuickAccessKeyText();
    FText Get_InviteReceived_CountText_Text_0();
    ESlateVisibility Get_JumpConvocation_Visibility_0();
    ESlateVisibility Get_InviteReceived_Visibility_0();
    void Init();
    void OnUpdateKeyConfig();
    void ChangeKeyGuide();
    void GetResultMultipleDialog(int32 Result);
    void OnBtnCancel();
    void OnBtnAccept();
    void OnBtnProfile();
    void OnBtnReserve();
    void OnCancelMatching_Dialog_Event(const EYesNoDialogResult Result);
    void OnPartyInviteResponse_Event(bool isAccept);
    void OnDestruct_Event(FPlayerProfileMenuDetailData retData);
    void OnResponsedGetPlayerProfile(const bool bWasSuccessful, const FPlayerProfileMenuDetailData& PlayerProfileDetailMenuData, const int32 RetCode);
    void CloseDialog();
    void OpenNotificationDialog();
    void OpenProfile();
    void OpenMigrationAnswerDialog();
    void PartyMigrationAnswer_Event(EDialogResult Result);
    void CloseMigrationAnswerDialog();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void Construct();
    void OnChangeInvitePartyConvocationDelegate_Event(bool bCanceled, int32 MigrationResponseCode);
    void Destruct();
    void DialogEndCheck();
    void CustomEvent_0(EDialogResult Result);
    void OnPartyInviteReceived_Event();
    void OnJoinInviteParty_Event();
    void PartyUpdate(TEnumAsByte<E_NotificationPartyStatus::Type> Status);
    void ExecuteUbergraph_UMG_Notification_Party(int32 EntryPoint);
}; // Size: 0x6E9

#endif
