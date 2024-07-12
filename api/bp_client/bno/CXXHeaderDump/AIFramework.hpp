#ifndef UE4SS_SDK_AIFramework_HPP
#define UE4SS_SDK_AIFramework_HPP

#include "AIFramework_enums.hpp"

struct FAIFwBTArgument
{
    FString Name;                                                                     // 0x0000 (size: 0x10)
    EAIFwBTParamType Type;                                                            // 0x0010 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0011 (size: 0x3)
    uint8 bUseValue;                                                                  // 0x0014 (size: 0x1)
    uint8 bUseBBKey;                                                                  // 0x0014 (size: 0x1)
    uint8 BoolValue;                                                                  // 0x0014 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0015 (size: 0x3)
    int32 IntValue;                                                                   // 0x0018 (size: 0x4)
    float FloatValue;                                                                 // 0x001C (size: 0x4)
    FString StringValue;                                                              // 0x0020 (size: 0x10)
    FString BlackboardKey;                                                            // 0x0030 (size: 0x10)

}; // Size: 0x40

struct FAIFwBTNodeProperty
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FAIFwBTNodePropertyBool : public FAIFwBTNodeProperty
{
    bool DefaultValue;                                                                // 0x0010 (size: 0x1)

}; // Size: 0x18

struct FAIFwBTNodePropertyEnumBase : public FAIFwBTNodeProperty
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FAIFwBTNodePropertyFloat : public FAIFwBTNodeProperty
{
    float DefaultValue;                                                               // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FAIFwBTNodePropertyInt : public FAIFwBTNodeProperty
{
    int32 DefaultValue;                                                               // 0x0010 (size: 0x4)

}; // Size: 0x18

struct FAIFwBTNodePropertyString : public FAIFwBTNodeProperty
{
    FString DefaultValue;                                                             // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FAIFwBlackboard
{
    char padding_0[0x18];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x18

struct FAIFwClothoidCurve
{
    float InitialDirection;                                                           // 0x0000 (size: 0x4)
    float InitialCurvature;                                                           // 0x0004 (size: 0x4)
    float CurvatureChangeRate;                                                        // 0x0008 (size: 0x4)

}; // Size: 0xC

struct FAIFwClothoidSegment
{
    FVector2D StartPosition;                                                          // 0x0000 (size: 0x8)
    FAIFwClothoidCurve Curve;                                                         // 0x0008 (size: 0xC)
    float Length;                                                                     // 0x0014 (size: 0x4)

}; // Size: 0x18

struct FAIFwFactionRelationSettings
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    float Value;                                                                      // 0x0008 (size: 0x4)

}; // Size: 0xC

struct FAIFwFactionSettings
{
    FName Name;                                                                       // 0x0000 (size: 0x8)
    TArray<FAIFwFactionRelationSettings> Relations;                                   // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FAIFwHTNMethod
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FAIFwHTNTask
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FAIFwIMapLayoutCell
{
    uint64 NavNode;                                                                   // 0x0000 (size: 0x8)
    int32 X;                                                                          // 0x0008 (size: 0x4)
    int32 Y;                                                                          // 0x000C (size: 0x4)
    float Height;                                                                     // 0x0010 (size: 0x4)
    int32 Neighbors;                                                                  // 0x0014 (size: 0x10)

}; // Size: 0x28

struct FAIFwMultipleClothoidSegment
{
    FVector2D StartPosition;                                                          // 0x0000 (size: 0x8)
    FAIFwClothoidCurve Curve1;                                                        // 0x0008 (size: 0xC)
    FAIFwClothoidCurve Curve2;                                                        // 0x0014 (size: 0xC)
    FAIFwClothoidCurve Curve3;                                                        // 0x0020 (size: 0xC)
    float S1;                                                                         // 0x002C (size: 0x4)
    float S2;                                                                         // 0x0030 (size: 0x4)
    float Length;                                                                     // 0x0034 (size: 0x4)

}; // Size: 0x38

struct FAIFwParameterizedBTRequest
{
    class UAIFwBehaviorTree* Template;                                                // 0x0000 (size: 0x8)
    TArray<FAIFwBTArgument> Arguments;                                                // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FAIFwParameterizedHTNDomain
{
    class UAIFwHTNDomain* Domain;                                                     // 0x0000 (size: 0x8)
    TArray<FAIFwBTArgument> Arguments;                                                // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FAIFwPerceivedItemActor
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FAIFwPerceivedItemPoint
{
    char padding_0[0xC];                                                              // 0x0000 (size: 0x0)
}; // Size: 0xC

struct FAIFwSmartObjectEvent
{
    FAIFwSmartObjectUserSelector SupportedUsers;                                      // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FString Usage;                                                                    // 0x0008 (size: 0x10)
    uint8 bFactionNeutral;                                                            // 0x0018 (size: 0x1)
    uint8 bFactionFriendly;                                                           // 0x0018 (size: 0x1)
    uint8 bFactionHostile;                                                            // 0x0018 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0019 (size: 0x7)
    class UAIFwSmartObjectCondition* Condition;                                       // 0x0020 (size: 0x8)
    class UAIFwSmartObjectAction* Action;                                             // 0x0028 (size: 0x8)

}; // Size: 0x30

struct FAIFwSmartObjectUserSelector
{
    uint8 bSupportsUser0;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser1;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser2;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser3;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser4;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser5;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser6;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser7;                                                             // 0x0000 (size: 0x1)
    uint8 bSupportsUser8;                                                             // 0x0001 (size: 0x1)
    uint8 bSupportsUser9;                                                             // 0x0001 (size: 0x1)
    uint8 bSupportsUser10;                                                            // 0x0001 (size: 0x1)
    uint8 bSupportsUser11;                                                            // 0x0001 (size: 0x1)
    uint8 bSupportsUser12;                                                            // 0x0001 (size: 0x1)
    uint8 bSupportsUser13;                                                            // 0x0001 (size: 0x1)
    uint8 bSupportsUser14;                                                            // 0x0001 (size: 0x1)
    uint8 bSupportsUser15;                                                            // 0x0001 (size: 0x1)

}; // Size: 0x4

struct FAIFwSmartObjectUserSettings
{
    FName Name;                                                                       // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FAIFwTupleSpaceRef
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

class AAIFwAIDirector : public AActor
{
    class UAIFwBlackboardComponent* BlackboardComponent;                              // 0x0228 (size: 0x8)
    class UAIFwHierarchyComponent* HierarchyComponent;                                // 0x0230 (size: 0x8)

    void ReceiveOnActorSpawned(class AActor* SpawnedActor);
}; // Size: 0x238

class AAIFwInfluenceMapLayout : public AActor
{
    class UPrimitiveComponent* RenderingComp;                                         // 0x0228 (size: 0x8)
    uint8 bEnableDrawing;                                                             // 0x0230 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0231 (size: 0x3)
    float DrawDistance;                                                               // 0x0234 (size: 0x4)
    class ARecastNavMesh* NavMesh;                                                    // 0x0238 (size: 0x8)
    FVector Origin;                                                                   // 0x0240 (size: 0xC)
    float CellSize;                                                                   // 0x024C (size: 0x4)
    TArray<FAIFwIMapLayoutCell> Cells;                                                // 0x0250 (size: 0x10)

}; // Size: 0x2B0

class AAIFwNavVolume : public ANavigationData
{
    uint8 bDrawWallVoxels;                                                            // 0x0430 (size: 0x1)
    uint8 bDrawEmptyVoxels;                                                           // 0x0430 (size: 0x1)
    uint8 bLightDrawMode;                                                             // 0x0430 (size: 0x1)
    uint8 bAutoUpdateRenderTarget;                                                    // 0x0430 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0431 (size: 0x3)
    float VoxelSize;                                                                  // 0x0434 (size: 0x4)
    float DefaultDrawDistance;                                                        // 0x0438 (size: 0x4)
    float DefaultMaxSearchNodes;                                                      // 0x043C (size: 0x4)
    uint8 bDoFullyAsyncNavDataGathering;                                              // 0x0440 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0441 (size: 0x3)
    int32 NumEmptyVoxels;                                                             // 0x0444 (size: 0x4)
    int32 NumWallVoxels;                                                              // 0x0448 (size: 0x4)
    char padding_2[0x24];                                                             // 0x044C (size: 0x24)
    float HeuristicScale;                                                             // 0x0470 (size: 0x4)

}; // Size: 0x480

class AAIFwNavVolumeBoundsVolume : public AVolume
{
    FNavAgentSelector SupportedAgents;                                                // 0x0260 (size: 0x4)

}; // Size: 0x268

class AAIFwNavVolumeTestingActor : public ANavigationTestingActor
{
    uint8 bWantsStringPulling;                                                        // 0x0318 (size: 0x1)
    uint8 bWantsShortcutPath;                                                         // 0x0318 (size: 0x1)

}; // Size: 0x320

class UAIFwAITask_TeleportTo : public UAITask
{
    char padding_0[0x80];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x80

class UAIFwBTDecoratorNode : public UAIFwNodeBase
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

class UAIFwBTFocus : public UAIFwBTDecoratorNode
{
    FString BlackboardKey;                                                            // 0x0038 (size: 0x10)
    char padding_0[0x10];                                                             // 0x0048 (size: 0x10)
    EAIFwFocusPriority FocusPriority;                                                 // 0x0058 (size: 0x1)

}; // Size: 0x60

class UAIFwBTInvokeFunction : public UAIFwBTNode
{
    FAIFwBTNodePropertyString ObjectKey;                                              // 0x0040 (size: 0x20)
    FAIFwBTNodePropertyString FunctionName;                                           // 0x0060 (size: 0x20)

}; // Size: 0x80

class UAIFwBTMaxWalkSpeed : public UAIFwBTDecoratorNode
{
    FAIFwBTNodePropertyFloat MaxWalkSpeed;                                            // 0x0038 (size: 0x18)

}; // Size: 0x50

class UAIFwBTMoveTo : public UAIFwBTNode
{
    FAIFwBTNodePropertyString BlackboardKey;                                          // 0x0048 (size: 0x20)
    FAIFwBTNodePropertyFloat AcceptableRadius;                                        // 0x0068 (size: 0x18)
    TSubclassOf<class UNavigationQueryFilter> FilterClass;                            // 0x0080 (size: 0x8)
    FAIFwBTNodePropertyBool bAllowStrafe;                                             // 0x0088 (size: 0x18)
    FAIFwBTNodePropertyBool bAllowPartialPath;                                        // 0x00A0 (size: 0x18)
    FAIFwBTNodePropertyBool bReachTestIncludesAgentRadius;                            // 0x00B8 (size: 0x18)
    FAIFwBTNodePropertyBool bReachTestIncludesGoalRadius;                             // 0x00D0 (size: 0x18)

}; // Size: 0xE8

class UAIFwBTNode : public UAIFwNodeBase
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UAIFwBTPrintString : public UAIFwBTNode
{
    FAIFwBTNodePropertyString String;                                                 // 0x0040 (size: 0x20)
    bool bPrintToScreen;                                                              // 0x0060 (size: 0x1)
    bool bPrintToLog;                                                                 // 0x0061 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0062 (size: 0x2)
    float Duration;                                                                   // 0x0064 (size: 0x4)

}; // Size: 0x68

class UAIFwBTRunAITask : public UAIFwBTNode
{
    TSubclassOf<class UAITask> TaskClass;                                             // 0x0048 (size: 0x8)
    FAIFwBTNodePropertyBool bNonBlocking;                                             // 0x0050 (size: 0x18)

}; // Size: 0x68

class UAIFwBTRunHTNPlan : public UAIFwBTNode
{
    FString TaskName;                                                                 // 0x0040 (size: 0x10)

}; // Size: 0x50

class UAIFwBTRunPerceptionTree : public UAIFwBTNode
{
    class UAIFwBehaviorTree* PerceptionTree;                                          // 0x0040 (size: 0x8)
    FAIFwBTNodePropertyString BlackboardKey;                                          // 0x0048 (size: 0x20)
    EAIFwPTRunMode RunMode;                                                           // 0x0068 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0069 (size: 0x7)
    FAIFwBTNodePropertyInt MaxCount;                                                  // 0x0070 (size: 0x18)

}; // Size: 0x88

class UAIFwBTService_ReactiveSkill : public UBTService
{
    FName SkillTag;                                                                   // 0x0070 (size: 0x8)
    uint8 bEnable;                                                                    // 0x0078 (size: 0x1)

}; // Size: 0x80

class UAIFwBTService_RunPerceptionTree : public UBTService_BlackboardBase
{
    class UAIFwBehaviorTree* PerceptionTree;                                          // 0x0098 (size: 0x8)
    bool bClearBBValueWhenFailed;                                                     // 0x00A0 (size: 0x1)

}; // Size: 0xA8

class UAIFwBTTask_RunHTNPlan : public UBTTaskNode
{
    FString TaskName;                                                                 // 0x0070 (size: 0x10)

}; // Size: 0x80

class UAIFwBTTask_RunPerceptionTree : public UBTTask_BlackboardBase
{
    class UAIFwBehaviorTree* PerceptionTree;                                          // 0x0098 (size: 0x8)

}; // Size: 0xA0

class UAIFwBTTask_UseSmartObject : public UBTTask_BlackboardBase
{
    FString Usage;                                                                    // 0x0098 (size: 0x10)

}; // Size: 0xA8

class UAIFwBTTeleportTo : public UAIFwBTNode
{
    FAIFwBTNodePropertyString BlackboardKey;                                          // 0x0048 (size: 0x20)

}; // Size: 0x68

class UAIFwBTToggleReactiveSkill : public UAIFwBTDecoratorNode
{
    FName SkillTag;                                                                   // 0x0038 (size: 0x8)
    bool bEnable;                                                                     // 0x0040 (size: 0x1)

}; // Size: 0x48

class UAIFwBehaviorTree : public UAIFwNodeBasedAsset
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UAIFwBlackboardBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetValueAsVectorArray(FAIFwBlackboard& Blackboard, FString KeyName, const TArray<FVector>& VectorArray);
    void SetValueAsVector(FAIFwBlackboard& Blackboard, FString KeyName, FVector VectorValue);
    void SetValueAsString(FAIFwBlackboard& Blackboard, FString KeyName, FString StringValue);
    void SetValueAsObjectArray(FAIFwBlackboard& Blackboard, FString KeyName, const TArray<class UObject*>& ObjectArray);
    void SetValueAsObject(FAIFwBlackboard& Blackboard, FString KeyName, class UObject* ObjectValue);
    void SetValueAsName(FAIFwBlackboard& Blackboard, FString KeyName, FName NameValue);
    void SetValueAsInt(FAIFwBlackboard& Blackboard, FString KeyName, int32 IntValue);
    void SetValueAsFloat(FAIFwBlackboard& Blackboard, FString KeyName, float FloatValue);
    void SetValueAsClass(FAIFwBlackboard& Blackboard, FString KeyName, UClass* ClassValue);
    void SetValueAsBool(FAIFwBlackboard& Blackboard, FString KeyName, bool BoolValue);
    bool IsValidKey(const FAIFwBlackboard& Blackboard, FString KeyName);
    TArray<FVector> GetValueAsVectorArray(const FAIFwBlackboard& Blackboard, FString KeyName);
    FVector GetValueAsVector(const FAIFwBlackboard& Blackboard, FString KeyName);
    FString GetValueAsString(const FAIFwBlackboard& Blackboard, FString KeyName);
    TArray<class UObject*> GetValueAsObjectArray(const FAIFwBlackboard& Blackboard, FString KeyName);
    class UObject* GetValueAsObject(const FAIFwBlackboard& Blackboard, FString KeyName);
    FName GetValueAsName(const FAIFwBlackboard& Blackboard, FString KeyName);
    int32 GetValueAsInt(const FAIFwBlackboard& Blackboard, FString KeyName);
    float GetValueAsFloat(const FAIFwBlackboard& Blackboard, FString KeyName);
    UClass* GetValueAsClass(const FAIFwBlackboard& Blackboard, FString KeyName);
    bool GetValueAsBool(const FAIFwBlackboard& Blackboard, FString KeyName);
    void ClearValue(FAIFwBlackboard& Blackboard, FString KeyName);
}; // Size: 0x28

class UAIFwBlackboardComponent : public UActorComponent
{
    char padding_0[0xE0];                                                             // 0x0000 (size: 0x0)

    void SetValueAsVectorArray(FString KeyName, const TArray<FVector>& VectorArray);
    void SetValueAsVector(FString KeyName, FVector VectorValue);
    void SetValueAsString(FString KeyName, FString StringValue);
    void SetValueAsRotator(FString KeyName, FRotator VectorValue);
    void SetValueAsObjectArray(FString KeyName, const TArray<class UObject*>& ObjectArray);
    void SetValueAsObject(FString KeyName, class UObject* ObjectValue);
    void SetValueAsName(FString KeyName, FName NameValue);
    void SetValueAsIntArray(FString KeyName, const TArray<int32>& IntArray);
    void SetValueAsInt(FString KeyName, int32 IntValue);
    void SetValueAsFloat(FString KeyName, float FloatValue);
    void SetValueAsEnum(FString KeyName, uint8 EnumValue);
    void SetValueAsClass(FString KeyName, UClass* ClassValue);
    void SetValueAsBool(FString KeyName, bool BoolValue);
    bool IsValidKey(FString KeyName);
    TArray<FVector> GetValueAsVectorArray(FString KeyName);
    FVector GetValueAsVector(FString KeyName);
    FString GetValueAsString(FString KeyName);
    FRotator GetValueAsRotator(FString KeyName);
    FRotator GetValueAsRotation(FString KeyName);
    TArray<class UObject*> GetValueAsObjectArray(FString KeyName);
    class UObject* GetValueAsObject(FString KeyName);
    FName GetValueAsName(FString KeyName);
    FVector GetValueAsLocation(FString KeyName);
    TArray<int32> GetValueAsIntArray(FString KeyName);
    int32 GetValueAsInt(FString KeyName);
    float GetValueAsFloat(FString KeyName);
    uint8 GetValueAsEnum(FString KeyName);
    UClass* GetValueAsClass(FString KeyName);
    bool GetValueAsBool(FString KeyName);
    void ClearValue(FString KeyName);
    void BindToUE4Blackboard(FString KeyName, class UBlackboardComponent* OtherBlackboard, const FName& OtherKeyName);
}; // Size: 0xE0

class UAIFwBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool RunAIFwBehaviorTree(class AActor* Target, class UAIFwBehaviorTree* BehaviorTree, bool bLooping);
    FAIFwMultipleClothoidSegment MultipleClothoidInterpRad(const FVector2D& StartPosition, float StartAngle, float StartCurvature, const FVector2D& EndPosition, float EndAngle, float EndCurvature);
    FAIFwMultipleClothoidSegment MultipleClothoidInterp(const FVector2D& StartPosition, float StartAngle, float StartCurvature, const FVector2D& EndPosition, float EndAngle, float EndCurvature);
    int32 Hash32(FString String);
    FVector2D GetMultipleClothoidLocationAtTime(const FAIFwMultipleClothoidSegment& Segment, float Time);
    float GetFactionRelation(class AActor* From, class AActor* To);
    FVector2D GetClothoidLocationAtTime(const FAIFwClothoidSegment& Segment, float Time);
    class UAIFwBlackboardComponent* GetAIFwBlackboard(class AActor* Target);
    class AAIFwAIDirector* GetAIDirector(class UObject* WorldContextObject);
    FAIFwClothoidSegment ClothoidInterpRad(const FVector2D& StartPosition, float StartAngle, const FVector2D& EndPosition, float EndAngle);
    FAIFwClothoidSegment ClothoidInterp(const FVector2D& StartPosition, float StartAngle, const FVector2D& EndPosition, float EndAngle);
}; // Size: 0x28

class UAIFwEntityComponent : public UActorComponent
{
    char padding_0[0xC0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xC0

class UAIFwFactionComponent : public UActorComponent
{
    FString FactionNameString;                                                        // 0x00C8 (size: 0x10)
    FName FactionName;                                                                // 0x00D8 (size: 0x8)

    void OnRep_FactionNameString();
}; // Size: 0xF8

class UAIFwHTNBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    class UAIFwHTNTempOp_SometimeBefore* HTNSometimeBefore(class UAIFwHTNOperator* OperatorA, class UAIFwHTNOperator* OperatorB);
    class UAIFwHTNTempOp_SometimeAfter* HTNSometimeAfter(class UAIFwHTNOperator* OperatorA, class UAIFwHTNOperator* OperatorB);
    class UAIFwHTNTempOp_Sometime* HTNSometime(class UAIFwHTNOperator* Operator);
    class UAIFwHTNOperator_Occur* HTNOccur(FString TaskName);
    class UAIFwHTNOperator_Not* HTNNot(class UAIFwHTNOperator* Operator);
    class UAIFwHTNOperator_Apply* HTNApply(FString TaskName, FString MethodName);
    class UAIFwHTNTempOp_AlwaysBefore* HTNAlwaysBefore(class UAIFwHTNOperator* OperatorA, class UAIFwHTNOperator* OperatorB);
    class UAIFwHTNTempOp_AlwaysAfter* HTNAlwaysAfter(class UAIFwHTNOperator* OperatorA, class UAIFwHTNOperator* OperatorB);
    class UAIFwHTNTempOp_Always* HTNAlways(class UAIFwHTNOperator* Operator);
}; // Size: 0x28

class UAIFwHTNDomain : public UAIFwNodeBasedAsset
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UAIFwHTNNode : public UAIFwNodeBase
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwHTNOperator : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UAIFwHTNOperator_Apply : public UAIFwHTNOperator
{
    char padding_0[0x48];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x48

class UAIFwHTNOperator_Not : public UAIFwHTNOperator
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwHTNOperator_Occur : public UAIFwHTNOperator
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x38

class UAIFwHTNPlanningComponent : public UActorComponent
{
    class UAIFwHTNState* State;                                                       // 0x0120 (size: 0x8)
    TArray<class UAIFwHTNDomain*> Domains;                                            // 0x0128 (size: 0x10)

    void SetName(const FAIFwHTNMethod& Method, FString Name);
    bool IsValidTask(const FAIFwHTNTask& Task);
    bool IsValidMethod(const FAIFwHTNMethod& Method);
    FAIFwHTNTask FindTask(FString Name);
    FAIFwHTNMethod FindMethodByName(const FAIFwHTNTask& Task, FString Name);
    FAIFwHTNMethod FindMethod(FString TaskName, FString MethodName);
    void AppendDomain(class UAIFwHTNDomain* NewDomain, bool bOverrideCompound);
    void AddTrajectoryPreference(FString Name, class UAIFwHTNTemporalModalOperator* TemporalOperator, bool bHardConstraint);
    void AddPreconditionPreference(FString Name, FString TaskName, FString MethodName, class UAIFwHTNOperator* Operator, bool bHardConstraint);
    void AddMetricWeight(FString PreferenceName, float Weight);
    void AddGoalPreference(FString Name, class UAIFwHTNOperator* Operator, bool bHardConstraint);
}; // Size: 0x1B8

class UAIFwHTNState : public UObject
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)

    void SetValueAsInt(FString KeyName, int32 IntValue);
    void SetValueAsFloat(FString KeyName, float FloatValue);
    void SetValueAsEnum(FString KeyName, uint8 EnumValue);
    void SetValueAsBool(FString KeyName, bool BoolValue);
    bool IsValidKey(FString KeyName);
    int32 GetValueAsInt(FString KeyName);
    float GetValueAsFloat(FString KeyName);
    uint8 GetValueAsEnum(FString KeyName);
    bool GetValueAsBool(FString KeyName);
}; // Size: 0x38

class UAIFwHTNTempOp_Always : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* Operator;                                                 // 0x0028 (size: 0x8)

}; // Size: 0x30

class UAIFwHTNTempOp_AlwaysAfter : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* OperatorA;                                                // 0x0028 (size: 0x8)
    class UAIFwHTNOperator* OperatorB;                                                // 0x0030 (size: 0x8)

}; // Size: 0x38

class UAIFwHTNTempOp_AlwaysBefore : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* OperatorA;                                                // 0x0028 (size: 0x8)
    class UAIFwHTNOperator* OperatorB;                                                // 0x0030 (size: 0x8)

}; // Size: 0x38

class UAIFwHTNTempOp_Sometime : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* Operator;                                                 // 0x0028 (size: 0x8)

}; // Size: 0x30

class UAIFwHTNTempOp_SometimeAfter : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* OperatorA;                                                // 0x0028 (size: 0x8)
    class UAIFwHTNOperator* OperatorB;                                                // 0x0030 (size: 0x8)

}; // Size: 0x38

