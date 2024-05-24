#ifndef UE4SS_SDK_MapWidget_PinIconList_HPP
#define UE4SS_SDK_MapWidget_PinIconList_HPP

class UMapWidget_PinIconList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HorizontalBox_0;                                            // 0x0280 (size: 0x8)
    FMapWidget_PinIconList_COnPinIconSelected OnPinIconSelected;                      // 0x0288 (size: 0x10)
    void OnPinIconSelected(EMapPinType InSelectedPinType);
    int32 PinCnt;                                                                     // 0x0298 (size: 0x4)
    char padding_0[0x4];                                                              // 0x029C (size: 0x4)
    TArray<class UWidget*> HorizontalBoxChildsForDelete;                              // 0x02A0 (size: 0x10)

    void SetAllPinIconEnable(bool IsEnable, bool InIncludeEraser);
    void SetPinIconEnable(EMapPinType InPinType, bool IsEnable);
    void Construct();
    void PinIconPressed(class UMapWidget_PinIconBtn_C* InPressedIcon);
    void Destruct();
    void OnPinIconBtnPressed(class UMapWidget_PinIconBtn_C* InPressedIcon);
    void OnPinEraserIconBtnPressed(class UMapWidget_PinEraserIconBtn_C* InPressedIcon);
    void EraserIconPressed();
    void ExecuteUbergraph_MapWidget_PinIconList(int32 EntryPoint);
    void OnPinIconSelected__DelegateSignature(EMapPinType InSelectedPinType);
}; // Size: 0x2B0

#endif
