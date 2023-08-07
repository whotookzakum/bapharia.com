<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { userLocale } from "$lib/stores.js";
    import { GeneralInfo } from "../components";

    export let data;
    const CLASS_NAMES = {
        "6": {
            ja_JP: "ブラストアーチャー",
            en_US: "Blast Archer",
        },
        "7": {
            ja_JP: "ツインストライカー",
            en_US: "Twin Striker",
        },
        "11": {
            ja_JP: "スペルキャスター",
            en_US: "Spell Caster",
        },
        "12": {
            ja_JP: "イージスファイター",
            en_US: "Aegis Fighter",
        },
        "19": {
            ja_JP: "ヘビースマッシャー",
            en_US: "Heavy Smasher",
        },
        "20": {
            ja_JP: "ブリッツランサー",
            en_US: "Blitz Lancer",
        },
    };

    const ELEMENT_NAMES = {
        "3": {
            ja_JP: "火属性",
            en_US: "Fire",
        },
        "5": {
            ja_JP: "雷属性",
            en_US: "Thunder",
        },
        "4": {
            ja_JP: "氷属性",
            en_US: "Ice",
        },
        "2": {
            ja_JP: "土属性",
            en_US: "Earth",
        },
        "6": {
            ja_JP: "光属性",
            en_US: "Light",
        },
        "7": {
            ja_JP: "闇属性",
            en_US: "Dark",
        },
        "0": {
            ja_JP: "なし",
            en_US: "None",
        },
    };
</script>

<MetaTags title="{data.name[$userLocale]} — Bapharia" />

<div class="entry-details grid">
    <header>
        <h1>{data.name[$userLocale]}</h1>
        <div class="header-extras flex">
            <span class="level">
                Lv. {data.item_level || data.weapon_max_level}
            </span>
            {#if data.classImg}
                <hr />
                <div class="grid g-25">
                    <img src={data.classImg} alt="" width="36" height="36" />
                    <span>{CLASS_NAMES[data.equip_class][$userLocale]}</span>
                </div>
            {/if}
            {#if data.elementImg}
                <hr />
                <div class="grid g-25">
                    <img src={data.elementImg} alt="" width="36" height="36" />
                    <span>{ELEMENT_NAMES[data.attribute][$userLocale]}</span>
                </div>
            {/if}
        </div>
    </header>

    <article>
        <GeneralInfo {data} />
        <slot />
    </article>
</div>

<style lang="scss">
    .entry-details {
        max-width: 900px;
        margin: auto;
    }

    :global(.entry-details h2:not(:first-of-type)) {
        margin-top: 3rem;
    }

    header {
        display: flex; // grid or flex
        column-gap: 1rem;
        align-items: baseline;
        margin-top: 1rem;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media (max-width: 1150px) {
        header {
            margin-top: calc(1rem + 62px);
        }
    }

    .header-extras {
        align-items: center;

        .level {
            font-weight: 800;
            color: var(--accent);
            font-size: var(--step-5);
        }

        hr {
            width: 1px;
            height: 24px;
            margin: 1rem;
            background: var(--surface2);
        }

        .grid {
            justify-items: center;
            font-size: var(--step--1);
        }
    }
</style>
