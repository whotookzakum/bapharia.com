#ifndef UE4SS_SDK_BP_EF_Avaritelia_HPP
#define UE4SS_SDK_BP_EF_Avaritelia_HPP

class UBP_EF_Avaritelia_C : public USceneComponent
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0210 (size: 0x8)
    bool Avaritelia;                                                                  // 0x0218 (size: 0x1)
    bool CoAvaritelia;                                                                // 0x0219 (size: 0x1)
    char padding_0[0x2];                                                              // 0x021A (size: 0x2)
    FName CoAvaCenter;                                                                // 0x021C (size: 0x8)
    FLinearColor CoAvaEyeColor;                                                       // 0x0224 (size: 0x10)
    float CoAvaEyeStrength;                                                           // 0x0234 (size: 0x4)
    TArray<class UParticleSystemComponent*> ParticleComp;                             // 0x0238 (size: 0x10)
    TArray<class UMaterialInstanceDynamic*> Mid;                                      // 0x0248 (size: 0x10)
    class UParticleSystem* WaveAvariteliaEffect;                                      // 0x0258 (size: 0x8)
    float SizeScale;                                                                  // 0x0260 (size: 0x4)
    float RateScale;                                                                  // 0x0264 (size: 0x4)
    char padding_1[0x8];                                                              // 0x0268 (size: 0x8)
    FTransform WaveAvaEffTrans;                                                       // 0x0270 (size: 0x30)
    int32 ParticleCompIndex;                                                          // 0x02A0 (size: 0x4)
    bool IsActivateAvaritiaEffect;                                                    // 0x02A4 (size: 0x1)
    char padding_2[0x3];                                                              // 0x02A5 (size: 0x3)
    class UAkAudioEvent* PlayEvent;                                                   // 0x02A8 (size: 0x8)
    class UAkAudioEvent* StopEvent;                                                   // 0x02B0 (size: 0x8)

    void StopSound();
    void PlaySound();
    void CheckOwnerHidden();
    void DestroyAvariteliaEffect();
    void DeactivateAvariteliaEffect();
    void ActivateAvariteliaEffect();
    void SetAvaritiaEffectTransform();
    void SpawnAravitiaEffect();
    void SetCoAvaritiaParam();
    void CreateCoAvaritiaMID();
    void ReceiveBeginPlay();
    void ReceiveTick(float DeltaSeconds);
    void PartsLoaded(bool Result);
    void ReceiveEndPlay(TEnumAsByte<EEndPlayReason::Type> EndPlayReason);
    void ExecuteUbergraph_BP_EF_Avaritelia(int32 EntryPoint);
}; // Size: 0x2B8

#endif
