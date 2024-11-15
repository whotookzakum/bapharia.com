#ifndef UE4SS_SDK_GameplayTasks_HPP
#define UE4SS_SDK_GameplayTasks_HPP

#include "GameplayTasks_enums.hpp"

struct FGameplayResourceSet
{
    char padding_0[0x2];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x2

class IGameplayTaskOwnerInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UGameplayTask : public UObject
{
    FName InstanceName;                                                               // 0x0030 (size: 0x8)
    char padding_0[0x2];                                                              // 0x0038 (size: 0x2)
    ETaskResourceOverlapPolicy ResourceOverlapPolicy;                                 // 0x003A (size: 0x1)
    char padding_1[0x25];                                                             // 0x003B (size: 0x25)
    class UGameplayTask* ChildTask;                                                   // 0x0060 (size: 0x8)

    void ReadyForActivation();
    void GenericGameplayTaskDelegate__DelegateSignature();
    void EndTask();
}; // Size: 0x68

class UGameplayTaskResource : public UObject
{
    int32 ManualResourceID;                                                           // 0x0028 (size: 0x4)
    int8 AutoResourceID;                                                              // 0x002C (size: 0x1)
    char padding_0[0x3];                                                              // 0x002D (size: 0x3)
    uint8 bManuallySetID;                                                             // 0x0030 (size: 0x1)

}; // Size: 0x38

class UGameplayTask_ClaimResource : public UGameplayTask
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)

    class UGameplayTask_ClaimResource* ClaimResources(TScriptInterface<class IGameplayTaskOwnerInterface> InTaskOwner, TArray<class TSubclassOf<UGameplayTaskResource>> ResourceClasses, const uint8 Priority, const FName TaskInstanceName);
    class UGameplayTask_ClaimResource* ClaimResource(TScriptInterface<class IGameplayTaskOwnerInterface> InTaskOwner, TSubclassOf<class UGameplayTaskResource> ResourceClass, const uint8 Priority, const FName TaskInstanceName);
}; // Size: 0x68

class UGameplayTask_SpawnActor : public UGameplayTask
{
    FGameplayTask_SpawnActorSuccess Success;                                          // 0x0068 (size: 0x10)
    void GameplayTaskSpawnActorDelegate(class AActor* SpawnedActor);
    FGameplayTask_SpawnActorDidNotSpawn DidNotSpawn;                                  // 0x0078 (size: 0x10)
    void GameplayTaskSpawnActorDelegate(class AActor* SpawnedActor);
    char padding_0[0x18];                                                             // 0x0088 (size: 0x18)
    TSubclassOf<class AActor> ClassToSpawn;                                           // 0x00A0 (size: 0x8)

    class UGameplayTask_SpawnActor* SpawnActor(TScriptInterface<class IGameplayTaskOwnerInterface> TaskOwner, FVector SpawnLocation, FRotator SpawnRotation, TSubclassOf<class AActor> Class, bool bSpawnOnlyOnAuthority);
    void FinishSpawningActor(class UObject* WorldContextObject, class AActor* SpawnedActor);
    bool BeginSpawningActor(class UObject* WorldContextObject, class AActor*& SpawnedActor);
}; // Size: 0xA8

class UGameplayTask_TimeLimitedExecution : public UGameplayTask
{
    FGameplayTask_TimeLimitedExecutionOnFinished OnFinished;                          // 0x0068 (size: 0x10)
    void TaskFinishDelegate();
    FGameplayTask_TimeLimitedExecutionOnTimeExpired OnTimeExpired;                    // 0x0078 (size: 0x10)
    void TaskFinishDelegate();

}; // Size: 0xA0

class UGameplayTask_WaitDelay : public UGameplayTask
{
    FGameplayTask_WaitDelayOnFinish OnFinish;                                         // 0x0068 (size: 0x10)
    void TaskDelayDelegate();

    class UGameplayTask_WaitDelay* TaskWaitDelay(TScriptInterface<class IGameplayTaskOwnerInterface> TaskOwner, float Time, const uint8 Priority);
    void TaskDelayDelegate__DelegateSignature();
}; // Size: 0x88

class UGameplayTasksComponent : public UActorComponent
{
    uint8 bIsNetDirty;                                                                // 0x00C4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00C5 (size: 0x3)
    TArray<class UGameplayTask*> SimulatedTasks;                                      // 0x00C8 (size: 0x10)
    TArray<class UGameplayTask*> TaskPriorityQueue;                                   // 0x00D8 (size: 0x10)
    char padding_1[0x10];                                                             // 0x00E8 (size: 0x10)
    TArray<class UGameplayTask*> TickingTasks;                                        // 0x00F8 (size: 0x10)
    TArray<class UGameplayTask*> KnownTasks;                                          // 0x0108 (size: 0x10)
    FGameplayTasksComponentOnClaimedResourcesChange OnClaimedResourcesChange;         // 0x0118 (size: 0x10)
    void OnClaimedResourcesChangeSignature(FGameplayResourceSet NewlyClaimed, FGameplayResourceSet FreshlyReleased);

    void OnRep_SimulatedTasks();
    EGameplayTaskRunResult K2_RunGameplayTask(TScriptInterface<class IGameplayTaskOwnerInterface> TaskOwner, class UGameplayTask* Task, uint8 Priority, TArray<class TSubclassOf<UGameplayTaskResource>> AdditionalRequiredResources, TArray<class TSubclassOf<UGameplayTaskResource>> AdditionalClaimedResources);
}; // Size: 0x128

#endif
