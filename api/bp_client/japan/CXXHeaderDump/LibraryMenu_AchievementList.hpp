#ifndef UE4SS_SDK_LibraryMenu_AchievementList_HPP
#define UE4SS_SDK_LibraryMenu_AchievementList_HPP

class ULibraryMenu_AchievementList_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimItemIn;                                               // 0x02B0 (size: 0x8)
    class UVerticalBox* ItemList;                                                     // 0x02B8 (size: 0x8)
    class ULibraryMenu_AchievementListItem_C* LibraryMenu_AchievementListItem;        // 0x02C0 (size: 0x8)
    class ULibraryMenu_AchievementListItem_C* LibraryMenu_AchievementListItem_120;    // 0x02C8 (size: 0x8)
    FLibraryMenu_AchievementList_CCategoryChanged CategoryChanged;                    // 0x02D0 (size: 0x10)
    void CategoryChanged(int32 ItemIndex);

    void SetAchievementTitle();
    void CheckItemListNewIcon(bool& Result);
    void SetItemListSelected(int32 listIndex, bool bSelected);
    void Construct();
    void ExecuteUbergraph_LibraryMenu_AchievementList(int32 EntryPoint);
    void CategoryChanged__DelegateSignature(int32 ItemIndex);
}; // Size: 0x2E0

#endif
