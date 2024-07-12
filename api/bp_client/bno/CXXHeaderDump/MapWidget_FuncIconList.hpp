#ifndef UE4SS_SDK_MapWidget_FuncIconList_HPP
#define UE4SS_SDK_MapWidget_FuncIconList_HPP

class UMapWidget_FuncIconList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HorizontalBox_0;                                            // 0x0280 (size: 0x8)
    int32 FuncIconCnt;                                                                // 0x0288 (size: 0x4)
    char padding_0[0x4];                                                              // 0x028C (size: 0x4)
    FMapWidget_FuncIconList_COnFuncIconSelected OnFuncIconSelected;                   // 0x0290 (size: 0x10)
    void OnFuncIconSelected(EMapFuncIconType InSelectedFuncIconType);
    TArray<class UWidget*> HorizontalBoxChildsForDelete;                              // 0x02A0 (size: 0x10)

    void SetFuncIconVisibility(EMapFuncIconType InFuncIconType, bool IsVisible);
    void SetFuncIconEnable(EMapFuncIconType InFuncIconType, bool IsEnable);
    void Construct();
    void FuncIconPressed(class UMapWidget_FuncIconItem_C* InPressedIcon);
    void OnIconPressedEvent(class UMapWidget_FuncIconItem_C* InPressedIcon);
    void Destruct();
    void ExecuteUbergraph_MapWidget_FuncIconList(int32 EntryPoint);
    void OnFuncIconSelected__DelegateSignature(EMapFuncIconType InSelectedFuncIconType);
}; // Size: 0x2B0

#endif
