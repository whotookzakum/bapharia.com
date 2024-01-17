<script>
    let tableType = "formulas";
</script>

<div class="box flex g-100">
    <label>
        <input type="radio" value="formulas" bind:group={tableType} />
        Formula Table
    </label>
    <label>
        <input type="radio" value="statMultipliers" bind:group={tableType} />
        Stat Multiplier Table
    </label>
</div>

{#if tableType === "formulas"}
    <table>
        <thead>
            <tr class="first-row">
                <th>Stat</th>
                <th>Physical Classes</th>
                <th>Magic Classes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Total ATK</th>
                <td>ATK + ( 0.6 × STR ) + ( 0.4 × DEX )</td>
                <td>ATK + ( 0.6 × INT ) + ( 0.4 × MND ) </td>
            </tr>
            <tr>
                <th>Total Crit Rate</th>
                <td colspan="2" style="text-align: center"
                    >Crit Rate + [ 0.2 × ( DEX + MND ) ] <sup
                        style="font-size: inherit; color: inherit;">0.3</sup
                    ></td
                >
            </tr>
            <tr>
                <th>Total Crit Damage</th>
                <td>Crit Damage + ( 0.04 × STR )</td>
                <td>Crit Damage + ( 0.04 × INT )</td>
            </tr>
            <tr>
                <th>Total DEF</th>
                <td colspan="2" style="text-align: center"
                    >DEF + ( 0.4 × STR ) + ( 0.6 × VIT )</td
                >
            </tr>
            <tr>
                <th>Total Recovery</th>
                <td colspan="2" style="text-align: center"
                    >Recovery + [ 0.4 × ( INT + MND ) ]</td
                >
            </tr>
            <tr>
                <th>Total HP</th>
                <td colspan="2" style="text-align: center"
                    >HP + ( 0.6 × VIT )</td
                >
            </tr>
        </tbody>
    </table>
{:else}
    <table>
        <thead>
            <tr class="first-row">
                <th>Stat</th>
                <th>STR</th>
                <th>VIT</th>
                <th>DEX</th>
                <th>INT</th>
                <th>MND</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>ATK <i>(Physical)</i></th>
                <td>x0.6</td>
                <td>-</td>
                <td>x0.4</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th>ATK <i>(Magic)</i></th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>x0.6</td>
                <td>x0.4</td>
            </tr>
            <tr>
                <th>Crit Rate</th>
                <td>-</td>
                <td>-</td>
                <td>x0.2<strong>※</strong></td>
                <td>-</td>
                <td>x0.2<strong>※</strong></td>
            </tr>
            <tr>
                <th>Crit Damage <i>(Physical)</i></th>
                <td>x0.04</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th>Crit Damage <i>(Magic)</i></th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>x0.04</td>
                <td>-</td>
            </tr>
            <tr>
                <th>DEF</th>
                <td>x0.4</td>
                <td>x0.6</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th>Recovery</th>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>x0.4</td>
                <td>x0.4</td>
            </tr>
            <tr>
                <th>HP</th>
                <td>-</td>
                <td>x0.6</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
        <caption style="text-align: right">
            <strong>※ Check the full formula for exact values</strong>
        </caption>
    </table>
{/if}

<style lang="scss">
    .first-row th {
        &:first-of-type {
            border-top-left-radius: 1rem;
        }

        &:last-of-type {
            border-top-right-radius: 1rem;
        }
    }

    thead th {
        background: var(--surface3);
    }

    tbody {
        th {
            font-weight: bold;
            color: var(--accent);
        }

        i {
            color: var(--text2);
            font-size: var(--step--1);
            font-weight: normal;
            font-style: normal;
        }
    }
</style>
