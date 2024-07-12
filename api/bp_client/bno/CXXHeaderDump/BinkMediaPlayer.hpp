#ifndef UE4SS_SDK_BinkMediaPlayer_HPP
#define UE4SS_SDK_BinkMediaPlayer_HPP

#include "BinkMediaPlayer_enums.hpp"

class UBinkFunctionLibrary : public UBlueprintFunctionLibrary
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    FTimespan BinkLoadingMovie_GetTime();
    FTimespan BinkLoadingMovie_GetDuration();
    void Bink_DrawOverlays();
}; // Size: 0x28

class UBinkMediaPlayer : public UObject
{
    FBinkMediaPlayerOnMediaClosed OnMediaClosed;                                      // 0x0030 (size: 0x10)
    void OnBinkMediaPlayerMediaClosed();
    FBinkMediaPlayerOnMediaOpened OnMediaOpened;                                      // 0x0040 (size: 0x10)
    void OnBinkMediaPlayerMediaOpened(FString OpenedUrl);
    FBinkMediaPlayerOnMediaReachedEnd OnMediaReachedEnd;                              // 0x0050 (size: 0x10)
    void OnBinkMediaPlayerMediaReachedEnd();
    FBinkMediaPlayerOnPlaybackSuspended OnPlaybackSuspended;                          // 0x0060 (size: 0x10)
    void OnBinkMediaPlayerMediaEvent();
    uint8 Looping;                                                                    // 0x0070 (size: 0x1)
    uint8 StartImmediately;                                                           // 0x0070 (size: 0x1)
    uint8 DelayedOpen;                                                                // 0x0070 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0071 (size: 0x3)
    FVector2D BinkDestinationUpperLeft;                                               // 0x0074 (size: 0x8)
    FVector2D BinkDestinationLowerRight;                                              // 0x007C (size: 0x8)
    char padding_1[0x4];                                                              // 0x0084 (size: 0x4)
    FString URL;                                                                      // 0x0088 (size: 0x10)
    TEnumAsByte<EBinkMediaPlayerBinkBufferModes> BinkBufferMode;                      // 0x0098 (size: 0x1)
    TEnumAsByte<EBinkMediaPlayerBinkSoundTrack> BinkSoundTrack;                       // 0x0099 (size: 0x1)
    char padding_2[0x2];                                                              // 0x009A (size: 0x2)
    int32 BinkSoundTrackStart;                                                        // 0x009C (size: 0x4)
    TEnumAsByte<EBinkMediaPlayerBinkDrawStyle> BinkDrawStyle;                         // 0x00A0 (size: 0x1)
    char padding_3[0x3];                                                              // 0x00A1 (size: 0x3)
    int32 BinkLayerDepth;                                                             // 0x00A4 (size: 0x4)

    bool SupportsSeeking();
    bool SupportsScrubbing();
    bool SupportsRate(float Rate, bool Unthinned);
    void Stop();
    void SetVolume(float Rate);
    bool SetRate(float Rate);
    bool SetLooping(bool InLooping);
    bool Seek(const FTimespan& InTime);
    bool Rewind();
    bool Play();
    bool Pause();
    bool OpenUrl(FString NewURL);
    bool IsStopped();
    bool IsPlaying();
    bool IsPaused();
    bool IsLooping();
    bool IsInitialized();
    FString GetUrl();
    FTimespan GetTime();
    float GetRate();
    FTimespan GetDuration();
    void Draw(class UTexture* Texture, bool tonemap, int32 out_nits, float Alpha, bool srgb_decode, bool hdr);
    void CloseUrl();
    bool CanPlay();
    bool CanPause();
}; // Size: 0xF8

class UBinkMediaTexture : public UTexture
{
    TEnumAsByte<TextureAddress> AddressX;                                             // 0x0178 (size: 0x1)
    TEnumAsByte<TextureAddress> AddressY;                                             // 0x0179 (size: 0x1)
    char padding_0[0x6];                                                              // 0x017A (size: 0x6)
    class UBinkMediaPlayer* MediaPlayer;                                              // 0x0180 (size: 0x8)
    TEnumAsByte<EPixelFormat> PixelFormat;                                            // 0x0188 (size: 0x1)
    bool tonemap;                                                                     // 0x0189 (size: 0x1)
    char padding_1[0x2];                                                              // 0x018A (size: 0x2)
    float OutputNits;                                                                 // 0x018C (size: 0x4)
    float Alpha;                                                                      // 0x0190 (size: 0x4)
    bool DecodeSRGB;                                                                  // 0x0194 (size: 0x1)

    void SetMediaPlayer(class UBinkMediaPlayer* InMediaPlayer);
    void Clear();
}; // Size: 0x1B0

class UBinkMoviePlayerSettings : public UObject
{
    TEnumAsByte<EBinkMoviePlayerBinkBufferModes> BinkBufferMode;                      // 0x0028 (size: 0x1)
    TEnumAsByte<EBinkMoviePlayerBinkSoundTrack> BinkSoundTrack;                       // 0x0029 (size: 0x1)
    char padding_0[0x2];                                                              // 0x002A (size: 0x2)
    int32 BinkSoundTrackStart;                                                        // 0x002C (size: 0x4)
    FVector2D BinkDestinationUpperLeft;                                               // 0x0030 (size: 0x8)
    FVector2D BinkDestinationLowerRight;                                              // 0x0038 (size: 0x8)
    TEnumAsByte<EPixelFormat> BinkPixelFormat;                                        // 0x0040 (size: 0x1)

}; // Size: 0x48

#endif
