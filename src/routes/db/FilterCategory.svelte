<script>
    import { derived } from "svelte/store";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";

    export let category;

    // Get search params from URL
    let paramValues = derived(
        page,
        ($page) => $page.url.searchParams.get(category.param) || "",
    );

    // Transform from a string "0 1 3" into an array [0, 1, 3]
    const checkedIds = $paramValues.split(" ").map((value) => parseInt(value));

    // Set initial checkboxes to checked
    category.subcategories.forEach((subcategory) => {
        subcategory.checked = subcategory.ids.some((id) =>
            checkedIds.includes(id),
        );
    });

    // Initial value matches the URL search param from visiting the page
    let paramString = $paramValues;

    // Updates whenever a subcategory is checked/unchecked
    $: paramString = category.subcategories
        .filter((cat) => cat.checked)
        .flatMap((cat) => cat.ids)
        .join(" ");

    // Update the URL
    $: updateSearchParams(category.param, paramString);

    function updateSearchParams(param, newValue) {
        if (!newValue) {
            $page.url.searchParams.delete(param);
        } else {
            $page.url.searchParams.set(param, newValue);
        }

        if (browser) {
            goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                replaceState: false,
                keepFocus: true,
                invalidateAll: true,
            });
        }
    }
</script>

<details open>
    <summary class="flex">
        <span
            >{category.name[$userLocale]}
            {#if category.subcategories.filter((subcat) => subcat.checked).length}
                <small
                    >({category.subcategories.filter((subcat) => subcat.checked)
                        .length})</small
                >
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
    <div>{paramString}</div>
    <!-- <div>{newValue}</div> -->
    <div class="subcategories grid g-25">
        {#each category.subcategories as subcategory}
            <label>
                <input type="checkbox" bind:checked={subcategory.checked} />
                {subcategory.name[$userLocale]}
            </label>
        {/each}
    </div>
</details>

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
