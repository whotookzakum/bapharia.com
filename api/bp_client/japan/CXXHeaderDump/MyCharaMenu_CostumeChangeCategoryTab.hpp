#ifndef UE4SS_SDK_MyCharaMenu_CostumeChangeCategoryTab_HPP
#define UE4SS_SDK_MyCharaMenu_CostumeChangeCategoryTab_HPP

class UMyCharaMenu_CostumeChangeCategoryTab_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HorizontalBoxForCostumeCategoryIconBtns;                    // 0x0280 (size: 0x8)
    FMyCharaMenu_CostumeChangeCategoryTab_COnCostumeCategoryIconBtnClicked OnCostumeCategoryIconBtnClicked; // 0x0288 (size: 0x10)
    void OnCostumeCategoryIconBtnClicked(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> SelectedCostumeCategory;         // 0x0298 (size: 0x1)

    void SetSelectedCostumeCategoryIconBtn(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InSelectedCostumeCategory);
    void UpdateSelectedCostumeCategoryIconBtn(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InSelectedCostumeCategory);
    void PreConstruct(bool IsDesignTime);
    void OnCostumeCategoryIconBtnClickedEvent(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    void Destruct();
    void ExecuteUbergraph_MyCharaMenu_CostumeChangeCategoryTab(int32 EntryPoint);
    void OnCostumeCategoryIconBtnClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
}; // Size: 0x299

#endif
