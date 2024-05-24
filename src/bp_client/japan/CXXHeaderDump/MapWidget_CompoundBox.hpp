#ifndef UE4SS_SDK_MapWidget_CompoundBox_HPP
#define UE4SS_SDK_MapWidget_CompoundBox_HPP

class UMapWidget_CompoundBox_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasForOptionWidget;                                        // 0x0288 (size: 0x8)
    class USBComboBox_C* SBComboBox;                                                  // 0x0290 (size: 0x8)
    class USizeBox* SizeBox_OptionWidget;                                             // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* TitleLabel;                                            // 0x02A0 (size: 0x8)
    FMapWidget_CompoundBox_COnItemSelected OnItemSelected;                            // 0x02A8 (size: 0x10)
    void OnItemSelected(FString InSelectedItemName, int32 InSelectedItemId);
    class UUserWidget* OptionWidget;                                                  // 0x02B8 (size: 0x8)
    FMapWidget_CompoundBox_COnListBoxOpened OnListBoxOpened;                          // 0x02C0 (size: 0x10)
    void OnListBoxOpened();
    FMapWidget_CompoundBox_COnListBoxClosed OnListBoxClosed;                          // 0x02D0 (size: 0x10)
    void OnListBoxClosed();
    bool bIsSelectOpen;                                                               // 0x02E0 (size: 0x1)

    void ClearComboBox();
    class UWidget* On_CBox_1_GenerateWidget_0(FString item);
    void SetComboBoxEnable(bool IsEnable);
    void SetTitleTextId(int32 InTextId);
    void SetTitleText(FText InText);
    void SetOptionWidgetVisibility(bool IsVisible);
    void SetWidgetToOptionCanvas(class UUserWidget* InUserWidget);
    void SetComboBoxItemSelected(FString InItemName);
    void AddItemToComboBox(FString InItemName);
    void Destruct();
    void BndEvt__SBComboBox_K2Node_ComponentBoundEvent_1_OnSelectionChangedEvent__DelegateSignature(FString SelectedItem, TEnumAsByte<ESelectInfo::Type> SelectionType);
    void BndEvt__SBComboBox_K2Node_ComponentBoundEvent_2_OnOpeningEvent__DelegateSignature();
    void BndEvt__SBComboBox_K2Node_ComponentBoundEvent_3_OnClosingEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_CompoundBox(int32 EntryPoint);
    void OnListBoxClosed__DelegateSignature();
    void OnListBoxOpened__DelegateSignature();
    void OnItemSelected__DelegateSignature(FString InSelectedItemName, int32 InSelectedItemId);
}; // Size: 0x2E1

#endif
