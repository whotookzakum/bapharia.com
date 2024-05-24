#ifndef UE4SS_SDK_SkillComboTreeRuntime_HPP
#define UE4SS_SDK_SkillComboTreeRuntime_HPP

struct FSCTActionTable : public FTableRowBase
{
    TArray<FName> BeforeStance;                                                       // 0x0008 (size: 0x10)
    FName AfterStance;                                                                // 0x0018 (size: 0x8)

}; // Size: 0x20

struct FSCTComboOnlySkill
{
    FName StanceName;                                                                 // 0x0000 (size: 0x8)
    TArray<FName> ComboOnlyCommand;                                                   // 0x0008 (size: 0x10)

}; // Size: 0x18

struct FSCTProbabilityRange
{
    float Lower;                                                                      // 0x0000 (size: 0x4)
    float Upper;                                                                      // 0x0004 (size: 0x4)

}; // Size: 0x8

class USCTGraph : public UObject
{
    TArray<class USCTGraphNode*> RootNodes;                                           // 0x0028 (size: 0x10)
    TArray<class USCTGraphNode*> AllNodes;                                            // 0x0038 (size: 0x10)
    TArray<class USCTGraphEdge*> AllEdges;                                            // 0x0048 (size: 0x10)
    TArray<FSCTComboOnlySkill> ComboOnlySkills;                                       // 0x0058 (size: 0x10)
    TArray<FName> ComboOnlySkillNames;                                                // 0x0068 (size: 0x10)

}; // Size: 0x78

class USCTGraphEdge : public UObject
{
    class USCTGraph* Graph;                                                           // 0x0028 (size: 0x8)
    TArray<FName> ActivationTags;                                                     // 0x0030 (size: 0x10)
    TArray<FName> DeactivationTags;                                                   // 0x0040 (size: 0x10)
    bool bAbsolute;                                                                   // 0x0050 (size: 0x1)
    bool bUseProbability;                                                             // 0x0051 (size: 0x1)
    char padding_0[0x2];                                                              // 0x0052 (size: 0x2)
    FSCTProbabilityRange ProbabilityRange;                                            // 0x0054 (size: 0x8)
    char padding_1[0x4];                                                              // 0x005C (size: 0x4)
    class USCTGraphNode* StartNode;                                                   // 0x0060 (size: 0x8)
    class USCTGraphNode* EndNode;                                                     // 0x0068 (size: 0x8)

}; // Size: 0x70

class USCTGraphNode : public UObject
{
    class USCTGraph* Graph;                                                           // 0x0028 (size: 0x8)
    TArray<class USCTGraphNode*> ParentNodes;                                         // 0x0030 (size: 0x10)
    TArray<class USCTGraphNode*> ChildrenNodes;                                       // 0x0040 (size: 0x10)
    TMap<class USCTGraphNode*, class USCTGraphEdge*> Edges;                           // 0x0050 (size: 0x50)
    FName NodeTitle;                                                                  // 0x00A0 (size: 0x8)
    bool bEndPlanning;                                                                // 0x00A8 (size: 0x1)
    bool bCheckHitEnd;                                                                // 0x00A9 (size: 0x1)
    char padding_0[0x6];                                                              // 0x00AA (size: 0x6)
    TArray<FName> BeforeStanceNames;                                                  // 0x00B0 (size: 0x10)
    TArray<int32> BeforeStanceIndexes;                                                // 0x00C0 (size: 0x10)
    int32 AfterStanceIndex;                                                           // 0x00D0 (size: 0x4)

}; // Size: 0xD8

#endif
