#ifndef UE4SS_SDK_MyCharaMenu_LvSync_HPP
#define UE4SS_SDK_MyCharaMenu_LvSync_HPP

class UMyCharaMenu_LvSync_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* Attack;                                          // 0x0280 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* Critical;                                        // 0x0288 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* CriticalPer;                                     // 0x0290 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* Defense;                                         // 0x0298 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* DEX;                                             // 0x02A0 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* INT;                                             // 0x02A8 (size: 0x8)
    class UMyCharaMenu_LvSyncNum1_C* Lv;                                              // 0x02B0 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* MND;                                             // 0x02B8 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* Resilience;                                      // 0x02C0 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* STR;                                             // 0x02C8 (size: 0x8)
    class UMyCharaMenu_LvSyncNum2_C* TotalPower;                                      // 0x02D0 (size: 0x8)
    class UMyCharaMenu_LvSyncNum3_C* VIT;                                             // 0x02D8 (size: 0x8)

    void Update(bool bIsLevelSync);
    void Construct();
    void ExecuteUbergraph_MyCharaMenu_LvSync(int32 EntryPoint);
}; // Size: 0x2E0

#endif
