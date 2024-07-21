#ifndef UE4SS_SDK_CharaParts_HPP
#define UE4SS_SDK_CharaParts_HPP

#include "CharaParts_enums.hpp"

struct FCharaPartsCanBeEquipBody
{
    bool C000;                                                                        // 0x0000 (size: 0x1)
    bool M000;                                                                        // 0x0001 (size: 0x1)
    bool M100;                                                                        // 0x0002 (size: 0x1)
    bool M200;                                                                        // 0x0003 (size: 0x1)
    bool M300;                                                                        // 0x0004 (size: 0x1)
    bool M400;                                                                        // 0x0005 (size: 0x1)
    bool M500;                                                                        // 0x0006 (size: 0x1)
    bool F000;                                                                        // 0x0007 (size: 0x1)
    bool F100;                                                                        // 0x0008 (size: 0x1)
    bool F200;                                                                        // 0x0009 (size: 0x1)
    bool F300;                                                                        // 0x000A (size: 0x1)
    bool F400;                                                                        // 0x000B (size: 0x1)
    bool F500;                                                                        // 0x000C (size: 0x1)

}; // Size: 0xD

struct FCharaPartsColorData
{
    bool IsValid;                                                                     // 0x0008 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0009 (size: 0x7)
    FString Name;                                                                     // 0x0010 (size: 0x10)
    FLinearColor BaseColor1;                                                          // 0x0020 (size: 0x10)
    FLinearColor BaseColor2;                                                          // 0x0030 (size: 0x10)
    FLinearColor BaseColor3;                                                          // 0x0040 (size: 0x10)
    FLinearColor BaseColor4;                                                          // 0x0050 (size: 0x10)

}; // Size: 0x60

struct FCharaPartsColorDataWeapon : public FCharaPartsColorData
{
    FLinearColor EmissiveColor1;                                                      // 0x0060 (size: 0x10)
    FLinearColor EmissiveColor2;                                                      // 0x0070 (size: 0x10)

}; // Size: 0x80

