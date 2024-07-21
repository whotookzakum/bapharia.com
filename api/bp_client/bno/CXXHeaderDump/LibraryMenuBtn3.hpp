#ifndef UE4SS_SDK_LibraryMenuBtn3_HPP
#define UE4SS_SDK_LibraryMenuBtn3_HPP

class ULibraryMenuBtn3_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Txt1;                                                  // 0x0288 (size: 0x8)
    class USBTextTableAsset* InTextTable;                                             // 0x0290 (size: 0x8)
    int32 InTextId;                                                                   // 0x0298 (size: 0x4)
    char padding_0[0x4];                                                              // 0x029C (size: 0x4)
    FLibraryMenuBtn3_CEventOnClicked EventOnClicked;                                  // 0x02A0 (size: 0x10)
    void EventOnClicked();
    FName InTextName;                                                                 // 0x02B0 (size: 0x8)
    int32 InFontSize;                                                                 // 0x02B8 (size: 0x4)
    char padding_1[0x4];                                                              // 0x02BC (size: 0x4)
    class UAkAudioEvent* PressedSound;                                                // 0x02C0 (size: 0x8)
    class UAkAudioEvent* HoveredSound;                                                // 0x02C8 (size: 0x8)
    ESystemSE PressedSoundId;                                                         // 0x02D0 (size: 0x1)
    ESystemSE HoveredSoundId;                                                         // 0x02D1 (size: 0x1)

    void SetSoundID(ESystemSE SoundId);
    void SetTextName(FName InTextName);
    void SetTextId(int32 TextId);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_113_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_130_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_140_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenuBtn3(int32 EntryPoint);
    void EventOnClicked__DelegateSignature();
}; // Size: 0x2D2

#endif
