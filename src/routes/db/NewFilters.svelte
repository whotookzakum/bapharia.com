<script>
    import { userLocale } from "$lib/stores";
    
    import InputNumber from "$lib/components/InputNumber.svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import isEqual from "lodash/isEqual";
    import CATEGORIES from "./filters/categories.json";
    import CLASSES from "./filters/classes.json";
    import AR from "./filters/adventurer_rank.json";
    import LEVEL from "./filters/level.json";
    import ELEMENTS from "./filters/elements.json";
    // import categories from "./filters/categories.json";
    import { categories } from "./stores";
    import FilterCategory from "./FilterCategory.svelte";

</script>

<div class="grid" style:gap="1rem">
    <div class="box">
        <h3>Categories</h3>
        <div class="grid g-50">
            {#each $categories as category}
                <FilterCategory {category} />
            {/each}
        </div>
        <h3>Level</h3>
    </div>
</div>

<style lang="scss">
    h3 {
        &:first-of-type {
            margin: 0 0 1rem 0;
        }
        line-height: 1;
        font-size: var(--step-1);
        font-weight: 700;
    }

    .min-max-inputs {
        display: grid;
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

    .invalid-input-warning {
        margin: 0.75rem 0 0 0;
        line-height: 1;
        font-size: var(--step--1);
        color: crimson;
    }
</style>
