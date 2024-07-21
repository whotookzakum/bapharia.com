#ifndef UE4SS_SDK_MailLimitIndicator_HPP
#define UE4SS_SDK_MailLimitIndicator_HPP

class UMailLimitIndicator_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UBorder* Bdr_Base;                                                          // 0x0288 (size: 0x8)
    class USBRichTextBlock* RT_KeyName;                                               // 0x0290 (size: 0x8)
    bool bIsShowed;                                                                   // 0x0298 (size: 0x1)
    bool bUIVisibleSettings;                                                          // 0x0299 (size: 0x1)
    bool InPhotoMode;                                                                 // 0x029A (size: 0x1)

    void Construct();
    void OnUpdateBookType();
    void OnUpdateSkin(const ESBPadKeySkinType SkinType);
    void Show();
    void Hide();
    void OnChangeCommandMenuFlag(const bool Result);
    void Destruct();
    void ChangeBorderColor();
    void UIVisibleSettingChangeDelegates(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void UpdateShow();
    void OnPhotoMode(class UObject* Sender, class UObject* Param);
    void ExecuteUbergraph_MailLimitIndicator(int32 EntryPoint);
}; // Size: 0x29B

#endif
