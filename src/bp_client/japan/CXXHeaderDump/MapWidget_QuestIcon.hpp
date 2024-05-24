#ifndef UE4SS_SDK_MapWidget_QuestIcon_HPP
#define UE4SS_SDK_MapWidget_QuestIcon_HPP

class UMapWidget_QuestIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimHovered;                                              // 0x0280 (size: 0x8)
    class USBButton_C* Btn;                                                           // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0290 (size: 0x8)
    class UQuestIcon_C* QuestIcon;                                                    // 0x0298 (size: 0x8)
    class UTextBlock* TextBlock;                                                      // 0x02A0 (size: 0x8)
    class UOverlay* TooltipHit;                                                       // 0x02A8 (size: 0x8)
    int32 QuestID;                                                                    // 0x02B0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02B4 (size: 0x4)
    class UMapWidget_IconTooltip1_C* Tooltip_1Line;                                   // 0x02B8 (size: 0x8)
    class UMapWidget_IconTooltip2_C* Tooltip_2Line;                                   // 0x02C0 (size: 0x8)
    bool IsToolTipEnable;                                                             // 0x02C8 (size: 0x1)
    bool IsTooltip2Line;                                                              // 0x02C9 (size: 0x1)
    char padding_1[0x6];                                                              // 0x02CA (size: 0x6)
    FString TooltipString;                                                            // 0x02D0 (size: 0x10)
    class UUserWidget* ToolTip;                                                       // 0x02E0 (size: 0x8)
    FMapWidget_QuestIcon_COnPressedQuestIcon OnPressedQuestIcon;                      // 0x02E8 (size: 0x10)
    void OnPressedQuestIcon(int32 InQuestId);
    FString dbgTxt;                                                                   // 0x02F8 (size: 0x10)
    bool isAnmFinished;                                                               // 0x0308 (size: 0x1)
    bool isAnmReverese;                                                               // 0x0309 (size: 0x1)

    void GetTooltipString(FString& OutTooltipString);
    void SetTooltipEnable(bool IsEnable);
    void SetTooltipToIcon(bool IsTooltip2Line, FString InToolTipText);
    void SetTooltipString(FString inString);
    class UWidget* GetToolTipWidget_0();
    void SetIcon(int32 InQuestIndex, bool IsClosed);
    void BndEvt__MapWidget_QuestIcon_Btn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__MapWidget_QuestIcon_Btn_K2Node_ComponentBoundEvent_1_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__MapWidget_QuestIcon_Btn_K2Node_ComponentBoundEvent_2_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__MapWidget_QuestIcon_Btn_K2Node_ComponentBoundEvent_3_OnButtonPressedEvent__DelegateSignature();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_MapWidget_QuestIcon(int32 EntryPoint);
    void OnPressedQuestIcon__DelegateSignature(int32 InQuestId);
}; // Size: 0x30A

#endif
