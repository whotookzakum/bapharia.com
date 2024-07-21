#ifndef UE4SS_SDK_MapWidget_RegionIcon_HPP
#define UE4SS_SDK_MapWidget_RegionIcon_HPP

class UMapWidget_RegionIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Button_Region;                                                 // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0288 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x0290 (size: 0x8)
    class UMapWidget_IconTooltip4_C* ToolTip;                                         // 0x0298 (size: 0x8)
    FMapWidget_RegionIcon_COnPressed OnPressed;                                       // 0x02A0 (size: 0x10)
    void OnPressed(FString InRegionMapId);
    FString RegionMapId;                                                              // 0x02B0 (size: 0x10)

    void SetRegion(FString InRegionMapId);
    class UWidget* GetToolTipWidget_0();
    void Construct();
    void BndEvt__Button_WarpPoint_K2Node_ComponentBoundEvent_179_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_RegionIcon(int32 EntryPoint);
    void OnPressed__DelegateSignature(FString InRegionMapId);
}; // Size: 0x2C0

#endif
