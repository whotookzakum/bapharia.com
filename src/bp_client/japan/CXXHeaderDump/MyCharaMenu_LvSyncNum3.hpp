#ifndef UE4SS_SDK_MyCharaMenu_LvSyncNum3_HPP
#define UE4SS_SDK_MyCharaMenu_LvSyncNum3_HPP

class UMyCharaMenu_LvSyncNum3_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* NumGrp;                                                     // 0x0280 (size: 0x8)
    class UTextBlock* txtNum;                                                         // 0x0288 (size: 0x8)
    class UTextBlock* txtPer;                                                         // 0x0290 (size: 0x8)
    bool bPercent;                                                                    // 0x0298 (size: 0x1)

    void Clear();
    void SetValue(int32 Value, int32 OriginalValue);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_MyCharaMenu_LvSyncNum3(int32 EntryPoint);
}; // Size: 0x299

#endif
