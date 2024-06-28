#ifndef UE4SS_SDK_BP_dng_InteractionWarpPlayerComp_HPP
#define UE4SS_SDK_BP_dng_InteractionWarpPlayerComp_HPP

class UBP_dng_InteractionWarpPlayerComp_C : public UActorComponent
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x00B8 (size: 0x8)
    class ABP_PlayerCharacter_C* WarpPlayer;                                          // 0x00C0 (size: 0x8)
    class APlayerState* WarpPlayerState;                                              // 0x00C8 (size: 0x8)
    FVector OutLocation;                                                              // 0x00D0 (size: 0xC)
    float OutYaw;                                                                     // 0x00DC (size: 0x4)
    float DelayTime;                                                                  // 0x00E0 (size: 0x4)
    float FadeTime;                                                                   // 0x00E4 (size: 0x4)
    ESBRouteGuideArea WarpGoalRouteGuideArea;                                         // 0x00E8 (size: 0x1)
    bool Local;                                                                       // 0x00E9 (size: 0x1)
    bool ValidPlayer;                                                                 // 0x00EA (size: 0x1)

    void ReceiveBeginPlay();
    void WarpEffectEvent(TEnumAsByte<E_InteractionWarp_State::Type> WarpState);
    void LocalPlayerWarp();
    void LocalPreWarp();
    void Teleport();
    void LocalPostWarp();
    void ReceiveTick(float DeltaSeconds);
    void OtherPlayerWarp();
    void ExecuteUbergraph_BP_dng_InteractionWarpPlayerComp(int32 EntryPoint);
}; // Size: 0xEB

#endif
