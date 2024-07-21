#ifndef UE4SS_SDK_QuestDetailForMap_HPP
#define UE4SS_SDK_QuestDetailForMap_HPP

class UQuestDetailForMap_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* OutAnim;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* InAnim;                                                   // 0x0288 (size: 0x8)
    class UBackgroundBlur* BackgroundBlur_80;                                         // 0x0290 (size: 0x8)
    class UImage* BaseImage;                                                          // 0x0298 (size: 0x8)
    class UImage* BtnBg;                                                              // 0x02A0 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreen;                                           // 0x02A8 (size: 0x8)
    class UCmnClose02_C* CloseButton;                                                 // 0x02B0 (size: 0x8)
    class UCanvasPanel* Cv_MoveToQuestListUI;                                         // 0x02B8 (size: 0x8)
    class UCmnBtn01_C* MoveToQuestListBtn;                                            // 0x02C0 (size: 0x8)
    class UQuestDetail_C* QuestDetail;                                                // 0x02C8 (size: 0x8)
    int32 QuestIndex;                                                                 // 0x02D0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02D4 (size: 0x4)
    FQuestDetailForMap_COnFinish OnFinish;                                            // 0x02D8 (size: 0x10)
    void OnFinish(TEnumAsByte<QuestDetail_FinishStatus::Type> FinishStatus, int32 QuestIndex);
    bool bPreviewMode;                                                                // 0x02E8 (size: 0x1)
    TEnumAsByte<QuestDetail_FinishStatus::Type> Finish Status;                        // 0x02E9 (size: 0x1)
    bool bIsMoveQuest;                                                                // 0x02EA (size: 0x1)
    bool bIsShowMoveButton;                                                           // 0x02EB (size: 0x1)

    void IsShowMoveButton(bool& OutParam);
    void SetMoveButton(bool InShowButton);
    void Construct();
    void WidgetAnimationEvt_OutAnim_K2Node_WidgetAnimationEvent_1();
    void BndEvt__QuestConfirmationMenuEx_BtnScreen_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void OnMenuFinish();
    void Destruct();
    void BndEvt__QuestDetailForMap_CmnClose02_K2Node_ComponentBoundEvent_2_OnClosed__DelegateSignature();
    void BndEvt__QuestDetailForMap_MoveToQuestListBtn_K2Node_ComponentBoundEvent_3_EventOnClicked__DelegateSignature();
    void ExecuteUbergraph_QuestDetailForMap(int32 EntryPoint);
    void OnFinish__DelegateSignature(TEnumAsByte<QuestDetail_FinishStatus::Type> FinishStatus, int32 QuestIndex);
}; // Size: 0x2EC

#endif
