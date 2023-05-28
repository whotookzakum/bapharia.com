<script>
    import { userLocale } from "$lib/stores";
    import { katakanaToHiragana } from "$lib/utils/string_utils";
    import categoryTextLocales from "./categoryText.json";
    export let data;
    export let moreDetails = false;
    export let userSearchInput = "";

    // data.category is more specific, i.e. "Consumable" instead of "Item"
    let categoryText = categoryTextLocales[data.__typename];
    let backgroundStyle =
        data.skill_type <= 6
            ? `background-image: url(${data.skillBackgroundImg})`
            : "";

    // https://bitsofco.de/a-one-line-solution-to-highlighting-search-matches/
    function highlightMatchedTerm(entryName) {
        // Every language other than Japanese
        if ($userLocale !== "ja_JP") {
            return entryName.replace(
                new RegExp(userSearchInput, "gi"),
                (match) => `<mark>${match}</mark>`
            );
        }
        // User locale and search term are both JP, otherwise it messes up names like Jake's Letter
        else if (userSearchInput.match(/[\u3041-\u30f6]/g)) {
            const startIndex = katakanaToHiragana(entryName)
                .toLowerCase()
                .indexOf(katakanaToHiragana(userSearchInput).toLowerCase());
            const beforeMatch = entryName.slice(0, startIndex);
            const match = entryName.slice(
                startIndex,
                startIndex + userSearchInput.length
            );
            const afterMatch = entryName.slice(
                startIndex + userSearchInput.length
            );
            return `${beforeMatch}<mark>${match}</mark>${afterMatch}`;
        }
        // User locale is JP but search term is English
        else {
            return entryName;
        }
    }

    function highlightMatchedId(entryId) {
        return entryId.replace(
            new RegExp(userSearchInput, "gi"),
            (match) => `<mark>${match}</mark>`
        );
    }
</script>

<div class="entry-summary flex" class:more-details={moreDetails}>
    <img
        src={data.thumb}
        class="entry-thumb"
        style={backgroundStyle}
        alt=""
        width="64"
        height="64"
    />
    <div class="grid g-25">
        {#if moreDetails}
            <h3>
                {data.name[$userLocale]}
                {#if data.item_level}
                    <i>(Lv. {data.item_level})</i>
                {/if}
                {#if data.imagine_max_level}
                    <i>(Lv. {data.imagine_max_level})</i>
                {/if}
                {#if data.weapon_max_level}
                    <i>(Lv. {data.weapon_max_level})</i>
                {/if}
            </h3>
            <div>
                <span class={`${data.__typename} box pill`}
                    >{data.category[$userLocale]}</span
                >
                <span class="entry-id box pill">ID: {data.id}</span>
            </div>
        {:else}
            <div class="skip-std">
                {@html highlightMatchedTerm(data.name[$userLocale])}
            </div>
            <div>
                <span class={`${data.__typename} box pill`}
                    >{categoryText[$userLocale]}</span
                >
                <span class="entry-id box pill"
                    >ID: {@html highlightMatchedId(data.id)}</span
                >
            </div>
        {/if}
    </div>
    <div class="extra-icons flex">
        <!-- {#if data.classImg}
            <img src={data.classImg} alt="" width="32" height="32" />
        {/if} -->
        {#if data.elementImg && !data.elementImg.includes("Attribute_Empty")}
            <img src={data.elementImg} alt="" width="32" height="32" />
        {/if}
    </div>
</div>

<style lang="scss">
    .entry-summary {
        align-items: center;
        gap: 0.8rem;
        position: relative;
        max-inline-size: none;
        width: 100%;
        line-height: 1.4;
    }

    .entry-thumb {
        background-repeat: no-repeat;
    }

    .entry-summary.more-details {
        gap: 1rem;

        h3 {
            margin: 0;
            font-size: var(--step-2);
        }

        i {
            font-style: normal;
            font-size: var(--step--1);
            color: var(--accent);
        }
    }

    .extra-icons {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
