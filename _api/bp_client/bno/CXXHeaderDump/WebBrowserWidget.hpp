#ifndef UE4SS_SDK_WebBrowserWidget_HPP
#define UE4SS_SDK_WebBrowserWidget_HPP

class UWebBrowser : public UWidget
{
    FWebBrowserOnUrlChanged OnUrlChanged;                                             // 0x0120 (size: 0x10)
    void OnUrlChanged(const FText& Text);
    FWebBrowserOnBeforePopup OnBeforePopup;                                           // 0x0130 (size: 0x10)
    void OnBeforePopup(FString URL, FString Frame);
    FString InitialURL;                                                               // 0x0140 (size: 0x10)
    bool bSupportsTransparency;                                                       // 0x0150 (size: 0x1)

    void OnUrlChanged__DelegateSignature(const FText& Text);
    void OnBeforePopup__DelegateSignature(FString URL, FString Frame);
    void LoadURL(FString NewURL);
    void LoadString(FString Contents, FString DummyURL);
    FString GetUrl();
    FText GetTitleText();
    bool GetHeaderValue(const FString Key, FString& OutValue);
    void ExecuteJavascript(FString ScriptText);
}; // Size: 0x168

class UWebBrowserAssetManager : public UObject
{
    TSoftObjectPtr<UMaterial> DefaultMaterial;                                        // 0x0028 (size: 0x28)

}; // Size: 0x78

#endif
