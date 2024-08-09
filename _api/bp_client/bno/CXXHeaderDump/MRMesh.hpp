#ifndef UE4SS_SDK_MRMesh_HPP
#define UE4SS_SDK_MRMesh_HPP

#include "MRMesh_enums.hpp"

struct FMRMeshConfiguration
{
    char padding_0[0x1];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x1

class UMRMeshComponent : public UPrimitiveComponent
{
    class UMaterialInterface* Material;                                               // 0x0478 (size: 0x8)
    class UMaterialInterface* WireframeMaterial;                                      // 0x0480 (size: 0x8)
    bool bCreateMeshProxySections;                                                    // 0x0488 (size: 0x1)
    bool bUpdateNavMeshOnMeshUpdate;                                                  // 0x0489 (size: 0x1)
    bool bNeverCreateCollisionMesh;                                                   // 0x048A (size: 0x1)
    char padding_0[0x5];                                                              // 0x048B (size: 0x5)
    class UBodySetup* CachedBodySetup;                                                // 0x0490 (size: 0x8)
    TArray<class UBodySetup*> BodySetups;                                             // 0x0498 (size: 0x10)

    void SetWireframeMaterial(class UMaterialInterface* InMaterial);
    void SetWireframeColor(const FLinearColor& InColor);
    void SetUseWireframe(bool bUseWireframe);
    void SetEnableMeshOcclusion(bool bEnable);
    bool IsConnected();
    FLinearColor GetWireframeColor();
    bool GetUseWireframe();
    bool GetEnableMeshOcclusion();
    void ForceNavMeshUpdate();
    void Clear();
}; // Size: 0x520

class UMeshReconstructorBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void StopReconstruction();
    void StartReconstruction();
    void PauseReconstruction();
    bool IsReconstructionStarted();
    bool IsReconstructionPaused();
    void DisconnectMRMesh();
    void ConnectMRMesh(class UMRMeshComponent* Mesh);
}; // Size: 0x28

class UMockDataMeshTrackerComponent : public USceneComponent
{
    FMockDataMeshTrackerComponentOnMeshTrackerUpdated OnMeshTrackerUpdated;           // 0x0208 (size: 0x10)
    void OnMockDataMeshTrackerUpdated(int32 Index, const TArray<FVector>& Vertices, const TArray<int32>& Triangles, const TArray<FVector>& Normals, const TArray<float>& Confidence);
    bool ScanWorld;                                                                   // 0x0218 (size: 0x1)
    bool RequestNormals;                                                              // 0x0219 (size: 0x1)
    bool RequestVertexConfidence;                                                     // 0x021A (size: 0x1)
    EMeshTrackerVertexColorMode VertexColorMode;                                      // 0x021B (size: 0x1)
    char padding_0[0x4];                                                              // 0x021C (size: 0x4)
    TArray<FColor> BlockVertexColors;                                                 // 0x0220 (size: 0x10)
    FLinearColor VertexColorFromConfidenceZero;                                       // 0x0230 (size: 0x10)
    FLinearColor VertexColorFromConfidenceOne;                                        // 0x0240 (size: 0x10)
    float UpdateInterval;                                                             // 0x0250 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0254 (size: 0x4)
    class UMRMeshComponent* MRMesh;                                                   // 0x0258 (size: 0x8)

    void OnMockDataMeshTrackerUpdated__DelegateSignature(int32 Index, const TArray<FVector>& Vertices, const TArray<int32>& Triangles, const TArray<FVector>& Normals, const TArray<float>& Confidence);
    void DisconnectMRMesh(class UMRMeshComponent* InMRMeshPtr);
    void ConnectMRMesh(class UMRMeshComponent* InMRMeshPtr);
}; // Size: 0x280

#endif
