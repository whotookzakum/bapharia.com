#ifndef UE4SS_SDK_UMG_AdminGotoBookmarkRegistrationWindow_HPP
#define UE4SS_SDK_UMG_AdminGotoBookmarkRegistrationWindow_HPP

class UUMG_AdminGotoBookmarkRegistrationWindow_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* Button_CurrPos;                                                    // 0x0280 (size: 0x8)
    class UButton* Button_Register;                                                   // 0x0288 (size: 0x8)
    class UUMG_AdminGotoBookmarkRegistrationWindowItem_C* Item_Description;           // 0x0290 (size: 0x8)
    class UUMG_AdminGotoBookmarkRegistrationWindowItem_C* Item_MapId;                 // 0x0298 (size: 0x8)
    class UUMG_AdminGotoBookmarkRegistrationWindowItem_C* Item_X;                     // 0x02A0 (size: 0x8)
    class UUMG_AdminGotoBookmarkRegistrationWindowItem_C* Item_Y;                     // 0x02A8 (size: 0x8)
    class UUMG_AdminGotoBookmarkRegistrationWindowItem_C* Item_Z;                     // 0x02B0 (size: 0x8)
    class UTextBlock* TextBlock_IndexValue;                                           // 0x02B8 (size: 0x8)
    class UTextBlock* TextBlock_SaveOrRegister;                                       // 0x02C0 (size: 0x8)
    class UUMG_AdminWindowTemplate_C* UMG_AdminWindowTemplate;                        // 0x02C8 (size: 0x8)
    class USBAdminGotoBookmarkItem* EditingData;                                      // 0x02D0 (size: 0x8)

    void Construct();
    void BndEvt__Button_Register_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Button_CurrPos_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void SetDataText(FString MapId, FVector Positon);
    void ChangeEditingData(class USBAdminGotoBookmarkItem* EditingData);
    void ApplyEditingData();
    void OnUpdate(class USBAdminGotoBookmarkItem* Sender);
    void ExecuteUbergraph_UMG_AdminGotoBookmarkRegistrationWindow(int32 EntryPoint);
}; // Size: 0x2D8

#endif
