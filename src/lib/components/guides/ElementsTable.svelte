<script>
    import Icon from "@iconify/svelte";
    import StickyNote from "../StickyNote.svelte";

    const elements = [
        {
            isOpen: true,
            name: "Fire",
            desc: "Damage over time",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_1.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1000.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1001.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1002.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Deals <strong>0.3%</strong> of Max HP as damage every <strong>3</strong> seconds",
                    level2: "Deals <strong>0.4%</strong> of Max HP as damage every <strong>2</strong> seconds",
                    level3: "Deals <strong>10%</strong> of Max HP and knocks down enemy",
                    finish: "Deals <strong>5%/7%/10%/15%/20%</strong> of Max HP as damage",
                },
                onPlayer: {
                    level1: "Deals <strong>2%</strong> of Max HP as damage every <strong>2</strong> seconds",
                    level2: "Deals <strong>3%</strong> of Max HP as damage every <strong>2</strong> seconds",
                    level3: "Deals <strong>20%</strong> of Max HP as damage and knocks down player",
                },
            },
        },
        {
            isOpen: true,
            name: "Ice",
            desc: "Reduced movement speed",
            burst: "Freezes target",
            finish: "Shatters ice, dealing heavy damage",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_3.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1003.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1004.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1005.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Reduces movement speed by <strong>20%</strong>",
                    level2: "Reduces movement speed by <strong>40%</strong>",
                    level3: "Freezes enemy",
                    finish: "Deals <strong>1%/3%/5%/7%/10%</strong> of Max HP as damage",
                },
                onPlayer: {
                    level1: "Applies <strong>Movement Speed Down (small)</strong>",
                    level2: "Applies <strong>Movement Speed Down (medium)</strong>",
                    level3: "<strong>Freezes</strong> player (can be freed by ally attacks)",
                },
            },
        },
        {
            isOpen: true,
            name: "Thunder",
            desc: "Periodically disrupt actions",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage and Paralyzes target",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_2.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1006.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1007.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1008.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Disrupt actions at a <strong>20%</strong> chance every <strong>5</strong> seconds",
                    level2: "Disrupt actions at a <strong>40%</strong> chance every <strong>5</strong> seconds",
                    level3: "Deals <strong>5%</strong> of Max HP as damage and disrupts actions at an <strong>80%</strong> chance every <strong>3</strong> seconds",
                    finish: "Deals <strong>5%/6%/8%/11%/15%</strong> of Max HP as damage, and applies <strong>Paralysis</strong> (disrupts actions at a <strong>60%</strong> chance every <strong>4</strong> seconds for <strong>20</strong> seconds",
                },
                onPlayer: {
                    level1: "Periodically disrupts actions at a chance",
                    level2: "Periodically disrupts actions at a chance",
                    level3: "Deals <strong>2.5%</strong> of Max HP as damage, knocks down player, and applies <strong>Paralysis</strong>",
                },
            },
        },
        {
            isOpen: true,
            name: "Earth",
            desc: "Receive increased damage",
            burst: "Petrifies target",
            finish: "Destroys rock, dealing heavy damage",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_4.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1009.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1010.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1011.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Increases damage received by <strong>10%</strong>",
                    level2: "Increases damage recived by <strong>20%</strong>",
                    level3: "<strong>Petrifies</strong> enemy",
                    finish: "Deals <strong>1%/3%/5%/7%/10%</strong> of Max HP as damage",
                },
                onPlayer: {
                    level1: "Increase damage taken",
                    level2: "Increase damage taken",
                    level3: "<strong>Petrifies</strong> player (can be freed by ally attacks)",
                },
            },
        },
        {
            isOpen: true,
            name: "Light",
            desc: "Deal reduced damage",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage and grants HP Regen to nearby players",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_5.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1012.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1013.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1014.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Reduces damage dealt by <strong>15%</strong>",
                    level2: "Reduces damage dealt by <strong>30%</strong>",
                    level3: "Deals <strong>5%</strong> of Max HP as damage",
                    finish: "Deals <strong>5%/6%/8%/11%/15%</strong> of Max HP as damage and grants HP Regen to nearby players (recover <strong>5%</strong> of Max HP every <strong>3</strong> seconds for <strong>30</strong> seconds)",
                },
                onPlayer: {
                    level1: "Reduces damage dealt by <strong>15%</strong>",
                    level2: "Reduces damage dealt by <strong>30%</strong>",
                    level3: "Deals <strong>2.5%</strong> of Max HP as damage, knocks down player, and grants HP Regen to nearby enemies (recover <strong>0.6%</strong> of Max HP every <strong>3</strong> seconds for <strong>30</strong> seconds)",
                },
            },
        },
        {
            isOpen: true,
            name: "Dark",
            desc: "Attacks may miss",
            burst: "Small explosion & knockdown",
            finish: "Large explosion that deals heavy damage and inflicts Drained",
            images: [
                "/UI/Icon/Attribute/UI_IconAttribute_6.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1015.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1016.png",
                "/UI/Icon/StatusAilmentL/UI_StatusAilmentL_1017.png",
            ],
            effects: {
                onEnemy: {
                    level1: "Attacks have a <strong>10%</strong> chance to miss",
                    level2: "Attacks have a <strong>30%</strong> chance to miss",
                    level3: "Deals <strong>5%</strong> of Max HP as damage",
                    finish: "Deals <strong>5%/6%/8%/11%/15%</strong> of Max HP as damage and applies HP Leak (when hit, the player regains <strong>5%</strong> of damage dealt as HP, minimum 1% of Max HP, for <strong>30</strong> seconds)",
                },
                onPlayer: {
                    level1: "Attacks have a <strong>10%</strong> chance to miss",
                    level2: "Attacks have a <strong>30%</strong> chance to miss",
                    level3: "Deals <strong>2.5%</strong> of Max HP as damage, knocks down player, and applies HP Leak (when hit, the enemy regains <strong>?%</strong> of damage dealt as HP, minimum 1% of Max HP, for <strong>30</strong> seconds)",
                },
            },
        },
    ];
