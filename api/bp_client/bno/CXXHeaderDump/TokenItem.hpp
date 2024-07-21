#ifndef UE4SS_SDK_TokenItem_HPP
#define UE4SS_SDK_TokenItem_HPP

class UTokenItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* Amount;                                                // 0x0280 (size: 0x8)
    class UBorder* Border_0;                                                          // 0x0288 (size: 0x8)
    class UImage* Icon;                                                               // 0x0290 (size: 0x8)
    class USBButton_C* SBButton_C_121;                                                // 0x0298 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_Time;                             // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitcherBg;                                                // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Name;                                              // 0x02B0 (size: 0x8)
    FText DescText;                                                                   // 0x02B8 (size: 0x18)
    class UTokenTooltip_C* ToolTip;                                                   // 0x02D0 (size: 0x8)
    FLinearColor NormalAmountColor;                                                   // 0x02D8 (size: 0x10)
    FLinearColor NormalTimeColor;                                                     // 0x02E8 (size: 0x10)
    FLinearColor ExpiredColor;                                                        // 0x02F8 (size: 0x10)
    FDateTime DateTime;                                                               // 0x0308 (size: 0x8)

    class UWidget* GetToolTipWidget_0();
    void OnLoaded_D79227434D2250620D435BBAE24D370E(class UObject* Loaded);
    void OnLoaded_722B192B4CFD0BB02EAFCDB5FDEB7A4D(class UObject* Loaded);
    void SetMoneyData(class UTexture2D* IconImage, FString Name, int32 Amount, int32 Index);
    void Set Token Data(FMasterToken TokenData, int32 Amount, FDateTime EndOfTime, FDateTime LastRecoveryDate, class USBToken* Token, int32 Index);
    void SetExpiredTokenData(FMasterToken TokenData, int32 Amount, FDateTime EndTime, int32 Index);
    void ExecuteUbergraph_TokenItem(int32 EntryPoint);
}; // Size: 0x310

#endif
