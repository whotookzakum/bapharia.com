#ifndef UE4SS_SDK_TokenCategoryList_HPP
#define UE4SS_SDK_TokenCategoryList_HPP

class UTokenCategoryList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* CategoryList;                                               // 0x0280 (size: 0x8)
    TArray<int32> TextIdList;                                                         // 0x0288 (size: 0x10)
    class USBTextTableAsset* TextTable;                                               // 0x0298 (size: 0x8)
    TArray<class UTokenCategoryButton_C*> Buttons;                                    // 0x02A0 (size: 0x10)
    FTokenCategoryList_COnClick OnClick;                                              // 0x02B0 (size: 0x10)
    void OnClick(int32 Index);
    int32 FocusIndex;                                                                 // 0x02C0 (size: 0x4)
    bool InputActive;                                                                 // 0x02C4 (size: 0x1)

    void SetList();
    void OnButtonClick(int32 listIndex);
    void SeInputActive(bool InputActive);
    void ExecuteUbergraph_TokenCategoryList(int32 EntryPoint);
    void OnClick__DelegateSignature(int32 Index);
}; // Size: 0x2C5

#endif
