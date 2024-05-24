#ifndef UE4SS_SDK_BP_RouteGuideShape_HPP
#define UE4SS_SDK_BP_RouteGuideShape_HPP

class ABP_RouteGuideShape_C : public ASBRouteGuideShape
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0228 (size: 0x8)
    class UInstancedStaticMeshComponent* InstancedStaticMesh4;                        // 0x0230 (size: 0x8)
    class UInstancedStaticMeshComponent* InstancedStaticMesh3;                        // 0x0238 (size: 0x8)
    class UInstancedStaticMeshComponent* InstancedStaticMesh2;                        // 0x0240 (size: 0x8)
    class UStaticMeshComponent* GroundMesh;                                           // 0x0248 (size: 0x8)
    class UInstancedStaticMeshComponent* InstancedStaticMesh;                         // 0x0250 (size: 0x8)
    float Scale;                                                                      // 0x0258 (size: 0x4)
    char padding_0[0x4];                                                              // 0x025C (size: 0x4)
    TArray<FSBTexelColorInfo> Texel;                                                  // 0x0260 (size: 0x10)
    bool ConponentsVisibility;                                                        // 0x0270 (size: 0x1)
    bool DebugDraw;                                                                   // 0x0271 (size: 0x1)
    char padding_1[0x2];                                                              // 0x0272 (size: 0x2)
    int32 InstanceNum;                                                                // 0x0274 (size: 0x4)

    void UserConstructionScript();
    void UpdateShape(float Scale, FVector OffsetLocation, class UTexture2D* Texture);
    void ReceiveBeginPlay();
    void ClearInstances();
    void AddRouteGuideShapeInstance(int32 X, int32 Y, int32 Z, int32 Type);
    void ExecuteUbergraph_BP_RouteGuideShape(int32 EntryPoint);
}; // Size: 0x278

#endif
