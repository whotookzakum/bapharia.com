#ifndef UE4SS_SDK_PlayerNamePlate_HPP
#define UE4SS_SDK_PlayerNamePlate_HPP

class UPlayerNamePlate_C : public USBPlayerNamePlateWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02F8 (size: 0x8)
    class UWidgetAnimation* InAnimation;                                              // 0x0300 (size: 0x8)
    class UWidgetAnimation* CursorInOut;                                              // 0x0308 (size: 0x8)
    class UTextBlock* AchievementNameLabel;                                           // 0x0310 (size: 0x8)
    class UCanvasPanel* CanvasPanel_2;                                                // 0x0318 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Name;                                             // 0x0320 (size: 0x8)
    class UGuildTag_C* GuildTag;                                                      // 0x0328 (size: 0x8)
    class UImage* HPBg;                                                               // 0x0330 (size: 0x8)
    class UImage* HPCur;                                                              // 0x0338 (size: 0x8)
    class UCanvasPanel* HPCurSize;                                                    // 0x0340 (size: 0x8)
    class UCanvasPanel* HPLossSize;                                                   // 0x0348 (size: 0x8)
    class UCanvasPanel* HPPrevSize;                                                   // 0x0350 (size: 0x8)
    class UJointGestureIcon_C* JointGestureIcon;                                      // 0x0358 (size: 0x8)
    class UCanvasPanel* NameGrp;                                                      // 0x0360 (size: 0x8)
    class UTextBlock* NameLabel;                                                      // 0x0368 (size: 0x8)
    class UObjectSelectCursor_C* ObjectSelectCursor;                                  // 0x0370 (size: 0x8)
    class UOverlay* Overlay_0;                                                        // 0x0378 (size: 0x8)
    class UPartyIcon_C* PartyIcon;                                                    // 0x0380 (size: 0x8)
    class URetainerBox* RetainerBox_0;                                                // 0x0388 (size: 0x8)
    class UTensionTagIcon_C* TensionTagIcon;                                          // 0x0390 (size: 0x8)
    class UVerticalBox* VB_OptionRoot;                                                // 0x0398 (size: 0x8)
    class UVerticalBox* VerticalBox_0;                                                // 0x03A0 (size: 0x8)
    class UImage* WizardRecoverUI;                                                    // 0x03A8 (size: 0x8)
    FPlayerNamePlate_COnChangeDrawSize OnChangeDrawSize;                              // 0x03B0 (size: 0x10)
    void OnChangeDrawSize(FVector2D DrawSize);
    float WidgetScaleDuringHealChain;                                                 // 0x03C0 (size: 0x4)
    FLinearColor LifeGaugeCurDefaultColor;                                            // 0x03C4 (size: 0x10)
    FLinearColor LifeGaugeCurHealChainColor;                                          // 0x03D4 (size: 0x10)
    float CurrentScale;                                                               // 0x03E4 (size: 0x4)
    bool bShowTargetCursor;                                                           // 0x03E8 (size: 0x1)
    bool IsHealChainUIVisible;                                                        // 0x03E9 (size: 0x1)
    char padding_0[0x6];                                                              // 0x03EA (size: 0x6)
    FPlayerNamePlate_COnChangeScale OnChangeScale;                                    // 0x03F0 (size: 0x10)
    void OnChangeScale(float Scale);
    FString CurrentName;                                                              // 0x0400 (size: 0x10)
    float HpGaugeDefaultWidth;                                                        // 0x0410 (size: 0x4)
    float CurrHpGaugeWidthRate;                                                       // 0x0414 (size: 0x4)
    class UCanvasPanelSlot* HPSlot;                                                   // 0x0418 (size: 0x8)
    bool IntaractEffectVisible;                                                       // 0x0420 (size: 0x1)

    void ResetBuffIcon();
    void SetupBuffIcon(class ASBCharacter* InCharacter);
    void UpdateFriendIcon(TArray<FPlayerProfileSummaryData>& InPlayerProfileSummaryData);
    void IsInteractionUIVisibility(bool& IsVisibilty);
    void CursorInOutAnim(bool bin);
    void Get Resurrection Remain Time Rate(float& Rate);
    void SetLifeGaugeCurTintColor(FLinearColor TintColor);
    void Update Prev Life Gauge BP(float DeltaTime);
    void InitOptionConnect();
    void TermOptionConnect();
    void OnChangeNamePlateOption(const bool bIsShow);
    void InitOptionValue();
    void UpdateOptionNamePlate();
    void InitOptions();
    void Bind TeamTag(const bool bIsShow);
    void SetAchievementSelected(const int32 InAchievementSelected);
    void InAwake(const FName& InQuestId);
    void JoinIninterrupt(class USBPlayerInterruptQuestComponent* InComponent, const bool bInFirst);
    void Leaveout(const FName& InQuestId);
    void Repinterrupt(const FSBInterruptQuestPlayInfo& InPlayInfo);
    void RepTeam();
    void SucInterruptQuest(const FName& InQuestId, bool InSuccess);
    void Update Prog(class USBPlayerInterruptQuestComponent* InComponent);
    void BeginBind Party();
    void PartyUnbindDelegates();
    void UnbindAwakeInterruptQuestDelegete();
    void OnUpdateNameColor(bool bParty);
    void Construct();
    void SetName(FString Name);
    void SetHpRate(const float HPRate);
    void OnSetHealChainUIVisibility(bool IsVisible);
    void OnChangeLifeGaugeColor(bool IsHealChainColor);
    void SetTeamNumber(const int32 TeamNumber);
    void SetCharacter_Internal(class ASBCharacter* InCharacter);
    void SetHostility(const ESBHostility Hostility);
    void SetInitialHpRate(const float HPRate);
    void UIVisibleSettingChangeDelegate_Event_0(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void SetNameVisibility(const bool bInVisibility);
    void SetHpGaugeVisibility(const bool bInVisibility);
    void SetHpGaugeWidthRate(const float InWidthRate);
    void Destruct();
    void SetDepth(const float InDepth);
    void SetChargeMax();
    void AutoChangeInvisible();
    void AutoChangeVisible();
    void OnFinishedFadeAnime(bool IsFadeIn);
    void UnbindPlayerCommunicateDelegate();
    void UnbindOnClientRecieveBattleStatusDelegete();
    void UnbindVisibleSettingChangeDelegate();
    void SetInteractionTargetVisibility(const bool bInVisibility);
    void SetScreenPositionOffset(const FLinearColor InScreenPositionOffset);
    void OnDisplayStart();
    void PlayerStateSettingAfter();
    void CustomEvent();
    void PlayerStateRelationshipSetting();
    void CustomEvent_1(const ESBTensionTagType TensionTag);
    void CustomEvent_2(const TArray<FPlayerProfileSummaryData>& PlayerProfileSummaryData);
    void OnUpdatenSimplycityPartyOn();
    void UpdateTension(ESBTensionTagType InTensionTagId);
    void ExecuteUbergraph_PlayerNamePlate(int32 EntryPoint);
    void OnChangeScale__DelegateSignature(float Scale);
    void OnChangeDrawSize__DelegateSignature(FVector2D DrawSize);
}; // Size: 0x421

#endif
