#ifndef UE4SS_SDK_Effect_Drink_HPP
#define UE4SS_SDK_Effect_Drink_HPP

class UEffect_Drink_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HorizontalBox_Value;                                        // 0x0280 (size: 0x8)
    class UWidgetSwitcher* Sw_TextSwitch;                                             // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Name;                                              // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Ready;                                             // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Value;                                             // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* Txt_ValueType;                                         // 0x02A8 (size: 0x8)
    bool IsActive;                                                                    // 0x02B0 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02B1 (size: 0x3)
    int32 ValueTypeId;                                                                // 0x02B4 (size: 0x4)

    void PreConstruct(bool IsDesignTime);
    void ActiveData(FString Name, float Value, ESBLiquidMemoryEfficacyValueType EffucaryValueType);
    void NonAct iveData(FString inString);
    void ExecuteUbergraph_Effect_Drink(int32 EntryPoint);
}; // Size: 0x2B8

#endif
