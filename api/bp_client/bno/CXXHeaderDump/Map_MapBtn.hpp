#ifndef UE4SS_SDK_Map_MapBtn_HPP
#define UE4SS_SDK_Map_MapBtn_HPP

class UMap_MapBtn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn01;                                                         // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* TxtTitle;                                              // 0x0288 (size: 0x8)
    class USBTextTableAsset* InTextTable;                                             // 0x0290 (size: 0x8)
    int32 InTextId;                                                                   // 0x0298 (size: 0x4)
    char padding_0[0x4];                                                              // 0x029C (size: 0x4)
    FMap_MapBtn_COnButtonClicked OnButtonClicked;                                     // 0x02A0 (size: 0x10)
    void OnButtonClicked();
    FName InTextName;                                                                 // 0x02B0 (size: 0x8)

    void SetHoveredSoundId(ESystemSE InSoundId);
    void SetPressedSoundId(ESystemSE InSoundId);
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_51_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Map_MapBtn_Btn01_K2Node_ComponentBoundEvent_0_OnButtonReleasedEvent__DelegateSignature();
    void BndEvt__Map_MapBtn_Btn01_K2Node_ComponentBoundEvent_3_OnButtonPressedEvent__DelegateSignature();
    void ExecuteUbergraph_Map_MapBtn(int32 EntryPoint);
    void OnButtonClicked__DelegateSignature();
}; // Size: 0x2B8

#endif
