<script>
    import MetaTags from "$lib/components/MetaTags.svelte";
    import Icon from "@iconify/svelte";
    import Skill from "$lib/components/Skill";

    export let data;
    $: ({ metadata } = data);

    $: skills = data.skills
        .filter((s) => s.skillLevels[0]?.length > 0)
        .sort((a, b) => {
            const [reqLevelA, reqLevelB] = [
                a.skillLevels[0][0].classLevel,
                b.skillLevels[0][0].classLevel,
            ];
            if (reqLevelA === reqLevelB) return a.skill_id - b.skill_id;
            return reqLevelA - reqLevelB;
        });
    $: hiddenSkills = data.skills.filter((s) => !s.skillLevels[0]);
</script>

<MetaTags
    title="{metadata.title} Skills — Bapharia"
    description="All {metadata.title} skills in BLUE PROTOCOL."
/>

<article class="main-pane">
    <hgroup>
        <p class="mini-header">Class Overview</p>
        <div class="flex flex-wrap gap-4" style="align-items: end">
            <h1>{metadata.title} Skills</h1>
        </div>
        <p>All {metadata.title} skills in BLUE PROTOCOL.</p>
    </hgroup>

    <nav class="toc">
        <ol class="unstyled-list">
            <li>
                <a href="#intro" class="styled-link">Intro</a>
            </li>
            <li>
                <a href="#base-actions" class="styled-link">Base Actions</a>
            </li>
            <li>
                <a href="#tactical-skills" class="styled-link"
                    >Tactical Skills</a
                >
            </li>
            <li>
                <a href="#ultimate-skills" class="styled-link"
                    >Ultimate Skills</a
                >
            </li>
            <li>
                <a href="#class-abilities" class="styled-link"
                    >Class Abilities</a
                >
            </li>
            <li>
                <a href="#base-abilities" class="styled-link">Base Abilities</a>
            </li>
            <li>
                <a href="#misc-skills" class="styled-link">Misc. Skills</a>
            </li>
        </ol>
    </nav>

    <section>
        <h2 id="intro">Intro</h2>
        <p>
            Skills can be obtained by leveling up a class high enough to unlock
            the G1 version of the skill. "Ability" typically means passive
            skill. Class Action (or Subaction) refers to the second Base Action
            (right click).
        </p>
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="base-actions">Base Actions</h2>
            <p>
                One basic attack and one class action can be equipped at a time.
            </p>
        </hgroup>
        {#each skills.filter((skill) => skill.skill_type === 0 || skill.skill_type === 1) as skill}
            <Skill {skill} />
        {/each}
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="tactical-skills">Tactical Skills</h2>
            <p>
                Up to 4 tactical skills can be a equipped at a time. Tactical
                skills can have <a href="/guides/combat#skill-variants"
                    >variations</a
                >
                such as α and β, which provide modifications to the normal version.
                <!-- TODO: Add guide for skill variations -->
                <!-- Learn about unlocking Alpha and Beta variants <a href="/guides/skills">here</a>. -->
            </p>
        </hgroup>
        {#each skills.filter((skill) => skill.skill_type >= 2 && skill.skill_type <= 5) as skill}
            <Skill {skill} />
        {/each}
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="ultimate-skills">Ultimate Skills</h2>
            <p>One ultimate skill can be equipped at a time.</p>
        </hgroup>
        {#each skills.filter((skill) => skill.skill_type === 6) as skill}
            <Skill {skill} />
        {/each}
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="class-abilities">Class Abilities</h2>
            <p>
                {metadata.title} can equip up to two class abilities from the below,
                along with two
                <strong>shareable class abilities from other classes</strong> (slots
                unlock at level 30 and 45).
            </p>
        </hgroup>
        {#each skills.filter((skill) => skill.skill_type === 8) as skill}
            <Skill {skill} />
        {/each}
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="base-abilities">Base Abilities</h2>
            <p>
                All Base Abilities are automatically passively applied when
                unlocked.
            </p>
        </hgroup>
        {#each skills.filter((skill) => skill.skill_type === 9) as skill}
            <Skill {skill} />
        {/each}
    </section>

    <section class="grid gap-4">
        <hgroup>
            <h2 id="misc-skills">Misc. Skills</h2>
            <p></p>
        </hgroup>
        {#each hiddenSkills as skill}
            <Skill {skill} />
        {/each}
    </section>
</article>

<style lang="scss">
    section hgroup {
        margin-top: 2rem;
        margin-bottom: 0;

        p {
            margin-block: 0.5em;
        }
    }
</style>
