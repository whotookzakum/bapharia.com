#ifndef UE4SS_SDK_DedicatedClassHUD_HPP
#define UE4SS_SDK_DedicatedClassHUD_HPP

class UDedicatedClassHUD_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* Cvs;                                                          // 0x0280 (size: 0x8)
    TMap<class FString, class UUserWidget*> UserWidgets;                              // 0x0288 (size: 0x50)

    bool UnregistClassHud(FString Name);
    void LoadSavePosition(FString Name);
    void RegistWidget(class UUserWidget* Widget, FString Name);
    void Construct();
    void RegistClassHud(class UUserWidget* Widget, FString Name);
    void OnUpdateHudLayout();
    void ExecuteUbergraph_DedicatedClassHUD(int32 EntryPoint);
}; // Size: 0x2D8

#endif
