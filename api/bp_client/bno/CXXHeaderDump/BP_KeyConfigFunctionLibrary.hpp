#ifndef UE4SS_SDK_BP_KeyConfigFunctionLibrary_HPP
#define UE4SS_SDK_BP_KeyConfigFunctionLibrary_HPP

class UBP_KeyConfigFunctionLibrary_C : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void IsWarningKey(FKey InKey, TEnumAsByte<Config_KeyconfigItems::Type> KeyItemType, class UObject* __WorldContext, bool& bIsWarning, FText& WarningText);
}; // Size: 0x28

#endif
