#ifndef UE4SS_SDK_OpenCommandMenu_HPP
#define UE4SS_SDK_OpenCommandMenu_HPP

class UOpenCommandMenu_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimBlink;                                                // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class UImage* BG;                                                                 // 0x0290 (size: 0x8)
    class UImage* Icon;                                                               // 0x0298 (size: 0x8)
    class UTextBlock* TextKey;                                                        // 0x02A0 (size: 0x8)
    bool bVisible;                                                                    // 0x02A8 (size: 0x1)
    bool bUIVisibleSetting;                                                           // 0x02A9 (size: 0x1)
    bool bPhotoMode;                                                                  // 0x02AA (size: 0x1)

    void UpdateKeyText();
    void UpdateVisibility();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void OnChangeOpenCommandMenuFlag(const bool Result);
    void OnUpdateKeyEvent();
    void Destruct();
    void Construct();
    void UIVisibleSettingChangeDelegate_Event_0(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void OnPhotoMode Enter(class UObject* Sender, class UObject* Param);
    void OnPhotoMode Leave(class UObject* Sender, class UObject* Param);
    void ExecuteUbergraph_OpenCommandMenu(int32 EntryPoint);
}; // Size: 0x2AB

#endif
