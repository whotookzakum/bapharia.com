#ifndef UE4SS_SDK_MyCharaMenu_EquipRingHandSelectDialog_HPP
#define UE4SS_SDK_MyCharaMenu_EquipRingHandSelectDialog_HPP

class UMyCharaMenu_EquipRingHandSelectDialog_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UImage* Bg01;                                                               // 0x02B8 (size: 0x8)
    class USBButton_C* BtnLeftHand;                                                   // 0x02C0 (size: 0x8)
    class USBButton_C* BtnRightHand;                                                  // 0x02C8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreen;                                           // 0x02D0 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x02D8 (size: 0x8)
    class UImage* LineImage;                                                          // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* TxtLeftHand;                                           // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* TxtRightHand;                                          // 0x02F0 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02F8 (size: 0x8)
    FMyCharaMenu_EquipRingHandSelectDialog_COnClose OnClose;                          // 0x0300 (size: 0x10)
    void OnClose();
    class UUIBlocker_C* EndBlocker;                                                   // 0x0310 (size: 0x8)
    FMyCharaMenu_EquipRingHandSelectDialog_COnSelected OnSelected;                    // 0x0318 (size: 0x10)
    void OnSelected(bool InIsLeftHand);

    void Hide();
    void Show();
    void BndEvt__BtnRightHand_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__BtnScreen_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature();
    void OnPress_Cancel();
    void BndEvt__BtnLeftHand_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void EventClose();
    void BndEvt__MyCharaMenu_EquipRingHandSelectDialog_CmnClose02_K2Node_ComponentBoundEvent_4_OnClosed__DelegateSignature();
    void BndEvt__MyCharaMenu_EquipRingHandSelectDialog_BtnLeftHand_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__MyCharaMenu_EquipRingHandSelectDialog_BtnLeftHand_K2Node_ComponentBoundEvent_5_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__MyCharaMenu_EquipRingHandSelectDialog_BtnRightHand_K2Node_ComponentBoundEvent_6_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__MyCharaMenu_EquipRingHandSelectDialog_BtnRightHand_K2Node_ComponentBoundEvent_7_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_EquipRingHandSelectDialog(int32 EntryPoint);
    void OnSelected__DelegateSignature(bool InIsLeftHand);
    void OnClose__DelegateSignature();
}; // Size: 0x328

#endif
