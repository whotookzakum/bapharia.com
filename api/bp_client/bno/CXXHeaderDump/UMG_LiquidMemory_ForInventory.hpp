#ifndef UE4SS_SDK_UMG_LiquidMemory_ForInventory_HPP
#define UE4SS_SDK_UMG_LiquidMemory_ForInventory_HPP

class UUMG_LiquidMemory_ForInventory_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UImage* Image_HelpIcon;                                                     // 0x0288 (size: 0x8)
    class UCanvasPanel* MoveAnim;                                                     // 0x0290 (size: 0x8)
    class URetainerBox* RetainerBox_0;                                                // 0x0298 (size: 0x8)
    class USBRuntimeTextBlock* SBRuntimeTextBlock_268;                                // 0x02A0 (size: 0x8)
    class USelectBlankText_C* SelectBlankText;                                        // 0x02A8 (size: 0x8)
    class UUMG_LiquidMemoryItem_C* UMG_LiquidMemoryItem;                              // 0x02B0 (size: 0x8)
    class UUMG_LiquidMemoryItem_C* UMG_LiquidMemoryItem_292;                          // 0x02B8 (size: 0x8)
    class UUMG_LiquidMemoryItem_C* UMG_LiquidMemoryItem_489;                          // 0x02C0 (size: 0x8)
    class UUMG_LiquidMemoryItem_C* UMG_LiquidMemoryItem_861;                          // 0x02C8 (size: 0x8)
    class UUMG_LiquidMemoryItem_C* UMG_LiquidMemoryItem_1105;                         // 0x02D0 (size: 0x8)
    class UVerticalBox* VB_LiquidMemoryList;                                          // 0x02D8 (size: 0x8)
    TArray<FSBLiquidMemoryMasterData> LiquidMemoryMasterDataArray;                    // 0x02E0 (size: 0x10)
    TArray<FSBLiquidMemoryInfo> OwnLiquidMemoryInfos;                                 // 0x02F0 (size: 0x10)
    bool IsRequestingLiquidMemoryAccumulate;                                          // 0x0300 (size: 0x1)
    bool IsOpenExecuting;                                                             // 0x0301 (size: 0x1)
    char padding_0[0x6];                                                              // 0x0302 (size: 0x6)
    class USBNetworkDataCache* NetworkDataCache;                                      // 0x0308 (size: 0x8)

    void SetLiquidMemoryListItemNum(int32 InItemNum);
    void Open();
    void Destruct();
    void Construct();
    void OnAccumulateLiquidMemory_Event(const int32 InRetCode, const TArray<FSBLiquidMemoryInfo>& InUpdatedLiquidMemoryInfos);
    void ExecOpen();
    void RewardBoostUpdate();
    void RewardBoostUpdateComplete(int32 InRetCode);
    void ExecuteUbergraph_UMG_LiquidMemory_ForInventory(int32 EntryPoint);
}; // Size: 0x310

#endif
