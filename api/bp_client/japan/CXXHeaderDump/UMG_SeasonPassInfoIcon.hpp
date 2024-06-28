#ifndef UE4SS_SDK_UMG_SeasonPassInfoIcon_HPP
#define UE4SS_SDK_UMG_SeasonPassInfoIcon_HPP

class UUMG_SeasonPassInfoIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_46;                                                           // 0x0280 (size: 0x8)
    TEnumAsByte<E_SBSeasonPassInfoType::Type> Type;                                   // 0x0288 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0289 (size: 0x7)
    FText Text;                                                                       // 0x0290 (size: 0x18)
    FName TextId;                                                                     // 0x02A8 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_UMG_SeasonPassInfoIcon(int32 EntryPoint);
}; // Size: 0x2B0

#endif
