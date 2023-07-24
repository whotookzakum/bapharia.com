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

    export let classes = []
    export let level = 50

    let chartElement;

    Chart.register(
        CategoryScale,
        LinearScale,
        BarController,
        BarElement,
        Tooltip
    );

    let myChart;

    $: currentLevelStats = player_statuses.find(
        (statuses) => statuses.lv === level && statuses.class === classes[0]
    );

    $: stats = {
        ATK: currentLevelStats?.ap,
        DEF: currentLevelStats?.dp,
        "Crit Rate": currentLevelStats?.cr,
        "Crit Dmg": currentLevelStats?.cp,
        STR: currentLevelStats?.str,
        VIT: currentLevelStats?.vit,
        DEX: currentLevelStats?.dex,
        INT: currentLevelStats?.int,
        MND: currentLevelStats?.mnd,
        // "Recovery": currentLevelStats.rp,
        // "HP": currentLevelStats.hp
        // pcl, icl?
    };

    $: config = {
        type: "bar",
        data: {
            labels: Object.keys(stats),
            datasets: [
                {
                    data: Object.values(stats),
                    backgroundColor: ["rgba(51, 128, 204, 0.2)"],
                    borderColor: ["rgba(51, 128, 204, 1)"],
                    hoverBackgroundColor: ["rgba(51, 128, 204, 0.3)"],
                    borderWidth: 2,
                },
            ],
        },
        options: {
            indexAxis: "y",
            elements: {
                bar: {
                    borderWidth: 2,
                },
            },
            responsive: true,
            plugins: {
                legend: {
                    position: "right",
                },
                title: {
                    display: true,
                    text: "Chart.js Horizontal Bar Chart",
                },
            },
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
        myChart.options.animation = false
    });

    $: if (myChart) {
        myChart.data.datasets[0].data = config.data.datasets[0].data
        myChart.update()
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