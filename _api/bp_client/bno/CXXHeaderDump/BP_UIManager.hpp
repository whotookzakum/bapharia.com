#ifndef UE4SS_SDK_BP_UIManager_HPP
#define UE4SS_SDK_BP_UIManager_HPP

class UBP_UIManager_C : public USBUIManager
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0268 (size: 0x8)

    void ExecuteUbergraph_BP_UIManager(int32 EntryPoint);
}; // Size: 0x270

#endif
