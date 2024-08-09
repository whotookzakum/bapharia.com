#ifndef UE4SS_SDK_LibraryMenu_LoginBonus_BannerImage_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonus_BannerImage_HPP

class ULibraryMenu_LoginBonus_BannerImage_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBButton_C* BannerButton;                                                  // 0x0280 (size: 0x8)
    class UImage* BannerImage;                                                        // 0x0288 (size: 0x8)
    FLibraryMenu_LoginBonus_BannerImage_COnBannerClicked OnBannerClicked;             // 0x0290 (size: 0x10)
    void OnBannerClicked(int32 ID, class ULibraryMenu_LoginBonus_BannerImage_C* SelectedBtn);
    int32 ID;                                                                         // 0x02A0 (size: 0x4)
    char padding_0[0x4];                                                              // 0x02A4 (size: 0x4)
    FButtonStyle BtnSelectedStyle;                                                    // 0x02A8 (size: 0x278)
    FButtonStyle BtnNomalStyle;                                                       // 0x0520 (size: 0x278)

    void SetTexture(class UTexture2D* Texture);
    void SetBtnSelected(bool bSelected);
    void SetImage(class UTexture2DDynamic* TextureImage);
    void BndEvt__LibraryMenu_LoginBonus_BannerImage_BannerButton_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void ExecuteUbergraph_LibraryMenu_LoginBonus_BannerImage(int32 EntryPoint);
    void OnBannerClicked__DelegateSignature(int32 ID, class ULibraryMenu_LoginBonus_BannerImage_C* SelectedBtn);
}; // Size: 0x798

#endif
