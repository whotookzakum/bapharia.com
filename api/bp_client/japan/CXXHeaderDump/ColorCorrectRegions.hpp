#ifndef UE4SS_SDK_ColorCorrectRegions_HPP
#define UE4SS_SDK_ColorCorrectRegions_HPP

#include "ColorCorrectRegions_enums.hpp"

class AColorCorrectRegion : public AActor
{
    EColorCorrectRegionsType Type;                                                    // 0x0228 (size: 0x1)
    char padding_0[0x3];                                                              // 0x0229 (size: 0x3)
    int32 Priority;                                                                   // 0x022C (size: 0x4)
    float Intensity;                                                                  // 0x0230 (size: 0x4)
    float Inner;                                                                      // 0x0234 (size: 0x4)
    float Outer;                                                                      // 0x0238 (size: 0x4)
    float Falloff;                                                                    // 0x023C (size: 0x4)
    bool Invert;                                                                      // 0x0240 (size: 0x1)
    EColorCorrectRegionTemperatureType TemperatureType;                               // 0x0241 (size: 0x1)
    char padding_1[0x2];                                                              // 0x0242 (size: 0x2)
    float Temperature;                                                                // 0x0244 (size: 0x4)
    char padding_2[0x8];                                                              // 0x0248 (size: 0x8)
    FColorGradingSettings ColorGradingSettings;                                       // 0x0250 (size: 0x150)
    bool Enabled;                                                                     // 0x03A0 (size: 0x1)
    bool ExcludeStencil;                                                              // 0x03A1 (size: 0x1)

}; // Size: 0x400

class UColorCorrectRegionsSubsystem : public UWorldSubsystem
{
    char padding_0[0x80];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x80

#endif
