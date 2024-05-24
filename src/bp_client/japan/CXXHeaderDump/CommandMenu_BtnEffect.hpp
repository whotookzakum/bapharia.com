#ifndef UE4SS_SDK_CommandMenu_BtnEffect_HPP
#define UE4SS_SDK_CommandMenu_BtnEffect_HPP

class UCommandMenu_BtnEffect_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0280 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_CommandMenu_BtnEffect(int32 EntryPoint);
}; // Size: 0x288

#endif
