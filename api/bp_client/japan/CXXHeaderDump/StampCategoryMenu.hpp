#ifndef UE4SS_SDK_StampCategoryMenu_HPP
#define UE4SS_SDK_StampCategoryMenu_HPP

class UStampCategoryMenu_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton1;                               // 0x02B8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton10;                              // 0x02C0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton2;                               // 0x02C8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton3;                               // 0x02D0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton4;                               // 0x02D8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton5;                               // 0x02E0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton6;                               // 0x02E8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton7;                               // 0x02F0 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton8;                               // 0x02F8 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryButton9;                               // 0x0300 (size: 0x8)
    class UStampCategoryButton_C* StampCategoryHistoryButton;                         // 0x0308 (size: 0x8)
    class UHorizontalBox* StampCategoryHorizontalBox;                                 // 0x0310 (size: 0x8)
    class USBButton_C* StampCategorySelectLeftButton;                                 // 0x0318 (size: 0x8)
    class USBButton_C* StampCategorySelectRightButton;                                // 0x0320 (size: 0x8)
    int32 CursorIndex;                                                                // 0x0328 (size: 0x4)
    char padding_0[0x4];                                                              // 0x032C (size: 0x4)
    FStampCategoryMenu_COnUpdateStamp OnUpdateStamp;                                  // 0x0330 (size: 0x10)
    void OnUpdateStamp(FSBStampCategoryMasterData StampCategoryMasterData);
    int32 SelectButtonIndex;                                                          // 0x0340 (size: 0x4)
    bool HistoryMode;                                                                 // 0x0344 (size: 0x1)
    char padding_1[0x3];                                                              // 0x0345 (size: 0x3)
    TArray<int32> SelectStampIds;                                                     // 0x0348 (size: 0x10)
    TArray<FSBStampCategoryMasterData> StampCategoryMasterData;                       // 0x0358 (size: 0x10)
    TArray<int32> HistoryStampIds;                                                    // 0x0368 (size: 0x10)

    bool IsValidSelectStampCategoryMasterData();
    void GetSelectStampCategoryMasterData(FSBStampCategoryMasterData& Output);
    void GetSelectButtonIndex(int32& SelectButtonIndex);
    void CheckLimitedTimeStamp(int32 StampId, bool& Result);
    void SaveStampHisoryIdsData();
    void LoadStampHistoryIdsData();
    void FindStampCategoryMasterData(int32 InCategoryId, bool& IsFind, FSBStampCategoryMasterData& retData);
    void UpdateMyStampDataList(int32 StampId);
    void Set History Mode(bool bSet);
    void UpdateEnableButton();
    void Update Button();
    void GetMyStampDataList();
    void Construct();
    void BndEvt__StampCategorySelectLeftButton_K2Node_ComponentBoundEvent_40_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__StampCategorySelectRightButton_K2Node_ComponentBoundEvent_70_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__StampCategoryButton1_K2Node_ComponentBoundEvent_711_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton2_K2Node_ComponentBoundEvent_715_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton3_K2Node_ComponentBoundEvent_720_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton4_K2Node_ComponentBoundEvent_726_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton5_K2Node_ComponentBoundEvent_218_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton6_K2Node_ComponentBoundEvent_226_OnClicked__DelegateSignature(int32 Index);
    void Show();
    void BndEvt__StampCategoryHistoryButton_K2Node_ComponentBoundEvent_181_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton7_K2Node_ComponentBoundEvent_0_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton8_K2Node_ComponentBoundEvent_1_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton9_K2Node_ComponentBoundEvent_2_OnClicked__DelegateSignature(int32 Index);
    void BndEvt__StampCategoryButton10_K2Node_ComponentBoundEvent_3_OnClicked__DelegateSignature(int32 Index);
    void ExecuteUbergraph_StampCategoryMenu(int32 EntryPoint);
    void OnUpdateStamp__DelegateSignature(FSBStampCategoryMasterData StampCategoryMasterData);
}; // Size: 0x378

#endif
