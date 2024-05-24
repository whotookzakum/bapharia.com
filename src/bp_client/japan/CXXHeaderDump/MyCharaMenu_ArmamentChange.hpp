#ifndef UE4SS_SDK_MyCharaMenu_ArmamentChange_HPP
#define UE4SS_SDK_MyCharaMenu_ArmamentChange_HPP

class UMyCharaMenu_ArmamentChange_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x02B8 (size: 0x8)
    class UImage* Bg01;                                                               // 0x02C0 (size: 0x8)
    class UCanvasPanel* CaptureStudioCanvas;                                          // 0x02C8 (size: 0x8)
    class UImage* ImageForModelCapture2d;                                             // 0x02D0 (size: 0x8)
    class UMyCharaMenu_MountImagineList_C* MountImagineList;                          // 0x02D8 (size: 0x8)
    class UImage* MountImagineLogoMark;                                               // 0x02E0 (size: 0x8)
    class UCanvasPanel* MountImagineModelGrp;                                         // 0x02E8 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x02F0 (size: 0x8)
    class UMyCharaMenu_MountImagine_C* MyCharaMenu_MountImagine;                      // 0x02F8 (size: 0x8)
    class UMyWalletWidget_C* MyWalletWidget;                                          // 0x0300 (size: 0x8)
    class UCmnOperationRotate_C* OperationRotate;                                     // 0x0308 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0310 (size: 0x8)
    class UUIBlocker_C* UIBlocker_ForCandidateList;                                   // 0x0318 (size: 0x8)
    class UUIBlocker_C* UIBlockerForSystemMessage;                                    // 0x0320 (size: 0x8)
    FMyCharaMenu_ArmamentChange_COnChangeEquipWeaponProc OnChangeEquipWeaponProc;     // 0x0328 (size: 0x10)
    void OnChangeEquipWeaponProc(bool ProcStart);
    FString SelectedEquipMountImagineUniqueId;                                        // 0x0338 (size: 0x10)
    FMyCharaMenu_ArmamentChange_COnAnimFinishedMyCharaOut OnAnimFinishedMyCharaOut;   // 0x0348 (size: 0x10)
    void OnAnimFinishedMyCharaOut();
    FString CurrEquipMountImagineUniqueId;                                            // 0x0358 (size: 0x10)
    bool TickCheck;                                                                   // 0x0368 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0369 (size: 0x7)
    FMyCharaMenu_ArmamentChange_COnSubMenuChanged OnSubMenuChanged;                   // 0x0370 (size: 0x10)
    void OnSubMenuChanged(int32 Index);
    FMyCharaMenu_ArmamentChange_COnAchievementChangeButtonClicked OnAchievementChangeButtonClicked; // 0x0380 (size: 0x10)
    void OnAchievementChangeButtonClicked(class UMyCharaMenu_AchievementList_C* InAchievementList);
    FMyCharaMenu_ArmamentChange_COnAcquiredAchievementLoaded OnAcquiredAchievementLoaded; // 0x0390 (size: 0x10)
    void OnAcquiredAchievementLoaded(bool InResult);
    FMyCharaMenu_ArmamentChange_COnSelectAchievementSaved OnSelectAchievementSaved;   // 0x03A0 (size: 0x10)
    void OnSelectAchievementSaved(bool InResult);
    FString OpenBookMarkType;                                                         // 0x03B0 (size: 0x10)
    TArray<FString> BookmarkTypeList;                                                 // 0x03C0 (size: 0x10)
    bool TempIsEquippedWeaponUsingWeaponStickerExpired;                               // 0x03D0 (size: 0x1)
    bool TempIsEquipmentExpired;                                                      // 0x03D1 (size: 0x1)
    char padding_1[0x6];                                                              // 0x03D2 (size: 0x6)
    TArray<FString> TempExpiredWeaponStickerUsingWeaponUniqueIds;                     // 0x03D8 (size: 0x10)
    int32 TempCurrEquipWeaponId;                                                      // 0x03E8 (size: 0x4)
    char padding_2[0x4];                                                              // 0x03EC (size: 0x4)
    FSBExpiredEquipmentData tempExpiredEquipmentData;                                 // 0x03F0 (size: 0x130)
    FString TempNewEquipWeaponUniqueId;                                               // 0x0520 (size: 0x10)
    TArray<FSBDecayedWeaponData> TempDecayedWeapons;                                  // 0x0530 (size: 0x10)
    FMyCharaMenu_ArmamentChange_COnChangeEquipCostumeProc OnChangeEquipCostumeProc;   // 0x0540 (size: 0x10)
    void OnChangeEquipCostumeProc();
    FString TempNewEquipImagineUniqueId;                                              // 0x0550 (size: 0x10)
    bool TempIsNewEquipImagineIsExpired;                                              // 0x0560 (size: 0x1)
    char padding_3[0x7];                                                              // 0x0561 (size: 0x7)
    class UUMG_CaptureStudio_C* CaptureStudioForMountImagineModel;                    // 0x0568 (size: 0x8)
    FTimerHandle ModelAssetLoadTimeOutHandle;                                         // 0x0570 (size: 0x8)
    bool bIsMountImagineModelAssetLoading;                                            // 0x0578 (size: 0x1)
    char padding_4[0x7];                                                              // 0x0579 (size: 0x7)
    FInventoryItemData MountImagineInventoryItemData;                                 // 0x0580 (size: 0x60)
    bool bIsCaptureStudioConstructed;                                                 // 0x05E0 (size: 0x1)

    void SetCaptureStudioVisibility(bool InIsVisible);
    void SetupMountImagineModel(FString InMountImagineUniqueId);
    void CheckIfWeaponDecayed(FString InWeaponUniqueId, TArray<FSBDecayedWeaponData>& InDecayedWeaponDatas, bool& OutIsDecayed);
    void SetupEquipMountImagine();
    void BookmarkUpdateRequest();
    void Construct_Imagine();
    void Destruct_Imagine();
    void BndEvt__MyCharaMenu_MountImagine_K2Node_ComponentBoundEvent_0_BtnMountImagineClicked__DelegateSignature();
    void GetEquipped_Mountmagine_UniqueId();
    void OnMountImagineChangeRequest(FString UniqueId);
    void OnMountImagineChangeClick(FString InEquip);
    void OnMountImagineHideWindowStart();
    void OnMountImagineHideWindowFin(bool IsChangeRequest);
    void OnSaveImagineEquipDelegate(int32 RetCode, const ESBCharaEquipType EquipType, FString UniqueId, const bool IsEquip, const bool bInIsExpiredStickerWeapons, const TArray<FString>& InExpiredStickerWeaponUniqueIds, const FSBExpiredEquipmentData& InExpiredEquipmentData);
    void ForImagineEquipExpiredItemNoticeSystemMessageTimerEnd();
    void OnMountImagineSelectReleased();
    void LoadMountImagineModel(FString InMountImagineUniqueId);
    void AssetLoadComplete();
    void AssetLoadTimeout();
    void OnCaptureStudioConstructed(class ABP_CaptureStudioBase_C* InConstructedCaptureStudio);
    void Construct();
    void Init();
    void Destruct();
    void WidgetAnimationEvt_AnimIn_K2Node_WidgetAnimationEvent_1();
    void OnOpenMenu();
    void ExecuteUbergraph_MyCharaMenu_ArmamentChange(int32 EntryPoint);
    void OnChangeEquipCostumeProc__DelegateSignature();
    void OnSelectAchievementSaved__DelegateSignature(bool InResult);
    void OnAcquiredAchievementLoaded__DelegateSignature(bool InResult);
    void OnAchievementChangeButtonClicked__DelegateSignature(class UMyCharaMenu_AchievementList_C* InAchievementList);
    void OnSubMenuChanged__DelegateSignature(int32 Index);
    void OnAnimFinishedMyCharaOut__DelegateSignature();
    void OnChangeEquipWeaponProc__DelegateSignature(bool ProcStart);
}; // Size: 0x5E1

#endif
