#ifndef UE4SS_SDK_ImagePlate_HPP
#define UE4SS_SDK_ImagePlate_HPP

struct FImagePlateParameters
{
    class UMaterialInterface* Material;                                               // 0x0000 (size: 0x8)
    FName TextureParameterName;                                                       // 0x0008 (size: 0x8)
    bool bFillScreen;                                                                 // 0x0010 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0011 (size: 0x3)
    FVector2D FillScreenAmount;                                                       // 0x0014 (size: 0x8)
    FVector2D FixedSize;                                                              // 0x001C (size: 0x8)
    char padding_1[0x4];                                                              // 0x0024 (size: 0x4)
    class UTexture* RenderTexture;                                                    // 0x0028 (size: 0x8)
    class UMaterialInstanceDynamic* DynamicMaterial;                                  // 0x0030 (size: 0x8)

}; // Size: 0x38

struct FMovieSceneImagePlateSectionParams
{
    FFrameNumber SectionStartTime;                                                    // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    class UImagePlateFileSequence* FileSequence;                                      // 0x0008 (size: 0x8)
    bool bReuseExistingTexture;                                                       // 0x0010 (size: 0x1)

}; // Size: 0x18

struct FMovieSceneImagePlateSectionTemplate : public FMovieSceneEvalTemplate
{
    FMovieScenePropertySectionData PropertyData;                                      // 0x0020 (size: 0x18)
    FMovieSceneImagePlateSectionParams Params;                                        // 0x0038 (size: 0x18)

}; // Size: 0x50

class AImagePlate : public AActor
{
    class UImagePlateComponent* ImagePlate;                                           // 0x0228 (size: 0x8)

}; // Size: 0x230

class UImagePlateComponent : public UPrimitiveComponent
{
    FImagePlateParameters Plate;                                                      // 0x0468 (size: 0x38)

    void SetImagePlate(FImagePlateParameters Plate);
    void OnRenderTextureChanged();
    FImagePlateParameters GetPlate();
}; // Size: 0x530

class UImagePlateFileSequence : public UObject
{
    FDirectoryPath SequencePath;                                                      // 0x0028 (size: 0x10)
    FString FileWildcard;                                                             // 0x0038 (size: 0x10)
    float FrameRate;                                                                  // 0x0048 (size: 0x4)

}; // Size: 0x50

class UImagePlateFrustumComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

class UImagePlateSettings : public UObject
{
    FString ProxyName;                                                                // 0x0028 (size: 0x10)

}; // Size: 0x38

class UMovieSceneImagePlateSection : public UMovieSceneSection
{
    class UImagePlateFileSequence* FileSequence;                                      // 0x00E8 (size: 0x8)
    bool bReuseExistingTexture;                                                       // 0x00F0 (size: 0x1)

}; // Size: 0xF8

class UMovieSceneImagePlateTrack : public UMovieScenePropertyTrack
{
    char padding_0[0xC8];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC8

#endif
