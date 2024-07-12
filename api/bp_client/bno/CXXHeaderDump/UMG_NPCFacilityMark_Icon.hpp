#ifndef UE4SS_SDK_UMG_NPCFacilityMark_Icon_HPP
#define UE4SS_SDK_UMG_NPCFacilityMark_Icon_HPP

class UUMG_NPCFacilityMark_Icon_C : public UUserWidget
{
    class UImage* IconImage;                                                          // 0x0278 (size: 0x8)
    ESBFacilityType CurIconType;                                                      // 0x0280 (size: 0x1)

    void SetIconType(ESBFacilityType IconType);
}; // Size: 0x281

#endif
