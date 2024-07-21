<script>
    import RangeSlider from "svelte-range-slider-pips";
    import Icon from "@iconify/svelte";
    import { assetUrl } from "$lib/utils"

    let searchCategory = "all";
    let level = [0, 100];

    let hoveredStar = 0;
    let checkedStar = 0;
</script>

<div class="panes">
    <aside class="side-pane">Search</aside>

    <article class="main-pane">
        <section class="grid gap-4">
            <div class="surface1 rounded-2xl p-4 grid gap-2">
                <img src={assetUrl("/UI/Icon/Weapon/UI_Icon_106001201.png")} alt="" />
            </div>

            <div
                class="surface1 rounded-2xl p-4 grid gap-2 content-start"
                style="grid-template-columns: 1fr 1fr"
            >
                <img
                    src={assetUrl("/UI/Icon/Imagine/Battle/UI_Icon_120000400.png")}
                    alt=""
                />
                <img
                    src={assetUrl("/UI/Icon/Imagine/Battle/UI_Icon_131001200.png")}
                    alt=""
                />
            </div>

            <div
                class="flex-1 surface1 rounded-2xl p-4 grid gap-2"
                style="grid-template-columns: 1fr 1fr"
            >
                <img
                    src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_111002500.png")}
                    alt=""
                />
                <img
                    src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_112001600.png")}
                    alt=""
                />
                <img
                    src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_113000800.png")}
                    alt=""
                />
                <img
                    src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_114002300.png")}
                    alt=""
                />
                <img
                    src={assetUrl("/UI/Icon/Imagine/Picture/UI_Icon_115002400.png")}
                    alt=""
                />
            </div>

            <div class="surface1 rounded-2xl p-4">
                <table class="text-right">
                    <thead>
                        <tr>
                            <th class="text-left">Class</th>
                            <th>STR</th>
                            <th>VIT</th>
                            <th>DEX</th>
                            <th>INT</th>
                            <th>MND</th>
                            <th>Max HP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <div class="flex items-center gap-2">
                                    <img
                                        src={assetUrl("/UI/Icon/Class/UI_IconClass_21.png")}
                                        alt="Beat Performer"
                                        width="32"
                                        height="32"
                                    />
                                    <span
                                        class="mini-header"
                                        style="color: inherit"
                                        >Beat Performer</span
                                    >
                                    <div
                                        class="flex items-center stars ml-auto"
                                    >
                                        <label
                                            class="star-wrapper text3"
                                            style="margin: 0"
                                            class:hover-accent1={checkedStar >
                                                0}
                                            on:focus={() => (hoveredStar = 0)}
                                            on:mouseover={() =>
                                                (hoveredStar = 0)}
                                        >
                                            <input
                                                type="radio"
                                                class="visually-hidden"
                                                value={0}
                                                bind:group={checkedStar}
                                                on:change={() =>
                                                    (checkedStar = 0)}
                                            />
                                            <span class="visually-hidden"
                                                >0</span
                                            >
                                            <Icon
                                                icon="ic:baseline-close"
                                                style="display: flex;"
                                            />
                                        </label>
                                        {#each [1, 2, 3, 4] as star}
                                            <label
                                                class="star-wrapper"
                                                on:focus={() =>
                                                    (hoveredStar = star)}
                                                on:mouseover={() =>
                                                    (hoveredStar = star)}
                                                on:mouseleave={() =>
                                                    (hoveredStar = 0)}
                                                class:lit={hoveredStar >= star}
                                                class:glow={checkedStar >= star}
                                            >
                                                <input
                                                    type="radio"
                                                    class="visually-hidden"
                                                    value={star}
                                                    bind:group={checkedStar}
                                                    on:change={() =>
                                                        (checkedStar = star)}
                                                />
                                                <span class="visually-hidden"
                                                    >{star}</span
                                                >
                                                <img
                                                    class="star-yellow"
                                                    src={assetUrl("/UI/TelopManager/UI_TelopManager_Star_1.png")}
                                                    alt=""
                                                    width="24"
                                                    height="24"
                                                />
                                                <img
                                                    class="star-black"
                                                    src={assetUrl("/UI/TelopManager/UI_TelopManager_Star_0.png")}
                                                    alt=""
                                                    width="24"
                                                    height="24"
                                                />
                                            </label>
                                        {/each}
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <div class="toc grid gap-2">
            <span class="mini-header visually-hidden">Stats</span>
            <dl>
                <div
                    class="mb-2"
                    style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
                >
                    <dt>Battle Score</dt>
                    <dd>16575</dd>
                </div>
                <div>
                    <dt>Health</dt>
                    <dd>4873</dd>
                </div>
                <div
                    class="mb-2"
                    style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
                >
                    <dt>Stamina</dt>
                    <dd>145</dd>
                </div>
                <div>
                    <dt>Attack</dt>
                    <dd>5423</dd>
                </div>
                <div>
                    <dt>Crit Rate</dt>
                    <dd>18%</dd>
                </div>
                <div>
                    <dt>Crit Damage</dt>
                    <dd>51%</dd>
                </div>
                <div>
                    <dt>Strength</dt>
                    <dd>590</dd>
                </div>
                <div>
                    <dt>Vitality</dt>
                    <dd>437</dd>
                </div>
                <div>
                    <dt>Dexterity</dt>
                    <dd>542</dd>
                </div>
                <div>
                    <dt>Intelligence</dt>
                    <dd>378</dd>
                </div>
                <div
                    class="mb-2"
                    style="border-bottom: 1px solid var(--surface2); padding-bottom: 0.5rem"
                >
                    <dt>Spirit</dt>
                    <dd>489</dd>
                </div>
                <div>
                    <dt>Defense</dt>
                    <dd>1108</dd>
                </div>
                <div>
                    <dt>Recovery</dt>
                    <dd>1227</dd>
                </div>
                <div class="flex-wrap">
                    <dt>Elemental Resistance</dt>
                    <div
                        class="w-full grid mt-1 justify-items-end"
                        style="grid-template-columns: 1fr 1fr 1fr;"
                    >
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_1.png")}
                                alt="Fire"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_2.png")}
                                alt="Thunder"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_3.png")}
                                alt="Ice"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_4.png")}
                                alt="Earth"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_5.png")}
                                alt="Light"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                        <span class="flex items-center gap-1">
                            <img
                                src={assetUrl("/UI/Icon/Attribute/UI_IconAttribute_6.png")}
                                alt="Dark"
                                width="24"
                                height="24"
                            /> 0
                        </span>
                    </div>
                </div>
            </dl>
        </div>
    </article>
</div>

<div
    class="surface1 rounded-2xl p-4 grid gap-2 w-full hidden"
    style="max-width: 1200px; margin-inline: auto;"
>
    <div class="flex gap-4">
        <label
            class="mini-header select-none"
            class:active={searchCategory === "all"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="all"
                bind:group={searchCategory}
            />
            All
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "weapons"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="weapons"
                bind:group={searchCategory}
            />
            Weapons
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "bImagine"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="bImagine"
                bind:group={searchCategory}
            />
            Battle Imagine
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "eImagine"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="eImagine"
                bind:group={searchCategory}
            />
            Enhance Imagine
        </label>
        <label
            class="mini-header select-none"
            class:active={searchCategory === "skills"}
        >
            <input
                type="radio"
                class="visually-hidden"
                value="skills"
                bind:group={searchCategory}
            />
            Skills
        </label>
    </div>
    <div class="fle gap-4">
        <input type="text" placeholder="Search" />
        <span>level</span>
        <span>ability</span>
        <span>rarity</span>
        <span>element</span>
        <span></span>
        <RangeSlider
            bind:values={level}
            min={0}
            max={100}
            step={1}
            range
            pushy
            float
            pips
            pipstep={100 / 10}
            first="label"
            last="label"
        />
    </div>
</div>

<style lang="scss">
    dl > div {
        display: flex;
        justify-content: space-between;
    }

    .star-wrapper {
        position: relative;
        background-position: 50% 50%;
        background-size: 48px 48px;
        background-repeat: no-repeat;
        padding: 4px;
        margin: -4px;

        .star-yellow {
            opacity: 0;
            position: absolute;
        }
    }

    // Glow applies to the selected level and lower
    .glow {
        background-image: url("/UI/TelopManager/UI_TelopManager_Star_Glow.png");

        .star-yellow {
            opacity: 1;
        }
    }

    // Lit applies to the hovered level and lower
    .stars:where(:hover, :has(:focus-visible)) {
        .star-yellow {
            opacity: 0;
        }

        .lit .star-yellow {
            opacity: 1;
        }
    }
</style>
