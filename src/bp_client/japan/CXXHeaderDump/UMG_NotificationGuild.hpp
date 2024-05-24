#ifndef UE4SS_SDK_UMG_NotificationGuild_HPP
#define UE4SS_SDK_UMG_NotificationGuild_HPP

class UUMG_NotificationGuild_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UImage* Bg1_3;                                                              // 0x0288 (size: 0x8)
    class UImage* Bg2;                                                                // 0x0290 (size: 0x8)
    class UImage* Image;                                                              // 0x0298 (size: 0x8)
    class UNotificatin_BrightAnim_C* Notificatin_BrightAnim;                          // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitchGuild;                                               // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* TxtInviteReceived;                                     // 0x02B0 (size: 0x8)
    class UTextBlock* TxtInviteReceivedCount;                                         // 0x02B8 (size: 0x8)
    class UNotification_DotAnim_C* UMG_Notification_DotAnim;                          // 0x02C0 (size: 0x8)
    bool IsShowIn;                                                                    // 0x02C8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02C9 (size: 0x3)
    int32 WaitTime;                                                                   // 0x02CC (size: 0x4)
    int32 WaitCount;                                                                  // 0x02D0 (size: 0x4)
    char padding_1[0x4];                                                              // 0x02D4 (size: 0x4)
    FTimerHandle TimerHandle;                                                         // 0x02D8 (size: 0x8)
    class ASBPlayerController* SBPlayerController;                                    // 0x02E0 (size: 0x8)
    class UUMG_MultipleSelectDialog_C* MultiDialog;                                   // 0x02E8 (size: 0x8)
    FText InviteGuildText;                                                            // 0x02F0 (size: 0x18)

    void GetInviteGuildName();
    void Construct();
    void Init();
    void OnInviteArrived_Event();
    void AppearIn();
    void Disappear();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnTimer();
    void OpenNotificationDialog();
    void GetResultMultipleDialog(int32 Result);
    void OnBtnAccept();
    void OnBtnReserve();
    void OnBtnCancel();
    void CloseDialog(ENotificationDialogStatus DialogStatus);
    void OnGuildInviteResponse(bool isAccept);
    void ExecuteUbergraph_UMG_NotificationGuild(int32 EntryPoint);
}; // Size: 0x308

#endif
