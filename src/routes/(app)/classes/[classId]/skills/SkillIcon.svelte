<script>
    export let skillType = 0;
    export let elementImg = "";
    export let skillBackgroundImg = "";
    export let skillIcon = "";
</script>

<div
    class="skill-icon-wrapper"
    class:tactical={skillType <= 5 && skillType >= 2}
    class:basic={skillType === 0}
    class:subaction={skillType === 1}
    class:ult={skillType === 6}
    class:passive-square={skillType === 8}
    class:passive-pentagon={skillType === 9}
>
    <img
        class="skill-icon"
        src={skillIcon}
        alt=""
        style:background-image="url({skillType !== 8 && skillType !== 9 ? skillBackgroundImg : ""})"
        width="48"
        height="48"
    />
    {#if !elementImg.includes("Empty")}
        <img
            class="element-icon"
            src={elementImg}
            alt=""
            width="24"
            height="24"
        />
    {/if}
</div>

<style lang="scss">
    .skill-icon-wrapper {
        position: relative;
        background-size: cover;
        width: 88px;
        height: 88px;
        margin-left: -1rem;
    }

    .skill-icon {
        background-size: cover;
        position: absolute;
        height: auto;
    }

    .element-icon {
        position: absolute;
        bottom: 8px;
        left: 8px;
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
    }

    .passive-square .skill-icon {
        bottom: 18px;
        left: 18px;
        width: 52px;
    }

    .passive-pentagon {
        background-image: url("/UI/SkillTree/UI_SkillTree_IconBG_PassiveAlways_normal.png");
    }

    .passive-pentagon .skill-icon {
        bottom: 19px;
        left: 17px;
        width: 54px;
    }
</style>
