#ifndef UE4SS_SDK_UMG_MatchingMenu_PlayerInfo_HPP
#define UE4SS_SDK_UMG_MatchingMenu_PlayerInfo_HPP

class UUMG_MatchingMenu_PlayerInfo_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCaptureImageMatching_C* CaptureImageMatching;                              // 0x0280 (size: 0x8)
    class UClassIconL_C* IconClass;                                                   // 0x0288 (size: 0x8)
    class UImage* Image_113;                                                          // 0x0290 (size: 0x8)
    class UTextBlock* TxtClassLevel;                                                  // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* TxtClassName_1;                                        // 0x02A0 (size: 0x8)
    class UTextBlock* TxtTotalPower;                                                  // 0x02A8 (size: 0x8)

    void DownLoadFaceImage_Event(FString ImageUrl);
    void Construct();
    void ExecuteUbergraph_UMG_MatchingMenu_PlayerInfo(int32 EntryPoint);
}; // Size: 0x2B0

#endif
