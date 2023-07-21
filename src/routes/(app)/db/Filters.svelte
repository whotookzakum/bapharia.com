<script>
    import { userLocale } from "$lib/stores";
    import Icon from "@iconify/svelte";
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
    import {
        getSubcategoryString,
        categories,
        level,
        ar,
        classes,
        elements,
        selectedCategories,
        selectedLevels,
        selectedAR,
        selectedItems,
        selectedWeapons,
        selectedImagine,
        selectedEnemies,
        selectedSkills,
        selectedMaps,
        selectedCostumes,
        selectedAvatarParts,
        selectedQuests,
        currentPage
    } from "./stores";

    // $: console.log("categories" + "\n" + $selectedCategories);
    // $: console.log("level" + "\n" + $selectedLevels);
    // $: console.log("AR" + "\n" + $selectedAR);
    // $: console.log("items" + "\n" + $selectedItems);
    // $: console.log("skills" + "\n" + $selectedSkills);

    $: if (browser) {
        $selectedCategories;
        $selectedLevels;
        $selectedAR;
        $selectedItems;
        $selectedWeapons;
        $selectedImagine;
        $selectedEnemies;
        $selectedSkills;
        $selectedMaps;
        $selectedCostumes;
        $selectedAvatarParts;
        $selectedQuests;
        $currentPage = 1;
        updateUrl();
    }

    function updateUrl() {
        if (!$selectedCategories || $selectedCategories === categoryDefaults) {
            $page.url.searchParams.delete("categories");
        } else {
            $page.url.searchParams.set("categories", $selectedCategories);
        }

        let isValidLevel =
            $level.min !== null &&
            $level.max !== null &&
            $level.min <= $level.max;

        if (isEqual($level, LEVEL)) {
            $page.url.searchParams.delete("level");
        } else if (isValidLevel) {
            $page.url.searchParams.set("level", $selectedLevels);
        }

        let isValidAR =
            $ar.min !== null && $ar.max !== null && $ar.min <= $ar.max;

        if (isEqual($ar, AR)) {
            $page.url.searchParams.delete("ar");
        } else if (isValidAR) {
            $page.url.searchParams.set("ar", $selectedAR);
        }

        let items_default = getSubcategoryString("", "items");

        if (!$selectedItems || !isChecked("items") || $selectedItems === items_default) {
            $page.url.searchParams.delete("items");
        } else {
            $page.url.searchParams.set("items", $selectedItems);
        }

        let weapons_default = getSubcategoryString("", "weapons");

        if (!$selectedWeapons || !isChecked("weapons") || $selectedWeapons === weapons_default) {
            $page.url.searchParams.delete("weapons");
        } else {
            $page.url.searchParams.set("weapons", $selectedWeapons);
        }

        let imagine_default = getSubcategoryString("", "imagine");

        if (!$selectedImagine || !isChecked("imagine") || $selectedImagine === imagine_default) {
            $page.url.searchParams.delete("imagine");
        } else {
            $page.url.searchParams.set("imagine", $selectedImagine);
        }

        let enemies_default = getSubcategoryString("", "enemies");

        if (!$selectedEnemies || !isChecked("enemies") || $selectedEnemies === enemies_default) {
            $page.url.searchParams.delete("enemies");
        } else {
            $page.url.searchParams.set("enemies", $selectedEnemies);
        }

        let skills_default = getSubcategoryString("", "skills");

        if (!$selectedSkills || !isChecked("skills") || $selectedSkills === skills_default) {
            $page.url.searchParams.delete("skills");
        } else {
            $page.url.searchParams.set("skills", $selectedSkills);
        }

        let maps_default = getSubcategoryString("", "maps");

        if (!$selectedMaps || !isChecked("maps") || $selectedMaps === maps_default) {
            $page.url.searchParams.delete("maps");
        } else {
            $page.url.searchParams.set("maps", $selectedMaps);
        }

        let costumes_default = getSubcategoryString("", "costumes");

        if (!$selectedCostumes || !isChecked("costumes") || $selectedCostumes === costumes_default) {
            $page.url.searchParams.delete("costumes");
        } else {
            $page.url.searchParams.set("costumes", $selectedCostumes);
        }

        let avatarparts_default = getSubcategoryString("", "avatarparts");

        if (!$selectedAvatarParts || !isChecked("avatarparts") || $selectedAvatarParts === avatarparts_default) {
            $page.url.searchParams.delete("avatarparts");
        } else {
            $page.url.searchParams.set("avatarparts", $selectedAvatarParts);
        }

        let quests_default = getSubcategoryString("", "quests");

        if (!$selectedQuests || !isChecked("quests") || $selectedQuests === quests_default) {
            $page.url.searchParams.delete("quests");
        } else {
            $page.url.searchParams.set("quests", $selectedQuests);
        }

        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }

    const isChecked = (name) => {
        return $categories.find(category => category.id === name).checked
    }

    const categoryDefaults = CATEGORIES.reduce((acc, category) => {
        if (category.checked) {
            if (acc) return `${acc} ${category.id}`;
            return `${category.id}`;
        }
        return acc;
    }, "");
