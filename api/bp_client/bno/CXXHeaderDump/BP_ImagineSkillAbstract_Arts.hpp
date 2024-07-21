#ifndef UE4SS_SDK_BP_ImagineSkillAbstract_Arts_HPP
#define UE4SS_SDK_BP_ImagineSkillAbstract_Arts_HPP

class UBP_ImagineSkillAbstract_Arts_C : public USBImagineArtsSkillInfo
{
    TSoftObjectPtr<UAkAudioEvent> VoiceEvent;                                         // 0x02F8 (size: 0x28)
    ESBAkEventLOD VoiceLOD;                                                           // 0x0320 (size: 0x1)

}; // Size: 0x321

#endif
