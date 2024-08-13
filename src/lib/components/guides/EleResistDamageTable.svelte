<script>
    import RangeSlider from "svelte-range-slider-pips";

    function getDamage(baseWepRes, baseSkillRes, resMod, showAsTotalPercent) {
        let wepCoefficient, skillCoefficient, wepEleResMax, skillEleResMax;
        resMod = resMod[0];

        if (baseWepRes > 0) {
            wepCoefficient = 0.008;
            wepEleResMax = 50;
        } else {
            wepCoefficient = 0.04;
            wepEleResMax = 10;
        }

        if (baseSkillRes > 0) {
            skillCoefficient = 0.008;
            skillEleResMax = 50;
        } else {
            skillCoefficient = 0.04;
            skillEleResMax = 10;
        }

        const wepRes =
            baseWepRes + resMod < -12.5
                ? -12.5
                : baseWepRes + resMod > wepEleResMax // 10 or 50
                  ? wepEleResMax
                  : baseWepRes + resMod;

        const skillRes =
            baseSkillRes + resMod < -12.5
                ? -12.5
                : baseSkillRes + resMod > skillEleResMax // 10 or 50
                  ? skillEleResMax
                  : baseSkillRes + resMod;

        const wepDmg = baseWepRes !== null ? 0.3 * wepRes * wepCoefficient : 0;
        const skillDmg =
            baseSkillRes !== null ? 0.7 * skillRes * skillCoefficient : 0;

        const totalDmgPercent = Math.round((1 - wepDmg - skillDmg) * 100);
        if (showAsTotalPercent === undefined) return totalDmgPercent;
        return showAsTotalPercent
            ? totalDmgPercent + "%"
            : totalDmgPercent >= 100
              ? `+${totalDmgPercent - 100}%`
              : `${totalDmgPercent - 100}%`;
    }

    let viewMode = true;
    let resMod = [0];
</script>

