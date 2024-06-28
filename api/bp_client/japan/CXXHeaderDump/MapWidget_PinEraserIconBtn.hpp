#ifndef UE4SS_SDK_MapWidget_PinEraserIconBtn_HPP
#define UE4SS_SDK_MapWidget_PinEraserIconBtn_HPP

class UMapWidget_PinEraserIconBtn_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* SBButton_C_0;                                                  // 0x0280 (size: 0x8)
    FMapWidget_PinEraserIconBtn_COnPressed OnPressed;                                 // 0x0288 (size: 0x10)
    void OnPressed(class UMapWidget_PinEraserIconBtn_C* InPressedIcon);

    void SetIconBtnEnable(bool IsEnable);
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_158_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MapWidget_PinEraserIconBtn(int32 EntryPoint);
    void OnPressed__DelegateSignature(class UMapWidget_PinEraserIconBtn_C* InPressedIcon);
}; // Size: 0x298

#endif
