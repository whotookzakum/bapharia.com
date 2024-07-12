#ifndef UE4SS_SDK_KeyGuideFunctionLibrary_HPP
#define UE4SS_SDK_KeyGuideFunctionLibrary_HPP

class UKeyGuideFunctionLibrary_C : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    FText KeyGuide_Gamepad2_MakeChangeLockText(const FSBPlayerClassKeyConfigData& KeyConfigData, class UObject* __WorldContext);
    void KeyGuide_GetVerticalChildWidget(class UPanelWidget* ターゲット, class UObject* __WorldContext, TArray<class UWidget*>& Out);
    void KeyGuide_GetPareItems(TArray<class UWidget*>& InAllChildren, class UObject* __WorldContext, TArray<class USBRuntimeTextBlock*>& outActionTextArray, TArray<TEnumAsByte<ESBKeyConfigAction::Type>>& outActionConfigArray);
    void Key Guide Mouse 2 Make Oriento Camera Text(const FSBPlayerClassKeyConfigData& KeyConfigData, class UTextBlock* InTextObject, class UObject* __WorldContext);
    void KeyGuide_Mouse2_MakeMovesText(const FSBPlayerClassKeyConfigData& KeyConfigData, class UTextBlock* TextObject, class UObject* __WorldContext);
    FString KeyGuide_Mouse2_GetKeytoTextString(const FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, class UObject* __WorldContext);
    void KeyGuide_Mouse2_KeyConfigActiontoKey(const FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, class UObject* __WorldContext, FKey& Key);
    void KeyGuide_MakePare(TArray<class USBRuntimeTextBlock*>& InKey, TArray<TEnumAsByte<ESBKeyConfigAction::Type>>& InValue, class UObject* __WorldContext, TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& Return Value);
    void KeyGuide_Mouse2_MakeMessage(TArray<class USBRuntimeTextBlock*>& InKey, const TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& TargetMap, const FSBPlayerClassKeyConfigData& KeyConfigData, class UTextBlock* InSheethTextObject, class UObject* __WorldContext);
    FString KeyGuide_Gamepad_MakeString(const FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, bool IsDash, bool IsDodge, class UObject* __WorldContext);
    FString KeyGuide_Gamepad_MakeJumpAttackText(const FSBPlayerClassKeyConfigData& KeyConfigData, class UObject* __WorldContext);
    FString KeyGuide_Gamepad_MakeDodgeAttackText(const FSBPlayerClassKeyConfigData& KeyConfigData, class UObject* __WorldContext);
    void KeyGuide_Gamepad2_MakeString(const FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, class UObject* __WorldContext, FText& ReturnValue1);
    void KeyGuide_Gamepad2_KeyConfigActiontoKey(const FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, class UObject* __WorldContext, FKey& Key);
    FText KeyGuide_Gamepad2_MakeMovesText(const FSBPlayerClassKeyConfigData& KeyConfigData, class UObject* __WorldContext);
}; // Size: 0x28

#endif
