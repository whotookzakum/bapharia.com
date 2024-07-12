#ifndef UE4SS_SDK_UMG_LiquidMemoryItem_HPP
#define UE4SS_SDK_UMG_LiquidMemoryItem_HPP

class UUMG_LiquidMemoryItem_C : public UUserWidget
{
    class UImage* ActivateOn;                                                         // 0x0278 (size: 0x8)
    class UUMG_LiquidMemoryBottleStatus_C* BottleStatus;                              // 0x0280 (size: 0x8)
    class UCmnBonusSmall_C* CmnBonus;                                                 // 0x0288 (size: 0x8)
    class UHorizontalBox* HorizontalBox_RemainingUseTime;                             // 0x0290 (size: 0x8)
    class UImage* Line_1;                                                             // 0x0298 (size: 0x8)
    class UImage* Line_2;                                                             // 0x02A0 (size: 0x8)
    class UImage* LineImage;                                                          // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Activated;                                         // 0x02B0 (size: 0x8)
    class UTextBlock* Txt_ActivateLevel;                                              // 0x02B8 (size: 0x8)
    class UTextBlock* Txt_Condition_1;                                                // 0x02C0 (size: 0x8)
    class UTextBlock* Txt_Condition_2;                                                // 0x02C8 (size: 0x8)
    class USBRuntimeTextBlock* Txt_EfficacyTitle;                                     // 0x02D0 (size: 0x8)
    class UTextBlock* Txt_EfficacyType;                                               // 0x02D8 (size: 0x8)
    class UTextBlock* Txt_RemainingUseCount;                                          // 0x02E0 (size: 0x8)
    class USBDateTimeTextBlock* Txt_RemainingUseTime;                                 // 0x02E8 (size: 0x8)
    class UVerticalBox* VerticalBox_AccumulateConditions;                             // 0x02F0 (size: 0x8)
    class UVerticalBox* VerticalBox_ActivateInfo;                                     // 0x02F8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_63;                                         // 0x0300 (size: 0x8)
    TArray<FSBTextTableHash> ConditionTypeNameTextIds;                                // 0x0308 (size: 0x10)
    class UUMG_RewardBoostTooltip_C* BonusToolTip;                                    // 0x0318 (size: 0x8)

    void UpdateBonusStatus(int32 LiquidMemoryId, bool& Visible);
    void Setup Tooltip Widget(TArray<FSBRewardBoostTooltipData>& DataList);
    void SetAccumulateConditionText(TArray<FSBTextTableHash>& InTextId);
    void SetBottleStatus(bool InIsLiquidMemoryInfoValid, FSBLiquidMemoryInfo InLiquidMemoryInfo);
    void SetEfficacyTypeText(FSBTextTableHash InNameTextId, const FSBTextTableHash& InDescTextId);
}; // Size: 0x320

#endif
