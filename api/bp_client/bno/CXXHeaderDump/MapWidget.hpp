#ifndef UE4SS_SDK_MapWidget_HPP
#define UE4SS_SDK_MapWidget_HPP

class UMapWidget_C : public USBCommandMenuChildBase
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02C0 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02C8 (size: 0x8)
    class UMapWidget_DividedZoneList_C* DividedZoneList;                              // 0x02D0 (size: 0x8)
    class UMapWidget_CompoundBox_C* MapBox;                                           // 0x02D8 (size: 0x8)
    class UMap_MapBtn_C* MapBtn;                                                      // 0x02E0 (size: 0x8)
    class UMapWidget_MapScrollBar_C* MapScrollBar;                                    // 0x02E8 (size: 0x8)
    class UMapWidget_AreaName_C* MapWidget_AreaName;                                  // 0x02F0 (size: 0x8)
    class UCommandMenuCommonSubButtonList_C* MenuItemButtonList;                      // 0x02F8 (size: 0x8)
    class UTextBlock* NowAreaName;                                                    // 0x0300 (size: 0x8)
    class UMapWidget_CompoundBox_C* PinBox;                                           // 0x0308 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0310 (size: 0x8)
    class UImage* UnderlayForMapFunctions;                                            // 0x0318 (size: 0x8)
    class UVerticalBox* VBForDividedZoneList;                                         // 0x0320 (size: 0x8)
    class UMapWidget_VisitedMapList2_C* VisitedMapList;                               // 0x0328 (size: 0x8)
    class UImage* VisitedMapListBg01;                                                 // 0x0330 (size: 0x8)
    class UMapWidget_CompoundBox_C* WarpBox;                                          // 0x0338 (size: 0x8)
    FMapWidget_COnClose OnClose;                                                      // 0x0340 (size: 0x10)
    void OnClose();
    FString SelectedMapId;                                                            // 0x0350 (size: 0x10)
    TArray<FString> MapNameList;                                                      // 0x0360 (size: 0x10)
    TArray<FString> AreaMapIdList;                                                    // 0x0370 (size: 0x10)
    FString CurrMapId;                                                                // 0x0380 (size: 0x10)
    FString CurrWorldMapId;                                                           // 0x0390 (size: 0x10)
    class UMapWidget_Map_C* MapBody;                                                  // 0x03A0 (size: 0x8)
    bool IsMultiLayerMap;                                                             // 0x03A8 (size: 0x1)
    char padding_0[0x7];                                                              // 0x03A9 (size: 0x7)
    class UMapWidget_FuncIconList_C* FuncIconList;                                    // 0x03B0 (size: 0x8)
    class UMapWidget_PinIconList_C* PinIconList;                                      // 0x03B8 (size: 0x8)
    TArray<FString> LastSelectedMapList;                                              // 0x03C0 (size: 0x10)
    bool IsPinSelected;                                                               // 0x03D0 (size: 0x1)
    EMapPinType SelectedPinType;                                                      // 0x03D1 (size: 0x1)
    bool IsPinTextBoxOpened;                                                          // 0x03D2 (size: 0x1)
    char padding_1[0x5];                                                              // 0x03D3 (size: 0x5)
    class UMapWidget_MapPinnedPin_C* CurrSelectedPinnedPin;                           // 0x03D8 (size: 0x8)
    bool IsWorldMap;                                                                  // 0x03E0 (size: 0x1)
    char padding_2[0x7];                                                              // 0x03E1 (size: 0x7)
    TArray<FString> WarpBoxWarpPointNameList;                                         // 0x03E8 (size: 0x10)
    FText SaveMapPinErrorText;                                                        // 0x03F8 (size: 0x18)
    FVector2D PinnedLocationXY;                                                       // 0x0410 (size: 0x8)
    FVector PinnedWorldPositionRate;                                                  // 0x0418 (size: 0xC)
    char padding_3[0x4];                                                              // 0x0424 (size: 0x4)
    TArray<FString> BookmarkTypeList;                                                 // 0x0428 (size: 0x10)
    bool IsVisitedMapListOpen;                                                        // 0x0438 (size: 0x1)
    char padding_4[0x7];                                                              // 0x0439 (size: 0x7)
    FString TempSelectedVisitedMapId;                                                 // 0x0440 (size: 0x10)
    TArray<FString> VisitedMapIdList;                                                 // 0x0450 (size: 0x10)
    TArray<FString> VisitedMapZoneIdList;                                             // 0x0460 (size: 0x10)
    bool IsMapSelectedByDividedZoneList;                                              // 0x0470 (size: 0x1)
    bool IsMapScrollFunctionOn;                                                       // 0x0471 (size: 0x1)
    bool IsMapScrollMouseCaptureBegin;                                                // 0x0472 (size: 0x1)
    char padding_5[0x5];                                                              // 0x0473 (size: 0x5)
    class APlayerController* TempPlayerController;                                    // 0x0478 (size: 0x8)
    float TempInputMouseDeltaX;                                                       // 0x0480 (size: 0x4)
    float TempInputMouseDeltaY;                                                       // 0x0484 (size: 0x4)
    bool IsResearchTeamSupporterListOpen;                                             // 0x0488 (size: 0x1)
    char padding_6[0x7];                                                              // 0x0489 (size: 0x7)
    FString CurrSubLevelId;                                                           // 0x0490 (size: 0x10)
    bool bIsSubLevel;                                                                 // 0x04A0 (size: 0x1)
    bool IsPublicDungeon;                                                             // 0x04A1 (size: 0x1)
    char padding_7[0x2];                                                              // 0x04A2 (size: 0x2)
    float InputMouseMovePower;                                                        // 0x04A4 (size: 0x4)
    FString FaceImageURL;                                                             // 0x04A8 (size: 0x10)
    class UTexture2DDynamic* FaceImageTexture;                                        // 0x04B8 (size: 0x8)
    FString OnPlayerMapId;                                                            // 0x04C0 (size: 0x10)
    bool bPlayerIconVisible;                                                          // 0x04D0 (size: 0x1)
    bool bViewZoneName;                                                               // 0x04D1 (size: 0x1)
    char padding_8[0x6];                                                              // 0x04D2 (size: 0x6)
    FSoftClassPath CursorClassPath;                                                   // 0x04D8 (size: 0x18)
    class UDataTable* MapBGConfig;                                                    // 0x04F0 (size: 0x8)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    FVector CalcPinWorldPosition(FVector2D InPinnedLocation);
    void EXSettingMapCheck();
    void SetupMapDefaultScroll(FVector2D Position, FVector2D MapSize);
    void UpdateMapName();
    void PublicDungeonCheck();
    void GetZoneDBZoneIdFromRowName(FName InRowName, bool& OutIsValid, FName& OutZoneId);
    void GetZoneDBRowNameFromZoneId(FString InZoneId, bool& OutIsValid, FName& OutRowName);
    void GetIsRmShopDisplayed(bool& OutIsRmShopDisplayed);
    void GetTopMapIdByDividedZoneId(FString InMapId, FString& OutTopMapId);
    void CheckIfMapIsDividedZone(FString InMapId, bool& OutMapIsDividedZone);
    void CheckIfMapHasDividedZone(FString InMapId, bool& OutMapHasDividedZones);
    void TraverseUpdate(FString InMapId, int32 Floor);
    void IsMapListAdd(FSBMapBGConfigTableRow CheckMap, bool& IsAdd);
    void GetWorldMapId(FString& OutId);
    void SetupWarpPointDropDownList();
    void SetupPinDropDownList();
    void SetupMap(FString InMapId, bool InIsWorldMap, bool InIsSelectedByDividedZoneList);
    void GetCurrentMapId(bool InIsWorldMap, FString& OutMapId, bool& OutIsSubLevel, FString& OutSubLevelId);
    void SetupMapList();
    void CloseMapWidget();
    void TickForMapScroll();
    void BndEvt__MapScrollBar_K2Node_ComponentBoundEvent_1_OnMouseCaptureBegin__DelegateSignature();
    void BndEvt__MapScrollBar_K2Node_ComponentBoundEvent_2_OnMouseCaptureEnd__DelegateSignature();
    void OnPlayerViewScroll(FVector2D IconPosition, float ViewScale);
    void OnDefaultScrollSetting(FVector2D PlayerPos, FVector2D FieldSize);
    void OnUpdateTraverseCloudEvent();
    void BndEvt__MapBtn_K2Node_ComponentBoundEvent_6_OnButtonClicked__DelegateSignature();
    void CloseVisitedMapList();
    void BndEvt__DividedZoneList_K2Node_ComponentBoundEvent_0_OnListItemClicked__DelegateSignature(FString InDividedZoneId);
    void BndEvt__MapWidget_VisitedMapList_K2Node_ComponentBoundEvent_1_OnListItemClicked__DelegateSignature(FString InMapId);
    void BndEvt__MapWidget_VisitedMapList_K2Node_ComponentBoundEvent_4_OnClose__DelegateSignature();
    void Construct();
    void Destruct();
    void Init();
    void OnChangeMap(FString InMapId, bool InIsWorldMap);
    void OnChangeToRegionMap_イベント(FString InRegionMapId);
    void OnFuncIconSelected(EMapFuncIconType InSelectedFuncIconType);
    void BndEvt__MapScrollBar_K2Node_ComponentBoundEvent_0_OnSliderVValueChanged__DelegateSignature(float InValue);
    void BndEvt__MapScrollBar_K2Node_ComponentBoundEvent_6_OnSliderHValueChanged__DelegateSignature(float InValue);
    void OnSetMapScrollFunctionOnOffEvent(bool InIsScrollFunctionOn, FVector2D InScrollHVLength);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnRMShopClosed();
    void OnParentTerm();
    void OnMapPressed_イベント();
    void OnStartSavePinInfo_イベント();
    void UpdatePinBox();
    void OnPinnedPinClicked_イベント(class UMapWidget_MapPinnedPin_C* InPinnedPin);
    void StartShowErrorMessage(int32 InMessageTextId);
    void EndShowErrorMessage();
    void BndEvt__MenuItemButtonList_K2Node_ComponentBoundEvent_67_OnClick__DelegateSignature(int32 ButtonId);
    void DoChangeMapTypeSelected(bool IsWorldMap);
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__PinBox_K2Node_ComponentBoundEvent_88_OnItemSelected__DelegateSignature(FString InSelectedItemName, int32 InSelectedItemId);
    void BndEvt__WarpBox_K2Node_ComponentBoundEvent_96_OnItemSelected__DelegateSignature(FString InSelectedItemName, int32 InSelectedItemId);
    void OnWarpRequestAccepted_イベント();
    void ResetInputModeToMapWidget();
    void ChangeMouseCursorType(EMapPinType InMapPinType);
    void ResetMouseCursorTypeToDefault();
    void BndEvt__PinBox_K2Node_ComponentBoundEvent_4_OnListBoxOpened__DelegateSignature();
    void BndEvt__WarpBox_K2Node_ComponentBoundEvent_10_OnListBoxOpened__DelegateSignature();
    void OnWarpPointIconPressed_イベント();
    void OnEndSavePinInfo_イベント(bool IsResultSuccess, ESBMapErrorCode ErrorCode);
    void BndEvt__PinBox_K2Node_ComponentBoundEvent_1_OnListBoxClosed__DelegateSignature();
    void BndEvt__WarpBox_K2Node_ComponentBoundEvent_2_OnListBoxClosed__DelegateSignature();
    void OnPinBoxPinIconSelected_イベント(EMapPinType InSelectedPinType);
    void UpdateMarkerPin();
    void ResetMouseCursorTypeToDefaultRequest();
    void BookmarkUpdateRequest();
    void UpdateBookmarkStatusButton();
    void PreConstruct(bool IsDesignTime);
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void ExecuteUbergraph_MapWidget(int32 EntryPoint);
    void OnClose__DelegateSignature();
}; // Size: 0x4F8

#endif
