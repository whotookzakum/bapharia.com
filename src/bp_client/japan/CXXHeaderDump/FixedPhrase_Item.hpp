#ifndef UE4SS_SDK_FixedPhrase_Item_HPP
#define UE4SS_SDK_FixedPhrase_Item_HPP

class UFixedPhrase_Item_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCmnBtn24_C* CmnBtn24;                                                      // 0x0280 (size: 0x8)
    FFixedPhrase_Item_COnSelect OnSelect;                                             // 0x0288 (size: 0x10)
    void OnSelect(int32 retFixedPhraseIndex, class UFixedPhrase_Item_C* InSelectedItem);
    bool bSelected;                                                                   // 0x0298 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0299 (size: 0x7)
    FFixedPhrase_Item_COnSelectRight OnSelectRight;                                   // 0x02A0 (size: 0x10)
    void OnSelectRight(int32 retFixedPhraseIndex, class UFixedPhrase_Item_C* InSelectedItem);
    bool IsDragable;                                                                  // 0x02B0 (size: 0x1)
    char padding_1[0x3];                                                              // 0x02B1 (size: 0x3)
    int32 TextId;                                                                     // 0x02B4 (size: 0x4)

    void GetShortcutItemInfo(FShortcutItemInfo& OutShortcutItemInfo);
    void GetFixedPhrase(FString& FixedPhrase);
    void GetShortcutRegisteredIconVisibility(FString Emotion, bool& isVisibility);
    void SetDragable(bool InDragable);
    void OnDragDetected(FGeometry MyGeometry, const FPointerEvent& PointerEvent, class UDragDropOperation*& Operation);
    FEventReply OnPreviewMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
    void IsSelected(bool& bSelected);
    void PreConstruct(bool IsDesignTime);
    void BndEvt__CmnBtn24_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void ExecuteUbergraph_FixedPhrase_Item(int32 EntryPoint);
    void OnSelectRight__DelegateSignature(int32 retFixedPhraseIndex, class UFixedPhrase_Item_C* InSelectedItem);
    void OnSelect__DelegateSignature(int32 retFixedPhraseIndex, class UFixedPhrase_Item_C* InSelectedItem);
}; // Size: 0x2B8

#endif
