#ifndef UE4SS_SDK_UMG_SeasonPassMenuReward_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuReward_HPP

class UUMG_SeasonPassMenuReward_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UUMG_SeasonPassMenuBtn1_C* BtnUpgrade;                                      // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Upgrade;                                          // 0x0288 (size: 0x8)
    class UUMG_SeasonPassMenuRewardRank_C* PickupReward;                              // 0x0290 (size: 0x8)
    class UScrollBox* ScrollBox_Content;                                              // 0x0298 (size: 0x8)
    class UWidgetSwitcher* SwichIconPaid;                                             // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitchBgPaid;                                              // 0x02A8 (size: 0x8)
    class UWidgetSwitcher* SwitchPlan;                                                // 0x02B0 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_PaidPlanUnsubscribed;                        // 0x02B8 (size: 0x8)
    class UUMG_SeasonPassInfoIcon_C* UMG_SeasonPassInfoIcon;                          // 0x02C0 (size: 0x8)
    class UCanvasPanel* UpgradeDiscount;                                              // 0x02C8 (size: 0x8)
    bool bDesignCheck;                                                                // 0x02D0 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02D1 (size: 0x3)
    int32 PaidPlanIndex;                                                              // 0x02D4 (size: 0x4)
    bool bPaidPlanSubscribed;                                                         // 0x02D8 (size: 0x1)
    bool bIsValidDiscount;                                                            // 0x02D9 (size: 0x1)
    bool bIsValidSeasonProgress;                                                      // 0x02DA (size: 0x1)
    char padding_1[0x5];                                                              // 0x02DB (size: 0x5)
    class USBSeasonPassMenuRewardData* Data;                                          // 0x02E0 (size: 0x8)
    TArray<class UUMG_SeasonPassMenuRewardRankWrap_C*> RewardRankItemList;            // 0x02E8 (size: 0x10)
    FUMG_SeasonPassMenuReward_COnClickRewardItemIcon OnClickRewardItemIcon;           // 0x02F8 (size: 0x10)
    void OnClickRewardItemIcon(class USBSeasonPassMenuRewardItemData* RewardItemData);
    int32 CurrentPickupItemIndex;                                                     // 0x0308 (size: 0x4)
    int32 PickupUnit;                                                                 // 0x030C (size: 0x4)
    FUMG_SeasonPassMenuReward_COnClickUpgrade OnClickUpgrade;                         // 0x0310 (size: 0x10)
    void OnClickUpgrade();

    void ChangePickupRewardIfNeeded(float ScrollOffset);
    void CreateRewardRankItem(class USBSeasonPassMenuRewardData* Data, int32 Rank);
    void ClearRewardRankItem();
    void SetData(class USBSeasonPassMenuRewardData* Data);
    void OnClickRankRewardItemIcon(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void BndEvt__PickupReward_K2Node_ComponentBoundEvent_0_OnClickItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void BndEvt__ScrollBox_57_K2Node_ComponentBoundEvent_1_OnUserScrolledEvent__DelegateSignature(float CurrentOffset);
    void Construct();
    void ScrollToRank(int32 Rank, bool AnimateScroll);
    void OnUpdateData();
    void UpdateDesign();
    void UpdateDesignAndData();
    void PreConstruct(bool IsDesignTime);
    void OnUpdateSeasonPassRank(class UObject* Sender, class UObject* Param);
    void Destruct();
    void BndEvt__UMG_SeasonPassMenuReward_BtnUpgrade_K2Node_ComponentBoundEvent_3_EventOnClicked__DelegateSignature();
    void ExecuteUbergraph_UMG_SeasonPassMenuReward(int32 EntryPoint);
    void OnClickUpgrade__DelegateSignature();
    void OnClickRewardItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
}; // Size: 0x320

#endif
