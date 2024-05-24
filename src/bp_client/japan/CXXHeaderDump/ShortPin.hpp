#ifndef UE4SS_SDK_ShortPin_HPP
#define UE4SS_SDK_ShortPin_HPP

class UShortPin_C : public USBShortPinWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02D0 (size: 0x8)
    class UImage* EnemyImage;                                                         // 0x02D8 (size: 0x8)
    class UImage* Memberimage;                                                        // 0x02E0 (size: 0x8)
    class UImage* Pointimage;                                                         // 0x02E8 (size: 0x8)
    class UWidgetSwitcher* ShortPinSwitcher;                                          // 0x02F0 (size: 0x8)
    bool IsNewMark;                                                                   // 0x02F8 (size: 0x1)

    void Construct();
    void UpdatePinInfo(bool IsNew);
    void ExecuteUbergraph_ShortPin(int32 EntryPoint);
}; // Size: 0x2F9

#endif
