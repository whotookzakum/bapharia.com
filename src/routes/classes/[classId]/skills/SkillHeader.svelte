<script>
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";
    import SkillCategoryTag from "./SkillCategoryTag.svelte";

    export let skill = {};

    const TAG_TEXT = {
        Fire: {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        Thunder: {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        Ice: {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        Earth: {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        Light: {
            ja_JP: "光属性",
            en_US: "Light",
        },
        Dark: {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        None: {
            ja_JP: "無属性",
            en_US: "No Element",
        },
        Attack: {
            ja_JP: "攻撃",
            en_US: "Attack",
        },
        AttackBuf: {
            ja_JP: "攻撃バフ",
            en_US: "Attack・Buff",
        },
        AttackDebuf: {
            ja_JP: "攻撃デバフ",
            en_US: "Attack・Debuff",
        },
        AttackHeal: {
            ja_JP: "攻撃回復",
            en_US: "Attack・Recovery",
        },
        Buf: {
            ja_JP: "バフ",
            en_US: "Buff",
        },
        BufDebuf: {
            ja_JP: "バフ・デバフ",
            en_US: "Buff・Debuff",
        },
        Debuf: {
            ja_JP: "デバフ",
            en_US: "Debuff",
        },
        Heal: {
            ja_JP: "回復",
            en_US: "Recovery",
        },
        HealBuf: {
            ja_JP: "回復バフ",
            en_US: "Recovery・Buff",
        },
        HealDebuf: {
            ja_JP: "回復デバフ",
            en_US: "Recovery・Debuff",
        },
    };
</script>

<header class="flex box">
    <div class="one flex g-50">
        <SkillIcon {skill} />
        <div>
            <h3
                class="toc-exclude"
                id={skill.name.en_US
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace(" ", "-")}
            >
                {skill.name[$userLocale]}
            </h3>
            <div>
                {#if skill.client_data?.ElementType && skill.client_data?.ElementType !== "None"}
                    <SkillCategoryTag tag={skill.client_data.ElementType} styleless /> •
                {/if}
                {#if skill.client_data?.BgType}
                    <SkillCategoryTag tag={skill.client_data.BgType} styleless />
                {/if}
            </div>
        </div>
    </div>
    {#if skill.client_data?.Properties.RecastTime}
        <div class="two">
            <b>Cooldown</b>
            <div>{skill.client_data.Properties.RecastTime} seconds</div>
        </div>
    {/if}
</header>

<style lang="scss">
    header {
        flex-wrap: wrap;
        gap: 1rem 2rem;
        align-items: center;
        grid-template-columns: minmax(30ch, 1fr) minmax(30ch, 1fr);
    }

    .one {
        align-items: center;
        flex: 0 1 30ch;
        gap: 1rem;
    }

    .two {
        flex: 1 1 10ch;
    }

    h3 {
        margin: 0;
        line-height: 1.4;
        font-size: clamp(1.2rem, calc(0.74rem + 0.8vw), 1.4rem);
    }
</style>
