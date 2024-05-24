#ifndef UE4SS_SDK_CommandMenu_MissionEffect1_HPP
#define UE4SS_SDK_CommandMenu_MissionEffect1_HPP

class UCommandMenu_MissionEffect1_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* AnimWaitingIcon;                                          // 0x0280 (size: 0x8)
    class UImage* WaitingIcon;                                                        // 0x0288 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_CommandMenu_MissionEffect1(int32 EntryPoint);
}; // Size: 0x290

#endif
