#ifndef UE4SS_SDK_UMG_SeasonPassMenu_HPP
#define UE4SS_SDK_UMG_SeasonPassMenu_HPP

class UUMG_SeasonPassMenu_C : public USBSeasonPassMenu
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02A8 (size: 0x8)
    class UWidgetAnimation* AnimPageIn;                                               // 0x02B0 (size: 0x8)
    class UWidgetAnimation* AnimOut2;                                                 // 0x02B8 (size: 0x8)
    class UWidgetAnimation* AnimOut;                                                  // 0x02C0 (size: 0x8)
    class UCommandMenu_Line_C* CommandMenu_Line;                                      // 0x02C8 (size: 0x8)
    class UHorizontalBox* DebugButtons;                                               // 0x02D0 (size: 0x8)
    class UEditableTextBox* EditableTextBox_168;                                      // 0x02D8 (size: 0x8)
    class UCanvasPanel* MenuCanvas;                                                   // 0x02E0 (size: 0x8)
    class USBButton_C* SBButton_BuyRankup;                                            // 0x02E8 (size: 0x8)
    class USBButton_C* SBButton_BuySeasonPass;                                        // 0x02F0 (size: 0x8)
    class USBButton_C* SBButton_GetInfo;                                              // 0x02F8 (size: 0x8)
    class USBButton_C* SBButton_GetRaward;                                            // 0x0300 (size: 0x8)
    class USBButton_C* SBButton_Rankup;                                               // 0x0308 (size: 0x8)
    class USBButton_C* SBButton_Rankup_1;                                             // 0x0310 (size: 0x8)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0318 (size: 0x8)
    class UUMG_SeasonPassMenuInvalid_C* UMG_SeasonPassMenuInvalid;                    // 0x0320 (size: 0x8)
    class UUMG_SeasonPassMenuMain_C* UMG_SeasonPassMenuMain;                          // 0x0328 (size: 0x8)
    class UWidgetSwitcher* WidgetSwitcher_3;                                          // 0x0330 (size: 0x8)
    bool bCheckAutoRankup;                                                            // 0x0338 (size: 0x1)
    bool bFinishAnimPagein;                                                           // 0x0339 (size: 0x1)
    char padding_0[0x2];                                                              // 0x033A (size: 0x2)
    int32 OldRank;                                                                    // 0x033C (size: 0x4)
    int32 DebugValue;                                                                 // 0x0340 (size: 0x4)
    char padding_1[0x4];                                                              // 0x0344 (size: 0x4)
    class USBSeasonPassMenuRewardData* RewardData;                                    // 0x0348 (size: 0x8)
    class UUMG_SeasonPassItemReceiveMenu_C* ItemReceiveMenu;                          // 0x0350 (size: 0x8)
    FText DebugText;                                                                  // 0x0358 (size: 0x18)

    ESubMenuTermRequestReply TermRequest(const ESubMenuTermReason InReason);
    void OnParentTerm();
    void OnRMShopClosed();
    void OnSameMenuBookmarkAccessNew(FString InBookMarkType);
    void OnSubMenuUpdate(int32 MainPage, int32 SubPage);
    void ResetMouseCursorTypeToDefaultRequest();
    void RequestRankupApi(int32 UpRank);
    void OnCompleteRankup(int32 InRetCode);
    void RequestReceiveApi(class USBSeasonPassMenuRewardItemData* Data);
    void OnComplateReceive(int32 InRetCode);
    void RequestAutoRankup();
    void RequestGetInfo();
    void ConfirmRequestRankupApi();
    void OnCompletedGetInfo(int32 InRetCode);
    void RequestGetSeasonPassRewardAll();
    void OnGetSeasonPassRewardAllCompleted(int32 InRetCode);
    void OnClickedRankupDialogOk(int32 UpRank);
    void BndEvt__WBP_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_0_OnClickUpgrade__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_2_OnClickQuest__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_3_OnClickPointShop__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_4_OnClickBuyRankUp__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_5_OnClickRankUp__DelegateSignature();
    void BndEvt__UMG_SeasonPassMenu_Main_K2Node_ComponentBoundEvent_1_OnClickRewardItemIcon__DelegateSignature(class USBSeasonPassMenuRewardItemData* RewardItemData);
    void OnCloseReceiveMenu(class UUMG_SeasonPassItemReceiveMenu_C* Sender);
    void OnClieckItemReceive(class USBSeasonPassMenuRewardItemData* Data);
    void OnSuccessedReceiveApi();
    void BndEvt__UMG_SeasonPassMenu_UMG_SeasonPassMenuMain_K2Node_ComponentBoundEvent_7_OnClickSeasonPassRewardAll__DelegateSignature();
    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void FinishAnimPagein();
    void CheckAutoRankup();
    void EnableInput(bool bEnable);
    void BndEvt__SBButton_BuySeasonPass_K2Node_ComponentBoundEvent_6_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_Rankup_K2Node_ComponentBoundEvent_7_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_BuyRankup_K2Node_ComponentBoundEvent_8_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_GetRaward_K2Node_ComponentBoundEvent_9_OnButtonClickedEvent__DelegateSignature();
    void BndEvt__SBButton_GetInfo_K2Node_ComponentBoundEvent_10_OnButtonClickedEvent__DelegateSignature();
    void OnCompletedAmoutOfMoney(int32 InRetCode, int32 InFreeMoney, int32 InPaidMoney);
    void BndEvt__EditableTextBox_168_K2Node_ComponentBoundEvent_0_OnEditableTextBoxCommittedEvent__DelegateSignature(const FText& Text, TEnumAsByte<ETextCommit::Type> CommitMethod);
    void BndEvt__SBButton_Rankup_1_K2Node_ComponentBoundEvent_1_OnButtonClickedEvent__DelegateSignature();
    void Init();
    void Destruct();
    void OnUpdateSeasonPassInfo(class UObject* Sender, class UObject* Param);
    void OnUpdateReceivedRewardInfo(class UObject* Sender, class UObject* Param);
    void OnCompleted(int32 InRetCode);
    void ExecuteUbergraph_UMG_SeasonPassMenu(int32 EntryPoint);
}; // Size: 0x370

#endif
