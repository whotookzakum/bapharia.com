#ifndef UE4SS_SDK_AITask_NpcWait_HPP
#define UE4SS_SDK_AITask_NpcWait_HPP

class UAITask_NpcWait_C : public USBAITask_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x00A8 (size: 0x8)

    void TaskFinish(class AAIController* Controller, class APawn* ControlledPawn, bool bInOwnerFinished);
    void RequestAnimation(bool Result);
    void TaskStart(class AAIController* Controller, class APawn* ControlledPawn);
    void ExecuteUbergraph_AITask_NpcWait(int32 EntryPoint);
}; // Size: 0xB0

#endif
