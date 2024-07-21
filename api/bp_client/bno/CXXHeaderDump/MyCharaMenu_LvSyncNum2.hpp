#ifndef UE4SS_SDK_MyCharaMenu_LvSyncNum2_HPP
#define UE4SS_SDK_MyCharaMenu_LvSyncNum2_HPP

class UMyCharaMenu_LvSyncNum2_C : public UUserWidget
{
    class UHorizontalBox* NumGrp;                                                     // 0x0278 (size: 0x8)
    class UTextBlock* txtNum;                                                         // 0x0280 (size: 0x8)
    bool bPercent;                                                                    // 0x0288 (size: 0x1)

    void Clear();
    void SetValue(int32 Value, int32 OriginalValue);
}; // Size: 0x289

#endif
