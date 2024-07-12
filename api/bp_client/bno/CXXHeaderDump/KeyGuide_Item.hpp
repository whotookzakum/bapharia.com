#ifndef UE4SS_SDK_KeyGuide_Item_HPP
#define UE4SS_SDK_KeyGuide_Item_HPP

class UKeyGuide_Item_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class USBRuntimeTextBlock* ActionNameText;                                        // 0x0280 (size: 0x8)
    class USBRuntimeTextBlock* ActionText;                                            // 0x0288 (size: 0x8)
    int32 ActionTextId;                                                               // 0x0290 (size: 0x4)
    TEnumAsByte<ESBKeyConfigAction::Type> ActionConfig;                               // 0x0294 (size: 0x1)

    void PreConstruct(bool IsDesignTime);
    void ExecuteUbergraph_KeyGuide_Item(int32 EntryPoint);
}; // Size: 0x295

#endif
