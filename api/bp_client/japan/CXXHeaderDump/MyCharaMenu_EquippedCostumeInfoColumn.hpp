#ifndef UE4SS_SDK_MyCharaMenu_EquippedCostumeInfoColumn_HPP
#define UE4SS_SDK_MyCharaMenu_EquippedCostumeInfoColumn_HPP

class UMyCharaMenu_EquippedCostumeInfoColumn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UVerticalBox* VerticalBoxForEquippedCostumeInfos;                           // 0x0280 (size: 0x8)
    TArray<class UMyCharaMenu_EquippedCostumeInfo_C*> EquippedCostumeInfos;           // 0x0288 (size: 0x10)

    void UpdateEquippedCostumeInfos(FCharaEquipInfo InCharaEquipInfo, ESBCharacterGender InCharacterGender);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_MyCharaMenu_EquippedCostumeInfoColumn(int32 EntryPoint);
}; // Size: 0x298

#endif
