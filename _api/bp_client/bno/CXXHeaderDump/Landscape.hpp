#ifndef UE4SS_SDK_Landscape_HPP
#define UE4SS_SDK_Landscape_HPP

#include "Landscape_enums.hpp"

struct FForeignControlPointData
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FForeignSplineSegmentData
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FForeignWorldSplineData
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FGizmoSelectData
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

struct FGrassInput
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    class ULandscapeGrassType* GrassType;                                             // 0x0008 (size: 0x8)
    FExpressionInput Input;                                                           // 0x0010 (size: 0x14)

}; // Size: 0x28

struct FGrassVariety
{
    class UStaticMesh* GrassMesh;                                                     // 0x0000 (size: 0x8)
    TArray<class UMaterialInterface*> OverrideMaterials;                              // 0x0008 (size: 0x10)
    FPerPlatformFloat GrassDensity;                                                   // 0x0018 (size: 0x4)
    bool bUseGrid;                                                                    // 0x001C (size: 0x1)
    char padding_0[0x3];                                                              // 0x001D (size: 0x3)
    float PlacementJitter;                                                            // 0x0020 (size: 0x4)
    FPerPlatformInt StartCullDistance;                                                // 0x0024 (size: 0x4)
    FPerPlatformInt EndCullDistance;                                                  // 0x0028 (size: 0x4)
    int32 MinLOD;                                                                     // 0x002C (size: 0x4)
    EGrassScaling Scaling;                                                            // 0x0030 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0031 (size: 0x3)
    FFloatInterval ScaleX;                                                            // 0x0034 (size: 0x8)
    FFloatInterval ScaleY;                                                            // 0x003C (size: 0x8)
    FFloatInterval ScaleZ;                                                            // 0x0044 (size: 0x8)
    bool RandomRotation;                                                              // 0x004C (size: 0x1)
    bool AlignToSurface;                                                              // 0x004D (size: 0x1)
    char padding_2[0x2];                                                              // 0x004E (size: 0x2)
    FFloatInterval GroundSlopeAngle;                                                  // 0x0050 (size: 0x8)
    bool bUseLandscapeLightmap;                                                       // 0x0058 (size: 0x1)
    FLightingChannels LightingChannels;                                               // 0x0059 (size: 0x1)
    bool bReceivesDecals;                                                             // 0x005A (size: 0x1)
    bool bCastDynamicShadow;                                                          // 0x005B (size: 0x1)
    bool bKeepInstanceBufferCPUCopy;                                                  // 0x005C (size: 0x1)

}; // Size: 0x60

