<script>
    import Icon from "@iconify/svelte";

    import CraftingSources from "./CraftingSources.svelte";

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
            categoryName = "Connect Coupon Usage";
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
            categoryName = "Dungeons";
            break;
        case "exchange":
            categoryName = "Exchange Shop";
            break;
        case "mount caravan":
            categoryName = "Mount Caravan";
            break;
    }

    const categories = {
        crafting: CraftingSources,
    };
</script>

<div class:open={checked}>
    <label class="flex gap-4 hover-surface2 p-2 items-center rounded-2xl select-none">
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
    <div class="drawer-contents grid">
        <div>
            <hr class="border-0 surface3 mb-4 h-[1px]" />
            <svelte:component this={categories[category]} {sources} />
        </div>
    </div>
</div>

<style lang="scss">
    .category-img-wrapper {
        width: 64px;
        height: 64px;
        place-content: center;

        img {
            width: 64px;
            height: auto;
        }
    }

    .drawer-contents {
        margin: 0 1rem;
        grid-template-rows: 0fr;
        transition: all 0.3s ease;

        & > div {
            overflow: hidden;
        }
    }

    .open .drawer-contents {
        grid-template-rows: 1fr;
        margin-bottom: 1rem;
    }
</style>
