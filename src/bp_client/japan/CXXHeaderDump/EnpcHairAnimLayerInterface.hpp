#ifndef UE4SS_SDK_EnpcHairAnimLayerInterface_HPP
#define UE4SS_SDK_EnpcHairAnimLayerInterface_HPP

class IEnpcHairAnimLayerInterface_C : public IAnimLayerInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void HairLayer(FPoseLink InPose, FVector Acceralation, bool Active, FPoseLink& HairLayer);
}; // Size: 0x28

#endif
