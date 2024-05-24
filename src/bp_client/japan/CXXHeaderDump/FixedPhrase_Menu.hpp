#ifndef UE4SS_SDK_FixedPhrase_Menu_HPP
#define UE4SS_SDK_FixedPhrase_Menu_HPP

class UFixedPhrase_Menu_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCmnBtn23_C* Btn0;                                                          // 0x0280 (size: 0x8)
    class UCmnBtn23_C* Btn1;                                                          // 0x0288 (size: 0x8)
    class UCmnBtn23_C* Btn2;                                                          // 0x0290 (size: 0x8)
    class UCmnBtn23_C* Btn3;                                                          // 0x0298 (size: 0x8)
    class UGridPanel* GridPanel;                                                      // 0x02A0 (size: 0x8)
    class UUMG_ChatWindow_C* ChatWindow;                                              // 0x02A8 (size: 0x8)
    class UCmnBtn23_C* SelectedBtn;                                                   // 0x02B0 (size: 0x8)
    int32 SelectFixedPhraseId;                                                        // 0x02B8 (size: 0x4)

    void SelectFixedPhrase(int32 InFixedPhraseId, class UFixedPhrase_Item_C* InFixedPhraseItem);
    void SetDragable(bool InDragable);
    void CreateFixedPhrase();
    void Construct();
    void OnClick(int32 InIndex, class UFixedPhrase_Item_C* InItem);
    void BndEvt__Btn0_K2Node_ComponentBoundEvent_0_EventOnClicked__DelegateSignature();
    void BndEvt__Btn1_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void BndEvt__Btn2_K2Node_ComponentBoundEvent_2_EventOnClicked__DelegateSignature();
    void BndEvt__Btn3_K2Node_ComponentBoundEvent_3_EventOnClicked__DelegateSignature();
    void ExecuteUbergraph_FixedPhrase_Menu(int32 EntryPoint);
}; // Size: 0x2BC

#endif
