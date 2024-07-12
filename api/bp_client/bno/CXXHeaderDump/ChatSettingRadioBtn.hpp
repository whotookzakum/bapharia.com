#ifndef UE4SS_SDK_ChatSettingRadioBtn_HPP
#define UE4SS_SDK_ChatSettingRadioBtn_HPP

class UChatSettingRadioBtn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_1;                                                // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_2;                                                // 0x0290 (size: 0x8)
    class UCanvasPanel* CanvasPanel_3;                                                // 0x0298 (size: 0x8)
    class UImage* Image_0;                                                            // 0x02A0 (size: 0x8)
    class UImage* Image_1;                                                            // 0x02A8 (size: 0x8)
    class UImage* Image_2;                                                            // 0x02B0 (size: 0x8)
    class UImage* Image_3;                                                            // 0x02B8 (size: 0x8)
    class USBRadioBtnCmn01_C* RadioBtn_0;                                             // 0x02C0 (size: 0x8)
    class USBRadioBtnCmn01_C* RadioBtn_1;                                             // 0x02C8 (size: 0x8)
    class USBRadioBtnCmn01_C* RadioBtn_2;                                             // 0x02D0 (size: 0x8)
    class USBRadioBtnCmn01_C* RadioBtn_3;                                             // 0x02D8 (size: 0x8)
    TEnumAsByte<ESBChatLogWindowSlot::Type> ChatLogWindowSlot;                        // 0x02E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02E1 (size: 0x7)
    TArray<bool> UseBtnIds;                                                           // 0x02E8 (size: 0x10)
    TArray<class UCanvasPanel*> BtnArray;                                             // 0x02F8 (size: 0x10)
    FChatSettingRadioBtn_COnChange OnChange;                                          // 0x0308 (size: 0x10)
    void OnChange(int32 InSelectBtnId);
    int32 SelectBtnId;                                                                // 0x0318 (size: 0x4)

    void InitBtnSetting(int32 BtnId, bool InEnable);
    void BndEvt__UnreadNotifyRadioBtn_RadioBtn_ON_K2Node_ComponentBoundEvent_0_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void BndEvt__UnreadNotifyRadioBtn_RadioBtn_OFF_K2Node_ComponentBoundEvent_1_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void UpdateBlocker();
    void Construct();
    void BndEvt__ChatSettingRadioBtn_RadioBtn_2_K2Node_ComponentBoundEvent_2_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void BndEvt__ChatSettingRadioBtn_RadioBtn_3_K2Node_ComponentBoundEvent_3_OnCheckBoxComponentStateChanged__DelegateSignature(bool bIsChecked);
    void ExecuteUbergraph_ChatSettingRadioBtn(int32 EntryPoint);
    void OnChange__DelegateSignature(int32 InSelectBtnId);
}; // Size: 0x31C

#endif
