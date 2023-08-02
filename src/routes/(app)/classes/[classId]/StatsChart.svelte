<script>
    import player_statuses from "$bp_server/japan/player_statuses.json";
    import { onMount } from "svelte";
    import {
        Chart,
        CategoryScale,
        LinearScale,
        BarController,
        BarElement,
        Tooltip,
    } from "chart.js";
    import hue from "./classHues.json";
    import { allStats } from "./stores";
    
    import StatsChartSettings from "./StatsChartSettings.svelte";

    export let classes = [];
    export let level = 50;

    let chartElement; // reference to canvas element
    let myChart; // the chart instance

    // Register components to use them
    Chart.register(
        CategoryScale,
        LinearScale,
        BarController,
        BarElement,
        Tooltip
    );

    $: console.log($allStats)

    $: labels = $allStats.reduce((acc, stat) => {
        if (stat.checked) acc.push(stat.label);
        return acc;
    }, []);

    $: datasets = classes.map((job) => {
        const levelData = player_statuses.find(
            (statuses) => statuses.lv === level && statuses.class === job
        );

        const data = $allStats.reduce((acc, stat) => {
            if (stat.checked) acc.push(levelData[stat.abbr]);
            return acc;
        }, []);

        return {
            data,
            backgroundColor: `hsla(${hue[job]}, 60%, 50%, 0.2)`,
            borderColor: `hsla(${hue[job]}, 60%, 50%, 1)`,
            hoverBackgroundColor: `hsla(${hue[job]}, 60%, 50%, 0.3)`,
            borderWidth: 2,
        };
    });

    let selectedIndexAxis = "y";
    let maxAxisValue = 400;

    $: config = {
        type: "bar",
        data: {
            labels,
            datasets,
        },
        options: {
            indexAxis: selectedIndexAxis,
            responsive: true,
            scales: {
                x: {
                    max: maxAxisValue ? maxAxisValue : null,
                    // min: 0,
                },
                y: {
                    max: maxAxisValue ? maxAxisValue : null,
                    // min: 0,
                },
            },
        },
    };

    onMount(async () => {
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });

    $: if (myChart) {
        myChart.data.datasets = datasets;
        myChart.data.labels = labels;
        myChart.options.scales.x.max = maxAxisValue ? maxAxisValue : null;
        myChart.options.scales.y.max = maxAxisValue ? maxAxisValue : null;
        myChart.update();
    }

    function changeAxis(e) {
        myChart.destroy();
        const newConfig = config;
        newConfig.options.indexAxis = e.target.value;
        myChart = new Chart(chartElement, newConfig);
        myChart.options.animation = false;
    }
</script>

<div class="chart-wrapper grid">
    <h2>Base Stats</h2>
    <StatsChartSettings {changeAxis} bind:maxAxisValue bind:selectedIndexAxis />
    <canvas bind:this={chartElement} />
    <small
        >Base Stats do not include ATK gains from STR/DEX/INT, Crit Rate gains
        from DEX, etc., so actual values may be higher.</small
    >
</div>

<style lang="scss">
    .chart-wrapper {
        width: 100%;
        margin-left: 1rem;
        max-height: 600px;
        justify-content: center;
        min-width: 0;
        position: relative;

        h2 {
            margin: 0;
            font-size: var(--step-3);
        }

        canvas {
            max-width: 100%;
        }

        small {
            margin-top: 1rem;
            line-height: 1.4;
        }
    }
</style>
