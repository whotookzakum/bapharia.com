#ifndef UE4SS_SDK_TargetCursor_HPP
#define UE4SS_SDK_TargetCursor_HPP

class UTargetCursor_C : public USBTargetCursorWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A0 (size: 0x8)
    class UImage* ActiveCursor;                                                       // 0x02A8 (size: 0x8)
    class ASBPlayerCharacter* PlayerCharacter;                                        // 0x02B0 (size: 0x8)
    class USBTargetableComponent* TargetableComponentBP;                              // 0x02B8 (size: 0x8)
    TArray<FLinearColor> MarkerColorTbl;                                              // 0x02C0 (size: 0x10)

    void isTargetInvincible(bool& OutIsInvincible);
    void GetNearRange(float& OutIsRange);
    void ColorChange();
    void isTargetNear(bool& OutIsNear);
    void UpdatePosition();
    void VisibleSettingChangeDelegate(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void Construct();
    void Destruct();
    void OnPlayLockOnSe();
    void ExecuteUbergraph_TargetCursor(int32 EntryPoint);
}; // Size: 0x2D0

#endif
