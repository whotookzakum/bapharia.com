<script>
    import player_statuses from "$bp_server/japan/player_statuses.json";
    import class_params from "$bp_server/japan/player_statuses_common_params.json";
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
    export let level = 0;

    let chartElement; // reference to canvas element
    let myChart; // the chart instance

    let showTrueValue = true;

    $: labels = $allStats.reduce((acc, stat) => {
        if (stat.checked) acc.push(stat.label);
        return acc;
    }, []);

    $: datasets = classes.map((job) => {
        const levelData = player_statuses.find(
            (statuses) => statuses.lv === level && statuses.class === job
        );

        const data = $allStats.reduce((acc, stat) => {
            if (stat.checked) {
                let value = showTrueValue ? getStatTrueValue(stat, levelData) : levelData[stat.abbr];
                acc.push(value);
            }
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

    function getStatTrueValue(stat, levelData) {
        const { ap, dp, cr, cp, str, dex, int, mnd, vit, rp, hp } = levelData;
        const params = class_params.find(
            (paramSet) => paramSet.class === levelData.class
        );
        const intToAp = params.int_factor_of_ap / 100;
        const mndToAp = params.mnd_factor_of_ap / 100;
        const dexToCr = params.dex_factor_of_cr / 100;
        const mndToCr = params.mnd_factor_of_cr / 100;
        const intToCp = params.int_factor_of_cp / 100;
        const strToDef = params.str_factor_of_dp / 100;
        const vitToDef = params.vit_factor_of_dp / 100;
        const intToRp = params.int_factor_of_rp / 100;
        const mndToRp = params.mnd_factor_of_rp / 100;
        const vitToHp = params.vit_factor_of_hp / 100;
        const strToAp = params.str_factor_of_ap / 100;
        const dexToAp = params.dex_factor_of_ap / 100;
        const strToCp = params.str_factor_of_cp / 100;
        const dexCrDecay = params.dex_decay_rate_of_cr / 100;

        switch(stat.abbr) {
            case "ap": 
                if (levelData.class === "magician") return ap + intToAp * int + mndToAp * mnd
                return ap + strToAp * str + dexToAp * dex
            case "cr":
                return cr + (dexToCr * dex + mndToCr * mnd) ** dexCrDecay
            case "cp": 
                if (levelData.class === "magician") return cp + intToCp * int
                return cp + strToCp * str
            case "dp":
                return dp + strToDef * str + vitToDef * vit
            case "rp":
                return rp + mndToRp * mnd + intToRp * rp
            case "hp":
                return hp + vitToHp * vit
            default:
                return levelData[stat.abbr]
        }
    }

    let selectedIndexAxis = "y";
    let maxAxisValue = 600;

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
                    max: maxAxisValue ? maxAxisValue : null
                },
                y: {
                    max: maxAxisValue ? maxAxisValue : null
                },
            },
        },
    };

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

    onMount(() => {
        // Register components to use them
        Chart.register(
            CategoryScale,
            LinearScale,
            BarController,
            BarElement,
            Tooltip
        );
        Chart.defaults.font.size = 12;
        // Chart.defaults.color = 
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });
</script>

<div class="chart-wrapper grid">
    <span class="mini-header">Stats</span>
    <StatsChartSettings {changeAxis} bind:maxAxisValue bind:selectedIndexAxis bind:showTrueValue />
    <canvas bind:this={chartElement} />
</div>


<style lang="scss">
    .chart-wrapper {
        width: 100%;
        justify-content: center;
        min-width: 0;
        position: relative;

        canvas {
            max-width: 100%;
        }
    }
</style>
