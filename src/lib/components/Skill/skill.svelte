<script>
    import Description from "./skill-description.svelte";
    import Header from "./skill-header.svelte";
    import Notes from "./skill-notes.svelte";
    import AnimationCancels from "./skill-animation-cancels.svelte";
    export let skill;
</script>

<details id={skill.skill_id} class="skill surface1 p-4 rounded-2xl">
    <summary class="gap-4">
        <Header {skill} />
    </summary>
    <Description {skill} />
    <Notes {skill} />
    <AnimationCancels {skill} />
</details>

<style lang="scss">
    details.skill {
        font-size: var(--step-1);
    }

    summary {
        font-size: var(--step-3);
    }
</style>