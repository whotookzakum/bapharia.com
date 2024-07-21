#ifndef UE4SS_SDK_InventoryItemData_HPP
#define UE4SS_SDK_InventoryItemData_HPP

struct FInventoryItemData
{
    FString UniqueId_45_7574BCF94D5ADE86CDBBF0BB3120996A;                             // 0x0000 (size: 0x10)
    int32 Index_46_91E0E93D4606ACC8947E678E4D117154;                                  // 0x0010 (size: 0x4)
    EItemType ItemType_54_7E466491478A3BFD84668EB0ADC5D32E;                           // 0x0014 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0015 (size: 0x3)
    FText Name_19_21BA5B5B48FF00666A0EAE8CFC6A1408;                                   // 0x0018 (size: 0x18)
    FText UnIdentifiedName_69_98CDE22B47E90984A0F520BFE2AB3B10;                       // 0x0030 (size: 0x18)
    int32 Amount_27_A52406EA47DD10B12153A9B4910EB562;                                 // 0x0048 (size: 0x4)
    int32 AmountBonus_72_CC8FD2C24D500458399691BA0CC7C393;                            // 0x004C (size: 0x4)
    int32 StorageNumber_61_3A2F5E984BF1494BE5457B9307681DCC;                          // 0x0050 (size: 0x4)
    bool CanUse_56_D8CF042346DA73D559782393F6B26CC3;                                  // 0x0054 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0055 (size: 0x3)
    int32 ItemPositionIndex_64_C79DF86B4E5BD82D874FDC8075213A54;                      // 0x0058 (size: 0x4)
    bool bIsIdentified_66_22994BF440D03A77795283A7A3F0DC56;                           // 0x005C (size: 0x1)

}; // Size: 0x5D

#endif
