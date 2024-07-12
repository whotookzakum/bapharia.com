#ifndef UE4SS_SDK_AestheShop_CategoryIcon_HPP
#define UE4SS_SDK_AestheShop_CategoryIcon_HPP

class UAestheShop_CategoryIcon_C : public UUserWidget
{
    class UImage* IconImage;                                                          // 0x0278 (size: 0x8)

    void SetIcon(TEnumAsByte<E_AestheShop_TopMenuItems_DetailSettings::Type> InDetailSettings);
}; // Size: 0x280

#endif
