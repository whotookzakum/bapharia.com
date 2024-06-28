#ifndef UE4SS_SDK_CmnNumber1_0to99_HPP
#define UE4SS_SDK_CmnNumber1_0to99_HPP

class UCmnNumber1_0to99_C : public UUserWidget
{
    class UCmnNumber1_C* CmnNumber_1;                                                 // 0x0278 (size: 0x8)
    class UCmnNumber1_C* CmnNumber_10;                                                // 0x0280 (size: 0x8)
    class UHorizontalBox* NumberGrp;                                                  // 0x0288 (size: 0x8)
    FString NumberString;                                                             // 0x0290 (size: 0x10)

    void GetNumber(int32& OutNumber);
    void SetNumber(int32 InNumber);
}; // Size: 0x2A0

#endif
