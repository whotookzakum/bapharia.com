#ifndef UE4SS_SDK_ST_CheckNpcStance_HPP
#define UE4SS_SDK_ST_CheckNpcStance_HPP

class UST_CheckNpcStance_C : public UASTransition_BlueprintBase
{
    FName WaitStance;                                                                 // 0x0050 (size: 0x8)
    bool Check_Command;                                                               // 0x0058 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0059 (size: 0x3)
    FName Command;                                                                    // 0x005C (size: 0x8)

    bool ReceiveCanEnter(class UAnimInstance* AnimInstance);
}; // Size: 0x64

#endif
