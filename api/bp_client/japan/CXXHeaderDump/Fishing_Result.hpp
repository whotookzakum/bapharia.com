#ifndef UE4SS_SDK_Fishing_Result_HPP
#define UE4SS_SDK_Fishing_Result_HPP

class UFishing_Result_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* Fade_all;                                                 // 0x0280 (size: 0x8)
    class UWidgetAnimation* Slidein;                                                  // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasPanel_CantGet;                                          // 0x0290 (size: 0x8)
    class UDialogButton_C* ContinueBtn;                                               // 0x0298 (size: 0x8)
    class UEditableTextBox* EditableTextBox_01;                                       // 0x02A0 (size: 0x8)
    class UDialogButton_C* ExitBtn;                                                   // 0x02A8 (size: 0x8)
    class UImage* FishIcon;                                                           // 0x02B0 (size: 0x8)
    class UImage* Fishing_BG01;                                                       // 0x02B8 (size: 0x8)
    class UImage* Fishing_BG02;                                                       // 0x02C0 (size: 0x8)
    class UImage* Fishing_Line01;                                                     // 0x02C8 (size: 0x8)
    class UFishingPlate_C* FishingPlate;                                              // 0x02D0 (size: 0x8)
    class UImage* InfoIcon;                                                           // 0x02D8 (size: 0x8)
    class UImage* ItemIcon;                                                           // 0x02E0 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_273;                                // 0x02E8 (size: 0x8)
    class UTextBlock* TextBlock_134;                                                  // 0x02F0 (size: 0x8)
    FString Fish Id;                                                                  // 0x02F8 (size: 0x10)

    void CheckErrorCode(int32 RetCode);
    void SetThumbnail(FString FishId, bool IsBig, int32 ItemId);
    void Reuslt Visibility(bool On);
    void ShowCan'tGetItem(bool TrueIsVisible);
    void ShowCan'tGetFish(bool TrueIsVisible);
    void CheckBackPack(bool& Ret);
    void CheckItemStorage(bool& Ret);
    void SetFishPlate(bool UploadSuccess, int32 ReturnCode, FString FishId, FString ItemName, float FishLength, int32 ItemAmount, bool IsNewFish, bool IsNewRecord, bool IsBig, int32 ItemId);
    void OnLoaded_B741E7294084427C7364DF8A5FD7B5FB(class UObject* Loaded);
    void Construct();
    void AnimStart();
    void BndEvt__Fishing_Result_ExitBtn_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(class UUserWidget* InButtonWidget);
    void BndEvt__Fishing_Result_ContinueBtn_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(class UUserWidget* InButtonWidget);
    void Destruct();
    void SetThumnailIcon(int32 ItemId);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_Fishing_Result(int32 EntryPoint);
}; // Size: 0x308

#endif
