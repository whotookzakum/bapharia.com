<script>
    import { onMount } from "svelte";
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
    let chartElement;
    let myChart;
    Chart.register(
        CategoryScale,
        LinearScale,
        BarController,
        BarElement,
        Tooltip,
        Legend,
        ChartDataLabels
    );

    const SEASON_WEEKS = 9;
    const SEASON_DAYS = 60; // reset on the day it was launched so we got 1 weekly reset for free
    const FREE_DAILY_POINTS = 30;
    const PAID_DAILY_POINTS = 30;
    const FREE_WEEKLY_POINTS = 400;
    const PAID_WEEKLY_POINTS = 300;
    const FREE_SEASONAL_POINTS = 2010;
    const PAID_SEASONAL_POINTS = 1790;

    let daysMissed = 0;
    let purchaseDay = 1;

    let freeLateStartPenaltyWeekly = 0;
    let freeLateStartPenaltySeasonal = 0;
    let paidLateStartPenaltyWeekly = 0;
    let paidLateStartPenaltySeasonal = 0;

    $: {
        freeLateStartPenaltyWeekly = 0;
        paidLateStartPenaltyWeekly = 0;

        // Day 59/60, can't complete 3 logins
        if (daysMissed > SEASON_DAYS - 3) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeekly += 200 * SEASON_WEEKS;
        }

        // Can always clear complete 3 weeklies

        // Day 59/60, can't complete 3 logins to complete 5 weeklies
        if (purchaseDay > SEASON_DAYS - 2) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += 100 * SEASON_WEEKS;
        }

        // Day 57/60, can't complete 5 logins
        if (purchaseDay > SEASON_DAYS - 4) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += 100 * SEASON_WEEKS;
        }
    }

    $: {
        freeLateStartPenaltySeasonal = 0;
        paidLateStartPenaltySeasonal = 0;

        // Day 57/60, can't complete 5 logins
        if (daysMissed > SEASON_DAYS - 5) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonal += 110;
        }

        // Day 32/60, can't complete 30 logins
        if (daysMissed > SEASON_DAYS - 30) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonal += 220;
        }

        // Day 52/60, can't complete 10 logins
        if (purchaseDay > SEASON_DAYS - 9) {
            // Paid loses 200 seasonal
            paidLateStartPenaltySeasonal += 200;
        }

        // Day 42/60, can't complete 20 logins
        if (purchaseDay > SEASON_DAYS - 19) {
            // Paid loses 240 seasonal
            paidLateStartPenaltySeasonal += 240;
        }

        // Day 32/60, can't complete 30 logins
        if (purchaseDay > SEASON_DAYS - 29) {
            // Paid loses 300 seasonal
            paidLateStartPenaltySeasonal += 300;
        }

        // Day 42/60, can't complete 20 dailies
        if (purchaseDay > SEASON_DAYS - 19) {
            paidLateStartPenaltySeasonal += 500;
        }
    }

    $: TOTAL_FREE_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissed);
    $: TOTAL_PAID_DAILIES =
        FREE_DAILY_POINTS * (SEASON_DAYS - daysMissed) +
        PAID_DAILY_POINTS * (SEASON_DAYS - daysMissed + 1 - purchaseDay);
    $: TOTAL_FREE_WEEKLIES =
        FREE_WEEKLY_POINTS * SEASON_WEEKS - freeLateStartPenaltyWeekly;
    $: TOTAL_PAID_WEEKLIES =
        (FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS) * SEASON_WEEKS -
        paidLateStartPenaltyWeekly;
    $: TOTAL_FREE_SEASONALS =
        FREE_SEASONAL_POINTS - freeLateStartPenaltySeasonal;
    $: TOTAL_PAID_SEASONALS =
        FREE_SEASONAL_POINTS +
        PAID_SEASONAL_POINTS -
        paidLateStartPenaltySeasonal;

    $: TOTAL_FREE_POINTS =
        TOTAL_FREE_DAILIES + TOTAL_FREE_WEEKLIES + TOTAL_FREE_SEASONALS;
    $: TOTAL_PAID_POINTS =
        TOTAL_PAID_DAILIES + TOTAL_PAID_WEEKLIES + TOTAL_PAID_SEASONALS;

    $: datasets = [
        {
            label: "Seasonals",
            data: [
                TOTAL_FREE_SEASONALS,
                TOTAL_PAID_SEASONALS,
                TOTAL_PAID_SEASONALS,
            ],
            backgroundColor: `hsla(210, 90%, 50%, 0.5)`,
        },
        {
            label: "Weeklies",
            data: [
                TOTAL_FREE_WEEKLIES,
                TOTAL_PAID_WEEKLIES,
                TOTAL_PAID_WEEKLIES,
            ],
            backgroundColor: `hsla(120, 60%, 50%, 0.5)`,
        },
        {
            label: "Dailies",
            data: [TOTAL_FREE_DAILIES, TOTAL_PAID_DAILIES, TOTAL_PAID_DAILIES],
            backgroundColor: `hsla(320, 60%, 50%, 0.5)`,
        },
    ];

    $: config = {
        type: "bar",
        data: {
            labels: ["Free", "Advanced (180 orbs)", "Royal (550 orbs)"],
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
                },
            },
            plugins: {
                datalabels: {
                    anchor: "end",
                    align: "top",
                    color: "hsla(0, 0%, 40%, 1)",
                    font: {
                        size: 18,
                    },
                    // https://www.youtube.com/watch?v=mlOlkuuh_E8
                    formatter: (value, context) => {
                        let datasetIndexToShow = 2

                        // If advanced pass dailies are < 0, put the text on top of Weeklies
                        if (TOTAL_PAID_DAILIES < 0) {
                            datasetIndexToShow = 1
                        }

                        // Hide text on all other datasets
                        if (context.datasetIndex === datasetIndexToShow) {
                            if (context.dataIndex === 0) return TOTAL_FREE_POINTS
                            return TOTAL_PAID_POINTS
                        }
                        return null
                    },
                },
            },
        },
        plugins: [ChartDataLabels],
    };

    onMount(async () => {
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });

    $: if (myChart) {
        myChart.data.datasets = datasets;
        myChart.update();
    }

    // TODO: Points from last season
    // TODO: Points remaining after maxing
    // TODO: Level bought
