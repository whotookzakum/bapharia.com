#ifndef UE4SS_SDK_CommandMenu_MissionEffect2_HPP
#define UE4SS_SDK_CommandMenu_MissionEffect2_HPP

class UCommandMenu_MissionEffect2_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimIn;                                                   // 0x0280 (size: 0x8)
    class UImage* Image_Star1;                                                        // 0x0288 (size: 0x8)
    class UImage* Image_Star2;                                                        // 0x0290 (size: 0x8)
    class UImage* Image_Star3;                                                        // 0x0298 (size: 0x8)
    class UImage* Image_Star4;                                                        // 0x02A0 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_CommandMenu_MissionEffect2(int32 EntryPoint);
}; // Size: 0x2A8

#endif
