#ifndef UE4SS_SDK_RespawnHUD_HPP
#define UE4SS_SDK_RespawnHUD_HPP

class URespawnHUD_C : public USBRespawnHUD
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0298 (size: 0x8)
    class UImage* Bg1;                                                                // 0x02A0 (size: 0x8)
    class UCmnNumber1_0to99_C* CmnNumber1_0to99;                                      // 0x02A8 (size: 0x8)
    class UCmnNumber1_0to99_C* CmnNumber1_0to99_1;                                    // 0x02B0 (size: 0x8)
    class UImage* Gauge;                                                              // 0x02B8 (size: 0x8)
    class UOverlay* PressKeyOverlay;                                                  // 0x02C0 (size: 0x8)
    class UCanvasPanel* RootCanvasPanel;                                              // 0x02C8 (size: 0x8)
    float MaxTime;                                                                    // 0x02D0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02D4 (size: 0x4)
    FSBTextTableAssetData PressText;                                                  // 0x02D8 (size: 0x30)
    bool IsBattleAreaMessageBP;                                                       // 0x0308 (size: 0x1)
    char padding_1[0x7];                                                              // 0x0309 (size: 0x7)
    class UMaterialInstanceDynamic* Gauge1Mat;                                        // 0x0310 (size: 0x8)

    void UpdateRespawnGauge();
    void GetResurrectionRemainTimeRate(float& Rate);
    void BattleAreaDisableMessage();
    void ShowRespawn(float InTime);
    void ShowCountDownDialog_Event();
    void EndCounddownDynamicDlegate_Event(ECountdownResult Result);
    void ShowBattleAreaDialog_Event();
    void Construct();
    void OnUpdateGauge();
    void ExecuteUbergraph_RespawnHUD(int32 EntryPoint);
}; // Size: 0x318

#endif
