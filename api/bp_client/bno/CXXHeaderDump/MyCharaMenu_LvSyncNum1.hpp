#ifndef UE4SS_SDK_MyCharaMenu_LvSyncNum1_HPP
#define UE4SS_SDK_MyCharaMenu_LvSyncNum1_HPP

class UMyCharaMenu_LvSyncNum1_C : public UUserWidget
{
    class UHorizontalBox* NumGrp;                                                     // 0x0278 (size: 0x8)
    class UTextBlock* txtNum;                                                         // 0x0280 (size: 0x8)

    void Clear();
    void SetValue(int32 Value, int32 OriginalValue);
}; // Size: 0x288

#endif
