<script>
    import { crossfade, fly } from "svelte/transition";
    import AnimationCancels from "./AnimationCancels.svelte";
    import SkillGrade from "./SkillGrade.svelte";
    import SkillHeader from "./SkillHeader.svelte";
    import TabSelectors from "./TabSelectors.svelte";
    import animationCancelsData from "./animation-cancels.json"
    import notesData from "./skill-notes.json"

    export let skill = {};

    let selectedTab;

    function getAbilitiesForGrade(skillLevel) {
        return skill.abilities.filter(
            (ability) =>
                ability.condition_skill_id_1 === skill.skill_id &&
                ability.condition_skill_level_1 === skillLevel.level
        );
    }

    let animationCancels = animationCancelsData[skill.id]
    let notes = notesData[skill.id]
</script>

<div class="skill grid">
    <SkillHeader {skill} />
    <TabSelectors bind:selectedTab {notes} {animationCancels} />
    {#if selectedTab === "descriptions"}
        <dl
            class="unstyled-list skill-grade-descriptions"
            style:gap="0"
            role="list"
            
        >
            {#each skill.skill_mastery_param as skillLevel, index}
                <SkillGrade
                    grade={skillLevel.level}
                    reqLevel={skillLevel.condition_class_level}
                    ability_type={skill.ability_type}
                    desc={skill.desc}
                />
                {#if getAbilitiesForGrade(skillLevel).length > 0}
                    {#each getAbilitiesForGrade(skillLevel) as variant}
                        <SkillGrade
                            grade={skillLevel.level}
                            reqLevel={variant.class_level}
                            ability_type={variant.ability_type}
                            desc={variant.desc}
                        />
                    {/each}
                {/if}
                {#if index < skill.skill_mastery_param.length - 1}
                    <hr style:margin="0" />
                {/if}
            {/each}
        </dl>
    {:else if animationCancels && selectedTab === "animation-cancels"}
        <AnimationCancels {animationCancels} />
    {:else if notes && selectedTab === "notes"}
        <div>
            <p style="padding-top: 0; margin-block: 0.5rem 0; font-size: var(--step-0)">
                {notes}
            </p>
        </div>
    {/if}
</div>

<style lang="scss">
    .skill,
    dl {
        max-inline-size: none;
        line-height: 1.75;
    }

    dl {
        // width: fit-content;
    }
</style>
