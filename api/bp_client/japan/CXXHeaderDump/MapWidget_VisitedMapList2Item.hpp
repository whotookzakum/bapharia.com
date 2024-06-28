#ifndef UE4SS_SDK_MapWidget_VisitedMapList2Item_HPP
#define UE4SS_SDK_MapWidget_VisitedMapList2Item_HPP

class UMapWidget_VisitedMapList2Item_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnmCharaIcon;                                             // 0x0280 (size: 0x8)
    class UOverlay* CharaIconPanel;                                                   // 0x0288 (size: 0x8)
    class UImage* IconBG_Eff;                                                         // 0x0290 (size: 0x8)
    class USBButton_C* ListButton;                                                    // 0x0298 (size: 0x8)
    class UImage* MapImage;                                                           // 0x02A0 (size: 0x8)
    class UTextBlock* MapNameText;                                                    // 0x02A8 (size: 0x8)
    class UImage* OnMapIcon;                                                          // 0x02B0 (size: 0x8)
    FMapWidget_VisitedMapList2Item_COnClicked OnClicked;                              // 0x02B8 (size: 0x10)
    void OnClicked(FString InMapId);
    FString MapId;                                                                    // 0x02C8 (size: 0x10)
    TSoftObjectPtr<UTexture2D> MapImageTexture;                                       // 0x02D8 (size: 0x28)
    class UWBP_CommonToolTipDetail_Variable_C* CachedToolTipWidget;                   // 0x0300 (size: 0x8)

    class UWidget* Get_ListButton_ToolTipWidget_0();
    void Get Map Zone String(int32 Index, FString& OutString);
    void ChangeFaceIconTexture(class UTexture2DDynamic* Texture);
    void Setup(FString InMapId, bool InCurrentMap);
    void BndEvt__MapWidget_VisitedMapList2Item_ListButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_VisitedMapList2Item(int32 EntryPoint);
    void OnClicked__DelegateSignature(FString InMapId);
}; // Size: 0x308

#endif
