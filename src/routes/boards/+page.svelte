<script>
    import { userLocale } from '$lib/stores.js';
    import { checkStringIncludes } from '$lib/utils/string_utils.js';
    export let data;
    let boards = data.adventureboards;
    let searchTerm = "";

    // TODO Cache the completed boards

    $: if (searchTerm) {
        boards = data.adventureboards.filter(board => board.panels.some(panel => checkStringIncludes(panel.quest.name.en_US, searchTerm) || checkStringIncludes(panel.quest.name.ja_JP, searchTerm)))
    }
</script>

<input type="text" name="" id="" bind:value={searchTerm}>
<p>{searchTerm}</p>
<ul>
    {#each boards as board}
        <li>
            {board.id}
            <!-- <img class="board-img" src="/UI/Icon/Adventureboard/UI_Adventureboard_{board.icon_id}.png" alt="" width="208" height="128" loading="lazy"> -->
            <strong>{board.name[$userLocale]}</strong>
            {#each searchTerm ? board.panels.filter(panel => checkStringIncludes(panel.quest.name.en_US, searchTerm) || checkStringIncludes(panel.quest.name.ja_JP, searchTerm)) : board.panels as panel}
                <p>{panel.quest.name[$userLocale]}</p>
            {/each}
        </li>
    {/each}
</ul>

<style lang="scss">
    .board-img {
        background-image: url("/UI/AdventureBoard/UI_AdventureBoardBoardBg_copper.png");
    }
</style>