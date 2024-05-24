#ifndef UE4SS_SDK_BP_NpcCharacter_HPP
#define UE4SS_SDK_BP_NpcCharacter_HPP

class ABP_NpcCharacter_C : public ASBNpcCharacter
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0910 (size: 0x8)
    class USBStateInitializerComponent* SBStateInitializer;                           // 0x0918 (size: 0x8)
    class USBFootprintComponent* SBFootprint;                                         // 0x0920 (size: 0x8)
    class UBP_BalloonComponent_C* BP_BalloonComponent;                                // 0x0928 (size: 0x8)
    class UASAnimationSet* AnimSet;                                                   // 0x0930 (size: 0x8)
    float Warp_Threshold;                                                             // 0x0938 (size: 0x4)
    FLinearColor WarpColor;                                                           // 0x093C (size: 0x10)
    float EyeHighlightEmissive;                                                       // 0x094C (size: 0x4)
    float EnemyDeath;                                                                 // 0x0950 (size: 0x4)
    FName NPC_Stance;                                                                 // 0x0954 (size: 0x8)
    FName Before_Stance;                                                              // 0x095C (size: 0x8)
    char padding_0[0x4];                                                              // 0x0964 (size: 0x4)
    TArray<FName> Enable_InteractionTags;                                             // 0x0968 (size: 0x10)

    bool IsInteractionDisable(const class AActor* InOtherActor);
    void ReceiveTick(float DeltaSeconds);
    void NotifyDeactivated();
    void ReceivePostSpawnBySpawner();
    void OnInteraction(class AActor* InOtherActor, FRotator ViewRotation);
    void ExecuteUbergraph_BP_NpcCharacter(int32 EntryPoint);
}; // Size: 0x978

#endif
