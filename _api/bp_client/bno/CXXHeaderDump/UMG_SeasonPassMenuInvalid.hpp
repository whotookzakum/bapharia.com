#ifndef UE4SS_SDK_UMG_SeasonPassMenuInvalid_HPP
#define UE4SS_SDK_UMG_SeasonPassMenuInvalid_HPP

class UUMG_SeasonPassMenuInvalid_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_180;                                                          // 0x0280 (size: 0x8)
    class UTextBlock* TextBlock_NextSeasonDiscount;                                   // 0x0288 (size: 0x8)
    class UTextBlock* TextBlock_NextSeasonPoint;                                      // 0x0290 (size: 0x8)
    class USBPlayerSeasonPassComponent* Comp;                                         // 0x0298 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_UMG_SeasonPassMenuInvalid(int32 EntryPoint);
}; // Size: 0x2A0

#endif
