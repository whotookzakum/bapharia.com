#ifndef UE4SS_SDK_GameLogout_HPP
#define UE4SS_SDK_GameLogout_HPP

class UGameLogout_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    bool DoLogout;                                                                    // 0x0280 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0281 (size: 0x3)
    int32 LogoutCountdownTime;                                                        // 0x0284 (size: 0x4)
    class UCountdownUI_C* CountdownUI;                                                // 0x0288 (size: 0x8)
    bool GameQuit;                                                                    // 0x0290 (size: 0x1)

    void Construct();
    void OnEndCountdown(ECountdownResult Result);
    void ExecuteUbergraph_GameLogout(int32 EntryPoint);
}; // Size: 0x291

#endif