struct FHeightmapData
{
    class UTexture2D* Texture;                                                        // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FLandscapeComponentMaterialOverride
{
    FPerPlatformInt LODIndex;                                                         // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    class UMaterialInterface* Material;                                               // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FLandscapeEditToolRenderData
{
    class UMaterialInterface* ToolMaterial;                                           // 0x0000 (size: 0x8)
    class UMaterialInterface* GizmoMaterial;                                          // 0x0008 (size: 0x8)
    int32 SelectedType;                                                               // 0x0010 (size: 0x4)
    int32 DebugChannelR;                                                              // 0x0014 (size: 0x4)
    int32 DebugChannelG;                                                              // 0x0018 (size: 0x4)
    int32 DebugChannelB;                                                              // 0x001C (size: 0x4)
    class UTexture2D* DataTexture;                                                    // 0x0020 (size: 0x8)
    class UTexture2D* LayerContributionTexture;                                       // 0x0028 (size: 0x8)
    class UTexture2D* DirtyTexture;                                                   // 0x0030 (size: 0x8)

}; // Size: 0x38

struct FLandscapeEditorLayerSettings
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FLandscapeImportLayerInfo
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FLandscapeInfoLayerSettings
{
    class ULandscapeLayerInfoObject* LayerInfoObj;                                    // 0x0000 (size: 0x8)
    FName LayerName;                                                                  // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FLandscapeLayer
{
    FGuid Guid;                                                                       // 0x0000 (size: 0x10)
    FName Name;                                                                       // 0x0010 (size: 0x8)
    bool bVisible;                                                                    // 0x0018 (size: 0x1)
    bool Blocked;                                                                     // 0x0019 (size: 0x1)
    char padding_0[0x2];                                                              // 0x001A (size: 0x2)
    float HeightmapAlpha;                                                             // 0x001C (size: 0x4)
    float WeightmapAlpha;                                                             // 0x0020 (size: 0x4)
    TEnumAsByte<ELandscapeBlendMode> BlendMode;                                       // 0x0024 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0025 (size: 0x3)
    TArray<FLandscapeLayerBrush> Brushes;                                             // 0x0028 (size: 0x10)
    TMap<class ULandscapeLayerInfoObject*, class bool> WeightmapLayerAllocationBlend; // 0x0038 (size: 0x50)

}; // Size: 0x88

struct FLandscapeLayerBrush
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

struct FLandscapeLayerComponentData
{
    FHeightmapData HeightmapData;                                                     // 0x0000 (size: 0x8)
    FWeightmapData WeightmapData;                                                     // 0x0008 (size: 0x30)

}; // Size: 0x38

struct FLandscapeLayerStruct
{
    class ULandscapeLayerInfoObject* LayerInfoObj;                                    // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FLandscapeMaterialTextureStreamingInfo
{
    FName TextureName;                                                                // 0x0000 (size: 0x8)
    float TexelFactor;                                                                // 0x0008 (size: 0x4)

}; // Size: 0xC

struct FLandscapeProxyMaterialOverride
{
    FPerPlatformInt LODIndex;                                                         // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    class UMaterialInterface* Material;                                               // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FLandscapeSplineConnection
{
    class ULandscapeSplineSegment* Segment;                                           // 0x0000 (size: 0x8)
    uint8 End;                                                                        // 0x0008 (size: 0x1)

}; // Size: 0x10

struct FLandscapeSplineInterpPoint
{
    FVector Center;                                                                   // 0x0000 (size: 0xC)
    FVector Left;                                                                     // 0x000C (size: 0xC)
    FVector Right;                                                                    // 0x0018 (size: 0xC)
    FVector FalloffLeft;                                                              // 0x0024 (size: 0xC)
    FVector FalloffRight;                                                             // 0x0030 (size: 0xC)
    FVector LayerLeft;                                                                // 0x003C (size: 0xC)
    FVector LayerRight;                                                               // 0x0048 (size: 0xC)
    FVector LayerFalloffLeft;                                                         // 0x0054 (size: 0xC)
    FVector LayerFalloffRight;                                                        // 0x0060 (size: 0xC)
    float StartEndFalloff;                                                            // 0x006C (size: 0x4)

}; // Size: 0x70

struct FLandscapeSplineMeshEntry
{
    class UStaticMesh* Mesh;                                                          // 0x0000 (size: 0x8)
    TArray<class UMaterialInterface*> MaterialOverrides;                              // 0x0008 (size: 0x10)
    uint8 bCenterH;                                                                   // 0x0018 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0019 (size: 0x3)
    FVector2D CenterAdjust;                                                           // 0x001C (size: 0x8)
    uint8 bScaleToWidth;                                                              // 0x0024 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0025 (size: 0x3)
    FVector Scale;                                                                    // 0x0028 (size: 0xC)
    TEnumAsByte<LandscapeSplineMeshOrientation> Orientation;                          // 0x0034 (size: 0x1)
    TEnumAsByte<ESplineMeshAxis::Type> ForwardAxis;                                   // 0x0035 (size: 0x1)
    TEnumAsByte<ESplineMeshAxis::Type> UpAxis;                                        // 0x0036 (size: 0x1)

}; // Size: 0x38

struct FLandscapeSplineSegmentConnection
{
    class ULandscapeSplineControlPoint* ControlPoint;                                 // 0x0000 (size: 0x8)
    float TangentLen;                                                                 // 0x0008 (size: 0x4)
    FName SocketName;                                                                 // 0x000C (size: 0x8)

}; // Size: 0x18

struct FLayerBlendInput
{
    FName LayerName;                                                                  // 0x0000 (size: 0x8)
    TEnumAsByte<ELandscapeLayerBlendType> BlendType;                                  // 0x0008 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0009 (size: 0x3)
    FExpressionInput LayerInput;                                                      // 0x000C (size: 0x14)
    FExpressionInput HeightInput;                                                     // 0x0020 (size: 0x14)
    float PreviewWeight;                                                              // 0x0034 (size: 0x4)
    FVector ConstLayerInput;                                                          // 0x0038 (size: 0xC)
    float ConstHeightInput;                                                           // 0x0044 (size: 0x4)

}; // Size: 0x48

struct FPhysicalMaterialInput
{
    class UPhysicalMaterial* PhysicalMaterial;                                        // 0x0000 (size: 0x8)
    FExpressionInput Input;                                                           // 0x0008 (size: 0x14)

}; // Size: 0x20

struct FWeightmapData
{
    TArray<class UTexture2D*> Textures;                                               // 0x0000 (size: 0x10)
    TArray<FWeightmapLayerAllocationInfo> LayerAllocations;                           // 0x0010 (size: 0x10)
    TArray<class ULandscapeWeightmapUsage*> TextureUsages;                            // 0x0020 (size: 0x10)

}; // Size: 0x30

struct FWeightmapLayerAllocationInfo
{
    class ULandscapeLayerInfoObject* LayerInfo;                                       // 0x0000 (size: 0x8)
    uint8 WeightmapTextureIndex;                                                      // 0x0008 (size: 0x1)
    uint8 WeightmapTextureChannel;                                                    // 0x0009 (size: 0x1)

}; // Size: 0x10

class AControlPointMeshActor : public AActor
{
    class UControlPointMeshComponent* ControlPointMeshComponent;                      // 0x0228 (size: 0x8)

}; // Size: 0x230

class ALandscape : public ALandscapeProxy
{
    char padding_0[0x5A0];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x5A0

class ALandscapeBlueprintBrushBase : public AActor
{
    char padding_0[0x228];                                                            // 0x0000 (size: 0x0)

    void RequestLandscapeUpdate();
    class UTextureRenderTarget2D* Render(bool InIsHeightmap, class UTextureRenderTarget2D* InCombinedResult, const FName& InWeightmapLayerName);
    void Initialize(const FTransform& InLandscapeTransform, const FIntPoint& InLandscapeSize, const FIntPoint& InLandscapeRenderTargetSize);
    void GetBlueprintRenderDependencies(TArray<class UObject*>& OutStreamableAssets);
}; // Size: 0x228

class ALandscapeGizmoActiveActor : public ALandscapeGizmoActor
{
    char padding_0[0x278];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x278

class ALandscapeGizmoActor : public AActor
{
    char padding_0[0x228];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x228

class ALandscapeMeshProxyActor : public AActor
{
    class ULandscapeMeshProxyComponent* LandscapeMeshProxyComponent;                  // 0x0228 (size: 0x8)

}; // Size: 0x230

class ALandscapeProxy : public AActor
{
    class ULandscapeSplinesComponent* SplineComponent;                                // 0x0228 (size: 0x8)
    FGuid LandscapeGuid;                                                              // 0x0230 (size: 0x10)
    FIntPoint LandscapeSectionOffset;                                                 // 0x0240 (size: 0x8)
    int32 MaxLODLevel;                                                                // 0x0248 (size: 0x4)
    float LODDistanceFactor;                                                          // 0x024C (size: 0x4)
    TEnumAsByte<ELandscapeLODFalloff::Type> LODFalloff;                               // 0x0250 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0251 (size: 0x3)
    float ComponentScreenSizeToUseSubSections;                                        // 0x0254 (size: 0x4)
    float LOD0ScreenSize;                                                             // 0x0258 (size: 0x4)
    float LOD0DistributionSetting;                                                    // 0x025C (size: 0x4)
    float LODDistributionSetting;                                                     // 0x0260 (size: 0x4)
    float TessellationComponentScreenSize;                                            // 0x0264 (size: 0x4)
    bool UseTessellationComponentScreenSizeFalloff;                                   // 0x0268 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0269 (size: 0x3)
    float TessellationComponentScreenSizeFalloff;                                     // 0x026C (size: 0x4)
    int32 OccluderGeometryLOD;                                                        // 0x0270 (size: 0x4)
    int32 StaticLightingLOD;                                                          // 0x0274 (size: 0x4)
    class UPhysicalMaterial* DefaultPhysMaterial;                                     // 0x0278 (size: 0x8)
    float StreamingDistanceMultiplier;                                                // 0x0280 (size: 0x4)
    char padding_2[0x4];                                                              // 0x0284 (size: 0x4)
    class UMaterialInterface* LandscapeMaterial;                                      // 0x0288 (size: 0x8)
    char padding_3[0x20];                                                             // 0x0290 (size: 0x20)
    class UMaterialInterface* LandscapeHoleMaterial;                                  // 0x02B0 (size: 0x8)
    TArray<FLandscapeProxyMaterialOverride> LandscapeMaterialsOverride;               // 0x02B8 (size: 0x10)
    bool bMeshHoles;                                                                  // 0x02C8 (size: 0x1)
    uint8 MeshHolesMaxLod;                                                            // 0x02C9 (size: 0x1)
    char padding_4[0x6];                                                              // 0x02CA (size: 0x6)
    TArray<class URuntimeVirtualTexture*> RuntimeVirtualTextures;                     // 0x02D0 (size: 0x10)
    int32 VirtualTextureNumLods;                                                      // 0x02E0 (size: 0x4)
    int32 VirtualTextureLodBias;                                                      // 0x02E4 (size: 0x4)
    ERuntimeVirtualTextureMainPassType VirtualTextureRenderPassType;                  // 0x02E8 (size: 0x1)
    char padding_5[0x3];                                                              // 0x02E9 (size: 0x3)
    float NegativeZBoundsExtension;                                                   // 0x02EC (size: 0x4)
    float PositiveZBoundsExtension;                                                   // 0x02F0 (size: 0x4)
    char padding_6[0x4];                                                              // 0x02F4 (size: 0x4)
    TArray<class ULandscapeComponent*> LandscapeComponents;                           // 0x02F8 (size: 0x10)
    TArray<class ULandscapeHeightfieldCollisionComponent*> CollisionComponents;       // 0x0308 (size: 0x10)
    TArray<class UHierarchicalInstancedStaticMeshComponent*> FoliageComponents;       // 0x0318 (size: 0x10)
    char padding_7[0x64];                                                             // 0x0328 (size: 0x64)
    bool bHasLandscapeGrass;                                                          // 0x038C (size: 0x1)
    char padding_8[0x3];                                                              // 0x038D (size: 0x3)
    float StaticLightingResolution;                                                   // 0x0390 (size: 0x4)
    uint8 CastShadow;                                                                 // 0x0394 (size: 0x1)
    uint8 bCastDynamicShadow;                                                         // 0x0394 (size: 0x1)
    uint8 bCastStaticShadow;                                                          // 0x0394 (size: 0x1)
    char padding_9[0x3];                                                              // 0x0395 (size: 0x3)
    uint8 bCastFarShadow;                                                             // 0x0398 (size: 0x1)
    char padding_10[0x3];                                                             // 0x0399 (size: 0x3)
    uint8 bCastHiddenShadow;                                                          // 0x039C (size: 0x1)
    char padding_11[0x3];                                                             // 0x039D (size: 0x3)
    uint8 bCastShadowAsTwoSided;                                                      // 0x03A0 (size: 0x1)
    char padding_12[0x3];                                                             // 0x03A1 (size: 0x3)
    uint8 bAffectDistanceFieldLighting;                                               // 0x03A4 (size: 0x1)
    FLightingChannels LightingChannels;                                               // 0x03A5 (size: 0x1)
    char padding_13[0x2];                                                             // 0x03A6 (size: 0x2)
    uint8 bUseMaterialPositionOffsetInStaticLighting;                                 // 0x03A8 (size: 0x1)
    uint8 bRenderCustomDepth;                                                         // 0x03A8 (size: 0x1)
    char padding_14[0x3];                                                             // 0x03A9 (size: 0x3)
    ERendererStencilMask CustomDepthStencilWriteMask;                                 // 0x03AC (size: 0x1)
    char padding_15[0x3];                                                             // 0x03AD (size: 0x3)
    int32 CustomDepthStencilValue;                                                    // 0x03B0 (size: 0x4)
    float LDMaxDrawDistance;                                                          // 0x03B4 (size: 0x4)
    FLightmassPrimitiveSettings LightmassSettings;                                    // 0x03B8 (size: 0x18)
    int32 CollisionMipLevel;                                                          // 0x03D0 (size: 0x4)
    int32 SimpleCollisionMipLevel;                                                    // 0x03D4 (size: 0x4)
    float CollisionThickness;                                                         // 0x03D8 (size: 0x4)
    char padding_16[0x4];                                                             // 0x03DC (size: 0x4)
    FBodyInstance BodyInstance;                                                       // 0x03E0 (size: 0x158)
    uint8 bGenerateOverlapEvents;                                                     // 0x0538 (size: 0x1)
    uint8 bBakeMaterialPositionOffsetIntoCollision;                                   // 0x0538 (size: 0x1)
    char padding_17[0x3];                                                             // 0x0539 (size: 0x3)
    int32 ComponentSizeQuads;                                                         // 0x053C (size: 0x4)
    int32 SubsectionSizeQuads;                                                        // 0x0540 (size: 0x4)
    int32 NumSubsections;                                                             // 0x0544 (size: 0x4)
    uint8 bUsedForNavigation;                                                         // 0x0548 (size: 0x1)
    uint8 bFillCollisionUnderLandscapeForNavmesh;                                     // 0x0548 (size: 0x1)
    char padding_18[0x3];                                                             // 0x0549 (size: 0x3)
    bool bUseDynamicMaterialInstance;                                                 // 0x054C (size: 0x1)
    ENavDataGatheringMode NavigationGeometryGatheringMode;                            // 0x054D (size: 0x1)
    bool bUseLandscapeForCullingInvisibleHLODVertices;                                // 0x054E (size: 0x1)
    bool bHasLayersContent;                                                           // 0x054F (size: 0x1)
    TMap<class UTexture2D*, class ULandscapeWeightmapUsage*> WeightmapUsageMap;       // 0x0550 (size: 0x50)

    void SetLandscapeMaterialVectorParameterValue(FName ParameterName, FLinearColor Value);
    void SetLandscapeMaterialTextureParameterValue(FName ParameterName, class UTexture* Value);
    void SetLandscapeMaterialScalarParameterValue(FName ParameterName, float Value);
    bool LandscapeExportHeightmapToRenderTarget(class UTextureRenderTarget2D* InRenderTarget, bool InExportHeightIntoRGChannel, bool InExportLandscapeProxies);
    void EditorSetLandscapeMaterial(class UMaterialInterface* NewLandscapeMaterial);
    void EditorApplySpline(class USplineComponent* InSplineComponent, float StartWidth, float EndWidth, float StartSideFalloff, float EndSideFalloff, float StartRoll, float EndRoll, int32 NumSubdivisions, bool bRaiseHeights, bool bLowerHeights, class ULandscapeLayerInfoObject* PaintLayer, FName EditLayerName);
    void ChangeUseTessellationComponentScreenSizeFalloff(bool InComponentScreenSizeToUseSubSections);
    void ChangeTessellationComponentScreenSizeFalloff(float InUseTessellationComponentScreenSizeFalloff);
    void ChangeTessellationComponentScreenSize(float InTessellationComponentScreenSize);
    void ChangeLODDistanceFactor(float InLODDistanceFactor);
    void ChangeComponentScreenSizeToUseSubSections(float InComponentScreenSizeToUseSubSections);
}; // Size: 0x5A0

class ALandscapeStreamingProxy : public ALandscapeProxy
{
    TLazyObjectPtr<class ALandscape> LandscapeActor;                                  // 0x05A0 (size: 0x1C)

}; // Size: 0x5C0

class UControlPointMeshComponent : public UStaticMeshComponent
{
    float VirtualTextureMainPassMaxDrawDistance;                                      // 0x04F8 (size: 0x4)

}; // Size: 0x500

class ULandscapeComponent : public UPrimitiveComponent
{
    int32 SectionBaseX;                                                               // 0x0468 (size: 0x4)
    int32 SectionBaseY;                                                               // 0x046C (size: 0x4)
    int32 ComponentSizeQuads;                                                         // 0x0470 (size: 0x4)
    int32 SubsectionSizeQuads;                                                        // 0x0474 (size: 0x4)
    int32 NumSubsections;                                                             // 0x0478 (size: 0x4)
    char padding_0[0x4];                                                              // 0x047C (size: 0x4)
    class UMaterialInterface* OverrideMaterial;                                       // 0x0480 (size: 0x8)
    class UMaterialInterface* OverrideHoleMaterial;                                   // 0x0488 (size: 0x8)
    TArray<FLandscapeComponentMaterialOverride> OverrideMaterials;                    // 0x0490 (size: 0x10)
    TArray<class UMaterialInstanceConstant*> MaterialInstances;                       // 0x04A0 (size: 0x10)
    TArray<class UMaterialInstanceDynamic*> MaterialInstancesDynamic;                 // 0x04B0 (size: 0x10)
    TArray<int8> LODIndexToMaterialIndex;                                             // 0x04C0 (size: 0x10)
    TArray<int8> MaterialIndexToDisabledTessellationMaterial;                         // 0x04D0 (size: 0x10)
    class UTexture2D* XYOffsetmapTexture;                                             // 0x04E0 (size: 0x8)
    char padding_1[0x8];                                                              // 0x04E8 (size: 0x8)
    FVector4 WeightmapScaleBias;                                                      // 0x04F0 (size: 0x10)
    float WeightmapSubsectionOffset;                                                  // 0x0500 (size: 0x4)
    char padding_2[0xC];                                                              // 0x0504 (size: 0xC)
    FVector4 HeightmapScaleBias;                                                      // 0x0510 (size: 0x10)
    FBox CachedLocalBox;                                                              // 0x0520 (size: 0x1C)
    TLazyObjectPtr<class ULandscapeHeightfieldCollisionComponent> CollisionComponent; // 0x053C (size: 0x1C)
    class UTexture2D* HeightmapTexture;                                               // 0x0558 (size: 0x8)
    TArray<FWeightmapLayerAllocationInfo> WeightmapLayerAllocations;                  // 0x0560 (size: 0x10)
    TArray<class UTexture2D*> WeightmapTextures;                                      // 0x0570 (size: 0x10)
    class ULandscapeLODStreamingProxy* LODStreamingProxy;                             // 0x0580 (size: 0x8)
    FGuid MapBuildDataId;                                                             // 0x0588 (size: 0x10)
    TArray<FGuid> IrrelevantLights;                                                   // 0x0598 (size: 0x10)
    int32 CollisionMipLevel;                                                          // 0x05A8 (size: 0x4)
    int32 SimpleCollisionMipLevel;                                                    // 0x05AC (size: 0x4)
    float NegativeZBoundsExtension;                                                   // 0x05B0 (size: 0x4)
    float PositiveZBoundsExtension;                                                   // 0x05B4 (size: 0x4)
    float StaticLightingResolution;                                                   // 0x05B8 (size: 0x4)
    int32 ForcedLOD;                                                                  // 0x05BC (size: 0x4)
    int32 LODBias;                                                                    // 0x05C0 (size: 0x4)
    FGuid StateId;                                                                    // 0x05C4 (size: 0x10)
    FGuid BakedTextureMaterialGuid;                                                   // 0x05D4 (size: 0x10)
    char padding_3[0x4];                                                              // 0x05E4 (size: 0x4)
    class UTexture2D* GIBakedBaseColorTexture;                                        // 0x05E8 (size: 0x8)
    uint8 MobileBlendableLayerMask;                                                   // 0x05F0 (size: 0x1)
    char padding_4[0x7];                                                              // 0x05F1 (size: 0x7)
    class UMaterialInterface* MobileMaterialInterface;                                // 0x05F8 (size: 0x8)
    TArray<class UMaterialInterface*> MobileMaterialInterfaces;                       // 0x0600 (size: 0x10)
    TArray<class UTexture2D*> MobileWeightmapTextures;                                // 0x0610 (size: 0x10)

    class UMaterialInstanceDynamic* GetMaterialInstanceDynamic(int32 InIndex);
    float EditorGetPaintLayerWeightByNameAtLocation(const FVector& InLocation, const FName InPaintLayerName);
    float EditorGetPaintLayerWeightAtLocation(const FVector& InLocation, class ULandscapeLayerInfoObject* PaintLayer);
}; // Size: 0x690

class ULandscapeGizmoRenderComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

class ULandscapeGrassType : public UObject
{
    TArray<FGrassVariety> GrassVarieties;                                             // 0x0028 (size: 0x10)
    uint8 bEnableDensityScaling;                                                      // 0x0038 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0039 (size: 0x7)
    class UStaticMesh* GrassMesh;                                                     // 0x0040 (size: 0x8)
    float GrassDensity;                                                               // 0x0048 (size: 0x4)
    float PlacementJitter;                                                            // 0x004C (size: 0x4)
    int32 StartCullDistance;                                                          // 0x0050 (size: 0x4)
    int32 EndCullDistance;                                                            // 0x0054 (size: 0x4)
    bool RandomRotation;                                                              // 0x0058 (size: 0x1)
    bool AlignToSurface;                                                              // 0x0059 (size: 0x1)

}; // Size: 0x60

class ULandscapeHeightfieldCollisionComponent : public UPrimitiveComponent
{
    TArray<class ULandscapeLayerInfoObject*> ComponentLayerInfos;                     // 0x0468 (size: 0x10)
    int32 SectionBaseX;                                                               // 0x0478 (size: 0x4)
    int32 SectionBaseY;                                                               // 0x047C (size: 0x4)
    int32 CollisionSizeQuads;                                                         // 0x0480 (size: 0x4)
    float CollisionScale;                                                             // 0x0484 (size: 0x4)
    int32 SimpleCollisionSizeQuads;                                                   // 0x0488 (size: 0x4)
    char padding_0[0x4];                                                              // 0x048C (size: 0x4)
    TArray<uint8> CollisionQuadFlags;                                                 // 0x0490 (size: 0x10)
    FGuid HeightfieldGuid;                                                            // 0x04A0 (size: 0x10)
    FBox CachedLocalBox;                                                              // 0x04B0 (size: 0x1C)
    TLazyObjectPtr<class ULandscapeComponent> RenderComponent;                        // 0x04CC (size: 0x1C)
    char padding_1[0x10];                                                             // 0x04E8 (size: 0x10)
    TArray<class UPhysicalMaterial*> CookedPhysicalMaterials;                         // 0x04F8 (size: 0x10)

    class ULandscapeComponent* GetRenderComponent();
}; // Size: 0x550

class ULandscapeInfo : public UObject
{
    TLazyObjectPtr<class ALandscape> LandscapeActor;                                  // 0x0028 (size: 0x1C)
    FGuid LandscapeGuid;                                                              // 0x0044 (size: 0x10)
    int32 ComponentSizeQuads;                                                         // 0x0054 (size: 0x4)
    int32 SubsectionSizeQuads;                                                        // 0x0058 (size: 0x4)
    int32 ComponentNumSubsections;                                                    // 0x005C (size: 0x4)
    FVector DrawScale;                                                                // 0x0060 (size: 0xC)
    char padding_0[0xA4];                                                             // 0x006C (size: 0xA4)
    TArray<class ALandscapeStreamingProxy*> Proxies;                                  // 0x0110 (size: 0x10)

}; // Size: 0x210

class ULandscapeInfoMap : public UObject
{
    char padding_0[0x80];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x80

class ULandscapeLODStreamingProxy : public UStreamableRenderAsset
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class ULandscapeLayerInfoObject : public UObject
{
    FName LayerName;                                                                  // 0x0028 (size: 0x8)
    class UPhysicalMaterial* PhysMaterial;                                            // 0x0030 (size: 0x8)
    float Hardness;                                                                   // 0x0038 (size: 0x4)
    FLinearColor LayerUsageDebugColor;                                                // 0x003C (size: 0x10)

}; // Size: 0x50

class ULandscapeMaterialInstanceConstant : public UMaterialInstanceConstant
{
    TArray<FLandscapeMaterialTextureStreamingInfo> TextureStreamingInfo;              // 0x0320 (size: 0x10)
    uint8 bIsLayerThumbnail;                                                          // 0x0330 (size: 0x1)
    uint8 bDisableTessellation;                                                       // 0x0330 (size: 0x1)
    uint8 bMobile;                                                                    // 0x0330 (size: 0x1)
    uint8 bEditorToolUsage;                                                           // 0x0330 (size: 0x1)

}; // Size: 0x338

class ULandscapeMeshCollisionComponent : public ULandscapeHeightfieldCollisionComponent
{
    FGuid MeshGuid;                                                                   // 0x0548 (size: 0x10)

}; // Size: 0x560

class ULandscapeMeshProxyComponent : public UStaticMeshComponent
{
    FGuid LandscapeGuid;                                                              // 0x04F8 (size: 0x10)
    TArray<FIntPoint> ProxyComponentBases;                                            // 0x0508 (size: 0x10)
    int8 ProxyLOD;                                                                    // 0x0518 (size: 0x1)

}; // Size: 0x520

class ULandscapeSettings : public UDeveloperSettings
{
    int32 MaxNumberOfLayers;                                                          // 0x0038 (size: 0x4)

}; // Size: 0x40

class ULandscapeSplineControlPoint : public UObject
{
    FVector Location;                                                                 // 0x0028 (size: 0xC)
    FRotator Rotation;                                                                // 0x0034 (size: 0xC)
    float Width;                                                                      // 0x0040 (size: 0x4)
    float LayerWidthRatio;                                                            // 0x0044 (size: 0x4)
    float SideFalloff;                                                                // 0x0048 (size: 0x4)
    float LeftSideFalloffFactor;                                                      // 0x004C (size: 0x4)
    float RightSideFalloffFactor;                                                     // 0x0050 (size: 0x4)
    float LeftSideLayerFalloffFactor;                                                 // 0x0054 (size: 0x4)
    float RightSideLayerFalloffFactor;                                                // 0x0058 (size: 0x4)
    float EndFalloff;                                                                 // 0x005C (size: 0x4)
    TArray<FLandscapeSplineConnection> ConnectedSegments;                             // 0x0060 (size: 0x10)
    TArray<FLandscapeSplineInterpPoint> Points;                                       // 0x0070 (size: 0x10)
    FBox Bounds;                                                                      // 0x0080 (size: 0x1C)
    char padding_0[0x4];                                                              // 0x009C (size: 0x4)
    class UControlPointMeshComponent* LocalMeshComponent;                             // 0x00A0 (size: 0x8)

}; // Size: 0xA8

class ULandscapeSplineSegment : public UObject
{
    FLandscapeSplineSegmentConnection Connections;                                    // 0x0028 (size: 0x30)
    FInterpCurveVector SplineInfo;                                                    // 0x0058 (size: 0x18)
    TArray<FLandscapeSplineInterpPoint> Points;                                       // 0x0070 (size: 0x10)
    FBox Bounds;                                                                      // 0x0080 (size: 0x1C)
    char padding_0[0x4];                                                              // 0x009C (size: 0x4)
    TArray<class USplineMeshComponent*> LocalMeshComponents;                          // 0x00A0 (size: 0x10)

}; // Size: 0xB0

class ULandscapeSplinesComponent : public UPrimitiveComponent
{
    TArray<class ULandscapeSplineControlPoint*> ControlPoints;                        // 0x0468 (size: 0x10)
    TArray<class ULandscapeSplineSegment*> Segments;                                  // 0x0478 (size: 0x10)
    TArray<class UMeshComponent*> CookedForeignMeshComponents;                        // 0x0488 (size: 0x10)

    TArray<class USplineMeshComponent*> GetSplineMeshComponents();
}; // Size: 0x4A0

class ULandscapeSubsystem : public UTickableWorldSubsystem
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class ULandscapeWeightmapUsage : public UObject
{
    class ULandscapeComponent* ChannelUsage;                                          // 0x0028 (size: 0x20)
    FGuid LayerGuid;                                                                  // 0x0048 (size: 0x10)

}; // Size: 0x58

class UMaterialExpressionLandscapeGrassOutput : public UMaterialExpressionCustomOutput
{
    TArray<FGrassInput> GrassTypes;                                                   // 0x0040 (size: 0x10)

}; // Size: 0x50

class UMaterialExpressionLandscapeLayerBlend : public UMaterialExpression
{
    TArray<FLayerBlendInput> Layers;                                                  // 0x0040 (size: 0x10)
    FGuid ExpressionGUID;                                                             // 0x0050 (size: 0x10)

}; // Size: 0x60

class UMaterialExpressionLandscapeLayerCoords : public UMaterialExpression
{
    TEnumAsByte<ETerrainCoordMappingType> MappingType;                                // 0x0040 (size: 0x1)
    TEnumAsByte<ELandscapeCustomizedCoordType> CustomUVType;                          // 0x0041 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0042 (size: 0x2)
    float MappingScale;                                                               // 0x0044 (size: 0x4)
    float MappingRotation;                                                            // 0x0048 (size: 0x4)
    float MappingPanU;                                                                // 0x004C (size: 0x4)
    float MappingPanV;                                                                // 0x0050 (size: 0x4)

}; // Size: 0x58

class UMaterialExpressionLandscapeLayerSample : public UMaterialExpression
{
    FName ParameterName;                                                              // 0x0040 (size: 0x8)
    float PreviewWeight;                                                              // 0x0048 (size: 0x4)
    FGuid ExpressionGUID;                                                             // 0x004C (size: 0x10)

}; // Size: 0x60

class UMaterialExpressionLandscapeLayerSwitch : public UMaterialExpression
{
    FExpressionInput LayerUsed;                                                       // 0x0040 (size: 0x14)
    FExpressionInput LayerNotUsed;                                                    // 0x0054 (size: 0x14)
    FName ParameterName;                                                              // 0x0068 (size: 0x8)
    uint8 PreviewUsed;                                                                // 0x0070 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0071 (size: 0x3)
    FGuid ExpressionGUID;                                                             // 0x0074 (size: 0x10)

}; // Size: 0x88

class UMaterialExpressionLandscapeLayerWeight : public UMaterialExpression
{
    FExpressionInput Base;                                                            // 0x0040 (size: 0x14)
    FExpressionInput Layer;                                                           // 0x0054 (size: 0x14)
    FName ParameterName;                                                              // 0x0068 (size: 0x8)
    float PreviewWeight;                                                              // 0x0070 (size: 0x4)
    FVector ConstBase;                                                                // 0x0074 (size: 0xC)
    FGuid ExpressionGUID;                                                             // 0x0080 (size: 0x10)

}; // Size: 0x90

class UMaterialExpressionLandscapePhysicalMaterialOutput : public UMaterialExpressionCustomOutput
{
    TArray<FPhysicalMaterialInput> Inputs;                                            // 0x0040 (size: 0x10)

}; // Size: 0x50

class UMaterialExpressionLandscapeVisibilityMask : public UMaterialExpression
{
    FGuid ExpressionGUID;                                                             // 0x0040 (size: 0x10)

}; // Size: 0x50

#endif
