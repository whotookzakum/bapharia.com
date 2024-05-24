<script>
    import { crossfade, fly } from "svelte/transition";
    import AnimationCancels from "./AnimationCancels.svelte";
    import SkillGrade from "./SkillGrade.svelte";
    import TabSelectors from "./TabSelectors.svelte";
    import animationCancelsData from "./animation-cancels.json";
    import notesData from "./skill-notes.json";
    import SkillIcon from "./SkillIcon.svelte";
    import { userLocale } from "$lib/stores";
    import categories from "$scripts/utils/categories";
    import Icon from "@iconify/svelte";

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

    function getTags() {
        let tags = [];

        skill.text.element?.split(/(?=[A-Z])/).forEach((substr) => {
            if (substr !== "None")
                tags.push({
                    idString: substr,
                    text: categories[$userLocale].Element[substr],
                });
        });

        skill.text.type?.split(/(?=[A-Z])/).forEach((substr) => {
            if (substr !== "None")
                tags.push({
                    idString: substr,
                    text: categories[$userLocale].SkillType[substr],
                });
        });

        return tags.filter((tag) => tag !== "None");
    }

    function getDisplayCooldown(
        skillLevel,
        variantIndex,
        skillLevels,
        levelIndex,
    ) {
        const hasCooldown = skillLevel[variantIndex].skillLevelData?.cooldown;

        // G1 normal should always be shown
        if (levelIndex === 0 && variantIndex === 0) return hasCooldown;

        let differsFromPrevious = false;

        // Compare alpha and beta cooldown to normal variant in the same grade
        if (variantIndex > 0) {
            differsFromPrevious =
                skillLevel[variantIndex].skillLevelData.cooldown !==
                skillLevel[0].skillLevelData.cooldown;
        }
        // Compare normal variant to previous grade's normal variant
        else if (skillLevels[levelIndex - 1][0]?.skillLevelData?.cooldown) {
            differsFromPrevious =
                skillLevel[variantIndex].skillLevelData.cooldown !==
                skillLevels[levelIndex - 1][0].skillLevelData.cooldown;
        }

        return hasCooldown && differsFromPrevious;
    }
</script>

<details class="surface1 p-4 rounded-2xl" open>
    <summary class="gap-4">
        <!-- <SkillHeader {skill} /> -->
        <SkillIcon {skill} />
        <span class="flex flex-col-reverse">
            <span style="font-weight: 600">{skill.text.name}</span>
            <span class="mini-header">
                {#each getTags() as { idString, text }}
                    <span style:color="var(--color-{idString})">{text}</span>
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
                        <div class="tags-section flex flex-wrap gap-x-4">
                            {#if getDisplayCooldown(skillLevel, variantIndex, skill.skillLevels, levelIndex)}
                                <dd class="cooldown">
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
                                <dd class="cooldown">
                                    <Icon
                                        icon="ph:fire-duotone"
                                        style="color: crimson; font-size: var(--step-1);"
                                    />
                                    <span> 480% damage </span>
                                </dd>
                                <dd class="cooldown">
                                    <!-- ant-design:fire-twotone -->
                                    <!-- bi:lightning-charge-fill or bi:lightning-charge with color limegreen -->
                                    <Icon
                                        icon="bi:lightning-charge"
                                        style="color: limegreen; font-size: var(--step-1);"
                                    />
                                    <span> 55 elemental charge </span>
                                </dd>
                            {/if}
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
    </dl>
    <h3 class="mini-header">Animation Cancels</h3>
    <ul class="mini-header">
        <li><Icon icon="mdi:checkbox-blank-circle-outline" style="font-size: var(--step-1)" /> Jump</li>
        <li class="enabled"><Icon icon="mdi:checkbox-marked-circle-outline" style="font-size: var(--step-1)" /> Springboard Jump</li>
        <li class="recommended"><Icon icon="mdi:checkbox-marked-circle-auto-outline" style="font-size: var(--step-1)" /> Class Action</li>
        <li class="enabled"><Icon icon="mdi:checkbox-marked-circle-outline" style="font-size: var(--step-1)" /> Dodge</li>
        <li class="enabled"><Icon icon="mdi:checkbox-marked-circle-outline" style="font-size: var(--step-1)" /> Battle Imagine</li>
        <li><Icon icon="mdi:checkbox-blank-circle-outline" style="font-size: var(--step-1)" /> Ultimate Skill</li>
        <li><Icon icon="mdi:checkbox-blank-circle-outline" style="font-size: var(--step-1)" /> Treasure Chest</li>
        <li><Icon icon="mdi:checkbox-blank-circle-outline" style="font-size: var(--step-1)" /> Supplier</li>
    </ul>
    <div class="flex gap-4 flex-wrap">
        <small class="flex items-center gap-1 text3 font-semibold">
            <Icon icon="mdi:checkbox-blank-circle-outline" /> No known cancels
        </small>
        <small class="flex items-center gap-1 text1 font-semibold">
            <Icon icon="mdi:checkbox-marked-circle-outline" /> Cancel available
        </small>
        <small class="flex items-center gap-1 font-semibold" style="color: limegreen;">
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

    .cooldown {
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
