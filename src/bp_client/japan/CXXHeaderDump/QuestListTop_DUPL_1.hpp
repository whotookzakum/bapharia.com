#ifndef UE4SS_SDK_QuestListTop_DUPL_1_HPP
#define UE4SS_SDK_QuestListTop_DUPL_1_HPP

class UQuestListTop_C : public USBCommandMenuChildBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* ButtonGroup1;                            // 0x02C0 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02C8 (size: 0x8)
    class UCommandMenuBg_C* CommandMenuBg;                                            // 0x02D0 (size: 0x8)
    class UCanvasPanel* MenuCanvasPanel;                                              // 0x02D8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02E0 (size: 0x8)
    FQuestListTop_COnClose OnClose;                                                   // 0x02E8 (size: 0x10)
    void OnClose();
    int32 HelpId;                                                                     // 0x02F8 (size: 0x4)
    int32 nowPage;                                                                    // 0x02FC (size: 0x4)
    class UObject* HunterQuestList_0;                                                 // 0x0300 (size: 0x8)
    TArray<FSBCommandMenuChildData> Child Widget Data;                                // 0x0308 (size: 0x10)
    TMap<int32, FSBCommandMenuChildInstanceData> Child Widget Instance List;          // 0x0318 (size: 0x50)
    class UUserWidget* CurrentWidget;                                                 // 0x0368 (size: 0x8)
    bool bAutoDeliveryQuestListUpdate;                                                // 0x0370 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0371 (size: 0x7)
    TMap<FString, int32> PageMap;                                                     // 0x0378 (size: 0x50)
    TArray<FString> BookmarkTypeList;                                                 // 0x03C8 (size: 0x10)
    class UUIBlocker_C* UIBlocker_0;                                                  // 0x03D8 (size: 0x8)
    bool bAdventureBoardUpdate;                                                       // 0x03E0 (size: 0x1)
    char padding_1[0x3];                                                              // 0x03E1 (size: 0x3)
    int32 AutoDeliveryQuestRetCode;                                                   // 0x03E4 (size: 0x4)
    int32 AdventureBoardRetCode;                                                      // 0x03E8 (size: 0x4)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void UpdateQuestButtonExclamation();
    void IsActiveDeliveryQuest(bool& Active);
    void IsAutoDeliveryQuestExclamation();
    void IsAdventureBoardExclamation();
    void Initialize Open Menu Type();
    void OnLoaded_B897C77C401AFB2FF4EE5498A2CCE559(UClass* Loaded);
    void OnParentTerm();
    void OnRMShopClosed();
    void ResetMouseCursorTypeToDefaultRequest();
    void Construct();
    void BndEvt__Tab1_K2Node_ComponentBoundEvent_24_OnClick__DelegateSignature(int32 ButtonId);
    void ChangePage(int32 PageNum);
    void BookmarkUpdateRequest();
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_0();
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void CustomEvent_0(int32 ReturnCode);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void UpdateBookmarkButton();
    void OnLoadAdventureBoardDelegete_イベント_0(int32 RetCode);
    void BindSubMenuAdventureBoardUpdate_Event();
    void UpdateSubMenuAdventureBoardExclamation_Event(class UObject* Sender, class UObject* Param);
    void BindAutoDeliveryQuestUpdate_Event();
    void UpdateAutoDeliveryQuestExclamation_Event(class UObject* Sender, class UObject* Param);
    void OnUpdateQuestButtonNew_Event(class UObject* Sender, class UObject* Param);
    void BindSubMenuQuestUpdate_Event();
    void ExecuteUbergraph_QuestListTop(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x3EC

#endif
