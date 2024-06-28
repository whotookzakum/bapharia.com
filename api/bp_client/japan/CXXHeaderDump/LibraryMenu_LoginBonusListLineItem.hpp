#ifndef UE4SS_SDK_LibraryMenu_LoginBonusListLineItem_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonusListLineItem_HPP

class ULibraryMenu_LoginBonusListLineItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCommonIcon_C* CommonIcon;                                                  // 0x0280 (size: 0x8)
    class USBRichTextBlock* DayText;                                                  // 0x0288 (size: 0x8)
    class USBButton_C* ExplainOpen;                                                   // 0x0290 (size: 0x8)
    class USBRichTextBlock* NumText;                                                  // 0x0298 (size: 0x8)
    class UImage* Stump;                                                              // 0x02A0 (size: 0x8)
    FLibraryMenu_LoginBonusListLineItem_CItemClick ItemClick;                         // 0x02A8 (size: 0x10)
    void ItemClick(int32 ID);
    int32 ClickId;                                                                    // 0x02B8 (size: 0x4)

    void SetMouseClickValue(int32 Value);
    void SetData(FSBLoginBonusWindowDayData Data, bool StumpOn);
    void BndEvt__ExplainOpen_K2Node_ComponentBoundEvent_0_OnButtonHoverEvent__DelegateSignature();
    void BndEvt__ExplainOpen_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_LoginBonusListLineItem(int32 EntryPoint);
    void ItemClick__DelegateSignature(int32 ID);
}; // Size: 0x2BC

#endif
