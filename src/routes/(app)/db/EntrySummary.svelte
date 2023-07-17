<script>
    import { userLocale } from "$lib/stores";
    import { katakanaToHiragana } from "$lib/utils/string_utils";
    import { userSearch } from "./stores";
    export let data;
    export let moreDetails = false;

    // data.category is more specific, i.e. "Consumable" instead of "Item"
    let backgroundStyle =
        data?.skill_type <= 6
            ? `background-image: url(${data?.skillBackgroundImg})`
            : "";

    // https://bitsofco.de/a-one-line-solution-to-highlighting-search-matches/
    function highlightMatchedTerm(entryName) {
        if (moreDetails) return entryName;

        // Every language other than Japanese
        if ($userLocale !== "ja_JP") {
            return entryName.replace(
                new RegExp($userSearch, "gi"),
                (match) => `<mark>${match}</mark>`
            );
        }
        // User locale and search term are both JP, otherwise it messes up names like Jake's Letter
        else if ($userSearch.match(/[\u3041-\u30f6]/g)) {
            const startIndex = katakanaToHiragana(entryName)
                .toLowerCase()
                .indexOf(katakanaToHiragana($userSearch).toLowerCase());
            const beforeMatch = entryName.slice(0, startIndex);
            const match = entryName.slice(
                startIndex,
                startIndex + $userSearch.length
            );
            const afterMatch = entryName.slice(startIndex + $userSearch.length);
            return `${beforeMatch}<mark>${match}</mark>${afterMatch}`;
        }
        // User locale is JP but search term is English
        else {
            return entryName;
        }
    }

    function highlightMatchedId(entryId) {
        if (moreDetails) return entryId;

        return entryId.replace(
            new RegExp($userSearch, "gi"),
            (match) => `<mark>${match}</mark>`
        );
    }

    const itemLevel = () => {
        if (data.item_level) return data.item_level;
        if (data.imagine_max_level) return data.imagine_max_level;
        if (data.weapon_max_level) return data.weapon_max_level;
    };
</script>

{#if data}
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
            <div>
                {@html highlightMatchedTerm(data.name[$userLocale])}
                {#if itemLevel()}
                    <i>(Lv. {itemLevel()})</i>
                {/if}
            </div>
            <div>
                <span class={`${data.__typename} box pill`}>
                    {data.category[$userLocale]}
                </span>
                <span class="entry-id box pill">
                    ID: {@html highlightMatchedId(data.id)}
                </span>
            </div>
        </div>
        <div class="extra-icons flex">
            {#if data.classImg}
                <img src={data.classImg} alt="" width="32" height="32" />
            {/if}
            {#if data.elementImg && !data.elementImg.includes("Attribute_Empty")}
                <img src={data.elementImg} alt="" width="32" height="32" />
            {/if}
        </div>
    </div>
{/if}

<style lang="scss">
    .entry-summary {
        align-items: center;
        gap: 0.8rem;
        position: relative;
        max-inline-size: none;
        width: 100%;
        line-height: 1.4;

        i {
            font-style: normal;
            font-size: var(--step--1);
            color: var(--accent);
            font-weight: bold;
        }
    }

    .entry-thumb {
        background-repeat: no-repeat;
    }

    .extra-icons {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
