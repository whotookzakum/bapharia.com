#ifndef UE4SS_SDK_BufIcon_HPP
#define UE4SS_SDK_BufIcon_HPP

class UBufIcon_C : public USBBuffIcon
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UImage* Icon;                                                               // 0x02B0 (size: 0x8)

    void OnSetup();
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_BufIcon(int32 EntryPoint);
}; // Size: 0x2B8

#endif
