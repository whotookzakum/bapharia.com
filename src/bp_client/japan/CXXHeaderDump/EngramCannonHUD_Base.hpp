#ifndef UE4SS_SDK_EngramCannonHUD_Base_HPP
#define UE4SS_SDK_EngramCannonHUD_Base_HPP

class UEngramCannonHUD_Base_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* NoiseAnime;                                               // 0x0280 (size: 0x8)
    class UEngramCannonHUD_TargetSite_C* EngramCannonHUD_TargetSite;                  // 0x0288 (size: 0x8)
    class UEngramCannonHUD_Detail_C* EngramCannonHUD_Detail;                          // 0x0290 (size: 0x8)
    bool IsNoiseAnim;                                                                 // 0x0298 (size: 0x1)
    char padding_0[0x7];                                                              // 0x0299 (size: 0x7)
    class UEngramCannonHUD_KeyHelp_C* KeyHelp;                                        // 0x02A0 (size: 0x8)

    void Construct();
    void Destruct();
    void PlayNoiseAnime();
    void WidgetAnimationEvt_NoiseAnime_K2Node_WidgetAnimationEvent_0();
    void FinishedNoiseAnimation();
    void ExecuteUbergraph_EngramCannonHUD_Base(int32 EntryPoint);
}; // Size: 0x2A8

#endif
