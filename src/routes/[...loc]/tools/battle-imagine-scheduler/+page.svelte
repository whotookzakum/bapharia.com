<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { assetUrl } from "$lib/utils";
    import InputText from "$lib/components/InputText.svelte";
    import { DropdownMenu } from "bits-ui";
    import { onMount } from "svelte";
    import Sortable from "sortablejs";
    import Icon from "@iconify/svelte";
    import { browser } from "$app/environment";

    export let data;

    const elemental = {
        120000410: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.png"), // Einrain β
        131001600: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_1.png"), // Little Brawler
        131001800: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_2.png"), // Valley Vanguard
        131003300: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.png"), // Bandit Scout Fox
    };

    let players = [
        {
            name: "Player 1",
            class: 12,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            name: "Player 2",
            class: 6,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            name: "Player 3",
            class: 21,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            name: "Player 4",
            class: 7,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            name: "Player 5",
            class: 11,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            name: "Player 6",
            class: 19,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
    ];

    let bImagineList;

    onMount(() => {
        new Sortable(bImagineList, {
            group: {
                name: "shared",
                pull: "clone",
                put: false,
            },
            sort: false,
            animation: 150,
        });
    });

    function createSortable(ul) {
        new Sortable(ul, {
            group: {
                name: "shared",
            },
            direction: "horizontal",
            animation: 150,
            onAdd: (e) => {
                // When dragged in, add the imagine id to the appropriate player and array
                const playerIndex = ul.getAttribute("player-index");
                const player = players[playerIndex];
                const imagineId = e.item.getAttribute("imagine-id");
                const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"
                player[buffTimeSlot].push(imagineId);

                const playerBuffs1Ul =
                    document.querySelectorAll(`.buffs1`)[playerIndex];
                const playerBuffs2Ul =
                    document.querySelectorAll(`.buffs2`)[playerIndex];

                // Check if player has more than 2 imagine
                if (player.buffs1.length > 2)
                    playerBuffs1Ul.classList.add("danger");
                else if (player.buffs2.length > 2)
                    playerBuffs2Ul.classList.add("danger");
                else if (player.buffs1.length + player.buffs2.length > 2) {
                    playerBuffs1Ul.classList.add("danger");
                    playerBuffs2Ul.classList.add("danger");
                }

                // Check if player already has this imagine
                // https://stackoverflow.com/a/32122760
                const playerDuplicateImagine = [
                    ...player.buffs1,
                    ...player.buffs2,
                ].filter((e, i, a) => a.indexOf(e) !== i);
                if (playerDuplicateImagine.length > 0) {
                    if (
                        [...playerBuffs1Ul.children].some((li) =>
                            playerDuplicateImagine.includes(
                                li.getAttribute("imagine-id"),
                            ),
                        )
                    ) {
                        playerBuffs1Ul.classList.add("danger");
                    }

                    if (
                        [...playerBuffs2Ul.children].some((li) =>
                            playerDuplicateImagine.includes(
                                li.getAttribute("imagine-id"),
                            ),
                        )
                    ) {
                        playerBuffs2Ul.classList.add("danger");
                    }
                }

                // Check if another player has this imagine in the same time slot
                const teamOverlappingImagine = players
                    .flatMap((p) => p[buffTimeSlot])
                    .filter((e, i, a) => a.indexOf(e) !== i);
                if (teamOverlappingImagine.length > 0) {
                    document.querySelectorAll(".buffs1").forEach((ul) => {
                        if (
                            [...ul.children].some((li) =>
                                teamOverlappingImagine.includes(
                                    li.getAttribute("imagine-id"),
                                ),
                            )
                        ) {
                            ul.classList.add("danger");
                        }
                    });

                    document.querySelectorAll(".buffs2").forEach((ul) => {
                        if (
                            [...ul.children].some((li) =>
                                teamOverlappingImagine.includes(
                                    li.getAttribute("imagine-id"),
                                ),
                            )
                        ) {
                            ul.classList.add("danger");
                        }
                    });
                }

                players = players;
            },
            onRemove: (e) => {
                // When dragged in, remove the imagine id from the appropriate player and array
                const playerIndex = ul.getAttribute("player-index");
                const player = players[playerIndex];
                const imagineId = e.item.getAttribute("imagine-id");
                const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"
                // player[buffTimeSlot].push(imagineId);

                const playerBuffs1Ul =
                    document.querySelectorAll(`.buffs1`)[playerIndex];
                const playerBuffs2Ul =
                    document.querySelectorAll(`.buffs2`)[playerIndex];

                // Check if player has up to 2 imagine
                if (player.buffs1.length + player.buffs2.length < 3) {
                    playerBuffs1Ul.classList.remove("danger");
                    playerBuffs2Ul.classList.remove("danger");
                }
                else if (player.buffs1.length < 3)
                    playerBuffs1Ul.classList.remove("danger");
                else if (player.buffs2.length < 3)
                    playerBuffs2Ul.classList.remove("danger");
            },
        });
    }

    function removeNode(e) {
        console.log(e.currentTarget);
        e.currentTarget.parentElement.remove();
        // Find the index of the element inside of the <ul> to delete the correct copy from the array, i.e. [id1, id4, id6, id1] delete the LAST id1 if the X is clicked
    }
</script>

<MetaTags
    title="Battle Imagine Scheduler — Bapharia"
    description="A drag-and-drop tool to organize your party's Battle Imagine rotation. Includes the most important Battle Imagine for group content."
/>

<article class="main-pane gap-8">
    <hgroup>
        <p class="mini-header">Tools</p>
        <h1>Battle Imagine Scheduler</h1>
        <p>
            A drag-and-drop tool to organize your party's Battle Imagine
            rotation. Includes the most important Battle Imagine for group
            content.
        </p>
    </hgroup>

    <section>
        <ul class="flex flex-wrap gap-4" bind:this={bImagineList}>
            {#each data.bImagines as imagine}
                <li
                    class="text-center rounded-lg select-none relative"
                    style="max-width: calc(64px + 0rem); line-height: 1;"
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
                        style="overflow: hidden; width: 100%; text-overflow: ellipsis; white-space: nowrap;"
                    >
                        <small style="font-size: var(--step--2); "
                            >{imagine.text.name
                                .replace("B-", "")
                                .replace("B - ", "")}</small
                        >
                    </div>
                    <button
                        class="x absolute h-6 w-6 grid place-content-center rounded-full"
                        style="color: var(--danger); line-height: 0; top: -0.25rem; left: -0.25rem; visibility: hidden; background: var(--bg)"
                        on:click={(e) => {
                            removeNode(e);
                        }}
                    >
                        <Icon
                            icon="carbon:close-filled"
                            style="font-size: var(--step-3);"
                        />
                    </button>
                </li>
            {/each}
        </ul>
    </section>

    <section>
        <div class="surface1 stripes rounded-2xl">
            <table class="stripes" style="font-size: var(--step-0); ">
                <thead>
                    <tr>
                        <th></th>
                        <th style="width: 176px; font-size: var(--step-3)">
                            <InputText value="0s" />
                        </th>
                        <th style="width: 176px; font-size: var(--step-3)">
                            <InputText value="30s" />
                        </th>
                        <th class="text-center">Cooldown<br />Reduction</th>
                    </tr>
                </thead>
                <tbody>
                    {#each players as player, index}
                        <tr>
                            <td>
                                <div class="flex gap-2 items-center relative">
                                    <DropdownMenu.Root>
                                        <DropdownMenu.Trigger
                                            class="hover:opacity-80 hover-surface3 p-2 rounded-full"
                                        >
                                            <img
                                                src={assetUrl(
                                                    `/UI/Icon/Class/UI_IconClass_${player.class.toString().padStart(2, "0")}.png`,
                                                )}
                                                alt=""
                                                width="32"
                                                height="32"
                                            />
                                        </DropdownMenu.Trigger>
                                        <DropdownMenu.Content
                                            class="flex surface3 p-2 rounded-2xl"
                                            align="end"
                                            sideOffset={8}
                                        >
                                            {#each [12, 21, 6, 20, 19, 11, 7] as id}
                                                <DropdownMenu.Item>
                                                    <button
                                                        class="flex hover-surface2 p-2 rounded-full"
                                                        on:click={() =>
                                                            (player.class = id)}
                                                    >
                                                        <img
                                                            src={assetUrl(
                                                                `/UI/Icon/Class/UI_IconClass_${id.toString().padStart(2, "0")}.png`,
                                                            )}
                                                            alt=""
                                                            width="32"
                                                            height="32"
                                                        />
                                                    </button>
                                                </DropdownMenu.Item>
                                            {/each}
                                        </DropdownMenu.Content>
                                    </DropdownMenu.Root>

                                    <InputText
                                        bind:value={player.name}
                                        style="flex: 1"
                                    />
                                </div>
                            </td>
                            <td style="padding: 0; width: 176px">
                                <ul
                                    class="buffs1 flex items-center gap-4 min-h-[100px] px-4 py-2"
                                    player-index={index}
                                    buff-timing={0}
                                    use:createSortable
                                />
                            </td>
                            <td style="padding: 0; width: 176px">
                                <ul
                                    class="buffs2 flex items-center gap-4 min-h-[100px] px-4 py-2 w-full"
                                    player-index={index}
                                    buff-timing={30}
                                    use:createSortable
                                />
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    bind:checked={player.cdReduction}
                                    class="flex m-auto w-6 h-6"
                                />
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </section>
</article>

<style>
    ul {
        list-style: none !important;
    }

    tbody ul li .x {
        visibility: visible !important;
    }

    :global(.buffs1.danger, .buffs2.danger) {
        outline: 2px solid var(--danger);
    }
</style>
