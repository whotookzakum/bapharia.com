<table>
    <thead>
        <tr>
            <th>Stat</th>
            <th>
                <img src="/UI/Icon/Class/UI_IconClass_06.png" alt="Blast Archer" width="32" height="32" />
                <img src="/UI/Icon/Class/UI_IconClass_07.png" alt="Twin Striker" width="32" height="32" />
                <img src="/UI/Icon/Class/UI_IconClass_12.png" alt="Aegis Fighter" width="32" height="32" />
                <img src="/UI/Icon/Class/UI_IconClass_19.png" alt="Heavy Smasher" width="32" height="32" />
            </th>
            <th>
                <img src="/UI/Icon/Class/UI_IconClass_11.png" alt="Spell Caster" width="32" height="32" />
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>STR</td>
            <td>
                <ul>
                    <li>ATK</li>
                    <li>DEF</li>
                    <li>Crit Damage</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>DEF</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>VIT</td>
            <td>
                <ul>
                    <li>HP</li>
                    <li>DEF</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>HP</li>
                    <li>DEF</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>DEX</td>
            <td>
                <ul>
                    <li>ATK</li>
                    <li>Crit Rate</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Crit Rate</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>INT</td>
            <td>
                <ul>
                    <li>Recovery</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>ATK</li>
                    <li>Recovery</li>
                    <li>Crit Damage</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>MND</td>
            <td>
                <ul>
                    <li>Recovery</li>
                    <li>Crit Rate</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>ATK</li>
                    <li>Recovery</li>
                    <li>Crit Rate</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

<style lang="scss">
    ul {
        gap: 0;
        margin: 0;
        list-style: none;
        padding: 0;
    }

    li {
        line-height: 1.4;
    }

    table {
        padding: 0;
        border-collapse: collapse;
    }

    thead th {
        padding: 1rem;
        background: var(--surface3);
        
        &:first-of-type {
            border-top-left-radius: 9px;
        }

        &:last-of-type {
            border-top-right-radius: 9px;
        }
    }

    td {
        padding: 0.5rem 1rem;
    }

    td:first-of-type {
        color: var(--accent);
        font-weight: bold;
    }

    tr:nth-child(even) {
        background: var(--surface3);
    }
</style>