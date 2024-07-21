#ifndef UE4SS_SDK_ChatHudResizableWidget_HPP
#define UE4SS_SDK_ChatHudResizableWidget_HPP

class UChatHudResizableWidget_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UImage* ResizeMark;                                                         // 0x0280 (size: 0x8)
    class UUserWidget* ParentWidget;                                                  // 0x0288 (size: 0x8)

    void OnDragDetected(FGeometry MyGeometry, const FPointerEvent& PointerEvent, class UDragDropOperation*& Operation);
    FEventReply OnMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
    void Construct();
    void ExecuteUbergraph_ChatHudResizableWidget(int32 EntryPoint);
}; // Size: 0x290

#endif
