<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import { assetUrl } from "$lib/utils";
    import InputText from "$lib/components/InputText.svelte";
    import { onMount } from "svelte";
    import Sortable from "sortablejs";
    import DropZone from "./DropZone.svelte";
    import RadioSlider from "$lib/components/RadioSlider.svelte";
    import ClassSelector from "./ClassSelector.svelte";

    export let data;

    const elemental = {
        120000410: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.png"), // Einrain β
        131001600: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_1.png"), // Little Brawler
        131001800: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_2.png"), // Valley Vanguard
        131003300: assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.png"), // Bandit Scout Fox
    };

    const soloImagine = [
        120000010, // Feste β
        131003800, // Prairie Anima
    ];

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
        // The main cloneable deck
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

    <aside class="toc grid gap-4">
        <p class="mini-header">Saved Players</p>
        <details class="rounded-lg surface1 py-2 px-3">
            <summary class="arrow">OneCard</summary>
            Stuff goes here.
        </details>
    </aside>

    <section>
        <ul class="flex flex-wrap gap-4" bind:this={bImagineList}>
            {#each data.bImagines as imagine}
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
    </section>

    <section class="surface1 rounded-2xl">
        <ul class="player-list grid">
            {#each players as player, index}
                <li
                    class="flex gap-4 pl-2 pr-4"
                    class:pt-4={index === 0}
                    class:pb-4={index === players.length - 1}
                >
                    <div
                        class="player-section grid gap-1 flex-1"
                        class:mt-2={index !== 0}
                        class:mb-2={index !== players.length - 1}
                        style="align-content: start; place-items: stretch;"
                    >
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
                            style="border: none; border-radius: 0.5rem; width: 100%; min-height: 56px; height: 100%;"
                            class="imagine-bank drop-zone flex flex-wrap gap-2 py-1 px-2"
                            imagineBank
                            removeOnSpill
                            groupName="player{index}Groups"
                            put={["shared", `player${index}Groups`]}
                        />
                    </div>

                    <DropZone
                        removeOnSpill
                        groupName="player{index}Groups"
                        put={["shared", `player${index}Groups`]}
                    />
                    <DropZone
                        removeOnSpill
                        groupName="player{index}Groups"
                        put={["shared", `player${index}Groups`]}
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

    // Button event stops being attached after pressing x one time per imagine. No plans to fix for now.
    // tbody ul li .x {
    //     visibility: visible !important;
    // }

    :global(.buffs1.danger, .buffs2.danger) {
        outline: 2px solid var(--danger);
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
        max-width: calc(64px + 0rem);
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
        max-width: calc(48px + 0rem) !important;
    }
</style>
