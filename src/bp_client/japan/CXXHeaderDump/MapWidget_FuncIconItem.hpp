#ifndef UE4SS_SDK_MapWidget_FuncIconItem_HPP
#define UE4SS_SDK_MapWidget_FuncIconItem_HPP

class UMapWidget_FuncIconItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* SBButton_C_0;                                                  // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* TextLabel;                                             // 0x0288 (size: 0x8)
    FMapWidget_FuncIconItem_COnPressed OnPressed;                                     // 0x0290 (size: 0x10)
    void OnPressed(class UMapWidget_FuncIconItem_C* InPressedIcon);

    void SetIconTextureByFuncIconType(EMapFuncIconType InFuncIconType);
    void SetTextId(int32 InTextId);
    void SetText(FText InText);
    void SetIconEnable(bool IsEnable);
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_428_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_FuncIconItem(int32 EntryPoint);
    void OnPressed__DelegateSignature(class UMapWidget_FuncIconItem_C* InPressedIcon);
}; // Size: 0x2A0

#endif
