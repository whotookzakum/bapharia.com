#ifndef UE4SS_SDK_UMG_Notifications_HPP
#define UE4SS_SDK_UMG_Notifications_HPP

class UUMG_Notifications_C : public UUserWidget
{
    class UUMG_NotificationGuild_C* Guild;                                            // 0x0278 (size: 0x8)
    class UUMG_Notification_Match_C* Match;                                           // 0x0280 (size: 0x8)
    class UUMG_Notification_Party_C* Party;                                           // 0x0288 (size: 0x8)

    ESlateVisibility Get_PartyInvitationReceivedIcon_Visibility_0();
}; // Size: 0x290

#endif
