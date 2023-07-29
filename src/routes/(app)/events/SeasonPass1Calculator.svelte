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
    import InputNumber from "$lib/components/InputNumber.svelte";
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
    Chart.defaults.font.size = 18;

    const SEASON_WEEKS = 9;
    const SEASON_DAYS = 60; // reset on the day it was launched so we got 1 weekly reset for free
    const FREE_DAILY_POINTS = 30;
    const PAID_DAILY_POINTS = 30;
    const FREE_WEEKLY_POINTS = 400;
    const PAID_WEEKLY_POINTS = 300;
    const FREE_SEASONAL_POINTS = 2010;
    const PAID_SEASONAL_POINTS = 1790;

    let daysMissedBeforePurchase = 0;
    let daysMissedAfterPurchase = 0;
    $: daysMissedTotal = daysMissedBeforePurchase + daysMissedAfterPurchase
    let purchaseDay = 1;

    $: if (daysMissedBeforePurchase >= purchaseDay) daysMissedBeforePurchase = purchaseDay - 1

    let freeLateStartPenaltyWeekly = 0;
    let freeLateStartPenaltySeasonal = 0;
    let paidLateStartPenaltyWeekly = 0;
    let paidLateStartPenaltySeasonal = 0;

    $: {
        freeLateStartPenaltyWeekly = 0;
        paidLateStartPenaltyWeekly = 0;

        // Day 59/60, can't complete 3 logins
        if (daysMissedTotal > SEASON_DAYS - 3) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeekly += 200 * SEASON_WEEKS;
        }

        // Can always clear complete 3 weeklies

        // Day 59/60, can't complete 3 logins to complete 5 weeklies
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 2) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += 100 * SEASON_WEEKS;
        }

        // Day 57/60, can't complete 5 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 4) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += 100 * SEASON_WEEKS;
        }
    }

    $: {
        freeLateStartPenaltySeasonal = 0;
        paidLateStartPenaltySeasonal = 0;

        // Day 57/60, can't complete 5 logins
        if (daysMissedTotal > SEASON_DAYS - 5) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonal += 110;
        }

        // Day 32/60, can't complete 30 logins
        if (daysMissedTotal > SEASON_DAYS - 30) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonal += 220;
        }

        // Day 52/60, can't complete 10 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 9) {
            // Paid loses 200 seasonal
            paidLateStartPenaltySeasonal += 200;
        }

        // Day 42/60, can't complete 20 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 19) {
            // Paid loses 240 seasonal
            paidLateStartPenaltySeasonal += 240;
        }

        // Day 32/60, can't complete 30 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 29) {
            // Paid loses 300 seasonal
            paidLateStartPenaltySeasonal += 300;
        }

        // Day 42/60, can't complete 20 dailies
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 19) {
            paidLateStartPenaltySeasonal += 500;
        }
    }

    $: TOTAL_FREE_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissedBeforePurchase);
    $: TOTAL_PAID_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissedAfterPurchase - daysMissedBeforePurchase - purchaseDay + 1) + PAID_DAILY_POINTS * (SEASON_DAYS - daysMissedAfterPurchase);

    $: TOTAL_FREE_WEEKLIES = FREE_WEEKLY_POINTS * SEASON_WEEKS - freeLateStartPenaltyWeekly;
    $: TOTAL_PAID_WEEKLIES = PAID_WEEKLY_POINTS * SEASON_WEEKS - paidLateStartPenaltyWeekly;

    $: TOTAL_FREE_SEASONALS = FREE_SEASONAL_POINTS - freeLateStartPenaltySeasonal;
    $: TOTAL_PAID_SEASONALS = PAID_SEASONAL_POINTS - paidLateStartPenaltySeasonal;

    $: TOTAL_FREE_POINTS = TOTAL_FREE_DAILIES + TOTAL_FREE_WEEKLIES + TOTAL_FREE_SEASONALS;
    $: TOTAL_PAID_POINTS = TOTAL_FREE_WEEKLIES + TOTAL_FREE_SEASONALS + TOTAL_PAID_DAILIES + TOTAL_PAID_WEEKLIES + TOTAL_PAID_SEASONALS;

    $: datasets = [
        {
            label: "Seasonals",
            data: [
                TOTAL_FREE_SEASONALS,
                TOTAL_FREE_SEASONALS + TOTAL_PAID_SEASONALS,
                TOTAL_FREE_SEASONALS + TOTAL_PAID_SEASONALS,
            ],
            backgroundColor: `hsla(210, 90%, 50%, 0.5)`,
        },
        {
            label: "Weeklies",
            data: [
                TOTAL_FREE_WEEKLIES,
                TOTAL_FREE_WEEKLIES + TOTAL_PAID_WEEKLIES,
                TOTAL_FREE_WEEKLIES + TOTAL_PAID_WEEKLIES,
            ],
            backgroundColor: `hsla(120, 60%, 50%, 0.5)`,
        },
        {
            label: "Dailies",
            data: [
                TOTAL_FREE_DAILIES, 
                TOTAL_PAID_DAILIES, 
                TOTAL_PAID_DAILIES
            ],
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
                    ticks: {
                        display: false
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 18
                        }
                    }
                },
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

