<script>
    import { userLocale } from "$lib/stores";
    export let board = {};
    console.log(board)
</script>

<div class="grid g-50">
    <img
        class="board-img"
        src="/UI/Icon/Adventureboard/UI_Adventureboard_{board.icon_id}.png"
        alt=""
        width="208"
        height="128"
        loading="lazy"
    />
    <h2 class="board-name">{board.name[$userLocale]} {board.id} {board.board_type}</h2>
</div>

<style lang="scss">
    .grid {
        place-items: center;
    }

    .board-img {
        background-image: url("/UI/AdventureBoard/UI_AdventureBoardBoardBg_copper.png");
        // width: 104px;
        // height: auto;
    }

    .board-name {
        font-size: var(--step-1);
        font-weight: 600;
        line-height: 1.6;
        margin: 0;
        text-align: center;
        color: var(--text2);
        font-family: inherit;
    }
</style>
