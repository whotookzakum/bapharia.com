#ifndef UE4SS_SDK_UMG_MultipleSelectDialog_HPP
#define UE4SS_SDK_UMG_MultipleSelectDialog_HPP

class UUMG_MultipleSelectDialog_C : public USBMultipleSelectDialog
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02D0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02D8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02E0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_2;                                                // 0x02E8 (size: 0x8)
    class UTextBlock* MessageText;                                                    // 0x02F0 (size: 0x8)
    class UHorizontalBox* SelectionList;                                              // 0x02F8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0300 (size: 0x8)
    class UUMG_MultipleSelectDialog_Button_C* UMG_MultipleSelectDialog_Button;        // 0x0308 (size: 0x8)
    class UUMG_MultipleSelectDialog_Button_C* UMG_MultipleSelectDialog_Button_391;    // 0x0310 (size: 0x8)
    class UUMG_MultipleSelectDialog_Button_C* UMG_MultipleSelectDialog_Button_392;    // 0x0318 (size: 0x8)
    int32 CancelSelect;                                                               // 0x0320 (size: 0x4)
    bool bWindowOpen;                                                                 // 0x0324 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0325 (size: 0x3)
    int32 Select Index;                                                               // 0x0328 (size: 0x4)

    void HandleInit(const FText& Message, const TArray<FText>& Selections);
    void OnSelected_Event_0(int32 SelectIndex);
    void Destruct();
    void Construct();
    void CustomEvent_0();
    void SetCancelAction(const int32 SelectIndex);
    void SetDialogPosition(FVector2D InPosition);
    void WidgetAnimationEvt_AnimOut_K2Node_WidgetAnimationEvent_0();
    void ExecuteUbergraph_UMG_MultipleSelectDialog(int32 EntryPoint);
}; // Size: 0x32C

#endif
