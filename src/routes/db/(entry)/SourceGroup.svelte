<script>
    import Icon from "@iconify/svelte";

    export let category, sources;
    let src = "/UI/Icon/Item/UI_Icon_UnidentifiedItem.png",
        categoryName = category,
        checked = false;

    switch (category) {
        case "crafting":
            src = "/UI/Icon/Reward/UI_Icon_11.png";
            categoryName = "Crafting";
            break;
        case "bonus quest":
            src =
                "/UI/SeasonPass/SeasonPassQuest/UI_SeasonPassQuestImg_Bonus.png";
            categoryName = "Bonus Quests";
            break;
        case "achievement":
            src = "/UI/Icon/Achievement/UI_AchievementIcon_1.png";
            categoryName = "Achievements";
            break;
        case "board completion":
            src =
                "/UI/AdventureBoard/UI_AdventureBoardCompleteRewardBtnNormal.png";
            categoryName = "Adventure Board Completion";
            break;
        case "coupon":
            src = "/UI/RMShop/UI_RMShopCoupon_S.png";
            categoryName = "Connect Coupon Usage Rewards";
            break;
        case "season pass":
            src =
                "/UI/SeasonPass/SeasonPassQuest/UI_SeasonPassQuestImg_Season.png";
            categoryName = "Season Passes";
            break;
        case "item box":
            src = "/UI/Icon/ItemL/Consumption/UI_Icon_Itembox_Set.png";
            categoryName = "Item Boxes";
            break;
        case "dungeon":
            categoryName = "Dungeon Rewards";
            break;
        case "exchange":
            categoryName = "Exchange Shop";
            break;
        case "mount caravan":
            categoryName = "Mount Caravan Rewards";
            break;
    }
</script>

<div class="drawer-wrapper grid" class:open={checked}>
    <label class="flex g-100 summary">
        <span class="visually-hidden">
            {categoryName}: view {sources.length} source(s)
        </span>
        <span class="category-img-wrapper grid" aria-hidden="true">
            <img {src} width="64" height="64" alt="" />
        </span>
        <span class="grid category-text-wrapper" aria-hidden="true">
            <b>{categoryName}</b>
            <small style="color: var(--text2)"
                >{sources.length}
                {sources.length > 1 ? "sources" : "source"}</small
            >
        </span>
        <input class="visually-hidden" type="checkbox" bind:checked />
        <Icon
            icon="mdi:chevron-{checked ? 'up' : 'down'}"
            style="font-size: var(--step-5); margin-left: auto; margin-right: 0.5rem"
        />
    </label>
    <div class="contents">
        <hr />
        {#if ["bonus quest", "achievement"].includes(category)}
            {#each sources as source}
                <li>{source.text.name}</li>
            {/each}
        {/if}
    </div>
</div>

<style lang="scss">
    .drawer-wrapper {
        transition: all 0.3s ease;
        grid-template-rows: auto 1fr;

        &:not(.open) {
            grid-template-rows: auto 0fr;
        }
    }

    .summary {
        align-items: center;
        position: relative;
        z-index: 1;
        padding: 0.5rem;
        border-radius: 1rem;

        &:hover {
            background: var(--surface4);
        }
    }

    .category-text-wrapper {
        line-height: 1.6;
    }

    .category-img-wrapper {
        width: 64px;
        height: 64px;
        place-content: center;

        img {
            width: 64px;
            height: auto;
        }
    }

    .contents {
        overflow: hidden;
        margin: 0 1.5rem;
        font-size: var(--step-0) !important;
        gap: 0;

        hr {
            background: var(--surface4);
            margin-top: 0.25rem;
        }
    }
</style>
