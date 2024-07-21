#ifndef UE4SS_SDK_UMG_LoginBonusListLine_HPP
#define UE4SS_SDK_UMG_LoginBonusListLine_HPP

class UUMG_LoginBonusListLine_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UUMG_LoginBonusListLineItem_C* Item1;                                       // 0x0280 (size: 0x8)
    class UUMG_LoginBonusListLineItem_C* Item2;                                       // 0x0288 (size: 0x8)
    class UUMG_LoginBonusListLineItem_C* Item3;                                       // 0x0290 (size: 0x8)
    class UUMG_LoginBonusListLineItem_C* Item4;                                       // 0x0298 (size: 0x8)
    class UUMG_LoginBonusListLineItem_C* Item5;                                       // 0x02A0 (size: 0x8)
    TArray<class UUMG_LoginBonusListLineItem_C*> WidgetList;                          // 0x02A8 (size: 0x10)
    FUMG_LoginBonusListLine_CStumpAnimationFinish StumpAnimationFinish;               // 0x02B8 (size: 0x10)
    void StumpAnimationFinish();
    FUMG_LoginBonusListLine_CIconClick IconClick;                                     // 0x02C8 (size: 0x10)
    void IconClick(int32 Index, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    int32 ClickIndexBase;                                                             // 0x02D8 (size: 0x4)

    void OnCloseAnimationFinished();
    void ClearItemSelected();
    void PlayStumpAnimation(int32 Index, bool& IsPlay);
    void GetWidget(int32 Index, class UUMG_LoginBonusListLineItem_C*& Widget);
    void Set Data(int32 Index, FSBLoginBonusWindowDayData Data, ESlateVisibility Visibility, bool Stump, bool Click);
    void OnStumpAnimationFinish();
    void Initialize();
    void Finish();
    void OnIconClick(int32 ID, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    void ExecuteUbergraph_UMG_LoginBonusListLine(int32 EntryPoint);
    void IconClick__DelegateSignature(int32 Index, class UUMG_LoginBonusListLineItem_C* SelectedItem);
    void StumpAnimationFinish__DelegateSignature();
}; // Size: 0x2DC

#endif
