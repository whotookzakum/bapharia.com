#ifndef UE4SS_SDK_NiagaraUIRenderer_HPP
#define UE4SS_SDK_NiagaraUIRenderer_HPP

class ANiagaraUIActor : public AActor
{
    char padding_0[0x228];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x228

class UNiagaraSystemWidget : public UWidget
{
    class UNiagaraSystem* NiagaraSystemReference;                                     // 0x0120 (size: 0x8)
    TMap<class UMaterialInterface*, class UMaterialInterface*> MaterialRemapList;     // 0x0128 (size: 0x50)
    bool AutoActivate;                                                                // 0x0178 (size: 0x1)
    bool TickWhenPaused;                                                              // 0x0179 (size: 0x1)
    bool FakeDepthScale;                                                              // 0x017A (size: 0x1)
    char padding_0[0x1];                                                              // 0x017B (size: 0x1)
    float FakeDepthScaleDistance;                                                     // 0x017C (size: 0x4)
    bool ShowDebugSystemInWorld;                                                      // 0x0180 (size: 0x1)
    char padding_1[0x17];                                                             // 0x0181 (size: 0x17)
    class ANiagaraUIActor* NiagaraActor;                                              // 0x0198 (size: 0x8)
    class UNiagaraUIComponent* NiagaraComponent;                                      // 0x01A0 (size: 0x8)

    class UNiagaraUIComponent* GetNiagaraComponent();
    void DeactivateSystem();
    void ActivateSystem(bool Reset);
}; // Size: 0x1A8

class UNiagaraUIComponent : public UNiagaraComponent
{
    char padding_0[0x640];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x640

#endif
