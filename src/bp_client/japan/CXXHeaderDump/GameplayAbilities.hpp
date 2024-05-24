#ifndef UE4SS_SDK_GameplayAbilities_HPP
#define UE4SS_SDK_GameplayAbilities_HPP

#include "GameplayAbilities_enums.hpp"

struct FAbilityEndedData
{
    class UGameplayAbility* AbilityThatEnded;                                         // 0x0000 (size: 0x8)
    FGameplayAbilitySpecHandle AbilitySpecHandle;                                     // 0x0008 (size: 0x4)
    bool bReplicateEndAbility;                                                        // 0x000C (size: 0x1)
    bool bWasCancelled;                                                               // 0x000D (size: 0x1)

}; // Size: 0x10

struct FAbilityTaskDebugMessage
{
    class UGameplayTask* FromTask;                                                    // 0x0000 (size: 0x8)
    FString Message;                                                                  // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FAbilityTriggerData
{
    FGameplayTag TriggerTag;                                                          // 0x0000 (size: 0x8)
    TEnumAsByte<EGameplayAbilityTriggerSource::Type> TriggerSource;                   // 0x0008 (size: 0x1)

}; // Size: 0xC

struct FActiveGameplayCue : public FFastArraySerializerItem
{
    FGameplayTag GameplayCueTag;                                                      // 0x000C (size: 0x8)
    char padding_0[0x4];                                                              // 0x0014 (size: 0x4)
    FPredictionKey PredictionKey;                                                     // 0x0018 (size: 0x10)
    FGameplayCueParameters Parameters;                                                // 0x0028 (size: 0xC0)
    bool bPredictivelyRemoved;                                                        // 0x00E8 (size: 0x1)

}; // Size: 0xF0

struct FActiveGameplayCueContainer : public FFastArraySerializer
{
    TArray<FActiveGameplayCue> GameplayCues;                                          // 0x0108 (size: 0x10)
    char padding_0[0x8];                                                              // 0x0118 (size: 0x8)
    class UAbilitySystemComponent* Owner;                                             // 0x0120 (size: 0x8)

}; // Size: 0x128

struct FActiveGameplayEffect : public FFastArraySerializerItem
{
    FGameplayEffectSpec Spec;                                                         // 0x0018 (size: 0x298)
    FPredictionKey PredictionKey;                                                     // 0x02B0 (size: 0x10)
    float StartServerWorldTime;                                                       // 0x02C0 (size: 0x4)
    float CachedStartServerWorldTime;                                                 // 0x02C4 (size: 0x4)
    float StartWorldTime;                                                             // 0x02C8 (size: 0x4)
    bool bIsInhibited;                                                                // 0x02CC (size: 0x1)

}; // Size: 0x368

struct FActiveGameplayEffectHandle
{
    int32 Handle;                                                                     // 0x0000 (size: 0x4)
    bool bPassedFiltersAndWasExecuted;                                                // 0x0004 (size: 0x1)

}; // Size: 0x8

struct FActiveGameplayEffectQuery
{
    char padding_0[0x88];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x88

struct FActiveGameplayEffectsContainer : public FFastArraySerializer
{
    TArray<FActiveGameplayEffect> GameplayEffects_Internal;                           // 0x0130 (size: 0x10)
    char padding_0[0x310];                                                            // 0x0140 (size: 0x310)
    TArray<class UGameplayEffect*> ApplicationImmunityQueryEffects;                   // 0x0450 (size: 0x10)

}; // Size: 0x478

struct FAttributeBasedFloat
{
    FScalableFloat Coefficient;                                                       // 0x0000 (size: 0x28)
    FScalableFloat PreMultiplyAdditiveValue;                                          // 0x0028 (size: 0x28)
    FScalableFloat PostMultiplyAdditiveValue;                                         // 0x0050 (size: 0x28)
    FGameplayEffectAttributeCaptureDefinition BackingAttribute;                       // 0x0078 (size: 0x40)
    FCurveTableRowHandle AttributeCurve;                                              // 0x00B8 (size: 0x10)
    EAttributeBasedFloatCalculationType AttributeCalculationType;                     // 0x00C8 (size: 0x1)
    EGameplayModEvaluationChannel FinalChannel;                                       // 0x00C9 (size: 0x1)
    char padding_0[0x6];                                                              // 0x00CA (size: 0x6)
    FGameplayTagContainer SourceTagFilter;                                            // 0x00D0 (size: 0x20)
    FGameplayTagContainer TargetTagFilter;                                            // 0x00F0 (size: 0x20)

}; // Size: 0x110

struct FAttributeDefaults
{
    TSubclassOf<class UAttributeSet> Attributes;                                      // 0x0000 (size: 0x8)
    class UDataTable* DefaultStartingTable;                                           // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FAttributeMetaData : public FTableRowBase
{
    float BaseValue;                                                                  // 0x0008 (size: 0x4)
    float MinValue;                                                                   // 0x000C (size: 0x4)
    float MaxValue;                                                                   // 0x0010 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0014 (size: 0x4)
    FString DerivedAttributeInfo;                                                     // 0x0018 (size: 0x10)
    bool bCanStack;                                                                   // 0x0028 (size: 0x1)

}; // Size: 0x30

struct FConditionalGameplayEffect
{
    TSubclassOf<class UGameplayEffect> EffectClass;                                   // 0x0000 (size: 0x8)
    FGameplayTagContainer RequiredSourceTags;                                         // 0x0008 (size: 0x20)

}; // Size: 0x28

struct FCustomCalculationBasedFloat
{
    TSubclassOf<class UGameplayModMagnitudeCalculation> CalculationClassMagnitude;    // 0x0000 (size: 0x8)
    FScalableFloat Coefficient;                                                       // 0x0008 (size: 0x28)
    FScalableFloat PreMultiplyAdditiveValue;                                          // 0x0030 (size: 0x28)
    FScalableFloat PostMultiplyAdditiveValue;                                         // 0x0058 (size: 0x28)
    FCurveTableRowHandle FinalLookupCurve;                                            // 0x0080 (size: 0x10)

}; // Size: 0x90

struct FGameplayAbilityActivationInfo
{
    TEnumAsByte<EGameplayAbilityActivationMode::Type> ActivationMode;                 // 0x0000 (size: 0x1)
    uint8 bCanBeEndedByOtherInstance;                                                 // 0x0001 (size: 0x1)
    char padding_0[0x6];                                                              // 0x0002 (size: 0x6)
    FPredictionKey PredictionKeyWhenActivated;                                        // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FGameplayAbilityActorInfo
{
    TWeakObjectPtr<class AActor> OwnerActor;                                          // 0x0008 (size: 0x8)
    TWeakObjectPtr<class AActor> AvatarActor;                                         // 0x0010 (size: 0x8)
    TWeakObjectPtr<class APlayerController> PlayerController;                         // 0x0018 (size: 0x8)
    TWeakObjectPtr<class UAbilitySystemComponent> AbilitySystemComponent;             // 0x0020 (size: 0x8)
    TWeakObjectPtr<class USkeletalMeshComponent> SkeletalMeshComponent;               // 0x0028 (size: 0x8)
    TWeakObjectPtr<class UAnimInstance> AnimInstance;                                 // 0x0030 (size: 0x8)
    TWeakObjectPtr<class UMovementComponent> MovementComponent;                       // 0x0038 (size: 0x8)
    FName AffectedAnimInstanceTag;                                                    // 0x0040 (size: 0x8)

}; // Size: 0x48

struct FGameplayAbilityBindInfo
{
    TEnumAsByte<EGameplayAbilityInputBinds::Type> Command;                            // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    TSubclassOf<class UGameplayAbility> GameplayAbilityClass;                         // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FGameplayAbilityLocalAnimMontage
{
    class UAnimMontage* AnimMontage;                                                  // 0x0000 (size: 0x8)
    bool PlayBit;                                                                     // 0x0008 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0009 (size: 0x7)
    FPredictionKey PredictionKey;                                                     // 0x0010 (size: 0x10)
    class UGameplayAbility* AnimatingAbility;                                         // 0x0020 (size: 0x8)

}; // Size: 0x28

struct FGameplayAbilityRepAnimMontage
{
    class UAnimMontage* AnimMontage;                                                  // 0x0000 (size: 0x8)
    float PlayRate;                                                                   // 0x0008 (size: 0x4)
    float Position;                                                                   // 0x000C (size: 0x4)
    float BlendTime;                                                                  // 0x0010 (size: 0x4)
    uint8 NextSectionID;                                                              // 0x0014 (size: 0x1)
    uint8 bRepPosition;                                                               // 0x0015 (size: 0x1)
    uint8 IsStopped;                                                                  // 0x0015 (size: 0x1)
    uint8 ForcePlayBit;                                                               // 0x0015 (size: 0x1)
    uint8 SkipPositionCorrection;                                                     // 0x0015 (size: 0x1)
    uint8 bSkipPlayRate;                                                              // 0x0015 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0016 (size: 0x2)
    FPredictionKey PredictionKey;                                                     // 0x0018 (size: 0x10)
    uint8 SectionIdToPlay;                                                            // 0x0028 (size: 0x1)

}; // Size: 0x30

struct FGameplayAbilitySpec : public FFastArraySerializerItem
{
    FGameplayAbilitySpecHandle Handle;                                                // 0x000C (size: 0x4)
    class UGameplayAbility* Ability;                                                  // 0x0010 (size: 0x8)
    int32 Level;                                                                      // 0x0018 (size: 0x4)
    int32 InputID;                                                                    // 0x001C (size: 0x4)
    class UObject* SourceObject;                                                      // 0x0020 (size: 0x8)
    uint8 ActiveCount;                                                                // 0x0028 (size: 0x1)
    uint8 InputPressed;                                                               // 0x0029 (size: 0x1)
    uint8 RemoveAfterActivation;                                                      // 0x0029 (size: 0x1)
    uint8 PendingRemove;                                                              // 0x0029 (size: 0x1)
    uint8 bActivateOnce;                                                              // 0x0029 (size: 0x1)
    char padding_0[0x6];                                                              // 0x002A (size: 0x6)
    FGameplayAbilityActivationInfo ActivationInfo;                                    // 0x0030 (size: 0x18)
    FGameplayTagContainer DynamicAbilityTags;                                         // 0x0048 (size: 0x20)
    TArray<class UGameplayAbility*> NonReplicatedInstances;                           // 0x0068 (size: 0x10)
    TArray<class UGameplayAbility*> ReplicatedInstances;                              // 0x0078 (size: 0x10)
    FActiveGameplayEffectHandle GameplayEffectHandle;                                 // 0x0088 (size: 0x8)

}; // Size: 0xE0

struct FGameplayAbilitySpecContainer : public FFastArraySerializer
{
    TArray<FGameplayAbilitySpec> Items;                                               // 0x0108 (size: 0x10)
    class UAbilitySystemComponent* Owner;                                             // 0x0118 (size: 0x8)

}; // Size: 0x120

struct FGameplayAbilitySpecDef
{
    TSubclassOf<class UGameplayAbility> Ability;                                      // 0x0000 (size: 0x8)
    FScalableFloat LevelScalableFloat;                                                // 0x0008 (size: 0x28)
    int32 InputID;                                                                    // 0x0030 (size: 0x4)
    EGameplayEffectGrantedAbilityRemovePolicy RemovalPolicy;                          // 0x0034 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0035 (size: 0x3)
    class UObject* SourceObject;                                                      // 0x0038 (size: 0x8)
    char padding_1[0x50];                                                             // 0x0040 (size: 0x50)
    FGameplayAbilitySpecHandle AssignedHandle;                                        // 0x0090 (size: 0x4)

}; // Size: 0x98

struct FGameplayAbilitySpecHandle
{
    int32 Handle;                                                                     // 0x0000 (size: 0x4)

}; // Size: 0x4

struct FGameplayAbilitySpecHandleAndPredictionKey
{
    FGameplayAbilitySpecHandle AbilityHandle;                                         // 0x0000 (size: 0x4)
    int32 PredictionKeyAtCreation;                                                    // 0x0004 (size: 0x4)

}; // Size: 0x8

struct FGameplayAbilityTargetData
{
    char padding_0[0x8];                                                              // 0x0000 (size: 0x0)
}; // Size: 0x8

struct FGameplayAbilityTargetDataHandle
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

struct FGameplayAbilityTargetData_ActorArray : public FGameplayAbilityTargetData
{
    FGameplayAbilityTargetingLocationInfo SourceLocation;                             // 0x0010 (size: 0x70)
    TArray<TWeakObjectPtr<AActor>> TargetActorArray;                                  // 0x0080 (size: 0x10)

}; // Size: 0x90

struct FGameplayAbilityTargetData_LocationInfo : public FGameplayAbilityTargetData
{
    FGameplayAbilityTargetingLocationInfo SourceLocation;                             // 0x0010 (size: 0x70)
    FGameplayAbilityTargetingLocationInfo TargetLocation;                             // 0x0080 (size: 0x70)

}; // Size: 0xF0

struct FGameplayAbilityTargetData_SingleTargetHit : public FGameplayAbilityTargetData
{
    FHitResult HitResult;                                                             // 0x0008 (size: 0x88)
    bool bHitReplaced;                                                                // 0x0090 (size: 0x1)

}; // Size: 0x98

struct FGameplayAbilityTargetingLocationInfo
{
    TEnumAsByte<EGameplayAbilityTargetingLocationType::Type> LocationType;            // 0x0010 (size: 0x1)
    char padding_0[0xF];                                                              // 0x0011 (size: 0xF)
    FTransform LiteralTransform;                                                      // 0x0020 (size: 0x30)
    class AActor* SourceActor;                                                        // 0x0050 (size: 0x8)
    class UMeshComponent* SourceComponent;                                            // 0x0058 (size: 0x8)
    class UGameplayAbility* SourceAbility;                                            // 0x0060 (size: 0x8)
    FName SourceSocketName;                                                           // 0x0068 (size: 0x8)

}; // Size: 0x70

struct FGameplayAttribute
{
    FString AttributeName;                                                            // 0x0000 (size: 0x10)
    TFieldPath<FProperty> Attribute;                                                  // 0x0010 (size: 0x20)
    class UStruct* AttributeOwner;                                                    // 0x0030 (size: 0x8)

}; // Size: 0x38

struct FGameplayAttributeData
{
    float BaseValue;                                                                  // 0x0008 (size: 0x4)
    float CurrentValue;                                                               // 0x000C (size: 0x4)

}; // Size: 0x10

struct FGameplayCueNotifyData
{
    FGameplayTag GameplayCueTag;                                                      // 0x0000 (size: 0x8)
    FSoftObjectPath GameplayCueNotifyObj;                                             // 0x0008 (size: 0x18)
    UClass* LoadedGameplayCueClass;                                                   // 0x0020 (size: 0x8)

}; // Size: 0x30

struct FGameplayCueObjectLibrary
{
    TArray<FString> Paths;                                                            // 0x0000 (size: 0x10)
    char padding_0[0x20];                                                             // 0x0010 (size: 0x20)
    class UObjectLibrary* ActorObjectLibrary;                                         // 0x0030 (size: 0x8)
    class UObjectLibrary* StaticObjectLibrary;                                        // 0x0038 (size: 0x8)
    class UGameplayCueSet* CueSet;                                                    // 0x0040 (size: 0x8)
    char padding_1[0x4];                                                              // 0x0048 (size: 0x4)
    bool bShouldSyncScan;                                                             // 0x004C (size: 0x1)
    bool bShouldAsyncLoad;                                                            // 0x004D (size: 0x1)
    bool bShouldSyncLoad;                                                             // 0x004E (size: 0x1)
    bool bHasBeenInitialized;                                                         // 0x004F (size: 0x1)

}; // Size: 0x50

struct FGameplayCueParameters
{
    float NormalizedMagnitude;                                                        // 0x0000 (size: 0x4)
    float RawMagnitude;                                                               // 0x0004 (size: 0x4)
    FGameplayEffectContextHandle EffectContext;                                       // 0x0008 (size: 0x18)
    FGameplayTag MatchedTagName;                                                      // 0x0020 (size: 0x8)
    FGameplayTag OriginalTag;                                                         // 0x0028 (size: 0x8)
    FGameplayTagContainer AggregatedSourceTags;                                       // 0x0030 (size: 0x20)
    FGameplayTagContainer AggregatedTargetTags;                                       // 0x0050 (size: 0x20)
    FVector_NetQuantize10 Location;                                                   // 0x0070 (size: 0xC)
    FVector_NetQuantizeNormal Normal;                                                 // 0x007C (size: 0xC)
    TWeakObjectPtr<class AActor> Instigator;                                          // 0x0088 (size: 0x8)
    TWeakObjectPtr<class AActor> EffectCauser;                                        // 0x0090 (size: 0x8)
    TWeakObjectPtr<class UObject> SourceObject;                                       // 0x0098 (size: 0x8)
    TWeakObjectPtr<class UPhysicalMaterial> PhysicalMaterial;                         // 0x00A0 (size: 0x8)
    int32 GameplayEffectLevel;                                                        // 0x00A8 (size: 0x4)
    int32 AbilityLevel;                                                               // 0x00AC (size: 0x4)
    TWeakObjectPtr<class USceneComponent> TargetAttachComponent;                      // 0x00B0 (size: 0x8)
    bool bReplicateLocationWhenUsingMinimalRepProxy;                                  // 0x00B8 (size: 0x1)

}; // Size: 0xC0

struct FGameplayCuePendingExecute
{
    FPredictionKey PredictionKey;                                                     // 0x0018 (size: 0x10)
    EGameplayCuePayloadType PayloadType;                                              // 0x0028 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0029 (size: 0x7)
    class UAbilitySystemComponent* OwningComponent;                                   // 0x0030 (size: 0x8)
    FGameplayEffectSpecForRPC FromSpec;                                               // 0x0038 (size: 0x78)
    FGameplayCueParameters CueParameters;                                             // 0x00B0 (size: 0xC0)

}; // Size: 0x170

struct FGameplayCueTag
{
    FGameplayTag GameplayCueTag;                                                      // 0x0000 (size: 0x8)

}; // Size: 0x8

struct FGameplayCueTranslationLink
{
    class UGameplayCueTranslator* RulesCDO;                                           // 0x0000 (size: 0x8)

}; // Size: 0x18

struct FGameplayCueTranslationManager
{
    TArray<FGameplayCueTranslatorNode> TranslationLUT;                                // 0x0000 (size: 0x10)
    TMap<class FName, class FGameplayCueTranslatorNodeIndex> TranslationNameToIndexMap; // 0x0010 (size: 0x50)
    class UGameplayTagsManager* TagManager;                                           // 0x0060 (size: 0x8)

}; // Size: 0x80

struct FGameplayCueTranslatorNode
{
    TArray<FGameplayCueTranslationLink> Links;                                        // 0x0000 (size: 0x10)
    FGameplayCueTranslatorNodeIndex CachedIndex;                                      // 0x0010 (size: 0x4)
    FGameplayTag CachedGameplayTag;                                                   // 0x0014 (size: 0x8)
    FName CachedGameplayTagName;                                                      // 0x001C (size: 0x8)

}; // Size: 0x78

struct FGameplayCueTranslatorNodeIndex
{
    int32 Index;                                                                      // 0x0000 (size: 0x4)

}; // Size: 0x4

struct FGameplayEffectAttributeCaptureDefinition
{
    FGameplayAttribute AttributeToCapture;                                            // 0x0000 (size: 0x38)
    EGameplayEffectAttributeCaptureSource AttributeSource;                            // 0x0038 (size: 0x1)
    bool bSnapshot;                                                                   // 0x0039 (size: 0x1)

}; // Size: 0x40

struct FGameplayEffectAttributeCaptureSpec
{
    FGameplayEffectAttributeCaptureDefinition BackingDefinition;                      // 0x0000 (size: 0x40)

}; // Size: 0x50

struct FGameplayEffectAttributeCaptureSpecContainer
{
    TArray<FGameplayEffectAttributeCaptureSpec> SourceAttributes;                     // 0x0000 (size: 0x10)
    TArray<FGameplayEffectAttributeCaptureSpec> TargetAttributes;                     // 0x0010 (size: 0x10)
    bool bHasNonSnapshottedAttributes;                                                // 0x0020 (size: 0x1)

}; // Size: 0x28

struct FGameplayEffectContext
{
    TWeakObjectPtr<class AActor> Instigator;                                          // 0x0008 (size: 0x8)
    TWeakObjectPtr<class AActor> EffectCauser;                                        // 0x0010 (size: 0x8)
    TWeakObjectPtr<class UGameplayAbility> AbilityCDO;                                // 0x0018 (size: 0x8)
    TWeakObjectPtr<class UGameplayAbility> AbilityInstanceNotReplicated;              // 0x0020 (size: 0x8)
    int32 AbilityLevel;                                                               // 0x0028 (size: 0x4)
    TWeakObjectPtr<class UObject> SourceObject;                                       // 0x002C (size: 0x8)
    TWeakObjectPtr<class UAbilitySystemComponent> InstigatorAbilitySystemComponent;   // 0x0034 (size: 0x8)
    char padding_0[0x4];                                                              // 0x003C (size: 0x4)
    TArray<TWeakObjectPtr<AActor>> Actors;                                            // 0x0040 (size: 0x10)
    char padding_1[0x10];                                                             // 0x0050 (size: 0x10)
    FVector WorldOrigin;                                                              // 0x0060 (size: 0xC)
    uint8 bHasWorldOrigin;                                                            // 0x006C (size: 0x1)
    uint8 bReplicateSourceObject;                                                     // 0x006C (size: 0x1)

}; // Size: 0x70

struct FGameplayEffectContextHandle
{
    char padding_0[0x18];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x18

struct FGameplayEffectCue
{
    FGameplayAttribute MagnitudeAttribute;                                            // 0x0000 (size: 0x38)
    float MinLevel;                                                                   // 0x0038 (size: 0x4)
    float MaxLevel;                                                                   // 0x003C (size: 0x4)
    FGameplayTagContainer GameplayCueTags;                                            // 0x0040 (size: 0x20)

}; // Size: 0x60

struct FGameplayEffectCustomExecutionOutput
{
    TArray<FGameplayModifierEvaluatedData> OutputModifiers;                           // 0x0000 (size: 0x10)
    uint8 bTriggerConditionalGameplayEffects;                                         // 0x0010 (size: 0x1)
    uint8 bHandledStackCountManually;                                                 // 0x0010 (size: 0x1)
    uint8 bHandledGameplayCuesManually;                                               // 0x0010 (size: 0x1)

}; // Size: 0x18

struct FGameplayEffectCustomExecutionParameters
{
    char padding_0[0xF0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xF0

struct FGameplayEffectExecutionDefinition
{
    TSubclassOf<class UGameplayEffectExecutionCalculation> CalculationClass;          // 0x0000 (size: 0x8)
    FGameplayTagContainer PassedInTags;                                               // 0x0008 (size: 0x20)
    TArray<FGameplayEffectExecutionScopedModifierInfo> CalculationModifiers;          // 0x0028 (size: 0x10)
    TArray<class TSubclassOf<UGameplayEffect>> ConditionalGameplayEffectClasses;      // 0x0038 (size: 0x10)
    TArray<FConditionalGameplayEffect> ConditionalGameplayEffects;                    // 0x0048 (size: 0x10)

}; // Size: 0x58

struct FGameplayEffectExecutionScopedModifierInfo
{
    FGameplayEffectAttributeCaptureDefinition CapturedAttribute;                      // 0x0000 (size: 0x40)
    FGameplayTag TransientAggregatorIdentifier;                                       // 0x0040 (size: 0x8)
    EGameplayEffectScopedModifierAggregatorType AggregatorType;                       // 0x0048 (size: 0x1)
    TEnumAsByte<EGameplayModOp::Type> ModifierOp;                                     // 0x0049 (size: 0x1)
    char padding_0[0x6];                                                              // 0x004A (size: 0x6)
    FGameplayEffectModifierMagnitude ModifierMagnitude;                               // 0x0050 (size: 0x1E0)
    FGameplayModEvaluationChannelSettings EvaluationChannelSettings;                  // 0x0230 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0231 (size: 0x7)
    FGameplayTagRequirements SourceTags;                                              // 0x0238 (size: 0x40)
    FGameplayTagRequirements TargetTags;                                              // 0x0278 (size: 0x40)

}; // Size: 0x2B8

struct FGameplayEffectModifiedAttribute
{
    FGameplayAttribute Attribute;                                                     // 0x0000 (size: 0x38)
    float TotalMagnitude;                                                             // 0x0038 (size: 0x4)

}; // Size: 0x40

struct FGameplayEffectModifierMagnitude
{
    EGameplayEffectMagnitudeCalculation MagnitudeCalculationType;                     // 0x0000 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0001 (size: 0x7)
    FScalableFloat ScalableFloatMagnitude;                                            // 0x0008 (size: 0x28)
    FAttributeBasedFloat AttributeBasedMagnitude;                                     // 0x0030 (size: 0x110)
    FCustomCalculationBasedFloat CustomMagnitude;                                     // 0x0140 (size: 0x90)
    FSetByCallerFloat SetByCallerMagnitude;                                           // 0x01D0 (size: 0x10)

}; // Size: 0x1E0

struct FGameplayEffectQuery
{
    FGameplayEffectQueryCustomMatchDelegate_BP CustomMatchDelegate_BP;                // 0x0010 (size: 0x10)
    void ActiveGameplayEffectQueryCustomMatch_Dynamic(FActiveGameplayEffect Effect, bool& bMatches);
    FGameplayTagQuery OwningTagQuery;                                                 // 0x0020 (size: 0x48)
    FGameplayTagQuery EffectTagQuery;                                                 // 0x0068 (size: 0x48)
    FGameplayTagQuery SourceTagQuery;                                                 // 0x00B0 (size: 0x48)
    FGameplayAttribute ModifyingAttribute;                                            // 0x00F8 (size: 0x38)
    class UObject* EffectSource;                                                      // 0x0130 (size: 0x8)
    TSubclassOf<class UGameplayEffect> EffectDefinition;                              // 0x0138 (size: 0x8)

}; // Size: 0x150

struct FGameplayEffectRemovalInfo
{
    bool bPrematureRemoval;                                                           // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    int32 StackCount;                                                                 // 0x0004 (size: 0x4)
    FGameplayEffectContextHandle EffectContext;                                       // 0x0008 (size: 0x18)

}; // Size: 0x20

struct FGameplayEffectSpec
{
    class UGameplayEffect* Def;                                                       // 0x0000 (size: 0x8)
    TArray<FGameplayEffectModifiedAttribute> ModifiedAttributes;                      // 0x0008 (size: 0x10)
    FGameplayEffectAttributeCaptureSpecContainer CapturedRelevantAttributes;          // 0x0018 (size: 0x28)
    char padding_0[0x10];                                                             // 0x0040 (size: 0x10)
    float Duration;                                                                   // 0x0050 (size: 0x4)
    float Period;                                                                     // 0x0054 (size: 0x4)
    float ChanceToApplyToTarget;                                                      // 0x0058 (size: 0x4)
    char padding_1[0x4];                                                              // 0x005C (size: 0x4)
    FTagContainerAggregator CapturedSourceTags;                                       // 0x0060 (size: 0x88)
    FTagContainerAggregator CapturedTargetTags;                                       // 0x00E8 (size: 0x88)
    FGameplayTagContainer DynamicGrantedTags;                                         // 0x0170 (size: 0x20)
    FGameplayTagContainer DynamicAssetTags;                                           // 0x0190 (size: 0x20)
    TArray<FModifierSpec> Modifiers;                                                  // 0x01B0 (size: 0x10)
    int32 StackCount;                                                                 // 0x01C0 (size: 0x4)
    uint8 bCompletedSourceAttributeCapture;                                           // 0x01C4 (size: 0x1)
    uint8 bCompletedTargetAttributeCapture;                                           // 0x01C4 (size: 0x1)
    uint8 bDurationLocked;                                                            // 0x01C4 (size: 0x1)
    char padding_2[0x3];                                                              // 0x01C5 (size: 0x3)
    TArray<FGameplayAbilitySpecDef> GrantedAbilitySpecs;                              // 0x01C8 (size: 0x10)
    char padding_3[0xA0];                                                             // 0x01D8 (size: 0xA0)
    FGameplayEffectContextHandle EffectContext;                                       // 0x0278 (size: 0x18)
    float Level;                                                                      // 0x0290 (size: 0x4)

}; // Size: 0x298

struct FGameplayEffectSpecForRPC
{
    class UGameplayEffect* Def;                                                       // 0x0000 (size: 0x8)
    TArray<FGameplayEffectModifiedAttribute> ModifiedAttributes;                      // 0x0008 (size: 0x10)
    FGameplayEffectContextHandle EffectContext;                                       // 0x0018 (size: 0x18)
    FGameplayTagContainer AggregatedSourceTags;                                       // 0x0030 (size: 0x20)
    FGameplayTagContainer AggregatedTargetTags;                                       // 0x0050 (size: 0x20)
    float Level;                                                                      // 0x0070 (size: 0x4)
    float AbilityLevel;                                                               // 0x0074 (size: 0x4)

}; // Size: 0x78

struct FGameplayEffectSpecHandle
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FGameplayEventData
{
    FGameplayTag EventTag;                                                            // 0x0000 (size: 0x8)
    class AActor* Instigator;                                                         // 0x0008 (size: 0x8)
    class AActor* Target;                                                             // 0x0010 (size: 0x8)
    class UObject* OptionalObject;                                                    // 0x0018 (size: 0x8)
    class UObject* OptionalObject2;                                                   // 0x0020 (size: 0x8)
    FGameplayEffectContextHandle ContextHandle;                                       // 0x0028 (size: 0x18)
    FGameplayTagContainer InstigatorTags;                                             // 0x0040 (size: 0x20)
    FGameplayTagContainer TargetTags;                                                 // 0x0060 (size: 0x20)
    float EventMagnitude;                                                             // 0x0080 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0084 (size: 0x4)
    FGameplayAbilityTargetDataHandle TargetData;                                      // 0x0088 (size: 0x28)

}; // Size: 0xB0

struct FGameplayModEvaluationChannelSettings
{
    EGameplayModEvaluationChannel Channel;                                            // 0x0000 (size: 0x1)

}; // Size: 0x1

struct FGameplayModifierEvaluatedData
{
    FGameplayAttribute Attribute;                                                     // 0x0000 (size: 0x38)
    TEnumAsByte<EGameplayModOp::Type> ModifierOp;                                     // 0x0038 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0039 (size: 0x3)
    float Magnitude;                                                                  // 0x003C (size: 0x4)
    FActiveGameplayEffectHandle Handle;                                               // 0x0040 (size: 0x8)
    bool IsValid;                                                                     // 0x0048 (size: 0x1)

}; // Size: 0x50

struct FGameplayModifierInfo
{
    FGameplayAttribute Attribute;                                                     // 0x0000 (size: 0x38)
    TEnumAsByte<EGameplayModOp::Type> ModifierOp;                                     // 0x0038 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0039 (size: 0x7)
    FScalableFloat Magnitude;                                                         // 0x0040 (size: 0x28)
    FGameplayEffectModifierMagnitude ModifierMagnitude;                               // 0x0068 (size: 0x1E0)
    FGameplayModEvaluationChannelSettings EvaluationChannelSettings;                  // 0x0248 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0249 (size: 0x7)
    FGameplayTagRequirements SourceTags;                                              // 0x0250 (size: 0x40)
    FGameplayTagRequirements TargetTags;                                              // 0x0290 (size: 0x40)

}; // Size: 0x2D0

struct FGameplayTagBlueprintPropertyMap
{
    TArray<FGameplayTagBlueprintPropertyMapping> PropertyMappings;                    // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FGameplayTagBlueprintPropertyMapping
{
    FGameplayTag TagToMap;                                                            // 0x0000 (size: 0x8)
    TFieldPath<FProperty> PropertyToEdit;                                             // 0x0008 (size: 0x20)
    FName PropertyName;                                                               // 0x0028 (size: 0x8)
    FGuid PropertyGuid;                                                               // 0x0030 (size: 0x10)

}; // Size: 0x48

struct FGameplayTagReponsePair
{
    FGameplayTag Tag;                                                                 // 0x0000 (size: 0x8)
    TSubclassOf<class UGameplayEffect> ResponseGameplayEffect;                        // 0x0008 (size: 0x8)
    TArray<class TSubclassOf<UGameplayEffect>> ResponseGameplayEffects;               // 0x0010 (size: 0x10)
    int32 SoftCountCap;                                                               // 0x0020 (size: 0x4)

}; // Size: 0x28

struct FGameplayTagRequirements
{
    FGameplayTagContainer RequireTags;                                                // 0x0000 (size: 0x20)
    FGameplayTagContainer IgnoreTags;                                                 // 0x0020 (size: 0x20)

}; // Size: 0x40

struct FGameplayTagResponseTableEntry
{
    FGameplayTagReponsePair Positive;                                                 // 0x0000 (size: 0x28)
    FGameplayTagReponsePair Negative;                                                 // 0x0028 (size: 0x28)

}; // Size: 0x50

struct FGameplayTargetDataFilter
{
    class AActor* SelfActor;                                                          // 0x0008 (size: 0x8)
    TSubclassOf<class AActor> RequiredActorClass;                                     // 0x0010 (size: 0x8)
    TEnumAsByte<ETargetDataFilterSelf::Type> SelfFilter;                              // 0x0018 (size: 0x1)
    bool bReverseFilter;                                                              // 0x0019 (size: 0x1)

}; // Size: 0x20

struct FGameplayTargetDataFilterHandle
{
    char padding_0[0x10];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x10

struct FInheritedTagContainer
{
    FGameplayTagContainer CombinedTags;                                               // 0x0000 (size: 0x20)
    FGameplayTagContainer Added;                                                      // 0x0020 (size: 0x20)
    FGameplayTagContainer Removed;                                                    // 0x0040 (size: 0x20)

}; // Size: 0x60

struct FMinimalGameplayCueReplicationProxy
{
    class UAbilitySystemComponent* Owner;                                             // 0x0280 (size: 0x8)

}; // Size: 0x290

struct FMinimalReplicationTagCountMap
{
    class UAbilitySystemComponent* Owner;                                             // 0x0050 (size: 0x8)

}; // Size: 0x60

struct FModifierSpec
{
    float EvaluatedMagnitude;                                                         // 0x0000 (size: 0x4)

}; // Size: 0x4

struct FMovieSceneGameplayCueChannel : public FMovieSceneChannel
{
    TArray<FFrameNumber> KeyTimes;                                                    // 0x0008 (size: 0x10)
    TArray<FMovieSceneGameplayCueKey> KeyValues;                                      // 0x0018 (size: 0x10)

}; // Size: 0x88

struct FMovieSceneGameplayCueKey
{
    FGameplayCueTag Cue;                                                              // 0x0000 (size: 0x8)
    FVector Location;                                                                 // 0x0008 (size: 0xC)
    FVector Normal;                                                                   // 0x0014 (size: 0xC)
    FName AttachSocketName;                                                           // 0x0020 (size: 0x8)
    float NormalizedMagnitude;                                                        // 0x0028 (size: 0x4)
    FMovieSceneObjectBindingID Instigator;                                            // 0x002C (size: 0x18)
    FMovieSceneObjectBindingID EffectCauser;                                          // 0x0044 (size: 0x18)
    char padding_0[0x4];                                                              // 0x005C (size: 0x4)
    class UPhysicalMaterial* PhysicalMaterial;                                        // 0x0060 (size: 0x8)
    int32 GameplayEffectLevel;                                                        // 0x0068 (size: 0x4)
    int32 AbilityLevel;                                                               // 0x006C (size: 0x4)
    bool bAttachToBinding;                                                            // 0x0070 (size: 0x1)

}; // Size: 0x78

struct FNetSerializeScriptStructCache
{
    TArray<class UScriptStruct*> ScriptStructs;                                       // 0x0000 (size: 0x10)

}; // Size: 0x10

struct FPreallocationInfo
{
    TArray<class TSubclassOf<AGameplayCueNotify_Actor>> ClassesNeedingPreallocation;  // 0x0050 (size: 0x10)

}; // Size: 0x68

struct FPredictionKey
{
    class UPackageMap* PredictiveConnection;                                          // 0x0000 (size: 0x8)
    int16 Current;                                                                    // 0x0008 (size: 0x2)
    int16 Base;                                                                       // 0x000A (size: 0x2)
    bool bIsStale;                                                                    // 0x000C (size: 0x1)
    bool bIsServerInitiated;                                                          // 0x000D (size: 0x1)

}; // Size: 0x10

struct FReplicatedPredictionKeyItem : public FFastArraySerializerItem
{
    FPredictionKey PredictionKey;                                                     // 0x0010 (size: 0x10)

}; // Size: 0x20

struct FReplicatedPredictionKeyMap : public FFastArraySerializer
{
    TArray<FReplicatedPredictionKeyItem> PredictionKeys;                              // 0x0108 (size: 0x10)

}; // Size: 0x118

struct FScalableFloat
{
    float Value;                                                                      // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FCurveTableRowHandle Curve;                                                       // 0x0008 (size: 0x10)
    FDataRegistryType RegistryType;                                                   // 0x0018 (size: 0x8)

}; // Size: 0x28

struct FServerAbilityRPCBatch
{
    FGameplayAbilitySpecHandle AbilitySpecHandle;                                     // 0x0000 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0004 (size: 0x4)
    FPredictionKey PredictionKey;                                                     // 0x0008 (size: 0x10)
    FGameplayAbilityTargetDataHandle TargetData;                                      // 0x0018 (size: 0x28)
    bool InputPressed;                                                                // 0x0040 (size: 0x1)
    bool Ended;                                                                       // 0x0041 (size: 0x1)
    bool Started;                                                                     // 0x0042 (size: 0x1)

}; // Size: 0x48

struct FSetByCallerFloat
{
    FName DataName;                                                                   // 0x0000 (size: 0x8)
    FGameplayTag DataTag;                                                             // 0x0008 (size: 0x8)

}; // Size: 0x10

struct FTagContainerAggregator
{
    FGameplayTagContainer CapturedActorTags;                                          // 0x0000 (size: 0x20)
    FGameplayTagContainer CapturedSpecTags;                                           // 0x0020 (size: 0x20)
    FGameplayTagContainer ScopedTags;                                                 // 0x0040 (size: 0x20)

}; // Size: 0x88

struct FWorldReticleParameters
{
    FVector AOEScale;                                                                 // 0x0000 (size: 0xC)

}; // Size: 0xC

class AAbilitySystemDebugHUD : public AHUD
{
    char padding_0[0x318];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x318

class AAbilitySystemTestPawn : public ADefaultPawn
{
    class UAbilitySystemComponent* AbilitySystemComponent;                            // 0x02C8 (size: 0x8)

}; // Size: 0x2D0

class AGameplayAbilityTargetActor : public AActor
{
    bool ShouldProduceTargetDataOnServer;                                             // 0x0228 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0229 (size: 0x7)
    FGameplayAbilityTargetingLocationInfo StartLocation;                              // 0x0230 (size: 0x70)
    char padding_1[0x30];                                                             // 0x02A0 (size: 0x30)
    class APlayerController* MasterPC;                                                // 0x02D0 (size: 0x8)
    class UGameplayAbility* OwningAbility;                                            // 0x02D8 (size: 0x8)
    bool bDestroyOnConfirmation;                                                      // 0x02E0 (size: 0x1)
    char padding_2[0x7];                                                              // 0x02E1 (size: 0x7)
    class AActor* SourceActor;                                                        // 0x02E8 (size: 0x8)
    FWorldReticleParameters ReticleParams;                                            // 0x02F0 (size: 0xC)
    char padding_3[0x4];                                                              // 0x02FC (size: 0x4)
    TSubclassOf<class AGameplayAbilityWorldReticle> ReticleClass;                     // 0x0300 (size: 0x8)
    FGameplayTargetDataFilterHandle Filter;                                           // 0x0308 (size: 0x10)
    bool bDebug;                                                                      // 0x0318 (size: 0x1)
    char padding_4[0x17];                                                             // 0x0319 (size: 0x17)
    class UAbilitySystemComponent* GenericDelegateBoundASC;                           // 0x0330 (size: 0x8)

    void ConfirmTargeting();
    void CancelTargeting();
}; // Size: 0x340

class AGameplayAbilityTargetActor_ActorPlacement : public AGameplayAbilityTargetActor_GroundTrace
{
    UClass* PlacedActorClass;                                                         // 0x0370 (size: 0x8)
    class UMaterialInterface* PlacedActorMaterial;                                    // 0x0378 (size: 0x8)

}; // Size: 0x390

class AGameplayAbilityTargetActor_GroundTrace : public AGameplayAbilityTargetActor_Trace
{
    float CollisionRadius;                                                            // 0x0350 (size: 0x4)
    float CollisionHeight;                                                            // 0x0354 (size: 0x4)

}; // Size: 0x370

class AGameplayAbilityTargetActor_Radius : public AGameplayAbilityTargetActor
{
    float Radius;                                                                     // 0x0338 (size: 0x4)

}; // Size: 0x340

class AGameplayAbilityTargetActor_SingleLineTrace : public AGameplayAbilityTargetActor_Trace
{
    char padding_0[0x350];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x350

class AGameplayAbilityTargetActor_Trace : public AGameplayAbilityTargetActor
{
    float MaxRange;                                                                   // 0x0338 (size: 0x4)
    FCollisionProfileName TraceProfile;                                               // 0x033C (size: 0x8)
    bool bTraceAffectsAimPitch;                                                       // 0x0344 (size: 0x1)

}; // Size: 0x350

class AGameplayAbilityWorldReticle : public AActor
{
    FWorldReticleParameters Parameters;                                               // 0x0228 (size: 0xC)
    bool bFaceOwnerFlat;                                                              // 0x0234 (size: 0x1)
    bool bSnapToTargetedActor;                                                        // 0x0235 (size: 0x1)
    bool bIsTargetValid;                                                              // 0x0236 (size: 0x1)
    bool bIsTargetAnActor;                                                            // 0x0237 (size: 0x1)
    class APlayerController* MasterPC;                                                // 0x0238 (size: 0x8)
    class AActor* TargetingActor;                                                     // 0x0240 (size: 0x8)

    void SetReticleMaterialParamVector(FName ParamName, FVector Value);
    void SetReticleMaterialParamFloat(FName ParamName, float Value);
    void OnValidTargetChanged(bool bNewValue);
    void OnTargetingAnActor(bool bNewValue);
    void OnParametersInitialized();
    void FaceTowardSource(bool bFaceIn2D);
}; // Size: 0x248

class AGameplayAbilityWorldReticle_ActorVisualization : public AGameplayAbilityWorldReticle
{
    class UCapsuleComponent* CollisionComponent;                                      // 0x0248 (size: 0x8)
    TArray<class UActorComponent*> VisualizationComponents;                           // 0x0250 (size: 0x10)

}; // Size: 0x260

class AGameplayCueNotify_Actor : public AActor
{
    bool bAutoDestroyOnRemove;                                                        // 0x0228 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0229 (size: 0x3)
    float AutoDestroyDelay;                                                           // 0x022C (size: 0x4)
    bool WarnIfTimelineIsStillRunning;                                                // 0x0230 (size: 0x1)
    bool WarnIfLatentActionIsStillRunning;                                            // 0x0231 (size: 0x1)
    char padding_1[0x2];                                                              // 0x0232 (size: 0x2)
    FGameplayTag GameplayCueTag;                                                      // 0x0234 (size: 0x8)
    FName GameplayCueName;                                                            // 0x023C (size: 0x8)
    bool bAutoAttachToOwner;                                                          // 0x0244 (size: 0x1)
    bool IsOverride;                                                                  // 0x0245 (size: 0x1)
    bool bUniqueInstancePerInstigator;                                                // 0x0246 (size: 0x1)
    bool bUniqueInstancePerSourceObject;                                              // 0x0247 (size: 0x1)
    bool bAllowMultipleOnActiveEvents;                                                // 0x0248 (size: 0x1)
    bool bAllowMultipleWhileActiveEvents;                                             // 0x0249 (size: 0x1)
    char padding_2[0x2];                                                              // 0x024A (size: 0x2)
    int32 NumPreallocatedInstances;                                                   // 0x024C (size: 0x4)

    bool WhileActive(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    bool OnRemove(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    void OnOwnerDestroyed(class AActor* DestroyedActor);
    bool OnExecute(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    bool OnActive(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    void K2_HandleGameplayCue(class AActor* MyTarget, TEnumAsByte<EGameplayCueEvent::Type> EventType, const FGameplayCueParameters& Parameters);
    void K2_EndGameplayCue();
}; // Size: 0x288

class IAbilitySystemInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class IAbilitySystemReplicationProxyInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class IGameplayCueInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void ForwardGameplayCueToParent();
    void BlueprintCustomHandler(TEnumAsByte<EGameplayCueEvent::Type> EventType, const FGameplayCueParameters& Parameters);
}; // Size: 0x28

class ITickableAttributeSetInterface : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UAbilityAsync : public UBlueprintAsyncActionBase
{
    char padding_0[0x38];                                                             // 0x0000 (size: 0x0)

    void EndAction();
}; // Size: 0x38

class UAbilityAsync_WaitGameplayEffectApplied : public UAbilityAsync
{
    FAbilityAsync_WaitGameplayEffectAppliedOnApplied OnApplied;                       // 0x0038 (size: 0x10)
    void OnAppliedDelegate(class AActor* Source, FGameplayEffectSpecHandle SpecHandle, FActiveGameplayEffectHandle ActiveHandle);

    class UAbilityAsync_WaitGameplayEffectApplied* WaitGameplayEffectAppliedToActor(class AActor* TargetActor, const FGameplayTargetDataFilterHandle SourceFilter, FGameplayTagRequirements SourceTagRequirements, FGameplayTagRequirements TargetTagRequirements, bool TriggerOnce, bool ListenForPeriodicEffect);
    void OnAppliedDelegate__DelegateSignature(class AActor* Source, FGameplayEffectSpecHandle SpecHandle, FActiveGameplayEffectHandle ActiveHandle);
}; // Size: 0xF8

class UAbilityAsync_WaitGameplayEvent : public UAbilityAsync
{
    FAbilityAsync_WaitGameplayEventEventReceived EventReceived;                       // 0x0038 (size: 0x10)
    void EventReceivedDelegate(FGameplayEventData Payload);

    class UAbilityAsync_WaitGameplayEvent* WaitGameplayEventToActor(class AActor* TargetActor, FGameplayTag EventTag, bool OnlyTriggerOnce, bool OnlyMatchExact);
    void EventReceivedDelegate__DelegateSignature(FGameplayEventData Payload);
}; // Size: 0x60

class UAbilityAsync_WaitGameplayTag : public UAbilityAsync
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x50

class UAbilityAsync_WaitGameplayTagAdded : public UAbilityAsync_WaitGameplayTag
{
    FAbilityAsync_WaitGameplayTagAddedAdded Added;                                    // 0x0050 (size: 0x10)
    void AsyncWaitGameplayTagDelegate();

    class UAbilityAsync_WaitGameplayTagAdded* WaitGameplayTagAddToActor(class AActor* TargetActor, FGameplayTag Tag, bool OnlyTriggerOnce);
}; // Size: 0x60

class UAbilityAsync_WaitGameplayTagRemoved : public UAbilityAsync_WaitGameplayTag
{
    FAbilityAsync_WaitGameplayTagRemovedRemoved Removed;                              // 0x0050 (size: 0x10)
    void AsyncWaitGameplayTagDelegate();

    class UAbilityAsync_WaitGameplayTagRemoved* WaitGameplayTagRemoveFromActor(class AActor* TargetActor, FGameplayTag Tag, bool OnlyTriggerOnce);
}; // Size: 0x60

class UAbilitySystemBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool TargetDataHasOrigin(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    bool TargetDataHasHitResult(const FGameplayAbilityTargetDataHandle& HitResult, int32 Index);
    bool TargetDataHasEndPoint(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    bool TargetDataHasActor(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    FGameplayEffectSpecHandle SetStackCountToMax(FGameplayEffectSpecHandle SpecHandle);
    FGameplayEffectSpecHandle SetStackCount(FGameplayEffectSpecHandle SpecHandle, int32 StackCount);
    FGameplayEffectSpecHandle SetDuration(FGameplayEffectSpecHandle SpecHandle, float Duration);
    void SendGameplayEventToActor(class AActor* Actor, FGameplayTag EventTag, FGameplayEventData Payload);
    bool NotEqual_GameplayAttributeGameplayAttribute(FGameplayAttribute AttributeA, FGameplayAttribute AttributeB);
    FGameplayEffectSpecHandle MakeSpecHandle(class UGameplayEffect* InGameplayEffect, class AActor* InInstigator, class AActor* InEffectCauser, float InLevel);
    FGameplayCueParameters MakeGameplayCueParameters(float NormalizedMagnitude, float RawMagnitude, FGameplayEffectContextHandle EffectContext, FGameplayTag MatchedTagName, FGameplayTag OriginalTag, FGameplayTagContainer AggregatedSourceTags, FGameplayTagContainer AggregatedTargetTags, FVector Location, FVector Normal, class AActor* Instigator, class AActor* EffectCauser, class UObject* SourceObject, class UPhysicalMaterial* PhysicalMaterial, int32 GameplayEffectLevel, int32 AbilityLevel, class USceneComponent* TargetAttachComponent, bool bReplicateLocationWhenUsingMinimalRepProxy);
    FGameplayTargetDataFilterHandle MakeFilterHandle(FGameplayTargetDataFilter Filter, class AActor* FilterActor);
    bool IsValid(FGameplayAttribute Attribute);
    bool IsInstigatorLocallyControlledPlayer(FGameplayCueParameters Parameters);
    bool IsInstigatorLocallyControlled(FGameplayCueParameters Parameters);
    bool HasHitResult(FGameplayCueParameters Parameters);
    FTransform GetTargetDataOrigin(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    FTransform GetTargetDataEndPointTransform(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    FVector GetTargetDataEndPoint(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    FVector GetOrigin(FGameplayCueParameters Parameters);
    float GetModifiedAttributeMagnitude(FGameplayEffectSpecHandle SpecHandle, FGameplayAttribute Attribute);
    FTransform GetInstigatorTransform(FGameplayCueParameters Parameters);
    class AActor* GetInstigatorActor(FGameplayCueParameters Parameters);
    FHitResult GetHitResultFromTargetData(const FGameplayAbilityTargetDataHandle& HitResult, int32 Index);
    FHitResult GetHitResult(FGameplayCueParameters Parameters);
    bool GetGameplayCueEndLocationAndNormal(class AActor* TargetActor, FGameplayCueParameters Parameters, FVector& Location, FVector& Normal);
    bool GetGameplayCueDirection(class AActor* TargetActor, FGameplayCueParameters Parameters, FVector& Direction);
    float GetFloatAttributeFromAbilitySystemComponent(const class UAbilitySystemComponent* AbilitySystem, FGameplayAttribute Attribute, bool& bSuccessfullyFoundAttribute);
    float GetFloatAttributeBaseFromAbilitySystemComponent(const class UAbilitySystemComponent* AbilitySystemComponent, FGameplayAttribute Attribute, bool& bSuccessfullyFoundAttribute);
    float GetFloatAttributeBase(const class AActor* Actor, FGameplayAttribute Attribute, bool& bSuccessfullyFoundAttribute);
    float GetFloatAttribute(const class AActor* Actor, FGameplayAttribute Attribute, bool& bSuccessfullyFoundAttribute);
    FGameplayEffectContextHandle GetEffectContext(FGameplayEffectSpecHandle SpecHandle);
    int32 GetDataCountFromTargetData(const FGameplayAbilityTargetDataHandle& TargetData);
    TArray<FGameplayEffectSpecHandle> GetAllLinkedGameplayEffectSpecHandles(FGameplayEffectSpecHandle SpecHandle);
    TArray<class AActor*> GetAllActorsFromTargetData(const FGameplayAbilityTargetDataHandle& TargetData);
    TArray<class AActor*> GetActorsFromTargetData(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index);
    int32 GetActorCount(FGameplayCueParameters Parameters);
    class AActor* GetActorByIndex(FGameplayCueParameters Parameters, int32 Index);
    float GetActiveGameplayEffectTotalDuration(FActiveGameplayEffectHandle ActiveHandle);
    float GetActiveGameplayEffectStartTime(FActiveGameplayEffectHandle ActiveHandle);
    int32 GetActiveGameplayEffectStackLimitCount(FActiveGameplayEffectHandle ActiveHandle);
    int32 GetActiveGameplayEffectStackCount(FActiveGameplayEffectHandle ActiveHandle);
    float GetActiveGameplayEffectRemainingDuration(class UObject* WorldContextObject, FActiveGameplayEffectHandle ActiveHandle);
    float GetActiveGameplayEffectExpectedEndTime(FActiveGameplayEffectHandle ActiveHandle);
    FString GetActiveGameplayEffectDebugString(FActiveGameplayEffectHandle ActiveHandle);
    class UAbilitySystemComponent* GetAbilitySystemComponent(class AActor* Actor);
    void ForwardGameplayCueToTarget(TScriptInterface<class IGameplayCueInterface> TargetCueInterface, TEnumAsByte<EGameplayCueEvent::Type> EventType, FGameplayCueParameters Parameters);
    FGameplayAbilityTargetDataHandle FilterTargetData(const FGameplayAbilityTargetDataHandle& TargetDataHandle, FGameplayTargetDataFilterHandle ActorFilterClass);
    float EvaluateAttributeValueWithTagsAndBase(class UAbilitySystemComponent* AbilitySystem, FGameplayAttribute Attribute, const FGameplayTagContainer& SourceTags, const FGameplayTagContainer& TargetTags, float BaseValue, bool& bSuccess);
    float EvaluateAttributeValueWithTags(class UAbilitySystemComponent* AbilitySystem, FGameplayAttribute Attribute, const FGameplayTagContainer& SourceTags, const FGameplayTagContainer& TargetTags, bool& bSuccess);
    bool EqualEqual_GameplayAttributeGameplayAttribute(FGameplayAttribute AttributeA, FGameplayAttribute AttributeB);
    void EffectContextSetOrigin(FGameplayEffectContextHandle EffectContext, FVector Origin);
    bool EffectContextIsValid(FGameplayEffectContextHandle EffectContext);
    bool EffectContextIsInstigatorLocallyControlled(FGameplayEffectContextHandle EffectContext);
    bool EffectContextHasHitResult(FGameplayEffectContextHandle EffectContext);
    class UObject* EffectContextGetSourceObject(FGameplayEffectContextHandle EffectContext);
    class AActor* EffectContextGetOriginalInstigatorActor(FGameplayEffectContextHandle EffectContext);
    FVector EffectContextGetOrigin(FGameplayEffectContextHandle EffectContext);
    class AActor* EffectContextGetInstigatorActor(FGameplayEffectContextHandle EffectContext);
    FHitResult EffectContextGetHitResult(FGameplayEffectContextHandle EffectContext);
    class AActor* EffectContextGetEffectCauser(FGameplayEffectContextHandle EffectContext);
    void EffectContextAddHitResult(FGameplayEffectContextHandle EffectContext, FHitResult HitResult, bool bReset);
    bool DoesTargetDataContainActor(const FGameplayAbilityTargetDataHandle& TargetData, int32 Index, class AActor* Actor);
    bool DoesGameplayCueMeetTagRequirements(FGameplayCueParameters Parameters, const FGameplayTagRequirements& SourceTagReqs, const FGameplayTagRequirements& TargetTagReqs);
    FGameplayEffectSpecHandle CloneSpecHandle(class AActor* InNewInstigator, class AActor* InEffectCauser, FGameplayEffectSpecHandle GameplayEffectSpecHandle_Clone);
    void BreakGameplayCueParameters(const FGameplayCueParameters& Parameters, float& NormalizedMagnitude, float& RawMagnitude, FGameplayEffectContextHandle& EffectContext, FGameplayTag& MatchedTagName, FGameplayTag& OriginalTag, FGameplayTagContainer& AggregatedSourceTags, FGameplayTagContainer& AggregatedTargetTags, FVector& Location, FVector& Normal, class AActor*& Instigator, class AActor*& EffectCauser, class UObject*& SourceObject, class UPhysicalMaterial*& PhysicalMaterial, int32& GameplayEffectLevel, int32& AbilityLevel, class USceneComponent*& TargetAttachComponent, bool& bReplicateLocationWhenUsingMinimalRepProxy);
    FGameplayEffectSpecHandle AssignTagSetByCallerMagnitude(FGameplayEffectSpecHandle SpecHandle, FGameplayTag DataTag, float Magnitude);
    FGameplayEffectSpecHandle AssignSetByCallerMagnitude(FGameplayEffectSpecHandle SpecHandle, FName DataName, float Magnitude);
    FGameplayAbilityTargetDataHandle AppendTargetDataHandle(FGameplayAbilityTargetDataHandle TargetHandle, const FGameplayAbilityTargetDataHandle& HandleToAdd);
    FGameplayEffectSpecHandle AddLinkedGameplayEffectSpec(FGameplayEffectSpecHandle SpecHandle, FGameplayEffectSpecHandle LinkedGameplayEffectSpec);
    FGameplayEffectSpecHandle AddLinkedGameplayEffect(FGameplayEffectSpecHandle SpecHandle, TSubclassOf<class UGameplayEffect> LinkedGameplayEffect);
    FGameplayEffectSpecHandle AddGrantedTags(FGameplayEffectSpecHandle SpecHandle, FGameplayTagContainer NewGameplayTags);
    FGameplayEffectSpecHandle AddGrantedTag(FGameplayEffectSpecHandle SpecHandle, FGameplayTag NewGameplayTag);
    FGameplayEffectSpecHandle AddAssetTags(FGameplayEffectSpecHandle SpecHandle, FGameplayTagContainer NewGameplayTags);
    FGameplayEffectSpecHandle AddAssetTag(FGameplayEffectSpecHandle SpecHandle, FGameplayTag NewGameplayTag);
    FGameplayAbilityTargetDataHandle AbilityTargetDataFromLocations(const FGameplayAbilityTargetingLocationInfo& SourceLocation, const FGameplayAbilityTargetingLocationInfo& TargetLocation);
    FGameplayAbilityTargetDataHandle AbilityTargetDataFromHitResult(const FHitResult& HitResult);
    FGameplayAbilityTargetDataHandle AbilityTargetDataFromActorArray(const TArray<class AActor*>& ActorArray, bool OneTargetPerHandle);
    FGameplayAbilityTargetDataHandle AbilityTargetDataFromActor(class AActor* Actor);
}; // Size: 0x28

class UAbilitySystemComponent : public UGameplayTasksComponent
{
    TArray<FAttributeDefaults> DefaultStartingData;                                   // 0x0138 (size: 0x10)
    TArray<class UAttributeSet*> SpawnedAttributes;                                   // 0x0148 (size: 0x10)
    FName AffectedAnimInstanceTag;                                                    // 0x0158 (size: 0x8)
    char padding_0[0x198];                                                            // 0x0160 (size: 0x198)
    float OutgoingDuration;                                                           // 0x02F8 (size: 0x4)
    float IncomingDuration;                                                           // 0x02FC (size: 0x4)
    char padding_1[0x20];                                                             // 0x0300 (size: 0x20)
    TArray<FString> ClientDebugStrings;                                               // 0x0320 (size: 0x10)
    TArray<FString> ServerDebugStrings;                                               // 0x0330 (size: 0x10)
    char padding_2[0x58];                                                             // 0x0340 (size: 0x58)
    bool UserAbilityActivationInhibited;                                              // 0x0398 (size: 0x1)
    bool ReplicationProxyEnabled;                                                     // 0x0399 (size: 0x1)
    bool bSuppressGrantAbility;                                                       // 0x039A (size: 0x1)
    bool bSuppressGameplayCues;                                                       // 0x039B (size: 0x1)
    char padding_3[0x4];                                                              // 0x039C (size: 0x4)
    TArray<class AGameplayAbilityTargetActor*> SpawnedTargetActors;                   // 0x03A0 (size: 0x10)
    char padding_4[0x28];                                                             // 0x03B0 (size: 0x28)
    class AActor* OwnerActor;                                                         // 0x03D8 (size: 0x8)
    class AActor* AvatarActor;                                                        // 0x03E0 (size: 0x8)
    char padding_5[0x10];                                                             // 0x03E8 (size: 0x10)
    FGameplayAbilitySpecContainer ActivatableAbilities;                               // 0x03F8 (size: 0x120)
    char padding_6[0x30];                                                             // 0x0518 (size: 0x30)
    TArray<class UGameplayAbility*> AllReplicatedInstancedAbilities;                  // 0x0548 (size: 0x10)
    char padding_7[0x200];                                                            // 0x0558 (size: 0x200)
    FGameplayAbilityRepAnimMontage RepAnimMontageInfo;                                // 0x0758 (size: 0x30)
    bool bCachedIsNetSimulated;                                                       // 0x0788 (size: 0x1)
    bool bPendingMontageRep;                                                          // 0x0789 (size: 0x1)
    char padding_8[0x6];                                                              // 0x078A (size: 0x6)
    FGameplayAbilityLocalAnimMontage LocalAnimMontageInfo;                            // 0x0790 (size: 0x28)
    char padding_9[0xA0];                                                             // 0x07B8 (size: 0xA0)
    FActiveGameplayEffectsContainer ActiveGameplayEffects;                            // 0x0858 (size: 0x478)
    FActiveGameplayCueContainer ActiveGameplayCues;                                   // 0x0CD0 (size: 0x128)
    FActiveGameplayCueContainer MinimalReplicationGameplayCues;                       // 0x0DF8 (size: 0x128)
    char padding_10[0x128];                                                           // 0x0F20 (size: 0x128)
    TArray<uint8> BlockedAbilityBindings;                                             // 0x1048 (size: 0x10)
    char padding_11[0x128];                                                           // 0x1058 (size: 0x128)
    FMinimalReplicationTagCountMap MinimalReplicationTags;                            // 0x1180 (size: 0x60)
    char padding_12[0x18];                                                            // 0x11E0 (size: 0x18)
    FReplicatedPredictionKeyMap ReplicatedPredictionKeyMap;                           // 0x11F8 (size: 0x118)

    bool TryActivateAbilityByClass(TSubclassOf<class UGameplayAbility> InAbilityToActivate, bool bAllowRemoteActivation);
    bool TryActivateAbilitiesByTag(const FGameplayTagContainer& GameplayTagContainer, bool bAllowRemoteActivation);
    void TargetConfirm();
    void TargetCancel();
    void SetUserAbilityActivationInhibited(bool NewInhibit);
    void SetActiveGameplayEffectLevelUsingQuery(FGameplayEffectQuery Query, int32 NewLevel);
    void SetActiveGameplayEffectLevel(FActiveGameplayEffectHandle ActiveHandle, int32 NewLevel);
    void ServerTryActivateAbilityWithEventData(FGameplayAbilitySpecHandle AbilityToActivate, bool InputPressed, FPredictionKey PredictionKey, FGameplayEventData TriggerEventData);
    void ServerTryActivateAbility(FGameplayAbilitySpecHandle AbilityToActivate, bool InputPressed, FPredictionKey PredictionKey);
    void ServerSetReplicatedTargetDataCancelled(FGameplayAbilitySpecHandle AbilityHandle, FPredictionKey AbilityOriginalPredictionKey, FPredictionKey CurrentPredictionKey);
    void ServerSetReplicatedTargetData(FGameplayAbilitySpecHandle AbilityHandle, FPredictionKey AbilityOriginalPredictionKey, const FGameplayAbilityTargetDataHandle& ReplicatedTargetDataHandle, FGameplayTag ApplicationTag, FPredictionKey CurrentPredictionKey);
    void ServerSetReplicatedEventWithPayload(TEnumAsByte<EAbilityGenericReplicatedEvent::Type> EventType, FGameplayAbilitySpecHandle AbilityHandle, FPredictionKey AbilityOriginalPredictionKey, FPredictionKey CurrentPredictionKey, FVector_NetQuantize100 VectorPayload);
    void ServerSetReplicatedEvent(TEnumAsByte<EAbilityGenericReplicatedEvent::Type> EventType, FGameplayAbilitySpecHandle AbilityHandle, FPredictionKey AbilityOriginalPredictionKey, FPredictionKey CurrentPredictionKey);
    void ServerSetInputReleased(FGameplayAbilitySpecHandle AbilityHandle);
    void ServerSetInputPressed(FGameplayAbilitySpecHandle AbilityHandle);
    void ServerPrintDebug_RequestWithStrings(const TArray<FString>& Strings);
    void ServerPrintDebug_Request();
    void ServerEndAbility(FGameplayAbilitySpecHandle AbilityToEnd, FGameplayAbilityActivationInfo ActivationInfo, FPredictionKey PredictionKey);
    void ServerCurrentMontageSetPlayRate(class UAnimMontage* ClientAnimMontage, float InPlayRate);
    void ServerCurrentMontageSetNextSectionName(class UAnimMontage* ClientAnimMontage, float ClientPosition, FName SectionName, FName NextSectionName);
    void ServerCurrentMontageJumpToSectionName(class UAnimMontage* ClientAnimMontage, FName SectionName);
    void ServerCancelAbility(FGameplayAbilitySpecHandle AbilityToCancel, FGameplayAbilityActivationInfo ActivationInfo);
    void ServerAbilityRPCBatch(FServerAbilityRPCBatch BatchInfo);
    void RemoveActiveGameplayEffectBySourceEffect(TSubclassOf<class UGameplayEffect> GameplayEffect, class UAbilitySystemComponent* InstigatorAbilitySystemComponent, int32 StacksToRemove);
    bool RemoveActiveGameplayEffect(FActiveGameplayEffectHandle Handle, int32 StacksToRemove);
    int32 RemoveActiveEffectsWithTags(FGameplayTagContainer Tags);
    int32 RemoveActiveEffectsWithSourceTags(FGameplayTagContainer Tags);
    int32 RemoveActiveEffectsWithGrantedTags(FGameplayTagContainer Tags);
    int32 RemoveActiveEffectsWithAppliedTags(FGameplayTagContainer Tags);
    void OnRep_ServerDebugString();
    void OnRep_ReplicatedAnimMontage();
    void OnRep_OwningActor();
    void OnRep_ClientDebugString();
    void OnRep_ActivateAbilities();
    void NetMulticast_InvokeGameplayCuesExecuted_WithParams(const FGameplayTagContainer GameplayCueTags, FPredictionKey PredictionKey, FGameplayCueParameters GameplayCueParameters);
    void NetMulticast_InvokeGameplayCuesExecuted(const FGameplayTagContainer GameplayCueTags, FPredictionKey PredictionKey, FGameplayEffectContextHandle EffectContext);
    void NetMulticast_InvokeGameplayCuesAddedAndWhileActive_WithParams(const FGameplayTagContainer GameplayCueTags, FPredictionKey PredictionKey, FGameplayCueParameters GameplayCueParameters);
    void NetMulticast_InvokeGameplayCueExecuted_WithParams(const FGameplayTag GameplayCueTag, FPredictionKey PredictionKey, FGameplayCueParameters GameplayCueParameters);
    void NetMulticast_InvokeGameplayCueExecuted_FromSpec(const FGameplayEffectSpecForRPC Spec, FPredictionKey PredictionKey);
    void NetMulticast_InvokeGameplayCueExecuted(const FGameplayTag GameplayCueTag, FPredictionKey PredictionKey, FGameplayEffectContextHandle EffectContext);
    void NetMulticast_InvokeGameplayCueAddedAndWhileActive_WithParams(const FGameplayTag GameplayCueTag, FPredictionKey PredictionKey, FGameplayCueParameters GameplayCueParameters);
    void NetMulticast_InvokeGameplayCueAddedAndWhileActive_FromSpec(const FGameplayEffectSpecForRPC& Spec, FPredictionKey PredictionKey);
    void NetMulticast_InvokeGameplayCueAdded_WithParams(const FGameplayTag GameplayCueTag, FPredictionKey PredictionKey, FGameplayCueParameters Parameters);
    void NetMulticast_InvokeGameplayCueAdded(const FGameplayTag GameplayCueTag, FPredictionKey PredictionKey, FGameplayEffectContextHandle EffectContext);
    FGameplayEffectSpecHandle MakeOutgoingSpec(TSubclassOf<class UGameplayEffect> GameplayEffectClass, float Level, FGameplayEffectContextHandle Context);
    FGameplayEffectContextHandle MakeEffectContext();
    void K2_InitStats(TSubclassOf<class UAttributeSet> Attributes, const class UDataTable* DataTable);
    bool IsGameplayCueActive(const FGameplayTag GameplayCueTag);
    bool GetUserAbilityActivationInhibited();
    float GetGameplayEffectMagnitude(FActiveGameplayEffectHandle Handle, FGameplayAttribute Attribute);
    int32 GetGameplayEffectCount(TSubclassOf<class UGameplayEffect> SourceGameplayEffect, class UAbilitySystemComponent* OptionalInstigatorFilterComponent, bool bEnforceOnGoingCheck);
    TArray<FActiveGameplayEffectHandle> GetActiveEffectsWithAllTags(FGameplayTagContainer Tags);
    TArray<FActiveGameplayEffectHandle> GetActiveEffects(const FGameplayEffectQuery& Query);
    void ClientTryActivateAbility(FGameplayAbilitySpecHandle AbilityToActivate);
    void ClientSetReplicatedEvent(TEnumAsByte<EAbilityGenericReplicatedEvent::Type> EventType, FGameplayAbilitySpecHandle AbilityHandle, FPredictionKey AbilityOriginalPredictionKey);
    void ClientPrintDebug_Response(const TArray<FString>& Strings, int32 GameFlags);
    void ClientEndAbility(FGameplayAbilitySpecHandle AbilityToEnd, FGameplayAbilityActivationInfo ActivationInfo);
    void ClientCancelAbility(FGameplayAbilitySpecHandle AbilityToCancel, FGameplayAbilityActivationInfo ActivationInfo);
    void ClientActivateAbilitySucceedWithEventData(FGameplayAbilitySpecHandle AbilityToActivate, FPredictionKey PredictionKey, FGameplayEventData TriggerEventData);
    void ClientActivateAbilitySucceed(FGameplayAbilitySpecHandle AbilityToActivate, FPredictionKey PredictionKey);
    void ClientActivateAbilityFailed(FGameplayAbilitySpecHandle AbilityToActivate, int16 PredictionKey);
    FActiveGameplayEffectHandle BP_ApplyGameplayEffectToTarget(TSubclassOf<class UGameplayEffect> GameplayEffectClass, class UAbilitySystemComponent* Target, float Level, FGameplayEffectContextHandle Context);
    FActiveGameplayEffectHandle BP_ApplyGameplayEffectToSelf(TSubclassOf<class UGameplayEffect> GameplayEffectClass, float Level, FGameplayEffectContextHandle EffectContext);
    FActiveGameplayEffectHandle BP_ApplyGameplayEffectSpecToTarget(const FGameplayEffectSpecHandle& SpecHandle, class UAbilitySystemComponent* Target);
    FActiveGameplayEffectHandle BP_ApplyGameplayEffectSpecToSelf(const FGameplayEffectSpecHandle& SpecHandle);
    void AbilityConfirmOrCancel__DelegateSignature();
    void AbilityAbilityKey__DelegateSignature(int32 InputID);
}; // Size: 0x1310

class UAbilitySystemGlobals : public UObject
{
    FSoftClassPath AbilitySystemGlobalsClassName;                                     // 0x0028 (size: 0x18)
    char padding_0[0x28];                                                             // 0x0040 (size: 0x28)
    FGameplayTag ActivateFailIsDeadTag;                                               // 0x0068 (size: 0x8)
    FName ActivateFailIsDeadName;                                                     // 0x0070 (size: 0x8)
    FGameplayTag ActivateFailCooldownTag;                                             // 0x0078 (size: 0x8)
    FName ActivateFailCooldownName;                                                   // 0x0080 (size: 0x8)
    FGameplayTag ActivateFailCostTag;                                                 // 0x0088 (size: 0x8)
    FName ActivateFailCostName;                                                       // 0x0090 (size: 0x8)
    FGameplayTag ActivateFailTagsBlockedTag;                                          // 0x0098 (size: 0x8)
    FName ActivateFailTagsBlockedName;                                                // 0x00A0 (size: 0x8)
    FGameplayTag ActivateFailTagsMissingTag;                                          // 0x00A8 (size: 0x8)
    FName ActivateFailTagsMissingName;                                                // 0x00B0 (size: 0x8)
    FGameplayTag ActivateFailNetworkingTag;                                           // 0x00B8 (size: 0x8)
    FName ActivateFailNetworkingName;                                                 // 0x00C0 (size: 0x8)
    int32 MinimalReplicationTagCountBits;                                             // 0x00C8 (size: 0x4)
    char padding_1[0x4];                                                              // 0x00CC (size: 0x4)
    FNetSerializeScriptStructCache TargetDataStructCache;                             // 0x00D0 (size: 0x10)
    bool bAllowGameplayModEvaluationChannels;                                         // 0x00E0 (size: 0x1)
    EGameplayModEvaluationChannel DefaultGameplayModEvaluationChannel;                // 0x00E1 (size: 0x1)
    char padding_2[0x2];                                                              // 0x00E2 (size: 0x2)
    FName GameplayModEvaluationChannelAliases;                                        // 0x00E4 (size: 0x50)
    char padding_3[0x4];                                                              // 0x0134 (size: 0x4)
    FSoftObjectPath GlobalCurveTableName;                                             // 0x0138 (size: 0x18)
    class UCurveTable* GlobalCurveTable;                                              // 0x0150 (size: 0x8)
    FSoftObjectPath GlobalAttributeMetaDataTableName;                                 // 0x0158 (size: 0x18)
    class UDataTable* GlobalAttributeMetaDataTable;                                   // 0x0170 (size: 0x8)
    FSoftObjectPath GlobalAttributeSetDefaultsTableName;                              // 0x0178 (size: 0x18)
    TArray<FSoftObjectPath> GlobalAttributeSetDefaultsTableNames;                     // 0x0190 (size: 0x10)
    TArray<class UCurveTable*> GlobalAttributeDefaultsTables;                         // 0x01A0 (size: 0x10)
    FSoftObjectPath GlobalGameplayCueManagerClass;                                    // 0x01B0 (size: 0x18)
    FSoftObjectPath GlobalGameplayCueManagerName;                                     // 0x01C8 (size: 0x18)
    TArray<FString> GameplayCueNotifyPaths;                                           // 0x01E0 (size: 0x10)
    FSoftObjectPath GameplayTagResponseTableName;                                     // 0x01F0 (size: 0x18)
    class UGameplayTagReponseTable* GameplayTagResponseTable;                         // 0x0208 (size: 0x8)
    bool PredictTargetGameplayEffects;                                                // 0x0210 (size: 0x1)
    char padding_4[0x7];                                                              // 0x0211 (size: 0x7)
    class UGameplayCueManager* GlobalGameplayCueManager;                              // 0x0218 (size: 0x8)

    void ToggleIgnoreAbilitySystemCosts();
    void ToggleIgnoreAbilitySystemCooldowns();
    void ServerEndPlayerAbility(FString AbilityNameMatch);
    void ServerCancelPlayerAbility(FString AbilityNameMatch);
    void ServerActivatePlayerAbility(FString AbilityNameMatch);
    void ListPlayerAbilities();
}; // Size: 0x260

class UAbilitySystemTestAttributeSet : public UAttributeSet
{
    float MaxHealth;                                                                  // 0x0034 (size: 0x4)
    float Health;                                                                     // 0x0038 (size: 0x4)
    float Mana;                                                                       // 0x003C (size: 0x4)
    float MaxMana;                                                                    // 0x0040 (size: 0x4)
    float Damage;                                                                     // 0x0044 (size: 0x4)
    float SpellDamage;                                                                // 0x0048 (size: 0x4)
    float PhysicalDamage;                                                             // 0x004C (size: 0x4)
    float CritChance;                                                                 // 0x0050 (size: 0x4)
    float CritMultiplier;                                                             // 0x0054 (size: 0x4)
    float ArmorDamageReduction;                                                       // 0x0058 (size: 0x4)
    float DodgeChance;                                                                // 0x005C (size: 0x4)
    float LifeSteal;                                                                  // 0x0060 (size: 0x4)
    float Strength;                                                                   // 0x0064 (size: 0x4)
    float StackingAttribute1;                                                         // 0x0068 (size: 0x4)
    float StackingAttribute2;                                                         // 0x006C (size: 0x4)
    float NoStackAttribute;                                                           // 0x0070 (size: 0x4)

}; // Size: 0x78

class UAbilityTask : public UGameplayTask
{
    class UGameplayAbility* Ability;                                                  // 0x0068 (size: 0x8)
    class UAbilitySystemComponent* AbilitySystemComponent;                            // 0x0070 (size: 0x8)

}; // Size: 0x80

class UAbilityTask_ApplyRootMotionConstantForce : public UAbilityTask_ApplyRootMotion_Base
{
    FAbilityTask_ApplyRootMotionConstantForceOnFinish OnFinish;                       // 0x00B8 (size: 0x10)
    void ApplyRootMotionConstantForceDelegate();
    FVector WorldDirection;                                                           // 0x00C8 (size: 0xC)
    float Strength;                                                                   // 0x00D4 (size: 0x4)
    float Duration;                                                                   // 0x00D8 (size: 0x4)
    bool bIsAdditive;                                                                 // 0x00DC (size: 0x1)
    char padding_0[0x3];                                                              // 0x00DD (size: 0x3)
    class UCurveFloat* StrengthOverTime;                                              // 0x00E0 (size: 0x8)
    bool bEnableGravity;                                                              // 0x00E8 (size: 0x1)

    class UAbilityTask_ApplyRootMotionConstantForce* ApplyRootMotionConstantForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FVector WorldDirection, float Strength, float Duration, bool bIsAdditive, class UCurveFloat* StrengthOverTime, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish, bool bEnableGravity);
}; // Size: 0xF0

class UAbilityTask_ApplyRootMotionJumpForce : public UAbilityTask_ApplyRootMotion_Base
{
    FAbilityTask_ApplyRootMotionJumpForceOnFinish OnFinish;                           // 0x00B8 (size: 0x10)
    void ApplyRootMotionJumpForceDelegate();
    FAbilityTask_ApplyRootMotionJumpForceOnLanded OnLanded;                           // 0x00C8 (size: 0x10)
    void ApplyRootMotionJumpForceDelegate();
    FRotator Rotation;                                                                // 0x00D8 (size: 0xC)
    float Distance;                                                                   // 0x00E4 (size: 0x4)
    float Height;                                                                     // 0x00E8 (size: 0x4)
    float Duration;                                                                   // 0x00EC (size: 0x4)
    float MinimumLandedTriggerTime;                                                   // 0x00F0 (size: 0x4)
    bool bFinishOnLanded;                                                             // 0x00F4 (size: 0x1)
    char padding_0[0x3];                                                              // 0x00F5 (size: 0x3)
    class UCurveVector* PathOffsetCurve;                                              // 0x00F8 (size: 0x8)
    class UCurveFloat* TimeMappingCurve;                                              // 0x0100 (size: 0x8)

    void OnLandedCallback(const FHitResult& Hit);
    void Finish();
    class UAbilityTask_ApplyRootMotionJumpForce* ApplyRootMotionJumpForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FRotator Rotation, float Distance, float Height, float Duration, float MinimumLandedTriggerTime, bool bFinishOnLanded, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish, class UCurveVector* PathOffsetCurve, class UCurveFloat* TimeMappingCurve);
}; // Size: 0x110

class UAbilityTask_ApplyRootMotionMoveToActorForce : public UAbilityTask_ApplyRootMotion_Base
{
    FAbilityTask_ApplyRootMotionMoveToActorForceOnFinished OnFinished;                // 0x00B8 (size: 0x10)
    void ApplyRootMotionMoveToActorForceDelegate(bool DestinationReached, bool TimedOut, FVector FinalTargetLocation);
    char padding_0[0x8];                                                              // 0x00C8 (size: 0x8)
    FVector StartLocation;                                                            // 0x00D0 (size: 0xC)
    FVector TargetLocation;                                                           // 0x00DC (size: 0xC)
    class AActor* TargetActor;                                                        // 0x00E8 (size: 0x8)
    FVector TargetLocationOffset;                                                     // 0x00F0 (size: 0xC)
    ERootMotionMoveToActorTargetOffsetType OffsetAlignment;                           // 0x00FC (size: 0x1)
    char padding_1[0x3];                                                              // 0x00FD (size: 0x3)
    float Duration;                                                                   // 0x0100 (size: 0x4)
    bool bDisableDestinationReachedInterrupt;                                         // 0x0104 (size: 0x1)
    bool bSetNewMovementMode;                                                         // 0x0105 (size: 0x1)
    TEnumAsByte<EMovementMode> NewMovementMode;                                       // 0x0106 (size: 0x1)
    bool bRestrictSpeedToExpected;                                                    // 0x0107 (size: 0x1)
    class UCurveVector* PathOffsetCurve;                                              // 0x0108 (size: 0x8)
    class UCurveFloat* TimeMappingCurve;                                              // 0x0110 (size: 0x8)
    class UCurveFloat* TargetLerpSpeedHorizontalCurve;                                // 0x0118 (size: 0x8)
    class UCurveFloat* TargetLerpSpeedVerticalCurve;                                  // 0x0120 (size: 0x8)

    void OnTargetActorSwapped(class AActor* OriginalTarget, class AActor* NewTarget);
    void OnRep_TargetLocation();
    class UAbilityTask_ApplyRootMotionMoveToActorForce* ApplyRootMotionMoveToTargetDataActorForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FGameplayAbilityTargetDataHandle TargetDataHandle, int32 TargetDataIndex, int32 TargetActorIndex, FVector TargetLocationOffset, ERootMotionMoveToActorTargetOffsetType OffsetAlignment, float Duration, class UCurveFloat* TargetLerpSpeedHorizontal, class UCurveFloat* TargetLerpSpeedVertical, bool bSetNewMovementMode, TEnumAsByte<EMovementMode> MovementMode, bool bRestrictSpeedToExpected, class UCurveVector* PathOffsetCurve, class UCurveFloat* TimeMappingCurve, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish, bool bDisableDestinationReachedInterrupt);
    class UAbilityTask_ApplyRootMotionMoveToActorForce* ApplyRootMotionMoveToActorForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, class AActor* TargetActor, FVector TargetLocationOffset, ERootMotionMoveToActorTargetOffsetType OffsetAlignment, float Duration, class UCurveFloat* TargetLerpSpeedHorizontal, class UCurveFloat* TargetLerpSpeedVertical, bool bSetNewMovementMode, TEnumAsByte<EMovementMode> MovementMode, bool bRestrictSpeedToExpected, class UCurveVector* PathOffsetCurve, class UCurveFloat* TimeMappingCurve, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish, bool bDisableDestinationReachedInterrupt);
}; // Size: 0x130

class UAbilityTask_ApplyRootMotionMoveToForce : public UAbilityTask_ApplyRootMotion_Base
{
    FAbilityTask_ApplyRootMotionMoveToForceOnTimedOut OnTimedOut;                     // 0x00B8 (size: 0x10)
    void ApplyRootMotionMoveToForceDelegate();
    FAbilityTask_ApplyRootMotionMoveToForceOnTimedOutAndDestinationReached OnTimedOutAndDestinationReached; // 0x00C8 (size: 0x10)
    void ApplyRootMotionMoveToForceDelegate();
    FVector StartLocation;                                                            // 0x00D8 (size: 0xC)
    FVector TargetLocation;                                                           // 0x00E4 (size: 0xC)
    float Duration;                                                                   // 0x00F0 (size: 0x4)
    bool bSetNewMovementMode;                                                         // 0x00F4 (size: 0x1)
    TEnumAsByte<EMovementMode> NewMovementMode;                                       // 0x00F5 (size: 0x1)
    bool bRestrictSpeedToExpected;                                                    // 0x00F6 (size: 0x1)
    char padding_0[0x1];                                                              // 0x00F7 (size: 0x1)
    class UCurveVector* PathOffsetCurve;                                              // 0x00F8 (size: 0x8)

    class UAbilityTask_ApplyRootMotionMoveToForce* ApplyRootMotionMoveToForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FVector TargetLocation, float Duration, bool bSetNewMovementMode, TEnumAsByte<EMovementMode> MovementMode, bool bRestrictSpeedToExpected, class UCurveVector* PathOffsetCurve, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish);
}; // Size: 0x108

class UAbilityTask_ApplyRootMotionRadialForce : public UAbilityTask_ApplyRootMotion_Base
{
    FAbilityTask_ApplyRootMotionRadialForceOnFinish OnFinish;                         // 0x00B8 (size: 0x10)
    void ApplyRootMotionRadialForceDelegate();
    FVector Location;                                                                 // 0x00C8 (size: 0xC)
    char padding_0[0x4];                                                              // 0x00D4 (size: 0x4)
    class AActor* LocationActor;                                                      // 0x00D8 (size: 0x8)
    float Strength;                                                                   // 0x00E0 (size: 0x4)
    float Duration;                                                                   // 0x00E4 (size: 0x4)
    float Radius;                                                                     // 0x00E8 (size: 0x4)
    bool bIsPush;                                                                     // 0x00EC (size: 0x1)
    bool bIsAdditive;                                                                 // 0x00ED (size: 0x1)
    bool bNoZForce;                                                                   // 0x00EE (size: 0x1)
    char padding_1[0x1];                                                              // 0x00EF (size: 0x1)
    class UCurveFloat* StrengthDistanceFalloff;                                       // 0x00F0 (size: 0x8)
    class UCurveFloat* StrengthOverTime;                                              // 0x00F8 (size: 0x8)
    bool bUseFixedWorldDirection;                                                     // 0x0100 (size: 0x1)
    char padding_2[0x3];                                                              // 0x0101 (size: 0x3)
    FRotator FixedWorldDirection;                                                     // 0x0104 (size: 0xC)

    class UAbilityTask_ApplyRootMotionRadialForce* ApplyRootMotionRadialForce(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FVector Location, class AActor* LocationActor, float Strength, float Duration, float Radius, bool bIsPush, bool bIsAdditive, bool bNoZForce, class UCurveFloat* StrengthDistanceFalloff, class UCurveFloat* StrengthOverTime, bool bUseFixedWorldDirection, FRotator FixedWorldDirection, ERootMotionFinishVelocityMode VelocityOnFinishMode, FVector SetVelocityOnFinish, float ClampVelocityOnFinish);
}; // Size: 0x110

class UAbilityTask_ApplyRootMotion_Base : public UAbilityTask
{
    FName ForceName;                                                                  // 0x0084 (size: 0x8)
    ERootMotionFinishVelocityMode FinishVelocityMode;                                 // 0x008C (size: 0x1)
    char padding_0[0x3];                                                              // 0x008D (size: 0x3)
    FVector FinishSetVelocity;                                                        // 0x0090 (size: 0xC)
    float FinishClampVelocity;                                                        // 0x009C (size: 0x4)
    class UCharacterMovementComponent* MovementComponent;                             // 0x00A0 (size: 0x8)

}; // Size: 0xB8

class UAbilityTask_MoveToLocation : public UAbilityTask
{
    FAbilityTask_MoveToLocationOnTargetLocationReached OnTargetLocationReached;       // 0x0088 (size: 0x10)
    void MoveToLocationDelegate();
    char padding_0[0x4];                                                              // 0x0098 (size: 0x4)
    FVector StartLocation;                                                            // 0x009C (size: 0xC)
    FVector TargetLocation;                                                           // 0x00A8 (size: 0xC)
    float DurationOfMovement;                                                         // 0x00B4 (size: 0x4)
    char padding_1[0x8];                                                              // 0x00B8 (size: 0x8)
    class UCurveFloat* LerpCurve;                                                     // 0x00C0 (size: 0x8)
    class UCurveVector* LerpCurveVector;                                              // 0x00C8 (size: 0x8)

    class UAbilityTask_MoveToLocation* MoveToLocation(class UGameplayAbility* OwningAbility, FName TaskInstanceName, FVector Location, float Duration, class UCurveFloat* OptionalInterpolationCurve, class UCurveVector* OptionalVectorInterpolationCurve);
}; // Size: 0xD0

class UAbilityTask_NetworkSyncPoint : public UAbilityTask
{
    FAbilityTask_NetworkSyncPointOnSync OnSync;                                       // 0x0080 (size: 0x10)
    void NetworkSyncDelegate();

    class UAbilityTask_NetworkSyncPoint* WaitNetSync(class UGameplayAbility* OwningAbility, EAbilityTaskNetSyncType SyncType);
    void OnSignalCallback();
}; // Size: 0x98

class UAbilityTask_PlayMontageAndWait : public UAbilityTask
{
    FAbilityTask_PlayMontageAndWaitOnCompleted OnCompleted;                           // 0x0080 (size: 0x10)
    void MontageWaitSimpleDelegate();
    FAbilityTask_PlayMontageAndWaitOnBlendOut OnBlendOut;                             // 0x0090 (size: 0x10)
    void MontageWaitSimpleDelegate();
    FAbilityTask_PlayMontageAndWaitOnInterrupted OnInterrupted;                       // 0x00A0 (size: 0x10)
    void MontageWaitSimpleDelegate();
    FAbilityTask_PlayMontageAndWaitOnCancelled OnCancelled;                           // 0x00B0 (size: 0x10)
    void MontageWaitSimpleDelegate();
    char padding_0[0x28];                                                             // 0x00C0 (size: 0x28)
    class UAnimMontage* MontageToPlay;                                                // 0x00E8 (size: 0x8)
    float Rate;                                                                       // 0x00F0 (size: 0x4)
    FName StartSection;                                                               // 0x00F4 (size: 0x8)
    float AnimRootMotionTranslationScale;                                             // 0x00FC (size: 0x4)
    float StartTimeSeconds;                                                           // 0x0100 (size: 0x4)
    bool bStopWhenAbilityEnds;                                                        // 0x0104 (size: 0x1)

    void OnMontageInterrupted();
    void OnMontageEnded(class UAnimMontage* Montage, bool bInterrupted);
    void OnMontageBlendingOut(class UAnimMontage* Montage, bool bInterrupted);
    class UAbilityTask_PlayMontageAndWait* CreatePlayMontageAndWaitProxy(class UGameplayAbility* OwningAbility, FName TaskInstanceName, class UAnimMontage* MontageToPlay, float Rate, FName StartSection, bool bStopWhenAbilityEnds, float AnimRootMotionTranslationScale, float StartTimeSeconds);
}; // Size: 0x108

class UAbilityTask_Repeat : public UAbilityTask
{
    FAbilityTask_RepeatOnPerformAction OnPerformAction;                               // 0x0080 (size: 0x10)
    void RepeatedActionDelegate(int32 ActionNumber);
    FAbilityTask_RepeatOnFinished OnFinished;                                         // 0x0090 (size: 0x10)
    void RepeatedActionDelegate(int32 ActionNumber);

    class UAbilityTask_Repeat* RepeatAction(class UGameplayAbility* OwningAbility, float TimeBetweenActions, int32 TotalActionCount);
}; // Size: 0xB8

class UAbilityTask_SpawnActor : public UAbilityTask
{
    FAbilityTask_SpawnActorSuccess Success;                                           // 0x0080 (size: 0x10)
    void SpawnActorDelegate(class AActor* SpawnedActor);
    FAbilityTask_SpawnActorDidNotSpawn DidNotSpawn;                                   // 0x0090 (size: 0x10)
    void SpawnActorDelegate(class AActor* SpawnedActor);

    class UAbilityTask_SpawnActor* SpawnActor(class UGameplayAbility* OwningAbility, FGameplayAbilityTargetDataHandle TargetData, TSubclassOf<class AActor> Class);
    void FinishSpawningActor(class UGameplayAbility* OwningAbility, FGameplayAbilityTargetDataHandle TargetData, class AActor* SpawnedActor);
    bool BeginSpawningActor(class UGameplayAbility* OwningAbility, FGameplayAbilityTargetDataHandle TargetData, TSubclassOf<class AActor> Class, class AActor*& SpawnedActor);
}; // Size: 0xC8

class UAbilityTask_StartAbilityState : public UAbilityTask
{
    FAbilityTask_StartAbilityStateOnStateEnded OnStateEnded;                          // 0x0080 (size: 0x10)
    void AbilityStateDelegate();
    FAbilityTask_StartAbilityStateOnStateInterrupted OnStateInterrupted;              // 0x0090 (size: 0x10)
    void AbilityStateDelegate();

    class UAbilityTask_StartAbilityState* StartAbilityState(class UGameplayAbility* OwningAbility, FName StateName, bool bEndCurrentState);
}; // Size: 0xB8

class UAbilityTask_VisualizeTargeting : public UAbilityTask
{
    FAbilityTask_VisualizeTargetingTimeElapsed TimeElapsed;                           // 0x0080 (size: 0x10)
    void VisualizeTargetingDelegate();

    class UAbilityTask_VisualizeTargeting* VisualizeTargetingUsingActor(class UGameplayAbility* OwningAbility, class AGameplayAbilityTargetActor* TargetActor, FName TaskInstanceName, float Duration);
    class UAbilityTask_VisualizeTargeting* VisualizeTargeting(class UGameplayAbility* OwningAbility, TSubclassOf<class AGameplayAbilityTargetActor> Class, FName TaskInstanceName, float Duration);
    void FinishSpawningActor(class UGameplayAbility* OwningAbility, class AGameplayAbilityTargetActor* SpawnedActor);
    bool BeginSpawningActor(class UGameplayAbility* OwningAbility, TSubclassOf<class AGameplayAbilityTargetActor> Class, class AGameplayAbilityTargetActor*& SpawnedActor);
}; // Size: 0xA8

class UAbilityTask_WaitAbilityActivate : public UAbilityTask
{
    FAbilityTask_WaitAbilityActivateOnActivate OnActivate;                            // 0x0080 (size: 0x10)
    void WaitAbilityActivateDelegate(class UGameplayAbility* ActivatedAbility);

    class UAbilityTask_WaitAbilityActivate* WaitForAbilityActivateWithTagRequirements(class UGameplayAbility* OwningAbility, FGameplayTagRequirements TagRequirements, bool IncludeTriggeredAbilities, bool TriggerOnce);
    class UAbilityTask_WaitAbilityActivate* WaitForAbilityActivate_Query(class UGameplayAbility* OwningAbility, FGameplayTagQuery Query, bool IncludeTriggeredAbilities, bool TriggerOnce);
    class UAbilityTask_WaitAbilityActivate* WaitForAbilityActivate(class UGameplayAbility* OwningAbility, FGameplayTag WithTag, FGameplayTag WithoutTag, bool IncludeTriggeredAbilities, bool TriggerOnce);
    void OnAbilityActivate(class UGameplayAbility* ActivatedAbility);
}; // Size: 0x138

class UAbilityTask_WaitAbilityCommit : public UAbilityTask
{
    FAbilityTask_WaitAbilityCommitOnCommit OnCommit;                                  // 0x0080 (size: 0x10)
    void WaitAbilityCommitDelegate(class UGameplayAbility* ActivatedAbility);

    class UAbilityTask_WaitAbilityCommit* WaitForAbilityCommit_Query(class UGameplayAbility* OwningAbility, FGameplayTagQuery Query, bool TriggerOnce);
    class UAbilityTask_WaitAbilityCommit* WaitForAbilityCommit(class UGameplayAbility* OwningAbility, FGameplayTag WithTag, FGameplayTag WithoutTage, bool TriggerOnce);
    void OnAbilityCommit(class UGameplayAbility* ActivatedAbility);
}; // Size: 0xF8

class UAbilityTask_WaitAttributeChange : public UAbilityTask
{
    FAbilityTask_WaitAttributeChangeOnChange OnChange;                                // 0x0080 (size: 0x10)
    void WaitAttributeChangeDelegate();
    char padding_0[0x60];                                                             // 0x0090 (size: 0x60)
    class UAbilitySystemComponent* ExternalOwner;                                     // 0x00F0 (size: 0x8)

    class UAbilityTask_WaitAttributeChange* WaitForAttributeChangeWithComparison(class UGameplayAbility* OwningAbility, FGameplayAttribute InAttribute, FGameplayTag InWithTag, FGameplayTag InWithoutTag, TEnumAsByte<EWaitAttributeChangeComparison::Type> InComparisonType, float InComparisonValue, bool TriggerOnce, class AActor* OptionalExternalOwner);
    class UAbilityTask_WaitAttributeChange* WaitForAttributeChange(class UGameplayAbility* OwningAbility, FGameplayAttribute Attribute, FGameplayTag WithSrcTag, FGameplayTag WithoutSrcTag, bool TriggerOnce, class AActor* OptionalExternalOwner);
}; // Size: 0xF8

class UAbilityTask_WaitAttributeChangeRatioThreshold : public UAbilityTask
{
    FAbilityTask_WaitAttributeChangeRatioThresholdOnChange OnChange;                  // 0x0080 (size: 0x10)
    void WaitAttributeChangeRatioThresholdDelegate(bool bMatchesComparison, float CurrentRatio);
    char padding_0[0xA8];                                                             // 0x0090 (size: 0xA8)
    class UAbilitySystemComponent* ExternalOwner;                                     // 0x0138 (size: 0x8)

    class UAbilityTask_WaitAttributeChangeRatioThreshold* WaitForAttributeChangeRatioThreshold(class UGameplayAbility* OwningAbility, FGameplayAttribute AttributeNumerator, FGameplayAttribute AttributeDenominator, TEnumAsByte<EWaitAttributeChangeComparison::Type> ComparisonType, float ComparisonValue, bool bTriggerOnce, class AActor* OptionalExternalOwner);
}; // Size: 0x140

class UAbilityTask_WaitAttributeChangeThreshold : public UAbilityTask
{
    FAbilityTask_WaitAttributeChangeThresholdOnChange OnChange;                       // 0x0080 (size: 0x10)
    void WaitAttributeChangeThresholdDelegate(bool bMatchesComparison, float CurrentValue);
    char padding_0[0x58];                                                             // 0x0090 (size: 0x58)
    class UAbilitySystemComponent* ExternalOwner;                                     // 0x00E8 (size: 0x8)

    class UAbilityTask_WaitAttributeChangeThreshold* WaitForAttributeChangeThreshold(class UGameplayAbility* OwningAbility, FGameplayAttribute Attribute, TEnumAsByte<EWaitAttributeChangeComparison::Type> ComparisonType, float ComparisonValue, bool bTriggerOnce, class AActor* OptionalExternalOwner);
}; // Size: 0xF0

class UAbilityTask_WaitCancel : public UAbilityTask
{
    FAbilityTask_WaitCancelOnCancel OnCancel;                                         // 0x0080 (size: 0x10)
    void WaitCancelDelegate();

    class UAbilityTask_WaitCancel* WaitCancel(class UGameplayAbility* OwningAbility);
    void OnLocalCancelCallback();
    void OnCancelCallback();
}; // Size: 0x98

class UAbilityTask_WaitConfirm : public UAbilityTask
{
    FAbilityTask_WaitConfirmOnConfirm OnConfirm;                                      // 0x0080 (size: 0x10)
    void GenericGameplayTaskDelegate();

    class UAbilityTask_WaitConfirm* WaitConfirm(class UGameplayAbility* OwningAbility);
    void OnConfirmCallback(class UGameplayAbility* InAbility);
}; // Size: 0xA0

class UAbilityTask_WaitConfirmCancel : public UAbilityTask
{
    FAbilityTask_WaitConfirmCancelOnConfirm OnConfirm;                                // 0x0080 (size: 0x10)
    void WaitConfirmCancelDelegate();
    FAbilityTask_WaitConfirmCancelOnCancel OnCancel;                                  // 0x0090 (size: 0x10)
    void WaitConfirmCancelDelegate();

    class UAbilityTask_WaitConfirmCancel* WaitConfirmCancel(class UGameplayAbility* OwningAbility);
    void OnLocalConfirmCallback();
    void OnLocalCancelCallback();
    void OnConfirmCallback();
    void OnCancelCallback();
}; // Size: 0xA8

class UAbilityTask_WaitDelay : public UAbilityTask
{
    FAbilityTask_WaitDelayOnFinish OnFinish;                                          // 0x0080 (size: 0x10)
    void WaitDelayDelegate();

    class UAbilityTask_WaitDelay* WaitDelay(class UGameplayAbility* OwningAbility, float Time);
}; // Size: 0x98

class UAbilityTask_WaitGameplayEffectApplied : public UAbilityTask
{
    class UAbilitySystemComponent* ExternalOwner;                                     // 0x01A8 (size: 0x8)

    void OnApplyGameplayEffectCallback(class UAbilitySystemComponent* Target, const FGameplayEffectSpec& SpecApplied, FActiveGameplayEffectHandle ActiveHandle);
}; // Size: 0x1B8

class UAbilityTask_WaitGameplayEffectApplied_Self : public UAbilityTask_WaitGameplayEffectApplied
{
    FAbilityTask_WaitGameplayEffectApplied_SelfOnApplied OnApplied;                   // 0x01B8 (size: 0x10)
    void GameplayEffectAppliedSelfDelegate(class AActor* Source, FGameplayEffectSpecHandle SpecHandle, FActiveGameplayEffectHandle ActiveHandle);

    class UAbilityTask_WaitGameplayEffectApplied_Self* WaitGameplayEffectAppliedToSelf_Query(class UGameplayAbility* OwningAbility, const FGameplayTargetDataFilterHandle SourceFilter, FGameplayTagQuery SourceTagQuery, FGameplayTagQuery TargetTagQuery, bool TriggerOnce, class AActor* OptionalExternalOwner, bool ListenForPeriodicEffect);
    class UAbilityTask_WaitGameplayEffectApplied_Self* WaitGameplayEffectAppliedToSelf(class UGameplayAbility* OwningAbility, const FGameplayTargetDataFilterHandle SourceFilter, FGameplayTagRequirements SourceTagRequirements, FGameplayTagRequirements TargetTagRequirements, bool TriggerOnce, class AActor* OptionalExternalOwner, bool ListenForPeriodicEffect);
}; // Size: 0x1D8

class UAbilityTask_WaitGameplayEffectApplied_Target : public UAbilityTask_WaitGameplayEffectApplied
{
    FAbilityTask_WaitGameplayEffectApplied_TargetOnApplied OnApplied;                 // 0x01B8 (size: 0x10)
    void GameplayEffectAppliedTargetDelegate(class AActor* Target, FGameplayEffectSpecHandle SpecHandle, FActiveGameplayEffectHandle ActiveHandle);

    class UAbilityTask_WaitGameplayEffectApplied_Target* WaitGameplayEffectAppliedToTarget_Query(class UGameplayAbility* OwningAbility, const FGameplayTargetDataFilterHandle SourceFilter, FGameplayTagQuery SourceTagQuery, FGameplayTagQuery TargetTagQuery, bool TriggerOnce, class AActor* OptionalExternalOwner, bool ListenForPeriodicEffect);
    class UAbilityTask_WaitGameplayEffectApplied_Target* WaitGameplayEffectAppliedToTarget(class UGameplayAbility* OwningAbility, const FGameplayTargetDataFilterHandle TargetFilter, FGameplayTagRequirements SourceTagRequirements, FGameplayTagRequirements TargetTagRequirements, bool TriggerOnce, class AActor* OptionalExternalOwner, bool ListenForPeriodicEffects);
}; // Size: 0x1D8

class UAbilityTask_WaitGameplayEffectBlockedImmunity : public UAbilityTask
{
    FAbilityTask_WaitGameplayEffectBlockedImmunityBlocked Blocked;                    // 0x0080 (size: 0x10)
    void GameplayEffectBlockedDelegate(FGameplayEffectSpecHandle BlockedSpec, FActiveGameplayEffectHandle ImmunityGameplayEffectHandle);
    char padding_0[0x88];                                                             // 0x0090 (size: 0x88)
    class UAbilitySystemComponent* ExternalOwner;                                     // 0x0118 (size: 0x8)

    class UAbilityTask_WaitGameplayEffectBlockedImmunity* WaitGameplayEffectBlockedByImmunity(class UGameplayAbility* OwningAbility, FGameplayTagRequirements SourceTagRequirements, FGameplayTagRequirements TargetTagRequirements, class AActor* OptionalExternalTarget, bool OnlyTriggerOnce);
}; // Size: 0x128

class UAbilityTask_WaitGameplayEffectRemoved : public UAbilityTask
{
    FAbilityTask_WaitGameplayEffectRemovedOnRemoved OnRemoved;                        // 0x0080 (size: 0x10)
    void WaitGameplayEffectRemovedDelegate(const FGameplayEffectRemovalInfo& GameplayEffectRemovalInfo);
    FAbilityTask_WaitGameplayEffectRemovedInvalidHandle InvalidHandle;                // 0x0090 (size: 0x10)
    void WaitGameplayEffectRemovedDelegate(const FGameplayEffectRemovalInfo& GameplayEffectRemovalInfo);

    class UAbilityTask_WaitGameplayEffectRemoved* WaitForGameplayEffectRemoved(class UGameplayAbility* OwningAbility, FActiveGameplayEffectHandle Handle);
    void OnGameplayEffectRemoved(const FGameplayEffectRemovalInfo& InGameplayEffectRemovalInfo);
}; // Size: 0xC0

class UAbilityTask_WaitGameplayEffectStackChange : public UAbilityTask
{
    FAbilityTask_WaitGameplayEffectStackChangeOnChange OnChange;                      // 0x0080 (size: 0x10)
    void WaitGameplayEffectStackChangeDelegate(FActiveGameplayEffectHandle Handle, int32 NewCount, int32 OldCount);
    FAbilityTask_WaitGameplayEffectStackChangeInvalidHandle InvalidHandle;            // 0x0090 (size: 0x10)
    void WaitGameplayEffectStackChangeDelegate(FActiveGameplayEffectHandle Handle, int32 NewCount, int32 OldCount);

    class UAbilityTask_WaitGameplayEffectStackChange* WaitForGameplayEffectStackChange(class UGameplayAbility* OwningAbility, FActiveGameplayEffectHandle Handle);
    void OnGameplayEffectStackChange(FActiveGameplayEffectHandle Handle, int32 NewCount, int32 OldCount);
}; // Size: 0xB8

class UAbilityTask_WaitGameplayEvent : public UAbilityTask
{
    FAbilityTask_WaitGameplayEventEventReceived EventReceived;                        // 0x0080 (size: 0x10)
    void WaitGameplayEventDelegate(FGameplayEventData Payload);
    char padding_0[0x8];                                                              // 0x0090 (size: 0x8)
    class UAbilitySystemComponent* OptionalExternalTarget;                            // 0x0098 (size: 0x8)

    class UAbilityTask_WaitGameplayEvent* WaitGameplayEvent(class UGameplayAbility* OwningAbility, FGameplayTag EventTag, class AActor* OptionalExternalTarget, bool OnlyTriggerOnce, bool OnlyMatchExact);
}; // Size: 0xB0

class UAbilityTask_WaitGameplayTag : public UAbilityTask
{
    class UAbilitySystemComponent* OptionalExternalTarget;                            // 0x0090 (size: 0x8)

    void GameplayTagCallback(const FGameplayTag Tag, int32 NewCount);
}; // Size: 0xA8

class UAbilityTask_WaitGameplayTagAdded : public UAbilityTask_WaitGameplayTag
{
    FAbilityTask_WaitGameplayTagAddedAdded Added;                                     // 0x00A8 (size: 0x10)
    void WaitGameplayTagDelegate();

    class UAbilityTask_WaitGameplayTagAdded* WaitGameplayTagAdd(class UGameplayAbility* OwningAbility, FGameplayTag Tag, class AActor* InOptionalExternalTarget, bool OnlyTriggerOnce);
}; // Size: 0xB8

class UAbilityTask_WaitGameplayTagRemoved : public UAbilityTask_WaitGameplayTag
{
    FAbilityTask_WaitGameplayTagRemovedRemoved Removed;                               // 0x00A8 (size: 0x10)
    void WaitGameplayTagDelegate();

    class UAbilityTask_WaitGameplayTagRemoved* WaitGameplayTagRemove(class UGameplayAbility* OwningAbility, FGameplayTag Tag, class AActor* InOptionalExternalTarget, bool OnlyTriggerOnce);
}; // Size: 0xB8

class UAbilityTask_WaitInputPress : public UAbilityTask
{
    FAbilityTask_WaitInputPressOnPress OnPress;                                       // 0x0080 (size: 0x10)
    void InputPressDelegate(float TimeWaited);

    class UAbilityTask_WaitInputPress* WaitInputPress(class UGameplayAbility* OwningAbility, bool bTestAlreadyPressed);
    void OnPressCallback();
}; // Size: 0xA0

class UAbilityTask_WaitInputRelease : public UAbilityTask
{
    FAbilityTask_WaitInputReleaseOnRelease OnRelease;                                 // 0x0080 (size: 0x10)
    void InputReleaseDelegate(float TimeHeld);

    class UAbilityTask_WaitInputRelease* WaitInputRelease(class UGameplayAbility* OwningAbility, bool bTestAlreadyReleased);
    void OnReleaseCallback();
}; // Size: 0xA0

class UAbilityTask_WaitMovementModeChange : public UAbilityTask
{
    FAbilityTask_WaitMovementModeChangeOnChange OnChange;                             // 0x0080 (size: 0x10)
    void MovementModeChangedDelegate(TEnumAsByte<EMovementMode> NewMovementMode);

    void OnMovementModeChange(class ACharacter* Character, TEnumAsByte<EMovementMode> PrevMovementMode, uint8 PreviousCustomMode);
    class UAbilityTask_WaitMovementModeChange* CreateWaitMovementModeChange(class UGameplayAbility* OwningAbility, TEnumAsByte<EMovementMode> NewMode);
}; // Size: 0xA0

class UAbilityTask_WaitOverlap : public UAbilityTask
{
    FAbilityTask_WaitOverlapOnOverlap OnOverlap;                                      // 0x0080 (size: 0x10)
    void WaitOverlapDelegate(const FGameplayAbilityTargetDataHandle& TargetData);

    class UAbilityTask_WaitOverlap* WaitForOverlap(class UGameplayAbility* OwningAbility);
    void OnHitCallback(class UPrimitiveComponent* HitComp, class AActor* OtherActor, class UPrimitiveComponent* OtherComp, FVector NormalImpulse, const FHitResult& Hit);
}; // Size: 0x90

class UAbilityTask_WaitTargetData : public UAbilityTask
{
    FAbilityTask_WaitTargetDataValidData ValidData;                                   // 0x0080 (size: 0x10)
    void WaitTargetDataDelegate(const FGameplayAbilityTargetDataHandle& Data);
    FAbilityTask_WaitTargetDataCancelled Cancelled;                                   // 0x0090 (size: 0x10)
    void WaitTargetDataDelegate(const FGameplayAbilityTargetDataHandle& Data);
    TSubclassOf<class AGameplayAbilityTargetActor> TargetClass;                       // 0x00A0 (size: 0x8)
    class AGameplayAbilityTargetActor* TargetActor;                                   // 0x00A8 (size: 0x8)

    class UAbilityTask_WaitTargetData* WaitTargetDataUsingActor(class UGameplayAbility* OwningAbility, FName TaskInstanceName, TEnumAsByte<EGameplayTargetingConfirmation::Type> ConfirmationType, class AGameplayAbilityTargetActor* TargetActor);
    class UAbilityTask_WaitTargetData* WaitTargetData(class UGameplayAbility* OwningAbility, FName TaskInstanceName, TEnumAsByte<EGameplayTargetingConfirmation::Type> ConfirmationType, TSubclassOf<class AGameplayAbilityTargetActor> Class);
    void OnTargetDataReplicatedCancelledCallback();
    void OnTargetDataReplicatedCallback(const FGameplayAbilityTargetDataHandle& Data, FGameplayTag ActivationTag);
    void OnTargetDataReadyCallback(const FGameplayAbilityTargetDataHandle& Data);
    void OnTargetDataCancelledCallback(const FGameplayAbilityTargetDataHandle& Data);
    void FinishSpawningActor(class UGameplayAbility* OwningAbility, class AGameplayAbilityTargetActor* SpawnedActor);
    bool BeginSpawningActor(class UGameplayAbility* OwningAbility, TSubclassOf<class AGameplayAbilityTargetActor> Class, class AGameplayAbilityTargetActor*& SpawnedActor);
}; // Size: 0xC0

class UAbilityTask_WaitVelocityChange : public UAbilityTask
{
    FAbilityTask_WaitVelocityChangeOnVelocityChage OnVelocityChage;                   // 0x0080 (size: 0x10)
    void WaitVelocityChangeDelegate();
    class UMovementComponent* CachedMovementComponent;                                // 0x0090 (size: 0x8)

    class UAbilityTask_WaitVelocityChange* CreateWaitVelocityChange(class UGameplayAbility* OwningAbility, FVector Direction, float MinimumMagnitude);
}; // Size: 0xA8

class UAttributeSet : public UObject
{
    char padding_0[0x30];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x30

class UGameplayAbility : public UObject
{
    FGameplayTagContainer AbilityTags;                                                // 0x00A8 (size: 0x20)
    bool bReplicateInputDirectly;                                                     // 0x00C8 (size: 0x1)
    bool RemoteInstanceEnded;                                                         // 0x00C9 (size: 0x1)
    char padding_0[0x4];                                                              // 0x00CA (size: 0x4)
    TEnumAsByte<EGameplayAbilityReplicationPolicy::Type> ReplicationPolicy;           // 0x00CE (size: 0x1)
    TEnumAsByte<EGameplayAbilityInstancingPolicy::Type> InstancingPolicy;             // 0x00CF (size: 0x1)
    bool bServerRespectsRemoteAbilityCancellation;                                    // 0x00D0 (size: 0x1)
    bool bRetriggerInstancedAbility;                                                  // 0x00D1 (size: 0x1)
    char padding_1[0x6];                                                              // 0x00D2 (size: 0x6)
    FGameplayAbilityActivationInfo CurrentActivationInfo;                             // 0x00D8 (size: 0x18)
    FGameplayEventData CurrentEventData;                                              // 0x00F0 (size: 0xB0)
    TEnumAsByte<EGameplayAbilityNetExecutionPolicy::Type> NetExecutionPolicy;         // 0x01A0 (size: 0x1)
    TEnumAsByte<EGameplayAbilityNetSecurityPolicy::Type> NetSecurityPolicy;           // 0x01A1 (size: 0x1)
    char padding_2[0x6];                                                              // 0x01A2 (size: 0x6)
    TSubclassOf<class UGameplayEffect> CostGameplayEffectClass;                       // 0x01A8 (size: 0x8)
    TArray<FAbilityTriggerData> AbilityTriggers;                                      // 0x01B0 (size: 0x10)
    TSubclassOf<class UGameplayEffect> CooldownGameplayEffectClass;                   // 0x01C0 (size: 0x8)
    FGameplayTagContainer CancelAbilitiesWithTag;                                     // 0x01C8 (size: 0x20)
    FGameplayTagContainer BlockAbilitiesWithTag;                                      // 0x01E8 (size: 0x20)
    FGameplayTagContainer ActivationOwnedTags;                                        // 0x0208 (size: 0x20)
    FGameplayTagContainer ActivationRequiredTags;                                     // 0x0228 (size: 0x20)
    FGameplayTagContainer ActivationBlockedTags;                                      // 0x0248 (size: 0x20)
    FGameplayTagContainer SourceRequiredTags;                                         // 0x0268 (size: 0x20)
    FGameplayTagContainer SourceBlockedTags;                                          // 0x0288 (size: 0x20)
    FGameplayTagContainer TargetRequiredTags;                                         // 0x02A8 (size: 0x20)
    FGameplayTagContainer TargetBlockedTags;                                          // 0x02C8 (size: 0x20)
    char padding_3[0x20];                                                             // 0x02E8 (size: 0x20)
    TArray<class UGameplayTask*> ActiveTasks;                                         // 0x0308 (size: 0x10)
    char padding_4[0x10];                                                             // 0x0318 (size: 0x10)
    class UAnimMontage* CurrentMontage;                                               // 0x0328 (size: 0x8)
    char padding_5[0x60];                                                             // 0x0330 (size: 0x60)
    bool bIsActive;                                                                   // 0x0390 (size: 0x1)
    bool bIsAbilityEnding;                                                            // 0x0391 (size: 0x1)
    bool bIsCancelable;                                                               // 0x0392 (size: 0x1)
    bool bIsBlockingOtherAbilities;                                                   // 0x0393 (size: 0x1)
    char padding_6[0x14];                                                             // 0x0394 (size: 0x14)
    bool bMarkPendingKillOnAbilityEnd;                                                // 0x03A8 (size: 0x1)

    void SetShouldBlockOtherAbilities(bool bShouldBlockAbilities);
    void SetCanBeCanceled(bool bCanBeCanceled);
    void SendGameplayEvent(FGameplayTag EventTag, FGameplayEventData Payload);
    void RemoveGrantedByEffect();
    void MontageStop(float OverrideBlendOutTime);
    void MontageSetNextSectionName(FName FromSectionName, FName ToSectionName);
    void MontageJumpToSection(FName SectionName);
    FGameplayAbilityTargetingLocationInfo MakeTargetLocationInfoFromOwnerSkeletalMeshComponent(FName SocketName);
    FGameplayAbilityTargetingLocationInfo MakeTargetLocationInfoFromOwnerActor();
    FGameplayEffectSpecHandle MakeOutgoingGameplayEffectSpec(TSubclassOf<class UGameplayEffect> GameplayEffectClass, float Level);
    bool K2_ShouldAbilityRespondToEvent(FGameplayAbilityActorInfo ActorInfo, FGameplayEventData Payload);
    void K2_RemoveGameplayCue(FGameplayTag GameplayCueTag);
    void K2_OnEndAbility(bool bWasCancelled);
    bool K2_HasAuthority();
    void K2_ExecuteGameplayCueWithParams(FGameplayTag GameplayCueTag, const FGameplayCueParameters& GameplayCueParameters);
    void K2_ExecuteGameplayCue(FGameplayTag GameplayCueTag, FGameplayEffectContextHandle Context);
    void K2_EndAbility();
    void K2_CommitExecute();
    bool K2_CommitAbilityCost(bool BroadcastCommitEvent);
    bool K2_CommitAbilityCooldown(bool BroadcastCommitEvent, bool ForceCooldown);
    bool K2_CommitAbility();
    bool K2_CheckAbilityCost();
    bool K2_CheckAbilityCooldown();
    void K2_CancelAbility();
    bool K2_CanActivateAbility(FGameplayAbilityActorInfo ActorInfo, const FGameplayAbilitySpecHandle Handle, FGameplayTagContainer& RelevantTags);
    TArray<FActiveGameplayEffectHandle> K2_ApplyGameplayEffectSpecToTarget(const FGameplayEffectSpecHandle EffectSpecHandle, FGameplayAbilityTargetDataHandle TargetData);
    FActiveGameplayEffectHandle K2_ApplyGameplayEffectSpecToOwner(const FGameplayEffectSpecHandle EffectSpecHandle);
    void K2_AddGameplayCueWithParams(FGameplayTag GameplayCueTag, const FGameplayCueParameters& GameplayCueParameter, bool bRemoveOnAbilityEnd);
    void K2_AddGameplayCue(FGameplayTag GameplayCueTag, FGameplayEffectContextHandle Context, bool bRemoveOnAbilityEnd);
    void K2_ActivateAbilityFromEvent(const FGameplayEventData& EventData);
    void K2_ActivateAbility();
    bool IsLocallyControlled();
    void InvalidateClientPredictionKey();
    class UObject* GetSourceObject_BP(FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo& ActorInfo);
    class USkeletalMeshComponent* GetOwningComponentFromActorInfo();
    class AActor* GetOwningActorFromActorInfo();
    FGameplayEffectContextHandle GetGrantedByEffectContext();
    class UObject* GetCurrentSourceObject();
    class UAnimMontage* GetCurrentMontage();
    float GetCooldownTimeRemaining();
    FGameplayEffectContextHandle GetContextFromOwner(FGameplayAbilityTargetDataHandle OptionalTargetData);
    class AActor* GetAvatarActorFromActorInfo();
    FGameplayAbilityActorInfo GetActorInfo();
    class UAbilitySystemComponent* GetAbilitySystemComponentFromActorInfo();
    int32 GetAbilityLevel_BP(FGameplayAbilitySpecHandle Handle, const FGameplayAbilityActorInfo& ActorInfo);
    int32 GetAbilityLevel();
    void EndTaskByInstanceName(FName InstanceName);
    void EndAbilityState(FName OptionalStateNameToEnd);
    void ConfirmTaskByInstanceName(FName InstanceName, bool bEndTask);
    void CancelTaskByInstanceName(FName InstanceName);
    void BP_RemoveGameplayEffectFromOwnerWithHandle(FActiveGameplayEffectHandle Handle, int32 StacksToRemove);
    void BP_RemoveGameplayEffectFromOwnerWithGrantedTags(FGameplayTagContainer WithGrantedTags, int32 StacksToRemove);
    void BP_RemoveGameplayEffectFromOwnerWithAssetTags(FGameplayTagContainer WithAssetTags, int32 StacksToRemove);
    TArray<FActiveGameplayEffectHandle> BP_ApplyGameplayEffectToTarget(FGameplayAbilityTargetDataHandle TargetData, TSubclassOf<class UGameplayEffect> GameplayEffectClass, int32 GameplayEffectLevel, int32 Stacks);
    FActiveGameplayEffectHandle BP_ApplyGameplayEffectToOwner(TSubclassOf<class UGameplayEffect> GameplayEffectClass, int32 GameplayEffectLevel, int32 Stacks);
}; // Size: 0x3B0

class UGameplayAbilityBlueprint : public UBlueprint
{
    char padding_0[0xA0];                                                             // 0x0000 (size: 0x0)
}; // Size: 0xA0

class UGameplayAbilitySet : public UDataAsset
{
    TArray<FGameplayAbilityBindInfo> Abilities;                                       // 0x0030 (size: 0x10)

}; // Size: 0x40

class UGameplayAbility_CharacterJump : public UGameplayAbility
{
    char padding_0[0x3B0];                                                            // 0x0000 (size: 0x0)
}; // Size: 0x3B0

class UGameplayAbility_Montage : public UGameplayAbility
{
    class UAnimMontage* MontageToPlay;                                                // 0x03B0 (size: 0x8)
    float PlayRate;                                                                   // 0x03B8 (size: 0x4)
    FName SectionName;                                                                // 0x03BC (size: 0x8)
    char padding_0[0x4];                                                              // 0x03C4 (size: 0x4)
    TArray<class TSubclassOf<UGameplayEffect>> GameplayEffectClassesWhileAnimating;   // 0x03C8 (size: 0x10)
    TArray<class UGameplayEffect*> GameplayEffectsWhileAnimating;                     // 0x03D8 (size: 0x10)

}; // Size: 0x3E8

class UGameplayCueManager : public UDataAsset
{
    FGameplayCueObjectLibrary RuntimeGameplayCueObjectLibrary;                        // 0x0048 (size: 0x50)
    FGameplayCueObjectLibrary EditorGameplayCueObjectLibrary;                         // 0x0098 (size: 0x50)
    char padding_0[0x1C8];                                                            // 0x00E8 (size: 0x1C8)
    TArray<class UClass*> LoadedGameplayCueNotifyClasses;                             // 0x02B0 (size: 0x10)
    TArray<class TSubclassOf<AGameplayCueNotify_Actor>> GameplayCueClassesForPreallocation; // 0x02C0 (size: 0x10)
    TArray<FGameplayCuePendingExecute> PendingExecuteCues;                            // 0x02D0 (size: 0x10)
    int32 GameplayCueSendContextCount;                                                // 0x02E0 (size: 0x4)
    char padding_1[0x4];                                                              // 0x02E4 (size: 0x4)
    TArray<FPreallocationInfo> PreallocationInfoList_Internal;                        // 0x02E8 (size: 0x10)

}; // Size: 0x310

class UGameplayCueNotify_HitImpact : public UGameplayCueNotify_Static
{
    class USoundBase* Sound;                                                          // 0x0040 (size: 0x8)
    class UParticleSystem* ParticleSystem;                                            // 0x0048 (size: 0x8)

}; // Size: 0x50

class UGameplayCueNotify_Static : public UObject
{
    FGameplayTag GameplayCueTag;                                                      // 0x0028 (size: 0x8)
    FName GameplayCueName;                                                            // 0x0030 (size: 0x8)
    bool IsOverride;                                                                  // 0x0038 (size: 0x1)

    bool WhileActive(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    bool OnRemove(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    bool OnExecute(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    bool OnActive(class AActor* MyTarget, const FGameplayCueParameters& Parameters);
    void K2_HandleGameplayCue(class AActor* MyTarget, TEnumAsByte<EGameplayCueEvent::Type> EventType, const FGameplayCueParameters& Parameters);
}; // Size: 0x40

class UGameplayCueSet : public UDataAsset
{
    TArray<FGameplayCueNotifyData> GameplayCueData;                                   // 0x0030 (size: 0x10)

}; // Size: 0x90

class UGameplayCueTranslator : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UGameplayCueTranslator_Test : public UGameplayCueTranslator
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UGameplayEffect : public UObject
{
    EGameplayEffectDurationType DurationPolicy;                                       // 0x0030 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0031 (size: 0x7)
    FGameplayEffectModifierMagnitude DurationMagnitude;                               // 0x0038 (size: 0x1E0)
    FScalableFloat Period;                                                            // 0x0218 (size: 0x28)
    bool bExecutePeriodicEffectOnApplication;                                         // 0x0240 (size: 0x1)
    EGameplayEffectPeriodInhibitionRemovedPolicy PeriodicInhibitionPolicy;            // 0x0241 (size: 0x1)
    char padding_1[0x6];                                                              // 0x0242 (size: 0x6)
    TArray<FGameplayModifierInfo> Modifiers;                                          // 0x0248 (size: 0x10)
    TArray<FGameplayEffectExecutionDefinition> Executions;                            // 0x0258 (size: 0x10)
    FScalableFloat ChanceToApplyToTarget;                                             // 0x0268 (size: 0x28)
    TArray<class TSubclassOf<UGameplayEffectCustomApplicationRequirement>> ApplicationRequirements; // 0x0290 (size: 0x10)
    TArray<class TSubclassOf<UGameplayEffect>> TargetEffectClasses;                   // 0x02A0 (size: 0x10)
    TArray<FConditionalGameplayEffect> ConditionalGameplayEffects;                    // 0x02B0 (size: 0x10)
    TArray<class TSubclassOf<UGameplayEffect>> OverflowEffects;                       // 0x02C0 (size: 0x10)
    bool bDenyOverflowApplication;                                                    // 0x02D0 (size: 0x1)
    bool bClearStackOnOverflow;                                                       // 0x02D1 (size: 0x1)
    char padding_2[0x6];                                                              // 0x02D2 (size: 0x6)
    TArray<class TSubclassOf<UGameplayEffect>> PrematureExpirationEffectClasses;      // 0x02D8 (size: 0x10)
    TArray<class TSubclassOf<UGameplayEffect>> RoutineExpirationEffectClasses;        // 0x02E8 (size: 0x10)
    bool bRequireModifierSuccessToTriggerCues;                                        // 0x02F8 (size: 0x1)
    bool bSuppressStackingCues;                                                       // 0x02F9 (size: 0x1)
    char padding_3[0x6];                                                              // 0x02FA (size: 0x6)
    TArray<FGameplayEffectCue> GameplayCues;                                          // 0x0300 (size: 0x10)
    class UGameplayEffectUIData* UIData;                                              // 0x0310 (size: 0x8)
    FInheritedTagContainer InheritableGameplayEffectTags;                             // 0x0318 (size: 0x60)
    FInheritedTagContainer InheritableOwnedTagsContainer;                             // 0x0378 (size: 0x60)
    FGameplayTagRequirements OngoingTagRequirements;                                  // 0x03D8 (size: 0x40)
    FGameplayTagRequirements ApplicationTagRequirements;                              // 0x0418 (size: 0x40)
    FGameplayTagRequirements RemovalTagRequirements;                                  // 0x0458 (size: 0x40)
    FInheritedTagContainer RemoveGameplayEffectsWithTags;                             // 0x0498 (size: 0x60)
    FGameplayTagRequirements GrantedApplicationImmunityTags;                          // 0x04F8 (size: 0x40)
    FGameplayEffectQuery GrantedApplicationImmunityQuery;                             // 0x0538 (size: 0x150)
    char padding_4[0x8];                                                              // 0x0688 (size: 0x8)
    FGameplayEffectQuery RemoveGameplayEffectQuery;                                   // 0x0690 (size: 0x150)
    char padding_5[0x1];                                                              // 0x07E0 (size: 0x1)
    EGameplayEffectStackingType StackingType;                                         // 0x07E1 (size: 0x1)
    char padding_6[0x2];                                                              // 0x07E2 (size: 0x2)
    int32 StackLimitCount;                                                            // 0x07E4 (size: 0x4)
    EGameplayEffectStackingDurationPolicy StackDurationRefreshPolicy;                 // 0x07E8 (size: 0x1)
    EGameplayEffectStackingPeriodPolicy StackPeriodResetPolicy;                       // 0x07E9 (size: 0x1)
    EGameplayEffectStackingExpirationPolicy StackExpirationPolicy;                    // 0x07EA (size: 0x1)
    char padding_7[0x5];                                                              // 0x07EB (size: 0x5)
    TArray<FGameplayAbilitySpecDef> GrantedAbilities;                                 // 0x07F0 (size: 0x10)

}; // Size: 0x800

class UGameplayEffectCalculation : public UObject
{
    TArray<FGameplayEffectAttributeCaptureDefinition> RelevantAttributesToCapture;    // 0x0028 (size: 0x10)

}; // Size: 0x38

class UGameplayEffectCustomApplicationRequirement : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool CanApplyGameplayEffect(const class UGameplayEffect* GameplayEffect, const FGameplayEffectSpec& Spec, class UAbilitySystemComponent* ASC);
}; // Size: 0x28

class UGameplayEffectExecutionCalculation : public UGameplayEffectCalculation
{
    bool bRequiresPassedInTags;                                                       // 0x0038 (size: 0x1)

    void Execute(const FGameplayEffectCustomExecutionParameters& ExecutionParams, FGameplayEffectCustomExecutionOutput& OutExecutionOutput);
}; // Size: 0x40

class UGameplayEffectUIData : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UGameplayEffectUIData_TextOnly : public UGameplayEffectUIData
{
    FText Description;                                                                // 0x0028 (size: 0x18)

}; // Size: 0x40

class UGameplayModMagnitudeCalculation : public UGameplayEffectCalculation
{
    bool bAllowNonNetAuthorityDependencyRegistration;                                 // 0x0038 (size: 0x1)

    float CalculateBaseMagnitude(const FGameplayEffectSpec& Spec);
}; // Size: 0x40

class UGameplayTagReponseTable : public UDataAsset
{
    TArray<FGameplayTagResponseTableEntry> Entries;                                   // 0x0030 (size: 0x10)

    void TagResponseEvent(const FGameplayTag Tag, int32 NewCount, class UAbilitySystemComponent* ASC, int32 Idx);
}; // Size: 0x1E8

class UMovieSceneGameplayCueSection : public UMovieSceneHookSection
{
    FMovieSceneGameplayCueKey Cue;                                                    // 0x0100 (size: 0x78)

}; // Size: 0x178

class UMovieSceneGameplayCueTrack : public UMovieSceneNameableTrack
{
    TArray<class UMovieSceneSection*> Sections;                                       // 0x0090 (size: 0x10)

    void SetSequencerTrackHandler(FSetSequencerTrackHandlerInGameplayCueTrackHandler InGameplayCueTrackHandler);
}; // Size: 0xA0

class UMovieSceneGameplayCueTriggerSection : public UMovieSceneHookSection
{
    FMovieSceneGameplayCueChannel Channel;                                            // 0x0100 (size: 0x88)

}; // Size: 0x188

#endif
