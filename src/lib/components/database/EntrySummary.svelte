<script>
    import { userLocale } from "$lib/stores";
    export let data;
    export let moreDetails = false;

    function getAttributeImg(value) {
        switch (value) {
            case 6:
                return 5;
            case 5:
                return 2;
            case 4:
                return 3;
            case 3:
                return 1;
            case 2:
                return 4;
            case 7:
                return 6;
        }
    }

    let categoryText = data.__typename;
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
</script>

<div class="entry-summary flex" class:more-details={moreDetails}>
    <img src={data.thumb} alt="" width="64" height="64" />
    <div class="grid g-25">
        {#if moreDetails}
            <h3>
                {data.name[$userLocale]}
                {#if data.item_level}
                    <span>(Lv. {data.item_level})</span>
                {/if}
                {#if data.imagine_max_level}
                    <span>(Lv. {data.imagine_max_level})</span>
                {/if}
                {#if data.weapon_max_level}
                    <span>(Lv. {data.weapon_max_level})</span>
                {/if}
            </h3>
            <div>
                <span class={`${data.__typename} box pill`}>{data.category[$userLocale]}</span>
                <span class="entry-id box pill">ID: {data.id}</span>
            </div>
        {:else}
            <div class="skip-std">
                {data.name[$userLocale]}
            </div>
            <div>
                <span class={`${data.__typename} box pill`}>{categoryText[$userLocale]}</span>
                <span class="entry-id box pill">ID: {data.id}</span>
            </div>
        {/if}
    </div>
    <div class="extra-icons flex">
        <!-- {#if data.classImg}
            <img src={data.classImg} alt="" width="32" height="32" />
        {/if} -->
        {#if data.attribute > 0}
            <img
                src={`/images/elements/UI_IconAttribute_${getAttributeImg(
                    data.attribute
                )}.png`}
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

    .entry-summary.more-details {
        gap: 1rem;

        h3 {
            margin: 0;
        }
    }

    .extra-icons {
        position: absolute;
        opacity: 0.4;
        right: 0;
        top: 0;
    }

    .pill {
        padding: 0.2rem 0.5rem;
        margin-block: 0.2rem;
        width: fit-content;
        font-size: var(--step--2);
        border-radius: 1rem;
        --s: 70%;
        --l: 18%;
        background-color: hsl(var(--h), var(--s), var(--l));
        color: hsl(var(--h), calc(var(--s) - 30%), calc(var(--l) + 70%));
        border-color: hsl(var(--h), calc(var(--s) - 20%), calc(var(--l) + 10%));
        --surface-shadow: rgba(0, 0, 0, 0.212);
        white-space: nowrap;
    }

    .entry-id {
        --h: 0;
        --s: 0%;
    }

    .Enemy {
        --h: 0;
    }

    .Token {
        --h: 30;
    }

    .Skill {
        --h: 60;
    }

    .Item {
        --h: 120;
    }

    .StampSet {
        --h: 120;
    }

    .Imagine {
        --h: 150;
    }

    .Weapon {
        --h: 180;
    }

    .GameMap {
        --h: 210;
    }

    .LiquidMemory {
        --h: 240;
    }

    .Costume {
        --h: 270;
    }

    .Gesture {
        --h: 300;
    }
</style>
