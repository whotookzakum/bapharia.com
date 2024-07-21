#ifndef UE4SS_SDK_UMG_AestheShopStepInfo_HPP
#define UE4SS_SDK_UMG_AestheShopStepInfo_HPP

class UUMG_AestheShopStepInfo_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UHorizontalBox* HBStepIcons;                                                // 0x0280 (size: 0x8)
    class UImage* Line;                                                               // 0x0288 (size: 0x8)

    void SetStep(TEnumAsByte<E_AestheShop_Step::Type> InStep);
    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_UMG_AestheShopStepInfo(int32 EntryPoint);
}; // Size: 0x290

#endif
