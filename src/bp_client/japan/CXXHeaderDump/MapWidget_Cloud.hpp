#ifndef UE4SS_SDK_MapWidget_Cloud_HPP
#define UE4SS_SDK_MapWidget_Cloud_HPP

class UMapWidget_Cloud_C : public USBMapWidgetCloud
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0290 (size: 0x8)
    class UImage* Cloud;                                                              // 0x0298 (size: 0x8)
    float YPosCenter;                                                                 // 0x02A0 (size: 0x4)

    void Construct();
    void OnCloudReachedLeftEdgeOfTheScreen();
    void Destruct();
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_MapWidget_Cloud(int32 EntryPoint);
}; // Size: 0x2A4

#endif
