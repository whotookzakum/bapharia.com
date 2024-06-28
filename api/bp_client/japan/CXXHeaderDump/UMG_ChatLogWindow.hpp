#ifndef UE4SS_SDK_UMG_ChatLogWindow_HPP
#define UE4SS_SDK_UMG_ChatLogWindow_HPP

class UUMG_ChatLogWindow_C : public USBChatLogWindow
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x02C8 (size: 0x8)
    class UChatLogWindowList_C* ChatLogWindowList;                                    // 0x02D0 (size: 0x8)
    FUMG_ChatLogWindow_COnChatRoomMessaageReceived OnChatRoomMessaageReceived;        // 0x02D8 (size: 0x10)
    void OnChatRoomMessaageReceived(class USBChatMessage* Message);
    bool bEditMode;                                                                   // 0x02E8 (size: 0x1)
    ESlateVisibility backupBGVisible;                                                 // 0x02E9 (size: 0x1)
    bool bWindowed;                                                                   // 0x02EA (size: 0x1)
    bool bVisible;                                                                    // 0x02EB (size: 0x1)
    bool bTabVisible;                                                                 // 0x02EC (size: 0x1)
    TEnumAsByte<ESBChatLogWindowSlot::Type> ChatLogSlot;                              // 0x02ED (size: 0x1)
    char padding_0[0x2];                                                              // 0x02EE (size: 0x2)
    FUMG_ChatLogWindow_COnChatLogWindowAddRequest OnChatLogWindowAddRequest;          // 0x02F0 (size: 0x10)
    void OnChatLogWindowAddRequest(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    FUMG_ChatLogWindow_COnChatLogWindowCloseRequest OnChatLogWindowCloseRequest;      // 0x0300 (size: 0x10)
    void OnChatLogWindowCloseRequest(TEnumAsByte<ESBChatLogWindowSlot::Type> SlotType);
    bool bChildMode;                                                                  // 0x0310 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0311 (size: 0x3)
    int32 FilterType;                                                                 // 0x0314 (size: 0x4)
    int32 DetailFilterType;                                                           // 0x0318 (size: 0x4)
    char padding_2[0x4];                                                              // 0x031C (size: 0x4)
    class UChatLogWindowTempList_C* ChatLogTempWidget;                                // 0x0320 (size: 0x8)
    FSBChatLogWindowStatusSave ChatLogStatus;                                         // 0x0328 (size: 0x10)
    FUMG_ChatLogWindow_COnChatLogTabAddRequest OnChatLogTabAddRequest;                // 0x0338 (size: 0x10)
    void OnChatLogTabAddRequest(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    FUMG_ChatLogWindow_COnChatLogTabCloseRequest OnChatLogTabCloseRequest;            // 0x0348 (size: 0x10)
    void OnChatLogTabCloseRequest(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot, int32 FilterType, int32 DetailFilterType);
    TArray<FSBChatUIMessage> LogMessageList;                                          // 0x0358 (size: 0x10)

    void Update Chat Log Status(FSBChatLogWindowStatusSave InStatus, bool IsLoad);
    void Next Tab Selection(bool bPrevious);
    void Set Tab(TEnumAsByte<ESBChatLogWindowSlot::Type> InSlot, bool bAdd);
    void SetFullChildWindow(bool InFull);
    void HideWindow();
    void ShowWindow();
    void RefreshLog();
    void IsShowNewMessageIcon(FSBChatUIMessage InMess, bool& Ret);
    void InitChildMode();
    void IsVisibleTab(bool& IsVisible);
    void IsVisibleLog(bool& IsVisible);
    void SetChatLogSlot(TEnumAsByte<ESBChatLogWindowSlot::Type> ChatLogSlot);
    void SetVisible(bool bIsVisible, bool bIsTab);
    void SetEditMode(bool EditMode);
    void SetWindowMode(bool bWindow);
    void Construct();
    void OnReceiveMessageDelegate_Event(const class USBChatMessage* Message, const FSBChatUIMessage Mess);
    void Destruct();
    void OnClickedAddWindow();
    void OnClickedCloseWindow();
    void OnUpdateFilterType(int32 InType, int32 InDetailType);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnUpdateTempLogList();
    void OnClickedAddTab();
    void OnClickedCloseTab(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void OnChangeTab();
    void SetWindowSize(FVector2D InSize);
    void OnChangeUnreadVisibleEvent(bool IsVisible);
    void OnPopTimeUpdate();
    void SetFilterType(int32 InType, int32 InFilterType);
    void ExecuteUbergraph_UMG_ChatLogWindow(int32 EntryPoint);
    void OnChatLogTabCloseRequest__DelegateSignature(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot, int32 FilterType, int32 DetailFilterType);
    void OnChatLogTabAddRequest__DelegateSignature(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void OnChatLogWindowCloseRequest__DelegateSignature(TEnumAsByte<ESBChatLogWindowSlot::Type> SlotType);
    void OnChatLogWindowAddRequest__DelegateSignature(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void OnChatRoomMessaageReceived__DelegateSignature(class USBChatMessage* Message);
}; // Size: 0x368

#endif
