#ifndef UE4SS_SDK_EmotionMenu_StampMenu_HPP
#define UE4SS_SDK_EmotionMenu_StampMenu_HPP

class UEmotionMenu_StampMenu_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UGridPanel* GridPanel;                                                      // 0x0280 (size: 0x8)
    class ULimitedTimeNotice_C* LimitedTimeNotice;                                    // 0x0288 (size: 0x8)
    class UStampCategoryMenu_C* StampCategoryMenu;                                    // 0x0290 (size: 0x8)
    class UUMG_ChatWindow_C* ChatWindow;                                              // 0x0298 (size: 0x8)
    int32 SelectStampId;                                                              // 0x02A0 (size: 0x4)

    void SelectStamp(int32 InStampId, class UChatStampButtonItem_C* InStampItem);
    void Hide();
    void Show();
    void SetDragable(bool InDragable);
    void UpdateIconSelect(class UChatStampButtonItem_C* InSelectIcon);
    void SetHistoryMode(bool bSet);
    void CreateStamp(FSBStampCategoryMasterData StampData);
    void Construct();
    void OnStampClicked_Event(int32 StampId, class UChatStampButtonItem_C* InSelectItem);
    void BndEvt__StampCategoryMenu_K2Node_ComponentBoundEvent_21_OnUpdateStamp__DelegateSignature(FSBStampCategoryMasterData StampCategoryMasterData);
    void Destruct();
    void OnChangeCoolTimeEmotion(bool IsCoolTime);
    void ExecuteUbergraph_EmotionMenu_StampMenu(int32 EntryPoint);
}; // Size: 0x2A4

#endif
