#ifndef UE4SS_SDK_AutoPlay_HPP
#define UE4SS_SDK_AutoPlay_HPP

#include "AutoPlay_enums.hpp"

struct FAutoPlayEventArgs
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class UAsyncActionRunAutoPlayTask : public UBlueprintAsyncActionBase
{
    FAsyncActionRunAutoPlayTaskEnded Ended;                                           // 0x0030 (size: 0x10)
    void OnEnded(EAutoPlayTaskState State);

    class UAsyncActionRunAutoPlayTask* RunAutoPlayTask(class UObject* WorldContextObject, class UAutoPlayTask* Task);
    void OnEnded__DelegateSignature(EAutoPlayTaskState State);
}; // Size: 0x48

class UAutoPlayAgent : public UObject
{
    TArray<class UAutoPlaySensor*> Sensors;                                           // 0x0030 (size: 0x10)
    TArray<class UAutoPlayMap*> Maps;                                                 // 0x0040 (size: 0x10)
    class UAutoPlayTaskSystem* TaskSystem;                                            // 0x0050 (size: 0x8)
    class UAutoPlayInput* Input;                                                      // 0x0058 (size: 0x8)
    class ULocalPlayer* LocalPlayer;                                                  // 0x0060 (size: 0x8)
    class APlayerController* PlayerController;                                        // 0x0068 (size: 0x8)

    class UAutoPlayTaskSystem* GetTaskSystem();
    class APlayerController* GetPlayerController();
    class APawn* GetPawn();
    class UAutoPlayInput* GetInput();
    class UAutoPlaySensor* FindSensorByClass(TSubclassOf<class UAutoPlaySensor> SensorClass);
    class UAutoPlayMap* FindMapByClass(TSubclassOf<class UAutoPlayMap> MapClass);
    class UAutoPlaySensor* AddSensor(TSubclassOf<class UAutoPlaySensor> SensorClass);
}; // Size: 0x70

class UAutoPlayInput : public UObject
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)

    void InputKey(FKey Key, float Value, float Time);
}; // Size: 0x48

class UAutoPlayMacroSystem : public UObject
{
    TMap<class FName, class TSubclassOf<UAutoPlayTask>> RegisteredTaskClass;          // 0x0030 (size: 0x50)
    char padding_0[0x80];                                                             // 0x0080 (size: 0x80)
    class UAutoPlayTask* CurrentTask;                                                 // 0x0100 (size: 0x8)

    bool GetValueAsObject(const FAutoPlayEventArgs& Args, FName Name, class UObject*& OutValue);
    bool GetValueAsFloat(const FAutoPlayEventArgs& Args, FName Name, float& OutValue);
}; // Size: 0x108

class UAutoPlayMap : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UAutoPlaySensor : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UAutoPlayService : public UObject
{
    class UAutoPlayTask* OwnerTask;                                                   // 0x0028 (size: 0x8)
    float TickInterval;                                                               // 0x0030 (size: 0x4)

    class UAutoPlayTask* GetOwnerTask();
}; // Size: 0x38

class UAutoPlaySettings : public UDeveloperSettings
{
    TEnumAsByte<ECollisionChannel> CollisionChannel;                                  // 0x0038 (size: 0x1)

}; // Size: 0x40

class UAutoPlaySubsystem : public UGameInstanceSubsystem
{
    TMap<class ULocalPlayer*, class UAutoPlayAgent*> AgentMap;                        // 0x0030 (size: 0x50)
    class UAutoPlayMacroSystem* MacroSystem;                                          // 0x0080 (size: 0x8)

    void StopMacro();
    void RunTask(const FName EventName);
    void RunMacro(FString Name);
    void RecordMacro(FString Name);
    class UAutoPlayAgent* GetAgent(const class APlayerController* PlayerController);
    class UAutoPlayAgent* EnableAutoPlay(class APlayerController* PlayerController);
    void DisableAutoPlay(class APlayerController* PlayerController);
}; // Size: 0x88

class UAutoPlayTask : public UObject
{
    TArray<class TSubclassOf<UAutoPlayService>> ServiceClasses;                       // 0x0028 (size: 0x10)
    TArray<class UAutoPlayService*> Services;                                         // 0x0038 (size: 0x10)
    class UAutoPlayTaskSystem* TaskSystem;                                            // 0x0048 (size: 0x8)
    class UObject* TaskOwner;                                                         // 0x0050 (size: 0x8)
    char padding_0[0x1C];                                                             // 0x0058 (size: 0x1C)
    FName Resource;                                                                   // 0x0074 (size: 0x8)
    FName EventName;                                                                  // 0x007C (size: 0x8)

    void ReceiveInitByEvent(FName Event, const FAutoPlayEventArgs& Args);
    void NotifyResult(bool bSuccess);
    class UAutoPlayAgent* GetOwnerAgent();
    class UAutoPlayTask* CreateChildTask(TSubclassOf<class UAutoPlayTask> TaskClass);
}; // Size: 0x88

class UAutoPlayTaskSystem : public UObject
{
    TArray<class UAutoPlayTask*> Tasks;                                               // 0x0028 (size: 0x10)
    TArray<class UAutoPlayTask*> PausedTasks;                                         // 0x0038 (size: 0x10)

    class UAutoPlayTask* CreateTask(TSubclassOf<class UAutoPlayTask> TaskClass, class UObject* TaskOwner);
}; // Size: 0x48

class UAutoPlayTask_BlueprintBase : public UAutoPlayTask
{
    char padding_0[0x88];                                                             // 0x0000 (size: 0x0)

    void ReceiveTick(float DeltaTime);
    void ReceiveStop();
    void ReceiveStart();
    void K2_NotifyResult(bool bSuccess);
}; // Size: 0x88

#endif
