#ifndef UE4SS_SDK_BP_RouteGuideModifier_HPP
#define UE4SS_SDK_BP_RouteGuideModifier_HPP

class ABP_RouteGuideModifier_C : public AActor
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0228 (size: 0x8)
    class USBSwitchableNavModifierComponent* SBSwitchableNavModifier;                 // 0x0230 (size: 0x8)
    class USceneComponent* DefaultSceneRoot;                                          // 0x0238 (size: 0x8)
    FName EventTriggerId;                                                             // 0x0240 (size: 0x8)
    bool RouteOpenWhenEventEnable;                                                    // 0x0248 (size: 0x1)

    void ReceiveBeginPlay();
    void ReceiveActorBeginOverlap(class AActor* OtherActor);
    void CheckModify();
    void ExecuteUbergraph_BP_RouteGuideModifier(int32 EntryPoint);
}; // Size: 0x249

#endif
