#ifndef UE4SS_SDK_WebBrowser_HPP
#define UE4SS_SDK_WebBrowser_HPP

struct FWebJSCallbackBase
{
    char padding_0[0x20];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x20

struct FWebJSFunction : public FWebJSCallbackBase
{
    char padding_0[0x20];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x20

struct FWebJSResponse : public FWebJSCallbackBase
{
    char padding_0[0x20];                                                             // 0x0000 (size: 0x0)
}; // Size: 0x20

#endif
