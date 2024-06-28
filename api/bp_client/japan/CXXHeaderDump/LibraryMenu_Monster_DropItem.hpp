#ifndef UE4SS_SDK_LibraryMenu_Monster_DropItem_HPP
#define UE4SS_SDK_LibraryMenu_Monster_DropItem_HPP

class ULibraryMenu_Monster_DropItem_C : public UUserWidget
{
    class UImage* BG;                                                                 // 0x0278 (size: 0x8)
    class UWidgetSwitcher* BgSwitch;                                                  // 0x0280 (size: 0x8)
    class UCommonIcon_C* CommonIcon;                                                  // 0x0288 (size: 0x8)
    class UImage* DisableIcon;                                                        // 0x0290 (size: 0x8)
    class UImage* InfoIcon;                                                           // 0x0298 (size: 0x8)
    class UWidgetSwitcher* ItemViewSwitch;                                            // 0x02A0 (size: 0x8)
    class UTextBlock* LevelText;                                                      // 0x02A8 (size: 0x8)
    class UImage* Light;                                                              // 0x02B0 (size: 0x8)
    class UImage* NewIcon;                                                            // 0x02B8 (size: 0x8)
    class UImage* RareBG;                                                             // 0x02C0 (size: 0x8)
    class UWBP_CommonToolTipDetail_Variable_C* ToolTip;                               // 0x02C8 (size: 0x8)

    void SetUnknownData(int32 LevelMin, int32 LevelMax, bool Rare);
    void SetDataLottery(ESBRewardItemType RewardType, int32 ItemId, int32 LevelMin, int32 LevelMax, bool Rare);
    void DropMask(int32 OpenCount, int32 NowCount);
    void SetData(EItemType ItemType, int32 ItemId, int32 LevelMin, int32 LevelMax, bool NewIconVisible, bool Rare);
}; // Size: 0x2D0

#endif
