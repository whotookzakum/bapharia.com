<script>
    import Sortable from "sortablejs";

    export let groupName = "shared";
    export let put = true;
    export let removeOnSpill = false;
    export let revertOnSpill = false;
    export let sort = true;
    export let caption = ""; // "Drop here to add to the player's Imagine list"

    function createSortable(ul) {
        new Sortable(ul, {
            group: {
                name: groupName,
                put,
            },
            direction: "horizontal",
            animation: 150,
            removeOnSpill,
            revertOnSpill,
            sort,
            onAdd: (e) => {
                caption = ""

                // // When dragged in, add the imagine id to the appropriate player and array
                // const playerIndex = ul.getAttribute("player-index");
                // const player = players[playerIndex];
                // const imagineId = e.item.getAttribute("imagine-id");
                // const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"
                // player[buffTimeSlot].push(imagineId);

                // const playerBuffs1Ul =
                //     document.querySelectorAll(`.buffs1`)[playerIndex];
                // const playerBuffs2Ul =
                //     document.querySelectorAll(`.buffs2`)[playerIndex];

                // // Check if player has more than 2 imagine
                // if (player.buffs1.length > 2)
                //     playerBuffs1Ul.classList.add("danger");
                // else if (player.buffs2.length > 2)
                //     playerBuffs2Ul.classList.add("danger");
                // else if (player.buffs1.length + player.buffs2.length > 2) {
                //     playerBuffs1Ul.classList.add("danger");
                //     playerBuffs2Ul.classList.add("danger");
                // }

                // // Check if player already has this imagine
                // // https://stackoverflow.com/a/32122760
                // const playerDuplicateImagine = [
                //     ...player.buffs1,
                //     ...player.buffs2,
                // ].filter((e, i, a) => a.indexOf(e) !== i);
                // if (playerDuplicateImagine.length > 0) {
                //     if (
                //         [...playerBuffs1Ul.children].some((li) =>
                //             playerDuplicateImagine.includes(
                //                 li.getAttribute("imagine-id"),
                //             ),
                //         )
                //     ) {
                //         playerBuffs1Ul.classList.add("danger");
                //     }

                //     if (
                //         [...playerBuffs2Ul.children].some((li) =>
                //             playerDuplicateImagine.includes(
                //                 li.getAttribute("imagine-id"),
                //             ),
                //         )
                //     ) {
                //         playerBuffs2Ul.classList.add("danger");
                //     }
                // }

                // // Check if another player has this imagine in the same time slot
                // // Self-buff imagine can be duplicated
                // if (!soloImagine.some((id) => id == imagineId)) {
                //     const teamOverlappingImagine = players
                //         .flatMap((p) => p[buffTimeSlot])
                //         .filter((e, i, a) => a.indexOf(e) !== i);

                //     if (teamOverlappingImagine.length > 0) {
                //         document.querySelectorAll(".buffs1").forEach((ul) => {
                //             if (
                //                 [...ul.children].some((li) =>
                //                     teamOverlappingImagine.includes(
                //                         li.getAttribute("imagine-id"),
                //                     ),
                //                 )
                //             ) {
                //                 ul.classList.add("danger");
                //             }
                //         });

                //         document.querySelectorAll(".buffs2").forEach((ul) => {
                //             if (
                //                 [...ul.children].some((li) =>
                //                     teamOverlappingImagine.includes(
                //                         li.getAttribute("imagine-id"),
                //                     ),
                //                 )
                //             ) {
                //                 ul.classList.add("danger");
                //             }
                //         });
                //     }
                // }

                // players = players;
            },
            // onRemove: (e) => {
            //     // When dragged out, remove the imagine id from the appropriate player and array
            //     const playerIndex = ul.getAttribute("player-index");
            //     const player = players[playerIndex];
            //     const imagineId = e.item.getAttribute("imagine-id");
            //     const buffTimeSlot = ul.classList[0];

            //     player[buffTimeSlot].splice(
            //         player[buffTimeSlot].indexOf(imagineId),
            //     );

            //     players = players;
            // },
            // onSpill: (e) => {
            //     console.log(e);

            //     // When dragged out, remove the imagine id from the appropriate player and array
            //     const playerIndex = ul.getAttribute("player-index");
            //     const player = players[playerIndex];
            //     const imagineId = e.item.getAttribute("imagine-id");
            //     const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"

            //     // Check if any other player had this imagine
            //     [...document.querySelectorAll(`.${buffTimeSlot}`)].forEach(
            //         (otherPlayerUl, index) => {
            //             const containsDuplicateChild = [
            //                 ...otherPlayerUl.children,
            //             ].some(
            //                 (child) =>
            //                     child.getAttribute("imagine-id") == imagineId,
            //             );
            //             const isDanger =
            //                 otherPlayerUl.classList.contains("danger");
            //             if (isDanger && containsDuplicateChild) {
            //                 otherPlayerUl.classList.remove("danger");
            //             }
            //         },
            //     );

            //     player[buffTimeSlot].splice(
            //         player[buffTimeSlot].indexOf(imagineId),
            //     );

            //     const playerBuffs1Ul =
            //         document.querySelectorAll(`.buffs1`)[playerIndex];
            //     const playerBuffs2Ul =
            //         document.querySelectorAll(`.buffs2`)[playerIndex];

            //     // Check if player has up to 2 imagine
            //     if (player.buffs1.length + player.buffs2.length < 3) {
            //         playerBuffs1Ul.classList.remove("danger");
            //         playerBuffs2Ul.classList.remove("danger");
            //     } else if (player.buffs1.length < 3)
            //         playerBuffs1Ul.classList.remove("danger");
            //     else if (player.buffs2.length < 3)
            //         playerBuffs2Ul.classList.remove("danger");

            //     players = players;
            // },
        });
    }
</script>

<ul
    class="drop-zone flex flex-wrap gap-4 p-4"
    data-caption={caption}
    use:createSortable
    {...$$restProps}
/>

<style lang="scss">
    ul.drop-zone {
        border-color: var(--surface4);
        --border: 5px dashed var(--surface4);
        // background: var(--surface2);
        border-inline: var(--border);
        transition: border-color 0.2s ease;
        width: calc(128px + 3rem + 10px);
        min-height: calc(84px + 2rem);
        height: 100%;
        position: relative;

        &::before {
            content: attr(data-caption);
            color: var(--text3);
            font-size: var(--step--1);
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% -50%;
            white-space: nowrap;
        }
    }

    :global(ul:has(.drop-zone) li:last-of-type .drop-zone) {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        border-bottom: var(--border);
    }

    :global(ul:has(.drop-zone) li:first-of-type .drop-zone) {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        border-top: var(--border);
    }

    :global(
            ul:has(.drop-zone:last-of-type:hover) .drop-zone:last-of-type,
            ul:has(.drop-zone:first-of-type:hover) .drop-zone:first-of-type
        ) {
        border-color: var(--accent1) !important;
    }
</style>