struct FCharaPartsCoordinateData
{
    ECharaPartsLocation TargetLocation;                                               // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    class UCharaPartsData* TargetParts;                                               // 0x0008 (size: 0x8)
    int32 MeshID;                                                                     // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FCharaPartsDataAssetHolder
{
    UClass* AnimClass;                                                                // 0x0000 (size: 0x8)
    TArray<class UCharaPartsMaterialSet*> MaterialSetList;                            // 0x0008 (size: 0x10)
    TArray<class UCharaPartsColorListBase*> MaterialColorListAsset;                   // 0x0018 (size: 0x10)
    class UDataAsset* FacialAnimationSet;                                             // 0x0028 (size: 0x8)
    class UPoseAsset* FacialPoseAssetEye;                                             // 0x0030 (size: 0x8)
    class UPoseAsset* FacialPoseAssetBrow;                                            // 0x0038 (size: 0x8)
    class UPoseAsset* FacialPoseAssetMouth;                                           // 0x0040 (size: 0x8)
    class UPoseAsset* FacialPoseAssetAdj;                                             // 0x0048 (size: 0x8)
    class UPoseAsset* FacialPoseAssetEyelid;                                          // 0x0050 (size: 0x8)
    class UPoseAsset* FacialPoseAssetDfm;                                             // 0x0058 (size: 0x8)
    UClass* HairAnimClass;                                                            // 0x0060 (size: 0x8)

}; // Size: 0x68

struct FCharaPartsExtraColorData
{
    bool IsValid;                                                                     // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    FString Name;                                                                     // 0x0008 (size: 0x10)
    TSoftObjectPtr<UMaterialInterface> Material;                                      // 0x0018 (size: 0x28)
    TSoftObjectPtr<UMaterialInterface> SubMaterial;                                   // 0x0040 (size: 0x28)

}; // Size: 0x68

struct FCharaPartsMaterials
{
    TArray<TSoftObjectPtr<UMaterialInterface>> Materials;                             // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FCharaPartsSubLocation
{
    bool Hat;                                                                         // 0x0000 (size: 0x1)
    bool Upper;                                                                       // 0x0001 (size: 0x1)
    bool Lower;                                                                       // 0x0002 (size: 0x1)
    bool Gloves;                                                                      // 0x0003 (size: 0x1)
    bool Shoes;                                                                       // 0x0004 (size: 0x1)
    bool Hair;                                                                        // 0x0005 (size: 0x1)
    bool Face;                                                                        // 0x0006 (size: 0x1)
    bool Eye;                                                                         // 0x0007 (size: 0x1)
    bool Mouth;                                                                       // 0x0008 (size: 0x1)
    bool Brow;                                                                        // 0x0009 (size: 0x1)
    bool Nose;                                                                        // 0x000A (size: 0x1)
    bool Line;                                                                        // 0x000B (size: 0x1)
    bool Beard;                                                                       // 0x000C (size: 0x1)
    bool BackOfHead;                                                                  // 0x000D (size: 0x1)
    bool Underwear;                                                                   // 0x000E (size: 0x1)
    bool UnderwearUpper;                                                              // 0x000F (size: 0x1)
    bool Accessory1;                                                                  // 0x0010 (size: 0x1)
    bool Accessory2;                                                                  // 0x0011 (size: 0x1)
    bool Accessory3;                                                                  // 0x0012 (size: 0x1)
    bool AccessoryHeadTop;                                                            // 0x0013 (size: 0x1)
    bool AccessoryHeadMid;                                                            // 0x0014 (size: 0x1)
    bool AccessoryHeadLow;                                                            // 0x0015 (size: 0x1)
    bool AccessoryHeadEar;                                                            // 0x0016 (size: 0x1)
    bool AccessoryFinger;                                                             // 0x0017 (size: 0x1)
    bool AccessoryEngagement;                                                         // 0x0018 (size: 0x1)
    bool AccessoryBodyBack;                                                           // 0x0019 (size: 0x1)
    bool AccessoryHipBack;                                                            // 0x001A (size: 0x1)
    bool AccessoryLeftFinger;                                                         // 0x001B (size: 0x1)

}; // Size: 0x1C

class UCharaPartsColorList : public UCharaPartsColorListBase
{
    TArray<FCharaPartsColorData> ColorList;                                           // 0x0030 (size: 0x10)

}; // Size: 0x40

class UCharaPartsColorListBase : public UDataAsset
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UCharaPartsColorWeaponList : public UCharaPartsColorListBase
{
    TArray<FCharaPartsColorDataWeapon> ColorList;                                     // 0x0030 (size: 0x10)

}; // Size: 0x40

class UCharaPartsData : public UDataAsset
{
    ECharaPartsLocation PartsLocation;                                                // 0x0030 (size: 0x1)
    FCharaPartsSubLocation SubLocation;                                               // 0x0031 (size: 0x1C)
    char padding_0[0x3];                                                              // 0x004D (size: 0x3)
    int32 Priority;                                                                   // 0x0050 (size: 0x4)
    float OpacityMask;                                                                // 0x0054 (size: 0x4)
    float CrtBoneScale;                                                               // 0x0058 (size: 0x4)
    float AnkleCrtBoneScale;                                                          // 0x005C (size: 0x4)
    float BreastPhysicsScale;                                                         // 0x0060 (size: 0x4)
    int32 HairType;                                                                   // 0x0064 (size: 0x4)
    int32 UnderwearType;                                                              // 0x0068 (size: 0x4)
    char padding_1[0x4];                                                              // 0x006C (size: 0x4)
    TSoftClassPtr<UAnimInstance> AnimClass;                                           // 0x0070 (size: 0x28)
    float StiffnessScale;                                                             // 0x0098 (size: 0x4)
    float DampingScale;                                                               // 0x009C (size: 0x4)
    TSoftClassPtr<UAnimInstance> PhysicsAnimClass1;                                   // 0x00A0 (size: 0x28)
    TSoftClassPtr<UAnimInstance> SubAnimClass1;                                       // 0x00C8 (size: 0x28)
    ECharaPartsLocation PhysicsAnimClassLocation1;                                    // 0x00F0 (size: 0x1)
    ECharaPartsLocation SubAnimClassLocation1;                                        // 0x00F1 (size: 0x1)
    char padding_2[0x2];                                                              // 0x00F2 (size: 0x2)
    float SubStiffnessScale1;                                                         // 0x00F4 (size: 0x4)
    float SubDampingScale1;                                                           // 0x00F8 (size: 0x4)
    char padding_3[0x4];                                                              // 0x00FC (size: 0x4)
    TSoftClassPtr<UAnimInstance> PhysicsAnimClass2;                                   // 0x0100 (size: 0x28)
    TSoftClassPtr<UAnimInstance> SubAnimClass2;                                       // 0x0128 (size: 0x28)
    ECharaPartsLocation PhysicsAnimClassLocation2;                                    // 0x0150 (size: 0x1)
    ECharaPartsLocation SubAnimClassLocation2;                                        // 0x0151 (size: 0x1)
    char padding_4[0x2];                                                              // 0x0152 (size: 0x2)
    float SubStiffnessScale2;                                                         // 0x0154 (size: 0x4)
    float SubDampingScale2;                                                           // 0x0158 (size: 0x4)
    int32 DefaultMeshID;                                                              // 0x015C (size: 0x4)
    TArray<TSoftObjectPtr<UStreamableRenderAsset>> MeshList;                          // 0x0160 (size: 0x10)
    TArray<TSoftObjectPtr<UStreamableRenderAsset>> MeshMirrorList;                    // 0x0170 (size: 0x10)
    TArray<FCharaPartsCoordinateData> CoordinateList;                                 // 0x0180 (size: 0x10)
    class UCharaPartsColorListBase* ColorListAsset;                                   // 0x0190 (size: 0x8)
    TArray<FCharaPartsColorData> ColorList;                                           // 0x0198 (size: 0x10)
    TArray<FCharaPartsExtraColorData> ExtraColorList_DEPRICATED;                      // 0x01A8 (size: 0x10)
    TArray<TSoftObjectPtr<UCharaPartsMaterialSet>> MaterialSetList;                   // 0x01B8 (size: 0x10)
    TArray<TSoftObjectPtr<UCharaPartsColorListBase>> MaterialColorListAsset;          // 0x01C8 (size: 0x10)
    bool bIsUsingSocksMaterial;                                                       // 0x01D8 (size: 0x1)
    char padding_5[0x7];                                                              // 0x01D9 (size: 0x7)
    class UCharaPartsOffsetList* OffsetListAsset;                                     // 0x01E0 (size: 0x8)
    TSoftObjectPtr<UDataAsset> FacialAnimationSet;                                    // 0x01E8 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetEye;                                    // 0x0210 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetBrow;                                   // 0x0238 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetMouth;                                  // 0x0260 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetAdj;                                    // 0x0288 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetEyelid;                                 // 0x02B0 (size: 0x28)
    TSoftObjectPtr<UPoseAsset> FacialPoseAssetDfm;                                    // 0x02D8 (size: 0x28)
    TSoftClassPtr<UAnimInstance> HairAnimClass;                                       // 0x0300 (size: 0x28)
    TSoftObjectPtr<UBlendSpace> TiltPanBlendSpace;                                    // 0x0328 (size: 0x28)
    class UCharaPartsMaterialsList* CharaPartsMaterialsList;                          // 0x0350 (size: 0x8)
    char padding_6[0x3];                                                              // 0x0358 (size: 0x3)
    ECharaPartsAccessoryLocation AccessoryLocation;                                   // 0x035B (size: 0x1)

