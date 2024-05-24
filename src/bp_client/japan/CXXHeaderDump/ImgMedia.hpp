#ifndef UE4SS_SDK_ImgMedia_HPP
#define UE4SS_SDK_ImgMedia_HPP

class UImgMediaSource : public UBaseMediaSource
{
    bool IsPathRelativeToProjectRoot;                                                 // 0x0088 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0089 (size: 0x3)
    FFrameRate FrameRateOverride;                                                     // 0x008C (size: 0x8)
    char padding_1[0x4];                                                              // 0x0094 (size: 0x4)
    FString ProxyOverride;                                                            // 0x0098 (size: 0x10)
    FDirectoryPath SequencePath;                                                      // 0x00A8 (size: 0x10)

    void SetSequencePath(FString Path);
    void SetMipLevelDistance(float Distance);
    void RemoveTargetObject(class AActor* InActor);
    void RemoveGlobalCamera(class AActor* InActor);
    FString GetSequencePath();
    void GetProxies(TArray<FString>& OutProxies);
    void AddTargetObject(class AActor* InActor, float Width);
    void AddGlobalCamera(class AActor* InActor);
}; // Size: 0xC8

#endif
