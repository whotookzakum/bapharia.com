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
    import filters from "./filters.json";

    let detailsOpen = false;

    $: if (browser) {
        $nStore;
        updateUrl();
    }

    if ($page.url.searchParams.get("minLevel")) {
        $nStore.minLevel = $page.url.searchParams.get("minLevel");
    }
    if ($page.url.searchParams.get("maxLevel")) {
        $nStore.maxLevel = $page.url.searchParams.get("maxLevel");
    }
    if ($page.url.searchParams.get("minAR")) {
        $nStore.minAR = $page.url.searchParams.get("minAR");
    }
    if ($page.url.searchParams.get("maxAR")) {
        $nStore.maxAR = $page.url.searchParams.get("maxAR");
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

<div class="grid" style:gap="1rem">
    <div class="box">
        <h3>Categories</h3>
        <div class="grid" style:row-gap="1rem">
            {#each filters.categories as category}
                <div class="category grid g-50">
                    <input
                        class="visually-hidden"
                        type="checkbox"
                        id="category-{category.name.en_US}-switch"
                        checked
                    />
                    <label
                        for="category-{category.name.en_US}-switch"
                        class="category-label flex g-50"
                    >
                        <span class="switch" />
                        {category.name[$userLocale]}
                    </label>

                    {#if category.subcategories.length > 0}
                        <input
                            class="expander visually-hidden"
                            type="checkbox"
                            id="category-{category.name.en_US}-expander"
                        />
                        <label
                            for="category-{category.name.en_US}-expander"
                            class="expand-btn grid"
                        >
                            <span class="visually-hidden"
                                >Show subcategories</span
                            >
                            <Icon
                                icon={"mdi:chevron-down"}
                                width="18"
                                height="18"
                                class="chevron-down"
                                style="margin-bottom: -2px"
                            />
                        </label>
                        <ul class="subcategories unstyled-list" role="list">
                            {#each category.subcategories as subcategory}
                                <li class="flex g-50">
                                    <input
                                        class="visually-hidden"
                                        type="checkbox"
                                        id="subcategory-{category.name
                                            .en_US}-{subcategory.name.en_US}"
                                        checked
                                    />
                                    <label
                                        for="subcategory-{category.name
                                            .en_US}-{subcategory.name.en_US}"
                                        class="flex g-50"
                                    >
                                        <span class="switch" />
                                        {subcategory.name[$userLocale]}
                                    </label>
                                </li>
                            {/each}
                        </ul>
                    {/if}
                </div>
            {/each}
        </div>
    </div>

    <div class="box">
        <h3>Level</h3>
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
    </div>

    <div class="box">
        <h3>Adventurer Rank</h3>
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
    </div>

    <div class="box">
        <h3>Class</h3>
        <div class="flex g-50">
            <ul class="unstyled-list" role="list">
                {#each filters.classes as gameClass}
                    <li class="flex g-50">
                        <input
                            class="visually-hidden"
                            type="checkbox"
                            id="subcategory-{gameClass.name.en_US}"
                            checked
                        />
                        <label
                            for="subcategory-{gameClass.name.en_US}"
                            class="flex g-50"
                        >
                            <span class="switch" />
                            <img
                                src="/UI/Icon/Class/UI_IconClass_{gameClass.id <
                                10
                                    ? '0' + gameClass.id
                                    : gameClass.id}.png"
                                alt=""
                                width="32"
                                height="32"
                            />
                            {gameClass.name[$userLocale]}
                        </label>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="box">
        <h3>Element</h3>
        <div class="flex g-50">
            <ul class="unstyled-list" role="list">
                {#each filters.elements as element}
                    <li class="flex g-50">
                        <input
                            class="visually-hidden"
                            type="checkbox"
                            id="subcategory-{element.name.en_US}"
                            checked
                        />
                        <label
                            for="subcategory-{element.name.en_US}"
                            class="flex g-50"
                        >
                            <span class="switch" />
                            <img
                                src="/UI/Icon/PlayerSkill/Attribute/UI_PlayerSkillAttribute_{element.id}.png"
                                alt=""
                                width="32"
                                height="32"
                            />
                            {element.name[$userLocale]}
                        </label>
                    </li>
                {/each}
            </ul>
        </div>
        
    </div>
</div>

<style lang="scss">
    h3 {
        margin: 0 0 1rem 0;
        line-height: 1;
        font-size: var(--step-1);
    }

    .flex {
        align-items: center;
    }

    .category {
        grid-template-columns: 1fr 1.75rem;
        align-items: center;

        ul.subcategories {
            grid-column: 1/3;
            display: none;
            border-top: 1px solid var(--surface3);
            padding-top: 0.25rem;
            font-size: var(--step--1);
        }

        &:not(:last-of-type) ul.subcategories {
            margin-bottom: 0.5rem;
        }
    }

    input.expander:checked {
        & + .expand-btn {
            transform: rotate(-180deg);
        }
        & ~ ul.subcategories {
            display: grid !important;
        }
    }

    label.expand-btn {
        align-items: center;
        width: 100%;
        display: grid;
        margin: -1rem 0;
        width: 1.75rem;
        place-content: center;
        font-style: normal;
        aspect-ratio: 1/1;
        border-radius: 50%;
        transition: transform 0.15s ease;

        &:hover,
        &:focus-visible {
            background: var(--surface2);
            color: var(--accent);
        }
    }

    label:hover {
        color: var(--text2);

        .switch {
            filter: brightness(0.95);
        }

        .switch::after {
            filter: brightness(0.8);
        }
    }

    .switch {
        display: flex;
        width: 2em;
        aspect-ratio: 2/1;
        background: var(--surface3);
        position: relative;
        border-radius: 3rem;

        &:hover,
        &:focus-visible {
            filter: brightness(0.95);

            &::after {
                filter: brightness(0.8);
            }
        }

        &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 100%;
            border-radius: 50%;
            background: gray;
            transform: translateX(100%);
            transition: color 0.15s ease, transform 0.15s ease;
        }
    }

    input:checked + label .switch::after {
        transform: translateX(0%);
        background: var(--accent);
    }

    ul {
        gap: 0;
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
</style>