class UAIFwHTNTempOp_SometimeBefore : public UAIFwHTNTemporalModalOperator
{
    class UAIFwHTNOperator* OperatorA;                                                // 0x0028 (size: 0x8)
    class UAIFwHTNOperator* OperatorB;                                                // 0x0030 (size: 0x8)

}; // Size: 0x38

class UAIFwHTNTemporalModalOperator : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UAIFwHierarchyComponent : public UActorComponent
{
    class UAIFwHierarchyComponent* Parent;                                            // 0x00B8 (size: 0x8)
    TArray<class UAIFwHierarchyComponent*> Children;                                  // 0x00C0 (size: 0x10)

    void SendMessageToSiblings(FName Message, class UObject* MessageSource, bool bSuccess);
    void SendMessageToParent(FName Message, class UObject* MessageSource, bool bSuccess);
    void SendMessageToChildren(FName Message, class UObject* MessageSource, bool bSuccess, class AActor* IgnoreActor);
    bool Remove(class AActor* Actor);
    bool Add(class AActor* Actor);
}; // Size: 0xD0

class UAIFwInfluenceMapLayer : public UObject
{
    class AAIFwInfluenceMapLayout* Layout;                                            // 0x0030 (size: 0x8)

    void RegisterSource(class AActor* Actor, float Radius, float Value);
}; // Size: 0xB8

