<script>
    import { onMount } from "svelte";
    import {
        Chart,
        CategoryScale,
        LinearScale,
        PointElement,
        LineController,
        LineElement,
        Tooltip,
        Legend,
    } from "chart.js";

    // Limits are +50% damage (-12.5 resist) and -40% damage (50 resist)
    // I wonder if damage can be reduced down to -50%, since the max gain is +50%, but there was just lack of testing?

    let chartElement; // reference to canvas element
    let myChart; // the chart instance

    const coords = (coeff) => {
        const min = -12.5;
        const max = 50;
        const step = 0.5;
        return Array.from(
            { length: (max - min) / step + 1 },
            (_, index) => min + index * step,
        ).map((res) => {
            return [res, (res * coeff * -100).toFixed(1)];
        });
    };

    const pointRadii = (coeff) => {
        return coords(coeff).map(([x, y]) => {
            const clearsX =
                coeff === 0.04
                    ? [-12.5, -5, 0, 25, 50].includes(x)
                    : [-12.5, 25, 50].includes(x);
            const clearsY = [-40.0].some((val) => val == y);
            return clearsX || clearsY ? 6 : 0;
        });
    };

    const config = {
        type: "line",
        data: {
            labels: coords(0.04).map(([x, y]) => x),
            datasets: [
                {
                    label: "Damage (non-resistant)",
                    data: coords(0.04)
                        .map(([x, y]) => y)
                        .filter((val) => val >= -40),
                    backgroundColor: coords(0.04).map(([x, y]) =>
                        [-40.0].some((val) => val == y)
                            ? "hsla(197, 100%, 40%, 1)" // gray : hsla(197, 100%, 40%, 1)
                            : `hsla(197, 100%, 40%, 1)`,
                    ),
                    hoverBackgroundColor: `hsla(197, 100%, 40%, 1)`, // 0.5 or 1 alpha
                    borderColor: coords(0.04).map(([x, y]) =>
                        [-40.0].some((val) => val == y)
                            ? "hsla(197, 100%, 40%, 1)" // gray : hsla(197, 100%, 40%, 1)
                            : `hsla(197, 100%, 40%, 1)`,
                    ),
                    hoverBorderColor: `hsla(197, 100%, 40%, 1)`,
                    pointRadius: pointRadii(0.04),
                    hoverRadius: 12,
                    hitRadius: 12,
                    segment: {
                        borderColor: (ctx) =>
                            ctx.p0.parsed.x >= 0
                                ? "hsla(197, 100%, 40%, 1)" // gray : hsla(197, 100%, 40%, 1)
                                : "hsla(197, 100%, 40%, 1)",
                        borderDash: (ctx) =>
                            ctx.p0.parsed.x >= 0 ? [7, 7] : undefined, // 6 and 7 are good sizes tbh
                    },
                },
                {
                    label: "Damage (resistant)",
                    data: coords(0.008)
                        .map(([x, y]) => y)
                        .filter((val) => val >= -40),
                    backgroundColor: `hsla(325, 93%, 42%, 1)`,
                    hoverBackgroundColor: `hsla(325, 93%, 42%, 1)`,
                    borderColor: `hsla(325, 93%, 42%, 1)`,
                    hoverBorderColor: `hsla(325, 93%, 42%, 1)`,
                    pointRadius: pointRadii(0.008),
                    hoverRadius: 12,
                    hitRadius: 12,
                },
                {
                    hidden: true,
                    label: "Elemental Charge (non-resistant)",
                    data: coords(0.04)
                        .map(([x, y]) => y / 2)
                        .filter((val) => val >= -20),
                    backgroundColor: coords(0.04).map(
                        ([x, y]) =>
                            [-40.0].some((val) => val == y)
                                ? "limegreen"
                                : `limegreen`, // gray : limegreen
                    ),
                    hoverBackgroundColor: `limegreen`, // 0.5 or 1 alpha
                    borderColor: coords(0.04).map(
                        ([x, y]) =>
                            [-40.0].some((val) => val == y)
                                ? "limegreen"
                                : `limegreen`, // gray : limegreen
                    ),
                    hoverBorderColor: `limegreen`,
                    pointRadius: pointRadii(0.04),
                    hoverRadius: 12,
                    hitRadius: 12,
                    segment: {
                        borderColor: (ctx) =>
                            ctx.p0.parsed.x >= 0 ? "limegreen" : "limegreen", // gray : limegreen
                        borderDash: (ctx) =>
                            ctx.p0.parsed.x >= 0 ? [7, 7] : undefined, // 6 and 7 are good sizes tbh
                    },
                },

                {
                    hidden: true,
                    label: "Elemental Charge (resistant)",
                    data: coords(0.008)
                        .map(([x, y]) => y / 2)
                        .filter((val) => val >= -40),
                    backgroundColor: `goldenrod`,
                    hoverBackgroundColor: `goldenrod`,
                    borderColor: `goldenrod`,
                    hoverBorderColor: `goldenrod`,
                    pointRadius: pointRadii(0.008),
                    hoverRadius: 12,
                    hitRadius: 12,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        console.log(ctx);
                        return `${value}%`;
                    },
                },
                legend: {
                    display: true,
                    align: "start",
                    title: {
                        display: true,
                        text: "Elemental Resistance effects on damage and elemental charge",
                        position: "start",
                    },
                    position: "chartArea",
                },
                tooltip: {
                    callbacks: {
                        beforeTitle: (ctxs) => {
                            // if (ctxs.some((ctx) => ctx.parsed.x === 0 && ctx.parsed.y === 0)) return "Enemy is neutral to this element"

                            // Only (0,0) overlaps so other points will only have 1 tooltip obj so index 0 is fine
                            const ctx = ctxs[0];
                            const { x, y } = ctx.parsed;
                            if (
                                ctx.dataset.label === "Damage (non-resistant)"
                            ) {
                                if (x === -12.5)
                                    return "Max damage increase against non-resistant enemy";
                                if (x === -5) return "Enemy's base resistance";
                                if (x === 10)
                                    return "Max damage decrease against non-resistant enemy";
                            } else if (
                                ctx.dataset.label === "Damage (resistant)"
                            ) {
                                if (x === -12.5)
                                    return "Max damage increase against resistant enemy";
                                if (x === 25) return "Enemy's base resistance";
                                if (x === 50)
                                    return "Elemental-type enemy's base resistance";
                            } else if (
                                ctx.dataset.label ===
                                "Elemental Charge (non-resistant)"
                            ) {
                                if (x === -12.5)
                                    return "Max accumulation increase against non-resistant enemy";
                                if (x === -5) return "Enemy's base resistance";
                                if (x === 10)
                                    return "Max accumulation decrease against non-resistant enemy";
                            } else if (
                                ctx.dataset.label ===
                                "Elemental Charge (resistant)"
                            ) {
                                if (x === -12.5)
                                    return "Max accumulation increase against resistant enemy";
                                if (x === 25) return "Enemy's base resistance";
                                if (x === 50)
                                    return "Elemental-type enemy's base resistance";
                            }
                            return undefined;
                        },
                        title: (ctxs) =>
                            ctxs.map((ctx) => `${ctx.parsed.x} resistance`),
                        label: (ctx) => {
                            const { y } = ctx.parsed;
                            if (ctx.dataset.label.includes("Elemental Charge"))
                                return y >= 0
                                    ? `+${y}% elemental charge accumulation`
                                    : `${y}% elemental charge accumulation`;
                            return y >= 0 ? `+${y}% damage` : `${y}% damage`;
                        },
                    },
                },
            },
            scales: {
                x: {
                    type: "linear",
                    max: 50,
                    min: -50,
                    ticks: {
                        stepSize: 25,
                    },
                    offset: true,
                    title: {
                        display: true,
                        text: "Elemental Resistance",
                    },
                    grid: {
                        // color: "rgba(70, 70, 70, 0.1)"
                    },
                },
                y: {
                    max: 50,
                    min: -50,
                    ticks: {
                        stepSize: 25,
                        callback: (value) =>
                            value >= 0 ? `+${value}%` : `${value}%`,
                    },
                    offset: true,
                    title: {
                        display: true,
                        text: "Effect",
                    },
                    grid: {
                        // color: "rgba(70, 70, 70, 0.1)"
                    },
                },
            },
        },
    };

    onMount(() => {
        // Register components to use them
        Chart.register(
            CategoryScale,
            LinearScale,
            LineController,
            LineElement,
            PointElement,
            Tooltip,
            Legend,
        );
        Chart.defaults.color = "gray";
        myChart = new Chart(chartElement, config);
        myChart.options.animation = false;
    });
</script>

<div class="relative">
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
