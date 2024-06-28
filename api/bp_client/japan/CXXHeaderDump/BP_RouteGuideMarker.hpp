#ifndef UE4SS_SDK_BP_RouteGuideMarker_HPP
#define UE4SS_SDK_BP_RouteGuideMarker_HPP

class ABP_RouteGuideMarker_C : public ASBRouteGuideMarker
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0228 (size: 0x8)
    class USceneComponent* DefaultSceneRoot;                                          // 0x0230 (size: 0x8)
    class ABP_RouteGuide_C* RouteGuide;                                               // 0x0238 (size: 0x8)
    class UParticleSystemComponent* ParticleSystemComp;                               // 0x0240 (size: 0x8)
    FName Destination;                                                                // 0x0248 (size: 0x8)
    bool bNavMarkerMove;                                                              // 0x0250 (size: 0x1)
    bool bIsOnNavMesh;                                                                // 0x0251 (size: 0x1)
    bool bIsInRange;                                                                  // 0x0252 (size: 0x1)
    char padding_0[0x5];                                                              // 0x0253 (size: 0x5)
    class UNavigationPath* NavigationPath;                                            // 0x0258 (size: 0x8)
    TArray<FVector> PathLoc;                                                          // 0x0260 (size: 0x10)
    FVector BaseLocation;                                                             // 0x0270 (size: 0xC)
    float Duration;                                                                   // 0x027C (size: 0x4)
    float Timer;                                                                      // 0x0280 (size: 0x4)
    float PathDist;                                                                   // 0x0284 (size: 0x4)
    float PathDistAll;                                                                // 0x0288 (size: 0x4)
    FVector HitLocation;                                                              // 0x028C (size: 0xC)
    FVector MarkerNavigationPoint;                                                    // 0x0298 (size: 0xC)
    bool MarkerOverrideFlag;                                                          // 0x02A4 (size: 0x1)
    char padding_1[0x3];                                                              // 0x02A5 (size: 0x3)
    FVector MarkerOverridePoint;                                                      // 0x02A8 (size: 0xC)
    char padding_2[0x4];                                                              // 0x02B4 (size: 0x4)
    FBP_RouteGuideMarker_COnCreateMarker OnCreateMarker;                              // 0x02B8 (size: 0x10)
    void OnCreateMarker();
    FBP_RouteGuideMarker_COnDestroyMarker OnDestroyMarker;                            // 0x02C8 (size: 0x10)
    void OnDestroyMarker();
    float Texel Scale;                                                                // 0x02D8 (size: 0x4)
    ESBRouteGuideArea MarkerCrntArea;                                                 // 0x02DC (size: 0x1)
    ESBRouteGuideArea MarkerTgtArea;                                                  // 0x02DD (size: 0x1)
    char padding_3[0x2];                                                              // 0x02DE (size: 0x2)
    class UParticleSystemComponent* ParticleSystemCompDestroy;                        // 0x02E0 (size: 0x8)

    void UpdateMarkerPathHeight(FVector Location, ESBRouteGuideArea CrntArea, bool& Available, FVector& NewLocation, ESBRouteGuideArea& NewArea);
    void FindMarkerPath(FVector PathStart, FVector PathEnd, class UNavigationPath*& Path);
    bool IsMarkerVisible();
    FVector GetMarkerLocation();
    void ReceiveBeginPlay();
    void ReceiveTick(float DeltaSeconds);
    void UpdateRouteGuideMarker();
    void CreateNewMarker();
    void DestroyMarker();
    void UpdateMarker();
    void NavMarkerMove();
    void NavMarkerMoveStart();
    void MarkerOverride(bool Override, FVector OverridePoint);
    void ExecuteUbergraph_BP_RouteGuideMarker(int32 EntryPoint);
    void OnDestroyMarker__DelegateSignature();
    void OnCreateMarker__DelegateSignature();
}; // Size: 0x2E8

#endif
