#ifndef UE4SS_SDK_BPI_CommandMenuChildrenSwitcher_HPP
#define UE4SS_SDK_BPI_CommandMenuChildrenSwitcher_HPP

class IBPI_CommandMenuChildrenSwitcher_C : public IInterface
{
    char padding_0[0x28];                                                             // 0x0000 (size: 0x0)

    void TermRequesTiming();
    void SwitchOut();
    void SwitchIn(FString OpenBookMarkType, FName ParamName);
}; // Size: 0x28

#endif
