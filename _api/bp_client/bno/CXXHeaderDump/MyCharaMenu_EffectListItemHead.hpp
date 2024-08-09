#ifndef UE4SS_SDK_MyCharaMenu_EffectListItemHead_HPP
#define UE4SS_SDK_MyCharaMenu_EffectListItemHead_HPP

class UMyCharaMenu_EffectListItemHead_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_51;                                                           // 0x0280 (size: 0x8)
    class UWidgetSwitcher* SwitchIcon;                                                // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Head;                                              // 0x0290 (size: 0x8)

    void Set_Ability();
    void Set LiquidMemory();
    void Set Other();
    void SetPioneerAbility();
    void ExecuteUbergraph_MyCharaMenu_EffectListItemHead(int32 EntryPoint);
}; // Size: 0x298

#endif
