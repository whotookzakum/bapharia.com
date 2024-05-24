#ifndef UE4SS_SDK_WebRemoteControl_HPP
#define UE4SS_SDK_WebRemoteControl_HPP

#include "WebRemoteControl_enums.hpp"

struct FAPIInfoResponse
{
    TArray<FRemoteControlRouteDescription> HttpRoutes;                                // 0x0008 (size: 0x10)
    FRCShortPresetDescription ActivePreset;                                           // 0x0018 (size: 0x20)

}; // Size: 0x38

struct FDescribeObjectRequest : public FRCRequest
{
    FString ObjectPath;                                                               // 0x0068 (size: 0x10)

}; // Size: 0x78

struct FDescribeObjectResponse
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    UClass* Class;                                                                    // 0x0010 (size: 0x8)
    TArray<FRCPropertyDescription> Properties;                                        // 0x0018 (size: 0x10)
    TArray<FRCFunctionDescription> Functions;                                         // 0x0028 (size: 0x10)

}; // Size: 0x38

struct FGetMetadataFieldResponse
{
    FString Value;                                                                    // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FGetMetadataResponse
{
    TMap<class FString, class FString> MetaData;                                      // 0x0000 (size: 0x50)

}; // Size: 0x50

struct FGetObjectThumbnailRequest : public FRCRequest
{
    FString ObjectPath;                                                               // 0x0068 (size: 0x10)

}; // Size: 0x78

struct FGetPresetResponse
{
    FRCPresetDescription Preset;                                                      // 0x0000 (size: 0x40)

}; // Size: 0x40

struct FListPresetsResponse
{
    TArray<FRCShortPresetDescription> Presets;                                        // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FRCAssetDescription
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    FName Class;                                                                      // 0x0008 (size: 0x8)
    FName Path;                                                                       // 0x0010 (size: 0x8)
    TMap<class FName, class FString> MetaData;                                        // 0x0018 (size: 0x50)

}; // Size: 0x68

struct FRCAssetFilter
{
    TArray<FName> PackageNames;                                                       // 0x0000 (size: 0x10)
    TArray<FName> PackagePaths;                                                       // 0x0010 (size: 0x10)
    TArray<FName> ClassNames;                                                         // 0x0020 (size: 0x10)
    TSet<FName> RecursiveClassesExclusionSet;                                         // 0x0030 (size: 0x50)
    bool RecursiveClasses;                                                            // 0x0080 (size: 0x1)
    bool RecursivePaths;                                                              // 0x0081 (size: 0x1)

}; // Size: 0x88

struct FRCBatchRequest : public FRCRequest
{
    TArray<FRCRequestWrapper> Requests;                                               // 0x0068 (size: 0x10)

}; // Size: 0x78

struct FRCCallRequest : public FRCRequest
{
    FString ObjectPath;                                                               // 0x0068 (size: 0x10)
    FString FunctionName;                                                             // 0x0078 (size: 0x10)
    bool GenerateTransaction;                                                         // 0x0088 (size: 0x1)

}; // Size: 0x90

struct FRCExposedActorDescription
{
    FName DisplayName;                                                                // 0x0000 (size: 0x8)
    FString ID;                                                                       // 0x0008 (size: 0x10)
    FRCObjectDescription UnderlyingActor;                                             // 0x0018 (size: 0x30)

}; // Size: 0x48

struct FRCExposedFunctionDescription
{
    FName DisplayName;                                                                // 0x0000 (size: 0x8)
    FString ID;                                                                       // 0x0008 (size: 0x10)
    FRCFunctionDescription UnderlyingFunction;                                        // 0x0018 (size: 0x30)
    TArray<FRCObjectDescription> OwnerObjects;                                        // 0x0048 (size: 0x10)

}; // Size: 0x58

struct FRCExposedPropertyDescription
{
    FName DisplayName;                                                                // 0x0000 (size: 0x8)
    FString ID;                                                                       // 0x0008 (size: 0x10)
    FRCPropertyDescription UnderlyingProperty;                                        // 0x0018 (size: 0xA0)
    TMap<class FName, class FString> MetaData;                                        // 0x00B8 (size: 0x50)
    TArray<FRCObjectDescription> OwnerObjects;                                        // 0x0108 (size: 0x10)

}; // Size: 0x118

struct FRCFunctionDescription
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    FString Description;                                                              // 0x0010 (size: 0x10)
    TArray<FRCPropertyDescription> Arguments;                                         // 0x0020 (size: 0x10)

}; // Size: 0x30

