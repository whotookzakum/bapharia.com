#ifndef UE4SS_SDK_MapWidget_DividedZoneList_HPP
#define UE4SS_SDK_MapWidget_DividedZoneList_HPP

class UMapWidget_DividedZoneList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* BtnBg;                                                              // 0x0280 (size: 0x8)
    class UImage* LineImage;                                                          // 0x0288 (size: 0x8)
    class UImage* MapSymbolIcon;                                                      // 0x0290 (size: 0x8)
    class UTextBlock* TxtMapName;                                                     // 0x0298 (size: 0x8)
    class UUniformGridPanel* UniformGridPanelForZoneListItem;                         // 0x02A0 (size: 0x8)
    FString MapId;                                                                    // 0x02A8 (size: 0x10)
    TSoftObjectPtr<UTexture2D> MapSymbolIconTexture;                                  // 0x02B8 (size: 0x28)
    TArray<FString> VisitedZoneIds;                                                   // 0x02E0 (size: 0x10)
    int32 ListItemNumMax;                                                             // 0x02F0 (size: 0x4)
    int32 LoopIndex;                                                                  // 0x02F4 (size: 0x4)
    int32 ColumnNumMax;                                                               // 0x02F8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02FC (size: 0x4)
    FMapWidget_DividedZoneList_COnListItemClicked OnListItemClicked;                  // 0x0300 (size: 0x10)
    void OnListItemClicked(FString InDividedZoneId);
    class UMapWidget_DividedZoneListItem_C* SelectedItem;                             // 0x0310 (size: 0x8)
    class UDataTable* MapBGConfig;                                                    // 0x0318 (size: 0x8)

    void Setup(FString InMapId, TArray<FString>& InVisitedZoneIds);
    void PreConstruct(bool IsDesignTime);
    void Destruct();
    void OnListItemClickedEvent(class UMapWidget_DividedZoneListItem_C* InSelf, FString InDividedZoneId);
    void ExecuteUbergraph_MapWidget_DividedZoneList(int32 EntryPoint);
    void OnListItemClicked__DelegateSignature(FString InDividedZoneId);
}; // Size: 0x320

#endif
