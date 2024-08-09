#ifndef UE4SS_SDK_InstanceDungeonBattleinfoHUD_HPP
#define UE4SS_SDK_InstanceDungeonBattleinfoHUD_HPP

class UInstanceDungeonBattleinfoHUD_C : public USBDungeonBattleinfoHUDWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0288 (size: 0x8)
    class UImage* Image_0;                                                            // 0x0290 (size: 0x8)
    class UImage* Image_1;                                                            // 0x0298 (size: 0x8)
    class UHorizontalBox* PlayerHorizontalBox1;                                       // 0x02A0 (size: 0x8)
    class UHorizontalBox* PlayerHorizontalBox2;                                       // 0x02A8 (size: 0x8)
    class UImage* PlayerImage2_1;                                                     // 0x02B0 (size: 0x8)
    class UImage* PlayerImage2_2;                                                     // 0x02B8 (size: 0x8)
    class UImage* PlayerImage2_3;                                                     // 0x02C0 (size: 0x8)
    class UImage* PlayerImage2_4;                                                     // 0x02C8 (size: 0x8)
    class UImage* PlayerImage2_5;                                                     // 0x02D0 (size: 0x8)
    class UImage* PlayerImage2_6;                                                     // 0x02D8 (size: 0x8)
    class UImage* PlayerImage2_7;                                                     // 0x02E0 (size: 0x8)
    class UImage* PlayerImage2_8;                                                     // 0x02E8 (size: 0x8)
    class UImage* PlayerImage2_9;                                                     // 0x02F0 (size: 0x8)
    class UImage* PlayerImage2_10;                                                    // 0x02F8 (size: 0x8)
    class UCanvasPanel* WaitBossBattleCanvas;                                         // 0x0300 (size: 0x8)
    class UImage* WiatBossBattleBG;                                                   // 0x0308 (size: 0x8)
    TArray<bool> IsDemo;                                                              // 0x0310 (size: 0x10)
    TArray<bool> InitDemo;                                                            // 0x0320 (size: 0x10)
    TArray<class UDemoHUD_C*> DemoHUDUI;                                              // 0x0330 (size: 0x10)
    bool IsBossArea;                                                                  // 0x0340 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0341 (size: 0x3)
    int32 PlayerMaxNum;                                                               // 0x0344 (size: 0x4)
    int32 PlayerInAreaNum;                                                            // 0x0348 (size: 0x4)

    void SetRootVisibility(bool InVisible);
    void UpdateDemoHUD(TArray<bool>& InDemoPlay, TArray<class UDemoHUD_C*>& InHUD);
    void Init();
    void SetPlayerReadyVisibility(class UHorizontalBox* InHorizonalBox, int32 InMax, int32 InReadyNum);
    void UpdateWaitReadyBossBattle(bool IsArea, int32 InReadyNum, int32 InMaxPlayerNum);
    void Construct();
    void OnUpdate();
    void ExecuteUbergraph_InstanceDungeonBattleinfoHUD(int32 EntryPoint);
}; // Size: 0x34C

#endif
