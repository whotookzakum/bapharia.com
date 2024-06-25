<script>
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";
    import TYPES_TEXT from "$scripts/utils/categories";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";
    import SkillAniCancels from "./SkillAniCancels.svelte";
    import isEqual from "lodash/isEqual";

    export let skill = {};

    const eleStringIdToId = {
        Fire: 1,
        Thunder: 2,
        Ice: 3,
        Earth: 4,
        Light: 5,
        Dark: 6,
    };

    function getTags() {
        let tags = [];

        skill.text.element?.split(/(?=[A-Z])/).forEach((substr) => {
            const id = eleStringIdToId[substr];
            if (substr !== "None")
                tags.push({
                    idString: id, // Change "Fire", "Thunder" etc. to 1, 2, etc.
                    text: TYPES_TEXT[$userLocale].Element[id],
                });
        });

        skill.text.type?.split(/(?=[A-Z])/).forEach((substr) => {
            if (substr !== "None")
                tags.push({
                    idString: substr,
                    text: TYPES_TEXT[$userLocale].SkillType[substr],
                });
        });

        return tags.filter((tag) => tag !== "None");
    }

    // Return whether ANY of the stats (key values) provided differ from the previous skill level
    function getStatsChanged(
        keys,
        skillLevel,
        variantIndex,
        skillLevels,
        levelIndex,
    ) {
        return keys.some((key) => {
            const value =
                skillLevel[variantIndex].skillLevelData &&
                skillLevel[variantIndex].skillLevelData[key];

            if (!value && value !== 0) return false;

            // G1 normal should always be shown
            if (levelIndex === 0 && variantIndex === 0) return true;

            let differsFromPrevious = false;
            const currentGradeNormalVariant = skillLevel[0].skillLevelData[key];
            const previousGradeNormalVariant =
                skillLevels[levelIndex - 1][0]?.skillLevelData &&
                skillLevels[levelIndex - 1][0].skillLevelData[key];

            // A value appearing midway through levels (i.e. starts at G4 but does not exist on G1) should always be shown
            if (
                levelIndex > 0 &&
                !previousGradeNormalVariant &&
                previousGradeNormalVariant !== 0
            )
                differsFromPrevious = true;

            // Compare alpha and beta to normal variant in the same grade
            if (variantIndex > 0) {
                differsFromPrevious = value !== currentGradeNormalVariant;
            }

            // Compare normal variant to previous grade's normal variant
            else if (
                previousGradeNormalVariant ||
                previousGradeNormalVariant === 0
            ) {
                differsFromPrevious = value !== previousGradeNormalVariant;
            }

            return differsFromPrevious;
        });
    }

    // Return whether the specific buff has been modified compared to the previous skill levels
    function getBuffChanged(
        key,
        skillLevel,
        variantIndex,
        skillLevels,
        levelIndex,
    ) {
        const buffData =
            skillLevel[variantIndex].skillLevelData.statusAilments[key];

        if (!buffData && buffData !== 0) return false;

        // G1 normal should always be shown
        if (levelIndex === 0 && variantIndex === 0) return true;

        let differsFromPrevious = false;
        const currentGradeNormalVariant =
            skillLevel[0].skillLevelData.statusAilments[key];
        const previousGradeNormalVariant =
            skillLevels[levelIndex - 1][0]?.skillLevelData.statusAilments &&
            skillLevels[levelIndex - 1][0].skillLevelData.statusAilments[key];

        // A value appearing midway through levels (i.e. starts at G4 but does not exist on G1) should always be shown
        if (
            levelIndex > 0 &&
            !previousGradeNormalVariant &&
            previousGradeNormalVariant !== 0
        )
            differsFromPrevious = true;

        // Compare alpha and beta to normal variant in the same grade
        if (variantIndex > 0) {
            differsFromPrevious = !isEqual(buffData, currentGradeNormalVariant);
        }

        // Compare normal variant to previous grade's normal variant
        else if (
            previousGradeNormalVariant ||
            previousGradeNormalVariant === 0
        ) {
            differsFromPrevious = !isEqual(
                buffData,
                previousGradeNormalVariant,
            );
        }

        return differsFromPrevious;
    }

    const colors = {
        technical: "var(--accent1)",
        useResource: "deeppink",
        recoverResource: "var(--success)",
        other: "inherit",
        attack: "var(--danger)",
    };

    const icons = {
        cooldown: {
            icon: "material-symbols:timer-outline", // ph:timer-duotone
            color: "var(--accent2)",
        },
        mpCost: {
            icon: "ph:sparkle-fill",
            color: colors.useResource,
        },
        mpPerSecond: {
            icon: "ph:sparkle-fill",
            color: colors.useResource,
        },
        mpRecoveryAmount: {
            icon: "streamline:graph-bar-increase-solid",
            color: colors.recoverResource,
        },
        mpRecoverySpeed: {
            icon: "streamline:graph-bar-increase-solid",
            color: colors.recoverResource,
        },
        dodgeAttackMpRecovery: {
            icon: "streamline:graph-bar-increase-solid",
            color: colors.recoverResource,
        },
        receiveDamageDown: {
            icon: "icon-park-twotone:shield",
            color: colors.recoverResource,
        },
        activatesFollowBullet: {
            icon: "game-icons:silver-bullet", // icon-park-twotone:radio-two, material-symbols:target
            color: colors.other,
        },
        rangeVertical: {
            icon: "icon-park-outline:auto-height-one",
            color: colors.technical,
        },
        rangeHorizontal: {
            icon: "icon-park-outline:auto-width-one",
            color: colors.technical,
        },
        preInputTime: {
            icon: "mingcute:finger-press-line",
            color: colors.other,
        },
        chainable: {
            icon: "cib:twoo",
            color: colors.technical,
            tooltip: true,
        },
        counterCost: {
            icon: "icon-park-twotone:shield",
            color: colors.useResource,
        },
        stCost: {
            icon: "game-icons:battery-pack",
            color: colors.useResource,
        },
        stPerSecond: {
            icon: "game-icons:battery-pack",
            color: colors.useResource,
        },
        stCostPerSpin: {
            icon: "game-icons:battery-pack",
            color: colors.useResource,
        },
        jumpDistance: {
            icon: "icon-park-outline:auto-width-one",
            color: colors.technical,
        },
        jumpHeightSheathed: {
            icon: "icon-park-outline:auto-height-one",
            color: colors.technical,
        },
        jumpHeightUnsheathed: {
            icon: "icon-park-outline:auto-height-one",
            color: colors.technical,
        },
        eleAccumulationRate: {
            icon: "bi:lightning-charge", // ant-design:fire-twotone, bi:lightning-charge-fill
            color: colors.recoverResource,
        },
        hitInterval: {
            icon: "ph:bomb-duotone", // vaadin:bomb
            color: colors.attack,
        },
    };

    function getStatText(variant, key) {
        const value = variant.skillLevelData
            ? variant.skillLevelData[key]
            : variant.hiddenSkillData[key];

        if (key === "mpPerSecond") {
            return `Consumes ${value} EP/second (${variant.skillLevelData.mpPerSecondMoving} EP/second while moving)`;
        }

        if (key === "eleAccumulationRate") {
            return `${value}% elemental charge (${variant.skillLevelData.eleAccumulationMax} max)`;
        }

        switch (key) {
            case "cooldown":
                return `${value} second cooldown`;
            case "mpCost":
                return `Consumes ${value} EP on use`;
            case "mpRecoveryAmount":
                return `Recovers ${value} EP on use`;
            case "mpRecoverySpeed":
                return `Recovers ${value} EP/second`;
            case "dodgeAttackMpRecovery":
                return `Dodge attack recovers ${value} EP on use`;
            case "receiveDamageDown":
                return `Receive ${value}% less damage`;
            case "activatesFollowBullet":
                return `Triggers Follow Bullet`;
            case "rangeVertical":
                return `Vertical range ${value} units`;
            case "rangeHorizontal":
                return `Horizontal range ${value} units`;
            case "preInputTime":
                return `${value}s pre-input time`;
            case "chainable":
                return `Self-cancelling`;
            case "counterCost":
                return `Counter consumes ${value} Shield Gauge`;
            case "stCost":
                return `Consumes ${value} Stamina`;
            case "stPerSecond":
                return `Consumes ${value} Stamina/second`;
            case "stCostPerSpin":
                return `Consumes ${value} Stamina per rotation`;
            case "jumpDistance":
                return `Distance ${value} units`;
            case "jumpHeightSheathed":
                return `Height (sheathed) ${value} units`;
            case "jumpHeightUnsheathed":
                return `Height (unsheathed) ${value} units`;
            case "hitInterval":
                return `Hits every ${value} second(s)`;
            default:
                return value;
        }
    }

    function getTooltipText(skill, key) {
        switch (key) {
            case "chainable":
                return `Ending animation is shortened when using this skill repeatedly.`;
        }
    }
