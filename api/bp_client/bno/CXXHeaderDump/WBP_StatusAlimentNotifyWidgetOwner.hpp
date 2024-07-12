#ifndef UE4SS_SDK_WBP_StatusAlimentNotifyWidgetOwner_HPP
#define UE4SS_SDK_WBP_StatusAlimentNotifyWidgetOwner_HPP

class UWBP_StatusAlimentNotifyWidgetOwner_C : public USBStatusAlimentNotifyWidgetOwner
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0290 (size: 0x8)
    TArray<class USBStatusAlimentNotifyWidget*> SwapWidget;                           // 0x0298 (size: 0x10)
    bool bCachedVisibility;                                                           // 0x02A8 (size: 0x1)

    void SetSystemVisibility(bool bVisibility);
    void AddProcessing(FSBStatusAilmentIconConfig InStatusAilmentIconType, class AActor* InOwnerActor);
    void Construct();
    void OnUIVisibleSettingChange(ESBUIType InUIType, bool bInVisibility, bool bInInstantly);
    void Destruct();
    void ExecuteUbergraph_WBP_StatusAlimentNotifyWidgetOwner(int32 EntryPoint);
}; // Size: 0x2A9

#endif
