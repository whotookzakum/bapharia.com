#ifndef UE4SS_SDK_BTUtilitySelector_HPP
#define UE4SS_SDK_BTUtilitySelector_HPP

#include "BTUtilitySelector_enums.hpp"

class UBTComposite_UtilitySelector : public UBTCompositeNode
{
    EUtilitySelectionMode SelectionMode;                                              // 0x0090 (size: 0x1)

}; // Size: 0x98

class UBTDecorator_UtilityBase : public UBTDecorator
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class UBTDecorator_UtilityBiasBase : public UBTDecorator
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class UBTDecorator_UtilityBiasCooldown : public UBTDecorator_UtilityBiasBase
{
    float CooldownTime;                                                               // 0x0068 (size: 0x4)
    float Bias;                                                                       // 0x006C (size: 0x4)
    EUtilityBiasCooldownType Function;                                                // 0x0070 (size: 0x1)

}; // Size: 0x78

class UBTDecorator_UtilityBiasLastSelected : public UBTDecorator_UtilityBiasBase
{
    float Bias;                                                                       // 0x0068 (size: 0x4)

}; // Size: 0x70

class UBTDecorator_UtilityBlackboard : public UBTDecorator_UtilityBlackboardBase
{
    float MinValue;                                                                   // 0x0090 (size: 0x4)
    float MaxValue;                                                                   // 0x0094 (size: 0x4)
    EUtilityEvaluateType Evaluation;                                                  // 0x0098 (size: 0x1)
    uint8 bInverse;                                                                   // 0x0099 (size: 0x1)
    char padding_0[0x2];                                                              // 0x009A (size: 0x2)
    float ScaleX;                                                                     // 0x009C (size: 0x4)
    float ScaleY;                                                                     // 0x00A0 (size: 0x4)
    float offsetY;                                                                    // 0x00A4 (size: 0x4)

}; // Size: 0xA8

class UBTDecorator_UtilityBlackboardBase : public UBTDecorator_UtilityBase
{
    FBlackboardKeySelector BlackboardKey;                                             // 0x0068 (size: 0x28)

}; // Size: 0x90

class UBTDecorator_UtilityConstant : public UBTDecorator_UtilityBase
{
    float UtilityValue;                                                               // 0x0068 (size: 0x4)

}; // Size: 0x70

class UBTDecorator_UtilityCurve : public UBTDecorator_UtilityBlackboardBase
{
    class UCurveFloat* Curve;                                                         // 0x0090 (size: 0x8)

}; // Size: 0x98

class UBTDecorator_UtilityOperationAverage : public UBTDecorator_UtilityOperationBase
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class UBTDecorator_UtilityOperationBase : public UBTDecorator
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class UBTDecorator_UtilityOperationMax : public UBTDecorator_UtilityOperationBase
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

class UBTDecorator_UtilityOperationMin : public UBTDecorator_UtilityOperationBase
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

#endif
