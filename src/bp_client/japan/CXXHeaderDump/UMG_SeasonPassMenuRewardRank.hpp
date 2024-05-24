#ifndef UE4SS_SDK_UMG_SeasonPassMenuRewardRank_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuRewardRank_HPP

class UUMG_SeasonPassMenuRewardRank_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Bg1Nomal;                                                           // 0x0280 (size: 0x8)
    class UImage* Bg1Pickup;                                                          // 0x0288 (size: 0x8)
    class UUMG_SeasonPassMenuRewardItem_C* FreeRewardIcon;                            // 0x0290 (size: 0x8)
    class UImage* Image_NewIcon_Normal;                                               // 0x0298 (size: 0x8)
    class UImage* Image_NewIcon_Pickup;                                               // 0x02A0 (size: 0x8)
    class UUMG_SeasonPassMenuRewardItem_C* SubscribedRewardIcon1;                     // 0x02A8 (size: 0x8)
    class UUMG_SeasonPassMenuRewardItem_C* SubscribedRewardIcon2;                     // 0x02B0 (size: 0x8)
    class UUMG_SeasonPassMenuRewardItem_C* SubscribedRewardIcon3;                     // 0x02B8 (size: 0x8)
    class UWidgetSwitcher* SwitchPaid;                                                // 0x02C0 (size: 0x8)
    class UWidgetSwitcher* SwitchPickup;                                              // 0x02C8 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_Max;                                         // 0x02D0 (size: 0x8)
    class UTextBlock* TextBlock_RankNormal;                                           // 0x02D8 (size: 0x8)
    class UTextBlock* TextBlock_RankPickup;                                           // 0x02E0 (size: 0x8)
    FUMG_SeasonPassMenuRewardRank_COnClickItemIcon OnClickItemIcon;                   // 0x02E8 (size: 0x10)
    void OnClickItemIcon(class USBSeasonPassMenuRewardItemData* RewardItemData);
    bool bDesignCheck;                                                                // 0x02F8 (size: 0x1)
    bool bPaidPlanSubscribed;                                                         // 0x02F9 (size: 0x1)
    bool bIsPickupReward;                                                             // 0x02FA (size: 0x1)
    bool bIsAchieved;                                                                 // 0x02FB (size: 0x1)
    bool bIsShowMax;                                                                  // 0x02FC (size: 0x1)
    bool bIsShowNewIcon;                                                              // 0x02FD (size: 0x1)
    char padding_0[0x2];                                                              // 0x02FE (size: 0x2)
    class USBSeasonPassMenuRewardRankData* Data;                                      // 0x0300 (size: 0x8)

    void SetRewardData(class USBSeasonPassMenuRewardRankData* Data);
    void PreConstruct(bool IsDesignTime);
    void SetData(class USBSeasonPassMenuRewardRankData* Data);
    void BndEvt__SubscribedRewardIcon1_K2Node_ComponentBoundEvent_0_OnClick__DelegateSignature(class USBSeasonPassMenuRewardItemData* Data);
    void BndEvt__FreeRewardIcon_K2Node_ComponentBoundEvent_1_OnClick__DelegateSignature(class USBSeasonPassMenuRewardItemData* Data);
    void BndEvt__SubscribedRewardIcon2_K2Node_ComponentBoundEvent_2_OnClick__DelegateSignature(class USBSeasonPassMenuRewardItemData* Data);
    void BndEvt__SubscribedRewardIcon3_K2Node_ComponentBoundEvent_3_OnClick__DelegateSignature(class USBSeasonPassMenuRewardItemData* Data);
    void UpdateDesign();
    void OnUpdateData();
    void UpdateDesignAndData();
    void DesignCheck(bool bPaidPlanSubscribed);
    void ExecuteUbergraph_UMG_SeasonPassMenuRewardRank(int32 EntryPoint);
    void OnClickItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
}; // Size: 0x308

#endif
