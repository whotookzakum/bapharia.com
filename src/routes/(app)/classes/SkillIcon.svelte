<script>
    export let skillType = "Empty";
    export let skillCategory = 0;
    export let classType = 6;
    export let skillId = 0;
    export let elementId = "";

    function getSkillIconUrl() {
        switch (skillCategory) {
            case 0: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Main.png`;
            case 1: // && skill.is_default_skill
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Sub.png`;
            case 2:
            case 3:
            case 4:
            case 5:
                return `/UI/Icon/PlayerSkill/Class${classType}/UI_PlayerSkill_${skillId}.png`;
            case 6:
                return `/UI/Icon/PlayerSkill/Common/UI_PlayerSkill_Special.png`;
            case 8:
                return `/UI/Icon/PlayerAbility/Class/Class${classType}/UI_PlayerAbilityC_${skillId}.png`;
            case 9:
                return `/UI/Icon/PlayerAbility/Base/Class${classType}/UI_PlayerAbilityB_${skillId}.png`;
            case 7: // Dodge
            case 10: // Aerial attack
            case 11: // ???
            case 12: // Springboard jump
            case 13: // Ukemi
            default:
                return `/UI/Icon/Class/UI_IconClass_Nodata.png`;
        }
    }
</script>

<div class="skill-icon-wrapper">
    <img
        class="skill-icon"
        src={getSkillIconUrl()}
        alt=""
        style:background-image="url('/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_{skillType}.png')"
        width="48"
        height="48"
    />
    {#if elementId}
        <img
            class="element-icon"
            src="/UI/Icon/Attribute/UI_IconAttribute_{elementId}.png"
            alt=""
            width="24"
            height="24"
        />
    {/if}
</div>

<style lang="scss">
    .skill-icon-wrapper {
        position: relative;
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_Tactical_normal.png");
        background-size: cover;
        width: 88px;
        height: 88px;
    }

    .skill-icon {
        background-size: cover;
        position: absolute;
        bottom: 15px;
        left: 20px;
    }

    .element-icon {
        position: absolute;
        bottom: 8px;
        left: 8px;
    }
</style>