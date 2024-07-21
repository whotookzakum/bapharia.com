#ifndef UE4SS_SDK_MyCharaMenu_EffectDetailsList_HPP
#define UE4SS_SDK_MyCharaMenu_EffectDetailsList_HPP

class UMyCharaMenu_EffectDetailsList_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UButton* BtnScreen;                                                         // 0x02C8 (size: 0x8)
    class UCmnClose02_C* CmnClose02;                                                  // 0x02D0 (size: 0x8)
    class UScrollBox* SBox_Details;                                                   // 0x02D8 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x02E0 (size: 0x8)
    FString WeaponUniqueID;                                                           // 0x02E8 (size: 0x10)

    void AddEffectDetailItemToList(FText InEffectNameText, FText InEffectDescText);
    void Setup();
    void HideWindow();
    void ShowWindow();
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__BtnFullScreen_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnPress_Cancel();
    void BndEvt__MyCharaMenu_EffectDetailsList_CmnClose02_K2Node_ComponentBoundEvent_2_OnClosed__DelegateSignature();
    void ExecuteUbergraph_MyCharaMenu_EffectDetailsList(int32 EntryPoint);
}; // Size: 0x2F8

#endif
