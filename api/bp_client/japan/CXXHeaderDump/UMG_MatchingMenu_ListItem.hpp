#ifndef UE4SS_SDK_UMG_MatchingMenu_ListItem_HPP
#define UE4SS_SDK_UMG_MatchingMenu_ListItem_HPP

class UUMG_MatchingMenu_ListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UEventIcon_C* EventIcon;                                                    // 0x0280 (size: 0x8)
    class UImage* ImagComplete;                                                       // 0x0288 (size: 0x8)
    class UImage* ImageClock;                                                         // 0x0290 (size: 0x8)
    class UImage* ImageNew;                                                           // 0x0298 (size: 0x8)
    class USBButton_C* ItemButton;                                                    // 0x02A0 (size: 0x8)
    class UTextBlock* RecommendLevelText;                                             // 0x02A8 (size: 0x8)
    class UTextBlock* TxtName;                                                        // 0x02B0 (size: 0x8)
    FName DungeonId;                                                                  // 0x02B8 (size: 0x8)
    FSBMapInfo DungeonMapInfo;                                                        // 0x02C0 (size: 0x1D8)
    FUMG_MatchingMenu_ListItem_COnSelected OnSelected;                                // 0x0498 (size: 0x10)
    void OnSelected(FSBMapInfo DungeonMapInfo, class UUMG_MatchingMenu_ListItem_C* ListItem);
    class UUMG_RewardBoostTooltip_C* RewardBoostTooltip;                              // 0x04A8 (size: 0x8)

    void SetVisibilityNew(bool bShow);
    class UWidget* Get_ItemButton_ToolTipWidget_0();
    void SetSelect(bool Select);
    void UpdateStyle(bool IsFocus);
    void Construct();
    void BndEvt__ItemButton_K2Node_ComponentBoundEvent_123_OnButtonClickedEvent__DelegateSignature();
    void Destruct();
    void OnUpdateRewardBoostInfo(class UObject* Sender, class UObject* Param);
    void UpdateBonusIcon();
    void ExecuteUbergraph_UMG_MatchingMenu_ListItem(int32 EntryPoint);
    void OnSelected__DelegateSignature(FSBMapInfo DungeonMapInfo, class UUMG_MatchingMenu_ListItem_C* ListItem);
}; // Size: 0x4B0

#endif
