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

    export let config;
    export let datasets;

    let chartElement;
    let myChart;

    onMount(() => {
        Chart.register(
            CategoryScale,
            LinearScale,
            BarController,
            BarElement,
            Tooltip,
            Legend
        );
        Chart.defaults.font.size = 18;
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });

    $: if (myChart) {
        myChart.data.datasets = datasets;
        myChart.update();
    }
</script>

<canvas bind:this={chartElement} />

<style lang="scss">
    canvas {
        max-width: 100%;
        margin-block: 1rem;
    }
</style>
