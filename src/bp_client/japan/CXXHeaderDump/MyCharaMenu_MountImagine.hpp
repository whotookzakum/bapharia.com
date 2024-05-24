#ifndef UE4SS_SDK_MyCharaMenu_MountImagine_HPP
#define UE4SS_SDK_MyCharaMenu_MountImagine_HPP

class UMyCharaMenu_MountImagine_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UImage* Arrow;                                                              // 0x02B8 (size: 0x8)
    class USBButton_C* BlankIcon;                                                     // 0x02C0 (size: 0x8)
    class UCmnBtn16_C* BtnMountImagine;                                               // 0x02C8 (size: 0x8)
    class UWBP_ShopMenuDetailsExpiryDateTime_C* ExpiryDateTime;                       // 0x02D0 (size: 0x8)
    class UImage* Image_320;                                                          // 0x02D8 (size: 0x8)
    class UInventoryUsed_C* InventoryUsed;                                            // 0x02E0 (size: 0x8)
    class UItemIconBtn_C* ItemIcon;                                                   // 0x02E8 (size: 0x8)
    class UVerticalBox* MountImagine_Profile;                                         // 0x02F0 (size: 0x8)
    class UImage* round_frame;                                                        // 0x02F8 (size: 0x8)
    class USizeBox* SB_NoEquip;                                                       // 0x0300 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_Header;                             // 0x0308 (size: 0x8)
    class UTextBlock* TxtName;                                                        // 0x0310 (size: 0x8)
    FMyCharaMenu_MountImagine_CBtnMountImagineClicked BtnMountImagineClicked;         // 0x0318 (size: 0x10)
    void BtnMountImagineClicked();

    void SetNoEquipVisibility(bool InIsVisible);
    void SetBlankIconVisibility(bool InIsVisible);
    void SetIMountImagineProfileVisibility(bool InIsVisible);
    void SetItemIconVisibility(bool InIsVisible);
    void SetExpiryDateTimeVisibility(bool InIsVisible);
    void SetImagineUsedIconVisibility(bool InIsVisible);
    void SetIsImagineUsed(bool InIsUsed);
    void CreateInventoryData(FSBCharacterMountImagineData InMountImagine, FInventoryItemData& OutInventryItemData, bool& OutIsEnable);
    void GetInventoryMountImagine(FString InUniqueId, bool& OutEnabled, FSBCharacterMountImagineData& OutMountImagineData, bool& OutIsUsed);
    void Setup(FString InUniqueId);
    void BndEvt__BtnWeaponChange_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void BndEvt__ItemIcon_K2Node_ComponentBoundEvent_3_OnSelect__DelegateSignature(class UItemIconBtn_C* SelectItem);
    void BndEvt__BlankIcon_K2Node_ComponentBoundEvent_4_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_MountImagine(int32 EntryPoint);
    void BtnMountImagineClicked__DelegateSignature();
}; // Size: 0x328

#endif
