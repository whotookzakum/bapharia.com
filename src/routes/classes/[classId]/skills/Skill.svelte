<script>
    import { crossfade, fly } from "svelte/transition";
    import AnimationCancels from "./AnimationCancels.svelte";
    import SkillGrade from "./SkillGrade.svelte";
    import TabSelectors from "./TabSelectors.svelte";
    import animationCancelsData from "./animation-cancels.json";
    import notesData from "./skill-notes.json";
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";
    import TYPES_TEXT from "$scripts/utils/categories";
    import Icon from "@iconify/svelte";
    import Tooltip from "$lib/components/FloatingUI/Tooltip.svelte";

    export let skill = {};

    let selectedTab;

    function getAbilitiesForGrade(skillLevel) {
        return skill.abilities.filter(
            (ability) =>
                ability.condition_skill_id_1 === skill.skill_id &&
                ability.condition_skill_level_1 === skillLevel.level,
        );
    }

    let animationCancels = animationCancelsData[skill.id];
    let notes = notesData[skill.id];

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

            if (!value) return false;

            // G1 normal should always be shown
            if (levelIndex === 0 && variantIndex === 0) return true;

            let differsFromPrevious = false;
            const currentGradeNormalVariant = skillLevel[0].skillLevelData[key];
            const previousGradeNormalVariant =
                skillLevels[levelIndex - 1][0]?.skillLevelData &&
                skillLevels[levelIndex - 1][0].skillLevelData[key];

            // A value appearing midway through levels (i.e. starts at G4 but does not exist on G1) should always be shown
            if (levelIndex > 0 && !previousGradeNormalVariant)
                differsFromPrevious = true;

            // Compare alpha and beta to normal variant in the same grade
            if (variantIndex > 0) {
                differsFromPrevious = value !== currentGradeNormalVariant;
            }

            // Compare normal variant to previous grade's normal variant
            else if (previousGradeNormalVariant) {
                differsFromPrevious = value !== previousGradeNormalVariant;
            }

            return differsFromPrevious;
        });
    }

    const icons = {
        cooldown: {
            icon: "material-symbols:timer-outline",
            color: "var(--accent2)"
        }
    }

    function getStatText() {
        return "Test";
    }
</script>

