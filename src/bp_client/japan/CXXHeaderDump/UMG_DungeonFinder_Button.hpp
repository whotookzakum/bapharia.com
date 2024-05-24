#ifndef UE4SS_SDK_UMG_DungeonFinder_Button_HPP
#define UE4SS_SDK_UMG_DungeonFinder_Button_HPP

class UUMG_DungeonFinder_Button_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimUnHovered;                                            // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0288 (size: 0x8)
    class UWidgetAnimation* AnimUnSelected;                                           // 0x0290 (size: 0x8)
    class UWidgetAnimation* AnimSelected;                                             // 0x0298 (size: 0x8)
    class UCommandMenu_MissionEffect1_C* CommandMenu_MissionEffect1;                  // 0x02A0 (size: 0x8)
    class UCommandMenu_MissionEffect1_C* CommandMenu_MissionEffect1_50;               // 0x02A8 (size: 0x8)
    class UCommandMenu_MissionEffect2_C* CommandMenu_MissionEffect2;                  // 0x02B0 (size: 0x8)
    class UCanvasPanel* ConfirmGrp;                                                   // 0x02B8 (size: 0x8)
    class USBButton_C* ContentButton;                                                 // 0x02C0 (size: 0x8)
    class UImage* IconNew;                                                            // 0x02C8 (size: 0x8)
    class UCanvasPanel* MatchingGrp;                                                  // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* MatchingText;                                          // 0x02D8 (size: 0x8)
    class UTextBlock* MaxConfirmCountText1;                                           // 0x02E0 (size: 0x8)
    class UTextBlock* NeedParticipantSizeText;                                        // 0x02E8 (size: 0x8)
    class UTextBlock* NeedParticipantSizeText2;                                       // 0x02F0 (size: 0x8)
    class UCanvasPanel* NormalGrp;                                                    // 0x02F8 (size: 0x8)
    class UTextBlock* NowConfirmCountText1;                                           // 0x0300 (size: 0x8)
    class UTextBlock* NowParticipantSizeText;                                         // 0x0308 (size: 0x8)
    class UTextBlock* NowParticipantSizeText2;                                        // 0x0310 (size: 0x8)
    class UCanvasPanel* PartyMemberIsInMissionGrp;                                    // 0x0318 (size: 0x8)
    class USBRuntimeTextBlock* ServerWaitText;                                        // 0x0320 (size: 0x8)
    class UWidgetSwitcher* SwitchMessage;                                             // 0x0328 (size: 0x8)
    class UCanvasPanel* WaitingGrp;                                                   // 0x0330 (size: 0x8)
    FUMG_DungeonFinder_Button_COnOpenMatchingMenu OnOpenMatchingMenu;                 // 0x0338 (size: 0x10)
    void OnOpenMatchingMenu();
    bool bActive;                                                                     // 0x0348 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0349 (size: 0x7)
    FUMG_DungeonFinder_Button_COnOpenDungeonMatchingMenu OnOpenDungeonMatchingMenu;   // 0x0350 (size: 0x10)
    void OnOpenDungeonMatchingMenu();
    bool bCurrentMatchimaking;                                                        // 0x0360 (size: 0x1)
    bool bMatched;                                                                    // 0x0361 (size: 0x1)
    char padding_1[0x6];                                                              // 0x0362 (size: 0x6)
    FUMG_DungeonFinder_Button_COnMatchingState OnMatchingState;                       // 0x0368 (size: 0x10)
    void OnMatchingState(bool IsStart);

    void UpdateExclamation(bool IsShow);
    void SetBtn(bool bActive);
    void IsUpdateMatch(bool& Ret);
    void PlayBtnAnim(bool bInActive);
    FText Get_NowConfirmCountText_Text_0();
    FText Get_MaxConfirmCountText_Text_0();
    ESlateVisibility Get_MatchingText_Visibility_0();
    void IsParticipantNumberCompleted(bool& bCompleted);
    FText Get_NeedParticipantSizeText_Text_0();
    ESlateVisibility Get_ServerWaitText_Visibility_0();
    FText Get_NowParticipantSizeText_Text_0();
    void ResetButtonState();
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_27_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_37_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ContentButton_K2Node_ComponentBoundEvent_56_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_UMG_DungeonFinder_Button(int32 EntryPoint);
    void OnMatchingState__DelegateSignature(bool IsStart);
    void OnOpenDungeonMatchingMenu__DelegateSignature();
    void OnOpenMatchingMenu__DelegateSignature();
}; // Size: 0x378

#endif
