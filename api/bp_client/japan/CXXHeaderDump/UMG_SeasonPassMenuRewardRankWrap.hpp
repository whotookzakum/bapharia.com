#ifndef UE4SS_SDK_UMG_SeasonPassMenuRewardRankWrap_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuRewardRankWrap_HPP

class UUMG_SeasonPassMenuRewardRankWrap_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_82;                                               // 0x0280 (size: 0x8)
    FUMG_SeasonPassMenuRewardRankWrap_COnClickItemIcon OnClickItemIcon;               // 0x0288 (size: 0x10)
    void OnClickItemIcon(class USBSeasonPassMenuRewardItemData* RewardItemData);
    class UUMG_SeasonPassMenuRewardRank_C* SeasonPassMenuRewardRank;                  // 0x0298 (size: 0x8)

    void SetData(class USBSeasonPassMenuRewardRankData* Data, float Duration);
    void CustomEvent_0(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void OnUpdateData();
    void Destruct();
    void ExecuteUbergraph_UMG_SeasonPassMenuRewardRankWrap(int32 EntryPoint);
    void OnClickItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
}; // Size: 0x2A0

#endif