</script>

<div class="grid" style:gap="1rem">
    <div class="box">
        <h3>Categories</h3>
        <div class="grid" style:row-gap="1rem">
            {#each $categories as category}
                <div class="category grid g-50">
                    <input
                        class="visually-hidden"
                        type="checkbox"
                        id="category-{category.name.en_US}-switch"
                        bind:checked={category.checked}
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
                            {#each category.subcategories as subcategory, subcat_idx}
                                <li class="flex g-50">
                                    <!-- For :disabled styles to work, input can't be inside label -->
                                    <input
                                        class="visually-hidden"
                                        type="checkbox"
                                        id="{category.name.en_US}-{subcategory.name.en_US}-switch"
                                        bind:checked={category.subcategories[
                                            subcat_idx
                                        ].checked}
                                        disabled={!category.checked}
                                    />
                                    <label
                                        for="{category.name.en_US}-{subcategory.name.en_US}-switch"
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
                bind:value={$level.min}
                max={$level.max}
                min={$level.lowerLimit}
                invalid={$level.min === null ||
                    ($level.max && $level.min > $level.max)}
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
                bind:value={$level.max}
                max={$level.upperLimit}
                min={$level.min}
                invalid={$level.max === null || $level.max < $level.min}
            />
        </div>
        {#if $level.min !== null && $level.max !== null && $level.min > $level.max}
            <p class="invalid-input-warning">Min must be less than Max.</p>
        {/if}
        {#if $level.min === null || $level.max === null}
            <p class="invalid-input-warning">Please enter a valid input.</p>
        {/if}
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
                bind:value={$ar.min}
                max={$ar.max}
                min={$ar.lowerLimit}
                invalid={$ar.min === null || ($ar.max && $ar.min > $ar.max)}
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
                bind:value={$ar.max}
                max={$ar.upperLimit}
                min={$ar.min}
                invalid={$ar.max === null || $ar.max < $ar.min}
            />
        </div>
        {#if $ar.min !== null && $ar.max !== null && $ar.min > $ar.max}
            <p class="invalid-input-warning">Min must be less than Max.</p>
        {/if}
        {#if $ar.min === null || $ar.max === null}
            <p class="invalid-input-warning">Please enter a valid input.</p>
        {/if}
    </div>

    <div class="box">
        <h3>Class</h3>
        <div class="flex g-50">
            <ul class="unstyled-list" role="list">
                {#each $classes as gameClass}
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
                {#each $elements as element}
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

    label {
        width: 100%;
        user-select: none;
        color: var(--text2);
    }

    input:not(:disabled) + label:hover {
        color: var(--text1);

        .switch {
            filter: brightness(1.1);
        }
    }

    .switch {
        display: flex;
        width: 2em;
        aspect-ratio: 2/1;
        background: var(--surface3);
        position: relative;
        border-radius: 3rem;
        transition: background-color 0.15s ease;

        &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 100%;
            border-radius: 50%;
            background: gray;
            transform: translateX(100%);
            transition: all 0.15s ease;
        }
    }

    input:checked + label .switch::after {
        transform: translateX(0%);
        background: var(--accent);
    }

    input:disabled + label .switch {
        background: rgb(37, 37, 37);

        &::after {
            background: rgb(75, 75, 75);
        }
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

    .invalid-input-warning {
        margin: 0.75rem 0 0 0;
        line-height: 1;
        font-size: var(--step--1);
        color: crimson;
    }
</style>
