#ifndef UE4SS_SDK_UMG_SeasonPassMenuMain_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuMain_HPP

class UUMG_SeasonPassMenuMain_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCmnBtn01_C* BtnSeasonPassQuest;                                            // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_SeasonPeriod;                                     // 0x0288 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_SeasonPeriodValue;                // 0x0290 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_SeasonReceivePeriodValue;         // 0x0298 (size: 0x8)
    class UTextBlock* TextBlock_SeasonName;                                           // 0x02A0 (size: 0x8)
    class UUMG_SeasonPassMenuReward_C* UMG_SeasonPassMenuReward;                      // 0x02A8 (size: 0x8)
    class UUMG_SeasonPassMenuGeneral_C* WBP_SeasonPassMenuGeneral;                    // 0x02B0 (size: 0x8)
    FUMG_SeasonPassMenuMain_COnClickUpgrade OnClickUpgrade;                           // 0x02B8 (size: 0x10)
    void OnClickUpgrade();
    FUMG_SeasonPassMenuMain_COnClickRewardItemIcon OnClickRewardItemIcon;             // 0x02C8 (size: 0x10)
    void OnClickRewardItemIcon(class USBSeasonPassMenuRewardItemData* RewardItemData);
    FUMG_SeasonPassMenuMain_COnClickRankUp OnClickRankUp;                             // 0x02D8 (size: 0x10)
    void OnClickRankUp();
    FUMG_SeasonPassMenuMain_COnClickPointShop OnClickPointShop;                       // 0x02E8 (size: 0x10)
    void OnClickPointShop();
    FUMG_SeasonPassMenuMain_COnClickBuyRankUp OnClickBuyRankUp;                       // 0x02F8 (size: 0x10)
    void OnClickBuyRankUp();
    FUMG_SeasonPassMenuMain_COnClickQuest OnClickQuest;                               // 0x0308 (size: 0x10)
    void OnClickQuest();
    class USBPlayerSeasonPassComponent* Comp;                                         // 0x0318 (size: 0x8)
    bool IsSeasonPassProgressValid;                                                   // 0x0320 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0321 (size: 0x7)
    FUMG_SeasonPassMenuMain_COnClickSeasonPassRewardAll OnClickSeasonPassRewardAll;   // 0x0328 (size: 0x10)
    void OnClickSeasonPassRewardAll();

    void SetData(class USBSeasonPassMenuRewardData* RewardData);
    void BndEvt__WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_0_OnClickUpgrade__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuReward_K2Node_ComponentBoundEvent_1_OnClickRewardItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void BndEvt__WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_2_OnClickRankUp__DelegateSignature();
    void BndEvt__WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_3_OnClickPointShop__DelegateSignature();
    void BndEvt__WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_4_OnClickBuyRankUp__DelegateSignature();
    void UpdateDesign();
    void UpdateDesignAndData();
    void OnUpdateData();
    void BndEvt__BtnSeasonPassQuest_K2Node_ComponentBoundEvent_6_EventOnClicked__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuMain_WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_5_OnClickQuest__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuMain_UMG_SeasonPassMenuReward_K2Node_ComponentBoundEvent_7_OnClickUpgrade__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuMain_WBP_SeasonPassMenuGeneral_K2Node_ComponentBoundEvent_9_OnClickSeasonPassRewardAll__DelegateSignature();
    void ExecuteUbergraph_UMG_SeasonPassMenuMain(int32 EntryPoint);
    void OnClickSeasonPassRewardAll__DelegateSignature();
    void OnClickQuest__DelegateSignature();
    void OnClickBuyRankUp__DelegateSignature();
    void OnClickPointShop__DelegateSignature();
    void OnClickRankUp__DelegateSignature();
    void OnClickRewardItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void OnClickUpgrade__DelegateSignature();
}; // Size: 0x338

#endif
