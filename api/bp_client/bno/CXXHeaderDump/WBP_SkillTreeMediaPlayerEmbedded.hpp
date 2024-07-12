#ifndef UE4SS_SDK_WBP_SkillTreeMediaPlayerEmbedded_HPP
#define UE4SS_SDK_WBP_SkillTreeMediaPlayerEmbedded_HPP

class UWBP_SkillTreeMediaPlayerEmbedded_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCmnImageThrobber_C* CmnImageThrobber;                                      // 0x0280 (size: 0x8)
    class UImage* Image_Movie;                                                        // 0x0288 (size: 0x8)
    class UBinkMediaPlayer* BinkMediaPlayer;                                          // 0x0290 (size: 0x8)
    class ABP_MediaSoundActor_C* SoundActor;                                          // 0x0298 (size: 0x8)
    FWBP_SkillTreeMediaPlayerEmbedded_COnFinish OnFinish;                             // 0x02A0 (size: 0x10)
    void OnFinish();
    FWBP_SkillTreeMediaPlayerEmbedded_COnPlayStart OnPlayStart;                       // 0x02B0 (size: 0x10)
    void OnPlayStart();
    bool bFinish;                                                                     // 0x02C0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02C1 (size: 0x7)
    class UMediaSource* PlayMediaSource;                                              // 0x02C8 (size: 0x8)

    void Request Play Media(TSoftObjectPtr<UMediaSource> MediaSource, bool& Result);
    void OnLoaded_41AC99C64E613999FD6600A6E8657C13(class UObject* Loaded);
    void CustomEvent_0(FString OpenedUrl);
    void Destruct();
    void FinishFunction();
    void BindMediaEvent();
    void Cancel();
    void MovieLoadRequest(TSoftObjectPtr<UObject> Asset);
    void Construct();
    void TriPlay();
    void Unbind();
    void ExecuteUbergraph_WBP_SkillTreeMediaPlayerEmbedded(int32 EntryPoint);
    void OnPlayStart__DelegateSignature();
    void OnFinish__DelegateSignature();
}; // Size: 0x2D0

#endif
