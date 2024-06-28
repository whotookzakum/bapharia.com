#ifndef UE4SS_SDK_MyCharaMenu_CostumeCategoryIconBtn_HPP
#define UE4SS_SDK_MyCharaMenu_CostumeCategoryIconBtn_HPP

class UMyCharaMenu_CostumeCategoryIconBtn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn01;                                                         // 0x0280 (size: 0x8)
    class UImage* ImgIcon;                                                            // 0x0288 (size: 0x8)
    class UImage* ImgSelectedBg;                                                      // 0x0290 (size: 0x8)
    FMyCharaMenu_CostumeCategoryIconBtn_COnButtonClicked OnButtonClicked;             // 0x0298 (size: 0x10)
    void OnButtonClicked(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> CostumeCategory;                 // 0x02A8 (size: 0x1)

    void SetSelected(bool InIsSelected);
    void GetCostumeCategory(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type>& OutCostumeCategory);
    void SetCostumeCategory(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_CostumeCategoryIconBtn(int32 EntryPoint);
    void OnButtonClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_CostumeCategory::Type> InCostumeCategory);
}; // Size: 0x2A9

#endif
