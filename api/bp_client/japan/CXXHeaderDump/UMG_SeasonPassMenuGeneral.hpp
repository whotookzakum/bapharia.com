#ifndef UE4SS_SDK_UMG_SeasonPassMenuGeneral_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuGeneral_HPP

class UUMG_SeasonPassMenuGeneral_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* RankupButtonGuide;                                        // 0x0280 (size: 0x8)
    class UUMG_SeasonPassMenuBtn1_C* BtnBuyRankUp;                                    // 0x0288 (size: 0x8)
    class UUMG_SeasonPassMenuBtn1_C* BtnPointShop;                                    // 0x0290 (size: 0x8)
    class UCmnBtn16_C* BtnRankUp;                                                     // 0x0298 (size: 0x8)
    class UCmnBtn01_C* BtnSeasonPassQuest;                                            // 0x02A0 (size: 0x8)
    class UCmnBtn16_C* BtnSeasonPassRewardAll;                                        // 0x02A8 (size: 0x8)
    class UCanvasPanel* CanvasPanel_SeasonPeriod;                                     // 0x02B0 (size: 0x8)
    class UImage* Image_RankupButtonGuide;                                            // 0x02B8 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_SeasonPeriodValue;                // 0x02C0 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_SeasonReceivePeriodValue;         // 0x02C8 (size: 0x8)
    class USBTextButton_C* SBTextButton_ToOfficialSite;                               // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_NeedPointValue;                              // 0x02D8 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_RankPointValue;                              // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_RankPurchaseDescription;                     // 0x02E8 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_RankUpDescription;                           // 0x02F0 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_RankUpNeedPoint;                             // 0x02F8 (size: 0x8)
    class UTextBlock* TextBlock_RankValue;                                            // 0x0300 (size: 0x8)
    class UTextBlock* TextBlock_SeasonName;                                           // 0x0308 (size: 0x8)
    class USBRuntimeTextBlock* TextBlock_SeasonQuest;                                 // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* ToOfficialSitetext;                                    // 0x0318 (size: 0x8)
    class UUMG_SeasonPassInfoIcon_C* UMG_SeasonPassInfoIcon;                          // 0x0320 (size: 0x8)
    class UUMG_SeasonPassInfoIcon_C* UMG_SeasonPassInfoIcon_1;                        // 0x0328 (size: 0x8)
    class UUMG_SeasonPassInfoIcon_C* UMG_SeasonPassInfoIcon_2;                        // 0x0330 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_SeasonPassTiming;                           // 0x0338 (size: 0x8)
    FUMG_SeasonPassMenuGeneral_COnClickUpgrade OnClickUpgrade;                        // 0x0340 (size: 0x10)
    void OnClickUpgrade();
    bool bDesignCheck;                                                                // 0x0350 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0351 (size: 0x7)
    FString PassName;                                                                 // 0x0358 (size: 0x10)
    int32 Rank;                                                                       // 0x0368 (size: 0x4)
    int32 Point;                                                                      // 0x036C (size: 0x4)
    int32 NeedPoint;                                                                  // 0x0370 (size: 0x4)
    int32 AutoRankupRank;                                                             // 0x0374 (size: 0x4)
    bool bIsShopOpened;                                                               // 0x0378 (size: 0x1)
    bool bIsMaxRank;                                                                  // 0x0379 (size: 0x1)
    bool bCanRankUp;                                                                  // 0x037A (size: 0x1)
    bool bIsPaidPlan;                                                                 // 0x037B (size: 0x1)
    int32 PaidPlanIndex;                                                              // 0x037C (size: 0x4)
    FUMG_SeasonPassMenuGeneral_COnClickRankUp OnClickRankUp;                          // 0x0380 (size: 0x10)
    void OnClickRankUp();
    FUMG_SeasonPassMenuGeneral_COnClickPointShop OnClickPointShop;                    // 0x0390 (size: 0x10)
    void OnClickPointShop();
    FUMG_SeasonPassMenuGeneral_COnClickBuyRankUp OnClickBuyRankUp;                    // 0x03A0 (size: 0x10)
    void OnClickBuyRankUp();
    class USBPlayerSeasonPassComponent* Comp;                                         // 0x03B0 (size: 0x8)
    bool bIsProgressValid;                                                            // 0x03B8 (size: 0x1)
    bool IsValidDiscount;                                                             // 0x03B9 (size: 0x1)
    char padding_1[0x6];                                                              // 0x03BA (size: 0x6)
    FUMG_SeasonPassMenuGeneral_COnClickQuest OnClickQuest;                            // 0x03C0 (size: 0x10)
    void OnClickQuest();
    bool bIsValidTiming;                                                              // 0x03D0 (size: 0x1)
    char padding_2[0x3];                                                              // 0x03D1 (size: 0x3)
    int32 SeasonPassTiming;                                                           // 0x03D4 (size: 0x4)
    FUMG_SeasonPassMenuGeneral_COnClickSeasonPassRewardAll OnClickSeasonPassRewardAll; // 0x03D8 (size: 0x10)
    void OnClickSeasonPassRewardAll();

    void UpdateRewardAllButtonState();
    void IsBuyRankUp(bool& OutValue);
    void IsPointShop(bool& OutValue);
    void BndEvt__CmnBtn16_K2Node_ComponentBoundEvent_4_EventOnClicked__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuBtn1_146_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void BndEvt__BtnBuyRankUp_K2Node_ComponentBoundEvent_3_EventOnClicked__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuGeneral_BtnSeasonPassQuest_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuGeneral_BtnCollectivelyReceives_K2Node_ComponentBoundEvent_2_EventOnClicked__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenuGeneral_SBTextButton_C_72_K2Node_ComponentBoundEvent_5_OnButtonClickedEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void SetData();
    void UpdateDesign();
    void OnUpdateData();
    void UpdateDesignAndData();
    void Construct();
    void ExecuteUbergraph_UMG_SeasonPassMenuGeneral(int32 EntryPoint);
    void OnClickSeasonPassRewardAll__DelegateSignature();
    void OnClickQuest__DelegateSignature();
    void OnClickBuyRankUp__DelegateSignature();
    void OnClickPointShop__DelegateSignature();
    void OnClickRankUp__DelegateSignature();
    void OnClickUpgrade__DelegateSignature();
}; // Size: 0x3E8

#endif
