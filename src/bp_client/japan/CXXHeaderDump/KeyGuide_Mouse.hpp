#ifndef UE4SS_SDK_KeyGuide_Mouse_HPP
#define UE4SS_SDK_KeyGuide_Mouse_HPP

class UKeyGuide_Mouse_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* DodgeAttack;                                           // 0x0280 (size: 0x8)
    class UImage* Image_135;                                                          // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* ImaginArts2;                                           // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* ImagineArts;                                           // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* JumpAttack;                                            // 0x02A0 (size: 0x8)
    class UImage* Line1;                                                              // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* MainAction;                                            // 0x02B0 (size: 0x8)
    class USizeBox* SizeBox_DodgeAttack;                                              // 0x02B8 (size: 0x8)
    class USizeBox* SizeBox_Imagine1;                                                 // 0x02C0 (size: 0x8)
    class USizeBox* SizeBox_Imagine2;                                                 // 0x02C8 (size: 0x8)
    class USizeBox* SizeBox_JumpAttack;                                               // 0x02D0 (size: 0x8)
    class USizeBox* SizeBox_Skill1;                                                   // 0x02D8 (size: 0x8)
    class USizeBox* SizeBox_Skill2;                                                   // 0x02E0 (size: 0x8)
    class USizeBox* SizeBox_Skill3;                                                   // 0x02E8 (size: 0x8)
    class USizeBox* SizeBox_Skill4;                                                   // 0x02F0 (size: 0x8)
    class USizeBox* SizeBox_Special;                                                  // 0x02F8 (size: 0x8)
    class USBRuntimeTextBlock* Skill3;                                                // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* Skill4;                                                // 0x0308 (size: 0x8)
    class USBRuntimeTextBlock* SkillA;                                                // 0x0310 (size: 0x8)
    class USBRuntimeTextBlock* SkillB;                                                // 0x0318 (size: 0x8)
    class USBRuntimeTextBlock* SpecialSkill;                                          // 0x0320 (size: 0x8)
    class USBRuntimeTextBlock* SubAction;                                             // 0x0328 (size: 0x8)

    void InitializeVisibility();
    void SetTextVisible(ESkillActionPosition SkillActionPosition, bool IsVisible);
    void KeyConfigActionToKey(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, FKey& Key);
    void MakePare(TArray<class USBRuntimeTextBlock*>& Key, TArray<TEnumAsByte<ESBKeyConfigAction::Type>>& Value, TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& Return Value);
    FString GetKeyToTextString(FSBPlayerClassKeyConfigData& KeyConfigData, TEnumAsByte<ESBKeyConfigAction::Type> KeyConfigAction, bool IsDash);
    FString MakeJumpAttackText(FSBPlayerClassKeyConfigData KeyConfigData);
    FString MakeDodgeAttackText(FSBPlayerClassKeyConfigData KeyConfigData);
    FString MakeMovesText(FSBPlayerClassKeyConfigData& KeyConfigData);
    void ApplyKeyConfigData(const FSBPlayerClassKeyConfigData& KeyConfigData);
    void ExecuteUbergraph_KeyGuide_Mouse(int32 EntryPoint);
}; // Size: 0x330

#endif
