<script>
    import StatsChart from "./StatsChart.svelte";
    import { page } from "$app/stores";
    import StatsChartCheckboxes from "./StatsChartCheckboxes.svelte";
    import InputNumber from "$lib/components/InputNumber.svelte";
    import hue from "./classHues.json";
    import classesData from "./classes.json";
    let selectedClasses;
    let levelSelector = 70;
    $: selectedLevel = levelSelector;
    $: {
        if (levelSelector > 100) selectedLevel = 100;
        if (levelSelector < 1) selectedLevel = 1;
        if (typeof levelSelector !== "number") selectedLevel = 1;
    }
    $: currentClass = classesData.find(
        (job) => job.id === parseInt($page.params.classId),
    );
</script>

<div class="stats-wrapper box flex">
    <div class="left-col grid">
        <div class="grid gap-2">
            <span id="stats-level-description" class="mini-header">Level</span>
            <div>
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
                    style="accent-color: hsla({hue[
                        currentClass.internalName
                    ]}, 60%, 50%, 1); margin: 1rem 0; width: 100%;"
                    describedby="stats-level-description"
                />
            </div>
        </div>

        <div class="grid gap-3">
            <span class="mini-header">Classes</span>
            <StatsChartCheckboxes
                currentClassId={parseInt($page.params.classId)}
                bind:selectedClasses
            />
        </div>
    </div>
    <hr />
    <div class="right-col">
        <StatsChart level={selectedLevel} classes={selectedClasses} />
    </div>
</div>
<small style="color: var(--text3)">All classes have 100 base Stamina, and a maximum Crit Rate of 30%.</small>

<style lang="scss">
    .stats-wrapper {
        margin-block: 0.5rem 1rem;
        overflow: unset;
        gap: 1rem;
    }

    .left-col {
        align-content: start;
        flex-basis: 20ch;
    }

    .right-col {
        flex: 1;
    }

    @media (max-width: 950px) {
        .stats-wrapper {
            display: grid;
        }

        hr {
            order: 2;
        }

        .left-col {
            order: 3;
        }
    }
</style>
