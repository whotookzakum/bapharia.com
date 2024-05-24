#ifndef UE4SS_SDK_AudioExtensions_HPP
#define UE4SS_SDK_AudioExtensions_HPP

class UAudioEndpointSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UDummyEndpointSettings : public UAudioEndpointSettingsBase
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UOcclusionPluginSourceSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class UReverbPluginSourceSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USoundModulatorBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USoundfieldEffectBase : public UObject
{
    class USoundfieldEffectSettingsBase* Settings;                                    // 0x0028 (size: 0x8)

}; // Size: 0x30

class USoundfieldEffectSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USoundfieldEncodingSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USoundfieldEndpointSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

class USpatializationPluginSourceSettingsBase : public UObject
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x28

#endif
