<script>
    export let skill;
</script>

<div
    class="skill-icon-wrapper skill-type-{skill.skill_type}"
    style:background-image="url('{skill.assets?.frameIcon ?? ""}')"
>
    <img
        class="skill-icon"
        src={skill.assets.icon}
        alt=""
        style:background-image={skill.assets.bgIcon ? `url('${skill.assets.bgIcon}')` : ""}
        width="48"
        height="48"
    />
    {#if skill.assets.elementIcon}
        <img
            class="element-icon"
            src={skill.assets.elementIcon}
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
        // main circle is 64x64, so -24px (1.5rem) total, or 0.75rem on each side
        margin: -0.75rem;
        // margin-right: -1.25rem;
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

    :where(.skill-type-0, .skill-type-1) .skill-icon {
        bottom: 22px;
        left: 21px;
        width: 44px;
    }

    :where(
            .skill-type-2,
            .skill-type-3,
            .skill-type-4,
            .skill-type-5,
            .skill-type-6
        )
        .skill-icon {
        bottom: 15px;
        left: 20px;
    }

    .skill-type-8 .skill-icon {
        bottom: 18px;
        left: 18px;
        width: 52px;
    }

    .skill-type-9 .skill-icon {
        bottom: 19px;
        left: 17px;
        width: 54px;
    }
</style>
