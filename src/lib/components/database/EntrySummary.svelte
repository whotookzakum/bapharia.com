<script>
    import { userLocale } from "$lib/stores";
    export let data;
    export let moreDetails = false;

    let categoryText;
    let backgroundStyle = ""

    $: {
        categoryText = data.__typename;
        if (data.__typename === "Enemy") {
            categoryText = {
                ja_JP: "エネミー",
                en_US: "Enemy",
            };
        }
        if (data.__typename === "Item") {
            categoryText = {
                ja_JP: "アイテム",
                en_US: "Item",
            };
        }
        if (data.__typename === "Weapon") {
            categoryText = {
                ja_JP: "武器",
                en_US: "Weapon",
            };
        }
        if (data.__typename === "Skill") {
            if (data.skill_type <= 6) backgroundStyle = `background-image: url(${data.skillBackgroundImg})`
            categoryText = {
                ja_JP: "スキル",
                en_US: "Skill",
            };
        }
        if (data.__typename === "Gesture") {
            categoryText = {
                ja_JP: "ジェスチャー",
                en_US: "Emote",
            };
        }
        if (data.__typename === "StampSet") {
            categoryText = {
                ja_JP: "スタンプセット",
                en_US: "Stamp Set",
            };
        }
        if (data.__typename === "LiquidMemory") {
            categoryText = {
                ja_JP: "リキッドメモリ",
                en_US: "Liquid Memory",
            };
        }
        if (data.__typename === "Imagine") {
            categoryText = {
                ja_JP: "イマジン",
                en_US: "Echo",
            };
        }
        if (data.__typename === "Token") {
            categoryText = {
                ja_JP: "トークン",
                en_US: "Token",
            };
        }
        if (data.__typename === "GameMap") {
            categoryText = {
                ja_JP: "マップ",
                en_US: "Map",
            };
        }
        if (data.__typename === "Costume") {
            categoryText = {
                ja_JP: "コスチューム",
                en_US: "Costume",
            };
        }
    }
</script>

<div class="entry-summary flex" class:more-details={moreDetails}>
    <img
        src={data.thumb}
        class="entry-thumb"
        style={backgroundStyle}
        alt=""
        width="64"
        height="64"
    />
    <div class="grid g-25">
        {#if moreDetails}
            <h3>
                {data.name[$userLocale]}
                {#if data.item_level}
                    <i>(Lv. {data.item_level})</i>
                {/if}
                {#if data.imagine_max_level}
                    <i>(Lv. {data.imagine_max_level})</i>
                {/if}
                {#if data.weapon_max_level}
                    <i>(Lv. {data.weapon_max_level})</i>
                {/if}
            </h3>
            <div>
                <span class={`${data.__typename} box pill`}
                    >{data.category[$userLocale]}</span
                >
                <span class="entry-id box pill">ID: {data.id}</span>
            </div>
        {:else}
            <div class="skip-std">
                {data.name[$userLocale]}
            </div>
            <div>
                <span class={`${data.__typename} box pill`}
                    >{categoryText[$userLocale]}</span
                >
                <span class="entry-id box pill">ID: {data.id}</span>
            </div>
        {/if}
    </div>
    <div class="extra-icons flex">
        <!-- {#if data.classImg}
            <img src={data.classImg} alt="" width="32" height="32" />
        {/if} -->
        {#if data.elementImg && !data.elementImg.includes("Attribute_Empty")}
            <img
                src={data.elementImg}
                alt=""
                width="32"
                height="32"
            />
        {/if}
    </div>
</div>

<style lang="scss">
    .entry-summary {
        align-items: center;
        gap: 0.8rem;
        position: relative;
        max-inline-size: none;
        width: 100%;
        line-height: 1.4;
    }

    .entry-thumb {
        background-repeat: no-repeat;
    }

    .entry-summary.more-details {
        gap: 1rem;

        h3 {
            margin: 0;
            font-size: var(--step-0);
            max-inline-size: unset;
        }

        i {
            font-style: normal;
            font-size: var(--step--1);
            color: var(--accent);
        }
    }

    .extra-icons {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
