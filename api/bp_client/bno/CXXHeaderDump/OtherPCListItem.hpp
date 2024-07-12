#ifndef UE4SS_SDK_OtherPCListItem_HPP
#define UE4SS_SDK_OtherPCListItem_HPP

class UOtherPCListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn1;                                                          // 0x0280 (size: 0x8)
    class UTextBlock* PlayerNameText;                                                 // 0x0288 (size: 0x8)
    class UTensionTagIcon_C* TensionTagIcon;                                          // 0x0290 (size: 0x8)
    FOtherPCListItem_COnClick OnClick;                                                // 0x0298 (size: 0x10)
    void OnClick(int32 listIndex);
    FText PlayerName;                                                                 // 0x02A8 (size: 0x18)
    int32 ListId;                                                                     // 0x02C0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02C4 (size: 0x4)
    class ASBPlayerState* PlayerState;                                                // 0x02C8 (size: 0x8)
    FName CharacterId;                                                                // 0x02D0 (size: 0x8)

    void GetPlayerState(class ASBPlayerState*& OutPlayerState);
    void SetEnable(bool bEnable);
    void SetInfo(FString Name, ESBTensionTagType TensionTag, class ASBPlayerState* OtherPlayerState);
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_OtherPCListItem(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 listIndex);
}; // Size: 0x2D8

#endif
