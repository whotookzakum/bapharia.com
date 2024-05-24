#ifndef UE4SS_SDK_LibraryMenu_Search_HPP
#define UE4SS_SDK_LibraryMenu_Search_HPP

class ULibraryMenu_Search_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class USBButton_C* ResetButton;                                                   // 0x02B8 (size: 0x8)
    class UWidgetSwitcher* SwitchSearchBg;                                            // 0x02C0 (size: 0x8)
    class UEditableTextBox* TextBoxPlayerName;                                        // 0x02C8 (size: 0x8)
    FLibraryMenu_Search_COnTextChange OnTextChange;                                   // 0x02D0 (size: 0x10)
    void OnTextChange(FText NewParam);

    void GetSerchKeyword(FString& SerchKeyword);
    void ClearText();
    void BndEvt__TextBoxPlayerName_K2Node_ComponentBoundEvent_0_OnEditableTextBoxChangedEvent__DelegateSignature(const FText& Text);
    void BndEvt__ResetButton_K2Node_ComponentBoundEvent_223_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ResetButton_K2Node_ComponentBoundEvent_246_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ResetButton_K2Node_ComponentBoundEvent_267_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_Search(int32 EntryPoint);
    void OnTextChange__DelegateSignature(FText NewParam);
}; // Size: 0x2E0

#endif