class UAIFwInfluenceMapLayoutRenderingComponent : public UPrimitiveComponent
{
    char padding_0[0x470];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x470

class UAIFwInfluenceMapManager : public UObject
{
    TMap<class FString, class UAIFwInfluenceMapLayer*> Layers;                        // 0x0038 (size: 0x50)

    class UAIFwInfluenceMapLayer* CreateOrGetLayer(class UObject* WorldContextObject, FString Name);
}; // Size: 0xD8

class UAIFwNavVolumeRenderingComponent : public UPrimitiveComponent
{
    char padding_0[0x480];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x480

class UAIFwNavigationSystem : public UNavigationSystemV1
{
    char padding_0[0x15F0];                                                           // 0x0000 (size: 0x0)
}; // Size: 0x15F0

class UAIFwNodeBase : public UObject
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwNodeBasedAsset : public UObject
{
    int32 DataType;                                                                   // 0x0028 (size: 0x4)

}; // Size: 0x30

class UAIFwPTCriterionActorsOfClass : public UAIFwPTCriterionNode
{
    TSubclassOf<class AActor> ActorClass;                                             // 0x0040 (size: 0x8)

}; // Size: 0x48

class UAIFwPTCriterionNode : public UAIFwNodeBase
{
    EPTCriterionSlot CriterionSlot;                                                   // 0x0030 (size: 0x1)

}; // Size: 0x40

class UAIFwPTCriterionSquadMember : public UAIFwPTCriterionNode
{
    bool IgnoreSelf;                                                                  // 0x0040 (size: 0x1)

}; // Size: 0x48

class UAIFwPTCriterionSquadMemberDestinations : public UAIFwPTCriterionNode
{
    bool IgnoreSelf;                                                                  // 0x0040 (size: 0x1)

}; // Size: 0x48

class UAIFwPTEvaluationInfluence : public UAIFwPTEvaluationNodeUseCriterion
{
    FString LayerName;                                                                // 0x0050 (size: 0x10)
    float MinValue;                                                                   // 0x0060 (size: 0x4)
    float MaxValue;                                                                   // 0x0064 (size: 0x4)

}; // Size: 0x68

class UAIFwPTEvaluationNavMeshRaycast : public UAIFwPTEvaluationNodeUseCriterion
{
    TSubclassOf<class UNavigationQueryFilter> FilterClass;                            // 0x0050 (size: 0x8)
    bool Acceptance;                                                                  // 0x0058 (size: 0x1)

}; // Size: 0x60

class UAIFwPTEvaluationNode : public UAIFwNodeBase
{
    bool Filter;                                                                      // 0x0030 (size: 0x1)
    bool Score;                                                                       // 0x0031 (size: 0x1)
    EPTEvalOperation AdditionalOperation;                                             // 0x0032 (size: 0x1)
    char padding_0[0x1];                                                              // 0x0033 (size: 0x1)
    float AdditionalScale;                                                            // 0x0034 (size: 0x4)

}; // Size: 0x48

class UAIFwPTEvaluationNodeUseCriterion : public UAIFwPTEvaluationNode
{
    bool AllPath;                                                                     // 0x0048 (size: 0x1)
    EPTEvalScoreType ScoreType;                                                       // 0x0049 (size: 0x1)

}; // Size: 0x50

class UAIFwPTEvaluationPathfinding : public UAIFwPTEvaluationNodeUseCriterion
{
    EAIFwPTEvalPathfindingMode Mode;                                                  // 0x0050 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0051 (size: 0x7)
    TSubclassOf<class UNavigationQueryFilter> FilterClass;                            // 0x0058 (size: 0x8)
    bool PathFromCriterion;                                                           // 0x0060 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0061 (size: 0x3)
    float MinValue;                                                                   // 0x0064 (size: 0x4)
    float MaxValue;                                                                   // 0x0068 (size: 0x4)
    bool Acceptance;                                                                  // 0x006C (size: 0x1)

}; // Size: 0x70

class UAIFwPTEvaluationTrace : public UAIFwPTEvaluationNodeUseCriterion
{
    float Extent;                                                                     // 0x0050 (size: 0x4)
    bool TraceFromCriterion;                                                          // 0x0054 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0055 (size: 0x3)
    float ItemHeightOffset;                                                           // 0x0058 (size: 0x4)
    float CriterionHeightOffset;                                                      // 0x005C (size: 0x4)
    bool Acceptance;                                                                  // 0x0060 (size: 0x1)

}; // Size: 0x68

class UAIFwPTGenerationNode : public UAIFwNodeBase
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UAIFwPTGenerationPointsAlongPath : public UAIFwPTGenerationNode
{
    EPTCriterionSlot PathStart;                                                       // 0x0040 (size: 0x1)
    EPTCriterionSlot PathGoal;                                                        // 0x0041 (size: 0x1)
    char padding_0[0x6];                                                              // 0x0042 (size: 0x6)
    FAIFwBTNodePropertyFloat Offset;                                                  // 0x0048 (size: 0x18)
    FAIFwBTNodePropertyFloat StepSize;                                                // 0x0060 (size: 0x18)

}; // Size: 0x78

class UAIFwPTModificationNode : public UAIFwNodeBase
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwPTModificationProjectOnGeometry : public UAIFwPTModificationNode
{
    FAIFwBTNodePropertyFloat Extent;                                                  // 0x0030 (size: 0x18)
    FAIFwBTNodePropertyFloat ProjectDown;                                             // 0x0048 (size: 0x18)
    FAIFwBTNodePropertyFloat ProjectUp;                                               // 0x0060 (size: 0x18)
    FAIFwBTNodePropertyFloat PostProjectionVerticalOffset;                            // 0x0078 (size: 0x18)

}; // Size: 0x90

class UAIFwPTModificationProjectOnNavMesh : public UAIFwPTModificationNode
{
    FAIFwBTNodePropertyFloat Extent;                                                  // 0x0030 (size: 0x18)
    FAIFwBTNodePropertyFloat ProjectDown;                                             // 0x0048 (size: 0x18)
    FAIFwBTNodePropertyFloat ProjectUp;                                               // 0x0060 (size: 0x18)
    FAIFwBTNodePropertyFloat PostProjectionVerticalOffset;                            // 0x0078 (size: 0x18)

}; // Size: 0x90

class UAIFwPTSenseFilterNode : public UAIFwNodeBase
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwPTSenseNode : public UAIFwNodeBase
{
    bool IsEnabledAtStart;                                                            // 0x0030 (size: 0x1)
    bool IsDetectHostile;                                                             // 0x0031 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0032 (size: 0x2)
    float MinHostileLevel;                                                            // 0x0034 (size: 0x4)
    bool IsDetectNeutral;                                                             // 0x0038 (size: 0x1)
    bool IsDetectFriendly;                                                            // 0x0039 (size: 0x1)
    char padding_1[0x2];                                                              // 0x003A (size: 0x2)
    float MinFriendlyLevel;                                                           // 0x003C (size: 0x4)
    float MaxAwareness;                                                               // 0x0040 (size: 0x4)
    float AttackTime;                                                                 // 0x0044 (size: 0x4)
    float ReleaseTime;                                                                // 0x0048 (size: 0x4)
    char padding_2[0x4];                                                              // 0x004C (size: 0x4)
    TArray<FString> SenseTags;                                                        // 0x0050 (size: 0x10)

}; // Size: 0x60

class UAIFwPTSenseSight : public UAIFwPTSenseNode
{
    FAIFwBTNodePropertyFloat SightRange;                                              // 0x0060 (size: 0x18)
    FAIFwBTNodePropertyFloat LoseSightRange;                                          // 0x0078 (size: 0x18)
    FAIFwBTNodePropertyFloat VisionAngle;                                             // 0x0090 (size: 0x18)

}; // Size: 0xA8

class UAIFwPerceptionComponent : public UActorComponent
{
    TArray<FAIFwParameterizedBTRequest> PerceptionTrees;                              // 0x00B8 (size: 0x10)

