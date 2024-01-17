<table>
    <thead>
        <tr>
            <th>Stat</th>
            <th colspan="2">Affected Parameters</th>
        </tr>
    </thead>
    <tbody>
        <tr class="section-divider">
            <th>Base Stats</th>
            <th>
                <div class="flex g-25">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_06.png"
                        alt="Blast Archer"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_07.png"
                        alt="Twin Striker"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_12.png"
                        alt="Aegis Fighter"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_19.png"
                        alt="Heavy Smasher"
                        width="32"
                        height="32"
                    />
                    <img
                        src="/UI/Icon/Class/UI_IconClass_20.png"
                        alt="Blitz Lancer"
                        width="32"
                        height="32"
                    />
                </div>
            </th>
            <th>
                <div class="flex g-25">
                    <img
                        src="/UI/Icon/Class/UI_IconClass_11.png"
                        alt="Spell Caster"
                        width="32"
                        height="32"
                    />
                </div>
            </th>
        </tr>
        <tr>
            <th>STR <i>(Strength)</i></th>
            <td>Attack, Defense, Crit Damage</td>
            <td>Defense</td>
        </tr>
        <tr>
            <th>VIT <i>(Vitality)</i></th>
            <td>HP, Defense</td>
            <td>HP, Defense</td>
        </tr>
        <tr>
            <th>DEX <i>(Dexterity)</i></th>
            <td>Attack, Crit Rate</td>
            <td>Crit Rate</td>
        </tr>
        <tr>
            <th>INT <i>(Intelligence)</i></th>
            <td>Recovery</td>
            <td>Attack, Recovery, Crit Damage</td>
        </tr>
        <tr>
            <th>MND <i>(Mind)</i></th>
            <td>Recovery, Crit Rate</td>
            <td>Attack, Recovery, Crit Rate</td>
        </tr>
        <tr class="section-divider">
            <th colspan="3">Attack Stats</th>
        </tr>
        <tr>
            <th>ATK <i>(Attack)</i></th>
            <td colspan="2">Influences damage output</td>
        </tr>
        <tr>
            <th>Crit Rate</th>
            <td colspan="2">Chance of a critical hit</td>
        </tr>
        <tr>
            <th>Crit Damage</th>
            <td colspan="2">Amount of damage increased during critical hits</td>
        </tr>
        <tr class="section-divider">
            <th colspan="3">Defense Stats</th>
        </tr>
        <tr>
            <th>DEF <i>(Defense)</i></th>
            <td>Influences damage taken</td>
            <td colspan="2"></td>
        </tr>
        <tr>
            <th>Recovery</th>
            <td colspan="2">Influences effectiveness of HP recovery effects</td>
        </tr>
        <tr>
            <th>Elemental Resistance</th>
            <td colspan="2">Influences elemental damage and elemental charge received</td>
        </tr>
        <tr class="section-divider">
            <th colspan="3">Other</th>
        </tr>
        <tr>
            <th>HP <i>(Hit Points)</i></th>
            <td colspan="2">Amount of damage you can take before dying.</td>
        </tr>
        <tr>
            <th>ST <i>(Stamina)</i></th>
            <td colspan="2">Consumed when performing certain actions</td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    thead th {
        background: var(--surface3);

        &:first-of-type {
            border-top-left-radius: 1rem;
        }

        &:last-of-type {
            border-top-right-radius: 1rem;
        }
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

    .section-divider {
        font-weight: bold;
        background: var(--surface2);

        .flex {
            margin: -0.5rem 0 !important;
        }

        th {
            color: var(--text2);
        }
    }
</style>
