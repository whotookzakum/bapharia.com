#ifndef UE4SS_SDK_MyCharaMenu_PioneerAbility_HPP
#define UE4SS_SDK_MyCharaMenu_PioneerAbility_HPP

class UMyCharaMenu_PioneerAbility_C : public USBMyCharaPioneerAbilityWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UEffect_Container_C* Effect_Container;                                      // 0x0280 (size: 0x8)
    class UEffect_Container_C* Effect_Container_70;                                   // 0x0288 (size: 0x8)
    class UImage* PioneerAbilityIcon;                                                 // 0x0290 (size: 0x8)
    class UVerticalBox* VB_Ability;                                                   // 0x0298 (size: 0x8)
    TMap<class ESBCharaEquipType, class FString> UIDs;                                // 0x02A0 (size: 0x50)
    class USBWarehouseAbilityComponent* WarehouseAbilityComponent;                    // 0x02F0 (size: 0x8)

    void Construct();
    void Generate Passive Skill();
    void ExecuteUbergraph_MyCharaMenu_PioneerAbility(int32 EntryPoint);
}; // Size: 0x2F8

#endif
