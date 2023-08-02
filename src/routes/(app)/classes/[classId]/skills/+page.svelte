<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Skill from "./Skill.svelte";
    export let data;

    const skills = data.skills.sort(
        (a, b) =>
            a.skill_mastery_param[0]?.condition_class_level -
            b.skill_mastery_param[0]?.condition_class_level
    );
</script>

<MetaTags
    title={`${data.meta.title} Skills — Bapharia`}
    description={`All ${data.meta.title} skills in BLUE PROTOCOL.`}
/>

<h2 id="intro">Intro</h2>

<p>
    Skills can be obtained by leveling up a class high enough to unlock the G1
    version of the skill. Typically anything with "ability" as the category is a
    passive skill. Class Action, or Subaction, refers to the second Base Action
    (right click).
</p>

<p>
    Tactical skills can have variations such as α (alpha) and β (beta), which
    provide modifications to the normal version. Learn how to unlock skill
    variations <a href="/guides/skill-variations">here</a>.
</p>

<div id="skills" class="grid">
    <h2 id="base-actions">Base Actions</h2>
    <p>One basic attack and one class action can be equipped at a time.</p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type === 0 || skill.skill_type === 1) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2 id="tactical-skills">Tactical Skills</h2>
    <p>
        Up to 4 tactical skills can be a equipped at a time. Learn about
        unlocking Alpha and Beta variants <a href="/guides/skills">here</a>.
    </p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type >= 2 && skill.skill_type <= 5) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2 id="ultimate-skills">Ultimate Skills</h2>
    <p>One ultimate skill can be equipped at a time.</p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type === 6) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2 id="class-specific-abilities">Class-Specific Abilities</h2>
    <p>Up to two class-specific abilities can be equipped at a time.</p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type === 8 && skill.ability_type !== 100) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2 id="class-shared-abilities">Class-Shared Abilities</h2>
    <p>
        Up to two class-shared abilities can be equipped at a time. These skills
        can be equipped on any class after unlocking them.
    </p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type === 8 && skill.ability_type === 100) as skill}
            <Skill {skill} />
        {/each}
    </ol>
    <h2 id="base-abilities">Base Abilities</h2>
    <p>All Base Abilities are automatically passively applied when unlocked.</p>
    <ol class="unstyled-list grid" role="list">
        {#each skills.filter((skill) => skill.skill_type === 9) as skill}
            <Skill {skill} />
        {/each}
    </ol>
</div>

<style lang="scss">
    ol {
        gap: 5rem;
    }
</style>
