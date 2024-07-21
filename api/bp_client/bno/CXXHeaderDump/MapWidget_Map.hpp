#ifndef UE4SS_SDK_MapWidget_Map_HPP
#define UE4SS_SDK_MapWidget_Map_HPP

class UMapWidget_Map_C : public USBMap
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x0280 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0288 (size: 0x8)
    class USBButtonFullScreen_C* AdminBtn;                                            // 0x0290 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0298 (size: 0x8)
    class UMapWidget_Cloud_C* Cloud0;                                                 // 0x02A0 (size: 0x8)
    class UMapWidget_Cloud_C* Cloud1;                                                 // 0x02A8 (size: 0x8)
    class UCanvasPanel* MapBodyGrp;                                                   // 0x02B0 (size: 0x8)
    class USBButtonFullScreen_C* MapBtn;                                              // 0x02B8 (size: 0x8)
    class UImage* MapImage;                                                           // 0x02C0 (size: 0x8)
    class UCanvasPanel* MapPlaceNamePlates;                                           // 0x02C8 (size: 0x8)
    class UMapWidget_TraverseCloud_C* MapWidget_TraverseCloud;                        // 0x02D0 (size: 0x8)
    class USBRuntimeTextBlock* NoMapTextBlock;                                        // 0x02D8 (size: 0x8)
    class UMapWidget_PlayerIcon_C* PlayerIcon;                                        // 0x02E0 (size: 0x8)
    class UCanvasPanel* RegionIconGrp;                                                // 0x02E8 (size: 0x8)
    class UBP_Dialog_C* YesNoDialog;                                                  // 0x02F0 (size: 0x8)
    class UUIBlocker_C* LoadBlocker;                                                  // 0x02F8 (size: 0x8)
    class UTexture2D* TempMapTexture2D;                                               // 0x0300 (size: 0x8)
    class UDataTable* MapBGConfig;                                                    // 0x0308 (size: 0x8)
    TArray<class UMapWidget_MapPinnedPin_C*> WorldMapPinnedPinList;                   // 0x0310 (size: 0x10)
    TArray<class UMapWidget_MapPinnedPin_C*> CurrAreaMapPinnedPinList;                // 0x0320 (size: 0x10)
    TArray<class UMapWidget_PartyMemberIcon_C*> PartyMemberIcons;                     // 0x0330 (size: 0x10)
    TArray<class UMapWidget_WarpPointIcon_C*> WarpPointIcons;                         // 0x0340 (size: 0x10)
    TArray<class UMapWidget_QuestIcon_C*> QuestIconS;                                 // 0x0350 (size: 0x10)
    TArray<class UMapWidget_CommonSymbolIcon_C*> OtherSymbolIcons;                    // 0x0360 (size: 0x10)
    TArray<class UMapWidget_CommonSymbolIcon_C*> InterruptQuestIcons;                 // 0x0370 (size: 0x10)
    TArray<class UMapWidget_CommonSymbolIcon_C*> NamedEnemyIcons;                     // 0x0380 (size: 0x10)
    TArray<class UMapWidget_CommonSymbolIcon_C*> ResearchTeamIcons;                   // 0x0390 (size: 0x10)
    TArray<class UIconQuestArea_C*> AreaIcons;                                        // 0x03A0 (size: 0x10)
    TArray<class UIconQuestArea_C*> InterraptAreaIcons;                               // 0x03B0 (size: 0x10)
    TArray<class UMapWidget_TimeSymbolIcon_C*> TimeIcons;                             // 0x03C0 (size: 0x10)
    TArray<class UMapWidget_CommonSymbolIcon_C*> CampIcons;                           // 0x03D0 (size: 0x10)
    TArray<FMapPinInfo> MapPinInfoList;                                               // 0x03E0 (size: 0x10)
    TArray<FVector2D> RegisteredQuestIconLocationList;                                // 0x03F0 (size: 0x10)
    TArray<FSBResearchTeamData> ResearchTeamList;                                     // 0x0400 (size: 0x10)
    TArray<FMapPinInfo> MapPinComboBoxList;                                           // 0x0410 (size: 0x10)
    TArray<FName> CurrActiveWarpPoints;                                               // 0x0420 (size: 0x10)
    FSBMasterWarpPoint SelectedWarpPointData;                                         // 0x0430 (size: 0x68)
    FMapWidget_Map_COnChangeToRegionMap OnChangeToRegionMap;                          // 0x0498 (size: 0x10)
    void OnChangeToRegionMap(FString InRegionMapId);
    FVector2D CurrSelectedMapCapturePosition;                                         // 0x04A8 (size: 0x8)
    FMapWidget_Map_COnMapPressed OnMapPressed;                                        // 0x04B0 (size: 0x10)
    void OnMapPressed();
    FSBMapBGConfigTableRow LoadData;                                                  // 0x04C0 (size: 0x78)
    FVector2D DefaultMapSize;                                                         // 0x0538 (size: 0x8)
    FVector2D TempMapSize;                                                            // 0x0540 (size: 0x8)
    FTimerHandle TimerHandle;                                                         // 0x0548 (size: 0x8)
    FMapWidget_Map_COnStartSavePinInfo OnStartSavePinInfo;                            // 0x0550 (size: 0x10)
    void OnStartSavePinInfo();
    int32 PinnedPinCnt;                                                               // 0x0560 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0564 (size: 0x4)
    FMapWidget_Map_COnEndSavePinInfo OnEndSavePinInfo;                                // 0x0568 (size: 0x10)
    void OnEndSavePinInfo(bool IsResultSuccess, ESBMapErrorCode ErrorCode);
    FMapWidget_Map_COnPinnedPinClicked OnPinnedPinClicked;                            // 0x0578 (size: 0x10)
    void OnPinnedPinClicked(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    FMapWidget_Map_COnShowErrorMessage OnShowErrorMessage;                            // 0x0588 (size: 0x10)
    void OnShowErrorMessage(int32 InMessageTextId);
    int32 PartyMemberMax;                                                             // 0x0598 (size: 0x4)
    int32 AreaMapPinMax;                                                              // 0x059C (size: 0x4)
    int32 InterruptQuestPartyMemberMax;                                               // 0x05A0 (size: 0x4)
    char padding_1[0x4];                                                              // 0x05A4 (size: 0x4)
    FMapWidget_Map_COnWarpRequestAccepted OnWarpRequestAccepted;                      // 0x05A8 (size: 0x10)
    void OnWarpRequestAccepted();
    FMapWidget_Map_COnResetInputMode OnResetInputMode;                                // 0x05B8 (size: 0x10)
    void OnResetInputMode();
    FMapWidget_Map_COnWarpPointIconPressed OnWarpPointIconPressed;                    // 0x05C8 (size: 0x10)
    void OnWarpPointIconPressed();
    int32 NamedEnemyIconMax;                                                          // 0x05D8 (size: 0x4)
    int32 InterruptQuestIconMax;                                                      // 0x05DC (size: 0x4)
    FMapWidget_Map_COnUpdateTraverseCloud OnUpdateTraverseCloud;                      // 0x05E0 (size: 0x10)
    void OnUpdateTraverseCloud();
    FMapWidget_Map_COnSetMapScrollFunctionOnOff OnSetMapScrollFunctionOnOff;          // 0x05F0 (size: 0x10)
    void OnSetMapScrollFunctionOnOff(bool InIsScrollFunctionOn, FVector2D InScrollHVLength);
    int32 IconOrderScale;                                                             // 0x0600 (size: 0x4)
    int32 AreaIconOrderScale;                                                         // 0x0604 (size: 0x4)
    float CurrSelectedMapSizeScale;                                                   // 0x0608 (size: 0x4)
    float DefaultMapSizeScale;                                                        // 0x060C (size: 0x4)
    float TempLeftEdgePosDiffForCloud;                                                // 0x0610 (size: 0x4)
    char padding_2[0x4];                                                              // 0x0614 (size: 0x4)
    FMapWidget_Map_COnUpdatePlayerIconPosition OnUpdatePlayerIconPosition;            // 0x0618 (size: 0x10)
    void OnUpdatePlayerIconPosition(FVector2D MapPosition, float ViewScale);
    float IconPositionScale;                                                          // 0x0628 (size: 0x4)
    char padding_3[0x4];                                                              // 0x062C (size: 0x4)
    FString CurrSelectedMapId;                                                        // 0x0630 (size: 0x10)
    FString NewLoadedMapId;                                                           // 0x0640 (size: 0x10)
    FName PublicDungeonLocationId;                                                    // 0x0650 (size: 0x8)
    FMapWidget_Map_COnInitPlayerIcon OnInitPlayerIcon;                                // 0x0658 (size: 0x10)
    void OnInitPlayerIcon(FVector2D PlayerPosition, FVector2D MapSize);
    FName RowName;                                                                    // 0x0668 (size: 0x8)
    bool bIsWorldMap;                                                                 // 0x0670 (size: 0x1)
    bool bIsWarpLocked;                                                               // 0x0671 (size: 0x1)
    bool bIsPartyMemberIconHided;                                                     // 0x0672 (size: 0x1)
    bool bIsSavingMapPinInfo;                                                         // 0x0673 (size: 0x1)
    bool bTextureLoad;                                                                // 0x0674 (size: 0x1)
    bool bIsPlayerCursorVisible;                                                      // 0x0675 (size: 0x1)
    bool bIsMapScrollFunctionOn;                                                      // 0x0676 (size: 0x1)
    bool bIsPublicDungeon;                                                            // 0x0677 (size: 0x1)
    TArray<class UMapWidget_WarpPointIcon_C*> WarpPointIconsEx;                       // 0x0678 (size: 0x10)
    class UQuestDetailForMap_C* QuestMenuEx;                                          // 0x0688 (size: 0x8)

    void Get Portal to Location(FString InPortalName, FString& OutLocationName);
    void GetNamedEnemyLevelColor(int32 InLevel, FSlateColor& OutColor);
    void OnPressed_QuestIcon(int32 InQuestId);
    void ClearWarpPointIconEx();
    void UpdateWarpPointEx();
    void HideDialog();
    void DeleteDialog();
    void CreateDialog(class UBP_Dialog_C*& OutputPin);
    void UpdateMapPlaceNamePlate(FString InMapId);
    void GetLoadData(FSBMapBGConfigTableRow& LoadData);
    void GetAreaMapPinMax(int32& AreaMapPinMax);
    void IsWorldMapFlag(bool& IsWorldMap);
    void SetWorldMapFlag(bool IsWorldMap);
    void OnRaidPortalClose(int32 Index, class UMapWidget_TimeSymbolIcon_C* Widget);
    void OnPressed_WarpPointIcon(class UMapWidget_WarpPointIcon_C* InWarpPointIcon);
    void OnPressed_RegionIcon(FString InRegionMapId);
    void UpdateCanvasScale();
    void PublicDungeon_DirectWarpCheck(FName DungeonId, bool& IsOpen);
    void LocationIconVisibleCheck(FName LocationId, bool& Visible);
    void UpdateCampPointIcon();
    void ClearCampPointIcon();
    void FindQuestAreaIcon(FSBMiniMapQuestAreaConfig TargetData, TArray<FSBMiniMapQuestAreaConfig>& RefList, int32& TopIndex, TArray<int32>& FindIndex);
    void CreateChallengeQuestIcon(FSBCharacterProfileData& ProfileData, int32 LocationIndex, ESBFacilityType FacilityType);
    void TimeIconSetting(class UWidget* IconWidget, class UMapWidget_CommonSymbolIcon_C* TargetPosWidget, int32 Prio);
    void UpdateInterruptQuestAreaIcon();
    void RemoveInterruptQuestAreaIcon(class ASBInterruptQuestInstance* QuestInstance);
    void AddInterruptQuestAreaIcon(class ASBInterruptQuestInstance* QuestInstance);
    void CalcAreaIconSize(FName MapId, class UIconQuestArea_C* AreaWidget);
    void UpdateQuestAreaIcon();
    void ClearQuestAreaIcon();
    void SetResearchTeamList(TArray<FSBResearchTeamData>& InList);
    void ClearResearchTeamSymbolIcon();
    void CreateResearchTeamSymbolIcon();
    void RecalculateMapPlaceNamePlatePositions(FVector2D InMapImageSize, FString InMapId);
    void SetupMapPlaceNamePlates(FString InMapId);
    void UpdateNamedEnemyIcon();
    void ClearNamedEnemyIcon();
    void CreateNamedEnemyIcon();
    void TraverseCloudUpdate(FString InMapId, int32 Floor);
    void IsDisplayQuestIconStandby(EQuestCategory2 QuestCategory2, bool& bDisplay);
    int32 getQuestIconZOrder(EQuestCategory2 Category2, EQuestStatus Status, int32 QuestIndex);
    void UpdateInterruptQuestIcon();
    void ClearInterruptQuestIcon();
    void CreateInterruptQuestIcon();
    void UpdatePlayerIcon();
    void SetupPlayerIcon(bool IsIconVisible);
    void GetWarpConfirmationTextIdx(int32& TextIdx);
    void GetWarpPointDataFromName(FString InWarpPointName, bool& IsValid, FSBMasterWarpPoint& OutWarpPointData);
    void DoWarpFromWarpBox(FSBMasterWarpPoint InWarpPointData);
    void GetMapBGConfigRowName(FSBMapBGConfigTableRow InMagBGConfig, bool& OutIsValid, FString& OutRowName);
    void CheckIfWarpDestIsAbsoluteFree_ForAlpha(FWarpPointMasterData InWarpPointMasterData, bool& IsAbsoluteFree);
    void CalcPinPosition(class UMapWidget_MapPinnedPin_C* InPin, const FMapPinInfo& InMapPinInfo);
    void GetMapPinInfoFromPinId(int32 inPinId, bool& IsValid, FMapPinInfo& OutMapPinInfo);
    void GetMapPinInfoList(TArray<FMapPinInfo>& MapPinInfoList);
    void GetPinnedPinCnd(int32& PinnedPinCnt);
    bool IsEnablePinIcon();
    void GetVacantAreaMapPin(class UMapWidget_MapPinnedPin_C*& OutPinRef, bool& IsPinVacant);
    void ClearQuestIcon();
    void UpdateOtherSymbolIcon();
    void ClearOtherSymbolIcon();
    void CreateTimeSymbolIcon(int32 InIndex, const FSBCharacterProfileLocationData& LocationData, class UMapWidget_CommonSymbolIcon_C* TargetPosWidget, int32 InPriority);
    int32 CreateCommonSymbolIcon(class UTexture2D* InTexture, int32 Prio, FVector2D Pos, FString TooltipString);
    void CreateOtherSymbolIconToLocation(FSBLocationInfo LocationInfo, FName RowName);
    void CreateOtherSymbolIconToProfile(FSBCharacterProfileData CharcterProfile);
    void OtherSymbolIconSetting(class UMapWidget_CommonSymbolIcon_C* IconWidget, int32 Prio, FVector2D Pos);
    void UpdateQuestIcon();
    void InitPlayerIcon();
    void HidePartyMemberIcon();
    void UpdatePartyMemberIcon();
    void ClearPartyMemberIcon();
    void CreatePartyMemberIcon();
    void PlayAnimOut();
    void PlayAnimIn();
    void FindPinInfoByPinIndex(TArray<FMapPinInfo>& InPinInfoList, FMapPinInfo InTargetPinInfo, FMapPinInfo& OutPinInfo, bool& OutResult);
    void PrintMapPinInfoList();
    void DoErasePinnedPin(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void DoSavePinInfo(class UMapWidget_MapPinnedPin_C* InPinnedPin, bool ResetInputMode);
    void IsSavingMapPinInfo(bool& IsSavingMapPinInfo);
    void SetSavingMapPinInfo(bool IsSavingMapPinInfo);
    void GetMapPinInfoFromBoxIndex(int32 inPinId, bool& IsValid, FMapPinInfo& OutMapPinInfo);
    void UpdateComboBoxPinList();
    void ClosePinnedPinCommentBox(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void OpenPinnedPinCommentBox(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void SetMapToPinAttachMode(bool IsAttachMode);
    void AttachPinToMap(class UMapWidget_MapPinnedPin_C* InMapPin, FMapPinInfo InMapPinInfo, bool IsTextBoxVisible);
    void SetPinToMap(class UMapWidget_MapPinnedPin_C* InPinnedPinRef);
    class UMapWidget_MapPinnedPin_C* CreateMapWidgetMapPinnedPin();
    void ClearCurrentAreaMapPinnedPin();
    void CreateCurrentAreaMapPinnedPin();
    void ClearWorldMapPinnedPin();
    void CreateWorldMapPinnedPin();
    void InitPinInfo();
    void GetMapBGConfigFromMapId(FString InMapId, FSBMapBGConfigTableRow& OutMapBGConfig);
    void GetMapBGConfigFromIndex(int32 InIndex, FSBMapBGConfigTableRow& OutMapBGConfig);
    void GetMapBodyPosition(FVector2D& OutPosition);
    void SetMapBodyPosition(FVector2D InPosition);
    FVector2D GetMapBodySize();
    void SetMapBodySize(FVector2D InSize);
    void CalcWorldPosition(FVector2D MapLocation, FVector2D& WorldLocation);
    void CalcMapPosition(FVector2D WorldLocation, FVector2D& MapLocation);
    void UpdateWarpPoint();
    void ClearWarpPointIcon();
    void SetWorldMapTexture(FString InMapId);
    void SetupAsRegionMap(FString InMapId, bool InIsPlayerCursorVisible);
    void SetupAsWorldMap(FString InMapId);
    void SetupMap(FString InMapId, bool InIsPlayerCursorVisible);
    void SetRegionMapTexture(FString InMapId);
    void ClearIcon();
    void UpdateTimerEvent();
    void ResetTimerEvent();
    void SetupTimerEvent();
    void SetupIcon();
    void Close();
    void Setup();
    void Terminate();
    void Initialize();
    void OnLoaded_20605FE04FEA463F3200F1B3C3F47AC8(class UObject* Loaded);
    void SetupInterruptQuest();
    void AddInterruptArea(const class ASBInterruptQuestInstance* InInstance);
    void RemoveInterruptArea(const class ASBInterruptQuestInstance* InInstance);
    void ResetInterruptQuest();
    void OnSaveMapPinInfosDelegate_イベント(const bool Result, const ESBMapErrorCode ErrorCode);
    void OnTextCommitted_イベント(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void OnPinBtnClicked_イベント(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void BindPin(class UMapWidget_MapPinnedPin_C* Target);
    void UnbindPin(class UMapWidget_MapPinnedPin_C* Target);
    void BindOnSaveMapPinInfos();
    void UnbindOnSaveMapPinInfos();
    void BndEvt__AdminBtn_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void InitAdminBtn();
    void Construct();
    void Destruct();
    void OnEndYesNoDialog(EDialogResult Result);
    void BndEvt__Button_0_K2Node_ComponentBoundEvent_53_OnButtonClickedEvent__DelegateSignature();
    void PreConstruct(bool IsDesignTime);
    void InitMapBG(FSBMapBGConfigTableRow InMapBGConfig, FString InMapId);
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_0();
    void EventCreateDialog();
    void OpenQuestMenu(int32 InQuestId);
    void OnFinishMenu_1(TEnumAsByte<QuestDetail_FinishStatus::Type> FinishStatus, int32 QuestIndex);
    void ExecuteUbergraph_MapWidget_Map(int32 EntryPoint);
    void OnInitPlayerIcon__DelegateSignature(FVector2D PlayerPosition, FVector2D MapSize);
    void OnUpdatePlayerIconPosition__DelegateSignature(FVector2D MapPosition, float ViewScale);
    void OnSetMapScrollFunctionOnOff__DelegateSignature(bool InIsScrollFunctionOn, FVector2D InScrollHVLength);
    void OnUpdateTraverseCloud__DelegateSignature();
    void OnWarpPointIconPressed__DelegateSignature();
    void OnResetInputMode__DelegateSignature();
    void OnWarpRequestAccepted__DelegateSignature();
    void OnShowErrorMessage__DelegateSignature(int32 InMessageTextId);
    void OnPinnedPinClicked__DelegateSignature(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void OnEndSavePinInfo__DelegateSignature(bool IsResultSuccess, ESBMapErrorCode ErrorCode);
    void OnStartSavePinInfo__DelegateSignature();
    void OnMapPressed__DelegateSignature();
    void OnChangeToRegionMap__DelegateSignature(FString InRegionMapId);
}; // Size: 0x690

#endif
