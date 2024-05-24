#ifndef UE4SS_SDK_LibraryMenu_Monster_SwitchWindow_HPP
#define UE4SS_SDK_LibraryMenu_Monster_SwitchWindow_HPP

class ULibraryMenu_Monster_SwitchWindow_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* DetailTabButton;                                               // 0x0280 (size: 0x8)
    class USBRichTextBlock* DetailTabText;                                            // 0x0288 (size: 0x8)
    class USBButton_C* ExplainTabButton;                                              // 0x0290 (size: 0x8)
    class USBRichTextBlock* ExplainTabText;                                           // 0x0298 (size: 0x8)
    class UTextBlock* IDView;                                                         // 0x02A0 (size: 0x8)
    class ULibraryMenu_Monster_DetailTabMenu_C* LibraryMenu_Monster_DetailTabMenu;    // 0x02A8 (size: 0x8)
    class ULibraryMenu_Monster_ExplainTabMenu_C* LibraryMenu_Monster_ExplainTabMenu;  // 0x02B0 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_66;                                         // 0x02B8 (size: 0x8)
    FLibraryMenu_Monster_SwitchWindow_COnAreaListVisibleChange OnAreaListVisibleChange; // 0x02C0 (size: 0x10)
    void OnAreaListVisibleChange(bool Visible);
    FName CountCheckEnemyId;                                                          // 0x02D0 (size: 0x8)
    FSBLibraryEnemyData ViewEnemyData;                                                // 0x02D8 (size: 0x28)
    FButtonStyle NormalBtn;                                                           // 0x0300 (size: 0x278)
    FButtonStyle SelectedBtn;                                                         // 0x0578 (size: 0x278)
    FLibraryMenu_Monster_SwitchWindow_COnAreaListSelect OnAreaListSelect;             // 0x07F0 (size: 0x10)
    void OnAreaListSelect(int32 Index, FName EnemyId);

    void UpdateReadMarkCount();
    void CloseAreaList();
    void ChangeEnemyType(int32 Type);
    void SetEnemyData(FSBLibraryEnemyData EnemyData);
    void SetActiveTab(int32 Index);
    void Construct();
    void BndEvt__LibraryMenu_Monster_SwitchWindow_DetailTabButton_K2Node_ComponentBoundEvent_0_OnButtonPressedEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_SwitchWindow_ExplainTabButton_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void AreaListVisibleChange(bool Visible);
    void Destruct();
    void AreaListSelect(int32 Index, FName EnemyId);
    void ExecuteUbergraph_LibraryMenu_Monster_SwitchWindow(int32 EntryPoint);
    void OnAreaListSelect__DelegateSignature(int32 Index, FName EnemyId);
    void OnAreaListVisibleChange__DelegateSignature(bool Visible);
}; // Size: 0x800

#endif
