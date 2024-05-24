#ifndef UE4SS_SDK_BP_GimmickBase_HPP
#define UE4SS_SDK_BP_GimmickBase_HPP

class ABP_GimmickBase_C : public ASBGimmickBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0238 (size: 0x8)
    class USBFieldStatusComponent* SBFieldStatus;                                     // 0x0240 (size: 0x8)
    class USceneComponent* SceneMovePointRig;                                         // 0x0248 (size: 0x8)
    class UStaticMeshComponent* Cone_Front;                                           // 0x0250 (size: 0x8)
    class UStaticMeshComponent* Cylinder;                                             // 0x0258 (size: 0x8)
    class USceneComponent* SceneMovePoint;                                            // 0x0260 (size: 0x8)
    class UStaticMeshComponent* Sphere;                                               // 0x0268 (size: 0x8)
    class USBInteractionTargetComponent* SBInteractionTarget;                         // 0x0270 (size: 0x8)
    class USceneComponent* SceneRoot;                                                 // 0x0278 (size: 0x8)
    class USceneComponent* DefaultSceneRoot;                                          // 0x0280 (size: 0x8)
    bool TurnOnry;                                                                    // 0x0288 (size: 0x1)
    bool TurnFront;                                                                   // 0x0289 (size: 0x1)
    char padding_0[0x2];                                                              // 0x028A (size: 0x2)
    float MoveEndDistance;                                                            // 0x028C (size: 0x4)
    bool Replication;                                                                 // 0x0290 (size: 0x1)
    bool Recycle;                                                                     // 0x0291 (size: 0x1)
    char padding_1[0x2];                                                              // 0x0292 (size: 0x2)
    float CooldownTime;                                                               // 0x0294 (size: 0x4)
    bool Blocker;                                                                     // 0x0298 (size: 0x1)
    bool CheckAlive;                                                                  // 0x0299 (size: 0x1)
    char padding_2[0x6];                                                              // 0x029A (size: 0x6)
    FBP_GimmickBase_CInteraction Interaction;                                         // 0x02A0 (size: 0x10)
    void Interaction(class AActor* OtherActor, FRotator ViewRotation);

    bool IsInteractionDisable(const class AActor* InOtherActor);
    void CustomEvent(class AActor* InOtherActor, FRotator ViewRotation);
    void OnInteractionSw(class AActor* OtherActor, FRotator Rotator);
    void CleanupBlocker(EFieldStatus NewStatus);
    void RecycleSw();
    void EV_InteractionActive(bool Active);
    void ReceiveBeginPlay();
    void OnInteraction(class AActor* InOtherActor, FRotator ViewRotation);
    void ExecuteUbergraph_BP_GimmickBase(int32 EntryPoint);
    void Interaction__DelegateSignature(class AActor* OtherActor, FRotator ViewRotation);
}; // Size: 0x2B0

#endif
