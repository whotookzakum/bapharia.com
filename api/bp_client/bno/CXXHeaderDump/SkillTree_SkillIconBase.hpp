#ifndef UE4SS_SDK_SkillTree_SkillIconBase_HPP
#define UE4SS_SDK_SkillTree_SkillIconBase_HPP

class USkillTree_SkillIconBase_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    FSkillTree_SkillIconBase_COnClicked OnClicked;                                    // 0x0280 (size: 0x10)
    void OnClicked(int32 SkillId);
    int32 SkillId;                                                                    // 0x0290 (size: 0x4)
    char padding_0[0x4];                                                              // 0x0294 (size: 0x4)
    FSkillTree_SkillIconBase_COnHovered OnHovered;                                    // 0x0298 (size: 0x10)
    void OnHovered(int32 SkillId);
    FSkillTree_SkillIconBase_COnUnhovered OnUnhovered;                                // 0x02A8 (size: 0x10)
    void OnUnHovered(int32 SkillId);
    int32 SkillLevel;                                                                 // 0x02B8 (size: 0x4)
    char padding_1[0x4];                                                              // 0x02BC (size: 0x4)
    class UImage* IconRef;                                                            // 0x02C0 (size: 0x8)
    class UWidget* EquipmentIconRef;                                                  // 0x02C8 (size: 0x8)
    class UImage* IconBgRef1;                                                         // 0x02D0 (size: 0x8)
    class UImage* ElementIconRef;                                                     // 0x02D8 (size: 0x8)
    TMap<class ESBSkillIconBgType, class UTexture2D*> IconBgImageList;                // 0x02E0 (size: 0x50)
    TMap<class ESBSkillElementIconType, class UTexture2D*> ElementIconImageList;      // 0x0330 (size: 0x50)
    class UUIBlocker_C* UIBlocker;                                                    // 0x0380 (size: 0x8)

    void SetEquipmentIconVisible(bool Visible);
    void UpdateSimple();
    void Update();
    void Init(bool IsPassive, int32 SkillId, int32 SkillLevel);
    void Destruct();
    void ExecuteUbergraph_SkillTree_SkillIconBase(int32 EntryPoint);
    void OnUnHovered__DelegateSignature(int32 SkillId);
    void OnHovered__DelegateSignature(int32 SkillId);
    void OnClicked__DelegateSignature(int32 SkillId);
}; // Size: 0x388

#endif
