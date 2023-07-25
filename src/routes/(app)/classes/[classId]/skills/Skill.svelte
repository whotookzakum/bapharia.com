<script>
    import { userLocale } from "$lib/stores";
    import SkillGrade from "./SkillGrade.svelte";
    import SkillIcon from "./SkillIcon.svelte";
    export let skill = {};

    function getAbilitiesForGrade(abilities, skillLevel) {
        return skill.abilities.filter(ability => ability.condition_skill_id_1 === skill.skill_id && ability.condition_skill_level_1 === skillLevel.level)
    }
</script>

<li class="skill grid g-50">
    <header class="flex g-50" style:align-items="center">
        <SkillIcon
            skillType={skill.skill_type}
            skillIcon={skill.thumb}
            elementImg={skill.elementImg}
            skillBackgroundImg={skill.skillBackgroundImg}
        />
        <div>
            <h3 class="toc-exclud" style:margin="0">{skill.name[$userLocale]}</h3>
            <span>{skill.element} • {skill.type}</span>
        </div>
    </header>

    <dl class="unstyled-list skill-grade-descriptions">
        {#each skill.skill_mastery_param as skillLevel, index}
            <SkillGrade grade={skillLevel.level} reqLevel={skillLevel.condition_class_level} ability_type={skill.ability_type} desc={skill.desc} />
            {#if getAbilitiesForGrade(skill.abilities, skillLevel).length > 0}
                {#each getAbilitiesForGrade(skill.abilities, skillLevel) as variant}
                    <SkillGrade grade={skillLevel.level} reqLevel={variant.class_level} ability_type={variant.ability_type} desc={variant.desc} />
                {/each}
            {/if}
            {#if index < skill.skill_mastery_param.length - 1}
                <hr style:margin="1rem 0">
            {/if}
        {/each}
    </dl>
</li>

<style lang="scss">
    dl {
        gap: 0;
    }

    .skill {
        max-inline-size: none;
    }
</style>
