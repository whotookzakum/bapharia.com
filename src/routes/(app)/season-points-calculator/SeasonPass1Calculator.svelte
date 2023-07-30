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

    let daysMissedFree = 0;
    let daysMissedBeforePurchase = 0;
    let daysMissedAfterPurchase = 0;
    let purchaseDay = 1;

    $: if (daysMissedBeforePurchase >= purchaseDay) daysMissedBeforePurchase = purchaseDay - 1

    let freeLateStartPenaltyWeekly = 0;
    let freeLateStartPenaltySeasonal = 0;
    let paidLateStartPenaltyWeekly = 0;
    let paidLateStartPenaltySeasonal = 0;
    // for use in paid pass calculations to keep sliders separate
    let freeLateStartPenaltyWeeklyForPaid = 0; 
    let freeLateStartPenaltySeasonalForPaid = 0; 


    $: {
        freeLateStartPenaltyWeekly = 0;

        // Day 59/60, can't complete 3 logins
        if (daysMissedFree > SEASON_DAYS - 3) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeekly += 200 * SEASON_WEEKS;
        }
    }

    $: {
        freeLateStartPenaltyWeeklyForPaid = 0;

        // Day 59/60, can't complete 3 logins
        if (daysMissedBeforePurchase + daysMissedAfterPurchase > SEASON_DAYS - 3) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeeklyForPaid += 200 * SEASON_WEEKS;
        }
    }

    $: {
        paidLateStartPenaltyWeekly = 0;

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

        // Day 57/60, can't complete 5 logins
        if (daysMissedFree > SEASON_DAYS - 5) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonal += 110;
        }

        // Day 32/60, can't complete 30 logins
        if (daysMissedFree > SEASON_DAYS - 30) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonal += 220;
        }
    }

    $: {
        freeLateStartPenaltySeasonalForPaid = 0;

        // Day 57/60, can't complete 5 logins
        if (daysMissedBeforePurchase + daysMissedAfterPurchase > SEASON_DAYS - 5) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonalForPaid += 110;
        }

        // Day 32/60, can't complete 30 logins
        if (daysMissedBeforePurchase + daysMissedAfterPurchase > SEASON_DAYS - 30) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonalForPaid += 220;
        }
    }

    $: {
        paidLateStartPenaltySeasonal = 0;

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

    $: TOTAL_FREE_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissedFree);
    $: TOTAL_PAID_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissedAfterPurchase - daysMissedBeforePurchase - purchaseDay + 1) + PAID_DAILY_POINTS * (SEASON_DAYS - daysMissedAfterPurchase);

    $: TOTAL_FREE_WEEKLIES = FREE_WEEKLY_POINTS * SEASON_WEEKS - freeLateStartPenaltyWeekly;
    $: TOTAL_PAID_WEEKLIES = (FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS) * SEASON_WEEKS - paidLateStartPenaltyWeekly - freeLateStartPenaltyWeeklyForPaid;

    $: TOTAL_FREE_SEASONALS = FREE_SEASONAL_POINTS - freeLateStartPenaltySeasonal;
    $: TOTAL_PAID_SEASONALS = FREE_SEASONAL_POINTS + PAID_SEASONAL_POINTS - paidLateStartPenaltySeasonal - freeLateStartPenaltySeasonalForPaid;

    $: TOTAL_FREE_POINTS = TOTAL_FREE_DAILIES + TOTAL_FREE_WEEKLIES + TOTAL_FREE_SEASONALS;
    $: TOTAL_PAID_POINTS = TOTAL_PAID_DAILIES + TOTAL_PAID_WEEKLIES + TOTAL_PAID_SEASONALS;

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

