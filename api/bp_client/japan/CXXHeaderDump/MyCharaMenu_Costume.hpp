#ifndef UE4SS_SDK_MyCharaMenu_Costume_HPP
#define UE4SS_SDK_MyCharaMenu_Costume_HPP

class UMyCharaMenu_Costume_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* PreviewOut;                                               // 0x02B8 (size: 0x8)
    class UWidgetAnimation* PreviewIn;                                                // 0x02C0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C8 (size: 0x8)
    class UImage* ArrowImage;                                                         // 0x02D0 (size: 0x8)
    class UCmnBtn16_C* BtnCostumeChange;                                              // 0x02D8 (size: 0x8)
    class UCmnBtn16_C* BtnCostumeRemove;                                              // 0x02E0 (size: 0x8)
    class UCanvasPanel* CandidateListCanvas;                                          // 0x02E8 (size: 0x8)
    class UCmnOperationRotate_C* CmnOperationRotate;                                  // 0x02F0 (size: 0x8)
    class UImage* CostumeBG;                                                          // 0x02F8 (size: 0x8)
    class UCanvasPanel* CostumeChangeBtnCanvas;                                       // 0x0300 (size: 0x8)
    class UMyCharaMenu_CostumeChangeMenu_C* CostumeChangeMenu;                        // 0x0308 (size: 0x8)
    class UCharaCreate_DressVisibilityOnOffSwitch_C* CostumeVisibilityOnOffSwitch;    // 0x0310 (size: 0x8)
    class UMyCharaMenu_EquippedCostumeInfoColumn_C* EquippedCostumeInfoColumn;        // 0x0318 (size: 0x8)
    class UMyCharaMenu_EquipRingHandSelectDialog_C* EquipRingHandSelectDialog;        // 0x0320 (size: 0x8)
    class UImage* Image_Chara;                                                        // 0x0328 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x0330 (size: 0x8)
    class UCharaCreate_PosingSwitch_C* PosingSwitch;                                  // 0x0338 (size: 0x8)
    class UImage* PreviewBG;                                                          // 0x0340 (size: 0x8)
    class UCanvasPanel* PreviewBgGrp;                                                 // 0x0348 (size: 0x8)
    class UImage* PreviewLine;                                                        // 0x0350 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0358 (size: 0x8)
    FString SelectedCosUniqueId;                                                      // 0x0360 (size: 0x10)
    FMyCharaMenu_Costume_COnChangeCostumeProc OnChangeCostumeProc;                    // 0x0370 (size: 0x10)
    void OnChangeCostumeProc(bool ProcStart);
    ESBCharaEquipType SelectedCostumeEquipType;                                       // 0x0380 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0381 (size: 0x7)
    FCharaEquipItemInfo NewCosEquipItemInfo;                                          // 0x0388 (size: 0x28)
    FOwnItemInfo NewCosOwnItemInfo;                                                   // 0x03B0 (size: 0xF8)
    bool IsDetach;                                                                    // 0x04A8 (size: 0x1)
    char padding_1[0x7];                                                              // 0x04A9 (size: 0x7)
    FMyCharaMenu_Costume_COnPlayerAvatarRotateActive OnPlayerAvatarRotateActive;      // 0x04B0 (size: 0x10)
    void OnPlayerAvatarRotateActive(bool InIsActive);
    bool TickCheck;                                                                   // 0x04C0 (size: 0x1)
    bool UpdateStopFlag;                                                              // 0x04C1 (size: 0x1)
    bool IsSwitchPosingToPrev;                                                        // 0x04C2 (size: 0x1)
    char padding_2[0x5];                                                              // 0x04C3 (size: 0x5)
    FMyCharaMenu_Costume_COnPlayerAvatarSwitchPosing OnPlayerAvatarSwitchPosing;      // 0x04C8 (size: 0x10)
    void OnPlayerAvatarSwitchPosing(FName OnPosingCommandName, bool IsSwitchPosingToPrev);
    TArray<FString> AvatarPoseStateNames;                                             // 0x04D8 (size: 0x10)
    TArray<FCharaEquipItemInfo> NewCostumeEquipItemInfos;                             // 0x04E8 (size: 0x10)
    TArray<FCharaEquipItemCharaCreateInfo> NewCostumeEquipItemCharaCreateInfos;       // 0x04F8 (size: 0x10)
    TArray<ESBCharaEquipType> CostumeEquipTypes;                                      // 0x0508 (size: 0x10)
    FCharaEquipItemCharaCreateInfo NewCostumeEquipItemCharaCreateInfo;                // 0x0518 (size: 0x28)
    ESBCharacterGender CurrentPlayerCharacterGender;                                  // 0x0540 (size: 0x1)
    bool IsMultipleCostumeEquipsSaveRequested;                                        // 0x0541 (size: 0x1)
    char padding_3[0x6];                                                              // 0x0542 (size: 0x6)
    FMyCharaMenu_Costume_COnPlayerAvatarSwitchCostumeOnOff OnPlayerAvatarSwitchCostumeOnOff; // 0x0548 (size: 0x10)
    void OnPlayerAvatarSwitchCostumeOnOff(bool InIsCostumeOn);
    bool IsDetachingCompositeWear;                                                    // 0x0558 (size: 0x1)
    ECharaPartsLocation TempPartsLocation;                                            // 0x0559 (size: 0x1)
    ESBCharaEquipType TempEquipType;                                                  // 0x055A (size: 0x1)
    char padding_4[0x5];                                                              // 0x055B (size: 0x5)
    FString TempRingUniqueId;                                                         // 0x0560 (size: 0x10)
    FString TempPartsName;                                                            // 0x0570 (size: 0x10)
    TArray<ECharaPartsLocation> TempLeftFingerPartsLocations;                         // 0x0580 (size: 0x10)
    FSBExpiredEquipmentData tempExpiredEquipmentData;                                 // 0x0590 (size: 0x130)
    bool TempIsEquipmentExpired;                                                      // 0x06C0 (size: 0x1)
    char padding_5[0x7];                                                              // 0x06C1 (size: 0x7)
    class USBCharaCreateComponent* TempCharaCreateComp;                               // 0x06C8 (size: 0x8)
    TArray<FSBDeletedCostumeData> TempDeletedCostumes;                                // 0x06D0 (size: 0x10)
    bool InIsAvatarCostumePartsLoading;                                               // 0x06E0 (size: 0x1)
    char padding_6[0x7];                                                              // 0x06E1 (size: 0x7)
    TArray<ESBCharaEquipType> DefaultCostumeEquipTypes;                               // 0x06E8 (size: 0x10)
    TArray<FCharaEquipItemInfo> DefaultEquipItemInfo;                                 // 0x06F8 (size: 0x10)
    TArray<FCharaEquipItemInfo> PreviewCostumeItemInfos;                              // 0x0708 (size: 0x10)
    TArray<ESBCharaEquipType> PreviewCostumeEquipTypes;                               // 0x0718 (size: 0x10)
    TArray<ESBCharaEquipType> PreviewDetachEquipTypes;                                // 0x0728 (size: 0x10)
    TArray<FCharaEquipItemCharaCreateInfo> PreviewCostumeCharaCreateInfos;            // 0x0738 (size: 0x10)
    TArray<FString> TempPreviewUniqueIds;                                             // 0x0748 (size: 0x10)
    TArray<FSBMasterCostume> TempPreviewCostumeDatas;                                 // 0x0758 (size: 0x10)
    bool PreviewChangeRequest;                                                        // 0x0768 (size: 0x1)
    char padding_7[0x7];                                                              // 0x0769 (size: 0x7)
    FSBCharaCreateParameter PreviewCharaCreateParameter;                              // 0x0770 (size: 0x3C0)
    FMyCharaMenu_Costume_COnSetCostumePreviewParameter OnSetCostumePreviewParameter;  // 0x0B30 (size: 0x10)
    void OnSetCostumePreviewParameter(FSBCharaCreateParameter CharaCreateParameter, bool Start);
    FSBCharaCreateParameter DefaultCharaCreateParameter;                              // 0x0B40 (size: 0x3C0)
    FMyCharaMenu_Costume_COnSetAvatarImageReuploadFlag OnSetAvatarImageReuploadFlag;  // 0x0F00 (size: 0x10)
    void OnSetAvatarImageReuploadFlag();
    FMyCharaMenu_Costume_COnRefreshPreviewCostume OnRefreshPreviewCostume;            // 0x0F10 (size: 0x10)
    void OnRefreshPreviewCostume(FSBCharaCreateParameter Parameter);
    FCharaEquipInfo TempPreviewEquipInfo;                                             // 0x0F20 (size: 0x10)
    bool bExistPriorityCapture;                                                       // 0x0F30 (size: 0x1)
    bool InventoryUpdateRequest;                                                      // 0x0F31 (size: 0x1)
    bool bShouldUploadCharaCreateParameter;                                           // 0x0F32 (size: 0x1)

    void OnItemListUpdate();
    void OpenExpiredMessageWindow(int32 CostumeId, bool& IsOpen);
    void LocationToEquipType(ECharaPartsLocation CharaPartsLocation, ESBCharaEquipType& CharaEquipType);
    void ClearPreviewDatas();
    void SetDressOnOffButton(bool InIsDressOn);
    void FindConflictingCompositeWearbyEquipInfo(ESBCharaEquipType EquipType, ESBCharacterGender Gender, bool& IsConflict, ESBCharaEquipType& ConflictEquipType);
    void UpdatePlayerCharacter_Func();
    void CheckCostumeRingEquipment(FString UniqueId, bool& Equipment, bool& Preview, ESBCharaEquipType& EquipType);
    void UpdateEquippedCostumeInfo();
    void OutputEquipmentCostumeLog();
    void UpdateCostumePreview();
    void IsPreviewMode(bool& Preview);
    void GetPreviewCostumeUniqueId(ESBCharaEquipType EquipmentType, FString& UniqueId);
    void CheckCostumeEquipment(ESBCharaEquipType EquipType, bool& EquipFlag);
    void SetCharaCreateParameter(FCharaEquipItemCharaCreateInfo CreateInfo);
    void ChangeDecideButtonVisibility(bool Animation);
    void CheckPreviewUnusedItem(bool& Unused);
    void MakeSaveRequestItemData();
    void AddPreviewCostumeItem(FCharaEquipItemInfo& NewCostumeEquipItemInfo, ESBCharaEquipType& CostumeEquipType, FCharaEquipItemCharaCreateInfo& NewCostumeEquipCharaCreateInfo);
    void AddPreviewCostumeItemMulti();
    void InitDefaultCostumeData();
    void AddNewEquipInfo(const FCharaEquipItemInfo& NewCostumeEquipItemInfo, const FCharaEquipItemCharaCreateInfo& NewCostumeEquipCharaCreateInfo, const ESBCharaEquipType& CostumeEquipType);
    void ClearNewEquipInfo();
    void ChangeCostumeFunc();
    void SetUIBlockerVisibility(bool InIsVisible);
    void GetAvatarCostumePartsLoadingFlag(bool& OutIsAvatarCostumePartsLoading);
    void SetAvatarCostumePartsLoadingFlag(bool InIsLoading);
    void ChangeCostumeProcTerm();
    void ChangeCostumeProcStart();
    void GetEquipItemCharaCreateInfoFromEquipItemInfo(FCharaEquipItemInfo InEquipItemInfo, int32 InMaterialId, ESBCharaEquipType InEquipType, bool IsDetachEquip, bool& IsValid, FCharaEquipItemCharaCreateInfo& OutEquipItemCharaCreateInfo);
    void Close();
    void BndEvt__CostumeChangeMenu_K2Node_ComponentBoundEvent_3_OnOpenEquipRingHandSelectDialog__DelegateSignature(FString InRingUniqueId);
    void BndEvt__EquipRingHandSelectDialog_K2Node_ComponentBoundEvent_4_OnClose__DelegateSignature();
    void BndEvt__EquipRingHandSelectDialog_K2Node_ComponentBoundEvent_5_OnSelected__DelegateSignature(bool InIsLeftHand);
    void BndEvt__CostumeChangeMenu_K2Node_ComponentBoundEvent_0_OnSelected__DelegateSignature(FString InItemUniqueId);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__CostumeChangeMenu_K2Node_ComponentBoundEvent_2_OnOpenUsingUnusedEquipConfirmDialog__DelegateSignature();
    void BndEvt__CostumeChangeMenu_K2Node_ComponentBoundEvent_6_OnEndUsingUnusedEquipConfirmDialog__DelegateSignature();
    void OnSaveCostumeMultipleEquipsDelegate(int32 RetCode, const FSBExpiredEquipmentData& InExpiredEquipmentData);
    void OnSaveCostumeEquipDelegate(int32 RetCode, const FSBExpiredEquipmentData& InExpiredEquipmentData);
    void UpdateCostumeIconTable();
    void OnOtherCostumeCandidateSelected(bool IsDetach);
    void DetachCostume();
    void OnDetach_CostumeCandidateList_イベント();
    void OnIconSelected_CostumeCandidateList_イベント(FString InItemUniqueId);
    void UpdatePlayerCharacterCostume();
    void OnSaveEquipInfo_Costume(int32 RetCode, FSBExpiredEquipmentData InExpiredEquipmentData);
    void ChangeCostume();
    void Destruct();
    void Init();
    void Construct();
    void BndEvt__PosingSwitch_K2Node_ComponentBoundEvent_5_OnClickedPosingSwitchBtnRight__DelegateSignature();
    void BndEvt__PosingSwitch_K2Node_ComponentBoundEvent_4_OnClickedPosingSwitchBtnLeft__DelegateSignature();
    void BndEvt__CostumeVisibilityOnOffSwitch_K2Node_ComponentBoundEvent_0_OnDressVisibilitySwitchClicked__DelegateSignature(bool InIsDressVisibilitySwitchOn);
    void OnUnexistHigherPriorityCapture(class UObject* Sender, class UObject* Param);
    void OnExistHigherPriorityCapture(class UObject* Sender, class UObject* Param);
    void DestructCharaImageGraph();
    void ConstructCharaImageGraph();
    void ExpiredItemNoticeSystemMessageTimerEnd();
    void UpdateCharaImageVisibility_Internal();
    void ExpiredItemNoticeSystemMessageEnd();
    void OnTimerEndForSaveCostumeEquipInfoRequestFailureProc();
    void OnTimerEndForPlayerAvatarAppearenceUpdateNormalProc();
    void RequestSaveCharaCostumeMultipleEquips();
    void BndEvt__MyCharaMenu_Costume_BtnCostumeChange_K2Node_ComponentBoundEvent_1_EventOnClicked__DelegateSignature();
    void OnCostumeChange();
    void OnPreviewCostumeChange(bool Start);
    void ResetPreviewAvaterCostume(bool ForceReset);
    void OnShowExpiredItemMessage();
    void OnPartsTimeEventStart();
    void OnOpenMenu();
    void ExecuteUbergraph_MyCharaMenu_Costume(int32 EntryPoint);
    void OnRefreshPreviewCostume__DelegateSignature(FSBCharaCreateParameter Parameter);
    void OnSetAvatarImageReuploadFlag__DelegateSignature();
    void OnSetCostumePreviewParameter__DelegateSignature(FSBCharaCreateParameter CharaCreateParameter, bool Start);
    void OnPlayerAvatarSwitchCostumeOnOff__DelegateSignature(bool InIsCostumeOn);
    void OnPlayerAvatarSwitchPosing__DelegateSignature(FName OnPosingCommandName, bool IsSwitchPosingToPrev);
    void OnPlayerAvatarRotateActive__DelegateSignature(bool InIsActive);
    void OnChangeCostumeProc__DelegateSignature(bool ProcStart);
}; // Size: 0xF33

#endif
