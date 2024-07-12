#ifndef UE4SS_SDK_MyCharaMenu_CostumeAccessoryCategoryIconBtn_HPP
#define UE4SS_SDK_MyCharaMenu_CostumeAccessoryCategoryIconBtn_HPP

class UMyCharaMenu_CostumeAccessoryCategoryIconBtn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn01;                                                         // 0x0280 (size: 0x8)
    class UImage* ImgIcon;                                                            // 0x0288 (size: 0x8)
    class UImage* ImgSelectedBg;                                                      // 0x0290 (size: 0x8)
    FMyCharaMenu_CostumeAccessoryCategoryIconBtn_COnButtonClicked OnButtonClicked;    // 0x0298 (size: 0x10)
    void OnButtonClicked(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> AccessoryCategory;             // 0x02A8 (size: 0x1)

    void SetSelected(bool InIsSelected);
    void GetAccessoryCategory(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type>& OutAccessoryCategory);
    void SetAccessoryCategory(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_CostumeAccessoryCategoryIconBtn(int32 EntryPoint);
    void OnButtonClicked__DelegateSignature(TEnumAsByte<E_MyCharaMenu_AccessoryCategory::Type> InAccessoryCategory);
}; // Size: 0x2A9

#endif
