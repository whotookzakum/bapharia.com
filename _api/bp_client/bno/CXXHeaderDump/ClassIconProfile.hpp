#ifndef UE4SS_SDK_ClassIconProfile_HPP
#define UE4SS_SDK_ClassIconProfile_HPP

class UClassIconProfile_C : public USBClassIcon
{
    char padding_0[0x290];                                                            // 0x0000 (size: 0x0)

    class UTexture2D* GetIconTexture();
}; // Size: 0x290

#endif
