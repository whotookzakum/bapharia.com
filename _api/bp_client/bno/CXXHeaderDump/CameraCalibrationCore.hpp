#ifndef UE4SS_SDK_CameraCalibrationCore_HPP
#define UE4SS_SDK_CameraCalibrationCore_HPP

#include "CameraCalibrationCore_enums.hpp"

struct FBaseFocusPoint
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FBaseLensTable
{
    TWeakObjectPtr<class ULensFile> LensFile;                                         // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FDataTablePointInfoBase
{
    float Focus;                                                                      // 0x0000 (size: 0x4)
    float Zoom;                                                                       // 0x0004 (size: 0x4)

}; // Size: 0x8

struct FDerivedDistortionData
{
    FDistortionData DistortionData;                                                   // 0x0000 (size: 0x18)
    class UTextureRenderTarget2D* UndistortionDisplacementMap;                        // 0x0018 (size: 0x8)
    class UTextureRenderTarget2D* DistortionDisplacementMap;                          // 0x0020 (size: 0x8)

}; // Size: 0x30

struct FDistortionData
{
    TArray<FVector2D> DistortedUVs;                                                   // 0x0000 (size: 0x10)
    float OverscanFactor;                                                             // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FDistortionFocusPoint : public FBaseFocusPoint
{
    float Focus;                                                                      // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FRichCurve MapBlendingCurve;                                                      // 0x0010 (size: 0x80)
    TArray<FDistortionZoomPoint> ZoomPoints;                                          // 0x0090 (size: 0x10)

}; // Size: 0xA0

struct FDistortionHandlerPicker
{
    class UCineCameraComponent* TargetCameraComponent;                                // 0x0000 (size: 0x8)
    FGuid DistortionProducerID;                                                       // 0x0008 (size: 0x10)
    FString HandlerDisplayName;                                                       // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FDistortionInfo
{
    TArray<float> Parameters;                                                         // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FDistortionPointInfo : public FDataTablePointInfoBase
{
    FDistortionInfo DistortionInfo;                                                   // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FDistortionTable : public FBaseLensTable
{
    TArray<FDistortionFocusPoint> FocusPoints;                                        // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FDistortionZoomPoint
{
    float Zoom;                                                                       // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FDistortionInfo DistortionInfo;                                                   // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FEncodersTable
{
    FRichCurve Focus;                                                                 // 0x0000 (size: 0x80)
    FRichCurve Iris;                                                                  // 0x0080 (size: 0x80)

}; // Size: 0x100

struct FFocalLengthFocusPoint : public FBaseFocusPoint
{
    float Focus;                                                                      // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FRichCurve Fx;                                                                    // 0x0010 (size: 0x80)
    FRichCurve Fy;                                                                    // 0x0090 (size: 0x80)
    TArray<FFocalLengthZoomPoint> ZoomPoints;                                         // 0x0110 (size: 0x10)

}; // Size: 0x120

struct FFocalLengthInfo
{
    FVector2D FxFy;                                                                   // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FFocalLengthPointInfo : public FDataTablePointInfoBase
{
    FFocalLengthInfo FocalLengthInfo;                                                 // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FFocalLengthTable : public FBaseLensTable
{
    TArray<FFocalLengthFocusPoint> FocusPoints;                                       // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FFocalLengthZoomPoint
{
    float Zoom;                                                                       // 0x0000 (size: 0x4)
    FFocalLengthInfo FocalLengthInfo;                                                 // 0x0004 (size: 0x8)
    bool bIsCalibrationPoint;                                                         // 0x000C (size: 0x1)

}; // Size: 0x10

struct FImageCenterFocusPoint : public FBaseFocusPoint
{
    float Focus;                                                                      // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FRichCurve Cx;                                                                    // 0x0010 (size: 0x80)
    FRichCurve Cy;                                                                    // 0x0090 (size: 0x80)

}; // Size: 0x110

struct FImageCenterInfo
{
    FVector2D PrincipalPoint;                                                         // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FImageCenterPointInfo : public FDataTablePointInfoBase
{
    FImageCenterInfo ImageCenterInfo;                                                 // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FImageCenterTable : public FBaseLensTable
{
    TArray<FImageCenterFocusPoint> FocusPoints;                                       // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FLensDataCategoryEditorColor
{
    FColor Focus;                                                                     // 0x0000 (size: 0x4)
    FColor Iris;                                                                      // 0x0004 (size: 0x4)
    FColor Zoom;                                                                      // 0x0008 (size: 0x4)
    FColor Distortion;                                                                // 0x000C (size: 0x4)
    FColor ImageCenter;                                                               // 0x0010 (size: 0x4)
    FColor STMap;                                                                     // 0x0014 (size: 0x4)
    FColor NodalOffset;                                                               // 0x0018 (size: 0x4)

}; // Size: 0x1C

struct FLensDistortionState
{
    FDistortionInfo DistortionInfo;                                                   // 0x0000 (size: 0x10)
    FFocalLengthInfo FocalLengthInfo;                                                 // 0x0010 (size: 0x8)
    FImageCenterInfo ImageCenter;                                                     // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FLensFilePicker
{
    bool bUseDefaultLensFile;                                                         // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    class ULensFile* LensFile;                                                        // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FLensInfo
{
    FString LensModelName;                                                            // 0x0000 (size: 0x10)
    FString LensSerialNumber;                                                         // 0x0010 (size: 0x10)
    TSubclassOf<class ULensModel> LensModel;                                          // 0x0020 (size: 0x8)
    FVector2D SensorDimensions;                                                       // 0x0028 (size: 0x8)

}; // Size: 0x30

struct FNodalOffsetFocusPoint : public FBaseFocusPoint
{
    float Focus;                                                                      // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FRichCurve LocationOffset;                                                        // 0x0010 (size: 0x180)
    FRichCurve RotationOffset;                                                        // 0x0190 (size: 0x180)

}; // Size: 0x310

struct FNodalOffsetPointInfo : public FDataTablePointInfoBase
{
    FNodalPointOffset NodalPointOffset;                                               // 0x0010 (size: 0x20)

}; // Size: 0x30

struct FNodalOffsetTable : public FBaseLensTable
{
    TArray<FNodalOffsetFocusPoint> FocusPoints;                                       // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FNodalPointOffset
{
    FVector LocationOffset;                                                           // 0x0000 (size: 0xC)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FQuat RotationOffset;                                                             // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FSTMapFocusPoint : public FBaseFocusPoint
{
    float Focus;                                                                      // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FRichCurve MapBlendingCurve;                                                      // 0x0010 (size: 0x80)
    TArray<FSTMapZoomPoint> ZoomPoints;                                               // 0x0090 (size: 0x10)

}; // Size: 0xA0

struct FSTMapInfo
{
    class UTexture* DistortionMap;                                                    // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FSTMapPointInfo : public FDataTablePointInfoBase
{
    FSTMapInfo STMapInfo;                                                             // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FSTMapTable : public FBaseLensTable
{
    TArray<FSTMapFocusPoint> FocusPoints;                                             // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FSTMapZoomPoint
{
    float Zoom;                                                                       // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FSTMapInfo STMapInfo;                                                             // 0x0008 (size: 0x8)
    FDerivedDistortionData DerivedDistortionData;                                     // 0x0010 (size: 0x30)
    bool bIsCalibrationPoint;                                                         // 0x0040 (size: 0x1)

}; // Size: 0x48

struct FSphericalDistortionParameters
{
    float K1;                                                                         // 0x0000 (size: 0x4)
    float K2;                                                                         // 0x0004 (size: 0x4)
    float K3;                                                                         // 0x0008 (size: 0x4)
    float P1;                                                                         // 0x000C (size: 0x4)
    float P2;                                                                         // 0x0010 (size: 0x4)

}; // Size: 0x14

class ACameraCalibrationCheckerboard : public AActor
{
    class USceneComponent* Root;                                                      // 0x0228 (size: 0x8)
    class UCalibrationPointComponent* TopLeft;                                        // 0x0230 (size: 0x8)
    class UCalibrationPointComponent* TopRight;                                       // 0x0238 (size: 0x8)
    class UCalibrationPointComponent* BottomLeft;                                     // 0x0240 (size: 0x8)
    class UCalibrationPointComponent* BottomRight;                                    // 0x0248 (size: 0x8)
    class UCalibrationPointComponent* Center;                                         // 0x0250 (size: 0x8)
    int32 NumCornerRows;                                                              // 0x0258 (size: 0x4)
    int32 NumCornerCols;                                                              // 0x025C (size: 0x4)
    float SquareSideLength;                                                           // 0x0260 (size: 0x4)
    float Thickness;                                                                  // 0x0264 (size: 0x4)
    class UStaticMesh* CubeMesh;                                                      // 0x0268 (size: 0x8)
    class UMaterialInterface* OddCubeMaterial;                                        // 0x0270 (size: 0x8)
    class UMaterialInterface* EvenCubeMaterial;                                       // 0x0278 (size: 0x8)

    void Rebuild();
}; // Size: 0x280

class UCalibrationPointComponent : public UProceduralMeshComponent
{
    TMap<class FString, class FVector> SubPoints;                                     // 0x04F8 (size: 0x50)
    bool bVisualizePointsInEditor;                                                    // 0x0548 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0549 (size: 0x3)
    float PointVisualizationScale;                                                    // 0x054C (size: 0x4)
    TEnumAsByte<ECalibrationPointVisualization> VisualizationShape;                   // 0x0550 (size: 0x1)

    void RebuildVertices();
    bool NamespacedSubpointName(FString InSubpointName, FString& OutNamespacedName);
    bool GetWorldLocation(FString InPointName, FVector& OutLocation);
    void GetNamespacedPointNames(TArray<FString>& OutNamespacedNames);
}; // Size: 0x560

class UCameraCalibrationEditorSettings : public UDeveloperSettings
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

class UCameraCalibrationSettings : public UDeveloperSettings
{
    TSoftObjectPtr<ULensFile> StartupLensFile;                                        // 0x0038 (size: 0x28)
    FIntPoint DisplacementMapResolution;                                              // 0x0060 (size: 0x8)
    float CalibrationInputTolerance;                                                  // 0x0068 (size: 0x4)
    char padding_0[0x4];                                                              // 0x006C (size: 0x4)
    TMap<class TSubclassOf<ULensDistortionModelHandlerBase>, class TSoftObjectPtr<UMaterialInterface>> DefaultUndistortionDisplacementMaterials; // 0x0070 (size: 0x50)
    TMap<class TSubclassOf<ULensDistortionModelHandlerBase>, class TSoftObjectPtr<UMaterialInterface>> DefaultDistortionDisplacementMaterials; // 0x00C0 (size: 0x50)
    TMap<class TSubclassOf<ULensDistortionModelHandlerBase>, class TSoftObjectPtr<UMaterialInterface>> DefaultDistortionMaterials; // 0x0110 (size: 0x50)

}; // Size: 0x160

class UCameraCalibrationStep : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UCameraCalibrationSubsystem : public UEngineSubsystem
{
    class ULensFile* DefaultLensFile;                                                 // 0x0030 (size: 0x8)
    TMap<class FName, class TSubclassOf<ULensModel>> LensModelMap;                    // 0x0038 (size: 0x50)
    TMap<class FName, class TSubclassOf<UCameraNodalOffsetAlgo>> CameraNodalOffsetAlgosMap; // 0x0088 (size: 0x50)
    TMap<class FName, class TSubclassOf<UCameraCalibrationStep>> CameraCalibrationStepsMap; // 0x00D8 (size: 0x50)

    void UnregisterDistortionModelHandler(class UCineCameraComponent* Component, class ULensDistortionModelHandlerBase* Handler);
    void SetDefaultLensFile(class ULensFile* NewDefaultLensFile);
    TSubclassOf<class ULensModel> GetRegisteredLensModel(FName ModelName);
    class ULensFile* GetLensFile(const FLensFilePicker& Picker);
    TArray<class ULensDistortionModelHandlerBase*> GetDistortionModelHandlers(class UCineCameraComponent* Component);
    class ULensFile* GetDefaultLensFile();
    TArray<FName> GetCameraNodalOffsetAlgos();
    TSubclassOf<class UCameraNodalOffsetAlgo> GetCameraNodalOffsetAlgo(FName Name);
    TArray<FName> GetCameraCalibrationSteps();
    TSubclassOf<class UCameraCalibrationStep> GetCameraCalibrationStep(FName Name);
    class ULensDistortionModelHandlerBase* FindOrCreateDistortionModelHandler(FDistortionHandlerPicker& DistortionHandlerPicker, const TSubclassOf<class ULensModel> LensModelClass);
    class ULensDistortionModelHandlerBase* FindDistortionModelHandler(FDistortionHandlerPicker& DistortionHandlerPicker, bool bUpdatePicker);
}; // Size: 0x220

class UCameraLensDistortionAlgo : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UCameraNodalOffsetAlgo : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class ULensDistortionModelHandlerBase : public UObject
{
    TSubclassOf<class ULensModel> LensModelClass;                                     // 0x0028 (size: 0x8)
    class UMaterialInstanceDynamic* DistortionPostProcessMID;                         // 0x0030 (size: 0x8)
    FLensDistortionState CurrentState;                                                // 0x0038 (size: 0x20)
    FString DisplayName;                                                              // 0x0058 (size: 0x10)
    float OverscanFactor;                                                             // 0x0068 (size: 0x4)
    char padding_0[0x4];                                                              // 0x006C (size: 0x4)
    class UMaterialInstanceDynamic* UndistortionDisplacementMapMID;                   // 0x0070 (size: 0x8)
    class UMaterialInstanceDynamic* DistortionDisplacementMapMID;                     // 0x0078 (size: 0x8)
    class UTextureRenderTarget2D* UndistortionDisplacementMapRT;                      // 0x0080 (size: 0x8)
    class UTextureRenderTarget2D* DistortionDisplacementMapRT;                        // 0x0088 (size: 0x8)
    FGuid DistortionProducerID;                                                       // 0x0090 (size: 0x10)

    void SetDistortionState(const FLensDistortionState& InNewState);
    bool IsModelSupported(const TSubclassOf<class ULensModel>& ModelToSupport);
    class UTextureRenderTarget2D* GetUndistortionDisplacementMap();
    class UTextureRenderTarget2D* GetDistortionDisplacementMap();
}; // Size: 0xA8

class ULensFile : public UObject
{
    FLensInfo LensInfo;                                                               // 0x0030 (size: 0x30)
    ELensDataMode DataMode;                                                           // 0x0060 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0061 (size: 0x7)
    TMap<class FString, class FString> UserMetadata;                                  // 0x0068 (size: 0x50)
    FEncodersTable EncodersTable;                                                     // 0x00B8 (size: 0x100)
    FDistortionTable DistortionTable;                                                 // 0x01B8 (size: 0x20)
    FFocalLengthTable FocalLengthTable;                                               // 0x01D8 (size: 0x20)
    FImageCenterTable ImageCenterTable;                                               // 0x01F8 (size: 0x20)
    FNodalOffsetTable NodalOffsetTable;                                               // 0x0218 (size: 0x20)
    FSTMapTable STMapTable;                                                           // 0x0238 (size: 0x20)
    char padding_1[0x10];                                                             // 0x0258 (size: 0x10)
    TArray<class UTextureRenderTarget2D*> UndistortionDisplacementMapHolders;         // 0x0268 (size: 0x10)
    TArray<class UTextureRenderTarget2D*> DistortionDisplacementMapHolders;           // 0x0278 (size: 0x10)

    void RemoveZoomPoint(ELensDataCategory InDataCategory, float InFocus, float InZoom);
    void RemoveFocusPoint(ELensDataCategory InDataCategory, float InFocus);
    bool HasSamples(ELensDataCategory InDataCategory);
    bool HasIrisEncoderMapping();
    bool HasFocusEncoderMapping();
    TArray<FSTMapPointInfo> GetSTMapPoints();
    bool GetSTMapPoint(float InFocus, float InZoom, FSTMapInfo& OutSTMapInfo);
    TArray<FNodalOffsetPointInfo> GetNodalOffsetPoints();
    bool GetNodalOffsetPoint(float InFocus, float InZoom, FNodalPointOffset& OutNodalPointOffset);
    TArray<FImageCenterPointInfo> GetImageCenterPoints();
    bool GetImageCenterPoint(float InFocus, float InZoom, FImageCenterInfo& OutImageCenterInfo);
    TArray<FFocalLengthPointInfo> GetFocalLengthPoints();
    bool GetFocalLengthPoint(float InFocus, float InZoom, FFocalLengthInfo& OutFocalLengthInfo);
    TArray<FDistortionPointInfo> GetDistortionPoints();
    bool GetDistortionPoint(float InFocus, float InZoom, FDistortionInfo& OutDistortionInfo);
    float EvaluateNormalizedIris(float InNormalizedValue);
    float EvaluateNormalizedFocus(float InNormalizedValue);
    bool EvaluateNodalPointOffset(float InFocus, float InZoom, FNodalPointOffset& OutEvaluatedValue);
    bool EvaluateImageCenterParameters(float InFocus, float InZoom, FImageCenterInfo& OutEvaluatedValue);
    bool EvaluateFocalLength(float InFocus, float InZoom, FFocalLengthInfo& OutEvaluatedValue);
    bool EvaluateDistortionParameters(float InFocus, float InZoom, FDistortionInfo& OutEvaluatedValue);
    bool EvaluateDistortionData(float InFocus, float InZoom, FVector2D InFilmback, class ULensDistortionModelHandlerBase* InLensHandler);
    void ClearData(ELensDataCategory InDataCategory);
    void ClearAll();
    void AddSTMapPoint(float NewFocus, float NewZoom, const FSTMapInfo& NewPoint);
    void AddNodalOffsetPoint(float NewFocus, float NewZoom, const FNodalPointOffset& NewPoint);
    void AddImageCenterPoint(float NewFocus, float NewZoom, const FImageCenterInfo& NewPoint);
    void AddFocalLengthPoint(float NewFocus, float NewZoom, const FFocalLengthInfo& NewFocalLength);
    void AddDistortionPoint(float NewFocus, float NewZoom, const FDistortionInfo& NewPoint, const FFocalLengthInfo& NewFocalLength);
}; // Size: 0x288

class ULensModel : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USphericalLensDistortionModelHandler : public ULensDistortionModelHandlerBase
{
    char padding_0[0xC0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC0

class USphericalLensModel : public ULensModel
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

#endif
