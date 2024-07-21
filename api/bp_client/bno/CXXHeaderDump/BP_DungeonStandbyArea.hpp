#ifndef UE4SS_SDK_BP_DungeonStandbyArea_HPP
#define UE4SS_SDK_BP_DungeonStandbyArea_HPP

class ABP_DungeonStandbyArea_C : public ASBDungeonStandbyArea
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0240 (size: 0x8)
    class UDecalComponent* Decal;                                                     // 0x0248 (size: 0x8)
    class UBP_EF_FieldWall_Component_C* BP_EF_FieldWall_Component;                    // 0x0250 (size: 0x8)
    class UBoxComponent* Box;                                                         // 0x0258 (size: 0x8)
    class UCapsuleComponent* Capsule;                                                 // 0x0260 (size: 0x8)
    class USBFieldStatusComponent* SBFieldStatus;                                     // 0x0268 (size: 0x8)
    class USceneComponent* DefaultSceneRoot;                                          // 0x0270 (size: 0x8)
    float StandbyCountDown_TimerRate_2AC3F9C54600A31916328B911DC2E91A;                // 0x0278 (size: 0x4)
    TEnumAsByte<ETimelineDirection::Type> StandbyCountDown__Direction_2AC3F9C54600A31916328B911DC2E91A; // 0x027C (size: 0x1)
    char padding_0[0x3];                                                              // 0x027D (size: 0x3)
    class UTimelineComponent* StandbyCountDown;                                       // 0x0280 (size: 0x8)
    bool bDone;                                                                       // 0x0288 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0289 (size: 0x7)
    TArray<class ABP_PlayerCharacter_C*> StandbyPlayers;                              // 0x0290 (size: 0x10)
    TEnumAsByte<BossAreaShapeType::Type> ShapeType;                                   // 0x02A0 (size: 0x1)
    char padding_2[0x3];                                                              // 0x02A1 (size: 0x3)
    float EffectHeight;                                                               // 0x02A4 (size: 0x4)
    float Margin;                                                                     // 0x02A8 (size: 0x4)
    float StandbyCountDownTime;                                                       // 0x02AC (size: 0x4)
    float StandbyCountdownTimer;                                                      // 0x02B0 (size: 0x4)
    bool bCowntDown;                                                                  // 0x02B4 (size: 0x1)
    char padding_3[0x3];                                                              // 0x02B5 (size: 0x3)
    int32 PlayerNum;                                                                  // 0x02B8 (size: 0x4)
    float WallEraseDelay;                                                             // 0x02BC (size: 0x4)
    TArray<TSoftObjectPtr<ASBDungeonWall>> WallActor;                                 // 0x02C0 (size: 0x10)
    float TeleportDelay;                                                              // 0x02D0 (size: 0x4)
    float TeleportRange;                                                              // 0x02D4 (size: 0x4)
    class ATargetPoint* TeleportTarget;                                               // 0x02D8 (size: 0x8)
    class ABP_DungeonPlayerCheck_C* BP_DungeonPlayerCheck;                            // 0x02E0 (size: 0x8)
    bool bStanbyDemoPlay;                                                             // 0x02E8 (size: 0x1)
    char padding_4[0x3];                                                              // 0x02E9 (size: 0x3)
    float RecycleInterval;                                                            // 0x02EC (size: 0x4)
    bool TeleportWithFade;                                                            // 0x02F0 (size: 0x1)
    bool PlayerTeleported;                                                            // 0x02F1 (size: 0x1)
    char padding_5[0x6];                                                              // 0x02F2 (size: 0x6)
    FString DebugMsg;                                                                 // 0x02F8 (size: 0x10)

    void OnRep_DebugMsg();
    void CleanupStandbyPlayers();
    void SomeoneAlive(TArray<class ASBPlayerCharacter*>& Players, bool& sw, int32& AliveNum);
    void OnRep_StandbyCountdownTimer();
    void StandbyCountDown__FinishedFunc();
    void StandbyCountDown__UpdateFunc();
    void OnDungeonPlayerNumChanged();
    void BndEvt__SBFieldStatus_K2Node_ComponentBoundEvent_0_SBFieldStatusChangeSignature__DelegateSignature(EFieldStatus NewStatus);
    void OnStart();
    void ChangeWall();
    void ReceiveActorEndOverlap(class AActor* OtherActor);
    void ReceiveActorBeginOverlap(class AActor* OtherActor);
    void ReceiveBeginPlay();
    void OnClearConditionScriptEnd();
    void CountDownStart();
    void CountDownAbort();
    void RecycleArea();
    void OnPlayerDead(const class ASBPlayerCharacter* Character, const class AActor* DamageCauser);
    void OnPlayerResurrect(const class ASBPlayerCharacter* Character);
    void TeleportGodMode(bool ModeOn);
    void OnClearConditionScriptEndAll();
    void DemoWaitFadeIn();
    void EnemyBehaviorStop(bool StopSw);
    void OnRep_Available();
    void NoScript TereportEnd();
    void ExecuteUbergraph_BP_DungeonStandbyArea(int32 EntryPoint);
}; // Size: 0x308

#endif
