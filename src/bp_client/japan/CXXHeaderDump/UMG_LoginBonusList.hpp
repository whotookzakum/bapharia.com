#ifndef UE4SS_SDK_UMG_LoginBonusList_HPP
#define UE4SS_SDK_UMG_LoginBonusList_HPP

class UUMG_LoginBonusList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line1;                                           // 0x0280 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line2;                                           // 0x0288 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line3;                                           // 0x0290 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line4;                                           // 0x0298 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line5;                                           // 0x02A0 (size: 0x8)
    class UUMG_LoginBonusListLine_C* Line6;                                           // 0x02A8 (size: 0x8)
    class UImage* ListBG;                                                             // 0x02B0 (size: 0x8)
    class USBListBox* ListBox;                                                        // 0x02B8 (size: 0x8)
    bool IsInitialize;                                                                // 0x02C0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02C1 (size: 0x7)
    TArray<class UUMG_LoginBonusListLine_C*> LineWidget;                              // 0x02C8 (size: 0x10)
    FUMG_LoginBonusList_CStumpAnimationFinish StumpAnimationFinish;                   // 0x02D8 (size: 0x10)
    void StumpAnimationFinish();
    FUMG_LoginBonusList_COnListInitComplete OnListInitComplete;                       // 0x02E8 (size: 0x10)
    void OnListInitComplete();
    FUMG_LoginBonusList_CListItemClick ListItemClick;                                 // 0x02F8 (size: 0x10)
    void ListItemClick(int32 Index);
    class UUMG_LoginBonusListLineItem_C* LastSelectedItem;                            // 0x0308 (size: 0x8)

    void OnCloseAnimationFinished();
    void SetupMouseClickEvent();
    void PlayStampAnimation(int32 Index, bool& Play);
    void SetData(FSBLoginBonusWindowData DataList, bool MouseClick);
    void Construct();
    void Initialize();
    void OnStumpAnimationFinish();
    void Finish();
    void OnImageLoadComplete(bool enable);
    void OnListItemClick(int32 Index, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    void ExecuteUbergraph_UMG_LoginBonusList(int32 EntryPoint);
    void ListItemClick__DelegateSignature(int32 Index);
    void OnListInitComplete__DelegateSignature();
    void StumpAnimationFinish__DelegateSignature();
}; // Size: 0x310

#endif
