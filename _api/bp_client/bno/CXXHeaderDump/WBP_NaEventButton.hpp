#ifndef UE4SS_SDK_WBP_NaEventButton_HPP
#define UE4SS_SDK_WBP_NaEventButton_HPP

class UWBP_NaEventButton_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCommandMenu_C* Owner;                                                      // 0x0280 (size: 0x8)

    void Init(class UCommandMenu_C* Owner);
    void ExecuteUbergraph_WBP_NaEventButton(int32 EntryPoint);
}; // Size: 0x288

#endif
