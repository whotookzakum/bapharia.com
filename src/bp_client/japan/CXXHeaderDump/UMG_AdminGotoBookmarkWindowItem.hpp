#ifndef UE4SS_SDK_UMG_AdminGotoBookmarkWindowItem_HPP
#define UE4SS_SDK_UMG_AdminGotoBookmarkWindowItem_HPP

class UUMG_AdminGotoBookmarkWindowItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UButton* Button_Move;                                                       // 0x0280 (size: 0x8)
    class UEditableText* EditableText_Description;                                    // 0x0288 (size: 0x8)
    class UImage* Image_Background;                                                   // 0x0290 (size: 0x8)
    class UTextBlock* TextBlock_Index;                                                // 0x0298 (size: 0x8)
    class UTextBlock* TextBlock_MapId;                                                // 0x02A0 (size: 0x8)
    class UTextBlock* TextBlock_MapName;                                              // 0x02A8 (size: 0x8)
    class UTextBlock* TextBlock_X;                                                    // 0x02B0 (size: 0x8)
    class UTextBlock* TextBlock_Y;                                                    // 0x02B8 (size: 0x8)
    class UTextBlock* TextBlock_Z;                                                    // 0x02C0 (size: 0x8)
    class USBAdminGotoBookmarkItem* Data;                                             // 0x02C8 (size: 0x8)
    FUMG_AdminGotoBookmarkWindowItem_COnClickedMoveButton OnClickedMoveButton;        // 0x02D0 (size: 0x10)
    void OnClickedMoveButton(class USBAdminGotoBookmarkItem* Data);

    void BP_OnEntryReleased();
    void BP_OnItemExpansionChanged(bool bIsExpanded);
    void BP_OnItemSelectionChanged(bool bIsSelected);
    void OnListItemObjectSet(class UObject* ListItemObject);
    void BndEvt__EditableText_Description_K2Node_ComponentBoundEvent_1_OnEditableTextCommittedEvent__DelegateSignature(const FText& Text, TEnumAsByte<ETextCommit::Type> CommitMethod);
    void OnUpdateData(class USBAdminGotoBookmarkItem* Sender);
    void ApplyData();
    void BndEvt__Button_Move_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void SetIdWarpMode(bool bFlag);
    void ExecuteUbergraph_UMG_AdminGotoBookmarkWindowItem(int32 EntryPoint);
    void OnClickedMoveButton__DelegateSignature(class USBAdminGotoBookmarkItem* Data);
}; // Size: 0x2E0

#endif