<div class="box flex">
    <div>
        <div>
            <span class="component-label">Step 1</span>
            <div>Select the day that you purchased the Advanced or Royal Pass</div>
            <div class="flex g-50" style="align-items: center; margin: 1rem 0;">
                <InputNumber
                    description="Day purchased"
                    prefix="Purchase Day"
                    suffix=" / {SEASON_DAYS}"
                    textAlign="right"
                    id="purchaseDay"
                    bind:value={purchaseDay}
                    min="0"
                    max={SEASON_DAYS}
                    reverse
                    style="max-width: 250px"
                />
                <input
                    type="range"
                    min="1"
                    max={SEASON_DAYS}
                    bind:value={purchaseDay}
                />
            </div>
        </div>
        <div>
            <span class="component-label">Step 2</span>
            <div>Select the number of days that you missed <strong>before</strong> purchasing the pass</div>
            <div class="flex g-50" style="align-items: center; margin: 1rem 0;">
                <InputNumber
                    description="Days missed before purchase"
                    prefix="Days Missed"
                    suffix=" / {purchaseDay - 1}"
                    textAlign="right"
                    id="daysMissedBeforePurchase"
                    bind:value={daysMissedBeforePurchase}
                    min="0"
                    max={purchaseDay - 1}
                    reverse
                    style="max-width: 250px"
                />
                <input
                    type="range"
                    min="0"
                    max={purchaseDay - 1}
                    bind:value={daysMissedBeforePurchase}
                />
            </div>
        </div>
        <div>
            <span class="component-label">Step 3</span>
            <div>Select the number of days that you missed <strong>after</strong> purchasing the pass</div>
            <div class="flex g-50" style="align-items: center; margin: 1rem 0;">
                <InputNumber
                    description="Days missed after purchase"
                    prefix="Days Missed"
                    suffix=" / {SEASON_DAYS - purchaseDay + 1}"
                    textAlign="right"
                    id="daysMissedAfterPurchase"
                    bind:value={daysMissedAfterPurchase}
                    min="0"
                    max={SEASON_DAYS - purchaseDay + 1}
                    reverse
                    disabled={purchaseDay === SEASON_DAYS + 1}
                    style="max-width: 250px"
                />
                <input
                    type="range"
                    min="0"
                    max={SEASON_DAYS - purchaseDay + 1}
                    bind:value={daysMissedAfterPurchase}
                />
            </div>
        </div>
    </div>


    <div class="chart-wrapper grid">
        <h3 style="margin: 0">Maximum Season Points</h3>
        <canvas bind:this={chartElement} />
    </div>
</div>

<div class="box" style="display: none">
    <strong
        >These numbers reflect Season 1, which had an event for increased
        season points.</strong
    >

    <p>
        if you're gonna buy levels it's better to do them early on before
        consuming points that are automatically spent. you can buy levels, but
        you can't buy points, so once they are automatically used to rank up,
        you cannot get those points back.
    </p>

    {daysMissedTotal}
    

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
        check the rewards here: <a href="https://blue-protocol.com/news/85"
            >season 1</a
        >
    </p>
</div>

<style lang="scss">
    .box {
        margin: 4rem 0;
    }

    .chart-wrapper {
        width: 100%;
        margin: 1rem;
        height: auto;
        max-height: 600px;
        justify-content: center;
        min-width: 0;

        canvas {
            max-width: 100%;
        }
    }
</style>
