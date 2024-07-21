#ifndef UE4SS_SDK_MapWidget_DividedZoneListItem_HPP
#define UE4SS_SDK_MapWidget_DividedZoneListItem_HPP

class UMapWidget_DividedZoneListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn01;                                                         // 0x0280 (size: 0x8)
    class UTextBlock* TxtDividedZoneName;                                             // 0x0288 (size: 0x8)
    FString DividedZoneId;                                                            // 0x0290 (size: 0x10)
    FMapWidget_DividedZoneListItem_COnClicked OnClicked;                              // 0x02A0 (size: 0x10)
    void OnClicked(class UMapWidget_DividedZoneListItem_C* InSelf, FString InDividedZoneId);
    FSlateBrush Btn01NormalButtonStyleDefault;                                        // 0x02B0 (size: 0x88)
    FSlateBrush Btn01HoveredButtonStyleDefault;                                       // 0x0338 (size: 0x88)
    FSlateBrush Btn01PressedButtonStyleDefault;                                       // 0x03C0 (size: 0x88)
    bool IsSelected;                                                                  // 0x0448 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0449 (size: 0x7)
    FSlateColor Btn01NormalTintDefault;                                               // 0x0450 (size: 0x28)
    FSlateColor Btn01HoveredTintDefault;                                              // 0x0478 (size: 0x28)
    FSlateColor Btn01PressedTintDefault;                                              // 0x04A0 (size: 0x28)

    void SetSelected(bool InIsSelected);
    void SetIsEnable(bool InIsSelectable);
    void Setup(FString InDividedZoneId);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_3_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_DividedZoneListItem(int32 EntryPoint);
    void OnClicked__DelegateSignature(class UMapWidget_DividedZoneListItem_C* InSelf, FString InDividedZoneId);
}; // Size: 0x4C8

#endif
