#ifndef UE4SS_SDK_CharaCreate_PosingSwitch_HPP
#define UE4SS_SDK_CharaCreate_PosingSwitch_HPP

class UCharaCreate_PosingSwitch_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* PosingSwitchBtnL;                                                  // 0x0280 (size: 0x8)
    class UButton* PosingSwitchBtnR;                                                  // 0x0288 (size: 0x8)
    FCharaCreate_PosingSwitch_COnClickedPosingSwitchBtnLeft OnClickedPosingSwitchBtnLeft; // 0x0290 (size: 0x10)
    void OnClickedPosingSwitchBtnLeft();
    bool IsDressVisibilityOn;                                                         // 0x02A0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02A1 (size: 0x7)
    FCharaCreate_PosingSwitch_COnClickedPosingSwitchBtnRight OnClickedPosingSwitchBtnRight; // 0x02A8 (size: 0x10)
    void OnClickedPosingSwitchBtnRight();

    void BndEvt__PosingSwitchBtn_L_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__PosingSwitchBtnR_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__PosingSwitchBtnL_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__PosingSwitchBtnR_K2Node_ComponentBoundEvent_5_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_CharaCreate_PosingSwitch(int32 EntryPoint);
    void OnClickedPosingSwitchBtnRight__DelegateSignature();
    void OnClickedPosingSwitchBtnLeft__DelegateSignature();
}; // Size: 0x2B8

#endif
