#ifndef UE4SS_SDK_CaptureImageChatUnread_HPP
#define UE4SS_SDK_CaptureImageChatUnread_HPP

class UCaptureImageChatUnread_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* CaptueImage;                                                        // 0x0280 (size: 0x8)
    class UMaterialInstanceDynamic* CaputureImageMat;                                 // 0x0288 (size: 0x8)

    void SetCaptureImage(class UTexture2DDynamic* CaptureImage);
    void Construct();
    void ExecuteUbergraph_CaptureImageChatUnread(int32 EntryPoint);
}; // Size: 0x290

#endif
