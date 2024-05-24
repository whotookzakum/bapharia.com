#ifndef UE4SS_SDK_RemoteControl_HPP
#define UE4SS_SDK_RemoteControl_HPP

#include "RemoteControl_enums.hpp"

struct FRCCachedFieldData
{
    FGuid LayoutGroupId;                                                              // 0x0000 (size: 0x10)
    FName OwnerObjectAlias;                                                           // 0x0010 (size: 0x8)

}; // Size: 0x18

struct FRCEntityWrapper
{
    char padding_0[0x18];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x18

struct FRCFieldMetadata
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FRCFieldPathInfo
{
    TArray<FRCFieldPathSegment> Segments;                                             // 0x0000 (size: 0x10)
    uint32 PathHash;                                                                  // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FRCFieldPathSegment
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    int32 ArrayIndex;                                                                 // 0x0008 (size: 0x4)
    char padding_0[0x4];                                                              // 0x000C (size: 0x4)
    FString ValuePropertyName;                                                        // 0x0010 (size: 0x10)
    FString MapKey;                                                                   // 0x0020 (size: 0x10)

}; // Size: 0x50

struct FRCMetadata_FName : public FRCFieldMetadata
{
    FName DefaultValue;                                                               // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FRCMetadata_FString : public FRCFieldMetadata
{
    FString DefaultValue;                                                             // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FRCMetadata_FVector : public FRCFieldMetadata
{
    FVector DefaultValue;                                                             // 0x0008 (size: 0xC)
    FVector MinimumValue;                                                             // 0x0014 (size: 0xC)
    FVector MaximumValue;                                                             // 0x0020 (size: 0xC)

}; // Size: 0x30

struct FRCMetadata_UClass : public FRCFieldMetadata
{
    TSoftClassPtr<UClass> DefaultValue;                                               // 0x0008 (size: 0x28)

}; // Size: 0x30

struct FRCMetadata_UObject : public FRCFieldMetadata
{
    TSoftObjectPtr<UObject> DefaultValue;                                             // 0x0008 (size: 0x28)

}; // Size: 0x30

struct FRCMetadata_UScriptStruct : public FRCFieldMetadata
{
    TSoftObjectPtr<UScriptStruct> DefaultValue;                                       // 0x0008 (size: 0x28)

}; // Size: 0x30

struct FRCMetadata_bool : public FRCFieldMetadata
{
    bool DefaultValue;                                                                // 0x0008 (size: 0x1)

}; // Size: 0x10

struct FRCMetadata_byte : public FRCFieldMetadata
{
    uint8 Min;                                                                        // 0x0008 (size: 0x1)
    uint8 Max;                                                                        // 0x0009 (size: 0x1)
    uint8 DefaultValue;                                                               // 0x000A (size: 0x1)

}; // Size: 0x10

struct FRCMetadata_double : public FRCFieldMetadata
{
    double Min;                                                                       // 0x0008 (size: 0x8)
    double Max;                                                                       // 0x0010 (size: 0x8)
    double DefaultValue;                                                              // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FRCMetadata_float : public FRCFieldMetadata
{
    float Min;                                                                        // 0x0008 (size: 0x4)
    float Max;                                                                        // 0x000C (size: 0x4)
    float DefaultValue;                                                               // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FRCMetadata_int16 : public FRCFieldMetadata
{
    int16 Min;                                                                        // 0x0008 (size: 0x2)
    int16 Max;                                                                        // 0x000A (size: 0x2)
    int16 DefaultValue;                                                               // 0x000C (size: 0x2)

}; // Size: 0x10

struct FRCMetadata_int32 : public FRCFieldMetadata
{
    int32 Min;                                                                        // 0x0008 (size: 0x4)
    int32 Max;                                                                        // 0x000C (size: 0x4)
    int32 DefaultValue;                                                               // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FRCMetadata_int64 : public FRCFieldMetadata
{
    int64 Min;                                                                        // 0x0008 (size: 0x8)
    int64 Max;                                                                        // 0x0010 (size: 0x8)
    int64 DefaultValue;                                                               // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FRCMetadata_int8 : public FRCFieldMetadata
{
    int8 Min;                                                                         // 0x0008 (size: 0x1)
    int8 Max;                                                                         // 0x0009 (size: 0x1)
    int8 DefaultValue;                                                                // 0x000A (size: 0x1)

}; // Size: 0x10

struct FRCMetadata_uint16 : public FRCFieldMetadata
{
    uint16 Min;                                                                       // 0x0008 (size: 0x2)
    uint16 Max;                                                                       // 0x000A (size: 0x2)
    uint16 DefaultValue;                                                              // 0x000C (size: 0x2)

}; // Size: 0x10

struct FRCMetadata_uint32 : public FRCFieldMetadata
{
    uint32 Min;                                                                       // 0x0008 (size: 0x4)
    uint32 Max;                                                                       // 0x000C (size: 0x4)
    uint32 DefaultValue;                                                              // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FRCMetadata_uint64 : public FRCFieldMetadata
{
    uint64 Min;                                                                       // 0x0008 (size: 0x8)
    uint64 Max;                                                                       // 0x0010 (size: 0x8)
    uint64 DefaultValue;                                                              // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FRemoteControlActor : public FRemoteControlEntity
{
    FSoftObjectPath Path;                                                             // 0x0098 (size: 0x18)

}; // Size: 0xB0

struct FRemoteControlEntity
{
    TMap<class FName, class FString> UserMetadata;                                    // 0x0008 (size: 0x50)
    TArray<TWeakObjectPtr<URemoteControlBinding>> Bindings;                           // 0x0058 (size: 0x10)
    TWeakObjectPtr<class URemoteControlPreset> Owner;                                 // 0x0068 (size: 0x8)
    FName Label;                                                                      // 0x0070 (size: 0x8)
    FGuid ID;                                                                         // 0x0078 (size: 0x10)

}; // Size: 0x98

struct FRemoteControlField : public FRemoteControlEntity
{
    EExposedFieldType FieldType;                                                      // 0x0098 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0099 (size: 0x3)
    FName FieldName;                                                                  // 0x009C (size: 0x8)
    char padding_1[0x4];                                                              // 0x00A4 (size: 0x4)
    FRCFieldPathInfo FieldPathInfo;                                                   // 0x00A8 (size: 0x18)
    TSet<FRemoteControlProtocolBinding> ProtocolBindings;                             // 0x00C0 (size: 0x50)
    FSoftClassPath OwnerClass;                                                        // 0x0110 (size: 0x18)
    bool bIsEditorOnly;                                                               // 0x0128 (size: 0x1)

}; // Size: 0x130

struct FRemoteControlFunction : public FRemoteControlField
{
    bool bIsCallableInPackaged;                                                       // 0x0140 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0141 (size: 0x7)
    FSoftObjectPath FunctionPath;                                                     // 0x0148 (size: 0x18)

}; // Size: 0x168

struct FRemoteControlInterceptionFunctionParamStruct
{
    int32 Int32Value;                                                                 // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    TArray<int32> IntArray;                                                           // 0x0008 (size: 0x10)
    FString IntString;                                                                // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FRemoteControlInterceptionTestStruct
{
    int32 Int32Value;                                                                 // 0x0000 (size: 0x4)

}; // Size: 0x4

struct FRemoteControlOptionalExposeArgs
{
    FString DisplayName;                                                              // 0x0000 (size: 0x10)
    FString GroupName;                                                                // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FRemoteControlPresetGroup
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    FGuid ID;                                                                         // 0x0008 (size: 0x10)
    TArray<FGuid> Fields;                                                             // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FRemoteControlPresetLayout
{
    TArray<FRemoteControlPresetGroup> Groups;                                         // 0x0000 (size: 0x10)
    TWeakObjectPtr<class URemoteControlPreset> Owner;                                 // 0x0010 (size: 0x8)

}; // Size: 0xC0

struct FRemoteControlProperty : public FRemoteControlField
{
    bool bIsEditableInPackaged;                                                       // 0x0130 (size: 0x1)

}; // Size: 0x138

struct FRemoteControlProtocolBinding
{
    FGuid ID;                                                                         // 0x0000 (size: 0x10)
    FName ProtocolName;                                                               // 0x0010 (size: 0x8)
    FGuid PropertyId;                                                                 // 0x0018 (size: 0x10)
    FName MappingPropertyName;                                                        // 0x0028 (size: 0x8)

}; // Size: 0x40

struct FRemoteControlProtocolEntity
{
    TWeakObjectPtr<class URemoteControlPreset> Owner;                                 // 0x0008 (size: 0x8)
    FGuid PropertyId;                                                                 // 0x0010 (size: 0x10)
    char padding_0[0x8];                                                              // 0x0020 (size: 0x8)
    TSet<FRemoteControlProtocolMapping> Mappings;                                     // 0x0028 (size: 0x50)
    ERCBindingStatus BindingStatus;                                                   // 0x0078 (size: 0x1)

}; // Size: 0x80

struct FRemoteControlProtocolMapping
{
    FGuid ID;                                                                         // 0x0000 (size: 0x10)
    TArray<uint8> InterpolationRangePropertyData;                                     // 0x0010 (size: 0x10)
    TArray<uint8> InterpolationMappingPropertyData;                                   // 0x0020 (size: 0x10)
    TArray<uint8> InterpolationRangePropertyDataCache;                                // 0x0030 (size: 0x10)
    TArray<uint8> InterpolationMappingPropertyDataCache;                              // 0x0040 (size: 0x10)
    int32 InterpolationMappingPropertyElementNum;                                     // 0x0050 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0054 (size: 0x4)
    TFieldPath<FProperty> BoundPropertyPath;                                          // 0x0058 (size: 0x20)

}; // Size: 0x78

struct FRemoteControlTarget
{
    UClass* Class;                                                                    // 0x0000 (size: 0x8)
    TSet<FRemoteControlFunction> ExposedFunctions;                                    // 0x0008 (size: 0x50)
    TSet<FRemoteControlProperty> ExposedProperties;                                   // 0x0058 (size: 0x50)
    FName Alias;                                                                      // 0x00A8 (size: 0x8)
    TArray<FSoftObjectPath> Bindings;                                                 // 0x00B0 (size: 0x10)
    TWeakObjectPtr<class URemoteControlPreset> Owner;                                 // 0x00C0 (size: 0x8)

}; // Size: 0xC8

struct FRemoteControlTestInnerStruct
{
    FColor Color;                                                                     // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    TArray<float> FloatArray;                                                         // 0x0008 (size: 0x10)
    TArray<FVector> ArrayOfVectors;                                                   // 0x0018 (size: 0x10)

}; // Size: 0x28

struct FRemoteControlTestStruct
{
    bool bSomeBool;                                                                   // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    uint32 SomeUInt32;                                                                // 0x0004 (size: 0x4)
    float SomeFloat;                                                                  // 0x0008 (size: 0x4)
    FVector SomeVector;                                                               // 0x000C (size: 0xC)
    FRotator SomeRotator;                                                             // 0x0018 (size: 0xC)
    int32 SomeClampedInt;                                                             // 0x0024 (size: 0x4)
    float SomeClampedFloat;                                                           // 0x0028 (size: 0x4)

}; // Size: 0x2C

struct FRemoteControlTestStructInner
{
    int8 Int8Value;                                                                   // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    FRemoteControlTestStructInnerSimle InnerSimle;                                    // 0x0004 (size: 0x4)
    int32 Int32Value;                                                                 // 0x0008 (size: 0x4)

}; // Size: 0x1C

struct FRemoteControlTestStructInnerSimle
{
    int32 Int32Value;                                                                 // 0x0000 (size: 0x4)

}; // Size: 0x4

struct FRemoteControlTestStructOuter
{
    int8 Int8Value;                                                                   // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    TSet<FRemoteControlTestStructInner> StructInnerSet;                               // 0x0008 (size: 0x50)
    int32 Int32Value;                                                                 // 0x0058 (size: 0x4)
    FRemoteControlTestStructInner RemoteControlTestStructInner;                       // 0x005C (size: 0x1C)

}; // Size: 0x78

class ARemoteControlPresetActor : public AActor
{
    class URemoteControlPreset* Preset;                                               // 0x0228 (size: 0x8)

}; // Size: 0x238

class URemoteControlAPITestObject : public UObject
{
    int32 CStyleIntArray;                                                             // 0x0028 (size: 0xC)
    char padding_0[0x4];                                                              // 0x0034 (size: 0x4)
    TArray<int32> IntArray;                                                           // 0x0038 (size: 0x10)
    TArray<FRemoteControlTestStructOuter> StructOuterArray;                           // 0x0048 (size: 0x10)
    TSet<int32> IntSet;                                                               // 0x0058 (size: 0x50)
    TMap<int32, int32> IntMap;                                                        // 0x00A8 (size: 0x50)
    TMap<int32, FRemoteControlTestStructOuter> StructOuterMap;                        // 0x00F8 (size: 0x50)
    TMap<class FString, class FColor> StringColorMap;                                 // 0x0148 (size: 0x50)
    TArray<FVector> ArrayOfVectors;                                                   // 0x0198 (size: 0x10)
    int8 Int8Value;                                                                   // 0x01A8 (size: 0x1)
    char padding_1[0x1];                                                              // 0x01A9 (size: 0x1)
    int16 Int16Value;                                                                 // 0x01AA (size: 0x2)
    int32 Int32Value;                                                                 // 0x01AC (size: 0x4)
    float FloatValue;                                                                 // 0x01B0 (size: 0x4)
    char padding_2[0x4];                                                              // 0x01B4 (size: 0x4)
    double DoubleValue;                                                               // 0x01B8 (size: 0x8)
    FRemoteControlTestStructOuter RemoteControlTestStructOuter;                       // 0x01C0 (size: 0x78)
    FString StringValue;                                                              // 0x0238 (size: 0x10)
    FName NameValue;                                                                  // 0x0248 (size: 0x8)
    FText TextValue;                                                                  // 0x0250 (size: 0x18)
    bool bValue;                                                                      // 0x0268 (size: 0x1)
    uint8 ByteValue;                                                                  // 0x0269 (size: 0x1)
    TEnumAsByte<ERemoteControlEnum::Type> RemoteControlEnumByteValue;                 // 0x026A (size: 0x1)
    ERemoteControlEnumClass RemoteControlEnumValue;                                   // 0x026B (size: 0x1)
    FVector VectorValue;                                                              // 0x026C (size: 0xC)
    FRotator RotatorValue;                                                            // 0x0278 (size: 0xC)

}; // Size: 0x288

class URemoteControlBinding : public UObject
{
    FString Name;                                                                     // 0x0028 (size: 0x10)

}; // Size: 0x38

class URemoteControlExposeRegistry : public UObject
{
    TSet<FRCEntityWrapper> ExposedEntities;                                           // 0x0028 (size: 0x50)
    TMap<class FName, class FGuid> LabelToIdCache;                                    // 0x0078 (size: 0x50)

}; // Size: 0xC8

class URemoteControlFunctionLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool ExposeProperty(class URemoteControlPreset* Preset, class UObject* SourceObject, FString Property, FRemoteControlOptionalExposeArgs Args);
    bool ExposeFunction(class URemoteControlPreset* Preset, class UObject* SourceObject, FString Function, FRemoteControlOptionalExposeArgs Args);
    bool ExposeActor(class URemoteControlPreset* Preset, class AActor* Actor, FRemoteControlOptionalExposeArgs Args);
}; // Size: 0x28

class URemoteControlInterceptionTestObject : public UObject
{
    FRemoteControlInterceptionTestStruct CustomStruct;                                // 0x0028 (size: 0x4)
    char padding_0[0x4];                                                              // 0x002C (size: 0x4)
    FRemoteControlInterceptionFunctionParamStruct FunctionParamStruct;                // 0x0030 (size: 0x28)

    FRemoteControlInterceptionFunctionParamStruct TestFunction(const FRemoteControlInterceptionFunctionParamStruct& InStruct, int32 InTestFactor);
}; // Size: 0x58

class URemoteControlLevelDependantBinding : public URemoteControlBinding
{
    TMap<class TSoftObjectPtr<ULevel>, class TSoftObjectPtr<UObject>> BoundObjectMap; // 0x0038 (size: 0x50)
    TSoftObjectPtr<ULevel> LevelWithLastSuccessfulResolve;                            // 0x0088 (size: 0x28)

}; // Size: 0xB0

class URemoteControlLevelIndependantBinding : public URemoteControlBinding
{
    TSoftObjectPtr<UObject> BoundObject;                                              // 0x0038 (size: 0x28)

}; // Size: 0x60

class URemoteControlPreset : public UObject
{
    FRemoteControlPresetLayout Layout;                                                // 0x0028 (size: 0xC0)
    TMap<class FString, class FString> MetaData;                                      // 0x00E8 (size: 0x50)
    TArray<class URemoteControlBinding*> Bindings;                                    // 0x0138 (size: 0x10)
    FGuid PresetId;                                                                   // 0x0148 (size: 0x10)
    TMap<class FName, class FRemoteControlTarget> RemoteControlTargets;               // 0x0158 (size: 0x50)
    TMap<class FGuid, class FRCCachedFieldData> FieldCache;                           // 0x01A8 (size: 0x50)
    TMap<class FName, class FGuid> NameToGuidMap;                                     // 0x01F8 (size: 0x50)
    class URemoteControlExposeRegistry* Registry;                                     // 0x0248 (size: 0x8)

}; // Size: 0x4E8

class URemoteControlTestObject : public UObject
{
    int32 CStyleIntArray;                                                             // 0x0028 (size: 0xC)
    char padding_0[0x4];                                                              // 0x0034 (size: 0x4)
    TArray<int32> IntArray;                                                           // 0x0038 (size: 0x10)
    TArray<float> FloatArray;                                                         // 0x0048 (size: 0x10)
    TSet<int32> IntSet;                                                               // 0x0058 (size: 0x50)
    TMap<int32, int32> IntMap;                                                        // 0x00A8 (size: 0x50)
    TMap<int32, FRemoteControlTestInnerStruct> IntInnerStructMap;                     // 0x00F8 (size: 0x50)
    TMap<class FString, class FColor> StringColorMap;                                 // 0x0148 (size: 0x50)

}; // Size: 0x198

#endif
