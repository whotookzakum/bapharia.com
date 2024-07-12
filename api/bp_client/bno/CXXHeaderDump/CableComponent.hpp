#ifndef UE4SS_SDK_CableComponent_HPP
#define UE4SS_SDK_CableComponent_HPP

class ACableActor : public AActor
{
    class UCableComponent* CableComponent;                                            // 0x0228 (size: 0x8)

}; // Size: 0x230

class UCableComponent : public UMeshComponent
{
    bool bAttachStart;                                                                // 0x0490 (size: 0x1)
    bool bAttachEnd;                                                                  // 0x0491 (size: 0x1)
    char padding_0[0x6];                                                              // 0x0492 (size: 0x6)
    FComponentReference AttachEndTo;                                                  // 0x0498 (size: 0x28)
    FName AttachEndToSocketName;                                                      // 0x04C0 (size: 0x8)
    FVector EndLocation;                                                              // 0x04C8 (size: 0xC)
    float CableLength;                                                                // 0x04D4 (size: 0x4)
    int32 NumSegments;                                                                // 0x04D8 (size: 0x4)
    float SubstepTime;                                                                // 0x04DC (size: 0x4)
    int32 SolverIterations;                                                           // 0x04E0 (size: 0x4)
    bool bEnableStiffness;                                                            // 0x04E4 (size: 0x1)
    bool bUseSubstepping;                                                             // 0x04E5 (size: 0x1)
    bool bSkipCableUpdateWhenNotVisible;                                              // 0x04E6 (size: 0x1)
    bool bSkipCableUpdateWhenNotOwnerRecentlyRendered;                                // 0x04E7 (size: 0x1)
    bool bEnableCollision;                                                            // 0x04E8 (size: 0x1)
    char padding_1[0x3];                                                              // 0x04E9 (size: 0x3)
    float CollisionFriction;                                                          // 0x04EC (size: 0x4)
    FVector CableForce;                                                               // 0x04F0 (size: 0xC)
    float CableGravityScale;                                                          // 0x04FC (size: 0x4)
    float CableWidth;                                                                 // 0x0500 (size: 0x4)
    int32 NumSides;                                                                   // 0x0504 (size: 0x4)
    float TileMaterial;                                                               // 0x0508 (size: 0x4)

    void SetAttachEndToComponent(class USceneComponent* Component, FName SocketName);
    void SetAttachEndTo(class AActor* Actor, FName ComponentProperty, FName SocketName);
    void GetCableParticleLocations(TArray<FVector>& Locations);
    class USceneComponent* GetAttachedComponent();
    class AActor* GetAttachedActor();
}; // Size: 0x520

#endif
