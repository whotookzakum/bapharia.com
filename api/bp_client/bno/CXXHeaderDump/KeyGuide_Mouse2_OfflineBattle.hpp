#ifndef UE4SS_SDK_KeyGuide_Mouse2_OfflineBattle_HPP
#define UE4SS_SDK_KeyGuide_Mouse2_OfflineBattle_HPP

class UKeyGuide_Mouse2_OfflineBattle_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_Move;                                       // 0x0280 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_Sheeth;                                     // 0x0288 (size: 0x8)
    class UVerticalBox* VerticalBox_2;                                                // 0x0290 (size: 0x8)

    void KeyConfigActionToKey(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, FKey& Key);
    void MakePare(TArray<class USBRuntimeTextBlock*>& Key, TArray<TEnumAsByte<ESBKeyConfigAction::Type>>& Value, TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& Return Value);
    FString GetKeyToTextString(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, bool IsDash, bool isAutoRun);
    FString MakeMovesText(FSBPlayerClassKeyConfigData& KeyConfigData);
    void ApplyKeyConfigData(const FSBPlayerClassKeyConfigData& KeyConfigData);
    void ExecuteUbergraph_KeyGuide_Mouse2_OfflineBattle(int32 EntryPoint);
}; // Size: 0x298

#endif
