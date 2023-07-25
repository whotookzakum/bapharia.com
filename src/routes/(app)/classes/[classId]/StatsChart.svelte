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
    import hue from "./classHues.json"

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

    const allstats = {
        ATK: "ap",
        DEF: "dp",
        "Crit Rate": "cr",
        "Crit Dmg": "cp",
        STR: "str",
        VIT: "vit",
        DEX: "dex",
        INT: "int",
        MND: "mnd",
        // HP: "hp",
        Rec: "rp"
        // icl and pcl unknown
    };

    $: datasets = classes.map((job) => {
        const levelData = player_statuses.find(
            (statuses) => statuses.lv === level && statuses.class === job
        );

        const data = Object.values(allstats).map((statAbbr) => levelData[statAbbr])

        return {
            data,
            backgroundColor: `hsla(${hue[job]}, 60%, 50%, 0.2)`,
            borderColor: `hsla(${hue[job]}, 60%, 50%, 1)`,
            hoverBackgroundColor: `hsla(${hue[job]}, 60%, 50%, 0.3)`,
            borderWidth: 2,
        };
    });

    $: config = {
        type: "bar",
        data: {
            labels: Object.keys(allstats),
            datasets,
        },
        options: {
            indexAxis: "y",
            responsive: true,
            scales: {
                x: {
                    max: 200,
                    min: 0,
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
        myChart.update();
    }
</script>

<div class="chart-wrapper grid">
    <h3 class="toc-exclude" style="margin: 0">Base Stats</h3>
    <canvas bind:this={chartElement} />
</div>

<style lang="scss">
    .chart-wrapper {
        width: 100%;
        margin-inline: 1rem;
        height: height;
        max-height: 600px;
        justify-content: center;
    }
</style>
