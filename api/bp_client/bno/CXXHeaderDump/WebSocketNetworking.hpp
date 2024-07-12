#ifndef UE4SS_SDK_WebSocketNetworking_HPP
#define UE4SS_SDK_WebSocketNetworking_HPP

class UWebSocketConnection : public UNetConnection
{
    char padding_0[0x1BC8];                                                           // 0x0000 (size: 0x0)
}; // Size: 0x1BC8

class UWebSocketNetDriver : public UNetDriver
{
    int32 WebSocketPort;                                                              // 0x0768 (size: 0x4)

}; // Size: 0x778

#endif
