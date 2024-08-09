#ifndef UE4SS_SDK_LibraryMenu_Monster_ElementData_HPP
#define UE4SS_SDK_LibraryMenu_Monster_ElementData_HPP

class ULibraryMenu_Monster_ElementData_C : public UUserWidget
{
    class USBRichTextBlock* AbnormalConditionText;                                    // 0x0278 (size: 0x8)
    class USBRichTextBlock* AilmentMaskText;                                          // 0x0280 (size: 0x8)
    class UWidgetSwitcher* AilmentSwitcher;                                           // 0x0288 (size: 0x8)
    class USBRichTextBlock* ElementMaskText;                                          // 0x0290 (size: 0x8)
    class UWidgetSwitcher* ElementSwitcher;                                           // 0x0298 (size: 0x8)
    class USBRichTextBlock* ElementText;                                              // 0x02A0 (size: 0x8)
    class UImage* HLine;                                                              // 0x02A8 (size: 0x8)
    class UImage* Icon_Bind;                                                          // 0x02B0 (size: 0x8)
    class UImage* Icon_Dark;                                                          // 0x02B8 (size: 0x8)
    class UImage* Icon_Darkness;                                                      // 0x02C0 (size: 0x8)
    class UImage* Icon_Drain;                                                         // 0x02C8 (size: 0x8)
    class UImage* Icon_Fear;                                                          // 0x02D0 (size: 0x8)
    class UImage* Icon_Fire;                                                          // 0x02D8 (size: 0x8)
    class UImage* Icon_FixTarget;                                                     // 0x02E0 (size: 0x8)
    class UImage* Icon_Ice;                                                           // 0x02E8 (size: 0x8)
    class UImage* Icon_Light;                                                         // 0x02F0 (size: 0x8)
    class UImage* Icon_Nappo;                                                         // 0x02F8 (size: 0x8)
    class UImage* Icon_Palsy;                                                         // 0x0300 (size: 0x8)
    class UImage* Icon_Poison;                                                        // 0x0308 (size: 0x8)
    class UImage* Icon_Rock;                                                          // 0x0310 (size: 0x8)
    class UImage* Icon_Sealed;                                                        // 0x0318 (size: 0x8)
    class UImage* Icon_Sleep;                                                         // 0x0320 (size: 0x8)
    class UImage* Icon_STDown;                                                        // 0x0328 (size: 0x8)
    class UImage* Icon_Stun;                                                          // 0x0330 (size: 0x8)
    class UImage* Icon_STZero;                                                        // 0x0338 (size: 0x8)
    class UImage* Icon_Thunder;                                                       // 0x0340 (size: 0x8)
    bool Initialize;                                                                  // 0x0348 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0349 (size: 0x7)
    TArray<class UImage*> IconList;                                                   // 0x0350 (size: 0x10)

    void IconMaskMode();
    void Set Icon Data(TArray<int32>& VisibleIndexList, int32 Offset);
    void ResetIconVisibility();
    void Init();
}; // Size: 0x360

#endif
