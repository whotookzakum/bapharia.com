#ifndef UE4SS_SDK_EmotionMenu_HPP
#define UE4SS_SDK_EmotionMenu_HPP

class UEmotionMenu_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UHorizontalBox* CategoryList;                                               // 0x02C8 (size: 0x8)
    class UChatHudMovableWidget_C* ChatHudMovableWidget;                              // 0x02D0 (size: 0x8)
    class UCanvasPanel* EmotionPanel;                                                 // 0x02D8 (size: 0x8)
    class ULimitedTimeNotice_C* LimitedTimeNotice;                                    // 0x02E0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton;                                // 0x02E8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_1;                              // 0x02F0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_2;                              // 0x02F8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_3;                              // 0x0300 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton_4;                              // 0x0308 (size: 0x8)
    class UWidgetSwitcher* SwitchGesture;                                             // 0x0310 (size: 0x8)
    class UHorizontalBox* TabList;                                                    // 0x0318 (size: 0x8)
    class UImage* TabTextInput;                                                       // 0x0320 (size: 0x8)
    class USBButton_C* TextInputButton;                                               // 0x0328 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0330 (size: 0x8)
    class UWBP_EmotionIconScroolBox_C* WBP_EmotionIconScroolBox;                      // 0x0338 (size: 0x8)
    FEmotionMenu_COnClose OnClose;                                                    // 0x0340 (size: 0x10)
    void OnClose();
    TArray<FString> EmotionList;                                                      // 0x0350 (size: 0x10)
    FString SelectedEmotion;                                                          // 0x0360 (size: 0x10)
    class UCommandMenu_C* CommandMenu;                                                // 0x0370 (size: 0x8)
    bool bIsStartup;                                                                  // 0x0378 (size: 0x1)
    bool IsEmotionMode;                                                               // 0x0379 (size: 0x1)
    EShortcutType RegisterType;                                                       // 0x037A (size: 0x1)
    char padding_0[0x1];                                                              // 0x037B (size: 0x1)
    FName TutorialHelpId;                                                             // 0x037C (size: 0x8)
    char padding_1[0x4];                                                              // 0x0384 (size: 0x4)
    class UTutorialHelpDialogBox_C* TutorialHelpWidget;                               // 0x0388 (size: 0x8)
    int32 SelectCategory;                                                             // 0x0390 (size: 0x4)
    char padding_2[0x4];                                                              // 0x0394 (size: 0x4)
    TArray<FSBLimitedTimeGroupInfo> LimitedTimeGroupList;                             // 0x0398 (size: 0x10)
    FEmotionMenu_COnRequestEmote OnRequestEmote;                                      // 0x03A8 (size: 0x10)
    void OnRequestEmote(FName EmotionId);
    bool bEnableRequest;                                                              // 0x03B8 (size: 0x1)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void UpdateCategory();
    void SetDragableItem(bool InDragable);
    void SelectEmotionItem(class UEmotionMenu_Item_C* InSelectedItem);
    void SetLineColor(ESBChatLogType InChatLogType);
    void Hide();
    void Show();
    void SetRootBgVisible(bool bVisible);
    void SetRootVisible(bool InVisible);
    void CreateEmotionEmotionList();
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void OnRequestTutorialHelp();
    void OnTutorialHelp_Close();
    void Construct_Emotion();
    void CreateCategory();
    void OnClickedEvent(int32 Index);
    void UpdateEmotionList(bool IsCreateCategory);
    void OnActiveItemaUpdate();
    void BndEvt__EmotionMenu_WBP_EmotionScroolBox_K2Node_ComponentBoundEvent_0_OnSelectEmotionItem__DelegateSignature(class UEmotionMenu_Item_C* InSelectedItem);
    void Construct();
    void Destruct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ArrivalBackendMenu(bool Index);
    void ExecuteUbergraph_EmotionMenu(int32 EntryPoint);
    void OnRequestEmote__DelegateSignature(FName EmotionId);
    void OnClose__DelegateSignature();
}; // Size: 0x3B9

#endif
