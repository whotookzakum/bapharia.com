#ifndef UE4SS_SDK_Effect_Active_HPP
#define UE4SS_SDK_Effect_Active_HPP

class UEffect_Active_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0280 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_Value;                            // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Name;                                              // 0x0290 (size: 0x8)
    bool IsShowTooltip;                                                               // 0x0298 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0299 (size: 0x7)
    FString AttribText;                                                               // 0x02A0 (size: 0x10)

    class UWidget* GetToolTipWidget_0();
    void Set Data(bool IsShowTooltip, FString Name, int32 Value, FString ToolTipText);
    void SetDataByFloatValue(FString Name, float Value);
    void SetDataByDateTIme(FString Name, FDateTime Time, bool bHideYear);
    void SetValueVisible(bool bVisible);
    void ExecuteUbergraph_Effect_Active(int32 EntryPoint);
}; // Size: 0x2B0

#endif
