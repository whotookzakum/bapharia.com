#ifndef UE4SS_SDK_InventoryData_HPP
#define UE4SS_SDK_InventoryData_HPP

struct FInventoryData
{
    int32 Index_12_2A2EFBEB48A8DB04985595BB2B213B55;                                  // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FInventoryItemData IconData_2_92C9F7714C368ABD7288809282479544;                   // 0x0008 (size: 0x60)
    EProtectorCategory Protector_5_F413968E4742B4497EC14F9B6613751B;                  // 0x0068 (size: 0x1)
    FInventoryWeaponData WeaponData_9_44A6B3C24A12554F59B43F9AB4EE70C9;               // 0x0069 (size: 0x2)
    char padding_1[0x5];                                                              // 0x006B (size: 0x5)
    FSBCharacterMountImagineData MountImagineData_18_133EF68E42124C6687F2608087850718; // 0x0070 (size: 0x28)

}; // Size: 0x98

#endif
