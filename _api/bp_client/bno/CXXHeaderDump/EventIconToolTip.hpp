#ifndef UE4SS_SDK_EventIconToolTip_HPP
#define UE4SS_SDK_EventIconToolTip_HPP

class UEventIconToolTip_C : public UUserWidget
{
    class UImage* BG;                                                                 // 0x0278 (size: 0x8)
    class UTextBlock* LabelName;                                                      // 0x0280 (size: 0x8)
    class UTextBlock* LabelType;                                                      // 0x0288 (size: 0x8)

    void SetInfo(int32 InItemIndex, bool bUnidentified);
}; // Size: 0x290

#endif
