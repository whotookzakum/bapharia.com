#ifndef UE4SS_SDK_AITask_NpcTalk_HPP
#define UE4SS_SDK_AITask_NpcTalk_HPP

class UAITask_NpcTalk_C : public USBAITask_BlueprintBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x00A8 (size: 0x8)
    int32 ScriptHandle;                                                               // 0x00B0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x00B4 (size: 0x4)
    class AAIController* AIController;                                                // 0x00B8 (size: 0x8)

    void ResetPlayerInteractionActionDeltaTime();
    void IsNpcIsQuestReceptionist(FName InProfileDatId, bool& Flag);
    void CheckMobCharacterQuestPrecondition(class ASBMobCharacter* InMobCharacter, bool& Flag);
    void SetNeedTurn();
    void OnEndScript(class ASBScriptActor* InScriptActor, int32 InScriptHandle);
    void TaskFinish(class AAIController* Controller, class APawn* ControlledPawn, bool bInOwnerFinished);
    void TaskStart(class AAIController* Controller, class APawn* ControlledPawn);
    void ExecuteUbergraph_AITask_NpcTalk(int32 EntryPoint);
}; // Size: 0xC0

#endif
