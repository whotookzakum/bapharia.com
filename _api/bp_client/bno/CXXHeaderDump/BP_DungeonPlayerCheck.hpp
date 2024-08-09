#ifndef UE4SS_SDK_BP_DungeonPlayerCheck_HPP
#define UE4SS_SDK_BP_DungeonPlayerCheck_HPP

class ABP_DungeonPlayerCheck_C : public AActor
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0228 (size: 0x8)
    class UBoxComponent* Box;                                                         // 0x0230 (size: 0x8)
    class USceneComponent* DefaultSceneRoot;                                          // 0x0238 (size: 0x8)
    class ASBEncounterVolume* Encounter;                                              // 0x0240 (size: 0x8)
    class ABP_dng_InteractionWarp_C* InteractionWarp;                                 // 0x0248 (size: 0x8)

    void StartEnemySpawn();
    void ExecuteUbergraph_BP_DungeonPlayerCheck(int32 EntryPoint);
}; // Size: 0x250

#endif
