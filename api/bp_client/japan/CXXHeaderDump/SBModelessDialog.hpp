#ifndef UE4SS_SDK_SBModelessDialog_HPP
#define UE4SS_SDK_SBModelessDialog_HPP

class USBOpenModelessDirectoryDialog : public UBlueprintAsyncActionBase
{
    FSBOpenModelessDirectoryDialogCompleted Completed;                                // 0x0048 (size: 0x10)
    void ResultOpenFileDialogDelegate(bool Success, FString FilePath);

    class USBOpenModelessDirectoryDialog* SBOpenModelessDirectoryDialog(class UObject* WorldContextObject, FString DialogTitle, FString DefaultPath);
}; // Size: 0x88

#endif
