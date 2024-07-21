#ifndef UE4SS_SDK_ChatHudMovableWidget_HPP
#define UE4SS_SDK_ChatHudMovableWidget_HPP

class UChatHudMovableWidget_C : public UUserWidget
{
    class UUserWidget* ParentWidget;                                                  // 0x0278 (size: 0x8)

    void OnDragDetected(FGeometry MyGeometry, const FPointerEvent& PointerEvent, class UDragDropOperation*& Operation);
    FEventReply OnMouseButtonDown(FGeometry MyGeometry, const FPointerEvent& MouseEvent);
}; // Size: 0x280

#endif
