#ifndef UE4SS_SDK_Effect_Ability_HPP
#define UE4SS_SDK_Effect_Ability_HPP

class UEffect_Ability_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* Txt_EffectName;                                        // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Type;                                              // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Value;                                             // 0x0290 (size: 0x8)
    ESBCharaEquipType EquipPosition;                                                  // 0x0298 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0299 (size: 0x3)
    int32 Values;                                                                     // 0x029C (size: 0x4)
    FString String;                                                                   // 0x02A0 (size: 0x10)
    class UWBP_CommonToolTipDetail_Fixed_C* ToolTipC;                                 // 0x02B0 (size: 0x8)
    class UWBP_CommonToolTipDetail_Variable_C* ToolTipB;                              // 0x02B8 (size: 0x8)
    bool NumOnlyMode;                                                                 // 0x02C0 (size: 0x1)

    class UWidget* Get_Txt_EffectName_ToolTipWidget_0();
    void SetToolTipCType(FText InName, FText Type, FText InDesc);
    void SetToolTipBType(FText InName, FText InDesc);
    void Construct();
    void ExecuteUbergraph_Effect_Ability(int32 EntryPoint);
}; // Size: 0x2C1

#endif
