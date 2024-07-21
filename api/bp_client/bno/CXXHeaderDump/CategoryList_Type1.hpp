#ifndef UE4SS_SDK_CategoryList_Type1_HPP
#define UE4SS_SDK_CategoryList_Type1_HPP

class UCategoryList_Type1_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UVerticalBox* CategoryList;                                                 // 0x02B8 (size: 0x8)
    class UCategoryList_Type1_Group_C* CategoryList_Type1_Group;                      // 0x02C0 (size: 0x8)
    class UImage* Frame;                                                              // 0x02C8 (size: 0x8)
    class UScrollBox* ScrollBox_List;                                                 // 0x02D0 (size: 0x8)
    TArray<int32> IDList;                                                             // 0x02D8 (size: 0x10)
    TArray<FString> NameList;                                                         // 0x02E8 (size: 0x10)
    int32 SelectedCategoryListIndex;                                                  // 0x02F8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02FC (size: 0x4)
    FCategoryList_Type1_CCategoryChanged CategoryChanged;                             // 0x0300 (size: 0x10)
    void CategoryChanged(int32 ItemIndex);
    TMap<class FString, class UCategoryList_Type1_Group_C*> GroupMap;                 // 0x0310 (size: 0x50)
    TMap<class FString, class FString> GroupNameList;                                 // 0x0360 (size: 0x50)
    TArray<FString> GroupList;                                                        // 0x03B0 (size: 0x10)
    TArray<class UCategoryList_Type1_Item_C*> ItemWidgetList;                         // 0x03C0 (size: 0x10)
    bool AlwaysShowScrollbar;                                                         // 0x03D0 (size: 0x1)
    char padding_1[0x3];                                                              // 0x03D1 (size: 0x3)
    FVector2D FrameSize;                                                              // 0x03D4 (size: 0x8)
    bool IsColorChange;                                                               // 0x03DC (size: 0x1)
    char padding_2[0x3];                                                              // 0x03DD (size: 0x3)
    TArray<int32> ColorChangeIndexList;                                               // 0x03E0 (size: 0x10)

    void SetColorChange(bool IsColorChange);
    void SetEnableAllNewIconEx(bool InIsActive);
    void SetNewIconEx(bool InIsActive, int32 LargeCategoryId, int32 MediumCategoryId);
    void MakeGroupWidget(FString GroupName, FString Text, int32 Index);
    void AddGroupList(FString Group, int32 ID, FString Name);
    void AddGroup(FString GroupName, FString Text);
    void SetScrollOffset(float Offset);
    void GetScrollOffset(float& Offset);
    void Check List New Icon Visible(bool& Result);
    int32 GetIndex(const int32& ID);
    void SetNewIconAll(bool IsActive);
    void SetNewIcon(int32 CategoryIndex, bool IsActive);
    void AddCategoryList(const int32& ID, const FString& Name);
    void GetSelectedCategoryListIndex(int32& SelectedCategoryListIndex);
    void GetSelectedID(int32& Output);
    void SetCategoryListSelected(int32 InListIndex, bool bSelected);
    void PreConstruct(bool IsDesignTime);
    void CreateList();
    void ClickListItem(int32 listIndex);
    void UpdateClickListItem(int32 listIndex);
    void ExecuteUbergraph_CategoryList_Type1(int32 EntryPoint);
    void CategoryChanged__DelegateSignature(int32 ItemIndex);
}; // Size: 0x3F0

#endif
