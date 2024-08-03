<script>
    import Sortable from "sortablejs";

    export let groupName = "shared";
    export let put = true;
    export let removeOnSpill = false;
    export let revertOnSpill = false;
    export let sort = true;
    export let caption = ""; // "Drop here to add to the player's Imagine list"
    export let itemIds = [];
    export let danger = false;
    export let col = null;

    let showCaption = Boolean(caption);

    // Note: more complex functionality can be added, such as tracking which nodes were added to a player's inventory. That way, INVENTORY items cannot be moved to other players after being placed in a column. Not planned for now.

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
                itemIds = [...ul.children].map((li) =>
                    parseInt(li.getAttribute("imagine-id")),
                );
                console.log(
                    `Added ${e.item.getAttribute("imagine-id")}`,
                    itemIds,
                );
                showCaption = false;
            },
            onRemove: (e) => {
                itemIds = [...ul.children].map((li) =>
                    parseInt(li.getAttribute("imagine-id")),
                );
                console.log(
                    `Removed ${e.item.getAttribute("imagine-id")}`,
                    itemIds,
                );
                if (itemIds.length < 1) showCaption = true;
            },
            onSpill: (e) => {
                itemIds.splice(e.oldIndex, 1);
                itemIds = itemIds;
                console.log(
                    `Spilled ${e.item.getAttribute("imagine-id")}`,
                    itemIds,
                );
                if (itemIds.length < 1) showCaption = true;
            },
            onChoose: (e) => {
                let selector = "ul.drop-zone"

                // When dragging specifically from a player's inventory, only light up the columns for that player
                if ([...ul.classList].includes("imagine-bank")) {
                    selector = "[player-index]:has(.imagine-bank li:hover) .drop-zone"
                }

                [...document.querySelectorAll(selector)].forEach((ul) => {
                    ul.classList.add("border-accent1"); // Add "show-caption" so the caption only shows when dragging an item
                    ul.style.setProperty("--caption-color", "var(--accent1)");
                });
            },
            onUnchoose: (e) => {
                [...document.querySelectorAll("ul.drop-zone")].forEach((ul) => {
                    ul.classList.remove("border-accent1");
                    ul.style.setProperty("--caption-color", "");
                });
            },
        });
    }
</script>

<ul
    class="drop-zone flex flex-wrap items-center gap-4 p-4"
    class:danger
    class:show-caption={showCaption}
    data-caption={caption}
    data-col={col}
    use:createSortable
    {...$$restProps}
/>

<style lang="scss">
    ul.drop-zone {
        border-color: var(--surface4);
        --border: 5px dashed var(--surface4);
        border-inline: var(--border);
        transition: border-color 0.2s var(--timing1);
        position: relative;

        &::before {
            content: attr(data-caption);
            color: var(--caption-color, var(--text3));
            font-size: var(--step--1);
            position: absolute;
            left: 50%;
            top: 50%;
            translate: -50% calc(-50% + 4px);
            opacity: 0;
            white-space: nowrap;
            transition: all 0.2s var(--timing1);
            font-weight: 600;
        }

        &.show-caption::before {
            opacity: 1;
            translate: -50% -50%;
        }
    }

    :global(.border-accent1) {
        border-color: var(--accent1) !important;
    }

    .danger {
        border-color: var(--danger) !important;
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
</style>