    void SetSenseEnabled(FString Tag, bool bEnabled);
    int32 GetSensedActorsCount();
    TArray<class AActor*> GetSensedActors(FString Tag);
    void ClearSensedActors();
}; // Size: 0xE0

class UAIFwPerceptionTreeInstanceBlueprintWrapper : public UObject
{
    FAIFwPerceptionTreeInstanceBlueprintWrapperOnFinishedDelegate OnFinishedDelegate; // 0x0058 (size: 0x10)
    void AIFwOnPerceptionTreeFinishedWrapper(class UAIFwPerceptionTreeInstanceBlueprintWrapper* QueryInstance);

    class UAIFwPerceptionTreeInstanceBlueprintWrapper* RunPerceptionTree(class AActor* Target, class UAIFwBehaviorTree* Template);
    class UAIFwPerceptionTreeInstanceBlueprintWrapper* RunInstantPerceptionTree(class AActor* Target, class UAIFwBehaviorTree* Template);
    class UAIFwPerceptionTreeInstanceBlueprintWrapper* RunInstantParameterizedPerceptionTreeRandom(class AActor* Target, const FAIFwParameterizedBTRequest& Query, int32 MaxCount);
    class UAIFwPerceptionTreeInstanceBlueprintWrapper* RunInstantParameterizedPerceptionTree(class AActor* Target, const FAIFwParameterizedBTRequest& Query, int32 MaxCount);
    TArray<FVector> GetResultsAsLocations();
    TArray<class AActor*> GetResultsAsActors();
    int32 GetResultCount();
    void AIFwOnPerceptionTreeFinishedWrapper__DelegateSignature(class UAIFwPerceptionTreeInstanceBlueprintWrapper* QueryInstance);
}; // Size: 0x68

class UAIFwReactiveComponent : public UActorComponent
{
    TArray<class TSubclassOf<UAIFwReactiveSkill>> SkillClasses;                       // 0x00B8 (size: 0x10)
    TArray<class UAIFwReactiveSkill*> Skills;                                         // 0x00C8 (size: 0x10)

