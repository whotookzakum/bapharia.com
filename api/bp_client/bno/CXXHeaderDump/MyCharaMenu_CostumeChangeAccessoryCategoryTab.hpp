#ifndef UE4SS_SDK_MyCharaMenu_CostumeChangeAccessoryCategoryTab_HPP
#define UE4SS_SDK_MyCharaMenu_CostumeChangeAccessoryCategoryTab_HPP

class UMyCharaMenu_CostumeChangeAccessoryCategoryTab_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HorizontalBoxForCostumeAccessoryCategoryIconBtns;           // 0x0280 (size: 0x8)
    class UImage* IconListBg01;                                                       // 0x0288 (size: 0x8)
    FMyCharaMenu_CostumeChangeAccessoryCategoryTab_COnAccessoryCategoryIconBtnClicked OnAccessoryCategoryIconBtnClicked; // 0x0290 (size: 0x10)
    void OnAccessoryCategoryIconBtnClicked(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    TArray<TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type>> AccessoryCategories;   // 0x02A0 (size: 0x10)
    TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> SelectedAccesoryCategory;      // 0x02B0 (size: 0x1)

    void SetSelectedAccessoryCategoryIconBtn(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void UpdateSelectedAccessoryCategoryIconBtn(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void PreConstruct(bool IsDesignTime);
    void Destruct();
    void OnAccessoryCategoryBtnClickedEvent(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void ExecuteUbergraph_MyCharaMenu_CostumeChangeAccessoryCategoryTab(int32 EntryPoint);
    void OnAccessoryCategoryIconBtnClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
}; // Size: 0x2B1

#endif
