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
    import seasons from "./seasons.json";
    import StickyNote from "$lib/components/StickyNote.svelte";

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

    let selectedSeason = 1;
    $: season = seasons.find((season) => season.season === selectedSeason);

    $: ({
        SEASON_WEEKS,
        SEASON_DAYS,
        FREE_DAILY_POINTS,
        PAID_DAILY_POINTS,
        FREE_WEEKLY_POINTS,
        PAID_WEEKLY_POINTS,
        FREE_SEASONAL_POINTS,
        PAID_SEASONAL_POINTS,
        FREE_POINTS_3_LOGINS,
        FREE_POINTS_5_LOGINS,
        FREE_POINTS_30_LOGINS,
        PAID_POINTS_5_LOGINS,
        PAID_POINTS_10_LOGINS,
        PAID_POINTS_20_LOGINS,
        PAID_POINTS_30_LOGINS,
        PAID_POINTS_5_WEEKLIES,
        PAID_POINTS_20_DAILIES,
    } = season);

    let daysMissedFree = 0;
    let daysMissedBeforePurchase = 0;
    let daysMissedAfterPurchase = 0;
    let purchaseDay = 1;

    $: if (daysMissedBeforePurchase >= purchaseDay)
        daysMissedBeforePurchase = purchaseDay - 1;

    let freeLateStartPenaltyWeekly = 0;
    let freeLateStartPenaltySeasonal = 0;
    let paidLateStartPenaltyWeekly = 0;
    let paidLateStartPenaltySeasonal = 0;
    // for use in paid pass calculations to keep sliders separate
    let freeLateStartPenaltyWeeklyForPaid = 0;
    let freeLateStartPenaltySeasonalForPaid = 0;

    // Free Weeklies
    $: {
        freeLateStartPenaltyWeekly = 0;

        // Day 59/60, can't complete 3 logins
        if (daysMissedFree > SEASON_DAYS - 3) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeekly += FREE_POINTS_3_LOGINS * SEASON_WEEKS;
        }
    }

    // Free Weekly points for Paid pass
    $: {
        freeLateStartPenaltyWeeklyForPaid = 0;

        // Day 59/60, can't complete 3 logins
        if (
            daysMissedBeforePurchase + daysMissedAfterPurchase >
            SEASON_DAYS - 3
        ) {
            // Free loses 200 * SEASON_WEEKS
            freeLateStartPenaltyWeeklyForPaid +=
                FREE_POINTS_3_LOGINS * SEASON_WEEKS;
        }
    }

    // Paid Weeklies
    $: {
        paidLateStartPenaltyWeekly = 0;

        // Can always clear complete 3 weeklies
        // Day 59/60, can't complete 3 logins to complete 5 weeklies
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 2) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += PAID_POINTS_5_WEEKLIES * SEASON_WEEKS;
        }

        // Day 57/60, can't complete 5 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 4) {
            // Paid loses 100 * SEASON_WEEKS
            paidLateStartPenaltyWeekly += PAID_POINTS_5_LOGINS * SEASON_WEEKS;
        }
    }

    // Free Seasonals
    $: {
        freeLateStartPenaltySeasonal = 0;

        // Day 57/60, can't complete 5 logins
        if (daysMissedFree > SEASON_DAYS - 5) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonal += FREE_POINTS_5_LOGINS;
        }

        // Day 32/60, can't complete 30 logins
        if (daysMissedFree > SEASON_DAYS - 30) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonal += FREE_POINTS_30_LOGINS;
        }
    }

    // Free Seasonal points for Paid pass
    $: {
        freeLateStartPenaltySeasonalForPaid = 0;

        // Day 57/60, can't complete 5 logins
        if (
            daysMissedBeforePurchase + daysMissedAfterPurchase >
            SEASON_DAYS - 5
        ) {
            // Free loses 110 seasonal
            freeLateStartPenaltySeasonalForPaid += FREE_POINTS_5_LOGINS;
        }

        // Day 32/60, can't complete 30 logins
        if (
            daysMissedBeforePurchase + daysMissedAfterPurchase >
            SEASON_DAYS - 30
        ) {
            // Free loses 220 seasonal
            freeLateStartPenaltySeasonalForPaid += FREE_POINTS_30_LOGINS;
        }
    }

    // Paid Seasonals
    $: {
        paidLateStartPenaltySeasonal = 0;

        // Day 52/60, can't complete 10 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 9) {
            // Paid loses 200 seasonal
            paidLateStartPenaltySeasonal += PAID_POINTS_10_LOGINS;
        }

        // Day 42/60, can't complete 20 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 19) {
            // Paid loses 240 seasonal
            paidLateStartPenaltySeasonal += PAID_POINTS_20_LOGINS;
        }

        // Day 32/60, can't complete 30 logins
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 29) {
            // Paid loses 300 seasonal
            paidLateStartPenaltySeasonal += PAID_POINTS_30_LOGINS;
        }

        // Day 42/60, can't complete 20 dailies
        if (purchaseDay + daysMissedAfterPurchase > SEASON_DAYS - 19) {
            paidLateStartPenaltySeasonal += PAID_POINTS_20_DAILIES;
        }
    }

    $: TOTAL_FREE_DAILIES = FREE_DAILY_POINTS * (SEASON_DAYS - daysMissedFree);
    $: TOTAL_PAID_DAILIES =
        FREE_DAILY_POINTS *
            (SEASON_DAYS -
                daysMissedAfterPurchase -
                daysMissedBeforePurchase -
                purchaseDay +
                1) +
        PAID_DAILY_POINTS * (SEASON_DAYS - daysMissedAfterPurchase);

    $: TOTAL_FREE_WEEKLIES =
        FREE_WEEKLY_POINTS * SEASON_WEEKS - freeLateStartPenaltyWeekly;
    $: TOTAL_PAID_WEEKLIES =
        (FREE_WEEKLY_POINTS + PAID_WEEKLY_POINTS) * SEASON_WEEKS -
        paidLateStartPenaltyWeekly -
        freeLateStartPenaltyWeeklyForPaid;

    $: TOTAL_FREE_SEASONALS =
        FREE_SEASONAL_POINTS - freeLateStartPenaltySeasonal;
    $: TOTAL_PAID_SEASONALS =
        FREE_SEASONAL_POINTS +
        PAID_SEASONAL_POINTS -
        paidLateStartPenaltySeasonal -
        freeLateStartPenaltySeasonalForPaid;

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
                    formatter: (value, context) => {
                        let datasetIndexToShow = 2;

                        // If advanced pass dailies are < 0, put the text on top of Weeklies
                        if (TOTAL_PAID_DAILIES < 0) {
                            datasetIndexToShow = 1;
                        }

                        // Hide text on all other datasets
                        if (context.datasetIndex === datasetIndexToShow) {
                            if (context.dataIndex === 0)
                                return TOTAL_FREE_POINTS;
                            return TOTAL_PAID_POINTS;
                        }
                        return null;
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
    // TODO: Level bought
</script>

{#if selectedSeason === 1}
    <div style="margin: auto">
        <StickyNote type="note">
            Season 1 had an event for increased season points.
        </StickyNote>
    </div>
{/if}
<div class="calculator-wrapper flex">
    <div class="left-col grid">
        <div class="flex g-50">
            <select
                class="box hover"
                bind:value={selectedSeason}
                style="flex: 1"
            >
                {#each seasons as season}
                    <option value={season.season}>Season {season.season}</option
                    >
                {/each}
            </select>
            <a
                class="box hover"
                href={season.rewards_link}
                target="_blank"
                rel="noopener noreferrer nofollow">View Rewards</a
            >
        </div>

        <div class="box">
            <h2>Free Pass</h2>
            <p>Enter the number of days that you missed</p>
            <div class="flex g-50">
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

        <div class="box">
            <h2>Paid Passes</h2>
            <span class="component-label">Step 1</span>
            <p>Enter the day that you purchased the Advanced or Royal Pass</p>
            <div class="flex g-50">
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
            <hr />
            <span class="component-label">Step 2</span>
            <p>
                Enter the number of days that you missed <strong>before</strong>
                purchasing the pass
            </p>
            <div class="flex g-50">
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
            <hr />
            <span class="component-label">Step 3</span>
            <p>
                Enter the number of days that you missed <strong>after</strong> purchasing
                the pass (inclusive)
            </p>
            <div class="flex g-50">
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
                    style="flex: 1; max-width: 250px; display: inline-flex"
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

    <div class="right-col grid box">
        <h2>Maximum Season Points</h2>
        <canvas bind:this={chartElement} />
        <hr />
        <table class="bo">
            <thead>
                <tr>
                    <th />
                    <th>Leftover Points (Rank 70)</th>
                    <th>Leftover Points (Rank 100)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Advanced Pass</th>
                    <td
                        ><strong>{Math.max(TOTAL_PAID_POINTS - 7000, 0)}</strong
                        ></td
                    >
                    <td
                        ><strong
                            >{Math.max(TOTAL_PAID_POINTS - 10000, 0)}</strong
                        ></td
                    >
                </tr>
                <tr>
                    <th>Royal Pass</th>
                    <td
                        ><strong
                            >{Math.max(
                                TOTAL_PAID_POINTS - 7000 + 2500,
                                0
                            )}</strong
                        ></td
                    >
                    <td
                        ><strong
                            >{Math.max(
                                TOTAL_PAID_POINTS - 10000 + 2500,
                                0
                            )}</strong
                        ></td
                    >
                </tr>
            </tbody>
        </table>

        <p class="visually-hidden">
            Advanced Pass purchasers will have a maximum of {TOTAL_PAID_POINTS -
                7000} points leftover at Rank 70, and {Math.max(
                TOTAL_PAID_POINTS - 10000,
                0
            )} points leftover at Rank 100.
        </p>

        <p class="visually-hidden">
            Royal Pass purchasers will have a maximum of {TOTAL_PAID_POINTS -
                7000 +
                2500} points leftover at Rank 70, and {Math.max(
                TOTAL_PAID_POINTS - 10000 + 2500,
                0
            )} points leftover at Rank 100.
        </p>
    </div>
</div>

<style lang="scss">
    .calculator-wrapper {
        gap: 1rem;
        flex-wrap: wrap;
        margin: auto;
        margin-top: 1.5rem;
        align-items: start;
    }

    .left-col {
        gap: 1rem;
        align-items: start;
        flex: 1;
        flex-basis: 400px;

        p {
            margin-block: 0 0.5rem;
            font-size: var(--step-0);
            max-inline-size: none;
        }

        hr {
            margin: 1rem 0;
        }

        .component-label:first-of-type {
            margin-top: 0.5rem;
        }

        input[type="range"] {
            flex: 1;
        }
    }

    table {
        text-align: left;

        td,
        th {
            padding: 0.5rem;
        }
    }

    h2 {
        margin: 0;
        font-size: var(--step-4);
    }

    .right-col {
        flex: 1;
        flex-basis: 700px;
        min-width: 0;

        canvas {
            max-width: 100%;
            margin-block: 1rem;
        }
    }
</style>
