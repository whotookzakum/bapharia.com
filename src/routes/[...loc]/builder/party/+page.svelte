<script>
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
            class: 12,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            class: 6,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            class: 21,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            class: 7,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
            class: 11,
            checked: data.bImagines.map((i) => false),
            buffs1: [],
            buffs2: [],
        },
        {
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

    let buffs = {
        buffs1: [],
        buffs2: [],
    };

    function createSortable(ul) {
        new Sortable(ul, {
            group: {
                name: "shared",
            },
            direction: "horizontal",
            animation: 150,
            onAdd: (e) => {
                const playerIndex = ul.getAttribute("player-index");
                const player = players[playerIndex];
                const imagineId = e.item.getAttribute("imagine-id");
                const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"
                player[buffTimeSlot].push(imagineId);

                const playerDuplicateBuff =
                    [...player.buffs1, ...player.buffs2].filter(
                        (buff) => buff === imagineId,
                    ).length > 1;
                const playerExceedMaxBuffs =
                    player.buffs1.length + player.buffs2.length > 2;

                console.log(playerDuplicateBuff);

                document
                    .querySelectorAll(`.${buffTimeSlot}`)
                    .forEach((node) => {
                        const ulContainsDuplicateId = [...node.children].some(
                            (child) =>
                                child.getAttribute("imagine-id") === imagineId,
                        );
                        if (
                            ulContainsDuplicateId &&
                            ![...ul.classList].includes("danger")
                        )
                            ul.classList.add("danger");

                        // if (node.getAttribute("imagine-id") === imagineId) node.
                        // console.log()
                    });

                if (playerDuplicateBuff || playerExceedMaxBuffs) {
                }

                // const allBuffsInTimeSlot = players.flatMap(player => player[buffTimeSlot])
                // if (allBuffsInTimeSlot.includes(imagineId))

                // const duplicatesInTimeSlot = allBuffsInTimeSlot.filter((val, i) => allBuffsInTimeSlot.includes(val, i + 1))

                // if (duplicatesInTimeSlot.length > 0 && duplicatesInTimeSlot.some(dupe => playerBuffsInTimeSlot.includes(dupe))) {

                // }

                // console.log(node)

                // console.log(node.classList[0])

                // buffs1 = document.querySelectorAll(".buffs1 li")
                // if (new Set([...buffs1].map(node => node.getAttribute("imagine-id"))).size !== buffs1.length) {
                //     console.log(document.querySelectorAll(".buffs1"))
                // }

                // console.log(new Set([...buffs1].map(node => node.getAttribute("imagine-id"))).size === buffs1.length)

                players = players;
                // console.log(node.getAttribute("player-index"), players[node.getAttribute("player-index")].selected)
            },
            onRemove: (e) => {
                const playerIndex = ul.getAttribute("player-index");
                const player = players[playerIndex];
                const imagineId = e.item.getAttribute("imagine-id");
                const buffTimeSlot = ul.classList[0]; // "buffs1" or "buffs2"
                player[buffTimeSlot].splice(
                    player[buffTimeSlot].indexOf(imagineId),
                    1,
                );
            },
        });
    }

    function getDanger(list) {
        if (browser) {
            console.log();
        }

        // const maxImaginesExceeded = selected.length > 2
        // return maxImaginesExceeded

        // player.selected.includes() players.flatMap(p => p.selected).filter()
    }
</script>

<div class="panes">
    <article class="main-pane gap-8" style="grid-column: 1/-1">
        <section style="grid-column: 1/-1">
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
                                console.log(e.currentTarget);
                                e.currentTarget.parentElement.remove();
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

        <section style="grid-column: 1/-1">
            <div class="surface1 stripes rounded-2xl">
                <table
                    class="stripes"
                    style="font-size: var(--step-0); table-layout: fixed;"
                >
                    <thead>
                        <tr style="font-size: var(--step-3)">
                            <th></th>
                            <th>0s</th>
                            <th>30s</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each players as player, index}
                            <tr>
                                <td style="max-width: 150px">
                                    <div
                                        class="flex gap-2 items-center relative"
                                    >
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
                                                                (player.class =
                                                                    id)}
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
                                    {player.buffs1}
                                </td>
                                <td style="padding: 0">
                                    <ul
                                        class="buffs1 flex items-center flex-wrap gap-4 min-h-[100px] px-4 py-2"
                                        player-index={index}
                                        buff-timing={0}
                                        use:createSortable
                                    >
                                        {#each buffs.buffs1 as _}
                                            <li
                                                class="text-center rounded-lg select-none relative"
                                                style="max-width: calc(64px + 0rem); line-height: 1;"
                                                imagine-id={data.bImagines[0].id}
                                            >
                                                <div class="relative">
                                                    <img
                                                        src={assetUrl(
                                                            data.bImagines.assets.icon,
                                                        )}
                                                        alt=""
                                                        width="64"
                                                        height="64"
                                                    />
                                                    {#if elemental[data.bImagines[0].id]}
                                                        <img
                                                            src={elemental[
                                                                data.bImagines[0].id
                                                            ]}
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
                                                    <small
                                                        style="font-size: var(--step--2); "
                                                        >{imagine.text.name
                                                            .replace("B-", "")
                                                            .replace(
                                                                "B - ",
                                                                "",
                                                            )}</small
                                                    >
                                                </div>
                                                <button
                                                    class="x absolute h-6 w-6 grid place-content-center rounded-full"
                                                    style="color: var(--danger); line-height: 0; top: -0.25rem; left: -0.25rem; visibility: hidden; background: var(--bg)"
                                                    on:click={(e) => {
                                                        console.log(
                                                            e.currentTarget,
                                                        );
                                                        e.currentTarget.parentElement.remove();
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
                                </td>
                                <td style="padding: 0">
                                    <ul
                                        class="buffs2 flex items-center flex-wrap gap-4 min-h-[100px] px-4 py-2"
                                        player-index={index}
                                        buff-timing={30}
                                        use:createSortable
                                    />
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </section>
    </article>
</div>

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
