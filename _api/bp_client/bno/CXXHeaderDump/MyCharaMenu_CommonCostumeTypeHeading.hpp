#ifndef UE4SS_SDK_MyCharaMenu_CommonCostumeTypeHeading_HPP
#define UE4SS_SDK_MyCharaMenu_CommonCostumeTypeHeading_HPP

class UMyCharaMenu_CommonCostumeTypeHeading_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* TxtHeadingTitle;                                       // 0x0280 (size: 0x8)
    class USBTextTableAsset* HeadingTitleTextTable;                                   // 0x0288 (size: 0x8)
    int32 HeadingTitleTextId;                                                         // 0x0290 (size: 0x4)

    void SetHeadingTitleText(FText InText);
    void SetHeadingTitleTextId(int32 InTextId);
    void SetHeadingTitleTextTable(class USBTextTableAsset* InTextTable);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_MyCharaMenu_CommonCostumeTypeHeading(int32 EntryPoint);
}; // Size: 0x294

#endif
