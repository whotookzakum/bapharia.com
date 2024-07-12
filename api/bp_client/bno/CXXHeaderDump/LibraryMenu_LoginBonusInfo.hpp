#ifndef UE4SS_SDK_LibraryMenu_LoginBonusInfo_HPP
#define UE4SS_SDK_LibraryMenu_LoginBonusInfo_HPP

class ULibraryMenu_LoginBonusInfo_C : public UUserWidget
{
    class UCanvasPanel* Acount;                                                       // 0x0278 (size: 0x8)
    class UImage* AcountImage;                                                        // 0x0280 (size: 0x8)
    class UImage* BunnerBg;                                                           // 0x0288 (size: 0x8)
    class UImage* BunnerImage;                                                        // 0x0290 (size: 0x8)
    class UTextBlock* DescText;                                                       // 0x0298 (size: 0x8)
    class USizeBox* DescTextSizeBox;                                                  // 0x02A0 (size: 0x8)
    class UImage* DetailBG;                                                           // 0x02A8 (size: 0x8)
    class USBRichTextBlock* LetterAddressText;                                        // 0x02B0 (size: 0x8)
    class UImage* LetterBG;                                                           // 0x02B8 (size: 0x8)
    class UImage* Line;                                                               // 0x02C0 (size: 0x8)
    class UTextBlock* LoginBonusName;                                                 // 0x02C8 (size: 0x8)
    class UCanvasPanel* PlayerI;                                                      // 0x02D0 (size: 0x8)
    class UImage* PlayerImage;                                                        // 0x02D8 (size: 0x8)
    class USBRichTextBlock* remainingTimeText;                                        // 0x02E0 (size: 0x8)
    class USBDateTimeTextBlock* remainingTimeValue;                                   // 0x02E8 (size: 0x8)
    class UImage* TimeBg;                                                             // 0x02F0 (size: 0x8)
    class UOverlay* TimePanel;                                                        // 0x02F8 (size: 0x8)
    class UImage* TitleBg;                                                            // 0x0300 (size: 0x8)

    void SetTextureData(class UTexture2D* Texture);
    void SetImageData(class UTexture2DDynamic* Texture);
    void SetData(FSBLoginBonusWindowData LoginBonusData);
}; // Size: 0x308

#endif
