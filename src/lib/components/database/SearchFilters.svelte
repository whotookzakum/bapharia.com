<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    let detailsOpen = false;

    const filters = {
        level: {
            min: 1,
            max: 100,
        },
        adventurer_rank: {
            min: 1,
            max: 30, // arbitrary
        },
        categories: [
            {
                typename: "Item",
                text: {
                    ja_JP: "アイテム",
                    en_US: "Items",
                },
                checked: true,
            },
            {
                typename: "Weapon",
                text: {
                    ja_JP: "武器",
                    en_US: "Weapons",
                },
                checked: true,
            },
            {
                typename: "Imagine",
                text: {
                    ja_JP: "イマジン",
                    en_US: "Echoes",
                },
                checked: true,
            },
            {
                typename: "Enemy",
                text: {
                    ja_JP: "エネミー",
                    en_US: "Enemies",
                },
                checked: true,
            },
            {
                typename: "Skill",
                text: {
                    ja_JP: "スキル",
                    en_US: "Skills",
                },
                checked: true,
            },
            {
                typename: "Token",
                text: {
                    ja_JP: "トークン",
                    en_US: "Tokens",
                },
                checked: true,
            },
            {
                typename: "GameMap",
                text: {
                    ja_JP: "マップ",
                    en_US: "Maps",
                },
                checked: true,
            },
            {
                typename: "LiquidMemory",
                text: {
                    ja_JP: "リキッドメモリ",
                    en_US: "Liquid Memories",
                },
                checked: true,
            },
            {
                typename: "Costume",
                text: {
                    ja_JP: "コスチューム",
                    en_US: "Costumes",
                },
                checked: true,
            },
            {
                typename: "Gesture",
                text: {
                    ja_JP: "ジェスチャー",
                    en_US: "Gestures",
                },
                checked: true,
            },
            {
                typename: "StampSet",
                text: {
                    ja_JP: "スタンプセット",
                    en_US: "Stamp Sets",
                },
                checked: true,
            },
        ],
    };
</script>

