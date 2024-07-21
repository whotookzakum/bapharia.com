#ifndef UE4SS_SDK_SBUIExtendRenderer_HPP
#define UE4SS_SDK_SBUIExtendRenderer_HPP

class USBUIExtendRendererBlueprintFunctionLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void RemoveFromParentPrePostProcess(class UUserWidget* UserWidget);
    void AddToViewportPrePostProcess(class UUserWidget* UserWidget, const int32 Priority);
}; // Size: 0x28

class USBUIExtendRendererSubsystem : public UGameInstanceSubsystem
{
    char padding_0[0x50];                                                             // 0x0000 (size: 0x0)

    void RemoveFromParentPrePostProcess(class UUserWidget* UserWidget);
    void AddToViewportPrePostProcess(class UUserWidget* UserWidget, const int32 Priority);
}; // Size: 0x50

#endif
