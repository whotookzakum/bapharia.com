#ifndef UE4SS_SDK_KeyGuide_Gamepad_OfflineBattle_HPP
#define UE4SS_SDK_KeyGuide_Gamepad_OfflineBattle_HPP

class UKeyGuide_Gamepad_OfflineBattle_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* DodgeAttack;                                           // 0x0280 (size: 0x8)
    class UImage* IconImage;                                                          // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* JumpAttack;                                            // 0x0290 (size: 0x8)
    class UImage* Line1;                                                              // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* MainAction;                                            // 0x02A0 (size: 0x8)
    class USizeBox* SizeBox_DodgeAttack;                                              // 0x02A8 (size: 0x8)
    class USizeBox* SizeBox_JumpAttack;                                               // 0x02B0 (size: 0x8)
    class USizeBox* SizeBox_Skill1;                                                   // 0x02B8 (size: 0x8)
    class USBRuntimeTextBlock* SkillA;                                                // 0x02C0 (size: 0x8)
    class USBRuntimeTextBlock* SubAction;                                             // 0x02C8 (size: 0x8)

    void InitializeVisibility();
    void SetTextVisible(ESkillActionPosition SkillActionPosition, bool IsVisible);
    void MakePare(TMap<USBRuntimeTextBlock*, TEnumAsByte<ESBKeyConfigAction::Type>>& Pair1);
    void ApplyKeyConfigData(const FSBPlayerClassKeyConfigData& KeyConfigData);
    void ExecuteUbergraph_KeyGuide_Gamepad_OfflineBattle(int32 EntryPoint);
}; // Size: 0x2D0

#endif
