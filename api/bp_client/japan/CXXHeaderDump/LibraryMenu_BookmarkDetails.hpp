#ifndef UE4SS_SDK_LibraryMenu_BookmarkDetails_HPP
#define UE4SS_SDK_LibraryMenu_BookmarkDetails_HPP

class ULibraryMenu_BookmarkDetails_C : public USBLibraryMenuItemList
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimMessageIn;                                            // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimDetailsIn;                                            // 0x02B8 (size: 0x8)
    class UCanvasPanel* DetailsGrp;                                                   // 0x02C0 (size: 0x8)
    class UImage* Line;                                                               // 0x02C8 (size: 0x8)
    class UTutorialHelp_Bookmark_C* TutorialHelp_Bookmark;                            // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* TxtMessage1;                                           // 0x02D8 (size: 0x8)

    void SetDetailsVisibility(bool bVisible);
    void Construct();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void ExecuteUbergraph_LibraryMenu_BookmarkDetails(int32 EntryPoint);
}; // Size: 0x2E0

#endif
