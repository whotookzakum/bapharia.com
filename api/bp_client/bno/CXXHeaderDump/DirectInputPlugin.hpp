#ifndef UE4SS_SDK_DirectInputPlugin_HPP
#define UE4SS_SDK_DirectInputPlugin_HPP

struct FDIPKeySettingEntry
{
    FKey DirectInputKey;                                                              // 0x0000 (size: 0x18)
    FKey XInputKey;                                                                   // 0x0018 (size: 0x18)
    int32 ButtonNo;                                                                   // 0x0030 (size: 0x4)
    bool bInverseAxis;                                                                // 0x0034 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0035 (size: 0x3)
    float NeutralOffset;                                                              // 0x0038 (size: 0x4)

}; // Size: 0x40

struct FDIPKeySettings
{
    FName SettingName;                                                                // 0x0000 (size: 0x8)
    TArray<FDIPKeySettingEntry> KeySettings;                                          // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FDIPPresetSetting
{
    FName DeviceID;                                                                   // 0x0000 (size: 0x8)
    FName SettingName;                                                                // 0x0008 (size: 0x8)

}; // Size: 0x10

class UIDirectInputPluginSettings : public UObject
{
    TArray<FDIPKeySettings> KeySettings;                                              // 0x0028 (size: 0x10)
    TArray<FDIPPresetSetting> Presets;                                                // 0x0038 (size: 0x10)

    class UIDirectInputPluginSettings* GetSettings();
}; // Size: 0x48

#endif
