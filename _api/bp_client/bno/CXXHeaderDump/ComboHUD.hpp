#ifndef UE4SS_SDK_ComboHUD_HPP
#define UE4SS_SDK_ComboHUD_HPP

class UComboHUD_C : public UUserWidget
{
    class UWidgetAnimation* ComboAnime;                                               // 0x0278 (size: 0x8)
    class UTextBlock* ComboLabel;                                                     // 0x0280 (size: 0x8)
    class UTextBlock* ComboText;                                                      // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* SubscriptLabel;                                        // 0x0290 (size: 0x8)
    bool bVisible;                                                                    // 0x0298 (size: 0x1)

    void SetColor(FSlateColor InColor);
    void ShowCombo(int32 Combo, ESBClassType ClassType);
}; // Size: 0x299

#endif
