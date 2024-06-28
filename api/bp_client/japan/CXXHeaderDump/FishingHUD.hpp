#ifndef UE4SS_SDK_FishingHUD_HPP
#define UE4SS_SDK_FishingHUD_HPP

class UFishingHUD_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* HiddenWidgeds;                                            // 0x0280 (size: 0x8)
    class UBackgroundBlur* BackgroundBlur_129;                                        // 0x0288 (size: 0x8)
    class UBP_PlayerName_Layoutable_C* BP_PlayerName_Layoutable;                      // 0x0290 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Objs;                                             // 0x0298 (size: 0x8)
    class UCanvasPanel* Cast;                                                         // 0x02A0 (size: 0x8)
    class UChatLogWindowTempList_C* ChatLogWindowTempList;                            // 0x02A8 (size: 0x8)
    class UFishing_Cast_C* Fishing_Cast;                                              // 0x02B0 (size: 0x8)
    class UFishing_Result_C* Fishing_Result;                                          // 0x02B8 (size: 0x8)
    class UFishing_Wait_C* Fishing_Wait;                                              // 0x02C0 (size: 0x8)
    class USBButtonFullScreen_C* SBButtonFullScreen_C_98;                             // 0x02C8 (size: 0x8)
    class UWidgetSwitcher* Switcher;                                                  // 0x02D0 (size: 0x8)
    class UUMG_PartyMemberList_C* UMG_PartyMemberList;                                // 0x02D8 (size: 0x8)
    class UCanvasPanel* Waiting;                                                      // 0x02E0 (size: 0x8)
    FText DialogMessage;                                                              // 0x02E8 (size: 0x18)
    class UBP_Dialog_C* BP_Dialog;                                                    // 0x0300 (size: 0x8)
    FFishingHUD_CExitFishing ExitFishing;                                             // 0x0308 (size: 0x10)
    void ExitFishing();
    FFishingHUD_CContinue Continue;                                                   // 0x0318 (size: 0x10)
    void Continue();
    FName Tutorial Help Id;                                                           // 0x0328 (size: 0x8)
    bool FlagFishingGameStopInput;                                                    // 0x0330 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0331 (size: 0x3)
    FSBCursorStateHandle CursorHundle;                                                // 0x0334 (size: 0x4)
    bool IsFirst;                                                                     // 0x0338 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0339 (size: 0x3)
    int32 DebugCounter;                                                               // 0x033C (size: 0x4)
    class UChatHUD_C* Chat HUD;                                                       // 0x0340 (size: 0x8)
    bool BackPackWarning;                                                             // 0x0348 (size: 0x1)

    void ResultVisibility(bool On);
    void ResetMenu();
    void WarningBackPackIsFull();
    void Reset();
    void HookSuccess();
    void CheckBackPack(bool& Ret);
    void Set State(EPlayerFishingState Index);
    void DebugFunc();
    void DialogEnd(EDialogResult Result);
    void ExitEvent(class UUserWidget* InButtonWidget);
    void ContinueFishing(class UUserWidget* InButtonWidget);
    void Construct();
    void Destruct();
    void BndEvt__FishingHUD_SBButtonFullScreen_C_98_K2Node_ComponentBoundEvent_1_OnButtonPressedEvent__DelegateSignature();
    void ReceiveMessageDelegate(const class USBChatMessage* Message, const FSBChatUIMessage Mess);
    void EscExit();
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void ExecuteUbergraph_FishingHUD(int32 EntryPoint);
    void Continue__DelegateSignature();
    void ExitFishing__DelegateSignature();
}; // Size: 0x349

#endif
