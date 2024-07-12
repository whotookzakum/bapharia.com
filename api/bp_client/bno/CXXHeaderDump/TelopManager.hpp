#ifndef UE4SS_SDK_TelopManager_HPP
#define UE4SS_SDK_TelopManager_HPP

class UTelopManager_C : public USBTelopManager
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02C8 (size: 0x8)
    class UTelopChallenge_C* Telop_ArenaChallenge;                                    // 0x02D0 (size: 0x8)
    class UTelopClearDungeon_C* Telop_ClearDungeon;                                   // 0x02D8 (size: 0x8)
    class UTelopGameOver_C* Telop_GameOver;                                           // 0x02E0 (size: 0x8)
    class UTelopMission_C* Telop_Mission;                                             // 0x02E8 (size: 0x8)
    class UTelopNormal_C* Telop_Normal;                                               // 0x02F0 (size: 0x8)
    class UTelopProficiency_C* Telop_Proficiency;                                     // 0x02F8 (size: 0x8)
    class UTelopReadyGo_C* Telop_ReadyGo;                                             // 0x0300 (size: 0x8)
    class UTelopType1_C* Telop_Type1;                                                 // 0x0308 (size: 0x8)
    class UTelopType2_C* Telop_Type2;                                                 // 0x0310 (size: 0x8)
    class UTelopType3_C* Telop_Type3;                                                 // 0x0318 (size: 0x8)

    void OnReversePallet();
    void TermReversePallet();
    void InitReversePallet();
    class USBTelopBase* OnGetTelop(ESBTelopType TelopType);
    void OnProficiencyUp(class UObject* Object);
    void TermProficiency();
    void InitProficiency();
    void TermSuspend();
    void InitSuspend();
    void TermDefenceBattleJingle();
    void InitDefenceBattleJingle();
    void TermTimeAttack();
    void InitTimeAttack();
    void OnLearningSkill(TArray<FCharaSkillMasteryInfo>& NewSkill);
    void TermLearningSkill();
    void InitLearningSkill();
    void OnTerminate();
    void OnInitialize();
    void TermInterruptQuest();
    void InitInterruptQuest();
    void TermRaidJingle();
    void InitRaidJingle();
    void OnClassLVUPJingle(class UObject* Object);
    void TermClassLvUpJingle();
    void InitClassLvUpJingle();
    void OnAdventureBoardJingleComplete();
    void OnAdventureBoardJingleClear(ESBAdventureBoardClearStatus Type);
    void TermAdventureBoardJingle();
    void InitAdventureBoardJingle();
    void OnQuestJingleCancel(class UObject* Param);
    void OnQuestJingleComplete(class UObject* Param);
    void OnQuestJingleUpdate2(const TArray<int32>& InputPin);
    void OnQuestJingleUpdate(class UObject* Param);
    void OnQuestJingleAccepted(class UObject* Param);
    void TermQuestJingle();
    void InitQuestJingle();
    void CustomEvent_4(class UObject* Sender, class UObject* Param);
    void BindProficiencyUp();
    void UnbindProficiencyUp();
    void CustomEvent_1(class UObject* Sender, class UObject* Param);
    void BindSuspend();
    void UnbindSuspend();
    void OnSuspend(class UObject* Sender, class UObject* Param);
    void BindOpenCommandMenu();
    void UnbindOpenCommandMenu();
    void OnOpenCommandMenu(class UObject* Sender, class UObject* Param);
    void BindCloseCommandMenu();
    void UnbindCloseCommandMenu();
    void OnCloseCommandMenu(class UObject* Sender, class UObject* Param);
    void BindDefenceBattleStart();
    void UnbindDefenceBattleStart();
    void CustomEvent_2(class UObject* Sender, class UObject* Param);
    void BindTimeAttackBackToStartJingle();
    void UnBindTimeAttackBackToStartJingle();
    void OnTimeAttackBackToStartJingle(class UObject* Sender, class UObject* Param);
    void BindLearningSkill();
    void UnbindLearningSkill();
    void OnLearningSkillEvent(class UObject* Sender, class UObject* Param);
    void BindInterruptQuestJoin();
    void BindInterruptQuestSuccess();
    void BindInterruptQuestFailed();
    void UnbindInterruptQuestJoin();
    void UnbindInterruptQuestSuccess();
    void UnbindInterruptQuestFailed();
    void OnInterruptQuestJoin(class UObject* Sender, class UObject* Param);
    void OnInterruptQuestSuccess(class UObject* Sender, class UObject* Param);
    void OnInterruptQuestFailed(class UObject* Sender, class UObject* Param);
    void BindRaidStart();
    void UnbindRaidStart();
    void CustomEvent_0(class UObject* Sender, class UObject* Param);
    void BindClassLvUpJingle();
    void UnbindClassLvUpJingle();
    void OnClassLevelUpEvent(class UObject* Sender, class UObject* Param);
    void BindAdventureBoardJingleClear();
    void BindAdventureBoardJingleComplete();
    void UnbindAdventureBoardJingleClear();
    void UnbindAdventureBoardJingleComplete();
    void OnAdventureBoardClear(class UObject* Sender, class UObject* Param);
    void OnAdventureBoardComplete(class UObject* Sender, class UObject* Param);
    void BindQuestJingleAccept();
    void BindQuestJingleUpdate();
    void BindQuestJingleClear();
    void BindQuestJingleCancel();
    void UnbindReversePallet();
    void BindReversePallet();
    void OnReceiveAcceptedQuestEvent(class UObject* Sender, class UObject* Param);
    void OnReceiveUpdateQuestProgressEvent(class UObject* Sender, class UObject* Param);
    void OnReceiveCompleteQuestEvent(class UObject* Sender, class UObject* Param);
    void OnReceiveCancelQuest(class UObject* Sender, class UObject* Param);
    void BindQuestJingleUpdate2();
    void UnbindQuestJingleUpdate2();
    void OnUpdatedQuestsJoin(const TArray<int32>& QuestIndexes);
    void UnbindQuestJingleAccept();
    void UnbindQuestJingleClear();
    void UnbindQuestJingleUpdate();
    void UnbindQuestJingleCancel();
    void BndEvt__TelopManager_Telop_Type1_K2Node_ComponentBoundEvent_3_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_Type2_K2Node_ComponentBoundEvent_4_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_Type3_K2Node_ComponentBoundEvent_6_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_GameOver_K2Node_ComponentBoundEvent_12_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_ClearDungeon_K2Node_ComponentBoundEvent_13_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_ArenaChallenge_K2Node_ComponentBoundEvent_14_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_Mission_K2Node_ComponentBoundEvent_15_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_ReadyGo_K2Node_ComponentBoundEvent_16_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_Normal_K2Node_ComponentBoundEvent_17_OnFinishDelegate__DelegateSignature();
    void BndEvt__TelopManager_Telop_Proficiency_K2Node_ComponentBoundEvent_0_OnFinishDelegate__DelegateSignature();
    void ExecuteUbergraph_TelopManager(int32 EntryPoint);
}; // Size: 0x320

#endif
