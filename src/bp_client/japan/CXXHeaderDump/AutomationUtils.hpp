#ifndef UE4SS_SDK_AutomationUtils_HPP
#define UE4SS_SDK_AutomationUtils_HPP

class UAutomationUtilsBlueprintLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void TakeGameplayAutomationScreenshot(const FString ScreenshotName, float MaxGlobalError, float MaxLocalError, FString MapNameOverride);
}; // Size: 0x28

#endif
