#ifndef UE4SS_SDK_ChatSettingWindow_HPP
#define UE4SS_SDK_ChatSettingWindow_HPP

class UChatSettingWindow_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimInOut;                                                // 0x0280 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_LogDispTime;                    // 0x0288 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_Main;                           // 0x0290 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_Size;                           // 0x0298 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_StartKey;                       // 0x02A0 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_Sub1;                           // 0x02A8 (size: 0x8)
    class UChatSettingRadioBtn_C* ChatSettingRadioBtn_Sub2;                           // 0x02B0 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x02B8 (size: 0x8)
    class UImage* Image_146;                                                          // 0x02C0 (size: 0x8)
    class UImage* Info_1;                                                             // 0x02C8 (size: 0x8)
    class UImage* Info_2;                                                             // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* Text_Enter;                                            // 0x02D8 (size: 0x8)
    bool bInAnime;                                                                    // 0x02E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02E1 (size: 0x7)
    FChatSettingWindow_COnClose OnClose;                                              // 0x02E8 (size: 0x10)
    void OnClose();
    TArray<FSBChatLogWindowStatusSave> LogWindowStatusList;                           // 0x02F8 (size: 0x10)
    FChatSettingWindow_COnRefreshChatLogs OnRefreshChatLogs;                          // 0x0308 (size: 0x10)
    void OnRefreshChatLogs();
    bool IsSaveFlag;                                                                  // 0x0318 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0319 (size: 0x7)
    FChatSettingWindow_COnLogDispTime OnLogDispTime;                                  // 0x0320 (size: 0x10)
    void OnLogDispTime();

    void SetVisible(bool IsVisible);
    void HideWindow();
    void ShowWindow(TArray<bool>& LogVisibleStatusList);
    void Close();
    void Construct();
    void Destruct();
    void OnChange_Size(int32 InSelectBtnId);
    void OnChange_Time(int32 InSelectBtnId);
    void OnChange_StartKey(int32 InSelectBtnId);
    void OnChange_Main(int32 InSelectBtnId);
    void OnChange_Sub1(int32 InSelectBtnId);
    void OnChange_Sub2(int32 InSelectBtnId);
    void WidgetAnimationEvt_AnimInOut_K2Node_WidgetAnimationEvent_0();
    void BndEvt__UnreadNotifySettingWindow_CmnClose02_K2Node_ComponentBoundEvent_0_OnClosed__DelegateSignature();
    void ExecuteUbergraph_ChatSettingWindow(int32 EntryPoint);
    void OnLogDispTime__DelegateSignature();
    void OnRefreshChatLogs__DelegateSignature();
    void OnClose__DelegateSignature();
}; // Size: 0x330

#endif
