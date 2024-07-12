#ifndef UE4SS_SDK_DeadMarker_HPP
#define UE4SS_SDK_DeadMarker_HPP

class UDeadMarker_C : public USBDeadMarkerWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0288 (size: 0x8)
    class UWidgetAnimation* InAnimation;                                              // 0x0290 (size: 0x8)
    class UImage* Bg1;                                                                // 0x0298 (size: 0x8)
    class UCmnNumber1_0to99_C* CmnNumber1_0to99;                                      // 0x02A0 (size: 0x8)
    class UImage* Gauge1;                                                             // 0x02A8 (size: 0x8)
    class UImage* Image_22;                                                           // 0x02B0 (size: 0x8)

    void Dead Marker Visibility Internal(bool bVisibility);
    void Set Auto Respawn Remain Time Internal(float RemainTime);
    void Construct();
    void DeadMarkerVisibility(bool bVisibility);
    void SetAutoRespawnRemainTime(float RemainTime);
    void ExecuteUbergraph_DeadMarker(int32 EntryPoint);
}; // Size: 0x2B8

#endif
