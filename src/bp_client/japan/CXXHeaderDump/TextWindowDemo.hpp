#ifndef UE4SS_SDK_TextWindowDemo_HPP
#define UE4SS_SDK_TextWindowDemo_HPP

class UTextWindowDemo_C : public USBTextWindowBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* NextMarkLoop;                                             // 0x0280 (size: 0x8)
    class UImage* ImgNextMark;                                                        // 0x0288 (size: 0x8)
    class UImage* ImgNextMarkPressed;                                                 // 0x0290 (size: 0x8)
    class UCanvasPanel* NextMarkGroup;                                                // 0x0298 (size: 0x8)
    class USBRichTextBlock* Text;                                                     // 0x02A0 (size: 0x8)

    void SetDisp(bool IsDisp);
    bool IsShow();
    void Construct();
    void Show();
    void Hide();
    void SetText(const FText& InText);
    void SetSpeaker(const FName& InProfileId);
    void SetNextMarkVisibility(const bool bInVisibility);
    void ExecuteUbergraph_TextWindowDemo(int32 EntryPoint);
}; // Size: 0x2A8

#endif
