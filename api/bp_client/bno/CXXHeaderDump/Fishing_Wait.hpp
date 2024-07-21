#ifndef UE4SS_SDK_Fishing_Wait_HPP
#define UE4SS_SDK_Fishing_Wait_HPP

class UFishing_Wait_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* BtnShowHint;                                                   // 0x0280 (size: 0x8)
    class UEditableTextBox* EditableTextBox_01;                                       // 0x0288 (size: 0x8)
    class UEditableTextBox* EditableTextBox_02;                                       // 0x0290 (size: 0x8)
    class UImage* Fishing_BG01;                                                       // 0x0298 (size: 0x8)
    class UImage* Fishing_Line01;                                                     // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock;                                    // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_441;                                // 0x02B0 (size: 0x8)
    FFishing_Wait_CExitFinshing ExitFinshing;                                         // 0x02B8 (size: 0x10)
    void ExitFinshing();
    class UBP_Dialog_C* BP_Dialog;                                                    // 0x02C8 (size: 0x8)
    FText Message;                                                                    // 0x02D0 (size: 0x18)
    FDataTableRowHandle Data Table Row Handle;                                        // 0x02E8 (size: 0x10)

    void CheckFirstOpen(bool& Ret);
    void Init();
    void CheckBackPack(bool& Ret);
    void Construct();
    void DialogAction(EDialogResult Result);
    void Warning_BackPackIsFull();
    void BndEvt__Fishing_Wait_BtnShowHint_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void ExecuteUbergraph_Fishing_Wait(int32 EntryPoint);
    void ExitFinshing__DelegateSignature();
}; // Size: 0x2F8

#endif
