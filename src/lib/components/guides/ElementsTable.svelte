<script>
    import { assetUrl } from "$lib/utils";

    const elements = [
        {
            name: "Fire",
            id: 1,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1000.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1001.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1002.webp",
            ],
            onEnemies: [
                "Deals <b>0.3%</b> of Max HP as damage every <b>3</b> seconds",
                "Deals <b>0.4%</b> of Max HP as damage every <b>2</b> seconds",
                "Deals <b>10%</b> of Max HP and knocks down enemy",
                "Deals <b>5%/7%/10%/15%/20%</b> of Max HP as damage",
            ],
            onPlayers: [
                "Deals <b>2%</b> of Max HP as damage every <b>2</b> seconds",
                "Deals <b>3%</b> of Max HP as damage every <b>2</b> seconds",
                "Deals <b>20%</b> of Max HP as damage and knocks down player",
            ],
        },
        {
            name: "Ice",
            id: 3,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1003.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1004.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1005.webp",
            ],
            onEnemies: [
                "Reduces movement speed by <b>20%</b>",
                "Reduces movement speed by <b>40%</b>",
                "<b>Freezes</b> enemy",
                "Deals <b>6%/9%/13%/19%/25%</b> of Max HP as damage",
            ],
            onPlayers: [
                "Reduces movement speed by <b>20%</b>",
                "Reduces movement speed by <b>40%</b>",
                "<b>Freezes</b> player up to 10 seconds (attacks from allies reduce duration)",
            ],
        },
        {
            name: "Thunder",
            id: 2,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1006.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1007.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1008.webp",
            ],
            onEnemies: [
                "Disrupt actions at a <b>20%</b> chance every <b>5</b> seconds",
                "Disrupt actions at a <b>40%</b> chance every <b>5</b> seconds",
                "Deals <b>5%</b> of Max HP as damage and disrupts actions at an <b>80%</b> chance every <b>3</b> seconds",
                "Deals <b>5%/7%/10%/15%/20%</b> of Max HP as damage, and applies <b>Paralysis</b> (disrupts actions at a <b>60%</b> chance every <b>4</b> seconds for <b>20</b> seconds)",
            ],
            onPlayers: [
                "Disrupt actions at a <b>20%</b> chance every <b>3</b> seconds",
                "Disrupt actions at a <b>40%</b> chance every <b>3</b> seconds",
                "Deals <b>2.5%</b> of Max HP as damage, knocks down player, and applies <b>Paralysis</b> (disrupts actions at a <b>60%</b> chance every <b>4</b> seconds for <b>20</b> seconds)",
            ],
        },
        {
            name: "Earth",
            id: 4,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1009.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1010.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1011.webp",
            ],
            onEnemies: [
                "Increases damage received by <b>10%</b>",
                "Increases damage received by <b>20%</b>",
                "<b>Petrifies</b> enemy",
                "Deals <b>6%/9%/13%/19%/25%</b> of Max HP as damage",
            ],
            onPlayers: [
                "Increases damage received by <b>10%</b>",
                "Increases damage received by <b>20%</b>",
                "<b>Petrifies</b> player up to 10 seconds (attacks from allies reduce duration)",
            ],
        },
        {
            name: "Light",
            id: 5,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1012.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1013.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1014.webp",
            ],
            onEnemies: [
                "Reduces damage dealt by <b>15%</b>",
                "Reduces damage dealt by <b>30%</b>",
                "Deals <b>5%</b> of Max HP as damage",
                "Deals <b>5%/7%/10%/15%/20%</b> of Max HP as damage and grants HP Regen to nearby players (recover <b>5%</b> of Max HP every <b>3</b> seconds for <b>30</b> seconds)",
            ],
            onPlayers: [
                "Reduces damage dealt by <b>15%</b>",
                "Reduces damage dealt by <b>30%</b>",
                "Deals <b>2.5%</b> of Max HP as damage, knocks down player, and grants HP Regen to nearby enemies (recover <b>0.6%</b> of Max HP every <b>3</b> seconds for <b>30</b> seconds)",
            ],
        },
        {
            name: "Dark",
            id: 6,
            images: [
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1015.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1016.webp",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1017.webp",
            ],
            onEnemies: [
                "Attacks have a <b>10%</b> chance to miss",
                "Attacks have a <b>30%</b> chance to miss",
                "Deals <b>5%</b> of Max HP as damage",
                "Deals <b>5%/7%/10%/15%/20%</b> of Max HP as damage and applies HP Leak (when hit, the player regains <b>5%</b> of damage dealt as HP, minimum 1% of Max HP, for <b>30</b> seconds)",
            ],
            onPlayers: [
                "Attacks have a <b>10%</b> chance to miss",
                "Attacks have a <b>30%</b> chance to miss",
                "Deals <b>2.5%</b> of Max HP as damage, knocks down player, and applies HP Leak (when hit, the enemy regains <b>5%</b> of damage dealt as HP, minimum 1% of Max HP, for <b>30</b> seconds)",
            ],
        },
    ];

    let selectedIndex = 0;
