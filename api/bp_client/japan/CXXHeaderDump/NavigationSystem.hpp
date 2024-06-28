#ifndef UE4SS_SDK_NavigationSystem_HPP
#define UE4SS_SDK_NavigationSystem_HPP

#include "NavigationSystem_enums.hpp"

struct FNavCollisionBox
{
    FVector Offset;                                                                   // 0x0000 (size: 0xC)
    FVector Extent;                                                                   // 0x000C (size: 0xC)

}; // Size: 0x18

struct FNavCollisionCylinder
{
    FVector Offset;                                                                   // 0x0000 (size: 0xC)
    float Radius;                                                                     // 0x000C (size: 0x4)
    float Height;                                                                     // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FNavGraphEdge
{
    char padding_0[0x18];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x18

struct FNavGraphNode
{
    class UObject* Owner;                                                             // 0x0000 (size: 0x8)

}; // Size: 0x18

struct FNavLinkCustomInstanceData : public FActorComponentInstanceData
{
    uint32 NavLinkUserId;                                                             // 0x0068 (size: 0x4)

}; // Size: 0x70

struct FNavigationFilterArea
{
    TSubclassOf<class UNavArea> AreaClass;                                            // 0x0000 (size: 0x8)
    float TravelCostOverride;                                                         // 0x0008 (size: 0x4)
    float EnteringCostOverride;                                                       // 0x000C (size: 0x4)
    uint8 bIsExcluded;                                                                // 0x0010 (size: 0x1)
    uint8 bOverrideTravelCost;                                                        // 0x0010 (size: 0x1)
    uint8 bOverrideEnteringCost;                                                      // 0x0010 (size: 0x1)

}; // Size: 0x18

struct FNavigationFilterFlags
{
    uint8 bNavFlag0;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag1;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag2;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag3;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag4;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag5;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag6;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag7;                                                                  // 0x0000 (size: 0x1)
    uint8 bNavFlag8;                                                                  // 0x0001 (size: 0x1)
    uint8 bNavFlag9;                                                                  // 0x0001 (size: 0x1)
    uint8 bNavFlag10;                                                                 // 0x0001 (size: 0x1)
    uint8 bNavFlag11;                                                                 // 0x0001 (size: 0x1)
    uint8 bNavFlag12;                                                                 // 0x0001 (size: 0x1)
    uint8 bNavFlag13;                                                                 // 0x0001 (size: 0x1)
    uint8 bNavFlag14;                                                                 // 0x0001 (size: 0x1)
    uint8 bNavFlag15;                                                                 // 0x0001 (size: 0x1)

}; // Size: 0x4

struct FRecastNavMeshGenerationProperties
{
    int32 TilePoolSize;                                                               // 0x0000 (size: 0x4)
    float TileSizeUU;                                                                 // 0x0004 (size: 0x4)
    float CellSize;                                                                   // 0x0008 (size: 0x4)
    float CellHeight;                                                                 // 0x000C (size: 0x4)
    float AgentRadius;                                                                // 0x0010 (size: 0x4)
    float AgentHeight;                                                                // 0x0014 (size: 0x4)
    float AgentMaxSlope;                                                              // 0x0018 (size: 0x4)
    float AgentMaxStepHeight;                                                         // 0x001C (size: 0x4)
    float MinRegionArea;                                                              // 0x0020 (size: 0x4)
    float MergeRegionSize;                                                            // 0x0024 (size: 0x4)
    float MaxSimplificationError;                                                     // 0x0028 (size: 0x4)
    int32 TileNumberHardLimit;                                                        // 0x002C (size: 0x4)
    TEnumAsByte<ERecastPartitioning::Type> RegionPartitioning;                        // 0x0030 (size: 0x1)
    TEnumAsByte<ERecastPartitioning::Type> LayerPartitioning;                         // 0x0031 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0032 (size: 0x2)
    int32 RegionChunkSplits;                                                          // 0x0034 (size: 0x4)
    int32 LayerChunkSplits;                                                           // 0x0038 (size: 0x4)
    uint8 bSortNavigationAreasByCost;                                                 // 0x003C (size: 0x1)
    uint8 bPerformVoxelFiltering;                                                     // 0x003C (size: 0x1)
    uint8 bMarkLowHeightAreas;                                                        // 0x003C (size: 0x1)
    uint8 bUseExtraTopCellWhenMarkingAreas;                                           // 0x003C (size: 0x1)
    uint8 bFilterLowSpanSequences;                                                    // 0x003C (size: 0x1)
    uint8 bFilterLowSpanFromTileCache;                                                // 0x003C (size: 0x1)
    uint8 bFixedTilePoolSize;                                                         // 0x003C (size: 0x1)

}; // Size: 0x40

struct FSupportedAreaData
{
    FString AreaClassName;                                                            // 0x0000 (size: 0x10)
    int32 AreaId;                                                                     // 0x0010 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0014 (size: 0x4)
    UClass* AreaClass;                                                                // 0x0018 (size: 0x8)

}; // Size: 0x20

class AAbstractNavData : public ANavigationData
{
    char padding_0[0x430];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x430

class ANavMeshBoundsVolume : public AVolume
{
    FNavAgentSelector SupportedAgents;                                                // 0x0260 (size: 0x4)

}; // Size: 0x268

class ANavModifierVolume : public AVolume
{
    TSubclassOf<class UNavArea> AreaClass;                                            // 0x0268 (size: 0x8)
    bool bMaskFillCollisionUnderneathForNavmesh;                                      // 0x0270 (size: 0x1)

    void SetAreaClass(TSubclassOf<class UNavArea> NewAreaClass);
}; // Size: 0x278

class ANavSystemConfigOverride : public AActor
{
    class UNavigationSystemConfig* NavigationSystemConfig;                            // 0x0228 (size: 0x8)
    ENavSystemOverridePolicy OverridePolicy;                                          // 0x0230 (size: 0x1)
    uint8 bLoadOnClient;                                                              // 0x0231 (size: 0x1)

}; // Size: 0x238

class ANavigationData : public AActor
{
    class UPrimitiveComponent* RenderingComp;                                         // 0x0230 (size: 0x8)
    FNavDataConfig NavDataConfig;                                                     // 0x0238 (size: 0x78)
    uint8 bEnableDrawing;                                                             // 0x02B0 (size: 0x1)
    uint8 bForceRebuildOnLoad;                                                        // 0x02B0 (size: 0x1)
    uint8 bAutoDestroyWhenNoNavigation;                                               // 0x02B0 (size: 0x1)
    uint8 bCanBeMainNavData;                                                          // 0x02B0 (size: 0x1)
    uint8 bCanSpawnOnRebuild;                                                         // 0x02B0 (size: 0x1)
    uint8 bRebuildAtRuntime;                                                          // 0x02B0 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02B1 (size: 0x3)
    ERuntimeGenerationType RuntimeGeneration;                                         // 0x02B4 (size: 0x1)
    char padding_1[0x3];                                                              // 0x02B5 (size: 0x3)
    float ObservedPathsTickInterval;                                                  // 0x02B8 (size: 0x4)
    uint32 DataVersion;                                                               // 0x02BC (size: 0x4)
    char padding_2[0x108];                                                            // 0x02C0 (size: 0x108)
    TArray<FSupportedAreaData> SupportedAreas;                                        // 0x03C8 (size: 0x10)

}; // Size: 0x430

class ANavigationGraph : public ANavigationData
{
    char padding_0[0x430];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x430

class ANavigationGraphNode : public AActor
{
    char padding_0[0x228];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x228

class ANavigationTestingActor : public AActor
{
    class UCapsuleComponent* CapsuleComponent;                                        // 0x0238 (size: 0x8)
    class UNavigationInvokerComponent* InvokerComponent;                              // 0x0240 (size: 0x8)
    uint8 bActAsNavigationInvoker;                                                    // 0x0248 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0249 (size: 0x7)
    FNavAgentProperties NavAgentProps;                                                // 0x0250 (size: 0x30)
    FVector QueryingExtent;                                                           // 0x0280 (size: 0xC)
    char padding_1[0x4];                                                              // 0x028C (size: 0x4)
    class ANavigationData* MyNavData;                                                 // 0x0290 (size: 0x8)
    FVector ProjectedLocation;                                                        // 0x0298 (size: 0xC)
    uint8 bProjectedLocationValid;                                                    // 0x02A4 (size: 0x1)
    uint8 bSearchStart;                                                               // 0x02A4 (size: 0x1)
    char padding_2[0x3];                                                              // 0x02A5 (size: 0x3)
    float CostLimitFactor;                                                            // 0x02A8 (size: 0x4)
    float MinimumCostLimit;                                                           // 0x02AC (size: 0x4)
    uint8 bBacktracking;                                                              // 0x02B0 (size: 0x1)
    uint8 bUseHierarchicalPathfinding;                                                // 0x02B0 (size: 0x1)
    uint8 bGatherDetailedInfo;                                                        // 0x02B0 (size: 0x1)
    uint8 bDrawDistanceToWall;                                                        // 0x02B0 (size: 0x1)
    uint8 bShowNodePool;                                                              // 0x02B0 (size: 0x1)
    uint8 bShowBestPath;                                                              // 0x02B0 (size: 0x1)
    uint8 bShowDiffWithPreviousStep;                                                  // 0x02B0 (size: 0x1)
    uint8 bShouldBeVisibleInGame;                                                     // 0x02B0 (size: 0x1)
    char padding_3[0x3];                                                              // 0x02B1 (size: 0x3)
    TEnumAsByte<ENavCostDisplay::Type> CostDisplayMode;                               // 0x02B4 (size: 0x1)
    char padding_4[0x3];                                                              // 0x02B5 (size: 0x3)
    FVector2D TextCanvasOffset;                                                       // 0x02B8 (size: 0x8)
    uint8 bPathExist;                                                                 // 0x02C0 (size: 0x1)
    uint8 bPathIsPartial;                                                             // 0x02C0 (size: 0x1)
    uint8 bPathSearchOutOfNodes;                                                      // 0x02C0 (size: 0x1)
    char padding_5[0x3];                                                              // 0x02C1 (size: 0x3)
    float PathfindingTime;                                                            // 0x02C4 (size: 0x4)
    float PathCost;                                                                   // 0x02C8 (size: 0x4)
    int32 PathfindingSteps;                                                           // 0x02CC (size: 0x4)
    class ANavigationTestingActor* OtherActor;                                        // 0x02D0 (size: 0x8)
    TSubclassOf<class UNavigationQueryFilter> FilterClass;                            // 0x02D8 (size: 0x8)
    int32 ShowStepIndex;                                                              // 0x02E0 (size: 0x4)
    float OffsetFromCornersDistance;                                                  // 0x02E4 (size: 0x4)

}; // Size: 0x318

class ARecastNavMesh : public ANavigationData
{
    uint8 bDrawTriangleEdges;                                                         // 0x0430 (size: 0x1)
    uint8 bDrawPolyEdges;                                                             // 0x0430 (size: 0x1)
    uint8 bDrawFilledPolys;                                                           // 0x0430 (size: 0x1)
    uint8 bDrawNavMeshEdges;                                                          // 0x0430 (size: 0x1)
    uint8 bDrawTileBounds;                                                            // 0x0430 (size: 0x1)
    uint8 bDrawPathCollidingGeometry;                                                 // 0x0430 (size: 0x1)
    uint8 bDrawTileLabels;                                                            // 0x0430 (size: 0x1)
    uint8 bDrawPolygonLabels;                                                         // 0x0430 (size: 0x1)
    uint8 bDrawDefaultPolygonCost;                                                    // 0x0431 (size: 0x1)
    uint8 bDrawPolygonFlags;                                                          // 0x0431 (size: 0x1)
    uint8 bDrawLabelsOnPathNodes;                                                     // 0x0431 (size: 0x1)
    uint8 bDrawNavLinks;                                                              // 0x0431 (size: 0x1)
    uint8 bDrawFailedNavLinks;                                                        // 0x0431 (size: 0x1)
    uint8 bDrawClusters;                                                              // 0x0431 (size: 0x1)
    uint8 bDrawOctree;                                                                // 0x0431 (size: 0x1)
    uint8 bDrawOctreeDetails;                                                         // 0x0431 (size: 0x1)
    uint8 bDrawMarkedForbiddenPolys;                                                  // 0x0432 (size: 0x1)
    uint8 bDistinctlyDrawTilesBeingBuilt;                                             // 0x0432 (size: 0x1)
    char padding_0[0x1];                                                              // 0x0433 (size: 0x1)
    float DrawOffset;                                                                 // 0x0434 (size: 0x4)
    uint8 bActivatePathCheck;                                                         // 0x0438 (size: 0x1)
    uint8 bFixedTilePoolSize;                                                         // 0x0438 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0439 (size: 0x3)
    int32 TilePoolSize;                                                               // 0x043C (size: 0x4)
    float TileSizeUU;                                                                 // 0x0440 (size: 0x4)
    float CellSize;                                                                   // 0x0444 (size: 0x4)
    float CellHeight;                                                                 // 0x0448 (size: 0x4)
    float AgentRadius;                                                                // 0x044C (size: 0x4)
    float AgentHeight;                                                                // 0x0450 (size: 0x4)
    float AgentMaxSlope;                                                              // 0x0454 (size: 0x4)
    float AgentMaxStepHeight;                                                         // 0x0458 (size: 0x4)
    float MinRegionArea;                                                              // 0x045C (size: 0x4)
    float MergeRegionSize;                                                            // 0x0460 (size: 0x4)
    float MaxSimplificationError;                                                     // 0x0464 (size: 0x4)
    int32 MaxSimultaneousTileGenerationJobsCount;                                     // 0x0468 (size: 0x4)
    int32 TileNumberHardLimit;                                                        // 0x046C (size: 0x4)
    int32 PolyRefTileBits;                                                            // 0x0470 (size: 0x4)
    int32 PolyRefNavPolyBits;                                                         // 0x0474 (size: 0x4)
    int32 PolyRefSaltBits;                                                            // 0x0478 (size: 0x4)
    FVector NavMeshOriginOffset;                                                      // 0x047C (size: 0xC)
    float DefaultDrawDistance;                                                        // 0x0488 (size: 0x4)
    float DefaultMaxSearchNodes;                                                      // 0x048C (size: 0x4)
    float DefaultMaxHierarchicalSearchNodes;                                          // 0x0490 (size: 0x4)
    TEnumAsByte<ERecastPartitioning::Type> RegionPartitioning;                        // 0x0494 (size: 0x1)
    TEnumAsByte<ERecastPartitioning::Type> LayerPartitioning;                         // 0x0495 (size: 0x1)
    char padding_2[0x2];                                                              // 0x0496 (size: 0x2)
    int32 RegionChunkSplits;                                                          // 0x0498 (size: 0x4)
    int32 LayerChunkSplits;                                                           // 0x049C (size: 0x4)
    uint8 bSortNavigationAreasByCost;                                                 // 0x04A0 (size: 0x1)
    uint8 bPerformVoxelFiltering;                                                     // 0x04A0 (size: 0x1)
    uint8 bMarkLowHeightAreas;                                                        // 0x04A0 (size: 0x1)
    uint8 bUseExtraTopCellWhenMarkingAreas;                                           // 0x04A0 (size: 0x1)
    uint8 bFilterLowSpanSequences;                                                    // 0x04A0 (size: 0x1)
    uint8 bFilterLowSpanFromTileCache;                                                // 0x04A0 (size: 0x1)
    uint8 bDoFullyAsyncNavDataGathering;                                              // 0x04A0 (size: 0x1)
    uint8 bUseBetterOffsetsFromCorners;                                               // 0x04A0 (size: 0x1)
    uint8 bStoreEmptyTileLayers;                                                      // 0x04A1 (size: 0x1)
    uint8 bUseVirtualFilters;                                                         // 0x04A1 (size: 0x1)
    uint8 bAllowNavLinkAsPathEnd;                                                     // 0x04A1 (size: 0x1)
    uint8 bUseVoxelCache;                                                             // 0x04A1 (size: 0x1)
    char padding_3[0x2];                                                              // 0x04A2 (size: 0x2)
    float TileSetUpdateInterval;                                                      // 0x04A4 (size: 0x4)
    float HeuristicScale;                                                             // 0x04A8 (size: 0x4)
    float VerticalDeviationFromGroundCompensation;                                    // 0x04AC (size: 0x4)

    bool K2_ReplaceAreaInTileBounds(FBox Bounds, TSubclassOf<class UNavArea> OldArea, TSubclassOf<class UNavArea> NewArea, bool ReplaceLinks);
}; // Size: 0x4E0

class INavLinkCustomInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class INavLinkHostInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class INavNodeInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class INavigationPathGenerator : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UCrowdManagerBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UNavArea : public UNavAreaBase
{
    float DefaultCost;                                                                // 0x0030 (size: 0x4)
    float FixedAreaEnteringCost;                                                      // 0x0034 (size: 0x4)
    FColor DrawColor;                                                                 // 0x0038 (size: 0x4)
    FNavAgentSelector SupportedAgents;                                                // 0x003C (size: 0x4)
    uint8 bSupportsAgent0;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent1;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent2;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent3;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent4;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent5;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent6;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent7;                                                            // 0x0040 (size: 0x1)
    uint8 bSupportsAgent8;                                                            // 0x0041 (size: 0x1)
    uint8 bSupportsAgent9;                                                            // 0x0041 (size: 0x1)
    uint8 bSupportsAgent10;                                                           // 0x0041 (size: 0x1)
    uint8 bSupportsAgent11;                                                           // 0x0041 (size: 0x1)
    uint8 bSupportsAgent12;                                                           // 0x0041 (size: 0x1)
    uint8 bSupportsAgent13;                                                           // 0x0041 (size: 0x1)
    uint8 bSupportsAgent14;                                                           // 0x0041 (size: 0x1)
    uint8 bSupportsAgent15;                                                           // 0x0041 (size: 0x1)

}; // Size: 0x48

class UNavAreaMeta : public UNavArea
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UNavAreaMeta_SwitchByAgent : public UNavAreaMeta
{
    TSubclassOf<class UNavArea> Agent0Area;                                           // 0x0048 (size: 0x8)
    TSubclassOf<class UNavArea> Agent1Area;                                           // 0x0050 (size: 0x8)
    TSubclassOf<class UNavArea> Agent2Area;                                           // 0x0058 (size: 0x8)
    TSubclassOf<class UNavArea> Agent3Area;                                           // 0x0060 (size: 0x8)
    TSubclassOf<class UNavArea> Agent4Area;                                           // 0x0068 (size: 0x8)
    TSubclassOf<class UNavArea> Agent5Area;                                           // 0x0070 (size: 0x8)
    TSubclassOf<class UNavArea> Agent6Area;                                           // 0x0078 (size: 0x8)
    TSubclassOf<class UNavArea> Agent7Area;                                           // 0x0080 (size: 0x8)
    TSubclassOf<class UNavArea> Agent8Area;                                           // 0x0088 (size: 0x8)
    TSubclassOf<class UNavArea> Agent9Area;                                           // 0x0090 (size: 0x8)
    TSubclassOf<class UNavArea> Agent10Area;                                          // 0x0098 (size: 0x8)
    TSubclassOf<class UNavArea> Agent11Area;                                          // 0x00A0 (size: 0x8)
    TSubclassOf<class UNavArea> Agent12Area;                                          // 0x00A8 (size: 0x8)
    TSubclassOf<class UNavArea> Agent13Area;                                          // 0x00B0 (size: 0x8)
    TSubclassOf<class UNavArea> Agent14Area;                                          // 0x00B8 (size: 0x8)
    TSubclassOf<class UNavArea> Agent15Area;                                          // 0x00C0 (size: 0x8)

}; // Size: 0xC8

class UNavArea_Default : public UNavArea
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UNavArea_LowHeight : public UNavArea
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UNavArea_Null : public UNavArea
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UNavArea_Obstacle : public UNavArea
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UNavCollision : public UNavCollisionBase
{
    TArray<FNavCollisionCylinder> CylinderCollision;                                  // 0x0080 (size: 0x10)
    TArray<FNavCollisionBox> BoxCollision;                                            // 0x0090 (size: 0x10)
    TSubclassOf<class UNavArea> AreaClass;                                            // 0x00A0 (size: 0x8)
    uint8 bGatherConvexGeometry;                                                      // 0x00A8 (size: 0x1)
    uint8 bCreateOnClient;                                                            // 0x00A8 (size: 0x1)

}; // Size: 0xD8

class UNavLinkComponent : public UPrimitiveComponent
{
    TArray<FNavigationLink> Links;                                                    // 0x0470 (size: 0x10)

}; // Size: 0x480

class UNavLinkCustomComponent : public UNavRelevantComponent
{
    uint32 NavLinkUserId;                                                             // 0x00F0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x00F4 (size: 0x4)
    TSubclassOf<class UNavArea> EnabledAreaClass;                                     // 0x00F8 (size: 0x8)
    TSubclassOf<class UNavArea> DisabledAreaClass;                                    // 0x0100 (size: 0x8)
    FNavAgentSelector SupportedAgents;                                                // 0x0108 (size: 0x4)
    FVector LinkRelativeStart;                                                        // 0x010C (size: 0xC)
    FVector LinkRelativeEnd;                                                          // 0x0118 (size: 0xC)
    TEnumAsByte<ENavLinkDirection::Type> LinkDirection;                               // 0x0124 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0125 (size: 0x3)
    uint8 bLinkEnabled;                                                               // 0x0128 (size: 0x1)
    uint8 bNotifyWhenEnabled;                                                         // 0x0128 (size: 0x1)
    uint8 bNotifyWhenDisabled;                                                        // 0x0128 (size: 0x1)
    uint8 bCreateBoxObstacle;                                                         // 0x0128 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0129 (size: 0x3)
    FVector ObstacleOffset;                                                           // 0x012C (size: 0xC)
    FVector ObstacleExtent;                                                           // 0x0138 (size: 0xC)
    char padding_3[0x4];                                                              // 0x0144 (size: 0x4)
    TSubclassOf<class UNavArea> ObstacleAreaClass;                                    // 0x0148 (size: 0x8)
    float BroadcastRadius;                                                            // 0x0150 (size: 0x4)
    float BroadcastInterval;                                                          // 0x0154 (size: 0x4)
    TEnumAsByte<ECollisionChannel> BroadcastChannel;                                  // 0x0158 (size: 0x1)

}; // Size: 0x198

class UNavLinkRenderingComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

class UNavLinkTrivial : public UNavLinkDefinition
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class UNavMeshRenderingComponent : public UPrimitiveComponent
{
    char padding_0[0x480];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x480

class UNavModifierComponent : public UNavRelevantComponent
{
    TSubclassOf<class UNavArea> AreaClass;                                            // 0x00E8 (size: 0x8)
    FVector FailsafeExtent;                                                           // 0x00F0 (size: 0xC)
    uint8 bIncludeAgentHeight;                                                        // 0x00FC (size: 0x1)

    void SetAreaClass(TSubclassOf<class UNavArea> NewAreaClass);
}; // Size: 0x150

class UNavRelevantComponent : public UActorComponent
{
    uint8 bAttachToOwnersRoot;                                                        // 0x00DC (size: 0x1)
    char padding_0[0x3];                                                              // 0x00DD (size: 0x3)
    class UObject* CachedNavParent;                                                   // 0x00E0 (size: 0x8)

    void SetNavigationRelevancy(bool bRelevant);
}; // Size: 0xE8

class UNavTestRenderingComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

class UNavigationGraphNodeComponent : public USceneComponent
{
    FNavGraphNode Node;                                                               // 0x0208 (size: 0x18)
    class UNavigationGraphNodeComponent* NextNodeComponent;                           // 0x0220 (size: 0x8)
    class UNavigationGraphNodeComponent* PrevNodeComponent;                           // 0x0228 (size: 0x8)

}; // Size: 0x230

class UNavigationInvokerComponent : public UActorComponent
{
    float TileGenerationRadius;                                                       // 0x00B8 (size: 0x4)
    float TileRemovalRadius;                                                          // 0x00BC (size: 0x4)

}; // Size: 0xC0

class UNavigationPath : public UObject
{
    FNavigationPathPathUpdatedNotifier PathUpdatedNotifier;                           // 0x0028 (size: 0x10)
    void OnNavigationPathUpdated(class UNavigationPath* AffectedPath, TEnumAsByte<ENavPathEvent::Type> PathEvent);
    TArray<FVector> PathPoints;                                                       // 0x0038 (size: 0x10)
    TEnumAsByte<ENavigationOptionFlag::Type> RecalculateOnInvalidation;               // 0x0048 (size: 0x1)

    bool IsValid();
    bool IsStringPulled();
    bool IsPartial();
    float GetPathLength();
    float GetPathCost();
    FString GetDebugString();
    void EnableRecalculationOnInvalidation(TEnumAsByte<ENavigationOptionFlag::Type> DoRecalculation);
    void EnableDebugDrawing(bool bShouldDrawDebugData, FLinearColor PathColor);
}; // Size: 0x88

class UNavigationQueryFilter : public UObject
{
    TArray<FNavigationFilterArea> Areas;                                              // 0x0028 (size: 0x10)
    FNavigationFilterFlags IncludeFlags;                                              // 0x0038 (size: 0x4)
    FNavigationFilterFlags ExcludeFlags;                                              // 0x003C (size: 0x4)

}; // Size: 0x48

class UNavigationSystemModuleConfig : public UNavigationSystemConfig
{
    uint8 bStrictlyStatic;                                                            // 0x0050 (size: 0x1)
    uint8 bCreateOnClient;                                                            // 0x0050 (size: 0x1)
    uint8 bAutoSpawnMissingNavData;                                                   // 0x0050 (size: 0x1)
    uint8 bSpawnNavDataInNavBoundsLevel;                                              // 0x0050 (size: 0x1)

}; // Size: 0x58

class UNavigationSystemV1 : public UNavigationSystemBase
{
    class ANavigationData* MainNavData;                                               // 0x0028 (size: 0x8)
    class ANavigationData* AbstractNavData;                                           // 0x0030 (size: 0x8)
    FName DefaultAgentName;                                                           // 0x0038 (size: 0x8)
    TSoftClassPtr<UCrowdManagerBase> CrowdManagerClass;                               // 0x0040 (size: 0x28)
    uint8 bAutoCreateNavigationData;                                                  // 0x0068 (size: 0x1)
    uint8 bSpawnNavDataInNavBoundsLevel;                                              // 0x0068 (size: 0x1)
    uint8 bAllowClientSideNavigation;                                                 // 0x0068 (size: 0x1)
    uint8 bShouldDiscardSubLevelNavData;                                              // 0x0068 (size: 0x1)
    uint8 bTickWhilePaused;                                                           // 0x0068 (size: 0x1)
    uint8 bSupportRebuilding;                                                         // 0x0068 (size: 0x1)
    uint8 bInitialBuildingLocked;                                                     // 0x0068 (size: 0x1)
    uint8 bSkipAgentHeightCheckWhenPickingNavData;                                    // 0x0069 (size: 0x1)
    uint8 bGenerateNavigationOnlyAroundNavigationInvokers;                            // 0x0069 (size: 0x1)
    char padding_0[0x2];                                                              // 0x006A (size: 0x2)
    float ActiveTilesUpdateInterval;                                                  // 0x006C (size: 0x4)
    ENavDataGatheringModeConfig DataGatheringMode;                                    // 0x0070 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0071 (size: 0x3)
    float DirtyAreaWarningSizeThreshold;                                              // 0x0074 (size: 0x4)
    TArray<FNavDataConfig> SupportedAgents;                                           // 0x0078 (size: 0x10)
    FNavAgentSelector SupportedAgentsMask;                                            // 0x0088 (size: 0x4)
    char padding_2[0x4];                                                              // 0x008C (size: 0x4)
    TArray<class ANavigationData*> NavDataSet;                                        // 0x0090 (size: 0x10)
    TArray<class ANavigationData*> NavDataRegistrationQueue;                          // 0x00A0 (size: 0x10)
    char padding_3[0x10];                                                             // 0x00B0 (size: 0x10)
    FNavigationSystemV1OnNavDataRegisteredEvent OnNavDataRegisteredEvent;             // 0x00C0 (size: 0x10)
    void OnNavDataGenericEvent(class ANavigationData* NavData);
    FNavigationSystemV1OnNavigationGenerationFinishedDelegate OnNavigationGenerationFinishedDelegate; // 0x00D0 (size: 0x10)
    void OnNavDataGenericEvent(class ANavigationData* NavData);
    char padding_4[0xDC];                                                             // 0x00E0 (size: 0xDC)
    FNavigationSystemRunMode OperationMode;                                           // 0x01BC (size: 0x1)
    char padding_5[0x13FF];                                                           // 0x01BD (size: 0x13FF)
    float DirtyAreasUpdateFreq;                                                       // 0x15BC (size: 0x4)

    void UnregisterNavigationInvoker(class AActor* Invoker);
    void SimpleMoveToLocation(class AController* Controller, const FVector& Goal);
    void SimpleMoveToActor(class AController* Controller, const class AActor* Goal);
    void SetMaxSimultaneousTileGenerationJobsCount(int32 MaxNumberOfJobs);
    void SetGeometryGatheringMode(ENavDataGatheringModeConfig NewMode);
    void ResetMaxSimultaneousTileGenerationJobsCount();
    void RegisterNavigationInvoker(class AActor* Invoker, float TileGenerationRadius, float TileRemovalRadius);
    FVector ProjectPointToNavigation(class UObject* WorldContextObject, const FVector& Point, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass, const FVector QueryExtent);
    void OnNavigationBoundsUpdated(class ANavMeshBoundsVolume* NavVolume);
    bool NavigationRaycast(class UObject* WorldContextObject, const FVector& RayStart, const FVector& RayEnd, FVector& HitLocation, TSubclassOf<class UNavigationQueryFilter> FilterClass, class AController* Querier);
    bool K2_ReplaceAreaInOctreeData(const class UObject* Object, TSubclassOf<class UNavArea> OldArea, TSubclassOf<class UNavArea> NewArea);
    bool K2_ProjectPointToNavigation(class UObject* WorldContextObject, const FVector& Point, FVector& ProjectedLocation, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass, const FVector QueryExtent);
    bool K2_GetRandomReachablePointInRadius(class UObject* WorldContextObject, const FVector& Origin, FVector& RandomLocation, float Radius, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    bool K2_GetRandomPointInNavigableRadius(class UObject* WorldContextObject, const FVector& Origin, FVector& RandomLocation, float Radius, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    bool K2_GetRandomLocationInNavigableRadius(class UObject* WorldContextObject, const FVector& Origin, FVector& RandomLocation, float Radius, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    bool IsNavigationBeingBuiltOrLocked(class UObject* WorldContextObject);
    bool IsNavigationBeingBuilt(class UObject* WorldContextObject);
    FVector GetRandomReachablePointInRadius(class UObject* WorldContextObject, const FVector& Origin, float Radius, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    FVector GetRandomPointInNavigableRadius(class UObject* WorldContextObject, const FVector& Origin, float Radius, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    TEnumAsByte<ENavigationQueryResult::Type> GetPathLength(class UObject* WorldContextObject, const FVector& PathStart, const FVector& PathEnd, float& PathLength, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    TEnumAsByte<ENavigationQueryResult::Type> GetPathCost(class UObject* WorldContextObject, const FVector& PathStart, const FVector& PathEnd, float& PathCost, class ANavigationData* NavData, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    class UNavigationSystemV1* GetNavigationSystem(class UObject* WorldContextObject);
    class UNavigationPath* FindPathToLocationSynchronously(class UObject* WorldContextObject, const FVector& PathStart, const FVector& PathEnd, class AActor* PathfindingContext, TSubclassOf<class UNavigationQueryFilter> FilterClass);
    class UNavigationPath* FindPathToActorSynchronously(class UObject* WorldContextObject, const FVector& PathStart, class AActor* GoalActor, float TetherDistance, class AActor* PathfindingContext, TSubclassOf<class UNavigationQueryFilter> FilterClass);
}; // Size: 0x15E0

class URecastFilter_UseDefaultArea : public UNavigationQueryFilter
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class URecastNavMeshDataChunk : public UNavigationDataChunk
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

#endif
