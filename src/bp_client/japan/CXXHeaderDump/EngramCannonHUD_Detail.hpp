#ifndef UE4SS_SDK_EngramCannonHUD_Detail_HPP
#define UE4SS_SDK_EngramCannonHUD_Detail_HPP

class UEngramCannonHUD_Detail_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* TargetMark;                                                         // 0x0280 (size: 0x8)
    class ABP_ScriptPostProcessActor_C* ScriptPostprocessActor;                       // 0x0288 (size: 0x8)
    class UMaterialInstanceDynamic* DamageEffectPostprocessEffect;                    // 0x0290 (size: 0x8)
    float NoiseAnimationTime;                                                         // 0x0298 (size: 0x4)

    void Finalize Damage Effect();
    void PlayDamageEffect();
    void PlayNoiseAnim();
    void Destruct();
    void FinishDamageEffect();
    void ExecuteUbergraph_EngramCannonHUD_Detail(int32 EntryPoint);
}; // Size: 0x29C

#endif