</script>

<div class="box">
    <strong
        >These numbers reflect Season 1, which had an event for increased
        rewards.</strong
    >

    <p>
        if you're gonna buy levels it's better to do them early on before
        consuming points that are automatically spent. you can buy levels, but
        you can't buy points, so once they are automatically used to rank up,
        you cannot get those points back.
    </p>

    <div>
        <input
            type="range"
            name=""
            id=""
            min="0"
            max={SEASON_DAYS - 1}
            bind:value={daysMissed}
            style="width: 300px"
        />
        Days missed: {daysMissed}
    </div>

    <div>
        <input
            type="range"
            name=""
            id=""
            min="1"
            max={SEASON_DAYS}
            bind:value={purchaseDay}
            style="width: 300px"
        />
        Purchase day: {purchaseDay}
    </div>

    <canvas bind:this={chartElement} />

    <strong
        >THESE VALUES ASSUME THAT "DAYS MISSED" ARE MISSED *AFTER* PURCHASING
        THE PASS.</strong
    >

    <p>
        A season lasts {SEASON_DAYS} days, or {SEASON_WEEKS} weeks (the first day
        is weekly reset, so it's {SEASON_WEEKS} instead of {SEASON_WEEKS - 1}).
    </p>
    <p>
        Weekly quests can be completed at any time to get past weeks' season
        points. You cannot get the "normal rewards" from past weeks (typically
        Base Clay), but you can get the season points.
    </p>

    <h3>Free Pass</h3>
    <!-- <ul>
        <li>{FREE_DAILY_POINTS} points daily</li>
        <li>{FREE_WEEKLY_POINTS} points weekly</li>
        <li>{FREE_SEASONAL_POINTS} points seasonally</li>
    </ul> -->
    <p>Maximum points: {TOTAL_FREE_POINTS}</p>

    <h3>Advanced & Royal Pass</h3>
    <!-- <ul>
        <li>{FREE_DAILY_POINTS + PAID_DAILY_POINTS} points daily</li>
        <li>{FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS} points weekly</li>
        <li>{FREE_SEASONAL_POINTS + PAID_SEASONAL_POINTS} points seasonally</li>
    </ul> -->
    <p>Maximum points: {TOTAL_PAID_POINTS}</p>

    <p>
        depending on how many points you want left over (in other words how many
        levels you want to buy), there are 2 options safe route: buy the levels
        as soon as you get the pass to guarantee maximum season points are
        preserved (not burned on leveling up) hmm i changed my mind route: buy
        the levels after hitting 70 for the same reason as above i suspect that
        might be why they stop auto leveling up
    </p>

    <p>
        check the rewards here: <a href="https://blue-protocol.com/news/85"
            >season 1</a
        >
    </p>
</div>

<style lang="scss">
    .box {
        margin: 4rem 0;
    }
</style>
