#ifndef UE4SS_SDK_MapWidget_MapScrollBar_HPP
#define UE4SS_SDK_MapWidget_MapScrollBar_HPP

class UMapWidget_MapScrollBar_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USlider* SliderH;                                                           // 0x0280 (size: 0x8)
    class USlider* SliderV;                                                           // 0x0288 (size: 0x8)
    float OldSliderHValue;                                                            // 0x0290 (size: 0x4)
    float NewSliderHValue;                                                            // 0x0294 (size: 0x4)
    float OldSliderVValue;                                                            // 0x0298 (size: 0x4)
    float NewSliderVValue;                                                            // 0x029C (size: 0x4)
    float SliderHMinValue;                                                            // 0x02A0 (size: 0x4)
    float SliderHMaxValue;                                                            // 0x02A4 (size: 0x4)
    float SliderVMinValue;                                                            // 0x02A8 (size: 0x4)
    float SliderVMaxValue;                                                            // 0x02AC (size: 0x4)
    FMapWidget_MapScrollBar_COnSliderHValueChanged OnSliderHValueChanged;             // 0x02B0 (size: 0x10)
    void OnSliderHValueChanged(float InValue);
    FMapWidget_MapScrollBar_COnSliderVValueChanged OnSliderVValueChanged;             // 0x02C0 (size: 0x10)
    void OnSliderVValueChanged(float InValue);
    FMapWidget_MapScrollBar_COnMouseCaptureBegin OnMouseCaptureBegin;                 // 0x02D0 (size: 0x10)
    void OnMouseCaptureBegin();
    FMapWidget_MapScrollBar_COnMouseCaptureEnd OnMouseCaptureEnd;                     // 0x02E0 (size: 0x10)
    void OnMouseCaptureEnd();
    TEnumAsByte<ESlateBrushDrawType::Type> NewVar_0;                                  // 0x02F0 (size: 0x1)

    void GetSliderVMinAndMaxValue(float& OutMinValue, float& OutMaxValue);
    void GetSliderVMaxValue(float& OutValue);
    void GetSliderVMinValue(float& OutValue);
    void GetSliderVValue(float& OutValue);
    void GetSliderHMinAndMaxValue(float& OutMinValue, float& OutMaxValue);
    void GetSliderHMaxValue(float& OutValue);
    void GetSliderHMinValue(float& OutValue);
    void GetSliderHValue(float& OutValue);
    void SetSliderVMinAndMaxValue(float InMinValue, float InMaxValue);
    void SetSliderVMaxValue(float InValue);
    void SetSliderVMinValue(float InValue);
    void SetSliderVValue(float InValue);
    void SetSliderHMinAndMaxValue(float InMinValue, float InMaxValue);
    void SetSliderHMaxValue(float InValue);
    void SetSliderHMinValue(float InValue);
    void SetSliderHValue(float InValue);
    void BndEvt__SliderH_K2Node_ComponentBoundEvent_0_OnFloatValueChangedEvent__DelegateSignature(float Value);
    void BndEvt__SliderV_K2Node_ComponentBoundEvent_1_OnFloatValueChangedEvent__DelegateSignature(float Value);
    void BndEvt__SliderH_K2Node_ComponentBoundEvent_2_OnMouseCaptureBeginEvent__DelegateSignature();
    void BndEvt__SliderH_K2Node_ComponentBoundEvent_3_OnMouseCaptureEndEvent__DelegateSignature();
    void BndEvt__SliderV_K2Node_ComponentBoundEvent_4_OnMouseCaptureBeginEvent__DelegateSignature();
    void BndEvt__SliderV_K2Node_ComponentBoundEvent_5_OnMouseCaptureEndEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_MapScrollBar(int32 EntryPoint);
    void OnMouseCaptureEnd__DelegateSignature();
    void OnMouseCaptureBegin__DelegateSignature();
    void OnSliderVValueChanged__DelegateSignature(float InValue);
    void OnSliderHValueChanged__DelegateSignature(float InValue);
}; // Size: 0x2F1

#endif
