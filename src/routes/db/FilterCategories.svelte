<script>
    
    import { categories, uniqueCategories } from "./stores";
    import Icon from "@iconify/svelte";
    import { userLocale } from "$lib/stores";
    import { updateSearchParams } from "$lib/utils";

    // Whenever $categories is updated, update the URL search param with the checked ids for that param
    $: uniqueCategories.forEach((param) => {
        const checkedIds = $categories
            .filter((cat) => cat.checked && cat.param === param)
            .flatMap((cat) => cat.ids)
            .join(" ");

        updateSearchParams(param, checkedIds);
    });

    const categoryNames = {
        boards: {
            ja_JP: "アドベンチャーボード",
            en_US: "Adventure Boards",
        },
        items: {
            ja_JP: "アイテム",
            en_US: "Items",
        },
        weapons: {
            ja_JP: "武器",
            en_US: "Weapons",
        },
        imagine: {
            ja_JP: "イマジン",
            en_US: "Imagine",
        },
        enemies: {
            ja_JP: "エネミー",
            en_US: "Enemies",
        },
        skills: {
            ja_JP: "スキル",
            en_US: "Skills",
        },
        tickets: {
            ja_JP: "トークン",
            en_US: "Tickets",
        },
        maps: {
            ja_JP: "マップ",
            en_US: "Maps",
        },
        liquidmemories: {
            ja_JP: "リキッドメモリ",
            en_US: "Liquid Memories",
        },
        costumes: {
            ja_JP: "コスチューム",
            en_US: "Costumes",
        },
        emotes: {
            ja_JP: "ジェスチャー",
            en_US: "Emotes",
        },
        stampsets: {
            ja_JP: "スタンプセット",
            en_US: "Stamp Sets",
        },
        avatarparts: {
            ja_JP: "アバター部位",
            en_US: "Avatar Parts",
        },
        quests: {
            ja_JP: "クエスト",
            en_US: "Quests",
        },
    };
</script>

{#each uniqueCategories as uniqueCategory}
    <details>
        <summary class="flex">
            <span
                >{categoryNames[uniqueCategory][$userLocale]}
                {#if $categories.filter((cat) => cat.param === uniqueCategory && cat.checked).length}
                    <small>
                        ({$categories.filter(
                            (cat) =>
                                cat.param === uniqueCategory && cat.checked,
                        ).length})
                    </small>
                {/if}
            </span>
            <span class="chevron">
                <Icon
                    icon="mdi:chevron-down"
                    width="18"
                    height="18"
                    style="margin-bottom: -3px"
                />
            </span>
        </summary>
        <div class="subcategories grid g-25">
            {#each $categories as category}
                {#if category.param === uniqueCategory}
                    <label>
                        <input
                            type="checkbox"
                            bind:checked={category.checked}
                        />
                        {category.name[$userLocale]}
                    </label>
                {/if}
            {/each}
        </div>
    </details>
{/each}

<style lang="scss">
    details {
        font-size: var(--step-0);

        summary {
            list-style-type: none;
        }

        &:not(:last-of-type) .subcategories {
            margin-bottom: 0.5rem;
        }

        &[open] .chevron {
            transform: rotate(-180deg);
        }

        .chevron {
            margin-left: auto;
        }
    }

    .subcategories {
        font-size: var(--step--1);
        margin-top: 0.25rem;
        padding-top: 0.5rem;
        border-top: 1px solid var(--surface3);
    }
</style>
