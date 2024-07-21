#ifndef UE4SS_SDK_KeyGuide_Gamepad2_HPP
#define UE4SS_SDK_KeyGuide_Gamepad2_HPP

class UKeyGuide_Gamepad2_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_ChangeLockOn_L;                             // 0x0280 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_ChangeLockOn_R;                             // 0x0288 (size: 0x8)
    class UKeyGuide_Item_C* KeyGuide_Item_Moves_1;                                    // 0x0290 (size: 0x8)
    class UVerticalBox* VerticalBox_2;                                                // 0x0298 (size: 0x8)

    void ApplyKeyConfigData(const FSBPlayerClassKeyConfigData& KeyConfigData);
    void ExecuteUbergraph_KeyGuide_Gamepad2(int32 EntryPoint);
}; // Size: 0x2A0

#endif