    FLinearColor GetPartsMaterialColor(int32 ColorParameterIndex, int32 HueIndex, int32 MaterialColorListIndex);
    FCharaPartsColorData GetDefaultColor(int32 Index);
    void GetCheckedSubLocationArray(TArray<ECharaPartsLocation>& CharaPartsLocationArray);
}; // Size: 0x360

class UCharaPartsMaterialSet : public UDataAsset
{
    TArray<class UMaterialInterface*> Materials;                                      // 0x0030 (size: 0x10)

}; // Size: 0x40

class UCharaPartsMaterialsList : public UDataAsset
{
    TArray<FCharaPartsMaterials> MaterialsList;                                       // 0x0030 (size: 0x10)

}; // Size: 0x40

class UCharaPartsOffsetList : public UDataAsset
{
    FTransform M000;                                                                  // 0x0030 (size: 0x30)
    FTransform M100;                                                                  // 0x0060 (size: 0x30)
    FTransform M200;                                                                  // 0x0090 (size: 0x30)
    FTransform M300;                                                                  // 0x00C0 (size: 0x30)
    FTransform M400;                                                                  // 0x00F0 (size: 0x30)
    FTransform M500;                                                                  // 0x0120 (size: 0x30)
    FTransform F000;                                                                  // 0x0150 (size: 0x30)
    FTransform F100;                                                                  // 0x0180 (size: 0x30)
    FTransform F200;                                                                  // 0x01B0 (size: 0x30)
    FTransform F300;                                                                  // 0x01E0 (size: 0x30)
    FTransform F400;                                                                  // 0x0210 (size: 0x30)
    FTransform F500;                                                                  // 0x0240 (size: 0x30)
    TMap<class ECharaPartsBody, class FTransform> CharaPartsMap;                      // 0x0270 (size: 0x50)

}; // Size: 0x2C0

#endif