</script>

<details id={skill.skill_id} class="skill surface1 p-4 rounded-2xl">
    <summary class="gap-4">
        <SkillIcon {skill} />
        <span class="flex flex-col-reverse">
            <span style="font-weight: 600"
                >{skill.text.name}
                <sup class="mini-header">#{skill.skill_id}</sup></span
            >
            <span class="mini-header">
                {#each getTags() as { idString, text }}
                    <span
                        style:color="var(--color-{idString}, var(--element{idString}))"
                        >{text}</span
                    >
                {/each}
                {#if skill.ability_type === 100}
                    <span style="color: var(--accent2);">Shareable</span>
                {/if}
            </span>
        </span>
    </summary>
    <h3 class="mini-header">Description</h3>
    <dl class="grid py-2" role="list">
        {#each skill.skillLevels as skillLevel, levelIndex}
            <div class="py-4 skill-level grid gap-4">
                {#each skillLevel as variant, variantIndex}
                    <div class="grid">
                        <dt
                            class="mini-header"
                            style="text-transform: unset; color: var(--accent1)"
                        >
                            {#if !variant.ability_type}
                                G{variant.level} (Level {variant.classLevel})
                            {:else if variant.ability_type === 1}
                                G{variant.level}α (Level {variant.classLevel})
                            {:else if variant.ability_type === 2}
                                G{variant.level}β (Level {variant.classLevel})
                            {/if}
                        </dt>
                        {#if !(variant.level > 3 && variant.ability_type)}
                            <dd class="desc">
                                {variant.text.desc}
                            </dd>
                        {/if}
                        <div
                            class="tags-section flex flex-wrap gap-x-4 skill-values"
                        >
                            {#if variant.skillLevelData}
                                {#each Object.keys(variant.skillLevelData) as key}
                                    {#if key === "statusAilments"}
                                        <div class="w-full order-2">
                                            {#each Object.entries(variant.skillLevelData.statusAilments) as [key, buff]}
                                                {#if getBuffChanged(key, skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                                    <dd
                                                        class="flex gap-2 items-center"
                                                    >
                                                        <img
                                                            src={buff.assets
                                                                .icon}
                                                            alt=""
                                                            width="26"
                                                            height="30"
                                                        />

                                                        <span>
                                                            {#if buff.text?.name}
                                                                {buff.text.name}
                                                            {:else}
                                                                {key}
                                                            {/if}
                                                            {#if buff.duration && buff.uses}
                                                                <small
                                                                    class="text3"
                                                                >
                                                                    ({buff.duration}
                                                                    seconds,
                                                                    {buff.uses} uses)
                                                                </small>
                                                            {:else if buff.duration}
                                                                <small
                                                                    class="text3"
                                                                >
                                                                    ({buff.duration}
                                                                    seconds)
                                                                </small>
                                                            {:else if buff.uses}
                                                                <small
                                                                    class="text3"
                                                                >
                                                                    ({buff.uses}
                                                                    uses)
                                                                </small>
                                                            {/if}
                                                        </span>
                                                    </dd>
                                                {/if}
                                            {/each}
                                        </div>
                                    {:else if (key === "mpPerSecond" && getStatsChanged(["mpPerSecond", "mpPerSecondMoving"], skillLevel, variantIndex, skill.skillLevels, levelIndex)) || (key === "eleAccumulationRate" && getStatsChanged(["eleAccumulationRate", "eleAccumulationMax"], skillLevel, variantIndex, skill.skillLevels, levelIndex))}
                                        <dd>
                                            <Icon
                                                icon={icons[key].icon}
                                                style={`color: ${icons[key].color}; font-size: var(--step-1);`}
                                            />
                                            <span>
                                                {getStatText(variant, key)}
                                            </span>
                                        </dd>
                                    {:else if icons[key] && getStatsChanged([key], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                        {#if icons[key].tooltip}
                                            <dd>
                                                <Icon
                                                    icon={icons[key].icon}
                                                    style={`color: ${icons[key].color}; font-size: var(--step-1);`}
                                                />
                                                <Tooltip inline>
                                                    <span>
                                                        {getStatText(
                                                            variant,
                                                            key,
                                                        )}
                                                        <Icon
                                                            icon="ri:question-line"
                                                            style="color: var(--accent1); font-size: var(--step-1)"
                                                        />
                                                    </span>
                                                    <svelte:fragment
                                                        slot="tooltip"
                                                    >
                                                        {getTooltipText(
                                                            skill,
                                                            key,
                                                        )}
                                                    </svelte:fragment>
                                                </Tooltip>
                                            </dd>
                                        {:else}
                                            <dd>
                                                <Icon
                                                    icon={icons[key].icon}
                                                    style={`color: ${icons[key].color}; font-size: var(--step-1);`}
                                                />
                                                <span>
                                                    {getStatText(variant, key)}
                                                </span>
                                            </dd>
                                        {/if}
                                    {/if}
                                {/each}
                            {/if}

                            <!-- Damage -->
                            <!-- <dd>
                                <Icon
                                    icon="ph:fire-duotone"
                                    style="color: var(--danger); font-size: var(--step-1);"
                                />
                                <span> 480% damage </span>
                            </dd> -->
                        </div>
                        <!-- <div class="mt-2">
                            <div class="flex items-center gap-2">
                                <img src="/UI/Icon/StatusAilment/UI_StatusAilment_4039.png" alt=""> Increase damage taken (28%)
                            </div>
                        </div> -->
                    </div>
                {/each}
            </div>
        {/each}
        {#if skill.hiddenSkillData}
            <div class="tags-section flex flex-wrap gap-x-4 skill-values">
                {#each Object.keys(skill.hiddenSkillData) as key}
                    {#if icons[key] && skill.hiddenSkillData[key]}
                        {#if icons[key].tooltip}
                            <dd>
                                <Icon
                                    icon={icons[key].icon}
                                    style={`color: ${icons[key].color}; font-size: var(--step-1);`}
                                />
                                <Tooltip inline>
                                    <span>
                                        {getStatText(skill, key)}
                                        <Icon
                                            icon="ri:question-line"
                                            style="color: var(--accent1); font-size: var(--step-1)"
                                        />
                                    </span>
                                    <svelte:fragment slot="tooltip">
                                        {getTooltipText(skill, key)}
                                    </svelte:fragment>
                                </Tooltip>
                            </dd>
                        {:else}
                            <dd>
                                <Icon
                                    icon={icons[key].icon}
                                    style={`color: ${icons[key].color}; font-size: var(--step-1);`}
                                />
                                <span>
                                    {getStatText(skill, key)}
                                </span>
                            </dd>
                        {/if}
                    {/if}
                {/each}
            </div>
        {/if}
    </dl>
    {#if skill.notes}
        <h3 class="mini-header">Notes</h3>
        <div class="skill-notes">
            <svelte:component this={skill.notes} />
        </div>
    {/if}
    {#key skill.skill_id}
        {#if skill.skill_type <= 6}
            <SkillAniCancels data={skill.animation_cancels} />
        {/if}
    {/key}
</details>

<style lang="scss">
    .mini-header span:not(:last-of-type)::after {
        content: " / ";
        color: var(--surface3);
    }

    details.skill {
        font-size: var(--step-1);
    }

    summary {
        font-size: var(--step-3);
    }

    dl {
        line-height: 1.75;
        font-size: var(--step-1);
    }

    .desc {
        text-wrap: pretty;
    }

    details[open] summary {
        color: inherit !important;
    }

    .skill-level:not(:last-of-type) {
        border-bottom: 1px solid var(--surface3);
    }

    .skill-level:last-of-type {
        padding-bottom: 0;
    }

    .tags-section:has(dd) {
        margin-top: 0.5rem;
    }

    .skill-values {
        font-size: var(--step--1);
        color: var(--text2); // text2 or accent2
        font-weight: 600;

        * {
            vertical-align: middle;
        }
    }

    // For some reason rehype-toc places a nav.toc with the skill notes markdown
    :global(.skill .toc) {
        display: none;
    }

    // 2nd child because the .toc is the first child...
    :global(.skill-notes *:nth-child(2)) {
        margin-top: 0 !important;
    }

    :global(.skill-notes p) {
        max-inline-size: none !important;
    }
</style>
