#ifndef UE4SS_SDK_CmnNumber1_HPP
#define UE4SS_SDK_CmnNumber1_HPP

class UCmnNumber1_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* Number;                                                             // 0x0280 (size: 0x8)
    class UMaterialInstanceDynamic* NumberMat;                                        // 0x0288 (size: 0x8)

    void SetNumber(int32 NewParam);
    void Construct();
    void ExecuteUbergraph_CmnNumber1(int32 EntryPoint);
}; // Size: 0x290

#endif
