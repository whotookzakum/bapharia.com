#ifndef UE4SS_SDK_NotifyScreenshot_HPP
#define UE4SS_SDK_NotifyScreenshot_HPP

class UNotifyScreenshot_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UVerticalBox* MessageList;                                                  // 0x0280 (size: 0x8)

    void Construct();
    void AddNotifyMessageItem(class UUserWidget* Widget, class UAkAudioEvent* Sound);
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void AddScreenshotCaptured(FString Filename);
    void OnScreenshotCaptured(class UObject* Sender, class UObject* Param);
    void PrepareScreens(class UObject* Sender, class UObject* Param);
    void FinishScreenshot(class UObject* Sender, class UObject* Param);
    void ExecuteUbergraph_NotifyScreenshot(int32 EntryPoint);
}; // Size: 0x288

#endif
