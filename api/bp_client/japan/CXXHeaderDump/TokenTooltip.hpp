#ifndef UE4SS_SDK_TokenTooltip_HPP
#define UE4SS_SDK_TokenTooltip_HPP

class UTokenTooltip_C : public UUserWidget
{
    class UImage* Image_0;                                                            // 0x0278 (size: 0x8)
    class UTextBlock* TextLabel;                                                      // 0x0280 (size: 0x8)

    void SetText(FText InText);
}; // Size: 0x288

#endif
