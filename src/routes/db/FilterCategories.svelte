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
        <summary>
            <span
                >{categoryNames[uniqueCategory][$userLocale]}
                {#if $categories.filter((cat) => cat.param === uniqueCategory && cat.checked).length}
                    <small class="selection-count">
                        ({$categories.filter(
                            (cat) =>
                                cat.param === uniqueCategory && cat.checked,
                        ).length})
                    </small>
                {/if}
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
    summary {
        font-size: var(--step-1);
    }

    .subcategories {
        font-size: var(--step--1);
        padding: 0.75rem 0.5rem 0.5rem 0.5rem;
    }
</style>
