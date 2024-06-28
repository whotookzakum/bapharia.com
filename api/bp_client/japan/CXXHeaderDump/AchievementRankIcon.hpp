#ifndef UE4SS_SDK_AchievementRankIcon_HPP
#define UE4SS_SDK_AchievementRankIcon_HPP

class UAchievementRankIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetSwitcher* SwitchRank;                                                // 0x0280 (size: 0x8)
    int32 RankId;                                                                     // 0x0288 (size: 0x4)

    void SetRank(int32 RankId);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_AchievementRankIcon(int32 EntryPoint);
}; // Size: 0x28C

#endif
