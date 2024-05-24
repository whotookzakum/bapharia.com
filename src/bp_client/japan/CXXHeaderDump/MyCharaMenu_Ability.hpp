#ifndef UE4SS_SDK_MyCharaMenu_Ability_HPP
#define UE4SS_SDK_MyCharaMenu_Ability_HPP

class UMyCharaMenu_Ability_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UEffect_Ability_C* Effect_Ability_99;                                       // 0x02B8 (size: 0x8)
    class UEffect_Ability_C* Effect_Ability_207;                                      // 0x02C0 (size: 0x8)
    class UImage* Image_117;                                                          // 0x02C8 (size: 0x8)
    class UVerticalBox* VB_Ability;                                                   // 0x02D0 (size: 0x8)
    TMap<class ESBCharaEquipType, class FString> UIDs;                                // 0x02D8 (size: 0x50)
    int32 PerkId;                                                                     // 0x0328 (size: 0x4)
    int32 AbilityValue1;                                                              // 0x032C (size: 0x4)
    FSBAbilityMasterData AbilityMaster;                                               // 0x0330 (size: 0x40)
    ESBCharaEquipType CharaEquipType;                                                 // 0x0370 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0371 (size: 0x7)
    FString AbilityText;                                                              // 0x0378 (size: 0x10)

    void Construct();
    void Collect Unique Ids();
    void Generate Passive Skill();
    void Generate Weapons();
    void Generate Imagines();
    void Generate Base Skill();
    void ExecuteUbergraph_MyCharaMenu_Ability(int32 EntryPoint);
}; // Size: 0x388

#endif
