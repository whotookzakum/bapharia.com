#ifndef UE4SS_SDK_BP_ExtraNpcCharacter_HPP
#define UE4SS_SDK_BP_ExtraNpcCharacter_HPP

class ABP_ExtraNpcCharacter_C : public ASBExtraNpcCharacter
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0920 (size: 0x8)
    class USBFootprintComponent* SBFootprint;                                         // 0x0928 (size: 0x8)
    TArray<FName> InteractEvents;                                                     // 0x0930 (size: 0x10)
    TArray<FName> SelectEvents;                                                       // 0x0940 (size: 0x10)
    float Warp_Threshold;                                                             // 0x0950 (size: 0x4)
    float EyeEmissive;                                                                // 0x0954 (size: 0x4)
    FLinearColor WarpEmissiveColor;                                                   // 0x0958 (size: 0x10)
    TMap<class FName, class FString> ScriptParamMap;                                  // 0x0968 (size: 0x50)
    FName NPC_Stance;                                                                 // 0x09B8 (size: 0x8)
    FName Before_Stance;                                                              // 0x09C0 (size: 0x8)
    TArray<FName> Enable_InteractionTags;                                             // 0x09C8 (size: 0x10)

    bool IsInteractionDisable(const class AActor* InOtherActor);
    bool CanBeTargetedNow();
    FVector GetTargetLocation();
    bool IsValidTargetFor(class AActor* TargetingActor);
    void RegisterWithManager();
    void UnregisterFromManager();
    void OnInteraction(class AActor* InOtherActor, FRotator ViewRotation);
    void NotifyDeactivated();
    void ReceivePostSpawnBySpawner();
    void ReceiveTick(float DeltaSeconds);
    void ExecuteUbergraph_BP_ExtraNpcCharacter(int32 EntryPoint);
}; // Size: 0x9D8

#endif
