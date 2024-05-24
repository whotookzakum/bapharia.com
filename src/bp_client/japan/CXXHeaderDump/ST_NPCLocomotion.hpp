#ifndef UE4SS_SDK_ST_NPCLocomotion_HPP
#define UE4SS_SDK_ST_NPCLocomotion_HPP

class UST_NPCLocomotion_C : public UASTransition_BlueprintBase
{
    float VelocityLength;                                                             // 0x0050 (size: 0x4)

    bool ReceiveCanEnter(class UAnimInstance* AnimInstance);
}; // Size: 0x54

#endif
