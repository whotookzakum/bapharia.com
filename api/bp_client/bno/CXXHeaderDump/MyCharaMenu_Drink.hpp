#ifndef UE4SS_SDK_MyCharaMenu_Drink_HPP
#define UE4SS_SDK_MyCharaMenu_Drink_HPP

class UMyCharaMenu_Drink_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink;                                              // 0x02B8 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink_116;                                          // 0x02C0 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink_215;                                          // 0x02C8 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink_343;                                          // 0x02D0 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink_456;                                          // 0x02D8 (size: 0x8)
    class UEffect_Drink_C* Effect_Drink_568;                                          // 0x02E0 (size: 0x8)
    class UImage* Image_133;                                                          // 0x02E8 (size: 0x8)
    class UImage* Img_Icon;                                                           // 0x02F0 (size: 0x8)
    class UVerticalBox* VB_Active;                                                    // 0x02F8 (size: 0x8)
    class UVerticalBox* VB_NonActive;                                                 // 0x0300 (size: 0x8)
    TArray<FSBLiquidMemoryInfo> LiquidMemoryInfos;                                    // 0x0308 (size: 0x10)
    class USBMasterDataManager* MasterDataManager;                                    // 0x0318 (size: 0x8)

    void Construct();
    void Update LiquidMemoryData();
    void Add Active Param(FText Name, float Value, ESBLiquidMemoryEfficacyValueType EffucaryValueType);
    void Add NonActive Param(FText Name, float Value);
    void ExecuteUbergraph_MyCharaMenu_Drink(int32 EntryPoint);
}; // Size: 0x320

#endif
