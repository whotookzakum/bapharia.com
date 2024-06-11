<script>
    import { onMount, onDestroy } from "svelte";
    import {
        Chart,
        CategoryScale,
        LinearScale,
        BarController,
        BarElement,
        Tooltip,
        Legend,
    } from "chart.js";
    import ChartDataLabels from "chartjs-plugin-datalabels";

    export let data;

    let checkedPassTypes = [0, 1, 2];
    let chartElement;
    let myChart;

    function updatePassSelection(e, type) {
        if (e.target.checked) {
            checkedPassTypes.push(type);
            checkedPassTypes = checkedPassTypes;
        } else checkedPassTypes = checkedPassTypes.filter((t) => t !== type);
    }

    onMount(() => {
        Chart.register(
            CategoryScale,
            LinearScale,
            BarController,
            BarElement,
            Tooltip,
            Legend,
        );
        Chart.defaults.font.size = 18;
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });

    $: if (myChart) {
        myChart.data.datasets = datasets;
        myChart.update();
    }

    $: config = {
        type: "bar",
        data: {
            labels: ["Basic", "Advanced", "Royal"],
            datasets,
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    max: 15000,
                    min: 0,
                    ticks: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18,
                        },
                    },
                },
                datalabels: {
                    anchor: "end",
                    align: "top",
                    color: "hsla(0, 0%, 40%, 1)",
                    font: {
                        size: 18,
                    },
                    // https://www.youtube.com/watch?v=mlOlkuuh_E8
                    // formatter: (value, context) => {
                    //     let datasetIndexToShow = 2;

                    //     // If advanced pass dailies are < 0, put the text on top of Weeklies
                    //     if (TOTAL_PAID_DAILIES < 0) {
                    //         datasetIndexToShow = 1;
                    //     }

                    //     // Hide text on all other datasets
                    //     if (context.datasetIndex === datasetIndexToShow) {
                    //         if (context.dataIndex === 0)
                    //             return TOTAL_FREE_POINTS;
                    //         return TOTAL_PAID_POINTS;
                    //     }
                    //     return null;
                    // },
                },
            },
        },
        plugins: [ChartDataLabels],
    };

    $: datasets = [
        {
            label: "Seasonals",
            data: [300, 300, 300],
            backgroundColor: `hsla(210, 90%, 50%, 0.5)`,
        },
        {
            label: "Weeklies",
            data: [300, 300, 300],
            backgroundColor: `hsla(120, 60%, 50%, 0.5)`,
        },
        {
            label: "Dailies",
            data: [300, 300, 300],
            backgroundColor: `hsla(320, 60%, 50%, 0.5)`,
        },
    ];
</script>

<div class="flex gap-2 items-baseline mt-8 mb-2">
    <h3 class="m-0">Points Calculator</h3>
    <div class="flex gap-4 ml-auto" style="font-size: var(--step--1);">
        {#each data.passes as pass}
            <label
                class="select-none whitespace-nowrap"
                aria-describedby="pass{pass.type}"
            >
                <input
                    type="checkbox"
                    on:change={(e) => updatePassSelection(e, pass.type)}
                    checked={checkedPassTypes.includes(pass.type)}
                />
                {pass.text.name.replace(" Pass", "")}
            </label>
        {/each}
    </div>
</div>

<div>
    <canvas bind:this={chartElement} />
</div>

<style lang="scss">
    canvas {
        max-width: 100%;
    }
</style>
