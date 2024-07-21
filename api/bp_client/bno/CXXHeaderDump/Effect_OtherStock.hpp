#ifndef UE4SS_SDK_Effect_OtherStock_HPP
#define UE4SS_SDK_Effect_OtherStock_HPP

class UEffect_OtherStock_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Amount;                                            // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Buff;                                              // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Item;                                              // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Num;                                               // 0x0298 (size: 0x8)

    void PreConstruct(bool IsDesignTime);
    void NotActiveData(FText Buff, FText item, FText Amount, FText Value);
    void ExecuteUbergraph_Effect_OtherStock(int32 EntryPoint);
}; // Size: 0x2A0

#endif
