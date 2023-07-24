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
            backgroundColor: `hsla(${hue(job)}, 60%, 50%, 0.2)`,
            borderColor: `hsla(${hue(job)}, 60%, 50%, 1)`,
            hoverBackgroundColor: `hsla(${hue(job)}, 60%, 50%, 0.3)`,
            borderWidth: 2,
        };
    });

    function hue(job) {
        switch(job) {
            case "rebellion": return 210;
            case "blaster": return 120;
            case "berserker": return 0;
            case "lancer": return 190;
            case "magician": return 290;
            case "smasher": return 25;
            default: return 210;
        }
    }

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

<div class="chart-wrapper flex">
    <canvas bind:this={chartElement} />
</div>

<style lang="scss">
    .chart-wrapper {
        width: 100%;
        height: auto;
        max-height: 600px;
        justify-content: center;
        margin: 1rem 0;
    }
</style>
