#ifndef UE4SS_SDK_BP_AIControllerNpc_HPP
#define UE4SS_SDK_BP_AIControllerNpc_HPP

class ABP_AIControllerNpc_C : public ASBAIController_Npc
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0350 (size: 0x8)
    TArray<class USBUtilityOption*> UtilityOptions;                                   // 0x0358 (size: 0x10)
    bool IsBindnteraction;                                                            // 0x0368 (size: 0x1)

    void StartTalk(class AActor* TalkTarget);
    void RegisterUtilityOption();
    void OnInteraction(class AActor* InOtherActor, const FRotator& ViewRotation);
    void ReceiveUnPossess(class APawn* UnpossessedPawn);
    void OnOwnerDeactivate(class ASBMobCharacter* InMobCharacter);
    void OnOwnerActivate(class ASBMobCharacter* InMobCharacter);
    void ReceivePossess(class APawn* PossessedPawn);
    void ExecuteUbergraph_BP_AIControllerNpc(int32 EntryPoint);
}; // Size: 0x369

#endif
