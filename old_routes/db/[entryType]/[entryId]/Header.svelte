<script>
    import Tag from "$lib/components/Tag.svelte";
    import { userLocale } from "$lib/stores.js";
    import { DateTime } from "luxon";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import TYPES_TEXT from "$scripts/utils/categories.json";

    export let data;

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

    const LEVEL_TEXT = {
        ja_JP: "レベル",
        en_US: "Level",
    };

    // TODO: add support for changing timezones
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

        {#if data.element}
            <Tag>
                <img
                    src="/UI/Icon/Attribute/UI_IconAttribute_{data.element}.png"
                    alt=""
                    width="24"
                    height="24"
                    style="flex: unset"
                />
                <span>{TYPES_TEXT[$userLocale].Element[data.element]}</span>
            </Tag>
        {/if}

        {#if data.equip_class || data.class_type}
            <Tag>
                <img
                    src="/UI/Icon/Class/UI_IconClass_{(
                        data.equip_class || data.class_type
                    )
                        .toString()
                        .padStart(2, '0')}.png"
                    alt=""
                    width="24"
                    height="24"
                />
                <span style="margin-right: 0rem">
                    {TYPES_TEXT[$userLocale].Class[
                        data.equip_class || data.class_type
                    ]}
                </span>
            </Tag>
        {/if}

        <!-- {#if data.slotImg}
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
            <span>{data.imagineSkill.type[$userLocale]}</span>
        {/if} -->
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

    @media (prefers-reduced-motion: no-preference) {
        @supports (animation-timeline: scroll()) {
            h1 {
                font-size: var(--step-6);
                animation: shrink-text linear both;
                animation-timeline: scroll();
                animation-range: 100px 300px;
            }
        }
    }

    @keyframes shrink-text {
        to {
            font-size: var(--step-5);
        }
    }
</style>
