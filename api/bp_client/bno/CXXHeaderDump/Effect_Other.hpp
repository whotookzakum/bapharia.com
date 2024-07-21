#ifndef UE4SS_SDK_Effect_Other_HPP
#define UE4SS_SDK_Effect_Other_HPP

class UEffect_Other_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBDateTimeTextBlock* SBDateTimeTextBlock_Time;                             // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Category;                                          // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Name;                                              // 0x0290 (size: 0x8)
    class USBRuntimeTextBlock* Txt_Value;                                             // 0x0298 (size: 0x8)
    bool bPermanent;                                                                  // 0x02A0 (size: 0x1)

    void PreConstruct(bool IsDesignTime);
    void ActiveData(FText Category, FText Name, FText Value, bool bValidTime, FDateTime LimitTime, bool Permanent);
    void UpdateTime(FDateTime LimitTime);
    void ExecuteUbergraph_Effect_Other(int32 EntryPoint);
}; // Size: 0x2A1

#endif