<div class="pass-sim-wrapper box flex">
    <div class="settings-col grid g-50">
        <div>
            <h3>Free Pass</h3>
            <p>Enter the number of days that you missed</p>
            <div class="inputs-row flex g-50">
                <InputNumber
                    description="Days missed"
                    prefix="Days Missed"
                    suffix=" / {SEASON_DAYS}"
                    textAlign="right"
                    id="purchaseDay"
                    bind:value={daysMissedFree}
                    min="0"
                    max={SEASON_DAYS}
                    reverse
                    style="flex: 1; max-width: 250px"
                />
                <input
                    type="range"
                    min="0"
                    max={SEASON_DAYS}
                    bind:value={daysMissedFree}
                />
            </div>
        </div>
        <hr>
        <div>
            <h3>Paid Passes</h3>
            <span class="component-label">Step 1</span>
            <p>Enter the day that you purchased the Advanced or Royal Pass</p>
            <div class="inputs-row flex g-50">
                <InputNumber
                    description="Day purchased"
                    prefix="Purchase Day"
                    suffix=" / {SEASON_DAYS}"
                    textAlign="right"
                    id="purchaseDay"
                    bind:value={purchaseDay}
                    min="1"
                    max={SEASON_DAYS}
                    reverse
                    style="flex: 1; max-width: 250px"
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
            <p>Enter the number of days that you missed <strong>before</strong> purchasing the pass</p>
            <div class="inputs-row flex g-50">
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
                    style="flex: 1; max-width: 250px"
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
            <p>Enter the number of days that you missed <strong>after</strong> purchasing the pass (inclusive)</p>
            <div class="inputs-row flex g-50">
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
                    style="flex: 1; max-width: 250px"
                />
                <input
                    type="range"
                    min="0"
                    max={SEASON_DAYS - purchaseDay + 1}
                    bind:value={daysMissedAfterPurchase}
                />
            </div>
        </div>
        <small>In this context, missing a day means that you did not login that day. Thus, Season Points from daily quests are deducted, as well as points from "Login X Days" weekly and seasonal quests.</small>
    </div>
    <div class="chart-wrapper grid">
        <h3>Maximum Season Points</h3>
        <canvas bind:this={chartElement} />
    </div>
</div>

<div class="box">
    <p>The <b>Free Pass</b> maxes at Rank 60. The Season Points Store has a minimum requirement of Rank 70, so Free Pass users cannot spend leftover points.</p>

    <p>With the <b>Advanced Pass</b>, you will have a maximum of <strong>{TOTAL_PAID_POINTS - 7000}</strong> points leftover at <b>Rank 70</b>, and <strong>{Math.max(TOTAL_PAID_POINTS - 10000, 0)}</strong> points leftover at <b>Rank 100</b>.</p>

    <p>With the <b>Royal Pass</b>, you will have a maximum of <strong>{TOTAL_PAID_POINTS - 7000 + 2500}</strong> points leftover at <b>Rank 70</b>, and <strong>{Math.max(TOTAL_PAID_POINTS - 10000 + 2500, 0)}</strong> points leftover at <b>Rank 100</b>.</p>

    <p>The Royal Pass grants 25 Ranks when purchased, effectively saving you from spending 2500 Season Points to Rank Up.</p>

    <p>If you don't have enough points leftover, you may consider using Rose Orbs to buy ranks. For every 30 Rose Orbs you spend to rank up, you save 100 Season Points.</p>
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
    .pass-sim-wrapper {
        align-items: start; 
        justify-content: space-between; 
        gap: 1rem; 
        flex-wrap: wrap;
        margin: 4rem 0;
    }

    b {
        font-weight: 800;
    }

    .settings-col {
        flex: 1; 
        flex-basis: 400px;

        .inputs-row {
            align-items: center; 
            margin: 0.5rem 0;
        }

        input[type="range"] {
            flex: 1;
        }

        p {
            margin: 0;
            font-size: var(--step-0);
        }
    }

    small {
        line-height: 1.7;       
    }

    h3 {
        margin: 0;
    }

    .component-label {
        margin-top: 1rem;
    }

    .chart-wrapper {
        flex: 1;
        flex-basis: 900px;
        justify-content: center;
        min-width: 0;

        canvas {
            max-width: 100%;
        }
    }
</style>