</script>

<div class="wrapper surface1 rounded-2xl overflow-clip relative">
    {#each elements as _, index}
        <div
            class="colored-bg element-{index + 1}"
            class:opacity-0={selectedIndex !== index}
        />
    {/each}

    <div class="p-4 flex gap-2">
        {#each elements as { id, name }, index}
            <label
                class="flex select-none items-center gap-2 p-2 rounded-lg"
                class:active={selectedIndex === index}
            >
                <input
                    type="radio"
                    class="visually-hidden"
                    value={index}
                    bind:group={selectedIndex}
                />
                <img
                    src={assetUrl(
                        `/UI/Icon/Attribute/UI_IconAttribute_${id}.webp`,
                    )}
                    alt=""
                    width="32"
                    height="32"
                />
                <span
                    class="mini-header element-{index + 1}"
                    style="color: hsl(var(--h), 50%, 62%);">{name}</span
                >
            </label>
        {/each}
    </div>
    <div class="p-4 pt-0">
        <hr class="w-full mb-4 element-{selectedIndex + 1}" />
        <table style="vertical-align: middle;">
            <thead>
                <tr>
                    <th>Effect</th>
                    <th>On enemies</th>
                    <th>On players</th>
                </tr>
            </thead>
            <tbody>
                {#each elements[selectedIndex].onPlayers as effect, index}
                    <tr>
                        <th>
                            <div class="whitespace-nowrap items-center flex gap-2">
                                <img
                                    src={assetUrl(
                                        elements[selectedIndex].images[index],
                                    )}
                                    alt=""
                                    style="max-width: unset"
                                    width="32.5"
                                    height="37.5"
                                />
                                <span>Lv. {index + 1}</span>
                            </div>
                        </th>
                        <td>
                            <p>
                                {@html elements[selectedIndex].onEnemies[index]}
                            </p>
                        </td>
                        <td>
                            <p>
                                {@html effect}
                            </p>
                        </td>
                    </tr>
                {/each}
                <tr>
                    <th style:color="rgb(175, 177, 255)">Burst&nbsp;Finish</th>
                    <td>
                        <p>{@html elements[selectedIndex].onEnemies[3]}</p>
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<style lang="scss">
    td,
    th {
        padding-inline: 1rem;
    }

    table {
        font-size: var(--step-1);
    }

    .wrapper {
        z-index: 1;
        box-shadow:
            0 8px 16px rgba(0, 0, 0, 0.2),
            0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .colored-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(
            to bottom,
            hsla(var(--h), 71%, 18%, 0.2) 0%,
            var(--surface1) 100%
        );
        transition: all 0.2s var(--timing1);
    }

    td p {
        min-width: 26ch;
        margin: 0;
    }

    hr {
        transition: all 0.2s var(--timing1);
        height: 1px;
        border: none;
        background: hsl(var(--h), 71%, 38%);
    }

    label:hover {
        background: rgba(255, 255, 255, 0.03);
    }

    .active {
        background: rgba(255, 255, 255, 0.05);
    }

    .element-1 {
        --h: 14;
    }

    .element-2 {
        --h: 194;
    }

    .element-3 {
        --h: 180;
    }

    .element-4 {
        --h: 30;
    }

    .element-5 {
        --h: 60;
    }

    .element-6 {
        --h: 260;
    }
</style>
