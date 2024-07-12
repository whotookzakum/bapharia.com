#ifndef UE4SS_SDK_LibraryMenu_EnemyCaptureStudio_HPP
#define UE4SS_SDK_LibraryMenu_EnemyCaptureStudio_HPP

class ULibraryMenu_EnemyCaptureStudio_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Captured_Enemy;                                                     // 0x0280 (size: 0x8)
    class ALibraryMenu_CaptureStudio_C* CaptureStudio;                                // 0x0288 (size: 0x8)
    FLibraryMenu_EnemyCaptureStudio_COnCaptureStudioConstructed OnCaptureStudioConstructed; // 0x0290 (size: 0x10)
    void OnCaptureStudioConstructed(class ABP_CaptureStudioBase_C* InConstructedCaptureStudio);
    bool ActiveRotate;                                                                // 0x02A0 (size: 0x1)
    bool ActiveMove;                                                                  // 0x02A1 (size: 0x1)
    bool ActiveZoom;                                                                  // 0x02A2 (size: 0x1)
    char padding_0[0x5];                                                              // 0x02A3 (size: 0x5)
    FLibraryMenu_EnemyCaptureStudio_COnLoadAssetComplete OnLoadAssetComplete;         // 0x02A8 (size: 0x10)
    void OnLoadAssetComplete();
    FString TargetEnemy;                                                              // 0x02B8 (size: 0x10)
    FLibraryMenu_EnemyCaptureStudio_COnModelLoadedAllMip OnModelLoadedAllMip;         // 0x02C8 (size: 0x10)
    void OnModelLoadedAllMip();

    void SetEnemyModelCameraState(float Scale, float Rotate, float CameraHeight, float SideOffset);
    void ModelDelete();
    void GetCaptureModel(class ASBEnemyCharacter*& EnemyCharacter);
    void SetStudioHidden(bool InIsHidden);
    void Setup and Load Asset(const FSetup and Load AssetLoadCompleteEvent& LoadCompleteEvent, FSBLibraryEnemyAppearanceData EnemyData);
    void SetStudioVisibility(bool InIsVisible);
    void SetCaptureZoomActive(bool ActiveZoom);
    void SetCaptureRotateActive(bool ActiveRotate);
    void SetCaptureMoveActive(bool ActiveMove);
    void Construct();
    void Construct_Studio();
    void ApplyExternalDirectionalLightRotation();
    void LoadAsset(FString EnemyCharacterId, ESBLibraryEnemyViewSetting ViewSetting, ESBLibraryEnemyWeaponSetting WeaponSetting);
    void OnModelLoaded();
    void Destruct();
    void DoDisableCaptureStudio();
    void DoEnableCaptureStudio();
    void SetEnableCaptureStudio(bool enable);
    void SetExternalDirectionalLightRotation(FRotator Rotation);
    void ModelStateUpdate();
    void OnModelLoadedAllMipDelegate();
    void ExecuteUbergraph_LibraryMenu_EnemyCaptureStudio(int32 EntryPoint);
    void OnModelLoadedAllMip__DelegateSignature();
    void OnLoadAssetComplete__DelegateSignature();
    void OnCaptureStudioConstructed__DelegateSignature(class ABP_CaptureStudioBase_C* InConstructedCaptureStudio);
}; // Size: 0x2D8

#endif
