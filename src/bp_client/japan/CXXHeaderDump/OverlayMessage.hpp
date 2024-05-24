#ifndef UE4SS_SDK_OverlayMessage_HPP
#define UE4SS_SDK_OverlayMessage_HPP

class UOverlayMessage_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UImage* BG;                                                                 // 0x02C8 (size: 0x8)
    class UImage* Line;                                                               // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* MessageText;                                           // 0x02D8 (size: 0x8)
    class USBButton_C* NoButton;                                                      // 0x02E0 (size: 0x8)
    class USBButton_C* OKButton;                                                      // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* TxtNo;                                                 // 0x02F0 (size: 0x8)
    class USBRuntimeTextBlock* TxtOK;                                                 // 0x02F8 (size: 0x8)
    class USBRuntimeTextBlock* TxtYes;                                                // 0x0300 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0308 (size: 0x8)
    class USBButton_C* YesButton;                                                     // 0x0310 (size: 0x8)
    class UCanvasPanel* YesNoGrp;                                                     // 0x0318 (size: 0x8)
    EDialogResult Result;                                                             // 0x0320 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0321 (size: 0x3)
    int32 CurrentButtonIndex;                                                         // 0x0324 (size: 0x4)
    TArray<class USBButton_C*> ButtonList;                                            // 0x0328 (size: 0x10)
    FOverlayMessage_COnHide OnHide;                                                   // 0x0338 (size: 0x10)
    void OnHide(EDialogResult Result);
    class UUIBlocker_C* Blocker;                                                      // 0x0348 (size: 0x8)

    void SetResultForButton(class USBButton_C* Button);
    void ChangeCurrentButton(int32 Index);
    void OnRepeat_Left();
    void OnRepeat_Right();
    void OnPress_Ok();
    void StartMessageDialog(const int32& InTextId);
    void StartYesNoDialog(const int32& InTextId);
    void BndEvt__SBButton_Message_K2Node_ComponentBoundEvent_189_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_Message_K2Node_ComponentBoundEvent_245_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_Message_K2Node_ComponentBoundEvent_269_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_1_K2Node_ComponentBoundEvent_434_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_C_1_K2Node_ComponentBoundEvent_465_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_C_1_K2Node_ComponentBoundEvent_492_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_No_K2Node_ComponentBoundEvent_612_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_No_K2Node_ComponentBoundEvent_646_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBButton_No_K2Node_ComponentBoundEvent_676_OnButtonHoverEvent__DelegateSignature();
    void Construct();
    void HideDialog();
    void Destruct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnPress_Cancel();
    void ExecuteUbergraph_OverlayMessage(int32 EntryPoint);
    void OnHide__DelegateSignature(EDialogResult Result);
}; // Size: 0x350

#endif
