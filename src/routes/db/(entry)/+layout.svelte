<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Tag from "$lib/components/Tag.svelte";
    import { userLocale } from "$lib/stores.js";
    import Icon from "@iconify/svelte";

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

    // TODO: Back button should take you "BACK" if your previous page was the DB, so your search params will still be applied; if you came from another page, it will take you to /db

    $: metaImg = data.thumb
        ?.replace("Icon/Item", "Icon/ItemL")
        .replace("Icon/Weapon", "Icon/WeaponL")
        .replace("Imagine/Battle", "Imagine/BattleL")
        .replace("Imagine/Picture", "Imagine/PictureL")
        // .replace("/Costume", "/CostumeL")
        .replace("Icon/Token", "Icon/TokenL");
</script>

<MetaTags
    title="{data.name[$userLocale]} — Bapharia"
    description={data.desc
        ? data.desc[$userLocale]
        : "No description available."}
    image={metaImg}
/>

<div class="entry-details grid box">
    <!-- <a href="/db" class="back-button btn btn-fadein">🡠 Back to Search</a> -->
    <header>
        <span class="category-name"></span>
        <h1>{data.name[$userLocale]}</h1>
        <!-- <hr style="background: var(--surface1)"> -->
        <div class="header-extras flex g-50">
            <Tag style="padding-left: 0;">
                {#if data.item_level || data.weapon_max_level || data.imagine_max_level}
                    {LEVEL_TEXT[$userLocale]}
                    {data.item_level ||
                        data.weapon_max_level ||
                        data.imagine_max_level}
                {/if}
                {data.subcategoryName[$userLocale]}
            </Tag>

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
                        <span>{ELEMENT_NAMES[data.attribute][$userLocale]}</span
                        >
                    {/if}
                </Tag>
            {/if}
        </div>
    </header>

    <article>
        <slot />
    </article>
</div>

<style lang="scss">
    .back-button {
        font-size: var(--step-0);
        color: var(--text2);
        // border-radius: 5px;

        &:where(:hover, :focus-visible) {
            color: var(--text1);
        }
    }

    @media (max-width: 1150px) {
        .entry-details {
            margin-top: calc(1rem + 62px);
        }
    }

    :global(.entry-details h2:not(:first-of-type)) {
        margin-top: 3rem;
    }

    h1 {
        margin-bottom: -0.5rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid var(--surface1);
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
