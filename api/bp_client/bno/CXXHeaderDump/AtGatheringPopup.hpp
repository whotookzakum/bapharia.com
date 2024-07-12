#ifndef UE4SS_SDK_AtGatheringPopup_HPP
#define UE4SS_SDK_AtGatheringPopup_HPP

class UAtGatheringPopup_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Image_Balloon;                                                      // 0x0280 (size: 0x8)
    class UTextBlock* Text;                                                           // 0x0288 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_AtGatheringPopup(int32 EntryPoint);
}; // Size: 0x290

#endif
