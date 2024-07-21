#ifndef UE4SS_SDK_ChatLogWindowList_HPP
#define UE4SS_SDK_ChatLogWindowList_HPP

class UChatLogWindowList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UCanvasPanel* Btn_Closes;                                                   // 0x0290 (size: 0x8)
    class USBButton_C* BtnAddWindow;                                                  // 0x0298 (size: 0x8)
    class USBButton_C* BtnSeparation_Main;                                            // 0x02A0 (size: 0x8)
    class UButton* BtnStoring_Sub;                                                    // 0x02A8 (size: 0x8)
    class UChatHudMovableWidget_C* ChatHudMovableWidget;                              // 0x02B0 (size: 0x8)
    class UChatHudResizableWidget_C* ChatHudResizableWidget;                          // 0x02B8 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterBattle_0;                                // 0x02C0 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterBattle_1;                                // 0x02C8 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterBattle_2;                                // 0x02D0 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterCommunication_0;                         // 0x02D8 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterCommunication_1;                         // 0x02E0 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterItem_0;                                  // 0x02E8 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterItem_1;                                  // 0x02F0 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterItem_2;                                  // 0x02F8 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterItem_3;                                  // 0x0300 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterItem_4;                                  // 0x0308 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterSystem_0;                                // 0x0310 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterSystem_1;                                // 0x0318 (size: 0x8)
    class UChatLogFilterItem_C* ChatLogFilterSystem_2;                                // 0x0320 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x0328 (size: 0x8)
    class UImage* FilterBg1;                                                          // 0x0330 (size: 0x8)
    class USBButton_C* FilterButton;                                                  // 0x0338 (size: 0x8)
    class USBButton_C* FilterClose;                                                   // 0x0340 (size: 0x8)
    class UGridPanel* FilterGridPanel;                                                // 0x0348 (size: 0x8)
    class UCanvasPanel* FilterGrp;                                                    // 0x0350 (size: 0x8)
    class UImage* Image;                                                              // 0x0358 (size: 0x8)
    class UImage* Image_1;                                                            // 0x0360 (size: 0x8)
    class UImage* Image_4;                                                            // 0x0368 (size: 0x8)
    class UListView* LogListView;                                                     // 0x0370 (size: 0x8)
    class USBRuntimeTextBlock* MainButtonText;                                        // 0x0378 (size: 0x8)
    class USBRuntimeTextBlock* MainButtonText_1;                                      // 0x0380 (size: 0x8)
    class USBRuntimeTextBlock* MainButtonText_2;                                      // 0x0388 (size: 0x8)
    class USBButton_C* MainTabButton;                                                 // 0x0390 (size: 0x8)
    class USBButton_C* MainTabButton_1;                                               // 0x0398 (size: 0x8)
    class USBButton_C* MainTabButton_2;                                               // 0x03A0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock;                                    // 0x03A8 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_0;                                  // 0x03B0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_3;                                  // 0x03B8 (size: 0x8)
    class USizeBox* SizeBox_0;                                                        // 0x03C0 (size: 0x8)
    class UWidgetSwitcher* Switcher_BtnCloses;                                        // 0x03C8 (size: 0x8)
    class UWidgetSwitcher* Switcher_BtnWindow;                                        // 0x03D0 (size: 0x8)
    class UWidgetSwitcher* SwitchMainTab;                                             // 0x03D8 (size: 0x8)
    class UWidgetSwitcher* SwitchSubTab_1;                                            // 0x03E0 (size: 0x8)
    class UWidgetSwitcher* SwitchSubTab_2;                                            // 0x03E8 (size: 0x8)
    class USBRuntimeTextBlock* TxtChildMain;                                          // 0x03F0 (size: 0x8)
    class UCanvasPanel* UnreadGrp;                                                    // 0x03F8 (size: 0x8)
    int32 FilterType;                                                                 // 0x0400 (size: 0x4)
    int32 DetailFilterType;                                                           // 0x0404 (size: 0x4)
    ESBChatLogTabType TabType;                                                        // 0x0408 (size: 0x1)
    bool FilterListVisible;                                                           // 0x0409 (size: 0x1)
    char padding_0[0x6];                                                              // 0x040A (size: 0x6)
    class UUMG_ChatLogWindow_C* ChatLogWindowWidget;                                  // 0x0410 (size: 0x8)
    FChatLogWindowList_COnChatLogWindowAddRequest OnChatLogWindowAddRequest;          // 0x0418 (size: 0x10)
    void OnChatLogWindowAddRequest();
    FChatLogWindowList_COnChatLogWindowCloseRequest OnChatLogWindowCloseRequest;      // 0x0428 (size: 0x10)
    void OnChatLogWindowCloseRequest();
    TEnumAsByte<ESBChatLogWindowSlot::Type> ChatLogSlot;                              // 0x0438 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0439 (size: 0x7)
    FChatLogWindowList_COnChangeFilterType OnChangeFilterType;                        // 0x0440 (size: 0x10)
    void OnChangeFilterType(int32 InType, int32 InDetailType);
    bool isVisibility;                                                                // 0x0450 (size: 0x1)
    char padding_2[0x7];                                                              // 0x0451 (size: 0x7)
    FChatLogWindowList_COnChatLogTabAddRequest OnChatLogTabAddRequest;                // 0x0458 (size: 0x10)
    void OnChatLogTabAddRequest();
    FChatLogWindowList_COnChatLogTabCloseRequest OnChatLogTabCloseRequest;            // 0x0468 (size: 0x10)
    void OnChatLogTabCloseRequest(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    FChatLogWindowList_COnChangeTab OnChangeTab;                                      // 0x0478 (size: 0x10)
    void OnChangeTab();
    bool IsUnreadWidget;                                                              // 0x0488 (size: 0x1)
    bool IsUnreadClear;                                                               // 0x0489 (size: 0x1)
    char padding_3[0x6];                                                              // 0x048A (size: 0x6)
    FChatLogWindowList_COnChangeChatUnreadNotify OnChangeChatUnreadNotify;            // 0x0490 (size: 0x10)
    void OnChangeChatUnreadNotify(bool IsChatUnreadNotify);
    FChatLogWindowList_COnChangeUnreadVisible OnChangeUnreadVisible;                  // 0x04A0 (size: 0x10)
    void OnChangeUnreadVisible(bool IsVisible);
    bool IsCreateMessage;                                                             // 0x04B0 (size: 0x1)
    bool IsChatUnreadNotify;                                                          // 0x04B1 (size: 0x1)

    void GetChatUnreadNotify(bool& Result);
    void UpdateChatLogStatus(FSBChatLogWindowStatusSave InStatus);
    void ChatCloseUnreadUpdate();
    void CheckUnread();
    void SetChatLogSlot(TEnumAsByte<ESBChatLogWindowSlot::Type> Slot);
    void Get Tab Type to Slot(TEnumAsByte<ESBChatLogWindowSlot::Type>& Slot);
    void SetTab(TEnumAsByte<ESBChatLogWindowSlot::Type> InSlot, bool bAdd);
    void ClearLogList();
    void IsScrollEndListView(bool& Ret);
    void Create Message Entry(FSBChatUIMessage InMess, bool bRecieve);
    void GetWindowSize(FVector2D& retSize);
    void SetWindowSize(FVector2D InSize);
    void SetSeparationButtonEnabled(bool InEnable);
    void SetFullChildWindow(bool InFull);
    void SetForceUnhover();
    void SetListScrollEnd();
    void RefreshLog();
    void InitChidMode(int32 InTabTextId);
    void ChangeDetailFilter(bool InEnable, ESBChatDetailFilterType InDetailFilterType);
    void ChangeFilter(bool InEnable, ESBChatFilterType InFilterType);
    void IsDirectChatPlayer(FSBChatUIMessage InMess, bool& Ret);
    void CreateChatLogList(int32 InFilterType, int32 InDetailFilterType);
    void Set Filter List Visible(bool InVisible);
    void NextTabSelection(bool bPrevious);
    void Change Tab Mode(ESBChatLogTabType InTabType, bool bInit);
    void InitFilterCheckBox();
    void Init(class UUMG_ChatLogWindow_C* InWidget, int32 InFilterType, int32 InDetailFilterType, ESBChatLogTabType InTabType);
    void BndEvt__MainTabButton_1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__MainTabButton_2_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__FilterButton_K2Node_ComponentBoundEvent_19_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__ChatLogFilterItem_0_K2Node_ComponentBoundEvent_493_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterItem_1_K2Node_ComponentBoundEvent_494_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterItem_2_K2Node_ComponentBoundEvent_508_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterItem_3_K2Node_ComponentBoundEvent_523_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterItem_4_K2Node_ComponentBoundEvent_539_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterBattle_0_K2Node_ComponentBoundEvent_0_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterCommunication_0_K2Node_ComponentBoundEvent_1_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterCommunication_1_K2Node_ComponentBoundEvent_2_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterSystem_0_K2Node_ComponentBoundEvent_3_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterSystem_1_K2Node_ComponentBoundEvent_4_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogFilterSystem_2_K2Node_ComponentBoundEvent_5_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void CloseFilter();
    void BndEvt__ChatLogWindowList_ChatLogFilterBattle_1_K2Node_ComponentBoundEvent_3_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogWindowList_ChatLogFilterBattle_2_K2Node_ComponentBoundEvent_3_EventCheckStateChanged__DelegateSignature(bool IsChecked);
    void BndEvt__ChatLogWindowList_FilterClose_K2Node_ComponentBoundEvent_8_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__BtnAddWindow_K2Node_ComponentBoundEvent_84_OnButtonClickedEvent__DelegateSignature();
    void OnReciveMessage(FSBChatUIMessage InMess, bool bRecieve);
    void BndEvt__LogListView_K2Node_ComponentBoundEvent_0_OnListEntryGeneratedDynamic__DelegateSignature(class UUserWidget* Widget);
    void BndEvt__BtnSeparation_Main_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__BtnStoring_Sub_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__ChatLogWindowList_CmnClose02_K2Node_ComponentBoundEvent_8_OnClosed__DelegateSignature();
    void BndEvt__SBMainTabButton_K2Node_ComponentBoundEvent_278_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_ChatLogWindowList(int32 EntryPoint);
    void OnChangeUnreadVisible__DelegateSignature(bool IsVisible);
    void OnChangeChatUnreadNotify__DelegateSignature(bool IsChatUnreadNotify);
    void OnChangeTab__DelegateSignature();
    void OnChatLogTabCloseRequest__DelegateSignature(TEnumAsByte<ESBChatLogWindowSlot::Type> RequestSlot);
    void OnChatLogTabAddRequest__DelegateSignature();
    void OnChangeFilterType__DelegateSignature(int32 InType, int32 InDetailType);
    void OnChatLogWindowCloseRequest__DelegateSignature();
    void OnChatLogWindowAddRequest__DelegateSignature();
}; // Size: 0x4B2

#endif
