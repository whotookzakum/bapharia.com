#ifndef UE4SS_SDK_CategoryList_Type1_Group_HPP
#define UE4SS_SDK_CategoryList_Type1_Group_HPP

class UCategoryList_Type1_Group_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UExpandableArea* ExpandableArea;                                            // 0x0280 (size: 0x8)
    class UExpandableArea* ExpandableArea_64;                                         // 0x0288 (size: 0x8)
    class UTextBlock* GroupName;                                                      // 0x0290 (size: 0x8)
    class UTextBlock* GroupName_1;                                                    // 0x0298 (size: 0x8)
    class UImage* Image;                                                              // 0x02A0 (size: 0x8)
    class UImage* Image_155;                                                          // 0x02A8 (size: 0x8)
    class UVerticalBox* VerticalBox;                                                  // 0x02B0 (size: 0x8)
    class UVerticalBox* VerticalBox_116;                                              // 0x02B8 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_505;                                        // 0x02C0 (size: 0x8)
    TArray<int32> IDList;                                                             // 0x02C8 (size: 0x10)
    TArray<class UCategoryList_Type1_Item_C*> WidgetList;                             // 0x02D8 (size: 0x10)

    void SetAllNewIcon(bool InIsActive);
    void SetNewIcon(int32 InId, bool InIsActive);
    void SetButtonSelectIndex(int32 Index, bool Selected);
    void CheckListNewIconVisible(bool& Result);
    void SetButtonSelected(int32 ID, bool Selected);
    void AddListItem(class UCategoryList_Type1_Item_C* ListItem, int32 ID);
    void SetGroupNameText(FText NameText);
    void BndEvt__CategoryList_Type1_Group_ExpandableArea_64_K2Node_ComponentBoundEvent_0_OnExpandableAreaExpansionChanged__DelegateSignature(class UExpandableArea* Area, bool bIsExpanded);
    void BndEvt__CategoryList_Type1_Group_ExpandableArea_K2Node_ComponentBoundEvent_1_OnExpandableAreaExpansionChanged__DelegateSignature(class UExpandableArea* Area, bool bIsExpanded);
    void ExecuteUbergraph_CategoryList_Type1_Group(int32 EntryPoint);
}; // Size: 0x2E8

#endif
