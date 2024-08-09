#ifndef UE4SS_SDK_SequencerScripting_HPP
#define UE4SS_SDK_SequencerScripting_HPP

#include "SequencerScripting_enums.hpp"

struct FSequencerBindingProxy
{
    FGuid BindingID;                                                                  // 0x0000 (size: 0x10)
    class UMovieSceneSequence* Sequence;                                              // 0x0010 (size: 0x8)

}; // Size: 0x18

struct FSequencerScriptingRange
{
    uint8 bHasStart;                                                                  // 0x0000 (size: 0x1)
    uint8 bHasEnd;                                                                    // 0x0000 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0001 (size: 0x3)
    int32 InclusiveStart;                                                             // 0x0004 (size: 0x4)
    int32 ExclusiveEnd;                                                               // 0x0008 (size: 0x4)
    FFrameRate InternalRate;                                                          // 0x000C (size: 0x8)

}; // Size: 0x14

class UMovieSceneBindingExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetParent(const FSequencerBindingProxy& InBinding, const FSequencerBindingProxy& InParentBinding);
    void SetName(const FSequencerBindingProxy& InBinding, FString InName);
    void SetDisplayName(const FSequencerBindingProxy& InBinding, const FText& InDisplayName);
    void RemoveTrack(const FSequencerBindingProxy& InBinding, class UMovieSceneTrack* TrackToRemove);
    void Remove(const FSequencerBindingProxy& InBinding);
    void MoveBindingContents(const FSequencerBindingProxy& SourceBindingId, const FSequencerBindingProxy& DestinationBindingId);
    bool IsValid(const FSequencerBindingProxy& InBinding);
    TArray<class UMovieSceneTrack*> GetTracks(const FSequencerBindingProxy& InBinding);
    UClass* GetPossessedObjectClass(const FSequencerBindingProxy& InBinding);
    FSequencerBindingProxy GetParent(const FSequencerBindingProxy& InBinding);
    class UObject* GetObjectTemplate(const FSequencerBindingProxy& InBinding);
    FString GetName(const FSequencerBindingProxy& InBinding);
    FGuid GetId(const FSequencerBindingProxy& InBinding);
    FText GetDisplayName(const FSequencerBindingProxy& InBinding);
    TArray<FSequencerBindingProxy> GetChildPossessables(const FSequencerBindingProxy& InBinding);
    TArray<class UMovieSceneTrack*> FindTracksByType(const FSequencerBindingProxy& InBinding, TSubclassOf<class UMovieSceneTrack> TrackType);
    TArray<class UMovieSceneTrack*> FindTracksByExactType(const FSequencerBindingProxy& InBinding, TSubclassOf<class UMovieSceneTrack> TrackType);
    class UMovieSceneTrack* AddTrack(const FSequencerBindingProxy& InBinding, TSubclassOf<class UMovieSceneTrack> TrackType);
}; // Size: 0x28

class UMovieSceneEventTrackExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    class UMovieSceneEventTriggerSection* AddEventTriggerSection(class UMovieSceneEventTrack* InTrack);
    class UMovieSceneEventRepeaterSection* AddEventRepeaterSection(class UMovieSceneEventTrack* InTrack);
}; // Size: 0x28

class UMovieSceneFolderExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    bool SetFolderName(class UMovieSceneFolder* Folder, FName InFolderName);
    bool SetFolderColor(class UMovieSceneFolder* Folder, FColor InFolderColor);
    bool RemoveChildObjectBinding(class UMovieSceneFolder* Folder, const FSequencerBindingProxy InObjectBinding);
    bool RemoveChildMasterTrack(class UMovieSceneFolder* Folder, class UMovieSceneTrack* InMasterTrack);
    bool RemoveChildFolder(class UMovieSceneFolder* TargetFolder, class UMovieSceneFolder* FolderToRemove);
    FName GetFolderName(class UMovieSceneFolder* Folder);
    FColor GetFolderColor(class UMovieSceneFolder* Folder);
    TArray<FSequencerBindingProxy> GetChildObjectBindings(class UMovieSceneFolder* Folder);
    TArray<class UMovieSceneTrack*> GetChildMasterTracks(class UMovieSceneFolder* Folder);
    TArray<class UMovieSceneFolder*> GetChildFolders(class UMovieSceneFolder* Folder);
    bool AddChildObjectBinding(class UMovieSceneFolder* Folder, FSequencerBindingProxy InObjectBinding);
    bool AddChildMasterTrack(class UMovieSceneFolder* Folder, class UMovieSceneTrack* InMasterTrack);
    bool AddChildFolder(class UMovieSceneFolder* TargetFolder, class UMovieSceneFolder* FolderToAdd);
}; // Size: 0x28

class UMovieScenePropertyTrackExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetPropertyNameAndPath(class UMovieScenePropertyTrack* Track, const FName& InPropertyName, FString InPropertyPath);
    void SetObjectPropertyClass(class UMovieSceneObjectPropertyTrack* Track, UClass* PropertyClass);
    FName GetUniqueTrackName(class UMovieScenePropertyTrack* Track);
    FString GetPropertyPath(class UMovieScenePropertyTrack* Track);
    FName GetPropertyName(class UMovieScenePropertyTrack* Track);
    UClass* GetObjectPropertyClass(class UMovieSceneObjectPropertyTrack* Track);
}; // Size: 0x28

class UMovieSceneScriptingActorReferenceChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(FMovieSceneObjectBindingID InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    FMovieSceneObjectBindingID GetDefault();
    class UMovieSceneScriptingActorReferenceKey* AddKey(const FFrameNumber InTime, FMovieSceneObjectBindingID NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingActorReferenceKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(const FMovieSceneObjectBindingID& InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    FMovieSceneObjectBindingID GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingBoolChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(bool InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    int32 GetNumKeys();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    bool GetDefault();
    TArray<bool> EvaluateKeys(FSequencerScriptingRange Range, FFrameRate FrameRate);
    FSequencerScriptingRange ComputeEffectiveRange();
    class UMovieSceneScriptingBoolKey* AddKey(const FFrameNumber& InTime, bool NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingBoolKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(bool InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    bool GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingByteChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(uint8 InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    uint8 GetDefault();
    class UMovieSceneScriptingByteKey* AddKey(const FFrameNumber& InTime, uint8 NewValue, float SubFrame, ESequenceTimeUnit TimeUnit, EMovieSceneKeyInterpolation InInterpolation);
}; // Size: 0x60

class UMovieSceneScriptingByteKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(uint8 InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    uint8 GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingChannel : public UObject
{
    FName ChannelName;                                                                // 0x0028 (size: 0x8)

}; // Size: 0x30

class UMovieSceneScriptingEventChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void RemoveKey(class UMovieSceneScriptingKey* Key);
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    class UMovieSceneScriptingEventKey* AddKey(const FFrameNumber& InTime, FMovieSceneEvent NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingEventKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(const FMovieSceneEvent& InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    FMovieSceneEvent GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingFloatChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetPreInfinityExtrapolation(TEnumAsByte<ERichCurveExtrapolation> InExtrapolation);
    void SetPostInfinityExtrapolation(TEnumAsByte<ERichCurveExtrapolation> InExtrapolation);
    void SetDefault(float InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TEnumAsByte<ERichCurveExtrapolation> GetPreInfinityExtrapolation();
    TEnumAsByte<ERichCurveExtrapolation> GetPostInfinityExtrapolation();
    int32 GetNumKeys();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    float GetDefault();
    TArray<float> EvaluateKeys(FSequencerScriptingRange Range, FFrameRate FrameRate);
    FSequencerScriptingRange ComputeEffectiveRange();
    class UMovieSceneScriptingFloatKey* AddKey(const FFrameNumber& InTime, float NewValue, float SubFrame, ESequenceTimeUnit TimeUnit, EMovieSceneKeyInterpolation InInterpolation);
}; // Size: 0x60

class UMovieSceneScriptingFloatKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(float InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    void SetTangentWeightMode(TEnumAsByte<ERichCurveTangentWeightMode> InNewValue);
    void SetTangentMode(TEnumAsByte<ERichCurveTangentMode> InNewValue);
    void SetLeaveTangentWeight(float InNewValue);
    void SetLeaveTangent(float InNewValue);
    void SetInterpolationMode(TEnumAsByte<ERichCurveInterpMode> InNewValue);
    void SetArriveTangentWeight(float InNewValue);
    void SetArriveTangent(float InNewValue);
    float GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
    TEnumAsByte<ERichCurveTangentWeightMode> GetTangentWeightMode();
    TEnumAsByte<ERichCurveTangentMode> GetTangentMode();
    float GetLeaveTangentWeight();
    float GetLeaveTangent();
    TEnumAsByte<ERichCurveInterpMode> GetInterpolationMode();
    float GetArriveTangentWeight();
    float GetArriveTangent();
}; // Size: 0x60

class UMovieSceneScriptingIntegerChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(int32 InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    int32 GetDefault();
    class UMovieSceneScriptingIntegerKey* AddKey(const FFrameNumber& InTime, int32 NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingIntegerKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(int32 InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    int32 GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingKey : public UObject
{
    char padding_0[0x40];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x40

class UMovieSceneScriptingObjectPathChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(class UObject* InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    class UObject* GetDefault();
    class UMovieSceneScriptingObjectPathKey* AddKey(const FFrameNumber InTime, class UObject* NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingObjectPathKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(class UObject* InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    class UObject* GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingStringChannel : public UMovieSceneScriptingChannel
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetDefault(FString InDefaultValue);
    void RemoveKey(class UMovieSceneScriptingKey* Key);
    void RemoveDefault();
    bool HasDefault();
    TArray<class UMovieSceneScriptingKey*> GetKeys();
    FString GetDefault();
    class UMovieSceneScriptingStringKey* AddKey(const FFrameNumber& InTime, FString NewValue, float SubFrame, ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneScriptingStringKey : public UMovieSceneScriptingKey
{
    char padding_0[0x60];                                                             // 0x0000 (size: 0x0)

    void SetValue(FString InNewValue);
    void SetTime(const FFrameNumber& NewFrameNumber, float SubFrame, ESequenceTimeUnit TimeUnit);
    FString GetValue();
    FFrameTime GetTime(ESequenceTimeUnit TimeUnit);
}; // Size: 0x60

class UMovieSceneSectionExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetStartFrameSeconds(class UMovieSceneSection* Section, float StartTime);
    void SetStartFrameBounded(class UMovieSceneSection* Section, bool bIsBounded);
    void SetStartFrame(class UMovieSceneSection* Section, int32 StartFrame);
    void SetRangeSeconds(class UMovieSceneSection* Section, float StartTime, float EndTime);
    void SetRange(class UMovieSceneSection* Section, int32 StartFrame, int32 EndFrame);
    void SetEndFrameSeconds(class UMovieSceneSection* Section, float EndTime);
    void SetEndFrameBounded(class UMovieSceneSection* Section, bool bIsBounded);
    void SetEndFrame(class UMovieSceneSection* Section, int32 EndFrame);
    bool HasStartFrame(class UMovieSceneSection* Section);
    bool HasEndFrame(class UMovieSceneSection* Section);
    float GetStartFrameSeconds(class UMovieSceneSection* Section);
    int32 GetStartFrame(class UMovieSceneSection* Section);
    int32 GetParentSequenceFrame(class UMovieSceneSubSection* Section, int32 InFrame, class UMovieSceneSequence* ParentSequence);
    float GetEndFrameSeconds(class UMovieSceneSection* Section);
    int32 GetEndFrame(class UMovieSceneSection* Section);
    TArray<class UMovieSceneScriptingChannel*> GetChannels(class UMovieSceneSection* Section);
    TArray<class UMovieSceneScriptingChannel*> FindChannelsByType(class UMovieSceneSection* Section, TSubclassOf<class UMovieSceneScriptingChannel> ChannelType);
}; // Size: 0x28

class UMovieSceneSequenceExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SortMarkedFrames(class UMovieSceneSequence* Sequence);
    void SetWorkRangeStart(class UMovieSceneSequence* InSequence, float StartTimeInSeconds);
    void SetWorkRangeEnd(class UMovieSceneSequence* InSequence, float EndTimeInSeconds);
    void SetViewRangeStart(class UMovieSceneSequence* InSequence, float StartTimeInSeconds);
    void SetViewRangeEnd(class UMovieSceneSequence* InSequence, float EndTimeInSeconds);
    void SetTickResolutionDirectly(class UMovieSceneSequence* Sequence, FFrameRate TickResolution);
    void SetTickResolution(class UMovieSceneSequence* Sequence, FFrameRate TickResolution);
    void SetReadOnly(class UMovieSceneSequence* Sequence, bool bInReadOnly);
    void SetPlaybackStartSeconds(class UMovieSceneSequence* Sequence, float StartTime);
    void SetPlaybackStart(class UMovieSceneSequence* Sequence, int32 StartFrame);
    void SetPlaybackEndSeconds(class UMovieSceneSequence* Sequence, float EndTime);
    void SetPlaybackEnd(class UMovieSceneSequence* Sequence, int32 EndFrame);
    void SetMarkedFrame(class UMovieSceneSequence* Sequence, int32 InMarkIndex, FFrameNumber InFrameNumber);
    void SetEvaluationType(class UMovieSceneSequence* InSequence, EMovieSceneEvaluationType InEvaluationType);
    void SetDisplayRate(class UMovieSceneSequence* Sequence, FFrameRate DisplayRate);
    void SetClockSource(class UMovieSceneSequence* InSequence, EUpdateClockSource InClockSource);
    FSequencerBindingProxy ResolveBindingID(class UMovieSceneSequence* MasterSequence, FMovieSceneObjectBindingID InObjectBindingID);
    bool RemoveMasterTrack(class UMovieSceneSequence* Sequence, class UMovieSceneTrack* MasterTrack);
    FSequencerScriptingRange MakeRangeSeconds(class UMovieSceneSequence* Sequence, float StartTime, float Duration);
    FSequencerScriptingRange MakeRange(class UMovieSceneSequence* Sequence, int32 StartFrame, int32 Duration);
    FMovieSceneObjectBindingID MakeBindingID(class UMovieSceneSequence* MasterSequence, const FSequencerBindingProxy& InBinding, EMovieSceneObjectBindingSpace Space);
    TArray<class UObject*> LocateBoundObjects(class UMovieSceneSequence* Sequence, const FSequencerBindingProxy& InBinding, class UObject* Context);
    bool IsReadOnly(class UMovieSceneSequence* Sequence);
    float GetWorkRangeStart(class UMovieSceneSequence* InSequence);
    float GetWorkRangeEnd(class UMovieSceneSequence* InSequence);
    float GetViewRangeStart(class UMovieSceneSequence* InSequence);
    float GetViewRangeEnd(class UMovieSceneSequence* InSequence);
    FTimecode GetTimecodeSource(class UMovieSceneSequence* Sequence);
    FFrameRate GetTickResolution(class UMovieSceneSequence* Sequence);
    TArray<FSequencerBindingProxy> GetSpawnables(class UMovieSceneSequence* Sequence);
    TArray<class UMovieSceneFolder*> GetRootFoldersInSequence(class UMovieSceneSequence* Sequence);
    TArray<FSequencerBindingProxy> GetPossessables(class UMovieSceneSequence* Sequence);
    FMovieSceneObjectBindingID GetPortableBindingID(class UMovieSceneSequence* MasterSequence, class UMovieSceneSequence* DestinationSequence, const FSequencerBindingProxy& InBinding);
    float GetPlaybackStartSeconds(class UMovieSceneSequence* Sequence);
    int32 GetPlaybackStart(class UMovieSceneSequence* Sequence);
    FSequencerScriptingRange GetPlaybackRange(class UMovieSceneSequence* Sequence);
    float GetPlaybackEndSeconds(class UMovieSceneSequence* Sequence);
    int32 GetPlaybackEnd(class UMovieSceneSequence* Sequence);
    class UMovieScene* GetMovieScene(class UMovieSceneSequence* Sequence);
    TArray<class UMovieSceneTrack*> GetMasterTracks(class UMovieSceneSequence* Sequence);
    TArray<FMovieSceneMarkedFrame> GetMarkedFrames(class UMovieSceneSequence* Sequence);
    EMovieSceneEvaluationType GetEvaluationType(class UMovieSceneSequence* InSequence);
    FFrameRate GetDisplayRate(class UMovieSceneSequence* Sequence);
    EUpdateClockSource GetClockSource(class UMovieSceneSequence* InSequence);
    TArray<FSequencerBindingProxy> GetBindings(class UMovieSceneSequence* Sequence);
    FMovieSceneObjectBindingID GetBindingID(const FSequencerBindingProxy& InBinding);
    int32 FindNextMarkedFrame(class UMovieSceneSequence* Sequence, FFrameNumber InFrameNumber, bool bForward);
    TArray<class UMovieSceneTrack*> FindMasterTracksByType(class UMovieSceneSequence* Sequence, TSubclassOf<class UMovieSceneTrack> TrackType);
    TArray<class UMovieSceneTrack*> FindMasterTracksByExactType(class UMovieSceneSequence* Sequence, TSubclassOf<class UMovieSceneTrack> TrackType);
    int32 FindMarkedFrameByLabel(class UMovieSceneSequence* Sequence, FString InLabel);
    int32 FindMarkedFrameByFrameNumber(class UMovieSceneSequence* Sequence, FFrameNumber InFrameNumber);
    FSequencerBindingProxy FindBindingByName(class UMovieSceneSequence* Sequence, FString Name);
    FSequencerBindingProxy FindBindingById(class UMovieSceneSequence* Sequence, FGuid BindingID);
    void DeleteMarkedFrames(class UMovieSceneSequence* Sequence);
    void DeleteMarkedFrame(class UMovieSceneSequence* Sequence, int32 DeleteIndex);
    FSequencerBindingProxy AddSpawnableFromInstance(class UMovieSceneSequence* Sequence, class UObject* ObjectToSpawn);
    FSequencerBindingProxy AddSpawnableFromClass(class UMovieSceneSequence* Sequence, UClass* ClassToSpawn);
    class UMovieSceneFolder* AddRootFolderToSequence(class UMovieSceneSequence* Sequence, FString NewFolderName);
    FSequencerBindingProxy AddPossessable(class UMovieSceneSequence* Sequence, class UObject* ObjectToPossess);
    class UMovieSceneTrack* AddMasterTrack(class UMovieSceneSequence* Sequence, TSubclassOf<class UMovieSceneTrack> TrackType);
    int32 AddMarkedFrame(class UMovieSceneSequence* Sequence, const FMovieSceneMarkedFrame& InMarkedFrame);
    FSequencerBindingProxy AddChildBinding(class UMovieSceneSequence* Sequence, FSequencerBindingProxy Parent, class UObject* ObjectToBinding);
}; // Size: 0x28

class UMovieSceneTrackExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetSortingOrder(class UMovieSceneTrack* Track, int32 SortingOrder);
    void SetSectionToKey(class UMovieSceneTrack* Track, class UMovieSceneSection* Section);
    void SetDisplayName(class UMovieSceneTrack* Track, const FText& InName);
    void SetColorTint(class UMovieSceneTrack* Track, const FColor& ColorTint);
    void RemoveSection(class UMovieSceneTrack* Track, class UMovieSceneSection* Section);
    int32 GetSortingOrder(class UMovieSceneTrack* Track);
    class UMovieSceneSection* GetSectionToKey(class UMovieSceneTrack* Track);
    TArray<class UMovieSceneSection*> GetSections(class UMovieSceneTrack* Track);
    FText GetDisplayName(class UMovieSceneTrack* Track);
    FColor GetColorTint(class UMovieSceneTrack* Track);
    class UMovieSceneSection* AddSection(class UMovieSceneTrack* Track);
}; // Size: 0x28

class UMovieSceneVectorTrackExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetNumChannelsUsed(class UMovieSceneVectorTrack* Track, int32 InNumChannelsUsed);
    int32 GetNumChannelsUsed(class UMovieSceneVectorTrack* Track);
}; // Size: 0x28

class USequencerScriptingRangeExtensions : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void SetStartSeconds(FSequencerScriptingRange& Range, float Start);
    void SetStartFrame(FSequencerScriptingRange& Range, int32 Start);
    void SetEndSeconds(FSequencerScriptingRange& Range, float End);
    void SetEndFrame(FSequencerScriptingRange& Range, int32 End);
    void RemoveStart(FSequencerScriptingRange& Range);
    void RemoveEnd(FSequencerScriptingRange& Range);
    bool HasStart(const FSequencerScriptingRange& Range);
    bool HasEnd(const FSequencerScriptingRange& Range);
    float GetStartSeconds(const FSequencerScriptingRange& Range);
    int32 GetStartFrame(const FSequencerScriptingRange& Range);
    float GetEndSeconds(const FSequencerScriptingRange& Range);
    int32 GetEndFrame(const FSequencerScriptingRange& Range);
}; // Size: 0x28

#endif
