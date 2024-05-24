#ifndef UE4SS_SDK_BP_ExtraFoothold_HPP
#define UE4SS_SDK_BP_ExtraFoothold_HPP

class ABP_ExtraFoothold_C : public ASBExtraFootHold
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0228 (size: 0x8)
    class UStaticMeshComponent* StepComp;                                             // 0x0230 (size: 0x8)
    class UStaticMeshComponent* Step;                                                 // 0x0238 (size: 0x8)
    class ABP_PlayerCharacter_C* TmpLocalPlayer;                                      // 0x0240 (size: 0x8)
    float TmpDeltaTime;                                                               // 0x0248 (size: 0x4)
    float GroundTimer;                                                                // 0x024C (size: 0x4)
    float ZeroFallTimer;                                                              // 0x0250 (size: 0x4)
    float HeightRecordTimer;                                                          // 0x0254 (size: 0x4)
    float PlayerHeight;                                                               // 0x0258 (size: 0x4)
    bool Falling;                                                                     // 0x025C (size: 0x1)
    char padding_0[0x3];                                                              // 0x025D (size: 0x3)
    TArray<FVector2D> PlayerHeightHist;                                               // 0x0260 (size: 0x10)
    bool DebugDraw;                                                                   // 0x0270 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0271 (size: 0x3)
    int32 BadFallCheckCount;                                                          // 0x0274 (size: 0x4)
    float BadFallCheckTime;                                                           // 0x0278 (size: 0x4)
    float BadFallThreshold;                                                           // 0x027C (size: 0x4)
    float ZeroFallCheckTime;                                                          // 0x0280 (size: 0x4)
    bool DebugFlyMode;                                                                // 0x0284 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0285 (size: 0x3)
    float FallAttackInterval;                                                         // 0x0288 (size: 0x4)
    bool dbgF;                                                                        // 0x028C (size: 0x1)
    char padding_3[0x3];                                                              // 0x028D (size: 0x3)
    float HeightScale;                                                                // 0x0290 (size: 0x4)

    void BadFallingSurvey(bool& SetStep);
    void GetLocalPlayer(class ABP_PlayerCharacter_C*& LocalPlayerCharacter);
    void HideStep();
    void SetStep();
    void CheckWarning();
    void ReceiveTick(float DeltaSeconds);
    void DebugFlyinStatusChange();
    void ReceiveBeginPlay();
    void ExecuteUbergraph_BP_ExtraFoothold(int32 EntryPoint);
}; // Size: 0x294

#endif
