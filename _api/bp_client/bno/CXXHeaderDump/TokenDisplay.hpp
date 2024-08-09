#ifndef UE4SS_SDK_TokenDisplay_HPP
#define UE4SS_SDK_TokenDisplay_HPP

class UTokenDisplay_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimTokenListIn;                                          // 0x0280 (size: 0x8)
    class UHorizontalBox* Box_Infomation;                                             // 0x0288 (size: 0x8)
    class USelectBlankText_C* SelectBlankText;                                        // 0x0290 (size: 0x8)
    class UTokenCategoryList_C* TokenCategoryList;                                    // 0x0298 (size: 0x8)
    class UTokenList_C* TokenList;                                                    // 0x02A0 (size: 0x8)
    class USBRuntimeTextBlock* Txt_InfoText;                                          // 0x02A8 (size: 0x8)
    class UImage* UI_CmnLineH3_1;                                                     // 0x02B0 (size: 0x8)

    void Open();
    void ChangeForcusCategory(int32 Index);
    void OnGetExpiredBlankText_Event();
    void OnGetTokenListBlankText_Event();
    void SwitchInfoText(int32 Index);
    void CustomEvent_0();
    void ExecuteUbergraph_TokenDisplay(int32 EntryPoint);
}; // Size: 0x2B8

#endif
