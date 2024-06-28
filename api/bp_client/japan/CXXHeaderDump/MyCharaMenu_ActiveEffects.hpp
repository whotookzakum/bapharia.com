#ifndef UE4SS_SDK_MyCharaMenu_ActiveEffects_HPP
#define UE4SS_SDK_MyCharaMenu_ActiveEffects_HPP

class UMyCharaMenu_ActiveEffects_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UMyCharaMenu_EffectListItemHead_C* Head_Liquid;                             // 0x0280 (size: 0x8)
    class UMyCharaMenu_EffectListItemHead_C* Head_Other;                              // 0x0288 (size: 0x8)
    class UMyCharaMenu_EffectListItemHead_C* HeadEffects;                             // 0x0290 (size: 0x8)
    class UMyCharaMenu_EffectListItemHead_C* HeadPioneer;                             // 0x0298 (size: 0x8)
    class UVerticalBox* VB_Effect;                                                    // 0x02A0 (size: 0x8)
    class UVerticalBox* VB_Liquid;                                                    // 0x02A8 (size: 0x8)
    class UVerticalBox* VB_Other;                                                     // 0x02B0 (size: 0x8)
    class UVerticalBox* VB_Pioneer;                                                   // 0x02B8 (size: 0x8)
    TMap<class ESBCharaEquipType, class FString> EquipUniqueIds;                      // 0x02C0 (size: 0x50)

    void GetFreeBuffText(ESBFreeBuffPointType Type, FString& Text);
    void AddListsByDateTime(class UVerticalBox* Target, FString Name, FDateTime Value, bool bHideYear, bool ValueVisible);
    void AddListsByFloatValue(class UVerticalBox* Target, FString Name, float Value, bool ValueVisible);
    void Add Lists(class UVerticalBox* Target, bool IsShowTooltip, FString Name, int32 Value, FString ToolTipText, bool ValueVisible);
    void Collect Unique Ids();
    void Collect Passive Effects();
    void Collect Weapon Effects();
    void Collect Imagine Perks();
    void Collect Ability();
    void Collect Base Effects();
    void Construct();
    void Init Head();
    void Generate Lists();
    void Collect Liquid Memory();
    void Collect Other();
    void Collect PioneerAbility();
    void ExecuteUbergraph_MyCharaMenu_ActiveEffects(int32 EntryPoint);
}; // Size: 0x310

#endif
