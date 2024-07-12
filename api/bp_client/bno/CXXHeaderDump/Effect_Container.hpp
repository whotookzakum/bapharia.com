#ifndef UE4SS_SDK_Effect_Container_HPP
#define UE4SS_SDK_Effect_Container_HPP

class UEffect_Container_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* BG;                                                                 // 0x0280 (size: 0x8)
    class UImage* ButtonImage;                                                        // 0x0288 (size: 0x8)
    class UEffect_Active_C* Effect_Active;                                            // 0x0290 (size: 0x8)
    class UEffect_Active_C* Effect_Active_101;                                        // 0x0298 (size: 0x8)
    class UEffect_Active_C* Effect_Active_281;                                        // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* GroupNameText;                                         // 0x02A8 (size: 0x8)
    class UButton* openButton_57;                                                     // 0x02B0 (size: 0x8)
    class UVerticalBox* VB_Ability;                                                   // 0x02B8 (size: 0x8)

    void BndEvt__Effect_Container_Button_57_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void SetEffectList(FName MapId, FPioneerAbilityList PioneerAbilityList, class USBWarehouseAbilityComponent* WarehouseAbilityComponent, bool IsShowTooltip, bool IsShowValue);
    void ExecuteUbergraph_Effect_Container(int32 EntryPoint);
}; // Size: 0x2C0

#endif
