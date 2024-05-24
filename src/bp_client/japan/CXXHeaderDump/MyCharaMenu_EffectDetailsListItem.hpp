#ifndef UE4SS_SDK_MyCharaMenu_EffectDetailsListItem_HPP
#define UE4SS_SDK_MyCharaMenu_EffectDetailsListItem_HPP

class UMyCharaMenu_EffectDetailsListItem_C : public UUserWidget
{
    class UTextBlock* TxtDesc;                                                        // 0x0278 (size: 0x8)
    class UTextBlock* TxtName;                                                        // 0x0280 (size: 0x8)

    void SetEffectDescText(FText InText);
    void SetEffectNameText(FText InText);
}; // Size: 0x288

#endif
