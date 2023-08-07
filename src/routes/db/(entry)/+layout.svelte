<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { userLocale } from "$lib/stores.js";
    import Icon from "@iconify/svelte";

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
            ja_JP: "無属性",
            en_US: "No Element",
        },
    };

    const IMAGINE_SLOTS = {
        "1": {
            ja_JP: "三葉",
            en_US: "Trileaf",
        },
        "2": {
            ja_JP: "山岳",
            en_US: "Summit", // Mountain Chain
        },
        "3": {
            ja_JP: "矢尻",
            en_US: "Arrowhead",
        },
        "4": {
            ja_JP: "風車",
            en_US: "Windmill",
        },
        "5": {
            ja_JP: "水瓶",
            en_US: "Vessel", // Water jug,
        },
    };

    const IMAGINE_SKILL_TYPE_ICONS = {
        attack: "mdi:sword-cross",
        support: "ri:shield-cross-fill",
        heal: "mdi:heart",
    };

    const LEVEL_TEXT = {
        ja_JP: "レベル",
        en_US: "Level",
    };
</script>

<MetaTags title="{data.name[$userLocale]} — Bapharia" />

<div class="entry-details grid">
    <header>
        <h1>{data.name[$userLocale]}</h1>
        <div class="header-extras flex">
            {#if data.item_level || data.weapon_max_level || data.imagine_max_level}
                <div class="grid g-25">
                    <span style="order: 2">{LEVEL_TEXT[$userLocale]}</span>
                    <span class="level">
                        {data.item_level ||
                            data.weapon_max_level ||
                            data.imagine_max_level}
                    </span>
                </div>
            {/if}

            {#if data.classImg}
                <hr />
                <div class="grid g-25">
                    <img src={data.classImg} alt="" width="46" height="46" />
                    <span>{CLASS_NAMES[data.equip_class][$userLocale]}</span>
                </div>
            {/if}
            {#if data.slotImg}
                <hr />
                <div class="grid g-25">
                    <img src={data.slotImg} alt="" width="46" height="46" />
                    <span
                        >{IMAGINE_SLOTS[
                            data.slotImg.split("Icon2_").pop().split(".png")[0]
                        ][$userLocale]}</span
                    >
                </div>
            {/if}
            {#if data.imagineSkill}
                <hr />
                <div class="grid g-25">
                    <div class={data.imagineSkill.type.en_US}>
                        <Icon
                            icon={IMAGINE_SKILL_TYPE_ICONS[
                                data.imagineSkill.type.en_US.toLowerCase()
                            ]}
                            width="24"
                            height="24"
                        />
                    </div>
                    <span>{data.imagineSkill.type[$userLocale]}</span>
                </div>
            {/if}
            {#if data.elementImg}
                <hr />
                <div class="grid g-25">
                    <img src={data.elementImg} alt="" width="46" height="46" />
                    <span>{ELEMENT_NAMES[data.attribute][$userLocale]}</span>
                </div>
            {/if}
        </div>
    </header>

    <article>
        <slot />
    </article>
</div>

<style lang="scss">
    .entry-details {
        width: 100%;
        max-width: 900px;
        margin: auto;
    }

    :global(.entry-details h2:not(:first-of-type)) {
        margin-top: 3rem;
    }

    header {
        display: flex; // grid or flex
        gap: 1rem;
        align-items: center;
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
            background: var(--surface2);
        }

        hr {
            width: 1px;
            height: 24px;
            margin: 1rem;
            background: var(--surface2);
            width: 0;
            margin: 0.5rem;
        }

        .grid {
            justify-items: center;
            font-size: var(--step--1);
        }
    }

    .level,
    .Attack,
    .Heal,
    .Support {
        border-radius: 100%;
        width: 46px;
        height: 46px;
        display: grid;
        place-content: center;
        font-weight: 800;
        font-size: var(--step-2);
        // border: 1px solid;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }

    .Attack {
        background: hsl(0, 95%, 25%);
        color: hsl(0, 15%, 85%);
        border-color: hsl(0, 65%, 35%);
    }

    .Heal {
        background: hsl(150, 95%, 20%);
        color: hsl(150, 15%, 80%);
        border-color: hsl(150, 65%, 30%);
    }

    .Support {
        background: hsl(200, 95%, 25%);
        color: hsl(200, 15%, 85%);
        border-color: hsl(200, 65%, 35%);
    }
</style>
