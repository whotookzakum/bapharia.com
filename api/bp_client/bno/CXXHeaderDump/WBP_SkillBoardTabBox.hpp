#ifndef UE4SS_SDK_WBP_SkillBoardTabBox_HPP
#define UE4SS_SDK_WBP_SkillBoardTabBox_HPP

class UWBP_SkillBoardTabBox_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWBP_SkillBoardTabBox_Banner_C* Banner_1;                                   // 0x0280 (size: 0x8)
    class UWBP_SkillBoardTabBox_Banner_C* Banner_2;                                   // 0x0288 (size: 0x8)
    class UWBP_SkillBoardTabBox_Banner_C* Banner_3;                                   // 0x0290 (size: 0x8)
    class UCanvasPanel* EffectGrp;                                                    // 0x0298 (size: 0x8)
    class USBButton_C* SBButton_Next;                                                 // 0x02A0 (size: 0x8)
    class USBButton_C* SBButton_Prev;                                                 // 0x02A8 (size: 0x8)
    FWBP_SkillBoardTabBox_COnClickBanner OnClickBanner;                               // 0x02B0 (size: 0x10)
    void OnClickBanner(ESBClassType Typr);
    int32 PageMax;                                                                    // 0x02C0 (size: 0x4)
    int32 HeaderPageIndex;                                                            // 0x02C4 (size: 0x4)
    int32 BannerMax;                                                                  // 0x02C8 (size: 0x4)
    int32 SelectIndex;                                                                // 0x02CC (size: 0x4)
    int32 SelectBannerId;                                                             // 0x02D0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02D4 (size: 0x4)
    class UWBP_SkillBoardTabBox_Banner_C* SelectBanner;                               // 0x02D8 (size: 0x8)
    TArray<ESBClassType> ClassList;                                                   // 0x02E0 (size: 0x10)
    TArray<class UWBP_SkillBoardTabBox_Banner_C*> TagList;                            // 0x02F0 (size: 0x10)

    void Select(ESBClassType& Type);
    void CheckPagerBtn();
    void SetBannerSelect(class UWBP_SkillBoardTabBox_Banner_C* Banner, bool Force);
    void SetBannerEnable();
    void UpdateBannerInfo();
    void UpdateTabInfo(bool Prev, bool Next, int32 Click);
    void Create List(TArray<ESBClassType>& EventList);
    void Initialize();
    void BndEvt__SBButton_Prev_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_Next_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void Construct();
    void BndEvt__WBP_SkillBoardTabBox_Banner_1_K2Node_ComponentBoundEvent_11_OnClicked__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_1_K2Node_ComponentBoundEvent_12_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_1_K2Node_ComponentBoundEvent_14_OnUnHovered__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_2_K2Node_ComponentBoundEvent_15_OnClicked__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_2_K2Node_ComponentBoundEvent_16_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_2_K2Node_ComponentBoundEvent_17_OnUnHovered__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_3_K2Node_ComponentBoundEvent_18_OnClicked__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_3_K2Node_ComponentBoundEvent_19_OnHovered__DelegateSignature();
    void BndEvt__WBP_SkillBoardTabBox_Banner_3_K2Node_ComponentBoundEvent_20_OnUnHovered__DelegateSignature();
    void ExecuteUbergraph_WBP_SkillBoardTabBox(int32 EntryPoint);
    void OnClickBanner__DelegateSignature(ESBClassType Typr);
}; // Size: 0x300

#endif
