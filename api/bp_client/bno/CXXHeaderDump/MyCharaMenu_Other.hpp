#ifndef UE4SS_SDK_MyCharaMenu_Other_HPP
#define UE4SS_SDK_MyCharaMenu_Other_HPP

class UMyCharaMenu_Other_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UVerticalBox* VB_Active;                                                    // 0x02B8 (size: 0x8)
    class UVerticalBox* VB_NonActive;                                                 // 0x02C0 (size: 0x8)
    int32 ActiveItemCnt;                                                              // 0x02C8 (size: 0x4)

    void Get Free Buff Text(ESBFreeBuffPointType Type, FString& Text, FSBStatusAlimentConfig& Out Row);
    void UpdateFreeBuff();
    void FixActiveList();
    void TryGetActiveListItem(class UEffect_Other_C*& item);
    FText GetBuffValue(int32 BaseValue, bool IsRate, const EOutGameBuffType InBuffType);
    void CreateStockOutGameBuff();
    void UpdateActiveNetCafeBuff();
    void UpdateActiveOutGameBuff();
    void Construct();
    void Update();
    void ExecuteUbergraph_MyCharaMenu_Other(int32 EntryPoint);
}; // Size: 0x2CC

#endif
