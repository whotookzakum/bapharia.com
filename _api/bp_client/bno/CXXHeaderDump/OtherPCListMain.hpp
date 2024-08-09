#ifndef UE4SS_SDK_OtherPCListMain_HPP
#define UE4SS_SDK_OtherPCListMain_HPP

class UOtherPCListMain_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UCanvasPanel* CanvasPanel_List;                                             // 0x02B8 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x02C0 (size: 0x8)
    class UVerticalBox* PlayerList;                                                   // 0x02C8 (size: 0x8)
    class UButton* UpdateButton;                                                      // 0x02D0 (size: 0x8)
    ESBChatLogType SeachType;                                                         // 0x02D8 (size: 0x1)
    char padding_0[0x3];                                                              // 0x02D9 (size: 0x3)
    int32 SelectListId;                                                               // 0x02DC (size: 0x4)
    bool IsUpdateWait;                                                                // 0x02E0 (size: 0x1)
    char padding_1[0x3];                                                              // 0x02E1 (size: 0x3)
    int32 BLSeverCheckCount;                                                          // 0x02E4 (size: 0x4)
    FOtherPCListMain_COnListSelected OnListSelected;                                  // 0x02E8 (size: 0x10)
    void OnListSelected(class ASBPlayerState* PlayerState, FName CharacterId);
    FOtherPCListMain_COnClickUpdateButton OnClickUpdateButton;                        // 0x02F8 (size: 0x10)
    void OnClickUpdateButton();
    FOtherPCListMain_COnListUpdated OnListUpdated;                                    // 0x0308 (size: 0x10)
    void OnListUpdated();
    bool bIncludeSelf;                                                                // 0x0318 (size: 0x1)
    bool bEnableLostPlayerData;                                                       // 0x0319 (size: 0x1)
    bool IsPSOnlyDiff;                                                                // 0x031A (size: 0x1)

    void GetOwningSbPlayerState(class ASBPlayerState*& Result);
    void SelectPlayer(class APlayerState* InPlayerState, bool bOnlyListUpdate);
    void Search Player List(class APlayerState* InPlayerState, int32& MatchistID);
    void ResetSelectList();
    void UpdatePlayerList();
    void Construct();
    void Destruct();
    void Open();
    void OnEventListSelected(int32 listIndex);
    void BndEvt__UpdateButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void OnIsBlackListed_event_0(const bool bIsBlackListed);
    void StartUpdateAnim(bool IsLoop);
    void EndUpdateAnim();
    void MoveCursorPositionToList(class UWidget* Widget);
    void Update();
    void OnEventListSelectedMain(int32 listIndex, bool bOnlyListUpdate);
    void ExecuteUbergraph_OtherPCListMain(int32 EntryPoint);
    void OnListUpdated__DelegateSignature();
    void OnClickUpdateButton__DelegateSignature();
    void OnListSelected__DelegateSignature(class ASBPlayerState* PlayerState, FName CharacterId);
}; // Size: 0x31B

#endif
