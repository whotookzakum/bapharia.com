#ifndef UE4SS_SDK_NpcNamePlate_HPP
#define UE4SS_SDK_NpcNamePlate_HPP

class UNpcNamePlate_C : public USBNamePlateWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0288 (size: 0x8)
    class UWidgetAnimation* InAnimation;                                              // 0x0290 (size: 0x8)
    class UWidgetAnimation* CursorInOut;                                              // 0x0298 (size: 0x8)
    class UWidgetAnimation* AnimInOut;                                                // 0x02A0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x02A8 (size: 0x8)
    class USizeBox* FacilityGrp;                                                      // 0x02B0 (size: 0x8)
    class UCanvasPanel* NameGrp;                                                      // 0x02B8 (size: 0x8)
    class UObjectSelectCursor_C* ObjectSelectCursor;                                  // 0x02C0 (size: 0x8)
    class UQuestIcon_C* QuestIcon;                                                    // 0x02C8 (size: 0x8)
    class USizeBox* QuestMarkGrp;                                                     // 0x02D0 (size: 0x8)
    class URetainerBox* RetainerBox_0;                                                // 0x02D8 (size: 0x8)
    class UTextBlock* TextBlock_0;                                                    // 0x02E0 (size: 0x8)
    class UUMG_NPCFacilityMark_Icon_C* UMG_NPCFacilityMark_Icon;                      // 0x02E8 (size: 0x8)
    FText CurrentText;                                                                // 0x02F0 (size: 0x18)
    class ASBMobCharacter* OwnerNPCCharacter;                                         // 0x0308 (size: 0x8)
    TArray<EQuestIconType> IgnoreIconTypes;                                           // 0x0310 (size: 0x10)
    bool bSystemVisible;                                                              // 0x0320 (size: 0x1)
    bool HudVisible;                                                                  // 0x0321 (size: 0x1)
    bool IntaractEffectVisible;                                                       // 0x0322 (size: 0x1)

    void CursorInOutAnim(bool bin);
    void CheckVisibility();
    void UpdateQuest();
    void SetText(FText InText);
    void OnQuestListDelegete_Reset(const TArray<FUnlockedQuestInfo>& QuestList);
    void OnAcceptQuestDelegate_Reset(bool Result, const EAcceptedQuestErrorCode ErrorCode, const int32 RetCode, const FAcceptedQuestInfo& AcceptedQuestInfo);
    void OnCancelQuestDelegate_イベント_0(bool Result, int32 QuestIndex);
    void OnUpdateQuestProgressDelegate_イベント_0(bool Result, int32 RetCode, const FAcceptedQuestInfo& PrevAcceptedQuestInfo);
    void OnCompleteQuestDelegate_イベント_2(int32 RetCode, int32 QuestIndex, EQuestCompleteResult CompleteResult, const FSBMailRewardData& MailRewardData);
    void OnAcceptedQuestListDelegete_イベント_0();
    void OnBeginPlay(class ASBMobCharacter* NpcCharacter);
    void OnEndPlay();
    void OnAdventurerRankDelegate_Event_0(const int32 InRetCode);
    void OnSetKeyValue_Event(bool Result);
    void OnLevelUp_Event(int32 InPrevLevel, int32 InCurLevel, const FSBExtraExpParse& InExtraExpParse);
    void ClassChangeNotify_Event(const int32 InRetCode, const bool bInIsExpiredStickerWeapons, const TArray<FString>& InExpiredStickerWeaponUniqueIds, const FSBExpiredEquipmentData& InDirtyExpiredEquipmentData);
    void Construct();
    void UIVisibleSettingChangeDelegate_Event_0(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void SetNPCFacility(ESBFacilityType IconType);
    void SetNpcCharacter_Internal(class ASBMobCharacter* InNpcCharacter);
    void OnChangeBalloonVisible(bool bVsiible);
    void SetDepth(const float InDepth);
    void SetChargeMax();
    void AutoChangeInvisible();
    void AutoChangeVisible();
    void Destruct();
    void UnbindChangeBalloonVisible();
    void SetInteractionTargetVisibility(const bool bInVisibility);
    void SetScreenPositionOffset(const FLinearColor InScreenPositionOffset);
    void FadeOutFinishSelectCursor(bool IsFadeIn);
    void OnDisplayStart();
    void ExecuteUbergraph_NpcNamePlate(int32 EntryPoint);
}; // Size: 0x323

#endif
