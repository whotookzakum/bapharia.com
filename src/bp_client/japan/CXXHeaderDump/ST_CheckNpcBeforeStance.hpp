#ifndef UE4SS_SDK_ST_CheckNpcBeforeStance_HPP
#define UE4SS_SDK_ST_CheckNpcBeforeStance_HPP

class UST_CheckNpcBeforeStance_C : public UASTransition_BlueprintBase
{
    FName BeforeStance;                                                               // 0x0050 (size: 0x8)

    bool ReceiveCanEnter(class UAnimInstance* AnimInstance);
}; // Size: 0x58

#endif
