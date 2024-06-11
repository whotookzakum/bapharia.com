<script>
    import Tag from "$lib/components/Tag.svelte";
    import { userLocale } from "$lib/stores.js";
    import Icon from "@iconify/svelte";
    import { DateTime } from "luxon";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte"

    export let data;

    const CLASS_NAMES = {
        "0": {
            ja_JP: "全クラス",
            en_US: "All Classes",
        },
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
        Empty: {
            ja_JP: "無属性",
            en_US: "No Element",
        },
    };

    const ELEMENT_NAMES_SKILL = {
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

    function getSeasonDate(date, format = "DATE_SHORT") {
        return DateTime.fromISO(date.replace(" ", "T"), {
            zone: "Asia/Tokyo",
        }).toLocaleString(DateTime[format]);
    }
</script>

<header>
    <h1>{data.text.name}</h1>
    <div class="header-extras flex gap-2">
        {#if data.start_date && data.end_date}
            <Tooltip inline>
                <Tag style="padding-left: 0">
                    From {getSeasonDate(data.start_date)}
                </Tag>
                <svelte:fragment slot="tooltip">
                    {getSeasonDate(data.start_date, "DATETIME_MED")} JST
                </svelte:fragment>
            </Tooltip>
            <Tooltip inline>
                <Tag>
                    To {getSeasonDate(data.end_date)}
                </Tag>
                <svelte:fragment slot="tooltip">
                    {getSeasonDate(data.end_date, "DATETIME_MED")} JST
                </svelte:fragment>
            </Tooltip>
        {:else}
            <Tag style="padding-left: 0;">
                {#if data.item_level || data.weapon_max_level || data.imagine_max_level}
                    {LEVEL_TEXT[$userLocale]}
                    {data.item_level ||
                        data.weapon_max_level ||
                        data.imagine_max_level}
                {/if}
                {data.text.category}
            </Tag>
        {/if}

        {#if data.classImg}
            <Tag>
                <img src={data.classImg} alt="" width="24" height="24" />
                <span style="margin-right: 0rem">
                    {CLASS_NAMES[data.equip_class || data.class_type][
                        $userLocale
                    ]}
                </span>
            </Tag>
        {/if}

        {#if data.slotImg}
            <hr />
            <div class="grid gap-1">
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
            <div class="grid gap-1">
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
            <Tag>
                <img src={data.elementImg} alt="" width="24" height="24" />
                {#if data.entryTypes[0] === "Skill"}
                    <span
                        >{ELEMENT_NAMES_SKILL[
                            data.elementImg
                                .replace(
                                    "/UI/Icon/Attribute/UI_IconAttribute_",
                                    "",
                                )
                                .replace(".png", "")
                        ][$userLocale]}</span
                    >
                {:else}
                    <span>{ELEMENT_NAMES[data.attribute][$userLocale]}</span>
                {/if}
            </Tag>
        {/if}
    </div>
</header>

<style lang="scss">
    header {
        position: sticky;
        top: 0;
        background: var(--bg);
        padding-bottom: 0.25rem;
        box-shadow: 0 0 10px 14px var(--bg);
        z-index: 3;
    }

    h1 {
        margin-bottom: -0.5rem;
        padding-bottom: 0.75rem;
        line-height: 1.3;
        font-size: var(--step-5);
    }

    .category-name {
        font-size: var(--step-2);
        color: var(--text2);
    }

    .header-extras {
        .level {
            font-weight: 800;
            color: var(--accent1);
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
