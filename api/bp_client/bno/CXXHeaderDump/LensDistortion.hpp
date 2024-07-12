#ifndef UE4SS_SDK_LensDistortion_HPP
#define UE4SS_SDK_LensDistortion_HPP

struct FLensDistortionCameraModel
{
    float K1;                                                                         // 0x0000 (size: 0x4)
    float K2;                                                                         // 0x0004 (size: 0x4)
    float K3;                                                                         // 0x0008 (size: 0x4)
    float P1;                                                                         // 0x000C (size: 0x4)
    float P2;                                                                         // 0x0010 (size: 0x4)
    FVector2D F;                                                                      // 0x0014 (size: 0x8)
    FVector2D C;                                                                      // 0x001C (size: 0x8)

}; // Size: 0x24

class ULensDistortionBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool NotEqual_CompareLensDistortionModels(const FLensDistortionCameraModel& A, const FLensDistortionCameraModel& B);
    void GetUndistortOverscanFactor(const FLensDistortionCameraModel& CameraModel, float DistortedHorizontalFOV, float DistortedAspectRatio, float& UndistortOverscanFactor);
    bool EqualEqual_CompareLensDistortionModels(const FLensDistortionCameraModel& A, const FLensDistortionCameraModel& B);
    void DrawUVDisplacementToRenderTarget(const class UObject* WorldContextObject, const FLensDistortionCameraModel& CameraModel, float DistortedHorizontalFOV, float DistortedAspectRatio, float UndistortOverscanFactor, class UTextureRenderTarget2D* OutputRenderTarget, float OutputMultiply, float OutputAdd);
}; // Size: 0x28

#endif