<details class="surface1 p-4 rounded-2xl" open>
    <summary class="gap-4">
        <!-- <SkillHeader {skill} /> -->
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
                            
                            <!-- Cooldown -->
                            {#if getStatsChanged(["cooldown"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <!-- ph:timer-duotone -->
                                    <Icon
                                        icon="material-symbols:timer-outline"
                                        style="color: var(--accent2); font-size: var(--step-1);"
                                    />
                                    <span>
                                        {variant.skillLevelData.cooldown} second
                                        cooldown
                                    </span>
                                </dd>
                            {/if}

                            <!-- EP Cost -->
                            {#if getStatsChanged(["mpCost"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="ph:sparkle-fill"
                                        style="color: deeppink; font-size: var(--step-1);"
                                    />
                                    <span>
                                        Consumes {variant.skillLevelData.mpCost}
                                        EP on use
                                    </span>
                                </dd>
                            {/if}
                            {#if getStatsChanged(["mpPerSecond", "mpPerSecondMoving"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="ph:sparkle-fill"
                                        style="color: var(--accent1); font-size: var(--step-1);"
                                    />
                                    <span>
                                        Consumes {variant.skillLevelData
                                            .mpPerSecond} EP/second ({variant
                                            .skillLevelData.mpPerSecondMoving} EP/second
                                        while moving)
                                    </span>
                                </dd>
                            {/if}

                            <!-- EP Recovery -->
                            {#if getStatsChanged(["mpRecoveryAmount"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="streamline:graph-bar-increase-solid"
                                        style="color: deeppink; font-size: var(--step-1);"
                                    />
                                    <span>
                                        Recovers {variant.skillLevelData
                                            .mpRecoveryAmount} EP on use
                                    </span>
                                </dd>
                            {/if}
                            {#if getStatsChanged(["mpRecoverySpeed"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="streamline:graph-bar-increase-solid"
                                        style="color: var(--accent1); font-size: var(--step-1);"
                                    />
                                    <span>
                                        Recovers {variant.skillLevelData
                                            .mpRecoverySpeed} EP/second
                                    </span>
                                </dd>
                            {/if}

                            <!-- Reduce Damage received -->
                            {#if getStatsChanged(["receiveDamageDown"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="icon-park-twotone:shield"
                                        style="color: var(--success); font-size: var(--step-1);"
                                    />
                                    <span>
                                        Receive {variant.skillLevelData
                                            .receiveDamageDown}% less damage
                                    </span>
                                </dd>
                            {/if}

                            <!-- Activates Follow Bullet -->
                            {#if getStatsChanged(["activatesFollowBullet"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <!-- icon-park-twotone:radio-two -->
                                    <!-- material-symbols:target -->
                                    <Icon
                                        icon="game-icons:silver-bullet"
                                        style="font-size: var(--step-1);"
                                    />
                                    <span> Triggers Follow Bullet </span>
                                </dd>
                            {/if}

                            <!-- Pre-input time -->
                            {#if getStatsChanged(["preInputTime"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="mingcute:finger-press-line"
                                        style="font-size: var(--step-1);"
                                    />
                                    <span>
                                        {variant.skillLevelData.preInputTime}s
                                        pre-input time
                                    </span>
                                </dd>
                            {/if}

                            <!-- Self-cancelling skill -->
                            {#if getStatsChanged(["chainable"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="cib:twoo"
                                        style="color: var(--accent1); font-size: var(--step-1);"
                                    />
                                    <Tooltip inline>
                                        <span>
                                            Self-cancelling
                                            <Icon
                                                icon="ri:question-line"
                                                style="color: var(--accent1); font-size: var(--step-1)"
                                            />
                                        </span>
                                        <svelte:fragment slot="tooltip">
                                            Ending animation is shortened when
                                            using {skill.text.name} repeatedly.
                                        </svelte:fragment>
                                    </Tooltip>
                                </dd>
                            {/if}

                            <!-- Range -->
                            {#if getStatsChanged(["rangeHorizontal"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="icon-park-outline:auto-width-one"
                                        style="color: var(--accent1); font-size: var(--step-1);"
                                    />
                                    <span>
                                        Horizontal range {variant.skillLevelData
                                            .rangeHorizontal} units
                                    </span>
                                </dd>
                            {/if}
                            {#if getStatsChanged(["rangeVertical"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="icon-park-outline:auto-height-one"
                                        style="color: var(--danger); font-size: var(--step-1);"
                                    />
                                    <span>
                                        Vertical range {variant.skillLevelData
                                            .rangeVertical} units
                                    </span>
                                </dd>
                            {/if}

                            <!-- Elemental Charge -->
                            {#if getStatsChanged(["eleAccumulationRate", "eleAccumulationMax"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <!-- ant-design:fire-twotone
                                bi:lightning-charge-fill -->
                                    <Icon
                                        icon="bi:lightning-charge"
                                        style="color: var(--success); font-size: var(--step-1);"
                                    />
                                    <span>
                                        {variant.skillLevelData
                                            .eleAccumulationRate}% elemental
                                        charge ({variant.skillLevelData
                                            .eleAccumulationMax} max)
                                    </span>
                                </dd>
                            {/if}

                            // TODO: automate this with the keys
                            <!-- Counter Cost -->
                            {#if getStatsChanged(["counterCost"], skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd>
                                    <Icon
                                        icon="cib:twoo"
                                        style="color: var(--accent1); font-size: var(--step-1);"
                                    />
                                    <Tooltip inline>
                                        <span>
                                            Self-cancelling
                                            <Icon
                                                icon="ri:question-line"
                                                style="color: var(--accent1); font-size: var(--step-1)"
                                            />
                                        </span>
                                        <svelte:fragment slot="tooltip">
                                            Ending animation is shortened when
                                            using {skill.text.name} repeatedly.
                                        </svelte:fragment>
                                    </Tooltip>
                                </dd>
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
                {#if skill.hiddenSkillData.stCost}
                    <dd>
                        <Icon
                            icon="ph:sparkle-fill"
                            style="color: darkorchid; font-size: var(--step-1);"
                        />
                        <span>
                            Consumes {skill.hiddenSkillData.stCost} Stamina
                        </span>
                    </dd>
                {/if}
                {#if skill.hiddenSkillData.dodgeAttackMpRecovery}
                    <dd>
                        <Icon
                            icon="streamline:graph-bar-increase-solid"
                            style="color: deeppink; font-size: var(--step-1);"
                        />
                        <span>
                            Dodge attack recovers {skill.hiddenSkillData
                                .dodgeAttackMpRecovery} EP on use
                        </span>
                    </dd>
                {/if}
                {#if skill.hiddenSkillData.jumpDistance}
                    <dd>
                        <Icon
                            icon="icon-park-outline:auto-width-one"
                            style="color: var(--accent1); font-size: var(--step-1);"
                        />
                        <span>
                            Distance {skill.hiddenSkillData.jumpDistance} units
                        </span>
                    </dd>
                {/if}
                {#if skill.hiddenSkillData.jumpHeightSheathed}
                    <dd>
                        <Icon
                            icon="icon-park-outline:auto-height-one"
                            style="color: var(--danger); font-size: var(--step-1);"
                        />
                        <span>
                            Height (sheathed) {skill.hiddenSkillData
                                .jumpHeightSheathed} units
                        </span>
                    </dd>
                {/if}
                {#if skill.hiddenSkillData.jumpHeightUnsheathed}
                    <dd>
                        <Icon
                            icon="icon-park-outline:auto-height-one"
                            style="color: var(--success); font-size: var(--step-1);"
                        />
                        <span>
                            Height (unsheathed) {skill.hiddenSkillData
                                .jumpHeightUnsheathed} units
                        </span>
                    </dd>
                {/if}
                {#if skill.hiddenSkillData.chainable}
                    <dd>
                        <Icon
                            icon="cib:twoo"
                            style="color: var(--accent1); font-size: var(--step-1);"
                        />
                        <Tooltip inline>
                            <span>
                                Self-cancelling
                                <Icon
                                    icon="ri:question-line"
                                    style="color: var(--accent1); font-size: var(--step-1)"
                                />
                            </span>
                            <svelte:fragment slot="tooltip">
                                Ending animation is shortened when using {skill
                                    .text.name} repeatedly.
                            </svelte:fragment>
                        </Tooltip>
                    </dd>
                {/if}
            </div>
        {/if}
    </dl>
    <h3 class="mini-header">Animation Cancels</h3>
    <ul class="mini-header">
        <li>
            <Icon
                icon="mdi:checkbox-blank-circle-outline"
                style="font-size: var(--step-1)"
            /> Jump
        </li>
        <li class="enabled">
            <Icon
                icon="mdi:checkbox-marked-circle-outline"
                style="font-size: var(--step-1)"
            /> Springboard Jump
        </li>
        <li class="recommended">
            <Icon
                icon="mdi:checkbox-marked-circle-auto-outline"
                style="font-size: var(--step-1)"
            /> Class Action
        </li>
        <li class="enabled">
            <Icon
                icon="mdi:checkbox-marked-circle-outline"
                style="font-size: var(--step-1)"
            /> Dodge
        </li>
        <li class="enabled">
            <Icon
                icon="mdi:checkbox-marked-circle-outline"
                style="font-size: var(--step-1)"
            /> Battle Imagine
        </li>
        <li>
            <Icon
                icon="mdi:checkbox-blank-circle-outline"
                style="font-size: var(--step-1)"
            /> Ultimate Skill
        </li>
        <li>
            <Icon
                icon="mdi:checkbox-blank-circle-outline"
                style="font-size: var(--step-1)"
            /> Treasure Chest
        </li>
        <li>
            <Icon
                icon="mdi:checkbox-blank-circle-outline"
                style="font-size: var(--step-1)"
            /> Supplier
        </li>
    </ul>
    <div class="flex gap-4 flex-wrap">
        <small class="flex items-center gap-1 text3 font-semibold">
            <Icon icon="mdi:checkbox-blank-circle-outline" /> No known cancels
        </small>
        <small class="flex items-center gap-1 text1 font-semibold">
            <Icon icon="mdi:checkbox-marked-circle-outline" /> Cancel available
        </small>
        <small
            class="flex items-center gap-1 font-semibold"
            style="color: limegreen;"
        >
            <Icon icon="mdi:checkbox-marked-circle-auto-outline" /> Recommended cancel
        </small>
    </div>
</details>

<style lang="scss">
    .mini-header span:not(:last-of-type)::after {
        content: " / ";
        color: var(--surface3);
    }

    summary {
        font-size: var(--step-3);
    }

    dl {
        line-height: 1.75;
        font-size: var(--step-1);
    }

    .desc {
        // max-inline-size: 65ch;
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

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-block: 0.5rem 1rem;
    }

    li {
        padding: 0.5rem 0.75rem;
        background: var(--surface2);
        border-radius: 0.5rem;
        width: fit-content;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .enabled {
        color: var(--text1);
        background: var(--surface3);
    }

    .recommended {
        background: var(--surface3);
        color: limegreen;
        // outline: 2px solid limegreen;
    }
</style>
