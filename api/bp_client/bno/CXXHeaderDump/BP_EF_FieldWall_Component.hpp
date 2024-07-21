#ifndef UE4SS_SDK_BP_EF_FieldWall_Component_HPP
#define UE4SS_SDK_BP_EF_FieldWall_Component_HPP

class UBP_EF_FieldWall_Component_C : public USceneComponent
{
    class UParticleSystem* WallEffect;                                                // 0x0210 (size: 0x8)
    class UParticleSystem* VanishEffect;                                              // 0x0218 (size: 0x8)
    FLinearColor Color;                                                               // 0x0220 (size: 0x10)
    TArray<class UParticleSystemComponent*> ParticleArray;                            // 0x0230 (size: 0x10)
    TArray<FVector> Size;                                                             // 0x0240 (size: 0x10)
    TArray<float> SpawnCount;                                                         // 0x0250 (size: 0x10)
    TArray<float> Xoffset;                                                            // 0x0260 (size: 0x10)
    TArray<float> ParticleRange;                                                      // 0x0270 (size: 0x10)
    float Around;                                                                     // 0x0280 (size: 0x4)
    float AroundDivide;                                                               // 0x0284 (size: 0x4)
    float LineTickness;                                                               // 0x0288 (size: 0x4)
    char padding_0[0x4];                                                              // 0x028C (size: 0x4)
    class UMaterial* DecalMaterialCyrinder;                                           // 0x0290 (size: 0x8)
    class UMaterial* DecalMaterialBox;                                                // 0x0298 (size: 0x8)
    TArray<class UDecalComponent*> DecalArrayCircle;                                  // 0x02A0 (size: 0x10)
    TArray<class UDecalComponent*> DecalArrayBox;                                     // 0x02B0 (size: 0x10)
    bool Visibile;                                                                    // 0x02C0 (size: 0x1)

    void VisibleSetting(bool Visible);
    void CreateBoxEffectWall(class UBoxComponent* Box, float Height, float Margin, bool Decal);
    void ChangeEffectWall(class UParticleSystem* ChangeEffect);
    void MakeBox(FTransform Transform, float Height, float Width, float Depth, bool Usedecal);
    void CreateCylinderEffectWall(FTransform Transform, float Radius, float Height, float Count, float Angle);
    void EraseEffectWall();
    void CreateCircleEffectWall(class UCapsuleComponent* Capsule, float Height, float Count, float Angle, bool Decal);
    void MakeCylinder(FTransform Transform, float Range, float Height, float SpawnCount, float Angle, bool MakeDecal);
}; // Size: 0x2C1

#endif
