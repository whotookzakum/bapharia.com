#ifndef UE4SS_SDK_AestheShop_TicketDescWindow_HPP
#define UE4SS_SDK_AestheShop_TicketDescWindow_HPP

class UAestheShop_TicketDescWindow_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_1;                                                // 0x0280 (size: 0x8)
    class UImage* CourseIconL;                                                        // 0x0288 (size: 0x8)
    class UGridPanel* GridPanelForCategoryIcons;                                      // 0x0290 (size: 0x8)
    class UImage* LineV02;                                                            // 0x0298 (size: 0x8)
    class UImage* LineV03;                                                            // 0x02A0 (size: 0x8)
    class UImage* LineV04;                                                            // 0x02A8 (size: 0x8)
    class UImage* TicketTokenIcon;                                                    // 0x02B0 (size: 0x8)
    class UTextBlock* TxtCourseDesc;                                                  // 0x02B8 (size: 0x8)
    class UTextBlock* TxtCourseName;                                                  // 0x02C0 (size: 0x8)
    class UTextBlock* TxtHoldTicketNum;                                               // 0x02C8 (size: 0x8)
    class UTextBlock* TxtTicketName;                                                  // 0x02D0 (size: 0x8)
    class UTextBlock* TxtUseTicketNum;                                                // 0x02D8 (size: 0x8)
    TArray<bool> CategoryIconAvailableList;                                           // 0x02E0 (size: 0x10)
    int32 CategoryCnt;                                                                // 0x02F0 (size: 0x4)
    int32 CategoryIconListColumnMax;                                                  // 0x02F4 (size: 0x4)
    int32 CourseId;                                                                   // 0x02F8 (size: 0x4)

    void SetTicketTokenIconTexture(int32 InTokenId);
    void UpdateAvailableCategoryIcons(FSBAestheShopCourseMasterData InAestheCourseMaster);
    void SetHoldTicketNum(int32 InHoldTicketNum);
    void SetUseTicketNum(int32 InUseTicketNum);
    void SetTicketName(FText InTicketName);
    void SetCourseDesc(FText InCourseDesc);
    void SetCourseName(FText InNameText);
    void SetCourseIconTexture(TSoftObjectPtr<UTexture2D> InIconTexture);
    void Setup(int32 InCourseId, TArray<FSBCharacterToken>& InHoldTicketTokens);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_AestheShop_TicketDescWindow(int32 EntryPoint);
}; // Size: 0x2FC

#endif
