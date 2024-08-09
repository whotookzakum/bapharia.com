#ifndef UE4SS_SDK_UMG_AdminGotoBookmarkRegistrationWindowItem_HPP
#define UE4SS_SDK_UMG_AdminGotoBookmarkRegistrationWindowItem_HPP

class UUMG_AdminGotoBookmarkRegistrationWindowItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UEditableText* EditableText_0;                                              // 0x0280 (size: 0x8)
    class UTextBlock* TextBlock_ItemName;                                             // 0x0288 (size: 0x8)
    FText ItemName;                                                                   // 0x0290 (size: 0x18)
    FUMG_AdminGotoBookmarkRegistrationWindowItem_COnTextChanged OnTextChanged;        // 0x02A8 (size: 0x10)
    void OnTextChanged(FText Text);

    void SetText(FString InText);
    void GetText(FString& Text);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__EditableText_0_K2Node_ComponentBoundEvent_1_OnEditableTextChangedEvent__DelegateSignature(const FText& Text);
    void ExecuteUbergraph_UMG_AdminGotoBookmarkRegistrationWindowItem(int32 EntryPoint);
    void OnTextChanged__DelegateSignature(FText Text);
}; // Size: 0x2B8

#endif
