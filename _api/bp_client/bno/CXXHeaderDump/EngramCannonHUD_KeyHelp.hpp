#ifndef UE4SS_SDK_EngramCannonHUD_KeyHelp_HPP
#define UE4SS_SDK_EngramCannonHUD_KeyHelp_HPP

class UEngramCannonHUD_KeyHelp_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_Key;                                              // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* Esc_text;                                              // 0x0288 (size: 0x8)
    class USBRuntimeTextBlock* Shot_text;                                             // 0x0290 (size: 0x8)

    void SetEnableKeyHelp(bool enable);
    void UpdateKeyText();
    void Construct();
    void Destruct();
    void OnShot_Event();
    void ExecuteUbergraph_EngramCannonHUD_KeyHelp(int32 EntryPoint);
}; // Size: 0x298

#endif
