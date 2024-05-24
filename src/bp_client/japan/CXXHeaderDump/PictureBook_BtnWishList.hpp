#ifndef UE4SS_SDK_PictureBook_BtnWishList_HPP
#define UE4SS_SDK_PictureBook_BtnWishList_HPP

class UPictureBook_BtnWishList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* Btn01;                                                         // 0x0280 (size: 0x8)
    class UImage* Image_IconAdd;                                                      // 0x0288 (size: 0x8)
    class UImage* Image_IconDelete;                                                   // 0x0290 (size: 0x8)
    class UTextBlock* Txt1;                                                           // 0x0298 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_Icon;                                       // 0x02A0 (size: 0x8)
    class USBTextTableAsset* InTextTable;                                             // 0x02A8 (size: 0x8)
    int32 InTextId;                                                                   // 0x02B0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02B4 (size: 0x4)
    FPictureBook_BtnWishList_CEventOnClicked EventOnClicked;                          // 0x02B8 (size: 0x10)
    void EventOnClicked();
    FName InTextName;                                                                 // 0x02C8 (size: 0x8)
    bool bFocus;                                                                      // 0x02D0 (size: 0x1)

    void Set Btn(bool IsRegist);
    void SetHoveredSoundId(ESystemSE InSoundId);
    void SetPressedSoundId(ESystemSE InSoundId);
    void SetText(FText InText);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_51_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__Btn01_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void ExecuteUbergraph_PictureBook_BtnWishList(int32 EntryPoint);
    void EventOnClicked__DelegateSignature();
}; // Size: 0x2D1

#endif
