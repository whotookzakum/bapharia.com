#ifndef UE4SS_SDK_UMG_SeasonPassMenuRewardItem_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuRewardItem_HPP

class UUMG_SeasonPassMenuRewardItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UOverlay* CantReceiveIcon;                                                  // 0x0280 (size: 0x8)
    class UCommonIcon_C* CommonIcon;                                                  // 0x0288 (size: 0x8)
    class UImage* Image_MaxRankEffect;                                                // 0x0290 (size: 0x8)
    class UTextBlock* TextBlock_DebugText;                                            // 0x0298 (size: 0x8)
    FUMG_SeasonPassMenuRewardItem_COnClick OnClick;                                   // 0x02A0 (size: 0x10)
    void OnClick(class USBSeasonPassMenuRewardItemData* Data);
    bool bDesignCheck;                                                                // 0x02B0 (size: 0x1)
    ESBSeasonPassRewardItemState State;                                               // 0x02B1 (size: 0x1)
    bool bIsMax;                                                                      // 0x02B2 (size: 0x1)
    char padding_0[0x5];                                                              // 0x02B3 (size: 0x5)
    class USBSeasonPassMenuRewardItemData* Data;                                      // 0x02B8 (size: 0x8)

    void SetDebugText(class USBSeasonPassMenuRewardItemData* Data);
    void SetData(class USBSeasonPassMenuRewardItemData* Data);
    void OnUpdateData();
    void UpdateDesign();
    void UpdateDesignAndData();
    void PreConstruct(bool IsDesignTime);
    void DesignCheck(bool bIsAchieved, bool bIsMax);
    void BndEvt__UMG_SeasonPassMenuRewardItem_CommonIcon_K2Node_ComponentBoundEvent_1_OnClick__DelegateSignature(class UCommonIcon_C* Sender);
    void ExecuteUbergraph_UMG_SeasonPassMenuRewardItem(int32 EntryPoint);
    void OnClick__DelegateSignature(class USBSeasonPassMenuRewardItemData* Data);
}; // Size: 0x2C0

#endif
