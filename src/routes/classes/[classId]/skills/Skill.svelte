<script>
    import SkillGrade from "./SkillGrade.svelte";
    import SkillHeader from "./SkillHeader.svelte";
    export let skill = {};

    function getAbilitiesForGrade(skillLevel) {
        return skill.abilities.filter(
            (ability) =>
                ability.condition_skill_id_1 === skill.skill_id &&
                ability.condition_skill_level_1 === skillLevel.level
        );
    }
</script>

<div class="skill grid g-50">
    <SkillHeader {skill} />

    <dl class="unstyled-list skill-grade-descriptions" style:gap="0" role="list">
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
                <hr style:margin="1rem 0" />
            {/if}
        {/each}
    </dl>
</div>

<style lang="scss">
    .skill,
    dl {
        max-inline-size: none;
        line-height: 1.75;
    }

    dl {
        margin-top: 1rem;
    }

    @media (min-width: 900px) {
        dl {
            padding-inline: 1rem;
        }
    }
</style>
