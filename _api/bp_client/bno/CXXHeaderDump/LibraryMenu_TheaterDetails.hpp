#ifndef UE4SS_SDK_LibraryMenu_TheaterDetails_HPP
#define UE4SS_SDK_LibraryMenu_TheaterDetails_HPP

class ULibraryMenu_TheaterDetails_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimMessageIn;                                            // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimDetailsIn;                                            // 0x02B8 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02C0 (size: 0x8)
    class UImage* Img_MainVisual;                                                     // 0x02C8 (size: 0x8)
    class UTextBlock* ItemName;                                                       // 0x02D0 (size: 0x8)
    class UImage* Line2;                                                              // 0x02D8 (size: 0x8)
    class UImage* Shadow;                                                             // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* TxtMessage1;                                           // 0x02E8 (size: 0x8)
    FLibraryMenu_TheaterDetails_CCategoryChanged CategoryChanged;                     // 0x02F0 (size: 0x10)
    void CategoryChanged(int32 ItemIndex);
    bool IsCty;                                                                       // 0x0300 (size: 0x1)

    void SetMessage(bool IsCty);
    void SetDetailsVisibility(bool bVisible);
    void Construct();
    void ExecuteUbergraph_LibraryMenu_TheaterDetails(int32 EntryPoint);
    void CategoryChanged__DelegateSignature(int32 ItemIndex);
}; // Size: 0x301

#endif
