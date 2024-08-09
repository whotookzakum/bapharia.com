#ifndef UE4SS_SDK_TutorialHelp_Bookmark_HPP
#define UE4SS_SDK_TutorialHelp_Bookmark_HPP

class UTutorialHelp_Bookmark_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class USBButton_C* BackButton;                                                    // 0x02B8 (size: 0x8)
    class USBRichTextBlock* BottomText;                                               // 0x02C0 (size: 0x8)
    class UCanvasPanel* CanvasPanelWindow;                                            // 0x02C8 (size: 0x8)
    class UCanvasPanel* CanvasTitle;                                                  // 0x02D0 (size: 0x8)
    class UCmnClose01_C* CmnClose01_393;                                              // 0x02D8 (size: 0x8)
    class UImage* HelpImage;                                                          // 0x02E0 (size: 0x8)
    class UCanvasPanel* HelpImageGrp;                                                 // 0x02E8 (size: 0x8)
    class USBButton_C* NextButton;                                                    // 0x02F0 (size: 0x8)
    class UOverlay* NoDataOverlay;                                                    // 0x02F8 (size: 0x8)
    class UCanvasPanel* PageGrp;                                                      // 0x0300 (size: 0x8)
    class UTextBlock* PageText_1;                                                     // 0x0308 (size: 0x8)
    class UTextBlock* PageText_2;                                                     // 0x0310 (size: 0x8)
    class UWidgetSwitcher* SwitchImage;                                               // 0x0318 (size: 0x8)
    class UTextBlock* TitleText;                                                      // 0x0320 (size: 0x8)
    class UImage* VideoImage;                                                         // 0x0328 (size: 0x8)
    class UCanvasPanel* VideoImageGrp;                                                // 0x0330 (size: 0x8)
    int32 CurrentPage;                                                                // 0x0338 (size: 0x4)
    int32 MaxPage;                                                                    // 0x033C (size: 0x4)
    FSBTutorialHelpData Data;                                                         // 0x0340 (size: 0x50)
    class USBTextTableAsset* TextTableAsset;                                          // 0x0390 (size: 0x8)
    FTutorialHelp_Bookmark_COnClose OnClose;                                          // 0x0398 (size: 0x10)
    void OnClose();
    bool SubMode;                                                                     // 0x03A8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x03A9 (size: 0x3)
    int32 WindowHeight;                                                               // 0x03AC (size: 0x4)
    FString MovieParentPath;                                                          // 0x03B0 (size: 0x10)
    class UBinkMediaPlayer* BinkMediaPlayer;                                          // 0x03C0 (size: 0x8)
    bool IsClose;                                                                     // 0x03C8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x03C9 (size: 0x7)
    class ABP_MediaSoundActor_C* SoundActor;                                          // 0x03D0 (size: 0x8)

    void SetErrorData(FName HelpId);
    void ISCurrentPageEnd(bool& NewParam);
    void UpdatePageButton();
    void FindTurotialHelpData(FName InId, bool& bFind, FSBTutorialHelpData& Ret);
    void OnLoaded_053AD1B74FF9010B3058FCA29708A05E(class UObject* Loaded);
    void SetHelpData2(int32 InPage, const FSBTutorialHelpData& InData);
    void Init(FName InId, bool InSubMode);
    void UpdateUI();
    void BndEvt__BackButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__NextButton_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void OnNextPage();
    void Construct();
    void Destruct();
    void OnClose_Event();
    void OnPress_Cancel();
    void OnForceClose_Event();
    void BndEvt__TutorialHelp_Bookmark_CmnClose01_393_K2Node_ComponentBoundEvent_0_OnClosed__DelegateSignature();
    void ExecuteUbergraph_TutorialHelp_Bookmark(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x3D8

#endif
