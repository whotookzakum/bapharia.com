#ifndef UE4SS_SDK_CommandMenu_BtnEffectParts_HPP
#define UE4SS_SDK_CommandMenu_BtnEffectParts_HPP

class UCommandMenu_BtnEffectParts_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UWidgetAnimation* MoveXAnimation;                                           // 0x0280 (size: 0x8)
    class UCanvasPanel* CanvasPanel_0;                                                // 0x0288 (size: 0x8)
    class UImage* Image_1;                                                            // 0x0290 (size: 0x8)
    class UCanvasPanel* MoveX;                                                        // 0x0298 (size: 0x8)
    class UCanvasPanel* ScaleXY;                                                      // 0x02A0 (size: 0x8)

    void Construct();
    void ExecuteUbergraph_CommandMenu_BtnEffectParts(int32 EntryPoint);
}; // Size: 0x2A8

#endif
