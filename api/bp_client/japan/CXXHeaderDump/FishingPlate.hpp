#ifndef UE4SS_SDK_FishingPlate_HPP
#define UE4SS_SDK_FishingPlate_HPP

class UFishingPlate_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Fishing_BG01;                                                       // 0x0280 (size: 0x8)
    class UImage* Line01;                                                             // 0x0288 (size: 0x8)
    class UImage* Line02;                                                             // 0x0290 (size: 0x8)
    class UImage* NewFishIcon;                                                        // 0x0298 (size: 0x8)
    class UImage* NewSizeIcon;                                                        // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* SwitcherItemOrLength;                                      // 0x02A8 (size: 0x8)
    class UTextBlock* TextBlock_FishLength;                                           // 0x02B0 (size: 0x8)
    class UTextBlock* TextBlock_FishLength_1;                                         // 0x02B8 (size: 0x8)
    class UTextBlock* TextBlock_FishName;                                             // 0x02C0 (size: 0x8)
    class UTextBlock* TextBlock_Size;                                                 // 0x02C8 (size: 0x8)
    FFishingPlate_CStartResultPlateAnim StartResultPlateAnim;                         // 0x02D0 (size: 0x10)
    void StartResultPlateAnim();

    void Set Big Small(bool IsBig);
    void Stab_GetSize(bool& TrueIsBig);
    void SwitchItemBox(bool TrueIsItemBox, int32 ItemAmount);
    void IsItemBox(FString Name, bool& TrueIsItemBox);
    void SetFishPlate(FString Name, FString Description, float Length, float Weight, bool Show, int32 ItemAmount, bool New, bool NewRecord, bool IsBig);
    void Construct();
    void ExecuteUbergraph_FishingPlate(int32 EntryPoint);
    void StartResultPlateAnim__DelegateSignature();
}; // Size: 0x2E0

#endif