</script>

<div class="grid g-100">
    {#each elements as element}
        <details bind:open={element.isOpen} class="box {element.name}">
            <summary class="flex g-50">
                <img src={element.images[0]} alt="" width="36" height="36" />
                <span>{element.name}</span>
                <Icon
                    icon={element.isOpen
                        ? "mdi:chevron-up"
                        : "mdi:chevron-down"}
                    width="28"
                    style="margin-left: auto;"
                />
            </summary>
            <div class="details-content grid g-100">
                <div class="grid g-100">
                    <p class="on-header">On Enemies</p>
                    <ol>
                        <li class="flex g-50">
                            <img
                                src={element.images[1]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 1</span>
                                {@html element.effects.onEnemy.level1}
                            </p>
                        </li>
                        <li class="flex g-50">
                            <img
                                src={element.images[2]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 2</span>
                                {@html element.effects.onEnemy.level2}
                            </p>
                        </li>
                        <li class="flex g-50">
                            <img
                                src={element.images[3]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 3</span>
                                {@html element.effects.onEnemy.level3}
                            </p>
                        </li>
                        <li class="flex g-50">
                            <p style="margin-left: 41px">
                                <span style:color="#afb1ff">Burst Finish</span>
                                {@html element.effects.onEnemy.finish}
                            </p>
                        </li>
                    </ol>
                </div>
                <div class="grid g-100">
                    <p class="on-header">On Players</p>
                    <ol>
                        <li class="flex g-50">
                            <img
                                src={element.images[1]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 1</span>
                                {@html element.effects.onPlayer.level1}
                            </p>
                        </li>
                        <li class="flex g-50">
                            <img
                                src={element.images[2]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 2</span>
                                {@html element.effects.onPlayer.level2}
                            </p>
                        </li>
                        <li class="flex g-50">
                            <img
                                src={element.images[3]}
                                alt=""
                                width="33"
                                height="37"
                            />
                            <p>
                                <span>Lv. 3</span>
                                {@html element.effects.onPlayer.level3}
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
        </details>
    {/each}
</div>

<style lang="scss">
    .flex {
        align-items: start;
    }

    p {
        line-height: 1.7 !important;
        display: inline;
        font-size: var(--step-0);
        margin: 0;
        padding: 0 !important;
        max-inline-size: none;

        span {
            display: block;
            color: var(--text2);
            font-size: var(--step--1);
            text-transform: uppercase;
        }
    }

    details {
        padding: 0;

        summary,
        .details-content {
            padding: 1rem;
        }
    }

    summary {
        color: hsl(var(--h), 50%, 62%);
        font-size: var(--step-1);
        font-weight: bold;
        align-items: center !important;
        background: hsla(var(--h), 80%, 17%, 0.2);
        max-inline-size: none;
    }

    .on-header {
        font-weight: 600;
        color: var(--text2);
        text-transform: uppercase;
    }

    .details-content {
        border-top: 1px solid hsl(var(--h), 71%, 68%);
        margin: 0;
        grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
        row-gap: 2rem;
        align-items: start;
        background: linear-gradient(
            to bottom,
            hsla(var(--h), 71%, 18%, 0.1) 0%,
            var(--surface1) 19%
        );
    }

    ol {
        padding: 0;
        margin: 0;
        list-style-type: none;
        max-inline-size: none;

        li {
            max-inline-size: none;
        }
    }

    .Fire {
        --h: 14;
    }

    .Ice {
        --h: 194;
    }

    .Thunder {
        --h: 180;
    }

    .Earth {
        --h: 30;
    }

    .Light {
        --h: 60;
    }

    .Dark {
        --h: 260;
    }
</style>
