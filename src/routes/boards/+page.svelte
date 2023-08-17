<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { checkStringIncludes } from "$lib/utils/string_utils.js";
    import BoardHeader from "./BoardHeader.svelte";
    import uniqBy from "lodash/uniqBy";
    import { userLocale } from "$lib/stores";

    export let data;

    let searchTerm = "";
    let selectedMap = "";
    let selectedBoardType = "";

    // TODO Cache the completed boards

    const allPanels = data.adventureboards.map((board) => board.panels).flat();
    const allMaps = allPanels
        .map((panel) => panel.quest.quest_achievement_condition.map_id)
        .filter((map) => map);
    const uniqueMaps = uniqBy(allMaps);

    $: boards = data.adventureboards
        .filter((board) => hasMatchingQuests(board, searchTerm))
        .filter((board) => hasMatchingMap(board, selectedMap))
        .filter((board) => hasMatchingBoardType(board, selectedBoardType));

    function hasMatchingQuests(board, keyword) {
        if (!keyword) return true;
        return board.panels.some(
            (panel) =>
                checkStringIncludes(panel.quest.name.en_US, keyword) ||
                checkStringIncludes(panel.quest.name.ja_JP, keyword)
        );
    }

    function hasMatchingMap(board, mapId) {
        if (!mapId) return true;
        return board.panels.some(
            (panel) => panel.quest.quest_achievement_condition.map_id === mapId
        );
    }

    function hasMatchingBoardType(board, boardType) {
        if (!boardType) return true;
    }
</script>

<MetaTags
    title={`Adventure Boards — Bapharia`}
    description={`Lookup all Adventure Boards in BLUE PROTOCOL. Find boards with duplicate tasks to save time completing them!`}
/>

<h1>Adventure Boards</h1>
<p>
    A tool to help players look up Adventure Boards. The same tasks can often be
    found in multiple boards. Look up the tasks below to efficiently accept them
    all in one go. <br /><br />
    Learn more about Adventure Boards
    <a href="/guides/adventure-boards">here</a>.
</p>

<div class="flex g-50 search-row">
    <div class="grid" style="flex: 1; max-width: 700px; flex-basis: 200px">
        <span class="component-label">Search</span>
        <input
            class="box"
            type="text"
            bind:value={searchTerm}
            placeholder={`Search by board name or included quests, i.e. "Dragon's Rive" or "Goblin"`}
        />
    </div>

    <div class="grid">
        <span class="component-label">Board Type</span>
        <select class="box" bind:value={selectedBoardType}>
            <option value="">All</option>
            <option value="1">Adventurer Rank</option>
            <option value="1">Weapon</option>
            <option value="1">Class Talisman</option>
            <option value="1">Imagine</option>
            <option value="1">Event</option>
        </select>
    </div>
    <div class="grid">
        <span class="component-label">Map</span>
        <select class="box" bind:value={selectedMap}>
            <option value="">All</option>
            {#each uniqueMaps as map}
                <option value={map}>{map}</option>
            {/each}
        </select>
    </div>
</div>

{#if searchTerm}
    <p class="results-text">
        {boards.length} results for "<b>{searchTerm}</b>"
    </p>
{:else}
    <p class="results-text">{boards.length} results</p>
{/if}

<ul class="boards-list unstyled-list" role="list">
    {#each boards as board}
        {#if board.id !== 110010000}
            <li class="box">
                <BoardHeader {board} />
                {#each board.panels.filter((panel) => checkStringIncludes(panel.quest.name.en_US, searchTerm) || checkStringIncludes(panel.quest.name.ja_JP, searchTerm)) as panel}
                    <p style="color: var(--text2); font-size: var(--step-0)">
                        {panel.quest.name[$userLocale]}
                    </p>
                {/each}
            </li>
        {/if}
    {/each}
</ul>

<style lang="scss">
    .search-row {
        flex-wrap: wrap;
        row-gap: 1rem;
    }

    .results-text {
        color: var(--text2);
        font-size: var(--step-0);

        b {
            color: var(--text1);
        }
    }

    .boards-list {
        grid-template-columns: repeat(
            auto-fill,
            minmax(calc(208px + 2rem), 1fr)
        );
    }

    @media (max-width: 1150px) {
        h1 {
            padding-top: 62px;
        }
    }
</style>
