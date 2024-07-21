#ifndef UE4SS_SDK_KeyGuide_Mouse2_Mount_HPP
#define UE4SS_SDK_KeyGuide_Mouse2_Mount_HPP

class UKeyGuide_Mouse2_Mount_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_Move;                                       // 0x0280 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_Rotate;                                     // 0x0288 (size: 0x8)
    class UVerticalBox* VerticalBox_2;                                                // 0x0290 (size: 0x8)

    FString MakeOrientToCameraText(FSBPlayerClassKeyConfigData& KeyConfigData);
    void KeyConfigActionToKey(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, FKey& Key);
    void MakePare(TArray<class USBRuntimeTextBlock*>& Key, TArray<TEnumAsByte<ESBKeyConfigAction::Type>>& Value, TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& Return Value);
    FString GetKeyToTextString(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, bool IsWalk);
    FString MakeMovesText(FSBPlayerClassKeyConfigData& KeyConfigData);
    void ApplyKeyConfigData(const FSBPlayerClassKeyConfigData& KeyConfigData);
    void ExecuteUbergraph_KeyGuide_Mouse2_Mount(int32 EntryPoint);
}; // Size: 0x298

#endif
