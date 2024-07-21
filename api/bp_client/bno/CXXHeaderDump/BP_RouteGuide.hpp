#ifndef UE4SS_SDK_BP_RouteGuide_HPP
#define UE4SS_SDK_BP_RouteGuide_HPP

class ABP_RouteGuide_C : public ASBRouteGuide
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0290 (size: 0x8)
    class UDecalComponent* debugDecal;                                                // 0x0298 (size: 0x8)
    class USphereComponent* Sphere;                                                   // 0x02A0 (size: 0x8)
    FName ForceLevelNameOverride;                                                     // 0x02A8 (size: 0x8)
    FName CurrentLevelNameOverride;                                                   // 0x02B0 (size: 0x8)
    bool AvailableGoal;                                                               // 0x02B8 (size: 0x1)
    bool IsCharacterProf;                                                             // 0x02B9 (size: 0x1)
    bool IsInGoalRange;                                                               // 0x02BA (size: 0x1)
    char padding_0[0x5];                                                              // 0x02BB (size: 0x5)
    class UTexture2D* Texture2D;                                                      // 0x02C0 (size: 0x8)
    float TexelScale;                                                                 // 0x02C8 (size: 0x4)
    int32 OffRouteSearchRange;                                                        // 0x02CC (size: 0x4)
    FVector PlayerLoc;                                                                // 0x02D0 (size: 0xC)
    FVector RealGoalLoc;                                                              // 0x02DC (size: 0xC)
    float RealGoalRange;                                                              // 0x02E8 (size: 0x4)
    FVector NavStartLoc;                                                              // 0x02EC (size: 0xC)
    FVector NavGoalLoc;                                                               // 0x02F8 (size: 0xC)
    FVector TargetLoc;                                                                // 0x0304 (size: 0xC)
    FVector RealWorldOrigin;                                                          // 0x0310 (size: 0xC)
    float RealWorldScale;                                                             // 0x031C (size: 0x4)
    FVector NavWorldOrigin;                                                           // 0x0320 (size: 0xC)
    float NavigationLength;                                                           // 0x032C (size: 0x4)
    float NavigationLengthMount;                                                      // 0x0330 (size: 0x4)
    float NavigationLengthCurrent;                                                    // 0x0334 (size: 0x4)
    float NavigationResetDistance;                                                    // 0x0338 (size: 0x4)
    float MakerMoveTime;                                                              // 0x033C (size: 0x4)
    float WayPointScale;                                                              // 0x0340 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0344 (size: 0x4)
    class UNavigationPath* NavigationPath;                                            // 0x0348 (size: 0x8)
    FVector NavigationPoint;                                                          // 0x0350 (size: 0xC)
    float NavLengthTmp;                                                               // 0x035C (size: 0x4)
    int32 NavPathCount;                                                               // 0x0360 (size: 0x4)
    char padding_2[0x4];                                                              // 0x0364 (size: 0x4)
    TArray<FVector> NavPathPoints;                                                    // 0x0368 (size: 0x10)
    float NavigationLengthWaypoint;                                                   // 0x0378 (size: 0x4)
    float NavPointSearchHeight;                                                       // 0x037C (size: 0x4)
    FVector RealNavigationPoint;                                                      // 0x0380 (size: 0xC)
    FVector RealNavUpdatedPlayerLoc;                                                  // 0x038C (size: 0xC)
    class ANavMeshBoundsVolume* NavMeshVolume;                                        // 0x0398 (size: 0x8)
    class AActor* RealWorldOriginActor;                                               // 0x03A0 (size: 0x8)
    class ABP_RouteGuideShape_C* RouteGuideShapeActor;                                // 0x03A8 (size: 0x8)
    class UMaterialInstanceDynamic* DebugDecalInstance;                               // 0x03B0 (size: 0x8)
    class ABP_NavigationSeed_C* NavigationSeed;                                       // 0x03B8 (size: 0x8)
    class ABP_RouteGuideMarker_C* RouteGuideMarker;                                   // 0x03C0 (size: 0x8)
    TMap<class FName, class FSBRouteGuideLevelLinkSearch> RGLevelLinkPoint;           // 0x03C8 (size: 0x50)
    bool UseLandScapeWall;                                                            // 0x0418 (size: 0x1)
    char padding_3[0x3];                                                              // 0x0419 (size: 0x3)
    int32 LocationSetDelay;                                                           // 0x041C (size: 0x4)
    TArray<class ABP_RouteGuideModifier_C*> RouteGuideModifier;                       // 0x0420 (size: 0x10)
    FBP_RouteGuide_COnSetRouteGuideDestination OnSetRouteGuideDestination;            // 0x0430 (size: 0x10)
    void OnSetRouteGuideDestination();
    FBP_RouteGuide_COnEndRouteGuide OnEndRouteGuide;                                  // 0x0440 (size: 0x10)
    void OnEndRouteGuide();
    float PlayerGroundHeight;                                                         // 0x0450 (size: 0x4)
    char padding_4[0x4];                                                              // 0x0454 (size: 0x4)
    class ASBNpcCharacter* GoalNPC;                                                   // 0x0458 (size: 0x8)
    FBP_RouteGuide_COnUpdateNavigationPoint OnUpdateNavigationPoint;                  // 0x0460 (size: 0x10)
    void OnUpdateNavigationPoint();
    bool OverrideArea;                                                                // 0x0470 (size: 0x1)
    bool OverrideAreaEntrance;                                                        // 0x0471 (size: 0x1)

    void CalcRealGoalPointWithCharaHead(FVector TmpRealGoalLocation, bool& IsCharacter, FVector& RetLocation);
    void CheckInRange(FVector CheckLocation, bool CurrentFlag, float Margin, bool& UpdatedFlag);
    void ChangeNavigationLength(bool GuideStart);
    void InitLevelLinkSub(TArray<FSBRouteGuideDestinationLevelLink>& LinkData, FName Start, TArray<FName>& Inter, FName Tmp, FVector Point, ESBRouteGuideArea Area, int32 Depth);
    void UpdateNavigationMarkerLocation();
    void InitLevelLink();
    void FindLevelLink(FName CurrentLevel, FName DestinationLevel, bool& FInd, FVector& Location, ESBRouteGuideArea& RouteGuideArea);
    bool SetDestination(FName DestinationId, const ESBRouteGuideDestIdType IdType);
    void UpdateRealNavigationPoint(FVector CurrentPlayerLocation);
    void UpdatePlayersAreaInfo(bool& enable, ESBRouteGuideArea& Area, FVector& WaypointLocation);
    void SetStartLocation(FVector StartLoc);
    void GetWaypointLocation(FVector RealLocation, FVector& RelativeLocation, FVector& WorldLocation);
    void GetRealLocation(FVector WaypointLocation, bool OmitHeight, FVector& RealLocation);
    void SetGoalLocation(FVector Location, ESBRouteGuideArea Layer, float Range, bool OverrideArea, bool& Return);
    void GetNearestRoutePt(ESBRouteGuideArea Area, int32 SearchRange, FVector Location, int32& SearchCounter, bool& Result, FVector& Point);
    void UserConstructionScript();
    void ReceiveBeginPlay();
    void ReceiveTick(float DeltaSeconds);
    void UpdateShape();
    void DrawDebugWayPoint();
    void UpdatenavigationPoint();
    void DrawDebugWayStartGoal();
    void CheckNavigationUpdate(FVector CurrentPlayerLoc);
    void Update NavigationSeed();
    void OnChangeAvailability();
    void GuideOverrideAreaStart();
    void GuideOverrideAreaEnd(ESBRouteGuideArea Area, FVector Location);
    void ExecuteUbergraph_BP_RouteGuide(int32 EntryPoint);
    void OnUpdateNavigationPoint__DelegateSignature();
    void OnEndRouteGuide__DelegateSignature();
    void OnSetRouteGuideDestination__DelegateSignature();
}; // Size: 0x472

#endif