    void AddSkill(TSubclassOf<class UAIFwReactiveSkill> Skill);
}; // Size: 0xD8

class UAIFwReactiveSkill : public UObject
{
    class UAIFwReactiveComponent* OwnerComp;                                          // 0x0030 (size: 0x8)
    class AAIController* OwnerAI;                                                     // 0x0038 (size: 0x8)
    TArray<FName> SkillTags;                                                          // 0x0040 (size: 0x10)
    char padding_0[0x10];                                                             // 0x0050 (size: 0x10)
    uint8 bAutoActivate;                                                              // 0x0060 (size: 0x1)

    void RunAITask(class UAITask* Task);
    class UAITask* NewAITask(TSubclassOf<class UAITask> TaskClass, EAITaskPriority InPriority);
}; // Size: 0x68

class UAIFwReactiveSkill_Message : public UAIFwReactiveSkill
{
    FName Message;                                                                    // 0x0068 (size: 0x8)
    float Delay;                                                                      // 0x0070 (size: 0x4)
    uint8 bAllowMultipleRunning;                                                      // 0x0074 (size: 0x1)

    void ReceivePulse(class UObject* Sender, bool bSuccess);
}; // Size: 0x90

class UAIFwReactiveSkill_PerceptionTree : public UAIFwReactiveSkill
{
    class UAIFwBehaviorTree* PerceptionTree;                                          // 0x0068 (size: 0x8)
    float Delay;                                                                      // 0x0070 (size: 0x4)
    uint8 bAllowMultipleRunning;                                                      // 0x0074 (size: 0x1)

