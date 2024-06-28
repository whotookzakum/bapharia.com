#ifndef UE4SS_SDK_AestheShop_TicketListItem_HPP
#define UE4SS_SDK_AestheShop_TicketListItem_HPP

class UAestheShop_TicketListItem_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* BG;                                                                 // 0x0280 (size: 0x8)
    class USBButton_C* Btn_ListItem;                                                  // 0x0288 (size: 0x8)
    class UCanvasPanel* CanvasTicket;                                                 // 0x0290 (size: 0x8)
    class UImage* CourseIcon;                                                         // 0x0298 (size: 0x8)
    class UImage* TicketIcon;                                                         // 0x02A0 (size: 0x8)
    class UTextBlock* TxtCourseName;                                                  // 0x02A8 (size: 0x8)
    class UTextBlock* TxtHoldingTicketAmount;                                         // 0x02B0 (size: 0x8)
    class UTextBlock* TxtTicketName;                                                  // 0x02B8 (size: 0x8)
    int32 CourseId;                                                                   // 0x02C0 (size: 0x4)
    int32 TicketTokenId;                                                              // 0x02C4 (size: 0x4)
    int32 HoldTicketTokenAmount;                                                      // 0x02C8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02CC (size: 0x4)
    FAestheShop_TicketListItem_COnSelected OnSelected;                                // 0x02D0 (size: 0x10)
    void OnSelected(int32 InCourseId, int32 InTicketTokenId, int32 InHoldTicketTokenAmount);

    void GetCourseId(int32& OutCourseId);
    void GetHoldTicketTokenAmount(int32& OutAmount);
    void GetTicketTokenId(int32& OutTIcketTokenId);
    void SetListItemSelected(bool IsSelected);
    void SetTicketAmount(int32 InAmount);
    void SetTicketName(FText InText);
    void SetCourseName(FText InText);
    void SetCourseIcon(TSoftObjectPtr<UTexture2D> InIconTexture);
    void SetupCourseListItem(int32 InCourseId, int32 InHoldTicketTokenAmount);
    void Construct();
    void BndEvt__SBButton_C_0_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_AestheShop_TicketListItem(int32 EntryPoint);
    void OnSelected__DelegateSignature(int32 InCourseId, int32 InTicketTokenId, int32 InHoldTicketTokenAmount);
}; // Size: 0x2E0

#endif
