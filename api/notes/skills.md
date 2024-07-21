# Skill-related files

## Client
- Skill ID to Type mapping: 
- Skill ID to Element mapping:

`/Content/Blueprints/Player/PassiveSkill/Blaster`
`/Content/Blueprints/Player/PassiveSkill/Common`
`/Content/Blueprints/Player/Skill/Blaster`
`/Content/Blueprints/Magic/P006_Blaster`
`/Content/Blueprints/Manager/AttackMasterDataModifier`

### Variables
`Type`
The mapping for these to each skill might exist on the client
> A: red
- A: attack
- A_B: attack-buff
- A_D: attack-debuff
- A_R: attack-recovery
> B: purple
- B: buff
- B_D: buff-debuff
> D: green
- D: debuff
> R: blue
- R: recovery
- R_B: recovery-buff
- R_D: recovery-debuff

### Images
- Class Icons: `/Content/UI/Icon/Class(L)(XL)`
- Skill icons, Skill Type backgrounds, Elements: `/Content/UI/Icon/PlayerSkill`
- Skill book icons: `/Content/UI/Icon/PlayerSkillL`
- Ability icons: `/Content/UI/Icon/PlayerAbility(L)`
- Element icons: `/Content/UI/Icon/Attribute`

## Server
- Skill data: `/skill_data.json`

`/master_attack_modifier_data.json` ??
`/attack_data.json`
`/attack_override_data.json`

### Variables
`class_type`
- 0: all
- 6: blast archer
- 7: twin striker
- 11: spell caster
- 12: aegis fighter
- 19: heavy smasher
- 20: blitz lancer

`skill_type`
- 0: base action (left click)
- 1: class action (right click)
- 2: tactical skill
- 3: tactical skill
- 4: tactical skill
- 5: tactical skill (buff)
- 6: ultimate
- 7: dodge
- 8: class ability
- 9: base ability (all classes)
- 10: aerial attack
- 11: ???
- 12: springboard jump
- 13: ukemi (defensive roll, press CTRL when knocked down to get up faster)

`ability_type`

enum class EAttackAttributeType {
    AttackAttributeType_None = 0,
    AttackAttributeType_Slash = 1,
    AttackAttributeType_Blow = 2,
    AttackAttributeType_Thrust = 3,
    AttackAttributeType_MAX = 4,
};

enum class EAttackHitType {
    AttackHitType_None = 0,
    AttackHitType_Slash = 1,
    AttackHitType_Blow = 2,
    AttackHitType_Thrust = 3,
    AttackHitType_Claw = 4,
    AttackHitType_Fang = 5,
    AttackHitType_BH_Blow = 6,
    AttackHitType_MAX = 7,
};


enum class ESBPlayerSkillActionType {
    None = 0,
    MainAction = 1,
    SubAction = 2,
    AerialAction = 3,
    TacticalSkill = 4,
    SpecialSkill = 5,
    DodgeAction = 6,
    ImagineArts = 7,
    EnemyStepJump = 8,
    UkemiAction = 9,
    SkillCancelStep = 10,
    Dummy_1 = 11,
    Dummy_2 = 12,
    ESBPlayerSkillActionType_MAX = 13,
};

enum class ESBSkillType {
    Main = 0,
    Sub = 1,
    Skill1 = 2,
    Skill2 = 3,
    Skill3 = 4,
    Skill4 = 5,
    Special = 6,
    Dodge = 7,
    Pasive1 = 8,
    Pasive2 = 9,
    Aerial = 10,
    ActiveAbility = 11,
    EnemyStepJump = 12,
    Ukemi = 13,
    SkillCancelStep = 14,
    Dummy_1 = 15,
    Dummy_2 = 16,
    Skill5 = 17,
    Skill6 = 18,
    Skill7 = 19,
    Skill8 = 20,
    Max = 21,
};

enum class ESkillTreeAbilityType {
    None = 0,
    Base = 1,
    Alpha = 2,
    Beta = 3,
    Camma = 4,
    MAX = 5,
};

enum class ESBSkillAbilityType {
    None = 0,
    Alpha = 1,
    Beta = 2,
    Camma = 3,
    ClassCommon = 100,
    ESBSkillAbilityType_MAX = 101,
};