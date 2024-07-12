#ifndef UE4SS_SDK_ChatUnreadNotify_HPP
#define UE4SS_SDK_ChatUnreadNotify_HPP

class UChatUnreadNotify_C : public USBChatLogWindow
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimInOut;                                                // 0x02B8 (size: 0x8)
    class UCaptureImageChatUnread_C* CaptureImageChatUnread;                          // 0x02C0 (size: 0x8)
    class UChatLogIcon1_C* ChatLogIcon1;                                              // 0x02C8 (size: 0x8)
    class UImage* MessageBG;                                                          // 0x02D0 (size: 0x8)
    class USizeBox* SizeBox_Message;                                                  // 0x02D8 (size: 0x8)
    class UStampWidget_C* StampWidget;                                                // 0x02E0 (size: 0x8)
    class UTextBlock* TxtMessage;                                                     // 0x02E8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_178;                                        // 0x02F0 (size: 0x8)
    int32 Filter Type;                                                                // 0x02F8 (size: 0x4)
    int32 Detail Filter Type;                                                         // 0x02FC (size: 0x4)
    bool bAnimDelay;                                                                  // 0x0300 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0301 (size: 0x3)
    float EllipsisWidthSize;                                                          // 0x0304 (size: 0x4)
    bool Is Chat Unread Notify;                                                       // 0x0308 (size: 0x1)
    bool IsReceiveMessageDelegate;                                                    // 0x0309 (size: 0x1)
    char padding_1[0x2];                                                              // 0x030A (size: 0x2)
    int32 MainLogSelectTab;                                                           // 0x030C (size: 0x4)
    bool IsEnableSub1;                                                                // 0x0310 (size: 0x1)
    bool IsEnableSub2;                                                                // 0x0311 (size: 0x1)

    void InitChatLogData();
    void CheckMessageWidth(FString inString, bool IsEllipsisWidthSize, bool& Exceeded);
    void SetTextOverflowEllipsis(FString InStr);
    void VisibleCheck(FSBChatUIMessage ChatUIMessage, bool& bResult);
    void UpdateFilter(TEnumAsByte<ESBChatLogWindowSlot::Type> Slot);
    void SetMessage(FSBChatUIMessage InChatUIMessage);
    void Construct();
    void DownLoadFaceImage_Event(FString URL);
    void WidgetAnimationEvt_AnimInOut_K2Node_WidgetAnimationEvent_0();
    void PlayAnim();
    void Destruct();
    void OnReciveMessageToUnreadNotify_Event(const TEnumAsByte<ESBChatLogWindowSlot::Type> Slot, const FSBChatUIMessage& UIMessage);
    void OnReceiveMessageDelegate_Event(const class USBChatMessage* Message, const FSBChatUIMessage Mess);
    void ExecuteUbergraph_ChatUnreadNotify(int32 EntryPoint);
}; // Size: 0x312

#endif