struct FRCObjectDescription
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    FString Class;                                                                    // 0x0010 (size: 0x10)
    FString Path;                                                                     // 0x0020 (size: 0x10)

}; // Size: 0x30

struct FRCObjectRequest : public FRCRequest
{
    FString ObjectPath;                                                               // 0x0068 (size: 0x10)
    FString PropertyName;                                                             // 0x0078 (size: 0x10)
    bool ResetToDefault;                                                              // 0x0088 (size: 0x1)
    bool GenerateTransaction;                                                         // 0x0089 (size: 0x1)
    ERCAccess Access;                                                                 // 0x008A (size: 0x1)

}; // Size: 0x90

struct FRCPresetCallRequest : public FRCRequest
{
    bool GenerateTransaction;                                                         // 0x0068 (size: 0x1)

}; // Size: 0x70

struct FRCPresetDescription
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    FString Path;                                                                     // 0x0010 (size: 0x10)
    FString ID;                                                                       // 0x0020 (size: 0x10)
    TArray<FRCPresetLayoutGroupDescription> Groups;                                   // 0x0030 (size: 0x10)

}; // Size: 0x40

struct FRCPresetEntitiesModifiedEvent
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FName PresetName;                                                                 // 0x0010 (size: 0x8)
    FString PresetId;                                                                 // 0x0018 (size: 0x10)
    FRCPresetModifiedEntitiesDescription ModifiedEntities;                            // 0x0028 (size: 0x30)

}; // Size: 0x58

struct FRCPresetFieldRenamed
{
    FName OldFieldLabel;                                                              // 0x0000 (size: 0x8)
    FName NewFieldLabel;                                                              // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FRCPresetFieldsAddedEvent
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FName PresetName;                                                                 // 0x0010 (size: 0x8)
    FString PresetId;                                                                 // 0x0018 (size: 0x10)
    FRCPresetDescription Description;                                                 // 0x0028 (size: 0x40)

}; // Size: 0x68

struct FRCPresetFieldsRemovedEvent
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FName PresetName;                                                                 // 0x0010 (size: 0x8)
    FString PresetId;                                                                 // 0x0018 (size: 0x10)
    TArray<FName> RemovedFields;                                                      // 0x0028 (size: 0x10)
    TArray<FString> RemovedFieldIds;                                                  // 0x0038 (size: 0x10)

}; // Size: 0x48

struct FRCPresetFieldsRenamedEvent
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FName PresetName;                                                                 // 0x0010 (size: 0x8)
    FString PresetId;                                                                 // 0x0018 (size: 0x10)
    TArray<FRCPresetFieldRenamed> RenamedFields;                                      // 0x0028 (size: 0x10)

}; // Size: 0x38

struct FRCPresetLayoutGroupDescription
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    TArray<FRCExposedPropertyDescription> ExposedProperties;                          // 0x0008 (size: 0x10)
    TArray<FRCExposedFunctionDescription> ExposedFunctions;                           // 0x0018 (size: 0x10)
    TArray<FRCExposedActorDescription> ExposedActors;                                 // 0x0028 (size: 0x10)

}; // Size: 0x38

struct FRCPresetLayoutModified
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FRCPresetDescription Preset;                                                      // 0x0010 (size: 0x40)

}; // Size: 0x50

struct FRCPresetMetadataModified
{
    FString Type;                                                                     // 0x0000 (size: 0x10)
    FName PresetName;                                                                 // 0x0010 (size: 0x8)
    FString PresetId;                                                                 // 0x0018 (size: 0x10)
    TMap<class FString, class FString> MetaData;                                      // 0x0028 (size: 0x50)

}; // Size: 0x78

struct FRCPresetModifiedEntitiesDescription
{
    TArray<FRCExposedPropertyDescription> ModifiedRCProperties;                       // 0x0000 (size: 0x10)
    TArray<FRCExposedFunctionDescription> ModifiedRCFunctions;                        // 0x0010 (size: 0x10)
    TArray<FRCExposedActorDescription> ModifiedRCActors;                              // 0x0020 (size: 0x10)

}; // Size: 0x30

