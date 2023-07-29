<script>
    import StatsChart from "./StatsChart.svelte";
    import { page } from "$app/stores";
    import StatsChartCheckboxes from "./StatsChartCheckboxes.svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";
    import hue from "./classHues.json"
    import classesData from "../classes.json"
    let selectedClasses;
    let levelSelector = 50;
    $: selectedLevel = levelSelector;
    $: {
        if (levelSelector > 100) selectedLevel = 100
        if (levelSelector < 1) selectedLevel = 1
        if (typeof levelSelector !== 'number') selectedLevel = 1
    }
    $: currentClass = classesData.find(job => job.id === parseInt($page.params.classId))
</script>

<div class="stats-wrapper box flex">
    <div class="left-col grid">
        <div>
            <span id="stats-level-description" class="component-label">Level</span>
            <InputNumber
                description="Level"
                prefix="LV."
                id="level-input-number"
                bind:value={levelSelector}
                max={100}
                min={1}
                invalid={levelSelector > 100 || levelSelector < 0}
                describedby="stats-level-description"
            />

            <input
                type="range"
                bind:value={levelSelector}
                max="100"
                min="1"
                style="accent-color: hsla({hue[currentClass.internalName]}, 60%, 50%, 1); margin: 1rem 0; width: 100%;"
                describedby="stats-level-description"
            />
        </div>

        <div>
            <span class="component-label">Compare classes</span>
            <StatsChartCheckboxes
                currentClassId={parseInt($page.params.classId)}
                bind:selectedClasses
            />
        </div>
    </div>
    <StatsChart level={selectedLevel} classes={selectedClasses} />
</div>

<style lang="scss">
    .stats-wrapper {
        margin: 2rem 0;
    }

    .left-col {
        border-right: 1px solid var(--surface3);
        padding-right: 1rem;
        align-content: start;
        gap: 1rem;
    }
</style>
