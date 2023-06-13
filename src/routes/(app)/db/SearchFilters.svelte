<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { browser } from "$app/environment";
    import isEqual from "lodash/isEqual";
    import cloneDeep from "lodash/cloneDeep";
    import { nStore, initialFilters, filterCategoryTypes } from "$lib/stores";

    let detailsOpen = false;

    $: if (browser) {
        $nStore;
        updateUrl();
    }

    if ($page.url.searchParams.get("minLevel")) {
        $nStore.minLevel = $page.url.searchParams.get("minLevel")
    }
    if ($page.url.searchParams.get("maxLevel")) {
        $nStore.maxLevel = $page.url.searchParams.get("maxLevel")
    }
    if ($page.url.searchParams.get("minAR")) {
        $nStore.minAR = $page.url.searchParams.get("minAR")
    }
    if ($page.url.searchParams.get("maxAR")) {
        $nStore.maxAR = $page.url.searchParams.get("maxAR")
    }
    
    function updateUrl() {
        const filterParams = [
            "minLevel",
            "maxLevel",
            "minAR",
            "maxAR",
            "categories",
        ];

        for (let filter of filterParams) {
            if (isEqual($nStore[filter], initialFilters[filter])) {
                $page.url.searchParams.delete(filter);
            } else {
                filter === "categories"
                    ? $page.url.searchParams.set(filter, $filterCategoryTypes)
                    : $page.url.searchParams.set(filter, $nStore[filter]);
            }
        }

        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
        });
    }
</script>

<!-- <p>{$filterCategoryTypes}</p> -->
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
        <button on:click={() => ($nStore = cloneDeep(initialFilters))}
            >Reset all</button
        >
        <section>
            <div class="skip-std">Categories</div>
            <div class="categories">
                {#each $nStore.categories as category}
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

        <!-- <section>
            <div class="skip-std">Level</div>
            <div class="min-max-inputs">
                <label
                    class="component-label"
                    style="grid-area: tl"
                    for="level-min-input"
                    aria-hidden="true"
                >
                    Min
                </label>
                <InputNumber
                    style="grid-area: bl"
                    description="Min Level"
                    shortName="LV."
                    id="level-min-input"
                    bind:value={$nStore.minLevel}
                    max={$nStore.maxLevel}
                    min="1"
                />
                <div class="tilde" aria-hidden="true">~</div>
                <label
                    for="level-max-input"
                    class="component-label"
                    style="grid-area: tr"
                    aria-hidden="true">Max</label
                >
                <InputNumber
                    style="grid-area: br"
                    description="Max Level"
                    shortName="LV."
                    id="level-max-input"
                    bind:value={$nStore.maxLevel}
                    max="100"
                    min={$nStore.minLevel}
                />
            </div>
        </section>

        <section>
            <div class="skip-std">Adventurer Rank</div>
            <div class="min-max-inputs">
                <label
                    class="component-label"
                    style="grid-area: tl"
                    for="ar-min-input"
                    aria-hidden="true"
                >
                    Min
                </label>
                <InputNumber
                    style="grid-area: bl"
                    description="Min Adventurer Rank"
                    shortName="AR"
                    id="ar-min-input"
                    bind:value={$nStore.minAR}
                    max={$nStore.maxAR}
                    min="1"
                />
                <div class="tilde" aria-hidden="true">~</div>
                <label
                    for="ar-max-input"
                    class="component-label"
                    style="grid-area: tr"
                    aria-hidden="true">Max</label
                >
                <InputNumber
                    style="grid-area: br"
                    description="Max Adventurer Rank"
                    shortName="AR"
                    id="ar-max-input"
                    bind:value={$nStore.maxAR}
                    max="30"
                    min={$nStore.minAR}
                />
            </div>
        </section>

        <section>
            <div class="skip-std">Class</div>
        </section>

        <section>
            <div class="skip-std">Element</div>
        </section> -->
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
        list-style-type: none;
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

        label {
            user-select: none;
        }
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
</style>
