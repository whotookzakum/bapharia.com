#ifndef UE4SS_SDK_LibraryMenu_LoginBonusListLine_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonusListLine_HPP

class ULibraryMenu_LoginBonusListLine_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class ULibraryMenu_LoginBonusListLineItem_C* Item1;                               // 0x0280 (size: 0x8)
    class ULibraryMenu_LoginBonusListLineItem_C* Item2;                               // 0x0288 (size: 0x8)
    class ULibraryMenu_LoginBonusListLineItem_C* Item3;                               // 0x0290 (size: 0x8)
    class ULibraryMenu_LoginBonusListLineItem_C* Item4;                               // 0x0298 (size: 0x8)
    class ULibraryMenu_LoginBonusListLineItem_C* Item5;                               // 0x02A0 (size: 0x8)
    FLibraryMenu_LoginBonusListLine_CIconClick IconClick;                             // 0x02A8 (size: 0x10)
    void IconClick(int32 Index);
    int32 ClickIndexBase;                                                             // 0x02B8 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02BC (size: 0x4)
    TArray<class ULibraryMenu_LoginBonusListLineItem_C*> WidgetList;                  // 0x02C0 (size: 0x10)

    void GetWidget(int32 Index, class ULibraryMenu_LoginBonusListLineItem_C*& Widget);
    void Set Data(int32 Index, FSBLoginBonusWindowDayData Data, ESlateVisibility Visibility, bool Stump, bool Click);
    void Initialize();
    void Finish();
    void OnIconClick(int32 ID);
    void ExecuteUbergraph_LibraryMenu_LoginBonusListLine(int32 EntryPoint);
    void IconClick__DelegateSignature(int32 Index);
}; // Size: 0x2D0

#endif
