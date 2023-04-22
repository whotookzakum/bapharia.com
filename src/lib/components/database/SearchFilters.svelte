<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    let detailsOpen = true;

    const filters = {
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
                typename: "Enemy",
                text: {
                    ja_JP: "エネミー",
                    en_US: "Enemies",
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
                    <label class={`pill box ${category.typename}`}>
                        {category.text[$userLocale]}
                        <input type="checkbox" class="visually-hidde" bind:checked={category.checked} />
                    </label>
                {/each}

                <label class="pill box Item"
                    >Items
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Enemy"
                    >Enemies
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Token"
                    >Tokens
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Skill"
                    >Skills
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Weapon"
                    >Weapons
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box StampSet"
                    >Stamp Sets
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Imagine"
                    >Imagine
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box GameMap"
                    >Maps
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box LiquidMemory"
                    >Liquid Memories
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Costume"
                    >Costumes
                    <input type="checkbox" class="visually-hidden" />
                </label>
                <label class="pill box Gesture"
                    >Gestures
                    <input type="checkbox" class="visually-hidden" />
                </label>
            </div>
        </section>

        <section>
            <div class="skip-std">Level</div>
            <div>Min.</div>
            <div>Max.</div>
        </section>

        <section>
            <div class="skip-std">Adventurer Rank</div>
            <div>Min.</div>
            <div>Max.</div>
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
        width: 50%;
    }
</style>
