#ifndef UE4SS_SDK_BP_ImagineSkillAbstract_Mount_HPP
#define UE4SS_SDK_BP_ImagineSkillAbstract_Mount_HPP

class UBP_ImagineSkillAbstract_Mount_C : public USBImagineMountSkillInfo
{
    TSoftObjectPtr<UAkAudioEvent> VoiceEvent;                                         // 0x06A8 (size: 0x28)
    ESBAkEventLOD VoiceLOD;                                                           // 0x06D0 (size: 0x1)

}; // Size: 0x6D1

#endif
