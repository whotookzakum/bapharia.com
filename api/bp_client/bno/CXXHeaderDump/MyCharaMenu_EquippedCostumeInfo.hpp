#ifndef UE4SS_SDK_MyCharaMenu_EquippedCostumeInfo_HPP
#define UE4SS_SDK_MyCharaMenu_EquippedCostumeInfo_HPP

class UMyCharaMenu_EquippedCostumeInfo_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UMyCharaMenu_CommonCostumeTypeHeading_C* CostumeHeading;                    // 0x0280 (size: 0x8)
    class UVerticalBox* VerticalBoxForCostumeInfo;                                    // 0x0288 (size: 0x8)
    int32 HeadingTitleTextId;                                                         // 0x0290 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0294 (size: 0x4)
    TMap<TEnumAsByte<E_MyCharaMenu_EquippedCostumeType::Type>, int32> EquippedCostumeInfoListItemMaxNumMap; // 0x0298 (size: 0x50)

    void GetRingEquippedHand(ESBCharaEquipType InRingEquipType, bool& OutIsLeftFinger);
    void UpdateEquippedCostumeInfo(TEnumAsByte<E_MyCharaMenu_EquippedCostumeType::Type> InEquippedCostumeType, FCharaEquipInfo InCharaEquipInfo, TArray<ECharaPartsLocation>& InGrayOutCharaPartsLocations);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_MyCharaMenu_EquippedCostumeInfo(int32 EntryPoint);
}; // Size: 0x2E8

#endif
