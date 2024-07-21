#ifndef UE4SS_SDK_OtherPCEmoteMenu_HPP
#define UE4SS_SDK_OtherPCEmoteMenu_HPP

class UOtherPCEmoteMenu_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UImage* BG;                                                                 // 0x02C8 (size: 0x8)
    class UHorizontalBox* CategoryList;                                               // 0x02D0 (size: 0x8)
    class UCmnClose01_C* CmnClose01;                                                  // 0x02D8 (size: 0x8)
    class UGridPanel* EmoteGridPanel;                                                 // 0x02E0 (size: 0x8)
    class ULimitedTimeNotice_C* LimitedTimeNotice;                                    // 0x02E8 (size: 0x8)
    class USBButtonFullScreen_C* SBButtonFullScreen;                                  // 0x02F0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton;                                // 0x02F8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_1;                              // 0x0300 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_2;                              // 0x0308 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_3;                              // 0x0310 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_4;                              // 0x0318 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0320 (size: 0x8)
    bool IsClosingMenu;                                                               // 0x0328 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0329 (size: 0x7)
    FOtherPCEmoteMenu_COnClose OnClose;                                               // 0x0330 (size: 0x10)
    void OnClose();
    TArray<FString> EmotionList;                                                      // 0x0340 (size: 0x10)
    FString SelectedEmotion;                                                          // 0x0350 (size: 0x10)
    FName TutorialHelpId;                                                             // 0x0360 (size: 0x8)
    class UTutorialHelpDialogBox_C* TutorialHelpWidget;                               // 0x0368 (size: 0x8)
    class ASBPlayerState* PlayerState;                                                // 0x0370 (size: 0x8)
    int32 SelectCategory;                                                             // 0x0378 (size: 0x4)
    char padding_1[0x4];                                                              // 0x037C (size: 0x4)
    TArray<FSBLimitedTimeGroupInfo> LimitedTimeGroupList;                             // 0x0380 (size: 0x10)

    void Is Enable Emote Icon(const FName& InputPin, bool& bIsEnable);
    void UpdateEmoteIconEnable();
    class ASBPlayerCharacter* GetPlayerCharacter();
    void Update Category();
    void SetRootVisible(bool InVisible);
    void ClearEmotionSlot();
    void CreateEmotionList();
    void CreateEmptySlot(class UGridPanel* InGridPanel, int32 InSlotCount);
    void CloseMenu();
    void OnRequestTutorialHelp();
    void OnTutorialHelp_Close();
    void Construct();
    void Destruct();
    void OnRefresh();
    void OnSelect(class UEmotionMenu_Item_C* InSelectedItem);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnPress_Cancel();
    void OnJankenUIDelegate_Event_0();
    void ForcedClose();
    void UpdateEmotionList(bool bInit);
    void CreateCategory();
    void CustomEvent(int32 Index);
    void BndEvt__OtherPCEmoteMenu_CmnClose01_K2Node_ComponentBoundEvent_0_OnClosed__DelegateSignature();
    void BndEvt__OtherPCEmoteMenu_SBButtonFullScreen_C_35_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_OtherPCEmoteMenu(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x390

#endif
