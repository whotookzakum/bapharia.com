#ifndef UE4SS_SDK_InteractNotice_HPP
#define UE4SS_SDK_InteractNotice_HPP

class UInteractNotice_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0290 (size: 0x8)
    class USBRichTextBlock* InteractText;                                             // 0x0298 (size: 0x8)
    class UCanvasPanel* NoticeGrp;                                                    // 0x02A0 (size: 0x8)
    class USBTextTableAsset* TextTable;                                               // 0x02A8 (size: 0x8)
    bool PlayAnimIn;                                                                  // 0x02B0 (size: 0x1)
    bool IsUIVisible;                                                                 // 0x02B1 (size: 0x1)
    bool AnimationPlaing_AnimIn;                                                      // 0x02B2 (size: 0x1)
    bool AnimationPlaing_AnimOut;                                                     // 0x02B3 (size: 0x1)

    void GetEmoteText(ESBJointGestureState State, bool& NewParam);
    void PlayAnim(bool IsAnimIn);
    void SetJointGestureText(ESBJointGestureState InState);
    void SetTextId(int32 InTextId);
    void Construct();
    void UpdateInteractionNotice();
    void UIVisibleSettingChangeDelegate_Event_0(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void Destruct();
    void OnPadSkinChange(const ESBPadKeySkinType SkinType);
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_0();
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_1();
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_2();
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_3();
    void ExecuteUbergraph_InteractNotice(int32 EntryPoint);
}; // Size: 0x2B4

#endif
