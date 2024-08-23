<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { assetUrl } from "$lib/utils";
    import InputText from "$lib/components/InputText.svelte";
    import Sortable from "sortablejs";
    import DropZone from "./DropZone.svelte";
    import ClassSelector from "./ClassSelector.svelte";

    export let data;

    // TODO: Save & load player data in localStorage (needs logic for loading elements into sortable <ul>'s via imagine ids)
    // TODO: Save & load player profiles, including their inventory
    // TODO: Add a total of all of the buffs, such as Reduce Damage Received (42%)
    // TODO: Rewrite showWarning() to give a proper warning message
    // TODO: showWarning(): Caution if 2 of the same B-imagine at the same time
    // TODO: showWarning(): Warning if user has same B-imagine at 0 and 30

    let col1text = "0s";
    let col2text = "30s";

    const imagineCategories = [
        {
            name: "Party Buffs",
            ids: [
                120000300, 120000110, 120000400, 133001000, 131005100,
                120000510, 120000520
            ],
        },
        {
            name: "Enemy Debuffs",
            ids: [
                120000410, 131002100, 131000500, 131001600, 131001800,
                131003300, 120000530
            ],
        },
        {
            name: "Self Buffs",
            ids: [120000010, 131003800],
        },
        {
            name: "Other",
            ids: [131004600],
        },
    ];

    const elemental = {
        120000410: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.webp"), // Einrain β
        131001600: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_1.webp"), // Little Brawler
        131001800: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_2.webp"), // Valley Vanguard
        131003300: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.webp"), // Bandit Scout Fox
    };

    let players = [
        {
            name: "Player 1",
            class: 12,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
        {
            name: "Player 2",
            class: 6,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
        {
            name: "Player 3",
            class: 21,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
        {
            name: "Player 4",
            class: 7,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
        {
            name: "Player 5",
            class: 11,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
        {
            name: "Player 6",
            class: 19,
            checked: data.bImagines.map((i) => false),
            col1: [],
            col2: [],
        },
    ];

    function createSortable(ul) {
        // The main cloneable decks
        new Sortable(ul, {
            group: {
                name: "shared",
                pull: "clone",
                put: false,
            },
            sort: false,
            animation: 150,
            onChoose: (e) => {
                [...document.querySelectorAll("ul.drop-zone")].forEach((ul) => {
                    ul.classList.add("border-accent1"); // can add show-caption here to only show it while dragging an imagine
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

    function showWarning(player, col) {
        const colTooMany = player[col].length > 2;
        if (colTooMany) return true;

        const col1and2TooMany =
            player.col1.length > 0 &&
            player.col2.length > 0 &&
            player.col1.length + player.col2.length > 2;
        return col1and2TooMany;
    }
</script>

<MetaTags
    title="Battle Imagine Scheduler — Bapharia"
    description="A drag-and-drop tool to organize your party's Battle Imagine rotation. Includes the most important Battle Imagine for group content."
/>

<article class="main-pane gap-8">
    <hgroup>
        <p class="mini-header">Bapharia</p>
        <h1>Battle Imagine Scheduler</h1>
        <p>
            A drag-and-drop tool to organize your party's Battle Imagine
            rotation. Includes the most important Battle Imagine for group
            content.
        </p>
    </hgroup>

    <aside class="toc grid gap-2">
        {#each imagineCategories as category}
            <p class="mini-header">{category.name}</p>
            <ul class="flex flex-wrap gap-x-2 gap-y-4 mb-6" use:createSortable>
                {#each data.bImagines.filter( (imagine) => category.ids.includes(imagine.id), ) as imagine}
                    <li
                        class="item text-center rounded-lg select-none relative"
                        style="line-height: 1"
                        imagine-id={imagine.id}
                    >
                        <div class="relative">
                            <img
                                src={assetUrl(imagine.assets.icon)}
                                alt=""
                                width="64"
                                height="64"
                            />
                            {#if elemental[imagine.id]}
                                <img
                                    src={elemental[imagine.id]}
                                    alt=""
                                    width="24"
                                    height="24"
                                    class="absolute"
                                    style="bottom: -0.5rem; right: -0.5rem;"
                                />
                            {/if}
                        </div>
                        <div
                            class="overflow-hidden w-full text-ellipsis whitespace-nowrap"
                        >
                            <small style="font-size: var(--step--2); "
                                >{imagine.text.name
                                    .replace("B-", "")
                                    .replace("B - ", "")}</small
                            >
                        </div>
                    </li>
                {/each}
            </ul>
        {/each}
    </aside>

    <section class="surface1 rounded-2xl">
        <div class="flex gap-4 p-4 items-start">
            <InputText
                style="margin-left: auto; width: calc(128px + 3rem + 10px);"
                bind:value={col1text}
            />
            <InputText
                style="width: calc(128px + 3rem + 10px);"
                bind:value={col2text}
            />
        </div>

        <ul class="player-list">
            {#each players as player, index}
                <li
                    class="flex gap-4 pl-2 pr-4"
                    class:pb-4={index === players.length - 1}
                    style="min-height: calc(84px + {index === players.length - 1
                        ? '3rem'
                        : '2rem'} + 5px);"
                    player-index={index}
                >
                    <div class="player-section grid gap-1 flex-1 my-2">
                        <div class="flex gap-2 items-center self-start">
                            <ClassSelector
                                bind:classId={player.class}
                                {index}
                            />
                            <InputText
                                style="flex: 1;"
                                bind:value={player.name}
                            />
                        </div>
                        <DropZone
                            style="border: none; border-radius: 0.5rem; width: 100%; min-height: 40px; height: 100%; background: none"
                            class="imagine-bank drop-zone flex flex-wrap gap-2 py-1 px-2"
                            caption="Drop here for player inventory"
                            removeOnSpill
                            groupName="player{index}inventory"
                            put={["shared", `player${index}cols`]}
                        />
                    </div>

                    <DropZone
                        col={1}
                        removeOnSpill
                        groupName="player{index}cols"
                        put={[
                            "shared",
                            `player${index}inventory`,
                            ...players.map((p, idx) => `player${idx}cols`),
                        ]}
                        bind:itemIds={player.col1}
                        playerIndex={index}
                        danger={showWarning(player, "col1")}
                        style="width: calc(128px + 3rem + 10px);"
                    />
                    <DropZone
                        col={2}
                        removeOnSpill
                        groupName="player{index}cols"
                        put={[
                            "shared",
                            `player${index}inventory`,
                            ...players.map((p, idx) => `player${idx}cols`),
                        ]}
                        bind:itemIds={player.col2}
                        playerIndex={index}
                        danger={showWarning(player, "col2")}
                        style="width: calc(128px + 3rem + 10px);"
                    />
                </li>
            {/each}
        </ul>
    </section>
</article>

<style lang="scss">
    ul {
        list-style: none !important;
    }

    img {
        display: initial !important;
    }

    .player-list {
        & > li:nth-of-type(2n) {
            background: var(--surface2);

            &:last-of-type {
                border-bottom-left-radius: 1rem;
                border-bottom-right-radius: 1rem;
            }
        }
    }

    .player-section {
        column-gap: 0.5rem;
    }

    .item {
        max-width: 64px;
    }

    :global(.imagine-bank img:not(.absolute)) {
        width: 48px;
        height: 48px;
    }

    :global(.imagine-bank img.absolute) {
        width: 20px;
        height: 20px;
    }

    :global(.imagine-bank .item) {
        max-width: 48px !important;
    }
</style>
