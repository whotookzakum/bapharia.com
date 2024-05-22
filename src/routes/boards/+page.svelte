<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { checkStringIncludes } from "$lib/utils/string_utils.js";
    import uniqBy from "lodash/uniqBy";
    import StickyNote from "$lib/components/StickyNote.svelte";
    import ResultItem from "./ResultItem.svelte";

    export let data;

    let searchTerm = "";
    let selectedMap = "";
    let selectedBoardType = "";
    let includeBoardTasks = true;
    let includeRelatedQuests = true;

    // TODO Cache the completed boards

    const allPanels = data.adventureboards.map((board) => board.panels).flat();
    const allMaps = allPanels
        .map((panel) => panel.quest.quest_achievement_condition.map_id)
        .filter((map) => map);
    const uniqueMaps = uniqBy(allMaps);

    $: boards = data.adventureboards.filter(
        (board) =>
            matchesSearchTerm(board, searchTerm, includeBoardTasks) &&
            hasMatchingMap(board, selectedMap) &&
            hasMatchingBoardType(board, selectedBoardType)
    );

    $: quests = data.quests.filter((quest) =>
        hasMatchingStep(quest, searchTerm)
    );

    function hasMatchingStep(quest, keyword) {
        if (!keyword) return true;
        return quest.steps.some(
            (step) =>
                checkStringIncludes(step.desc.en_US, keyword) ||
                checkStringIncludes(step.desc.ja_JP, keyword)
        );
    }

    function matchesSearchTerm(board, term, includeTasks) {
        if (includeTasks) {
            return (
                hasMatchingName(board, term) || hasMatchingQuests(board, term)
            );
        }
        return hasMatchingName(board, term);
    }

    function hasMatchingName(board, keyword) {
        if (!keyword) return true;
        return (
            checkStringIncludes(board.name.en_US, keyword) ||
            checkStringIncludes(board.name.ja_JP, keyword)
        );
    }

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
        else if ([0, 1, 2].includes(boardType)) {
            return board.board_type === boardType;
        } else if (boardType === "weapon") {
            return board.name.ja_JP.includes("武器ボード");
        } else if (boardType === "class") {
            return board.name.ja_JP.includes("闘士の護符ボード");
        } else if (boardType === "imagine") {
            return board.name.ja_JP.slice(0, 2) === "E-";
        }
    }
</script>

<MetaTags
    title={`Adventure Boards — Bapharia`}
    description={`Lookup all Adventure Boards in BLUE PROTOCOL. Find boards with duplicate tasks to save time completing them! Also includes overlapping quests.`}
/>

<h1>Adventure Boards</h1>
<p>
    A tool to help players look up Adventure Boards. The same tasks can often be
    found in multiple boards. Look up the tasks below to efficiently accept them
    all in one go. <br /><br />
    Learn more about Adventure Boards
    <a href="/guides/adventure-boards">here</a>.
</p>

<StickyNote type="warning">
    Some of the English text is currently incorrect, so please check the
    Japanese text as well.
</StickyNote>

<div class="flex gap-2 search-row">
    <div class="grid search-box-wrapper">
        <span class="component-label">Search</span>
        <input
            class="box"
            type="text"
            bind:value={searchTerm}
            placeholder={`Search by board name ${
                includeBoardTasks
                    ? `or tasks, i.e. "dragon's rive" or "goblin"`
                    : ""
            }`}
        />
    </div>

    <div class="grid">
        <span class="component-label">Board Type</span>
        <select class="box" bind:value={selectedBoardType}>
            <option value="">All</option>
            <option value={2}>Adventurer Rank</option>
            <option value="weapon">Weapon</option>
            <option value="class">Class Talisman</option>
            <option value="imagine">Imagine</option>
            <option value={1}>Event</option>
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

    <div>
        <label>
            <input type="checkbox" bind:checked={includeBoardTasks} /> Include board
            tasks in search
        </label>
    </div>

    <div>
        <label>
            <input type="checkbox" bind:checked={includeRelatedQuests} /> Include
            related quests
        </label>
    </div>
</div>

<p class="results-text">
    {#if searchTerm && includeRelatedQuests}
        {boards.length + quests.length}
    {:else}
        {boards.length}
    {/if}
    results
    {#if searchTerm}
        for "<b>{searchTerm}</b>"
        {#if includeRelatedQuests}
            ({boards.length} boards and {quests.length} quests)
        {/if}
    {/if}
</p>

<ul class="boards-list unstyled-list" role="list">
    {#each boards as board}
        {#if board.id !== 110010000}
            <ResultItem result={board} type="board" {searchTerm} {includeBoardTasks} />
        {/if}
    {/each}
    {#if searchTerm && includeRelatedQuests}
        {#each quests as quest}
            <ResultItem result={quest} type="quest" {searchTerm} />
        {/each}

        <!-- <RelatedQuests {quests} {searchTerm} /> -->
    {/if}
</ul>

<style lang="scss">
    .search-row {
        flex-wrap: wrap;
        row-gap: 1rem;
        align-items: last baseline;

        .search-box-wrapper {
            flex: 1;
            max-width: 700px;
            flex-basis: 260px;
        }
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
            padding-top: var(--nav-height);
        }
    }
</style>
