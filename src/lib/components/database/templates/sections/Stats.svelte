<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    export let values;
    export let battleScore = null;
    
    const texts = {
        skillPower: {
            ja_JP: "スキル効果値",
            en_US: "Skill Power",
        },
        battleScore: {
            ja_JP: "バトルスコア",
            en_US: "Battle Score",
        },
        atk: {
            ja_JP: "攻撃力",
            en_US: "Attack",
        },
        elementAtk: {
            ja_JP: "属性攻撃力",
            en_US: "Elemental Power",
        },
        def: {
            ja_JP: "防御力",
            en_US: "Defense",
        },
        critDmg: {
            ja_JP: "会心力",
            en_US: "Critical Power",
        },
        critRate: {
            ja_JP: "会心率",
            en_US: "",
        },
        hp: {
            ja_JP: "最大HP",
            en_US: "Max HP",
        },
        str: {
            ja_JP: "筋力",
            en_US: "Strength",
        },
        vit: {
            ja_JP: "耐久力",
            en_US: "Resilience",
        },
        dex: {
            ja_JP: "器用さ",
            en_US: "Dexterity",
        },
        mnd: {
            ja_JP: "精神力",
            en_US: "Spirit",
        },
        int: {
            ja_JP: "知力",
            en_US: "Intellect",
        },
        stamina: {
            ja_JP: "最大ST",
            en_US: "Max ST",
        },
    };
</script>

<h4>Stats</h4>
<dl>
    {#if values.attribute_value}
        <div class="row">
            <dt>{texts.elementAtk[$userLocale]}</dt>
            <dd>{values.attribute_value}</dd>
        </div>
    {/if}
    {#if values.skill}
        <div class="row">
            <dt>{texts.elementAtk[$userLocale]}</dt>
            <dd>83293</dd>
        </div>
    {/if}
    {#if values.skill}
        <div class="row">
            <dt>{texts.skillPower[$userLocale]}</dt>
            <dd>{values.skill}</dd>
        </div>
    {/if}
    {#if battleScore}
        <div class="row">
            <dt>{texts.battleScore[$userLocale]}</dt>
            <dd>{battleScore}</dd>
        </div>
        <hr/>
    {/if}
    {#if values.offensive_power}
        <div class="row">
            <dt>{texts.atk[$userLocale]}</dt>
            <dd>{values.offensive_power}</dd>
        </div>
    {/if}
    {#if values.defensive_power}
        <div class="row">
            <dt>{texts.def[$userLocale]}</dt>
            <dd>{values.defensive_power}</dd>
        </div>
    {/if}
    {#if values.critical_power}
        <div class="row">
            <dt>{texts.critDmg[$userLocale]}</dt>
            <dd>{values.critical_power}%</dd>
        </div>
    {/if}
    {#if values.critical_chance}
        <div class="row">
            <dt>{texts.critRate[$userLocale]}</dt>
            <dd>{values.critical_chance}</dd>
        </div>
    {/if}
    {#if values.max_hp}
        <div class="row">
            <dt>{texts.hp[$userLocale]}</dt>
            <dd>{values.max_hp}</dd>
        </div>
    {/if}
    {#if values.str}
        <div class="row">
            <dt>{texts.str[$userLocale]}</dt>
            <dd>{values.str}</dd>
        </div>
    {/if}
    {#if values.vit}
        <div class="row">
            <dt>{texts.vit[$userLocale]}</dt>
            <dd>{values.vit}</dd>
        </div>
    {/if}
    {#if values.dex}
        <div class="row">
            <dt>{texts.dex[$userLocale]}</dt>
            <dd>{values.dex}</dd>
        </div>
    {/if}
    {#if values.mnd}
        <div class="row">
            <dt>{texts.mnd[$userLocale]}</dt>
            <dd>{values.mnd}</dd>
        </div>
    {/if}
    {#if values.int}
        <div class="row">
            <dt>{texts.int[$userLocale]}</dt>
            <dd>{values.int}</dd>
        </div>
    {/if}
    {#if values.stamina}
        <div class="row">
            <dt>{texts.stamina[$userLocale]}</dt>
            <dd>{values.stamina}</dd>
        </div>
    {/if}
    
</dl>

<style lang="scss">
    dl {
        // max-inline-size: none;
        gap: 0.25rem;
        margin: 0.25rem 0;
        padding: 0 1rem;
        border-left: 6px solid var(--surface3);
    }

    .row {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
    }

    dt {
        font-weight: normal;
    }
</style>
