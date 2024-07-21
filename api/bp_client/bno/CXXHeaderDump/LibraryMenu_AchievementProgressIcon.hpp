#ifndef UE4SS_SDK_LibraryMenu_AchievementProgressIcon_HPP
#define UE4SS_SDK_LibraryMenu_AchievementProgressIcon_HPP

class ULibraryMenu_AchievementProgressIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UAchievementRankIcon_C* AchievementRankIcon;                                // 0x0280 (size: 0x8)
    class UHorizontalBox* HorizontalBoxValue;                                         // 0x0288 (size: 0x8)
    class UTextBlock* TextNum;                                                        // 0x0290 (size: 0x8)
    int32 RankId;                                                                     // 0x0298 (size: 0x4)

    void SetParameter(int32 GetCount);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_LibraryMenu_AchievementProgressIcon(int32 EntryPoint);
}; // Size: 0x29C

#endif
