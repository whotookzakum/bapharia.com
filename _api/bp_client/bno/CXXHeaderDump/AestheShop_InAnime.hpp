#ifndef UE4SS_SDK_AestheShop_InAnime_HPP
#define UE4SS_SDK_AestheShop_InAnime_HPP

class UAestheShop_InAnime_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* NewAnimation;                                             // 0x0280 (size: 0x8)

    void PlayInAnim();
    void ExecuteUbergraph_AestheShop_InAnime(int32 EntryPoint);
}; // Size: 0x288

#endif
