#ifndef UE4SS_SDK_MapWidget_MapPinnedPin_HPP
#define UE4SS_SDK_MapWidget_MapPinnedPin_HPP

class UMapWidget_MapPinnedPin_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* Button_0;                                                          // 0x0280 (size: 0x8)
    class UImage* Image_0;                                                            // 0x0288 (size: 0x8)
    class UMultiLineEditableTextBox* MultiLineTextBox;                                // 0x0290 (size: 0x8)
    class UOverlay* TextInputGrp;                                                     // 0x0298 (size: 0x8)
    class UMapWidget_IconTooltip3_C* ToolTip;                                         // 0x02A0 (size: 0x8)
    FMapPinInfo PinInfo;                                                              // 0x02A8 (size: 0x40)
    FMapWidget_MapPinnedPin_COnTextCommitted OnTextCommitted;                         // 0x02E8 (size: 0x10)
    void OnTextCommitted(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    int32 MaxWordCountPerLine;                                                        // 0x02F8 (size: 0x4)
    int32 MaxLineCount;                                                               // 0x02FC (size: 0x4)
    FString Comment;                                                                  // 0x0300 (size: 0x10)
    bool IsToolTipEnable;                                                             // 0x0310 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0311 (size: 0x7)
    FMapWidget_MapPinnedPin_COnPinBtnClicked OnPinBtnClicked;                         // 0x0318 (size: 0x10)
    void OnPinBtnClicked(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    bool IsShiftKeyPressed;                                                           // 0x0328 (size: 0x1)

    FEventReply OnKeyUp(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    FEventReply OnKeyDown(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    FEventReply OnPreviewKeyDown(FGeometry MyGeometry, FKeyEvent InKeyEvent);
    void SplitStringsByWordNumber(FString inString, int32 InWordNumber, TArray<FString>& OutSplitedStrings);
    void FormatStringBySpecifiedLineCntAndWordNum(FString inString, int32 InLineNumMax, int32 InWordNumMaxPerLine, FString& OutFormatedString);
    void SetInputToTextBox();
    void SetTextToTextBox(FText InText);
    void SetTooltipEnable(bool IsEnable);
    class UWidget* GetToolTipWidget_0();
    void GetComment(FString& Comment);
    void GetPinIconSize(FVector2D& OutSize);
    void SetPinInfo(FMapPinInfo InPinInfo);
    void GetPinInfo(FMapPinInfo& OutPinInfo);
    void SetTextBoxVisibility(bool IsVisible);
    void Construct();
    void BndEvt__Button_0_K2Node_ComponentBoundEvent_213_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__MultiLineEditableTextBox_0_K2Node_ComponentBoundEvent_79_OnMultiLineEditableTextBoxCommittedEvent__DelegateSignature(const FText& Text, TEnumAsByte<ETextCommit::Type> CommitMethod);
    void ForceTextCommit(FText InText);
    void HasNgWords();
    void DoFormatText(FText InText);
    void ExecuteUbergraph_MapWidget_MapPinnedPin(int32 EntryPoint);
    void OnPinBtnClicked__DelegateSignature(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void OnTextCommitted__DelegateSignature(class UMapWidget_MapPinnedPin_C* InPinnedPin);
}; // Size: 0x329

#endif
