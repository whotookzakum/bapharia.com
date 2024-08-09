#ifndef UE4SS_SDK_BlueOcean_HPP
#define UE4SS_SDK_BlueOcean_HPP

struct FProjectedGridParameters
{
    class UMaterialInterface* Material;                                               // 0x0000 (size: 0x8)
    FVector GroundNormal;                                                             // 0x0008 (size: 0xC)
    float ScreenScale;                                                                // 0x0014 (size: 0x4)
    float Infinite;                                                                   // 0x0018 (size: 0x4)
    char padding_0[0x4];                                                              // 0x001C (size: 0x4)
    class UMaterialInterface* OverrideMaterial;                                       // 0x0020 (size: 0x8)

}; // Size: 0x28

struct FStructBoneOverride
{
    FName BoneName;                                                                   // 0x0000 (size: 0x8)
    float Density;                                                                    // 0x0008 (size: 0x4)
    float TestRadius;                                                                 // 0x000C (size: 0x4)

}; // Size: 0x10

struct FWaveParameter
{
    float Rotation;                                                                   // 0x0000 (size: 0x4)
    float Length;                                                                     // 0x0004 (size: 0x4)
    float Amplitude;                                                                  // 0x0008 (size: 0x4)
    float Steepness;                                                                  // 0x000C (size: 0x4)
    float TimeScale;                                                                  // 0x0010 (size: 0x4)

}; // Size: 0x14

struct FWaveSetParameters
{
    TArray<FWaveParameter> Waves;                                                     // 0x0000 (size: 0x10)

}; // Size: 0x10

class AOcean : public APhysicsVolume
{
    class UPrimitiveComponent* OceanPlane;                                            // 0x0270 (size: 0x8)
    class UMaterialParameterCollection* OceanParameterCollection;                     // 0x0278 (size: 0x8)
    class UMaterialInterface* OceanMaterial;                                          // 0x0280 (size: 0x8)
    FVector2D GlobalWaveDirection;                                                    // 0x0288 (size: 0x8)
    float GlobalWaveSpeed;                                                            // 0x0290 (size: 0x4)
    float GlobalWaveAmplitude;                                                        // 0x0294 (size: 0x4)
    FWaveParameter WaveCluster;                                                       // 0x0298 (size: 0x14)
    char padding_0[0x4];                                                              // 0x02AC (size: 0x4)
    class ADirectionalLight* SunLight;                                                // 0x02B0 (size: 0x8)
    class ALandscape* Landscape;                                                      // 0x02B8 (size: 0x8)
    class UTexture2D* HeightmapTexture;                                               // 0x02C0 (size: 0x8)
    float ModulationStartHeight;                                                      // 0x02C8 (size: 0x4)
    float ModulationMaxHeight;                                                        // 0x02CC (size: 0x4)
    float ModulationPower;                                                            // 0x02D0 (size: 0x4)

    FVector GetWaveHeightValue(const FVector& Location, const class UWorld* World, bool HeightOnly, bool TwoIterations);
}; // Size: 0x308

class AOceanGrid : public AOcean
{
    char padding_0[0x308];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x308

class AOceanMesh : public AOcean
{
    char padding_0[0x308];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x308

class AProjectedGrid : public AActor
{
    class UProjectedGridComponent* ProjectedGrid;                                     // 0x0228 (size: 0x8)

}; // Size: 0x230

class UBuoyancyForceComponent : public USceneComponent
{
    class AOcean* Ocean;                                                              // 0x0208 (size: 0x8)
    float MeshDensity;                                                                // 0x0210 (size: 0x4)
    float FluidDensity;                                                               // 0x0214 (size: 0x4)
    float FluidLinearDamping;                                                         // 0x0218 (size: 0x4)
    float FluidAngularDamping;                                                        // 0x021C (size: 0x4)
    FVector VelocityDamper;                                                           // 0x0220 (size: 0xC)
    bool ClampMaxVelocity;                                                            // 0x022C (size: 0x1)
    char padding_0[0x3];                                                              // 0x022D (size: 0x3)
    float MaxUnderwaterVelocity;                                                      // 0x0230 (size: 0x4)
    float TestPointRadius;                                                            // 0x0234 (size: 0x4)
    TArray<FVector> TestPoints;                                                       // 0x0238 (size: 0x10)
    bool ApplyForceToBones;                                                           // 0x0248 (size: 0x1)
    bool SnapToSurfaceIfNoPhysics;                                                    // 0x0249 (size: 0x1)
    bool TwoGerstnerIterations;                                                       // 0x024A (size: 0x1)
    char padding_1[0x5];                                                              // 0x024B (size: 0x5)
    TArray<float> PointDensityOverride;                                               // 0x0250 (size: 0x10)
    TArray<FStructBoneOverride> BoneOverride;                                         // 0x0260 (size: 0x10)
    bool DrawDebugPoints;                                                             // 0x0270 (size: 0x1)
    bool EnableStayUprightConstraint;                                                 // 0x0271 (size: 0x1)
    char padding_2[0x2];                                                              // 0x0272 (size: 0x2)
    float StayUprightStiffness;                                                       // 0x0274 (size: 0x4)
    float StayUprightDamping;                                                         // 0x0278 (size: 0x4)
    FRotator StayUprightDesiredRotation;                                              // 0x027C (size: 0xC)
    bool EnableWaveForces;                                                            // 0x0288 (size: 0x1)
    char padding_3[0x3];                                                              // 0x0289 (size: 0x3)
    float WaveForceMultiplier;                                                        // 0x028C (size: 0x4)
    TEnumAsByte<ETickingGroup> TickGroup;                                             // 0x0290 (size: 0x1)

}; // Size: 0x2B0

class UProjectedGridComponent : public UPrimitiveComponent
{
    FProjectedGridParameters Parameters;                                              // 0x0468 (size: 0x28)

    void SetProjectedGrid(FProjectedGridParameters Parameters);
    FProjectedGridParameters GetParameters();
}; // Size: 0x4E0

class UProjectedGridFrustumComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

#endif
