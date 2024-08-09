#ifndef UE4SS_SDK_BP_levelSequence_SP_HPP
#define UE4SS_SDK_BP_levelSequence_SP_HPP

class ABP_LevelSequence_SP_C : public ASBLevelSequenceActor
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02F8 (size: 0x8)

    void ReceiveOnPlay();
    void ReceiveOnStop();
    void ExecuteUbergraph_BP_LevelSequence_SP(int32 EntryPoint);
}; // Size: 0x300

#endif
