#ifndef UE4SS_SDK_CommonAimModeUI_HPP
#define UE4SS_SDK_CommonAimModeUI_HPP

class UCommonAimModeUI_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* Reticle_NeutralGrp;                                           // 0x0280 (size: 0x8)
    class UCanvasPanel* Reticle_RayHitGrp;                                            // 0x0288 (size: 0x8)
    bool ShooterType;                                                                 // 0x0290 (size: 0x1)
    ESBClassType ClassType;                                                           // 0x0291 (size: 0x1)

    void SetClassType(ESBClassType ClassType);
    void Set Ray Hit(bool bReyHit);
    void Tick(FGeometry MyGeometry, float InDeltaTime);
    void ExecuteUbergraph_CommonAimModeUI(int32 EntryPoint);
}; // Size: 0x292

#endif
