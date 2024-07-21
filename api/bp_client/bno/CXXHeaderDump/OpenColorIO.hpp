#ifndef UE4SS_SDK_OpenColorIO_HPP
#define UE4SS_SDK_OpenColorIO_HPP

struct FOpenColorIOColorConversionSettings
{
    class UOpenColorIOConfiguration* ConfigurationSource;                             // 0x0000 (size: 0x8)
    FOpenColorIOColorSpace SourceColorSpace;                                          // 0x0008 (size: 0x28)
    FOpenColorIOColorSpace DestinationColorSpace;                                     // 0x0030 (size: 0x28)

}; // Size: 0x58

struct FOpenColorIOColorSpace
{
    FString ColorSpaceName;                                                           // 0x0000 (size: 0x10)
    int32 ColorSpaceIndex;                                                            // 0x0010 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0014 (size: 0x4)
    FString FamilyName;                                                               // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FOpenColorIODisplayConfiguration
{
    bool bIsEnabled;                                                                  // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    FOpenColorIOColorConversionSettings ColorConfiguration;                           // 0x0008 (size: 0x58)

}; // Size: 0x60

class UOpenColorIOBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool ApplyColorSpaceTransform(const class UObject* WorldContextObject, const FOpenColorIOColorConversionSettings& ConversionSettings, class UTexture* InputTexture, class UTextureRenderTarget2D* OutputRenderTarget);
}; // Size: 0x28

class UOpenColorIOColorTransform : public UObject
{
    class UOpenColorIOConfiguration* ConfigurationOwner;                              // 0x0028 (size: 0x8)
    FString SourceColorSpace;                                                         // 0x0030 (size: 0x10)
    FString DestinationColorSpace;                                                    // 0x0040 (size: 0x10)

}; // Size: 0x98

class UOpenColorIOConfiguration : public UObject
{
    FFilePath ConfigurationFile;                                                      // 0x0028 (size: 0x10)
    TArray<FOpenColorIOColorSpace> DesiredColorSpaces;                                // 0x0038 (size: 0x10)
    TArray<class UOpenColorIOColorTransform*> ColorTransforms;                        // 0x0048 (size: 0x10)

}; // Size: 0x80

class UOpenColorIODisplayExtensionWrapper : public UObject
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)

    void SetSceneExtensionIsActiveFunctions(const TArray<FSceneViewExtensionIsActiveFunctor>& IsActiveFunctions);
    void SetSceneExtensionIsActiveFunction(const FSceneViewExtensionIsActiveFunctor& IsActiveFunction);
    void SetOpenColorIOConfiguration(FOpenColorIODisplayConfiguration InDisplayConfiguration);
    void RemoveSceneExtension();
    class UOpenColorIODisplayExtensionWrapper* CreateOpenColorIODisplayExtension(FOpenColorIODisplayConfiguration InDisplayConfiguration, const FSceneViewExtensionIsActiveFunctor& IsActiveFunction);
}; // Size: 0x38

#endif
