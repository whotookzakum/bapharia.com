#ifndef UE4SS_SDK_RemoteControlCommon_HPP
#define UE4SS_SDK_RemoteControlCommon_HPP

struct FRCPropertyContainerKey
{
    FName ValueTypeName;                                                              // 0x0000 (size: 0x8)

}; // Size: 0x8

class UPropertyContainerTestObject : public UObject
{
    bool bSomeBool;                                                                   // 0x0028 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0029 (size: 0x3)
    uint32 SomeUInt32;                                                                // 0x002C (size: 0x4)
    float SomeFloat;                                                                  // 0x0030 (size: 0x4)
    FVector SomeVector;                                                               // 0x0034 (size: 0xC)
    FRotator SomeRotator;                                                             // 0x0040 (size: 0xC)
    int32 SomeClampedInt;                                                             // 0x004C (size: 0x4)
    int32 SomeClampedInt2;                                                            // 0x0050 (size: 0x4)
    int32 SomeUIClampedInt;                                                           // 0x0054 (size: 0x4)
    float SomeClampedFloat;                                                           // 0x0058 (size: 0x4)
    float SomeUIClampedFloat;                                                         // 0x005C (size: 0x4)
    float SomeClampedFloat2;                                                          // 0x0060 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0064 (size: 0x4)
    FString SomeString;                                                               // 0x0068 (size: 0x10)
    FText SomeText;                                                                   // 0x0078 (size: 0x18)
    TArray<float> SomeFloatArray;                                                     // 0x0090 (size: 0x10)

}; // Size: 0xA0

class URCPropertyContainerBase : public UObject
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class URCPropertyContainerRegistry : public UEngineSubsystem
{
    TMap<class FRCPropertyContainerKey, class TSubclassOf<URCPropertyContainerBase>> CachedContainerClasses; // 0x0030 (size: 0x50)

}; // Size: 0x80

class URemoteControlSettings : public UDeveloperSettings
{
    bool bProtocolsGenerateTransactions;                                              // 0x0038 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0039 (size: 0x3)
    uint32 RemoteControlWebInterfacePort;                                             // 0x003C (size: 0x4)
    bool bForceWebAppBuildAtStartup;                                                  // 0x0040 (size: 0x1)
    bool bAutoStartWebServer;                                                         // 0x0041 (size: 0x1)
    bool bAutoStartWebSocketServer;                                                   // 0x0042 (size: 0x1)
    char padding_1[0x1];                                                              // 0x0043 (size: 0x1)
    uint32 RemoteControlHttpServerPort;                                               // 0x0044 (size: 0x4)
    uint32 RemoteControlWebSocketServerPort;                                          // 0x0048 (size: 0x4)
    bool bDisplayInEditorOnlyWarnings;                                                // 0x004C (size: 0x1)
    char padding_2[0x3];                                                              // 0x004D (size: 0x3)
    float TreeBindingSplitRatio;                                                      // 0x0050 (size: 0x4)

}; // Size: 0x58

#endif