<details class="box" bind:open={detailsOpen}>
    <summary class="details-expander">
        <span>Filters</span>
        <Icon
            icon={detailsOpen ? "mdi:chevron-up" : "mdi:chevron-down"}
            width="18"
            height="18"
            style="margin-bottom: -1px"
        />
    </summary>
    <div class="inner-content">
        <section>
            <div class="skip-std">Categories</div>
            <div class="categories">
                {#each filters.categories as category}
                    <label>
                        <input
                            type="checkbox"
                            class="visually-hidden"
                            bind:checked={category.checked}
                        />
                        <span class={`pill box ${category.typename}`}
                            >{category.text[$userLocale]}</span
                        >
                    </label>
                {/each}
            </div>
        </section>

        <section>
            <div class="skip-std">Level</div>
            <div class="min-max-inputs">
                <label
                    class="component-label"
                    style="grid-area: tl"
                    for="level-min-input"
                >
                    Min
                </label>
                <label class="input-level-wrapper" style="grid-area: bl">
                    <span class="visually-hidden">Level</span>
                    <span aria-hidden="true">Lv.</span>
                    <input
                        id="level-min-input"
                        class="input-level"
                        type="number"
                        bind:value={filters.level.min}
                        max="100"
                        min="1"
                    />
                </label>
                <div class="tilde" aria-hidden="true">~</div>
                <label
                    for="level-max-input"
                    class="component-label"
                    style="grid-area: tr">Max</label
                >
                <label class="input-level-wrapper" style="grid-area: br">
                    <span class="visually-hidden">Level</span>
                    <span aria-hidden="true">Lv.</span>
                    <input
                        id="level-max-input"
                        class="input-level"
                        type="number"
                        bind:value={filters.level.max}
                        max="100"
                        min="1"
                    />
                </label>
            </div>
        </section>

        <section>
            <div class="skip-std">Adventurer Rank</div>
            <div class="min-max-inputs">
                <label
                    class="component-label"
                    style="grid-area: tl"
                    for="ar-min-input"
                >
                    Min
                </label>
                <label class="input-level-wrapper" style="grid-area: bl">
                    <span class="visually-hidden">Adventurer Rank</span>
                    <span aria-hidden="true">AR</span>
                    <input
                        id="ar-min-input"
                        class="input-level"
                        type="number"
                        bind:value={filters.adventurer_rank.min}
                        max="29"
                        min="1"
                    />
                </label>
                <div class="tilde" aria-hidden="true">~</div>
                <label
                    for="ar-max-input"
                    class="component-label"
                    style="grid-area: tr">Max</label
                >
                <label class="input-level-wrapper" style="grid-area: br">
                    <span class="visually-hidden">Adventurer Rank</span>
                    <span aria-hidden="true">AR</span>
                    <input
                        id="ar-max-input"
                        class="input-level"
                        type="number"
                        bind:value={filters.adventurer_rank.max}
                        max="30"
                        min="2"
                    />
                </label>
            </div>
        </section>

        <section>
            <div class="skip-std">Class</div>
        </section>

        <section>
            <div class="skip-std">Element</div>
        </section>
    </div>
</details>

<style lang="scss">
    details.box {
        background: var(--surface2);
        border-color: var(--surface3);
        padding: 0;
        overflow: visible;

        &:not(:focus-visible) {
            border-top-right-radius: unset;
            border-top-left-radius: unset;
        }
    }

    summary.details-expander {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 0.15rem;
        font-size: var(--step--1);
        padding: 0rem 1rem;
        max-inline-size: none;

        ::marker {
            display: none;
        }

        &:hover {
            background: var(--surface3);
            color: var(--accent);
        }

        &:has(:focus-visible) {
            border-radius: 5px;
            background: var(--surface3);
            color: var(--accent);
        }
    }

    label:has(:focus-visible) {
        outline: none;
    }

    label .pill {
        display: block;
    }

    input[type="checkbox"]:not(:checked) + .pill {
        background: var(--bg);
        border-color: var(--surface1);
        color: var(--text2);
    }
    input[type="checkbox"]:focus-visible + .pill {
        outline: 2px solid var(--accent);
    }

    @supports not selector(:has(*)) {
        .details-expander:focus-within {
            border-radius: 5px;
            outline: 2px solid var(--accent);
            background: var(--surface3);
            color: var(--accent);
        }
    }

    .inner-content {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        margin-top: 0;
        border-top: 1px solid var(--surface3);
        background: var(--surface1);
        padding: 1rem;
    }

    .categories {
        display: flex;
        flex-wrap: wrap;
        gap: 0 0.5rem;
        // width: 50%;
    }

    .min-max-inputs {
        display: grid;
        max-width: 300px;

        grid-template-columns: 1fr auto 1fr;
        grid-template-areas:
            "tl x tr"
            "bl c br";
        align-items: center;
        column-gap: 0.5rem;
    }

    .tilde {
        grid-area: c;
        justify-self: center;
        font-size: var(--step-2);
    }

    label.input-level-wrapper {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: var(--bg);
        border-radius: 5px;
        padding-left: 0.8rem;
        font: inherit;
        font-weight: 600;
        text-transform: uppercase;
        min-height: 44px;
        min-width: 44px;

        &:has(:focus-visible) {
            outline: 2px solid var(--accent);
        }

        &:has(:disabled) {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    @supports not selector(:has(*)) {
        .input-level-wrapper:focus-within {
            outline: 2px solid var(--accent);
        }

        .input-level-wrapper.cant-edit {
            color: var(--text2);
            background: var(--surface2);
            filter: brightness(0.9) saturate(0);
        }
    }

    input.input-level {
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        width: 100%;
        height: 100%;

        &:focus,
        &:focus-visible {
            outline: none !important;
        }
    }
</style>
