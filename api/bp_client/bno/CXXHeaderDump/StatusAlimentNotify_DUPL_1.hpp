#ifndef UE4SS_SDK_StatusAlimentNotify_DUPL_1_HPP
#define UE4SS_SDK_StatusAlimentNotify_DUPL_1_HPP

class UStatusAlimentNotify_C : public USBStatusAlimentNotifyWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A0 (size: 0x8)
    class UWidgetAnimation* AnimInOut;                                                // 0x02A8 (size: 0x8)
    class UWidgetSwitcher* BasePlateSwitcher;                                         // 0x02B0 (size: 0x8)
    class UBufIcon_C* BufIcon;                                                        // 0x02B8 (size: 0x8)
    class UWidgetSwitcher* PlateCaverSwitcher;                                        // 0x02C0 (size: 0x8)
    class UTextBlock* TextStatus;                                                     // 0x02C8 (size: 0x8)
    TMap<class FString, class FSlateColor> TextStatusColors;                          // 0x02D0 (size: 0x50)
    TMap<class FString, class FSlateColor> TextBgColors;                              // 0x0320 (size: 0x50)

    void SetIconCover(const FSBStatusAilmentIconConfig& SBStatusAilmentIconConfig, ESBStatusAilmentPlateType InPlateType);
    void SetIcon(FSBStatusAilmentIconConfig InStatusAlimentIconConfig, ESBStatusAilmentPlateType InType);
    void SetText(const FSBStatusAilmentIconConfig& SBStatusAilmentIconConfig, const FName InTextId);
    void SetBasePlate(ESBStatusAilmentPlateType Type, FSBStatusAilmentIconConfig SBStatusAilmentIconConfig);
    void Init_Internal(FSBStatusAilmentIconConfig Status AlimentIcon Config, const FName InTextId, ESBStatusAilmentPlateType Type);
    void BP_Play(class AActor* OwnerActor, FSBStatusAilmentIconConfig InputPin);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_StatusAlimentNotify(int32 EntryPoint);
}; // Size: 0x370

#endif
