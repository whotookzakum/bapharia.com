#ifndef UE4SS_SDK_LibraryMenu_Monster_ExplainTabMenu_HPP
#define UE4SS_SDK_LibraryMenu_Monster_ExplainTabMenu_HPP

class ULibraryMenu_Monster_ExplainTabMenu_C : public UUserWidget
{
    class USBRichTextBlock* AttackText;                                               // 0x0278 (size: 0x8)
    class UTextBlock* AttackValueText;                                                // 0x0280 (size: 0x8)
    class UImage* AttributeBG;                                                        // 0x0288 (size: 0x8)
    class UImage* AttributeInfoIcon;                                                  // 0x0290 (size: 0x8)
    class UImage* AttributeNewIcon;                                                   // 0x0298 (size: 0x8)
    class UImage* AttributePanelLine;                                                 // 0x02A0 (size: 0x8)
    class UWidgetSwitcher* AttributeSwitcher_150;                                     // 0x02A8 (size: 0x8)
    class UTextBlock* AttributeValueText;                                             // 0x02B0 (size: 0x8)
    class UImage* BG;                                                                 // 0x02B8 (size: 0x8)
    class UScrollBox* CommentBox;                                                     // 0x02C0 (size: 0x8)
    class UImage* CommentInfoIcon;                                                    // 0x02C8 (size: 0x8)
    class UImage* CommentNewIcon;                                                     // 0x02D0 (size: 0x8)
    class UTextBlock* CommentValueText;                                               // 0x02D8 (size: 0x8)
    class USBRichTextBlock* DisableAttrText5;                                         // 0x02E0 (size: 0x8)
    class UImage* Line;                                                               // 0x02E8 (size: 0x8)
    class USBRichTextBlock* PhysicalText;                                             // 0x02F0 (size: 0x8)
    class UTextBlock* PhysicalValueText;                                              // 0x02F8 (size: 0x8)
    class USBRichTextBlock* SBRichTextBlock_555;                                      // 0x0300 (size: 0x8)
    class UImage* StatusBG;                                                           // 0x0308 (size: 0x8)
    class UImage* StatusInfoIcon;                                                     // 0x0310 (size: 0x8)
    class UImage* StatusNewIcon;                                                      // 0x0318 (size: 0x8)
    class UImage* StatusPanelLine_H;                                                  // 0x0320 (size: 0x8)
    class UImage* StatusPanelLine_V1;                                                 // 0x0328 (size: 0x8)
    class UImage* StatusPanelLine_V2;                                                 // 0x0330 (size: 0x8)
    class UImage* TypeBG;                                                             // 0x0338 (size: 0x8)
    class UImage* TypeInfoIcon;                                                       // 0x0340 (size: 0x8)
    class UImage* TypeNewIcon;                                                        // 0x0348 (size: 0x8)
    class UImage* TypePanelLine;                                                      // 0x0350 (size: 0x8)
    class USBRichTextBlock* TypeText;                                                 // 0x0358 (size: 0x8)
    class UTextBlock* TypeValueText;                                                  // 0x0360 (size: 0x8)
    FSBLibraryEnemyData ViewEnemyData;                                                // 0x0368 (size: 0x28)
    int32 SelectEnemyType;                                                            // 0x0390 (size: 0x4)
    int32 SelectEnemyIndex;                                                           // 0x0394 (size: 0x4)
    FSBLibraryEnemyDetailOpenSetting DetailOpenSetting;                               // 0x0398 (size: 0x20)
    class UWBP_CommonToolTipDetail_Variable_C* AttributeTooltip;                      // 0x03B8 (size: 0x8)
    class UWBP_CommonToolTipDetail_Variable_C* StatusTooltip;                         // 0x03C0 (size: 0x8)
    class UWBP_CommonToolTipDetail_Variable_C* CommentTooltip;                        // 0x03C8 (size: 0x8)
    class UWBP_CommonToolTipDetail_Variable_C* RaceTooltip;                           // 0x03D0 (size: 0x8)
    int32 EnemyKillCount;                                                             // 0x03D8 (size: 0x4)
    int32 NewIconCheckCount;                                                          // 0x03DC (size: 0x4)

    void ChangeEnemyDataFromId(FName EnemyId);
    void Set Info Tooltip(class UImage* TargetIcon, class UWBP_CommonToolTipDetail_Variable_C*& TipWidget, int32 totalCount, int32 NowCount);
    void UpdateDetailOpenSetting(FName CheckType);
    void ChangeEnemyData(int32 Index, int32 Type);
    void SetEnemyData(FSBLibraryEnemyData EnemyData);
}; // Size: 0x3E0

#endif
