#ifndef UE4SS_SDK_MyCharaMenu_EquippedCostumeInfoItem_HPP
#define UE4SS_SDK_MyCharaMenu_EquippedCostumeInfoItem_HPP

class UMyCharaMenu_EquippedCostumeInfoItem_C : public UUserWidget
{
    class UTextBlock* TxtTitle;                                                       // 0x0278 (size: 0x8)

    void SetIsGrayOut(bool InIsGrayOut);
    void SetText(FText InText);
}; // Size: 0x280

#endif
