#ifndef UE4SS_SDK_LibraryMenu_Monster_NameWindow_HPP
#define UE4SS_SDK_LibraryMenu_Monster_NameWindow_HPP

class ULibraryMenu_Monster_NameWindow_C : public UUserWidget
{
    class UImage* BG;                                                                 // 0x0278 (size: 0x8)
    class UHorizontalBox* Boss_Box;                                                   // 0x0280 (size: 0x8)
    class USBRichTextBlock* Boss_Text;                                                // 0x0288 (size: 0x8)
    class UTextBlock* EnemyName;                                                      // 0x0290 (size: 0x8)
    class UImage* Icon_Boss;                                                          // 0x0298 (size: 0x8)
    class UImage* Icon_Named;                                                         // 0x02A0 (size: 0x8)
    class UHorizontalBox* Named_Box;                                                  // 0x02A8 (size: 0x8)
    class USBRichTextBlock* Named_Text;                                               // 0x02B0 (size: 0x8)
    class UTextBlock* TypeName;                                                       // 0x02B8 (size: 0x8)

    void ChangeTypeVisibility(bool InVisible);
    void ChangeTypeText(FString Type);
    void SetEnemyData(FString InName, FString InType, bool NamedType, bool BossType);
}; // Size: 0x2C0

#endif
