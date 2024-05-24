#ifndef UE4SS_SDK_MapWidget_VisitedMapList2_HPP
#define UE4SS_SDK_MapWidget_VisitedMapList2_HPP

class UMapWidget_VisitedMapList2_C : public USBUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x02B0 (size: 0x8)
    class UWidgetAnimation* CloseAnimation;                                           // 0x02B8 (size: 0x8)
    class UWidgetAnimation* OpenAnimation;                                            // 0x02C0 (size: 0x8)
    class UBasicPager_C* BasicPager;                                                  // 0x02C8 (size: 0x8)
    class USBButtonFullScreen_C* BtnScreen;                                           // 0x02D0 (size: 0x8)
    class UCanvasPanel* CPPage;                                                       // 0x02D8 (size: 0x8)
    class UUniformGridPanel* UniformGridPanel;                                        // 0x02E0 (size: 0x8)
    FMapWidget_VisitedMapList2_COnListItemClicked OnListItemClicked;                  // 0x02E8 (size: 0x10)
    void OnListItemClicked(FString InMapId);
    FMapWidget_VisitedMapList2_COnClose OnClose;                                      // 0x02F8 (size: 0x10)
    void OnClose();
    TArray<FString> MapIds;                                                           // 0x0308 (size: 0x10)
    FString CurrentMapId;                                                             // 0x0318 (size: 0x10)
    int32 ViewPage;                                                                   // 0x0328 (size: 0x4)
    int32 MaxPage;                                                                    // 0x032C (size: 0x4)

    int32 GetViewCount();
    void ChangeFaceImageTexture(class UTexture2DDynamic* Texture);
    void PageChange(int32 Page);
    void Setup(TArray<FString>& InMapIds, FString InCurrentId);
    void ResetListItem();
    void SetupListItem();
    void Close();
    void Open();
    void BindListItem(class UMapWidget_VisitedMapList2Item_C* Target);
    void UnbindListItem(class UMapWidget_VisitedMapList2Item_C* Target);
    void OnListItemClickedEvent(FString InMapId);
    void Destruct();
    void OnPress_Cancel();
    void BndEvt__MapWidget_VisitedMapList2_BtnScreen_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature();
    void OnAnimationFinished(const class UWidgetAnimation* Animation);
    void BndEvt__MapWidget_VisitedMapList2_BasicPager_K2Node_ComponentBoundEvent_1_OnPageChange__DelegateSignature(int32 Page);
    void Construct();
    void ExecuteUbergraph_MapWidget_VisitedMapList2(int32 EntryPoint);
    void OnClose__DelegateSignature();
    void OnListItemClicked__DelegateSignature(FString InMapId);
}; // Size: 0x330

#endif
