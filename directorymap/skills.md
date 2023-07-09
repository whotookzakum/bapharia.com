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