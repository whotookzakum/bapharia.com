#ifndef UE4SS_SDK_MediaIOCore_HPP
#define UE4SS_SDK_MediaIOCore_HPP

#include "MediaIOCore_enums.hpp"

struct FMediaCaptureOptions
{
    EMediaCaptureCroppingType Crop;                                                   // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FIntPoint CustomCapturePoint;                                                     // 0x0004 (size: 0x8)
    bool bResizeSourceBuffer;                                                         // 0x000C (size: 0x1)
    bool bSkipFrameWhenRunningExpensiveTasks;                                         // 0x000D (size: 0x1)
    bool bConvertToDesiredPixelFormat;                                                // 0x000E (size: 0x1)
    bool bForceAlphaToOneOnConversion;                                                // 0x000F (size: 0x1)

}; // Size: 0x10

struct FMediaIOConfiguration
{
    bool bIsInput;                                                                    // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FMediaIOConnection MediaConnection;                                               // 0x0004 (size: 0x20)
    FMediaIOMode MediaMode;                                                           // 0x0024 (size: 0x18)

}; // Size: 0x3C

struct FMediaIOConnection
{
    FMediaIODevice Device;                                                            // 0x0000 (size: 0xC)
    FName protocol;                                                                   // 0x000C (size: 0x8)
    EMediaIOTransportType TransportType;                                              // 0x0014 (size: 0x4)
    EMediaIOQuadLinkTransportType QuadTransportType;                                  // 0x0018 (size: 0x4)
    int32 PortIdentifier;                                                             // 0x001C (size: 0x4)

}; // Size: 0x20

struct FMediaIODevice
{
    FName DeviceName;                                                                 // 0x0000 (size: 0x8)
    int32 DeviceIdentifier;                                                           // 0x0008 (size: 0x4)

}; // Size: 0xC

struct FMediaIOInputConfiguration
{
    FMediaIOConfiguration MediaConfiguration;                                         // 0x0000 (size: 0x3C)
    EMediaIOInputType InputType;                                                      // 0x003C (size: 0x4)
    int32 KeyPortIdentifier;                                                          // 0x0040 (size: 0x4)

}; // Size: 0x44

struct FMediaIOMode
{
    FFrameRate FrameRate;                                                             // 0x0000 (size: 0x8)
    FIntPoint Resolution;                                                             // 0x0008 (size: 0x8)
    EMediaIOStandardType Standard;                                                    // 0x0010 (size: 0x4)
    int32 DeviceModeIdentifier;                                                       // 0x0014 (size: 0x4)

}; // Size: 0x18

struct FMediaIOOutputConfiguration
{
    FMediaIOConfiguration MediaConfiguration;                                         // 0x0000 (size: 0x3C)
    EMediaIOOutputType OutputType;                                                    // 0x003C (size: 0x4)
    int32 KeyPortIdentifier;                                                          // 0x0040 (size: 0x4)
    EMediaIOReferenceType OutputReference;                                            // 0x0044 (size: 0x4)
    int32 ReferencePortIdentifier;                                                    // 0x0048 (size: 0x4)

}; // Size: 0x4C

class UFileMediaCapture : public UMediaCapture
{
    char padding_0[0x170];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x170

class UFileMediaOutput : public UMediaOutput
{
    FImageWriteOptions WriteOptions;                                                  // 0x0030 (size: 0x60)
    FDirectoryPath FilePath;                                                          // 0x0090 (size: 0x10)
    FString BaseFileName;                                                             // 0x00A0 (size: 0x10)
    bool bOverrideDesiredSize;                                                        // 0x00B0 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00B1 (size: 0x3)
    FIntPoint DesiredSize;                                                            // 0x00B4 (size: 0x8)
    bool bOverridePixelFormat;                                                        // 0x00BC (size: 0x1)
    char padding_1[0x3];                                                              // 0x00BD (size: 0x3)
    EFileMediaOutputPixelFormat DesiredPixelFormat;                                   // 0x00C0 (size: 0x4)

}; // Size: 0xD0

class UMediaCapture : public UObject
{
    FMediaCaptureOnStateChanged OnStateChanged;                                       // 0x0028 (size: 0x10)
    void MediaCaptureStateChangedSignature();
    char padding_0[0x18];                                                             // 0x0038 (size: 0x18)
    class UMediaOutput* MediaOutput;                                                  // 0x0050 (size: 0x8)
    char padding_1[0x20];                                                             // 0x0058 (size: 0x20)
    class UTextureRenderTarget2D* CapturingRenderTarget;                              // 0x0078 (size: 0x8)

    bool UpdateTextureRenderTarget2D(class UTextureRenderTarget2D* RenderTarget);
    void StopCapture(bool bAllowPendingFrameToBeProcess);
    void SetMediaOutput(class UMediaOutput* InMediaOutput);
    EMediaCaptureState GetState();
    FIntPoint GetDesiredSize();
    TEnumAsByte<EPixelFormat> GetDesiredPixelFormat();
    bool CaptureTextureRenderTarget2D(class UTextureRenderTarget2D* RenderTarget, FMediaCaptureOptions CaptureOptions);
    bool CaptureActiveSceneViewport(FMediaCaptureOptions CaptureOptions);
}; // Size: 0x108

class UMediaOutput : public UObject
{
    int32 NumberOfTextureBuffers;                                                     // 0x0028 (size: 0x4)

    bool Validate(FString& OutFailureReason);
    class UMediaCapture* CreateMediaCapture();
}; // Size: 0x30

#endif
