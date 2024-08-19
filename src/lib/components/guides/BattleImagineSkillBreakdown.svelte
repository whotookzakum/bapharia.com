<div class="surface2 rounded-2xl" style="font-size: var(--step-1)">
    <table class="stripes">
        <thead>
            <tr>
                <th>Case</th>
                <th>Effect</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="whitespace-nowrap">No level sync</td>
                <td>
                    <p>
                        When the Imagine is at its max level: buffs, debuffs,
                        and abnormal statuses are given a boost in
                        effectiveness. The "max level multiplier" is
                        specifically set for each status ailment, i.e. buff 1
                        may be 1.3x while buff 2 is 1.4x.
                    </p>
                    <small class="accent1"
                        >The effectiveness value is truncated (10.5% → 10%);
                        Elemental Resistance buffs/debuffs are truncated after
                        the 2nd decimal place (10.458 → 10.45).</small
                    >
                    <!-- <small class="accent1">Percentages are truncated to the nearest whole number, and flat values are truncated to the nearest decimal place.</small> -->
                </td>
            </tr>
            <tr>
                <td class="whitespace-nowrap">Limit Break +1</td>
                <td>Skill Cooldown Reduction (4%)</td>
            </tr>
            <tr>
                <td class="whitespace-nowrap">Limit Break +2</td>
                <td>Skill Cooldown Reduction (6%)</td>
            </tr>
            <tr>
                <td class="whitespace-nowrap">Limit Break +3</td>
                <td>Skill Cooldown Reduction (8%)</td>
            </tr>
            <tr>
                <td class="whitespace-nowrap">Limit Break +4</td>
                <td>Skill Cooldown Reduction (10%)</td>
            </tr>
            <tr>
                <td class="whitespace-nowrap">Limit Break +5</td>
                <td>
                    <p>Skill Cooldown Reduction (15%)</p>
                    <br />
                    <p>
                        The Imagine's damage and healing are multiplied by 1.3x,
                        and its buff/debuff effectiveness and duration are
                        multiplied by 1.5x.
                    </p>
                    <!-- (15s → 22s) -->
                    <small class="accent1"
                        >The buff/debuff duration is truncated (22.5s → 22s).</small
                    >
                    <br />
                    <br />
                    <p>
                        Some Battle Imagine gain one or more of the following
                        bonuses:
                    </p>
                    <ul>
                        <li>
                            Elemental Charge Accumulation Up (M): Increase the
                            Battle Imagine’s Elemental Charge accumulation by
                            20%
                        </li>
                        <li>
                            Down Hit Bonus (M): Increase the Battle Imagine’s
                            damage when it hits a downed enemy
                        </li>
                        <li>
                            Rear Hit Bonus (M): Increase the Battle Imagine’s
                            damage by 20% when it hits an enemy from behind
                        </li>
                        <li>Can be charged to increase skill range</li>
                        <li>
                            Can be charged to share effect with party members
                        </li>
                        <li>Increased effect duration</li>
                        <li>Increase effect range</li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<style lang="scss">
    p {
        margin: 0 !important;
    }

    td,
    th {
        padding: 1rem;
    }
</style>