<div id="eleDmgTable" class="grid rounded-2xl">
    <div class="settings p-4 gap-8 flex flex-wrap">
        <div class="flex-1 grid gap-2 content-start" style="order: 2 !important">
            <span class="mini-header">Display</span>
            <label>
                <input type="radio" bind:group={viewMode} value={true} /> Total Damage
                Percent (120%)
            </label>
            <label>
                <input type="radio" bind:group={viewMode} value={false} /> Damage
                Change Percent (+20%)
            </label>
        </div>

        <dl class="grid rounded-lg gap-2 flex-1" style="order: 1 !important">
            <div class="mb-[-0.5rem]">
                <span class="mini-header">Modify Resistance</span>
                <button class="mini-header hover-accent1 transition-shrink" on:click={() => resMod[0] = 0}
                    >Reset</button
                >
            </div>

            <RangeSlider bind:values={resMod} min={-62.5} max={25} step={0.5} float />

            <div>
                <dt>Weakness Element</dt>
                <dd
                    class:high={-5 + resMod[0] <= 0}
                    class:low={-5 + resMod[0] > 0}
                    max={-5 + resMod[0] <= -12.5}
                >
                    {Math.min(Math.max(-5 + resMod[0], -12.5), 10).toFixed(1)}
                </dd>
            </div>
            <div>
                <dt>Resistant Element</dt>
                <dd
                    class:high={25 + resMod[0] <= 0}
                    class:low={25 + resMod[0] > 0}
                    max={25 + resMod[0] <= -12.5}
                >
                    {Math.min(Math.max(25 + resMod[0], -12.5), 50).toFixed(1)}
                </dd>
            </div>
            <div>
                <dt>Resistant Element (Elemental enemy)</dt>
                <dd
                    class:high={50 + resMod[0] <= 0}
                    class:low={50 + resMod[0] > 0}
                    max={50 + resMod[0] <= -12.5}
                >
                    {Math.min(Math.max(50 + resMod[0], -12.5), 50).toFixed(1)}
                </dd>
            </div>
        </dl>
    </div>

    <table style="order: 1">
        <thead>
            <tr>
                <th
                    ><span class="visually-hidden">Weapon/Skill Element</span
                    ></th
                >
                <th><small>Weapon</small> Weakness Element</th>
                <th><small>Weapon</small> Non-elemental</th>
                <th><small>Weapon</small> Neutral Element</th>
                <th><small>Weapon</small> Resistant Element</th>
                <th
                    ><small>Weapon</small> Resistant Element
                    <i>(Elemental enemy)</i></th
                >
            </tr>
        </thead>
        <tbody>
            <tr>
                <th><small>Skill</small> Weakness Element</th>
                {#each [[-5, -5, 150], [0, -5, 150], [0, -5, 150], [25, -5, 138], [50, -5, 138]] as [wep, skill, max]}
                    <td
                        class:high={getDamage(wep, skill, resMod) >= 100}
                        class:low={getDamage(wep, skill, resMod) < 100}
                        max={getDamage(wep, skill, resMod) === max}
                    >
                        {getDamage(wep, skill, resMod, viewMode)}
                    </td>
                {/each}
            </tr>
            <tr>
                <th><small>Skill</small> Non-elemental</th>
                {#each [[-5, -5, 150], [null, null, 100], [0, 0, 150], [25, 25, 110], [50, 50, 110]] as [wep, skill, max]}
                    <td
                        class:high={getDamage(wep, skill, resMod) >= 100}
                        class:low={getDamage(wep, skill, resMod) < 100}
                        max={getDamage(wep, skill, resMod) === max}
                    >
                        {getDamage(wep, skill, resMod, viewMode)}
                    </td>
                {/each}
            </tr>
            <tr>
                <th><small>Skill</small> Neutral Element</th>
                {#each [[-5, 0, 150], [null, 0, 135], [0, 0, 150], [25, 0, 138], [50, 0, 138]] as [wep, skill, max]}
                    <td
                        class:high={getDamage(wep, skill, resMod) >= 100}
                        class:low={getDamage(wep, skill, resMod) < 100}
                        max={getDamage(wep, skill, resMod) === max}
                    >
                        {getDamage(wep, skill, resMod, viewMode)}
                    </td>
                {/each}
            </tr>
            <tr>
                <th><small>Skill</small> Resistant Element</th>
                {#each [[-5, 25, 122], [null, 25, 107], [0, 25, 122], [25, 25, 110], [null, null]] as [wep, skill, max], colIndex}
                    {#if colIndex === 4}
                        <td>-</td>
                    {:else}
                        <td
                            class:high={getDamage(wep, skill, resMod) >= 100}
                            class:low={getDamage(wep, skill, resMod) < 100}
                            max={getDamage(wep, skill, resMod) === max}
                        >
                            {getDamage(wep, skill, resMod, viewMode)}
                        </td>
                    {/if}
                {/each}
            </tr>
            <tr>
                <th
                    ><small>Skill</small> Resistant Element
                    <i>(Elemental enemy)</i></th
                >
                {#each [[-5, 50, 122], [null, 50, 107], [0, 50, 122], [null, null], [50, 50, 110]] as [wep, skill, max], colIndex}
                    {#if colIndex === 3}
                        <td>-</td>
                    {:else}
                        <td
                            class:high={getDamage(wep, skill, resMod) >= 100}
                            class:low={getDamage(wep, skill, resMod) < 100}
                            max={getDamage(wep, skill, resMod) === max}
                        >
                            {getDamage(wep, skill, resMod, viewMode)}
                        </td>
                    {/if}
                {/each}
            </tr>
        </tbody>
        <caption class="visually-hidden px-4 text3 text-left">
            Neutral Element refers to elements that the target neither has
            weakness nor resistance to.
        </caption>
    </table>
</div>

<style lang="scss">
    table {
        table-layout: fixed;
        caption-side: bottom;
        font-size: var(--step-0);
    }

    th,
    td {
        padding-inline: 1rem;
    }

    small {
        display: block;
    }

    i {
        font-style: normal;
        font-size: var(--step--1);
        color: var(--text2);
    }

    th {
        font-weight: normal;
        font-size: var(--step--1);
    }

    thead small {
        color: var(--accent1);
    }

    tbody small {
        color: var(--accent2);
    }

    .high {
        background: rgba(0, 180, 45, 0.03);
        color: green;
    }

    .low {
        // background: rgba(255, 145, 0, 0.1);
        background: rgba(255, 0, 0, 0.03);
        color: red;
    }

    [max="true"] {
        // color: goldenrod;
        // font-weight: bold;

        &::after {
            content: "👍"; // ✅👍🙂😊😄😆😃🥲
            font-size: var(--step-0);
            vertical-align: middle;

            content: "(Max)";
            color: var(--text3);
            text-transform: uppercase;
            font-size: var(--step--2);
            vertical-align: auto;
        }
    }

    dl {
        // max-width: 400px;
    }

    dl > div {
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
    }

    dl dd {
        background: none !important;
        // font-weight: bold;
        color: inherit !important;
    }

    dl dd::after {
        margin-left: 0.5ch;
    }

    #eleDmgTable {
        background: var(--table-bg, var(--surface2));
    }

    .settings {
        font-size: var(--step-0);
        border-bottom-right-radius: 1rem;
        border-bottom-left-radius: 1rem;
        order: 2 !important;
        background: var(--settings-bg, var(--surface1));
    }

    :global(body:has(.ambience) #eleDmgTable) {
        --table-bg: var(--surface1);
        --settings-bg: var(--bg);
    }
</style>
