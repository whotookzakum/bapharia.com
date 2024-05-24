#ifndef UE4SS_SDK_TokenList_HPP
#define UE4SS_SDK_TokenList_HPP

class UTokenList_C : public UUserWidget
{
    FPointerToUberGraphFrame UberGraphFrame;                                          // 0x0278 (size: 0x8)
    class UTokenItem_C* TokenItem;                                                    // 0x0280 (size: 0x8)
    class UTokenItem_C* TokenItem_1;                                                  // 0x0288 (size: 0x8)
    class UTokenItem_C* TokenItem_2;                                                  // 0x0290 (size: 0x8)
    class UTokenItem_C* TokenItem_3;                                                  // 0x0298 (size: 0x8)
    class UTokenItem_C* TokenItem_4;                                                  // 0x02A0 (size: 0x8)
    class UTokenItem_C* TokenItem_5;                                                  // 0x02A8 (size: 0x8)
    class UVerticalBox* VB_Items;                                                     // 0x02B0 (size: 0x8)
    TArray<class UTexture2D*> MoneyImageList;                                         // 0x02B8 (size: 0x10)
    class ASBPlayerController* PlayerController;                                      // 0x02C8 (size: 0x8)
    class USBRmShopComponent* RmShopCmp;                                              // 0x02D0 (size: 0x8)
    class USBToken* Token;                                                            // 0x02D8 (size: 0x8)
    ESBTokenCategory SelectedTokenCategory;                                           // 0x02E0 (size: 0x1)
    char padding_0[0x7];                                                              // 0x02E1 (size: 0x7)
    class USBMasterDataManager* MasterData;                                           // 0x02E8 (size: 0x8)
    bool IsSelectBlankText;                                                           // 0x02F0 (size: 0x1)
    char padding_1[0x7];                                                              // 0x02F1 (size: 0x7)
    FTokenList_COnGetExpiredBlankText OnGetExpiredBlankText;                          // 0x02F8 (size: 0x10)
    void OnGetExpiredBlankText();
    FTokenList_COnGetTokenListBlankText OnGetTokenListBlankText;                      // 0x0308 (size: 0x10)
    void OnGetTokenListBlankText();
    FTokenList_COnMoneyListEnd OnMoneyListEnd;                                        // 0x0318 (size: 0x10)
    void OnMoneyListEnd();

    void SetExpiredTokenListFunc(const FSBExpiredTokenStates& SBExpiredTokenStates);
    void SetTokenListFunc(FSBTokenStates TokenStates);
    void Construct();
    void OnGetMyCharacterInfoDelegate_イベント_0(bool Result);
    void Destruct();
    void SetMoneyList();
    void GetCryptocurerncy(const bool Result, const int32 RetCode, const FSBCryptoCurrency& Cryptocurrency);
    void GetStateList(const FSBTokenStates States);
    void OnGetExpiredList(const FSBExpiredTokenStates States);
    void SetTokenList(int32 Category);
    void SetExpiredTokenList();
    void ExecuteUbergraph_TokenList(int32 EntryPoint);
    void OnMoneyListEnd__DelegateSignature();
    void OnGetTokenListBlankText__DelegateSignature();
    void OnGetExpiredBlankText__DelegateSignature();
}; // Size: 0x328

#endif
