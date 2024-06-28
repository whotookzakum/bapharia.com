#ifndef UE4SS_SDK_UMG_AestheShopStepInfo_StepIcon_HPP
#define UE4SS_SDK_UMG_AestheShopStepInfo_StepIcon_HPP

class UUMG_AestheShopStepInfo_StepIcon_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* Anm_StepInfo_On;                                          // 0x0280 (size: 0x8)
    class UImage* IconSelected;                                                       // 0x0288 (size: 0x8)
    class UImage* IconSelected_Eff;                                                   // 0x0290 (size: 0x8)
    class UImage* IconSelected_Line;                                                  // 0x0298 (size: 0x8)
    class UImage* IconUnselected;                                                     // 0x02A0 (size: 0x8)
    class UCanvasPanel* SelectedGrp;                                                  // 0x02A8 (size: 0x8)
    class USBRuntimeTextBlock* TxtTitle;                                              // 0x02B0 (size: 0x8)
    int32 TitleTextId;                                                                // 0x02B8 (size: 0x4)

    void SetTitleTextId(int32 InTextId);
    void SetIconSelected(bool InIsSelected);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_UMG_AestheShopStepInfo_StepIcon(int32 EntryPoint);
}; // Size: 0x2BC

#endif
