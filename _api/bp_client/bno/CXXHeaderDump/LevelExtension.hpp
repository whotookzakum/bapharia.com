#ifndef UE4SS_SDK_LevelExtension_HPP
#define UE4SS_SDK_LevelExtension_HPP

struct FLandscapeWallBox
{
    FVector BoxExtent;                                                                // 0x0000 (size: 0xC)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FTransform Transform;                                                             // 0x0010 (size: 0x30)

}; // Size: 0x40

struct FStoreCollisionProfile
{
    char padding_0[0xC];                                                              // 0x0000 (size: 0x0)
}; // Size: 0xC

class ADungeonPartsActor : public AActor
{
    class UDungeonPartsComponent* DungeonPartsComponent;                              // 0x0228 (size: 0x8)

}; // Size: 0x230

class AHierarchicalInstancedStaticMeshActor : public AActor
{
    class UHierarchicalInstancedStaticMeshComponent* HierarchicalInstancedStaticMeshComponent; // 0x0228 (size: 0x8)

}; // Size: 0x230

class AInstancedStaticMeshActor : public AActor
{
    class UInstancedStaticMeshComponent* InstancedStaticMeshComponent;                // 0x0228 (size: 0x8)

}; // Size: 0x230

class ALandscapeWallBase : public AActor
{
    float HalfHeight;                                                                 // 0x0228 (size: 0x4)
    float HalfThickness;                                                              // 0x022C (size: 0x4)
    TArray<TWeakObjectPtr<UBoxComponent>> BoxComponents;                              // 0x0230 (size: 0x10)
    TSubclassOf<class ADecalActor> DecalActorClass;                                   // 0x0240 (size: 0x8)
    bool bAffectNavigation;                                                           // 0x0248 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0249 (size: 0x7)
    class ULandscapeWallComponent* WallComponent;                                     // 0x0250 (size: 0x8)

    void Rebuild();
    class ULandscapeWallComponent* GetWallComponent();
    float GetHalfThickness();
    float GetHalfHeight();
    TSubclassOf<class ADecalActor> GetDecalClass();
}; // Size: 0x258

class ALandscapeWallSpline : public ALandscapeWallBase
{
    bool bClosedLoop;                                                                 // 0x0258 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0259 (size: 0x7)
    class ULandscapeWallSplineComponent* SplineComponent;                             // 0x0260 (size: 0x8)

    class ULandscapeWallSplineComponent* GetSplineComponent();
}; // Size: 0x268

class UDungeonPartsComponent : public USceneComponent
{
    char padding_0[0x210];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x210

class UDungeonPartsGroupComponent : public USceneComponent
{
    char padding_0[0x210];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x210

class ULandscapeWallComponent : public UPrimitiveComponent
{
    FColor DrawColor;                                                                 // 0x0468 (size: 0x4)
    char padding_0[0x4];                                                              // 0x046C (size: 0x4)
    TArray<FLandscapeWallBox> WallBoxes;                                              // 0x0470 (size: 0x10)

}; // Size: 0x480

class ULandscapeWallSplineComponent : public USplineComponent
{
    char padding_0[0x570];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x570

#endif
