#ifndef UE4SS_SDK_NiagaraShader_HPP
#define UE4SS_SDK_NiagaraShader_HPP

#include "NiagaraShader_enums.hpp"

struct FNiagaraCompileEvent
{
    FNiagaraCompileEventSeverity Severity;                                            // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    FString Message;                                                                  // 0x0008 (size: 0x10)
    FString ShortDescription;                                                         // 0x0018 (size: 0x10)
    bool bDismissable;                                                                // 0x0028 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0029 (size: 0x3)
    FGuid NodeGuid;                                                                   // 0x002C (size: 0x10)
    FGuid PinGuid;                                                                    // 0x003C (size: 0x10)
    char padding_2[0x4];                                                              // 0x004C (size: 0x4)
    TArray<FGuid> StackGuids;                                                         // 0x0050 (size: 0x10)

}; // Size: 0x60

struct FNiagaraDataInterfaceGPUParamInfo
{
    FString DataInterfaceHLSLSymbol;                                                  // 0x0000 (size: 0x10)
    FString DIClassName;                                                              // 0x0010 (size: 0x10)
    TArray<FNiagaraDataInterfaceGeneratedFunction> GeneratedFunctions;                // 0x0020 (size: 0x10)

}; // Size: 0x30

struct FNiagaraDataInterfaceGeneratedFunction
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

struct FSimulationStageMetaData
{
    FName SimulationStageName;                                                        // 0x0000 (size: 0x8)
    FName IterationSource;                                                            // 0x0008 (size: 0x8)
    uint8 bSpawnOnly;                                                                 // 0x0010 (size: 0x1)
    uint8 bWritesParticles;                                                           // 0x0010 (size: 0x1)
    uint8 bPartialParticleUpdate;                                                     // 0x0010 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0011 (size: 0x7)
    TArray<FName> OutputDestinations;                                                 // 0x0018 (size: 0x10)
    int32 MinStage;                                                                   // 0x0028 (size: 0x4)
    int32 MaxStage;                                                                   // 0x002C (size: 0x4)

}; // Size: 0x30

class UNiagaraScriptBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

#endif
