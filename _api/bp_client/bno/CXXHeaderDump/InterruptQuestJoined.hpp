#ifndef UE4SS_SDK_InterruptQuestJoined_HPP
#define UE4SS_SDK_InterruptQuestJoined_HPP

class UInterruptQuestJoined_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* InOut;                                                    // 0x0280 (size: 0x8)
    class UImage* BgImage;                                                            // 0x0288 (size: 0x8)
    class UImage* ImageLight;                                                         // 0x0290 (size: 0x8)
    class UImage* ImageLine1;                                                         // 0x0298 (size: 0x8)
    class UImage* ImageLine2;                                                         // 0x02A0 (size: 0x8)
    class UCanvasPanel* LineImages;                                                   // 0x02A8 (size: 0x8)
    float BlurTimeElapsed;                                                            // 0x02B0 (size: 0x4)
    float BlurTime;                                                                   // 0x02B4 (size: 0x4)
    FName QuestID;                                                                    // 0x02B8 (size: 0x8)

    void Construct();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void ExecuteUbergraph_InterruptQuestJoined(int32 EntryPoint);
}; // Size: 0x2C0

#endif
