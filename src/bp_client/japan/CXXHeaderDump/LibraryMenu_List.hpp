#ifndef UE4SS_SDK_LibraryMenu_List_HPP
#define UE4SS_SDK_LibraryMenu_List_HPP

class ULibraryMenu_List_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimItemIn;                                               // 0x02B0 (size: 0x8)
    class UVerticalBox* ItemList;                                                     // 0x02B8 (size: 0x8)
    class UScrollBox* ScrollBox_List;                                                 // 0x02C0 (size: 0x8)
    FLibraryMenu_List_CCategoryChanged CategoryChanged;                               // 0x02C8 (size: 0x10)
    void CategoryChanged(int32 ItemIndex);

    void SetScrollOffset(float Offset);
    void GetScrollOffset(float& Offset);
    void SetItemListSelected(int32 listIndex, bool bSelected);
    void Construct();
    void ExecuteUbergraph_LibraryMenu_List(int32 EntryPoint);
    void CategoryChanged__DelegateSignature(int32 ItemIndex);
}; // Size: 0x2D8

#endif
