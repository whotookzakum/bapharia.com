<script>
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";

    export let skill = {};

    $: elementId = skill.elementImg.replace("/UI/Icon/Attribute/UI_IconAttribute_", "").replace(".png", "")
    $: skillTypeId = skill.skillBackgroundImg.replace("/UI/Icon/PlayerSkill/Type/UI_PlayerSkillType_", "").replace(".png", "")

    const ELEMENT_NAMES = {
        "1": {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        "2": {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        "3": {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        "4": {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        "5": {
            ja_JP: "光属性",
            en_US: "Light",
        },
        "6": {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        "0": {
            ja_JP: "無属性",
            en_US: "No Element",
        },
        Empty: {
            ja_JP: "無属性",
            en_US: "No Element",
        },
    };

    const SKILL_TYPE_NAMES = {
        A: {
            ja_JP: "",
            en_US: "Attack"
        },
        A_B: {
            ja_JP: "",
            en_US: "Attack / Buff"
        },
        A_D: {
            ja_JP: "",
            en_US: "Attack / Debuff"
        },
        A_R: {
            ja_JP: "",
            en_US: "Attack / Recovery"
        },
        B: {
            ja_JP: "",
            en_US: "Buff"
        },
        B_D: {
            ja_JP: "",
            en_US: "Buff / Debuff"
        },
        D: {
            ja_JP: "",
            en_US: "Debuff"
        },
        R: {
            ja_JP: "",
            en_US: "Recovery"
        },
        R_B: {
            ja_JP: "",
            en_US: "Recovery / Buff"
        },
        R_D: {
            ja_JP: "",
            en_US: "Recovery / Debuff"
        },
    }
</script>

<header class="flex box" style="width: fit-conten">
    <div class="one flex g-50">
        <SkillIcon
            skillType={skill.skill_type}
            skillIcon={skill.thumb}
            elementImg={skill.elementImg}
            skillBackgroundImg={skill.skillBackgroundImg}
        />
        <div>
            <h3 class="toc-exclude">
                {skill.name[$userLocale]}
            </h3>
            <div>
                {#if elementId !== "Empty"}
                    {ELEMENT_NAMES[elementId][$userLocale]} •
                {/if}
                {#if skillTypeId !== "Empty"}
                    {SKILL_TYPE_NAMES[skillTypeId][$userLocale]}
                {/if}
            </div>
        </div>
    </div>
    <div class="two">
        <b>Cooldown</b>
        <div>-</div>
    </div>
    <div class="three">
        <b>Buffs & Debuffs</b>
        <div>-</div>
    </div>
</header>

<style lang="scss">
    header {
        flex-wrap: wrap;
        gap: 1rem 2rem;
        align-items: center;
        grid-template-columns: minmax(30ch, 1fr) minmax(30ch, 1fr) minmax(30ch, 1fr);
    }

    .one {
        align-items: center;
        flex: 0 1 30ch;
        gap: 1rem;
    }

    .two {
        flex: 1 1 10ch;
    }

    .three {
        flex: 1 1 15ch;
    }

    h3 {
        margin: 0;
        line-height: 1.4;
        font-size: clamp(1.2rem, calc(0.74rem + 0.80vw), 1.4rem);
    }
</style>