    void ReceiveOnPerceive();
}; // Size: 0xA8

class UAIFwReactiveSkill_SensedTarget : public UAIFwReactiveSkill
{
    float Awareness;                                                                  // 0x0068 (size: 0x4)
    float Delay;                                                                      // 0x006C (size: 0x4)
    uint8 bAllowMultipleRunning;                                                      // 0x0070 (size: 0x1)

    void ReceiveOnSensed(class AActor* Target);
    void ReceiveOnLost(class AActor* Target);
}; // Size: 0x90

class UAIFwReactiveSkill_TakeDamage : public UAIFwReactiveSkill
{
    float Delay;                                                                      // 0x0068 (size: 0x4)
    uint8 bAllowMultipleRunning;                                                      // 0x006C (size: 0x1)

    void TakePointDamageImpl(class AActor* DamagedActor, float Damage, class AController* InstigatedBy, FVector HitLocation, class UPrimitiveComponent* HitComponent, FName BoneName, FVector ShotFromDirection, const class UDamageType* DamageType, class AActor* DamageCauser);
    void TakeAnyDamageImpl(class AActor* DamagedActor, float Damage, const class UDamageType* DamageType, class AController* InstigatedBy, class AActor* DamageCauser);
    void ReceivePointDamage(float Damage, const class UDamageType* DamageType, FVector HitLocation, class UPrimitiveComponent* HitComponent, FName BoneName, FVector ShotFromDirection, class AController* InstigatedBy, class AActor* DamageCauser);
    void ReceiveAnyDamage(float Damage, const class UDamageType* DamageType, class AController* InstigatedBy, class AActor* DamageCauser);
}; // Size: 0x88

class UAIFwRuntimeSettings : public UObject
{
    FSoftClassPath DefaultAIDirectorClass;                                            // 0x0028 (size: 0x18)
    TArray<FAIFwFactionSettings> Factions;                                            // 0x0040 (size: 0x10)
    TArray<FAIFwSmartObjectUserSettings> SmartObjectUsers;                            // 0x0050 (size: 0x10)
    FNavAgentSelector BaseNavMesh;                                                    // 0x0060 (size: 0x4)
    float CellSize;                                                                   // 0x0064 (size: 0x4)
    float CellHeight;                                                                 // 0x0068 (size: 0x4)
    char padding_0[0x4];                                                              // 0x006C (size: 0x4)
    class UMaterialInterface* InfluenceMapLayerMaterial;                              // 0x0070 (size: 0x8)
    FSoftObjectPath InfluenceMapLayerMaterialName;                                    // 0x0078 (size: 0x18)

