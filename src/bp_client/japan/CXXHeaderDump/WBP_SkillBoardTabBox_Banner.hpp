#ifndef UE4SS_SDK_WBP_SkillBoardTabBox_Banner_HPP
#define UE4SS_SDK_WBP_SkillBoardTabBox_Banner_HPP

class UWBP_SkillBoardTabBox_Banner_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* 06;                                                                 // 0x0280 (size: 0x8)
    class UImage* 07;                                                                 // 0x0288 (size: 0x8)
    class UImage* 11;                                                                 // 0x0290 (size: 0x8)
    class UImage* 12;                                                                 // 0x0298 (size: 0x8)
    class UImage* 19;                                                                 // 0x02A0 (size: 0x8)
    class UImage* 20;                                                                 // 0x02A8 (size: 0x8)
    class UImage* 21;                                                                 // 0x02B0 (size: 0x8)
    class UImage* 22;                                                                 // 0x02B8 (size: 0x8)
    class UImage* BaseBG;                                                             // 0x02C0 (size: 0x8)
    class UWidgetSwitcher* ClassIcon;                                                 // 0x02C8 (size: 0x8)
    class UImage* Img_black;                                                          // 0x02D0 (size: 0x8)
    class USBButton_C* SBBtn_Hit;                                                     // 0x02D8 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock;                                    // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_490;                                // 0x02E8 (size: 0x8)
    class UTextBlock* TextBlock_Name;                                                 // 0x02F0 (size: 0x8)
    FWBP_SkillBoardTabBox_Banner_COnClicked OnClicked;                                // 0x02F8 (size: 0x10)
    void OnClicked();
    FName DataTableName;                                                              // 0x0308 (size: 0x8)
    int32 TabIndex;                                                                   // 0x0310 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0314 (size: 0x4)
    FWBP_SkillBoardTabBox_Banner_COnHovered OnHovered;                                // 0x0318 (size: 0x10)
    void OnHovered();
    FWBP_SkillBoardTabBox_Banner_COnUnhovered OnUnhovered;                            // 0x0328 (size: 0x10)
    void OnUnHovered();
    int32 EventId;                                                                    // 0x0338 (size: 0x4)
    char padding_1[0x4];                                                              // 0x033C (size: 0x4)
    TSoftObjectPtr<UTexture2D> Banner;                                                // 0x0340 (size: 0x28)
    ESBClassType ClassType;                                                           // 0x0368 (size: 0x1)

    void SetBtnSelected(bool IsSelect);
    void BndEvt__SBBtn_Hit_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBBtn_Hit_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__SBBtn_Hit_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void Init();
    void SetClass(ESBClassType ClassType);
    void ExecuteUbergraph_WBP_SkillBoardTabBox_Banner(int32 EntryPoint);
    void OnUnHovered__DelegateSignature();
    void OnHovered__DelegateSignature();
    void OnClicked__DelegateSignature();
}; // Size: 0x369

#endif
