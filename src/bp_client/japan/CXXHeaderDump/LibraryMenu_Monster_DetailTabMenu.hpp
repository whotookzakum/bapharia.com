#ifndef UE4SS_SDK_LibraryMenu_Monster_DetailTabMenu_HPP
#define UE4SS_SDK_LibraryMenu_Monster_DetailTabMenu_HPP

class ULibraryMenu_Monster_DetailTabMenu_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AreaListCloseAnimation;                                   // 0x0280 (size: 0x8)
    class UWidgetAnimation* AreaListOpenAnimation;                                    // 0x0288 (size: 0x8)
    class USBListBox* AreaListBox_168;                                                // 0x0290 (size: 0x8)
    class UImage* AreaNewIcon;                                                        // 0x0298 (size: 0x8)
    class UImage* AreaSelectBG;                                                       // 0x02A0 (size: 0x8)
    class USBButtonFullScreen_C* AreaSelectCloseFullscreen;                           // 0x02A8 (size: 0x8)
    class ULibraryMenu_Monster_ElementData_C* AttackElementData;                      // 0x02B0 (size: 0x8)
    class USBRichTextBlock* AttackTextBlock_212;                                      // 0x02B8 (size: 0x8)
    class UImage* BG;                                                                 // 0x02C0 (size: 0x8)
    class UImage* CenterLine;                                                         // 0x02C8 (size: 0x8)
    class UImage* DropListBG;                                                         // 0x02D0 (size: 0x8)
    class UCanvasPanel* ElementPanel;                                                 // 0x02D8 (size: 0x8)
    class UImage* ElementPanelBG;                                                     // 0x02E0 (size: 0x8)
    class UImage* Flame;                                                              // 0x02E8 (size: 0x8)
    class UCanvasPanel* ItemDropPanel;                                                // 0x02F0 (size: 0x8)
    class ULibraryMenu_Monster_DropItem_C* LibraryMenu_Monster_DropItem;              // 0x02F8 (size: 0x8)
    class ULibraryMenu_Monster_DropItem_C* LibraryMenu_Monster_DropItem_103;          // 0x0300 (size: 0x8)
    class ULibraryMenu_Monster_DropItem_C* LibraryMenu_Monster_DropItem_226;          // 0x0308 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem;        // 0x0310 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_1;      // 0x0318 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_2;      // 0x0320 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_3;      // 0x0328 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_4;      // 0x0330 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_5;      // 0x0338 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_122;    // 0x0340 (size: 0x8)
    class ULibraryMenu_MonsterAreaListItem_C* LibraryMenu_MonsterAreaListItem_264;    // 0x0348 (size: 0x8)
    class USBButton_C* PopAreaButton;                                                 // 0x0350 (size: 0x8)
    class UCanvasPanel* PopAreaPanel;                                                 // 0x0358 (size: 0x8)
    class USBRichTextBlock* ResistanceTextBlock;                                      // 0x0360 (size: 0x8)
    class ULibraryMenu_Monster_ElementData_C* ResistElementData;                      // 0x0368 (size: 0x8)
    class USBListBox* SBListBox_138;                                                  // 0x0370 (size: 0x8)
    class UTextBlock* SelectAreaName;                                                 // 0x0378 (size: 0x8)
    class UImage* StatusInfoIcon;                                                     // 0x0380 (size: 0x8)
    class UImage* StatusNewIcon;                                                      // 0x0388 (size: 0x8)
    class UUIBlocker_C* UIBlocker_AreaList;                                           // 0x0390 (size: 0x8)
    class UImage* VLine1;                                                             // 0x0398 (size: 0x8)
    class UImage* VLine2;                                                             // 0x03A0 (size: 0x8)
    FLibraryMenu_Monster_DetailTabMenu_COnAreaListSelect OnAreaListSelect;            // 0x03A8 (size: 0x10)
    void OnAreaListSelect(int32 Index, FName EnemyId);
    FSBLibraryEnemyData TargetEnemyData;                                              // 0x03B8 (size: 0x28)
    int32 SelectEnemyIndex;                                                           // 0x03E0 (size: 0x4)
    int32 SelectEnemyType;                                                            // 0x03E4 (size: 0x4)
    FName ViewEnemyId;                                                                // 0x03E8 (size: 0x8)
    TArray<class ULibraryMenu_Monster_DropItem_C*> DropItemWidgetList;                // 0x03F0 (size: 0x10)
    TArray<class ULibraryMenu_MonsterAreaListItem_C*> AreaNameWidgetList;             // 0x0400 (size: 0x10)
    FLibraryMenu_Monster_DetailTabMenu_COnAreaListVisibleChange OnAreaListVisibleChange; // 0x0410 (size: 0x10)
    void OnAreaListVisibleChange(bool Visible);
    int32 SelectAreaIndex;                                                            // 0x0420 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0424 (size: 0x4)
    FSBLibraryEnemyDetailOpenSetting DetailOpenSetting;                               // 0x0428 (size: 0x20)
    class UWBP_CommonToolTipDetail_Variable_C* InfoTooltipWidget;                     // 0x0448 (size: 0x8)
    int32 KillCountCheck;                                                             // 0x0450 (size: 0x4)
    int32 NewMarkCheckCount;                                                          // 0x0454 (size: 0x4)
    TArray<FName> ReadAreaIdList;                                                     // 0x0458 (size: 0x10)
    TArray<FName> NowKilledAreaList;                                                  // 0x0468 (size: 0x10)
    bool FullOpenDebug;                                                               // 0x0478 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0479 (size: 0x3)
    FName NowDetailType;                                                              // 0x047C (size: 0x8)

    void GetDetailOpenSetting(FName CheckType);
    void UpdateDetailOpenSetting();
    void SetActiveArea(int32 Index);
    void GetAreaListWidget(int32 Index, class ULibraryMenu_MonsterAreaListItem_C*& OutWidget);
    void MakeAreaList();
    void CloseAreaList();
    void OpenAreaList();
    void ChangeEnemyData(int32 Type, int32 Index, int32 AreaIndex);
    void GetEnemyPopAreaData(TArray<FString>& AreaIds);
    void GetDropItemWidget(int32 Index, class ULibraryMenu_Monster_DropItem_C*& Widget);
    void Update Drop Item Widget Visibility(int32 Num);
    void Initialize Drop Item List();
    void ChangeEnemyViewData(FName ChangeEnemyId);
    void SetEnemyData(FSBLibraryEnemyData EnemyData);
    void ButtonTextColorChange(bool OnCursor);
    void BndEvt__LibraryMenu_Monster_DetailTabMenu_PopAreaButton_K2Node_ComponentBoundEvent_3_OnHandledLostFocus__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_DetailTabMenu_PopAreaButton_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__LibraryMenu_Monster_DetailTabMenu_AreaSelectCloseFullscreen_K2Node_ComponentBoundEvent_4_OnButtonPressedEvent__DelegateSignature();
    void OnAreaItemSelect(int32 Value);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__LibraryMenu_Monster_DetailTabMenu_PopAreaButton_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature();
    void Construct();
    void BndEvt__LibraryMenu_Monster_DetailTabMenu_PopAreaButton_K2Node_ComponentBoundEvent_5_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_Monster_DetailTabMenu(int32 EntryPoint);
    void OnAreaListVisibleChange__DelegateSignature(bool Visible);
    void OnAreaListSelect__DelegateSignature(int32 Index, FName EnemyId);
}; // Size: 0x484

#endif
