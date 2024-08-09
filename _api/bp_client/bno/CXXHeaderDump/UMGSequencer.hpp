#ifndef UE4SS_SDK_UMGSequencer_HPP
#define UE4SS_SDK_UMGSequencer_HPP

struct FMovieSceneUMGSectionTemplate : public FMovieSceneEvalTemplate
{
    class UMovieSceneUMGSection* Section;                                             // 0x0020 (size: 0x8)

}; // Size: 0x28

class UMovieSceneUMGSection : public UMovieSceneSection
{
    class UUserWidget* Widget;                                                        // 0x00E8 (size: 0x8)
    int32 ZOrder;                                                                     // 0x00F0 (size: 0x4)
    FName AnimationName;                                                              // 0x00F4 (size: 0x8)

}; // Size: 0x100

class UMovieSceneUMGTrack : public UMovieSceneNameableTrack
{
    TArray<class UMovieSceneSection*> Sections;                                       // 0x0098 (size: 0x10)

}; // Size: 0xA8

#endif
