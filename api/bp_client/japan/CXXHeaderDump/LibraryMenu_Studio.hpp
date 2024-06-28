#ifndef UE4SS_SDK_LibraryMenu_Studio_HPP
#define UE4SS_SDK_LibraryMenu_Studio_HPP

class ALibraryMenu_Studio_C : public ASBCaptureStudioBaseActor
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0520 (size: 0x8)
    class USceneComponent* Pivot;                                                     // 0x0528 (size: 0x8)
    FString ModelId;                                                                  // 0x0530 (size: 0x10)
    class ASBEnemyCharacter* ModelActor;                                              // 0x0540 (size: 0x8)
    FLibraryMenu_Studio_COnSetModelData OnSetModelData;                               // 0x0548 (size: 0x10)
    void OnSetModelData(bool Result);
    FRotator BaseRotation;                                                            // 0x0558 (size: 0xC)
    char padding_0[0x4];                                                              // 0x0564 (size: 0x4)
    class ASBLibraryEnemyLoadCheck* CheckActor;                                       // 0x0568 (size: 0x8)
    FLibraryMenu_Studio_COnWeaponSetup OnWeaponSetup;                                 // 0x0570 (size: 0x10)
    void OnWeaponSetup(class ASBEnemyCharacter* EnemyActor);
    bool IsRequest;                                                                   // 0x0580 (size: 0x1)
    bool IsLoading;                                                                   // 0x0581 (size: 0x1)
    bool DelayWait;                                                                   // 0x0582 (size: 0x1)
    bool bIsForceMipLoaded;                                                           // 0x0583 (size: 0x1)
    char padding_1[0x4];                                                              // 0x0584 (size: 0x4)
    FLibraryMenu_Studio_COnLoadedModelAllMip OnLoadedModelAllMip;                     // 0x0588 (size: 0x10)
    void OnLoadedModelAllMip();

    void ModelDelete();
    void WeaponSetup(bool& IsComplete);
    void GetModelActor(class AActor*& Actor);
    void ModelSetup();
    void LoadEnemyAsset();
    void ReceiveTick(float DeltaSeconds);
    void OnAssetLoaded(const bool bInResult);
    void SetEnemyModelId(FString ID, ESBLibraryEnemyViewSetting ViewSetting, ESBLibraryEnemyWeaponSetting WeaponSetting);
    void OnLoadEvent();
    void ReceiveDestroyed();
    void OnWeaponEquip(class ASBEnemyCharacter* EnemyCharacter);
    void ExecuteUbergraph_LibraryMenu_Studio(int32 EntryPoint);
    void OnLoadedModelAllMip__DelegateSignature();
    void OnWeaponSetup__DelegateSignature(class ASBEnemyCharacter* EnemyActor);
    void OnSetModelData__DelegateSignature(bool Result);
}; // Size: 0x598

#endif
