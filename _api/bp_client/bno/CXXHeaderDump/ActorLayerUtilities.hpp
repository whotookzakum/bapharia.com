#ifndef UE4SS_SDK_ActorLayerUtilities_HPP
#define UE4SS_SDK_ActorLayerUtilities_HPP

struct FActorLayer
{
    FName Name;                                                                       // 0x0000 (size: 0x8)

}; // Size: 0x8

class ULayersBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void RemoveActorFromLayer(class AActor* InActor, const FActorLayer& Layer);
    TArray<class AActor*> GetActors(class UObject* WorldContextObject, const FActorLayer& ActorLayer);
    void AddActorToLayer(class AActor* InActor, const FActorLayer& Layer);
}; // Size: 0x28

#endif
