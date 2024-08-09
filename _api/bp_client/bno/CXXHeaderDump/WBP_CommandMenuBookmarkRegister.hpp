#ifndef UE4SS_SDK_WBP_CommandMenuBookmarkRegister_HPP
#define UE4SS_SDK_WBP_CommandMenuBookmarkRegister_HPP

class UWBP_CommandMenuBookmarkRegister_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Button1_1;                                                     // 0x0280 (size: 0x8)
    class USBButton_C* Button2_1;                                                     // 0x0288 (size: 0x8)
    class UCanvasPanel* Button2Grp;                                                   // 0x0290 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x0298 (size: 0x8)
    class UImage* Line;                                                               // 0x02A0 (size: 0x8)
    class USBButtonFullScreen_C* SBButtonTransparent;                                 // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* Txt1_1;                                                // 0x02B0 (size: 0x8)
    class USBRuntimeTextBlock* Txt1_2;                                                // 0x02B8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_FreeText;                                          // 0x02C0 (size: 0x8)
    class USBRuntimeTextBlock* Txt_FreeText_1;                                        // 0x02C8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_FreeText_2;                                        // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* Txt_FreeText_3;                                        // 0x02D8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02E0 (size: 0x8)
    class UUIBlocker_C* UIBlocker2;                                                   // 0x02E8 (size: 0x8)
    FKey NowKye;                                                                      // 0x02F0 (size: 0x18)
    FWBP_CommandMenuBookmarkRegister_CUpdateFinish UpdateFinish;                      // 0x0308 (size: 0x10)
    void UpdateFinish(ESBBookMarkerSlot BookmarkSlot, FString KeyString);
    FString BookMark;                                                                 // 0x0318 (size: 0x10)
    ESBUIKeyConfigAction NewVar_0;                                                    // 0x0328 (size: 0x1)
    bool NewVar_1;                                                                    // 0x0329 (size: 0x1)
    ESBBookMarkerSlot MySlot;                                                         // 0x032A (size: 0x1)
    bool SetSuccess;                                                                  // 0x032B (size: 0x1)
    FSBCursorStateHandle CursorHandle;                                                // 0x032C (size: 0x4)

    void NewFunction_0();
    void IsTestKeyUse(FKey Key, bool& Result);
    FEventReply OnKeyDown(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    void Construct();
    void UpdateKey(FKey Key);
    void Destruct();
    void BndEvt__Button1_1_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button1_2_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button1_1_K2Node_ComponentBoundEvent_7_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button2_1_K2Node_ComponentBoundEvent_8_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button1_1_K2Node_ComponentBoundEvent_9_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button2_1_K2Node_ComponentBoundEvent_10_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__WBP_CommandMenuBookmarkRegister_CmnClose02_K2Node_ComponentBoundEvent_2_OnClosed__DelegateSignature();
    void ExecuteUbergraph_WBP_CommandMenuBookmarkRegister(int32 EntryPoint);
    void UpdateFinish__DelegateSignature(ESBBookMarkerSlot BookmarkSlot, FString KeyString);
}; // Size: 0x330

#endif
