#ifndef UE4SS_SDK_MouseCursorModeIcon_HPP
#define UE4SS_SDK_MouseCursorModeIcon_HPP

class UMouseCursorModeIcon_C : public UUserWidget
{
    class UImage* Image;                                                              // 0x0278 (size: 0x8)
    class UImage* Image_1;                                                            // 0x0280 (size: 0x8)
    class UImage* Image_45;                                                           // 0x0288 (size: 0x8)
    class UImage* Image_ToolTip;                                                      // 0x0290 (size: 0x8)
    class UWidgetSwitcher* Switch;                                                    // 0x0298 (size: 0x8)

    void SetSwitch(int32 ID);
}; // Size: 0x2A0

#endif