    void OnNavigationGenerationFinished(class ANavigationData* NavData);
}; // Size: 0x90

class UAIFwSensorySystem : public UObject
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UAIFwSmartObjectAction : public UObject
{
    class UAIFwSmartObjectComponent* OwnerComp;                                       // 0x0028 (size: 0x8)

}; // Size: 0x40

class UAIFwSmartObjectActionUE4 : public UAIFwSmartObjectAction
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UAIFwSmartObjectAction_BehaviorTree : public UAIFwSmartObjectAction
{
    FAIFwParameterizedBTRequest BehaviorTree;                                         // 0x0040 (size: 0x18)

}; // Size: 0x58

class UAIFwSmartObjectComponent : public UActorComponent
{
    TArray<FAIFwSmartObjectEvent> Events;                                             // 0x00B8 (size: 0x10)
    uint8 bUseCapacity;                                                               // 0x00C8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00C9 (size: 0x3)
    uint32 Capacity;                                                                  // 0x00CC (size: 0x4)

    bool Use(class AActor* User, FString Usage, int32 EventId);
    int32 FindEvent(class AActor* User, FString Usage);
}; // Size: 0xD8

class UAIFwSmartObjectCondition : public UObject
{
    class UAIFwSmartObjectComponent* OwnerComp;                                       // 0x0028 (size: 0x8)

}; // Size: 0x40

class UAIFwSmartObjectUserComponent : public UActorComponent
{
    FAIFwSmartObjectUserSelector UserType;                                            // 0x00B8 (size: 0x4)

}; // Size: 0xC0

class UAIFwStimuliSourceComponent : public UActorComponent
{
    uint8 bVisible;                                                                   // 0x00C8 (size: 0x1)

    void SetVisibility(bool bNewVisible);
}; // Size: 0xD0

class UAIFwSubsystem : public UTickableWorldSubsystem
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class UAIFwSystem : public UObject
{
    class UAIFwSensorySystem* SensorySystem;                                          // 0x0090 (size: 0x8)
    class UAIFwInfluenceMapManager* InfluenceMapManager;                              // 0x0098 (size: 0x8)
    class AAIFwAIDirector* AIDirector;                                                // 0x00A0 (size: 0x8)

    void OnEntityEndPlay(class AActor* Actor, TEnumAsByte<EEndPlayReason::Type> EndPlayReason);
    void OnEntityDestroyed(class AActor* Actor);
}; // Size: 0xB0

#endif
