#ifndef UE4SS_SDK_UMG_LoginBonusListLineItem_HPP
#define UE4SS_SDK_UMG_LoginBonusListLineItem_HPP

class UUMG_LoginBonusListLineItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* StumpPlayNew;                                             // 0x0280 (size: 0x8)
    class UWidgetAnimation* StumpPlay2;                                               // 0x0288 (size: 0x8)
    class UWidgetAnimation* StumpPlay;                                                // 0x0290 (size: 0x8)
    class UWidgetSwitcher* BgSwitch;                                                  // 0x0298 (size: 0x8)
    class UCommonIcon_C* CommonIcon;                                                  // 0x02A0 (size: 0x8)
    class UTextBlock* DayText;                                                        // 0x02A8 (size: 0x8)
    class UImage* Effect;                                                             // 0x02B0 (size: 0x8)
    class UOverlay* IconPanel;                                                        // 0x02B8 (size: 0x8)
    class USizeBox* ItemNumBox;                                                       // 0x02C0 (size: 0x8)
    class UTextBlock* ItemNumText;                                                    // 0x02C8 (size: 0x8)
    class USizeBox* LevelBox;                                                         // 0x02D0 (size: 0x8)
    class UTextBlock* LevelNum;                                                       // 0x02D8 (size: 0x8)
    class UButton* NormalButton;                                                      // 0x02E0 (size: 0x8)
    class UCommonIcon_C* NormalIcon;                                                  // 0x02E8 (size: 0x8)
    class UTextBlock* NumText;                                                        // 0x02F0 (size: 0x8)
    class UButton* PickupButton;                                                      // 0x02F8 (size: 0x8)
    class UImage* PickUpEffect;                                                       // 0x0300 (size: 0x8)
    class UCommonIcon_C* PickupIcon;                                                  // 0x0308 (size: 0x8)
    class UImage* Stamp;                                                              // 0x0310 (size: 0x8)
    FUMG_LoginBonusListLineItem_CStumpAnimationEnd StumpAnimationEnd;                 // 0x0318 (size: 0x10)
    void StumpAnimationEnd();
    FUMG_LoginBonusListLineItem_CItemClick ItemClick;                                 // 0x0328 (size: 0x10)
    void ItemClick(int32 ID, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    int32 ClickId;                                                                    // 0x0338 (size: 0x4)
    char padding_0[0x4];                                                              // 0x033C (size: 0x4)
    FButtonStyle NormalButtonNormal;                                                  // 0x0340 (size: 0x278)
    FButtonStyle NormalButtonSelected;                                                // 0x05B8 (size: 0x278)
    FButtonStyle PickupButtonNormal;                                                  // 0x0830 (size: 0x278)
    FButtonStyle PickupButtonSelected;                                                // 0x0AA8 (size: 0x278)

    void OnCloseAnimationFinished();
    void SetIconExtraData(class UCommonIcon_C* IconWidget, FSBLoginBonusWindowItemData ItemData);
    void SetBtnSelected(bool bSelected);
    void SetMouseClickValue(int32 Value);
    void SetData(FSBLoginBonusWindowDayData Data, bool StumpOn, bool Click);
    void PlayStumpAnimation();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__UMG_LoginBonusListLineItem_NormalButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__UMG_LoginBonusListLineItem_PickupButton_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_UMG_LoginBonusListLineItem(int32 EntryPoint);
    void ItemClick__DelegateSignature(int32 ID, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    void StumpAnimationEnd__DelegateSignature();
}; // Size: 0xD20

#endif
