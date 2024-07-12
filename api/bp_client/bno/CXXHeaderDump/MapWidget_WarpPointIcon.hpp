#ifndef UE4SS_SDK_MapWidget_WarpPointIcon_HPP
#define UE4SS_SDK_MapWidget_WarpPointIcon_HPP

class UMapWidget_WarpPointIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn;                                                           // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0288 (size: 0x8)
    class UImage* IconImage;                                                          // 0x0290 (size: 0x8)
    FName WarpPointId;                                                                // 0x0298 (size: 0x8)
    FMapWidget_WarpPointIcon_COnPressed OnPressed;                                    // 0x02A0 (size: 0x10)
    void OnPressed(class UMapWidget_WarpPointIcon_C* InWarpPointIcon);
    FSBMasterWarpPoint WarpPointMasterData;                                           // 0x02B0 (size: 0x68)
    bool IsButtonPressEnable;                                                         // 0x0318 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0319 (size: 0x7)
    class UMapWidget_IconTooltipWarpPoint1_C* ToolTip1;                               // 0x0320 (size: 0x8)
    class UMapWidget_IconTooltipWarpPoint2_C* ToolTip2;                               // 0x0328 (size: 0x8)
    bool IsWarpPointActive;                                                           // 0x0330 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0331 (size: 0x7)
    FSlateBrush DefaultButtonStyle_Pressed;                                           // 0x0338 (size: 0x88)
    FSlateBrush DefaultButtonStyle_Hovered;                                           // 0x03C0 (size: 0x88)
    class UWidget* CurrTooltip;                                                       // 0x0448 (size: 0x8)
    bool IsLocalWarpIcon;                                                             // 0x0450 (size: 0x1)
    bool IsGrayOut;                                                                   // 0x0451 (size: 0x1)
    bool IsDungeonMode;                                                               // 0x0452 (size: 0x1)

    void ChangeTooltipText(FString InToolTipText);
    void SetDungeonMode(bool InDungeonMode);
    void SetWarpPointEx(FSBMasterWarpPoint InWarpPointData, bool IsCity);
    void SetIconImageEx(bool IsLocalWarpIcon, bool IsHovered);
    void SetGrayOut(bool IsGrayOut);
    void SetHoveredSoundId(ESystemSE InSoundId);
    void SetPressedSoundId(ESystemSE InSoundId);
    void SetIconNormalTintColor(FLinearColor InColor);
    class UWidget* GetToolTipWidget_0();
    void SetButtonPressEnable(bool IsEnable);
    void SetIconImage(bool IsLocalWarpIcon, bool IsHovered);
    void SetActive(bool IsActive);
    void SetWarpPoint(FSBMasterWarpPoint InWarpPointData, bool IsCity);
    void BndEvt__Button_WarpPoint_K2Node_ComponentBoundEvent_179_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button_WarpPoint_K2Node_ComponentBoundEvent_213_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Button_WarpPoint_K2Node_ComponentBoundEvent_239_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_WarpPointIcon(int32 EntryPoint);
    void OnPressed__DelegateSignature(class UMapWidget_WarpPointIcon_C* InWarpPointIcon);
}; // Size: 0x453

#endif
