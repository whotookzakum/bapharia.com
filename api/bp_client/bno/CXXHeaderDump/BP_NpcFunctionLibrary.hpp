#ifndef UE4SS_SDK_BP_NpcFunctionLibrary_HPP
#define UE4SS_SDK_BP_NpcFunctionLibrary_HPP

class UBP_NpcFunctionLibrary_C : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void FinalizeNamePlate(class ASBMobCharacter* Character, class UObject* __WorldContext);
    void InitializeNamePlate(class ASBMobCharacter* Character, class UObject* __WorldContext);
}; // Size: 0x28

#endif
