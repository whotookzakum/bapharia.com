<script>
    import { userLocale } from "$lib/stores";
    import { katakanaToHiragana } from "$lib/utils/string_utils";
    import { userSearch } from "./stores";
    export let data;
    export let isListView = true;

    // data.category is more specific, i.e. "Consumable" instead of "Item"
    let backgroundStyle =
        data?.skill_type <= 6
            ? `background-image: url(${data?.skillBackgroundImg})`
            : "";

    // https://bitsofco.de/a-one-line-solution-to-highlighting-search-matches/
    // TODO: Fix Japanese next that starts with Kanji is not highlighted; probably not inside the Regex match
    // https://stackoverflow.com/questions/19899554/unicode-range-for-japanese
    // TODO: Only match first instance, so for example Bahamar wouldn't highlight 3 separate characters
    function highlightMatchedTerm(entryName) {
        return entryName
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
        return entryId
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
    <li class="entry-summary grid box" class:list-view-item={isListView}>
        <img
            src={data.thumb}
            class="entry-thumb"
            class:board-bg={data.thumb?.includes("Icon/Adventureboard")}
            style={backgroundStyle}
            alt=""
        />
        <div class="grid g-25">
            <div>
                <a class="styled-link" href="/db/{"a" || data.__typename.toLowerCase().replace("gamemap", "map")}/{data.id}">
                    {@html highlightMatchedTerm(data.name[$userLocale])}
                </a>
                {#if itemLevel()}
                    <i>(Lv. {itemLevel()})</i>
                {/if}
            </div>
            <!-- <div>
                <span class={`${data.__typename} box pill`}>
                    {data.subcategoryName[$userLocale]}
                </span>
                <span class="entry-id box pill">
                    ID: {@html highlightMatchedId(data.id)}
                </span>
            </div> -->
        </div>
        <div class="extra-icons flex">
            {#if data.classImg}
                <img src={data.classImg} alt="" width="32" height="32" />
            {/if}
            {#if data.elementImg && !data.elementImg.includes("Attribute_Empty")}
                <img src={data.elementImg} alt="" width="32" height="32" />
            {/if}
        </div>
    </li>
{/if}

<style lang="scss">
    .entry-summary {
        align-content: start;
        justify-items: center;
        gap: 0.8rem;
        position: relative;
        z-index: 1;
        max-inline-size: none;
        width: 100%;
        line-height: 1.4;
        // padding: 0.8rem;
        text-align: center;

        i {
            font-style: normal;
            font-size: var(--step--1);
            color: var(--accent);
            font-weight: bold;
        }

        &:hover {
            background: var(--surface2);
        }
    }

    .list-view-item {
        display: flex;
        align-items: center;

        img {
            width: 64px;
            height: auto;
            background: none;
        }
    }

    a::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 1;
    }

    .board-bg {
        background-repeat: no-repeat;
        background-image: url("/UI/AdventureBoard/UI_AdventureBoardBoardBg_copper.png");
        background-size: contain;
        // width: 100%;
        // height: auto;
    }

    .extra-icons {
        position: absolute;
        right: 0;
        top: 0;
    }
</style>
