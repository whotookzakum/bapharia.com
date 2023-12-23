<script>
    import ElementIcon from "./ElementIcon.svelte";

    export let skill;
    const { skill_type, client_data, class_type, id } = skill;

    let typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_Empty.png";
    switch (client_data?.BgType) {
        case "Attack":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A.png";
            break;
        case "AttackBuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_B.png";
            break;
        case "AttackDebuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_D.png";
            break;
        case "AttackHeal":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_A_R.png";
            break;
        case "Buf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B.png";
            break;
        case "BufDebuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_B_D.png";
            break;
        case "Debuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_D.png";
            break;
        case "Heal":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R.png";
            break;
        case "HealBuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_B.png";
            break;
        case "HealDebuf":
            typeBg = "/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_R_D.png";
            break;
        default:
            break;
    }
    const applyTypeBg = skill_type < 8 && `url(${typeBg})`;

    let className = "";
    let iconPath = "";
    switch (skill_type) {
        case 0:
            className = "basic";
            iconPath = "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png";
            break;
        case 1:
            className = "subaction";
            iconPath = "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png";
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            className = "tactical";
            iconPath = `/UI/Icon/PlayerSkill/Class${class_type}/UI_PlayerSkill_${id}.png`;
            break;
        case 6:
            className = "ult";
            iconPath = "/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png";
            break;
        case 8:
            className = "passive-square";
            iconPath = `/UI/Icon/PlayerAbility/Class/Class${class_type}/UI_PlayerAbilityC_${id}.png`;
            break;
        case 9:
            className = "passive-pentagon";
            iconPath = `/UI/Icon/PlayerAbility/Base/Class${class_type}/UI_PlayerAbilityB_${id}.png`;
            break;
    }
</script>

<div class="skill-icon-wrapper {className}">
    <img
        class="skill-icon"
        src={iconPath}
        alt=""
        style:background-image={applyTypeBg}
        width="48"
        height="48"
    />
    <ElementIcon
        elementName={client_data?.ElementType}
        size="24"
        style="position: absolute; bottom: 8px; left: 8px;"
    />
</div>

<style lang="scss">
    .skill-icon-wrapper {
        position: relative;
        background-size: cover;
        width: 88px;
        height: 88px;
        // main circle is 64x64, so -24px (1.5rem) total, or 0.75rem on each side
        margin: -0.75rem;
        // margin-right: -1.25rem;
    }

    .skill-icon {
        background-size: cover;
        position: absolute;
        height: auto;
    }

    .tactical {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_Tactical_normal.png");
    }

    .ult {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_SP_normal.png");
    }

    :where(.tactical, .ult) .skill-icon {
        bottom: 15px;
        left: 20px;
    }

    .basic {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_Main_normal.png");
    }

    .subaction {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_Sub_normal.png");
    }

    :where(.basic, .subaction) .skill-icon {
        bottom: 22px;
        left: 21px;
        width: 44px;
    }

    .passive-square {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_Passive_normal.png");

        .skill-icon {
            bottom: 18px;
            left: 18px;
            width: 52px;
        }
    }

    .passive-pentagon {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_PassiveAlways_normal.png");

        .skill-icon {
            bottom: 19px;
            left: 17px;
            width: 54px;
        }
    }
</style>