struct FRCPresetSetPropertyRequest : public FRCRequest
{
    bool GenerateTransaction;                                                         // 0x0068 (size: 0x1)
    bool ResetToDefault;                                                              // 0x0069 (size: 0x1)

}; // Size: 0x70

struct FRCPropertyDescription
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    FString Description;                                                              // 0x0010 (size: 0x10)
    FString Type;                                                                     // 0x0020 (size: 0x10)
    FString ContainerType;                                                            // 0x0030 (size: 0x10)
    FString KeyType;                                                                  // 0x0040 (size: 0x10)
    TMap<class FName, class FString> MetaData;                                        // 0x0050 (size: 0x50)

}; // Size: 0xA0

struct FRCRequest
{
    char padding_0[0x68];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x68

struct FRCRequestWrapper : public FRCRequest
{
    FString URL;                                                                      // 0x0068 (size: 0x10)
    FName Verb;                                                                       // 0x0078 (size: 0x8)
    int32 RequestID;                                                                  // 0x0080 (size: 0x4)

}; // Size: 0x88

struct FRCShortPresetDescription
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    FString ID;                                                                       // 0x0008 (size: 0x10)
    FName Path;                                                                       // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FRCWebSocketPresetRegisterBody : public FRCRequest
{
    FString PresetName;                                                               // 0x0068 (size: 0x10)
    bool IgnoreRemoteChanges;                                                         // 0x0078 (size: 0x1)

}; // Size: 0x80

struct FRCWebSocketRequest : public FRCRequest
{
    FString MessageName;                                                              // 0x0068 (size: 0x10)
    int32 ID;                                                                         // 0x0078 (size: 0x4)

}; // Size: 0x80

struct FRemoteControlObjectEventHookRequest : public FRCRequest
{
    ERemoteControlEvent EventType;                                                    // 0x0068 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0069 (size: 0x7)
    FString ObjectPath;                                                               // 0x0070 (size: 0x10)
    FString PropertyName;                                                             // 0x0080 (size: 0x10)

}; // Size: 0x90

struct FRemoteControlRouteDescription
{
    FString Path;                                                                     // 0x0000 (size: 0x10)
    ERemoteControlHttpVerbs Verb;                                                     // 0x0010 (size: 0x2)
    char padding_0[0x6];                                                              // 0x0012 (size: 0x6)
    FString Description;                                                              // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FSearchActorRequest : public FRCRequest
{
    FString Query;                                                                    // 0x0068 (size: 0x10)
    FString Class;                                                                    // 0x0078 (size: 0x10)
    int32 Limit;                                                                      // 0x0088 (size: 0x4)

}; // Size: 0x90

struct FSearchActorResponse
{
    TArray<FRCObjectDescription> Actors;                                              // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSearchAssetRequest : public FRCRequest
{
    FString Query;                                                                    // 0x0068 (size: 0x10)
    FRCAssetFilter Filter;                                                            // 0x0078 (size: 0x88)
    int32 Limit;                                                                      // 0x0100 (size: 0x4)

}; // Size: 0x108

struct FSearchAssetResponse
{
    TArray<FRCAssetDescription> Assets;                                               // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSearchObjectRequest : public FRCRequest
{
    FString Query;                                                                    // 0x0068 (size: 0x10)
    FString Class;                                                                    // 0x0078 (size: 0x10)
    FString Outer;                                                                    // 0x0088 (size: 0x10)
    int32 Limit;                                                                      // 0x0098 (size: 0x4)

}; // Size: 0xA0

struct FSetEntityLabelRequest : public FRCRequest
{
    FString NewLabel;                                                                 // 0x0068 (size: 0x10)

}; // Size: 0x78

struct FSetEntityLabelResponse
{
    FString AssignedLabel;                                                            // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FSetEntityMetadataRequest : public FRCRequest
{
    FString Value;                                                                    // 0x0068 (size: 0x10)

}; // Size: 0x78

struct FSetPresetMetadataRequest : public FRCRequest
{
    FString Value;                                                                    // 0x0068 (size: 0x10)

}; // Size: 0x78

#endif
