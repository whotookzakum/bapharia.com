#ifndef UE4SS_SDK_EventIcon_HPP
#define UE4SS_SDK_EventIcon_HPP

class UEventIcon_C : public UUserWidget
{
    class UEventIconToolTip_C* EventIconToolTip;                                      // 0x0278 (size: 0x8)

    void CreateToolTipWidgetifNeeded(class UEventIconToolTip_C*& Widget);
    void SetInfo();
    class UWidget* GetToolTipWidget_0();
}; // Size: 0x280

#endif
